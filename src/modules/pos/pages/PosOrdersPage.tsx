import { useMemo, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Badge, Button, Card, Input } from "@/components/ui";
import { PageHeader } from "@/components/navigation/PageHeader";
import { PermissionWrapper } from "@/components/navigation/PermissionWrapper";
import { PageEmptyState } from "@/components/feedback/PageEmptyState";
import { PageErrorState } from "@/components/feedback/PageErrorState";
import { useToast } from "@/hooks/useToast";
import { useActiveOutlet } from "@/hooks/useActiveOutlet";
import { usePermission } from "@/hooks/usePermission";
import { usePosCartStore } from "@/modules/pos/hooks/usePosCartStore";
import { posService } from "@/modules/pos/services/pos.service";
import { PosCartPanel } from "@/modules/pos/components/PosCartPanel";
import { PosProductConfiguratorModal } from "@/modules/pos/components/PosProductConfiguratorModal";
import type { Customer } from "@/types/customer";
import type { Product } from "@/types/product";

const formatCurrency = (value: number) =>
  new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(Number(value || 0));

const getOutletPrice = (product: Product, outletId: number | null) => {
  if (!outletId) {
    return Number(product.base_price ?? 0);
  }

  const activePriceRow = product.prices?.find(
    (item) => Number(item.outlet_id) === Number(outletId) && Boolean(item.is_active ?? true)
  );

  return Number(activePriceRow?.price ?? product.base_price ?? 0);
};

const isProductAvailableForOutlet = (product: Product, outletId: number | null) => {
  if (!product.is_active) {
    return false;
  }

  if (!outletId) {
    return true;
  }

  const status = product.outlet_statuses?.find(
    (item) => Number(item.outlet_id) === Number(outletId)
  );

  if (!status) {
    return true;
  }

  if (status.is_hidden) {
    return false;
  }

  if (status.is_available === false) {
    return false;
  }

  return true;
};

export default function PosOrdersPage() {
  const toast = useToast();
  const { activeOutlet, activeOutletId } = useActiveOutlet();
  const canViewCustomers = usePermission("customers.view");

  const {
    items,
    customer,
    orderChannel,
    setOrderChannel,
    setCustomer,
    addItem,
    updateQty,
    updateNotes,
    removeItem,
    clearCart,
    holdCart,
    restoreHeldCart,
    discardHeldCart,
  } = usePosCartStore();

  const [search, setSearch] = useState("");
  const [activeCategoryId, setActiveCategoryId] = useState<number | "all">("all");
  const [customerSearch, setCustomerSearch] = useState("");
  const [configProduct, setConfigProduct] = useState<Product | null>(null);

  const categoriesQuery = useQuery({
    queryKey: ["pos-product-categories"],
    queryFn: () => posService.getProductCategories({ per_page: 100, is_active: true }),
  });

  const productsQuery = useQuery({
    queryKey: ["pos-products", search],
    queryFn: () =>
      posService.getProducts({
        per_page: 200,
        search,
        is_active: true,
      }),
  });

  const customersQuery = useQuery({
    queryKey: ["pos-customers", customerSearch],
    queryFn: () =>
      posService.getCustomers({
        per_page: 10,
        search: customerSearch,
      }),
    enabled: canViewCustomers && customerSearch.trim().length >= 2,
  });

  const categoryOptions = categoriesQuery.data?.items ?? [];
  const rawProducts = productsQuery.data?.items ?? [];
  const customerOptions = customersQuery.data?.items ?? [];

  const visibleProducts = useMemo(() => {
    return rawProducts
      .filter((product) => isProductAvailableForOutlet(product, activeOutletId))
      .map((product) => ({
        ...product,
        effective_price: getOutletPrice(product, activeOutletId),
      }))
      .filter((product) =>
        activeCategoryId === "all"
          ? true
          : Number(product.product_category_id) === Number(activeCategoryId)
      );
  }, [activeCategoryId, activeOutletId, rawProducts]);

  const categoryTabs = useMemo(() => {
    const counts = new Map<number, number>();

    rawProducts.forEach((product) => {
      if (!isProductAvailableForOutlet(product, activeOutletId)) return;

      const current = counts.get(product.product_category_id) ?? 0;
      counts.set(product.product_category_id, current + 1);
    });

    return categoryOptions
      .filter((category) => (counts.get(category.id) ?? 0) > 0)
      .map((category) => ({
        id: category.id,
        name: category.name,
        count: counts.get(category.id) ?? 0,
      }));
  }, [activeOutletId, categoryOptions, rawProducts]);

  const handleOpenConfigurator = (product: Product) => {
    setConfigProduct(product);
  };

  const handleAddToCart = (payload: {
    product: Product;
    qty: number;
    base_unit_price: number;
    notes: string;
    selected_variants: Array<{
      group_name: string;
      option_name: string;
      price_adjustment: number;
    }>;
    selected_modifiers: Array<{
      group_name: string;
      option_name: string;
      qty: number;
      price: number;
    }>;
  }) => {
    addItem({
      product_id: payload.product.id,
      product_name: payload.product.name,
      product_type: payload.product.product_type,
      image_url: payload.product.image_url ?? null,
      qty: payload.qty,
      base_unit_price: payload.base_unit_price,
      notes: payload.notes,
      selected_variants: payload.selected_variants,
      selected_modifiers: payload.selected_modifiers,
    });

    setConfigProduct(null);
    toast.success("Produk ditambahkan", `${payload.product.name} masuk ke cart.`);
  };

  const handlePickCustomer = (pickedCustomer: Customer) => {
    setCustomer(pickedCustomer);
    setCustomerSearch("");
    toast.success("Customer dipilih", pickedCustomer.name);
  };

  const handleHoldOrder = () => {
    if (!items.length) {
      toast.warning("Cart kosong", "Tidak ada item yang bisa di-hold.");
      return;
    }

    holdCart();
    toast.success("Order di-hold", "Cart sementara berhasil disimpan.");
  };

  const handleRestoreHeld = () => {
    const restored = restoreHeldCart();

    if (!restored) {
      toast.warning("Held order tidak ada", "Belum ada held order yang tersimpan.");
      return;
    }

    toast.success("Held order dimuat", "Cart sementara berhasil dipulihkan.");
  };

  const handleDiscardHeld = () => {
    discardHeldCart();
    toast.success("Held order dihapus");
  };

  const handleClearCart = () => {
    clearCart();
    toast.success("Cart dibersihkan");
  };

  const handleSubmitOrder = () => {
    toast.warning(
      "Backend order belum tersedia",
      "UI POS dasar sudah siap. Integrasi submit order akan dilanjutkan saat endpoint orders tersedia."
    );
  };

  return (
    <PermissionWrapper permission="products.view">
      <div className="space-y-4">
        <PageHeader
          title="POS Kasir Dasar"
          description="Katalog cepat, cart interaktif, customer quick assign, dan konfigurasi variant/modifier."
          actions={
            <div className="flex flex-wrap gap-2">
              <Badge variant="info">
                Outlet: {activeOutlet?.outlet_name ?? "Belum dipilih"}
              </Badge>
              <Badge variant="warning">Mode: SCAFFOLD Submit Order</Badge>
            </div>
          }
        />

        {!activeOutletId ? (
          <Card>
            <div className="rounded-2xl border border-amber-200 bg-amber-50 px-4 py-4 text-sm text-amber-800">
              User ini belum memiliki active outlet. Pilih default outlet dulu dari data user.
            </div>
          </Card>
        ) : null}

        <div className="grid gap-4 xl:grid-cols-[1.6fr_0.9fr]">
          <div className="space-y-4">
            <Card>
              <div className="grid gap-3 md:grid-cols-[1fr_auto]">
                <Input
                  placeholder="Cari nama, sku, code, atau slug produk..."
                  value={search}
                  onChange={(event) => setSearch(event.target.value)}
                />

                <Button variant="outline" onClick={() => setSearch("")}>
                  Reset Search
                </Button>
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                <button
                  type="button"
                  onClick={() => setActiveCategoryId("all")}
                  className={[
                    "rounded-xl px-4 py-2 text-sm font-medium transition",
                    activeCategoryId === "all"
                      ? "bg-slate-900 text-white"
                      : "border border-slate-300 bg-white text-slate-700 hover:bg-slate-50",
                  ].join(" ")}
                >
                  Semua
                </button>

                {categoryTabs.map((category) => (
                  <button
                    key={category.id}
                    type="button"
                    onClick={() => setActiveCategoryId(category.id)}
                    className={[
                      "rounded-xl px-4 py-2 text-sm font-medium transition",
                      activeCategoryId === category.id
                        ? "bg-slate-900 text-white"
                        : "border border-slate-300 bg-white text-slate-700 hover:bg-slate-50",
                    ].join(" ")}
                  >
                    {category.name} ({category.count})
                  </button>
                ))}
              </div>
            </Card>

            {productsQuery.isLoading ? (
              <Card>Memuat katalog produk...</Card>
            ) : productsQuery.isError ? (
              <PageErrorState onRetry={() => void productsQuery.refetch()} />
            ) : !visibleProducts.length ? (
              <PageEmptyState title="Produk POS tidak ditemukan" />
            ) : (
              <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                {visibleProducts.map((product) => (
                  <Card
                    key={product.id}
                    title={product.name}
                    description={product.category?.name ?? "-"}
                    actions={
                      <Badge variant={product.product_type === "bundle" ? "warning" : "info"}>
                        {product.product_type}
                      </Badge>
                    }
                  >
                    <div className="space-y-2 text-sm text-slate-600">
                      <div className="font-semibold text-slate-900">
                        {formatCurrency(product.effective_price)}
                      </div>
                      <div>{product.description?.trim() || "Tanpa deskripsi produk."}</div>

                      {(product.variant_groups?.length ?? 0) > 0 ? (
                        <div>
                          Variant: {product.variant_groups?.length} group
                        </div>
                      ) : null}

                      {(product.modifier_groups?.length ?? 0) > 0 ? (
                        <div>
                          Modifier: {product.modifier_groups?.length} group
                        </div>
                      ) : null}
                    </div>

                    <div className="mt-4">
                      <Button onClick={() => handleOpenConfigurator(product)}>
                        Tambah ke Cart
                      </Button>
                    </div>
                  </Card>
                ))}
              </div>
            )}
          </div>

          <PosCartPanel
            items={items}
            customer={customer}
            customerSearch={customerSearch}
            onCustomerSearchChange={setCustomerSearch}
            customerResults={customerOptions}
            canSearchCustomer={canViewCustomers}
            loadingCustomers={customersQuery.isFetching}
            orderChannel={orderChannel}
            onOrderChannelChange={setOrderChannel}
            onPickCustomer={handlePickCustomer}
            onClearCustomer={() => setCustomer(null)}
            onUpdateQty={updateQty}
            onUpdateNotes={updateNotes}
            onRemoveItem={removeItem}
            onClearCart={handleClearCart}
            onHoldOrder={handleHoldOrder}
            onRestoreHeldOrder={handleRestoreHeld}
            onDiscardHeldOrder={handleDiscardHeld}
            hasHeldOrder={Boolean(usePosCartStore.getState().heldCartMeta)}
            onSubmitOrder={handleSubmitOrder}
          />
        </div>

        <PosProductConfiguratorModal
          open={Boolean(configProduct)}
          product={configProduct}
          outletPrice={configProduct ? getOutletPrice(configProduct, activeOutletId) : 0}
          onClose={() => setConfigProduct(null)}
          onSubmit={handleAddToCart}
        />
      </div>
    </PermissionWrapper>
  );
}