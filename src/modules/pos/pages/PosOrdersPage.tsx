import { useMemo, useState } from "react";
import { useMutation, useQuery } from "@tanstack/react-query";
import { Badge, Button, Card, Input } from "@/components/ui";
import { PageHeader } from "@/components/navigation/PageHeader";
import { PermissionWrapper } from "@/components/navigation/PermissionWrapper";
import { PageEmptyState } from "@/components/feedback/PageEmptyState";
import { PageErrorState } from "@/components/feedback/PageErrorState";
import { useToast } from "@/hooks/useToast";
import { useActiveOutlet } from "@/hooks/useActiveOutlet";
import { usePermission } from "@/hooks/usePermission";
import { useAuthStore } from "@/modules/auth/store/auth.store";
import { usePosCartStore } from "@/modules/pos/hooks/usePosCartStore";
import { posService } from "@/modules/pos/services/pos.service";
import { parseApiError } from "@/services/api/error-parser";
import { PosCartPanel } from "@/modules/pos/components/PosCartPanel";
import { PosProductConfiguratorModal } from "@/modules/pos/components/PosProductConfiguratorModal";
import { PosPaymentModal } from "@/modules/pos/components/PosPaymentModal";
import { PosCheckoutSuccessModal } from "@/modules/pos/components/PosCheckoutSuccessModal";
import type { Customer } from "@/types/customer";
import type { Product } from "@/types/product";
import type {
  PosCheckoutTotals,
  PosPaymentSplitRow,
  PosReceiptSnapshot,
  PosVoucher,
} from "@/modules/pos/types/pos";

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

const getCartItemUnitPrice = (item: {
  base_unit_price: number;
  selected_variants?: Array<{ price_adjustment: number }>;
  selected_modifiers?: Array<{ qty: number; price: number }>;
}) => {
  const variantsTotal = (item.selected_variants ?? []).reduce(
    (sum, entry) => sum + Number(entry.price_adjustment || 0),
    0
  );

  const modifiersTotal = (item.selected_modifiers ?? []).reduce(
    (sum, entry) => sum + Number(entry.price || 0) * Number(entry.qty || 0),
    0
  );

  return Number(item.base_unit_price || 0) + variantsTotal + modifiersTotal;
};

const printReceipt = (receipt: PosReceiptSnapshot) => {
  const formatMoney = (value: number) =>
    new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      maximumFractionDigits: 0,
    }).format(Number(value || 0));

  const itemRows = receipt.items
    .map((item) => {
      const variantRows = (item.variants ?? [])
        .map(
          (entry) =>
            `<div style="font-size:11px;color:#444;">Variant: ${entry.group_name} - ${entry.option_name}</div>`
        )
        .join("");

      const modifierRows = (item.modifiers ?? [])
        .map(
          (entry) =>
            `<div style="font-size:11px;color:#444;">Modifier: ${entry.group_name} - ${entry.option_name} x${entry.qty}</div>`
        )
        .join("");

      const noteRow = item.notes?.trim()
        ? `<div style="font-size:11px;color:#444;">Catatan: ${item.notes}</div>`
        : "";

      return `
        <div style="padding:8px 0;border-bottom:1px dashed #999;">
          <div style="display:flex;justify-content:space-between;gap:8px;">
            <div style="font-weight:600;">${item.product_name} x${item.qty}</div>
            <div style="font-weight:600;">${formatMoney(item.line_total)}</div>
          </div>
          ${variantRows}
          ${modifierRows}
          ${noteRow}
        </div>
      `;
    })
    .join("");

  const paymentRows = receipt.payments
    .map(
      (payment) => `
        <div style="display:flex;justify-content:space-between;gap:8px;margin-top:4px;">
          <span>${payment.payment_method_code.toUpperCase()}</span>
          <span>${formatMoney(payment.amount)}</span>
        </div>
        ${payment.reference_number?.trim()
          ? `<div style="font-size:11px;color:#444;">Ref: ${payment.reference_number}</div>`
          : ""
        }
      `
    )
    .join("");

  const html = `
    <html>
      <head>
        <title>${receipt.order_number}</title>
      </head>
      <body style="font-family:Arial,sans-serif;padding:16px;color:#111;">
        <div style="max-width:320px;margin:0 auto;">
          <div style="text-align:center;">
            <div style="font-size:18px;font-weight:700;">Chicken Alibaba</div>
            <div style="font-size:12px;">${receipt.outlet_name}</div>
            <div style="font-size:12px;">Order #${receipt.order_number}</div>
            <div style="font-size:12px;">${new Date(receipt.ordered_at).toLocaleString("id-ID")}</div>
          </div>

          <div style="margin-top:12px;font-size:12px;">
            <div>Kasir: ${receipt.cashier_name}</div>
            <div>Channel: ${receipt.order_channel}</div>
            <div>Customer: ${receipt.customer_name ?? "Tanpa customer"}</div>
            ${receipt.customer_phone
      ? `<div>Phone: ${receipt.customer_phone}</div>`
      : ""
    }
            ${receipt.voucher_code
      ? `<div>Voucher: ${receipt.voucher_code}</div>`
      : ""
    }
          </div>

          <div style="margin-top:12px;">${itemRows}</div>

          <div style="margin-top:12px;font-size:12px;">
            <div style="display:flex;justify-content:space-between;"><span>Subtotal</span><span>${formatMoney(receipt.subtotal)}</span></div>
            <div style="display:flex;justify-content:space-between;"><span>Diskon</span><span>- ${formatMoney(receipt.discount_amount)}</span></div>
            <div style="display:flex;justify-content:space-between;"><span>Pajak</span><span>${formatMoney(receipt.tax_amount)}</span></div>
            <div style="display:flex;justify-content:space-between;"><span>Service</span><span>${formatMoney(receipt.service_charge_amount)}</span></div>
            <div style="display:flex;justify-content:space-between;font-weight:700;border-top:1px solid #111;padding-top:6px;margin-top:6px;"><span>Total</span><span>${formatMoney(receipt.grand_total)}</span></div>
          </div>

          <div style="margin-top:12px;font-size:12px;">
            ${paymentRows}
          </div>

          <div style="margin-top:12px;font-size:12px;">
            <div style="display:flex;justify-content:space-between;"><span>Dibayar</span><span>${formatMoney(receipt.paid_total)}</span></div>
            <div style="display:flex;justify-content:space-between;"><span>Kembalian</span><span>${formatMoney(receipt.change_amount)}</span></div>
          </div>

          <div style="margin-top:16px;text-align:center;font-size:11px;">
            Terima kasih telah berbelanja.
          </div>
        </div>
      </body>
    </html>
  `;

  const win = window.open("", "_blank", "width=420,height=720");

  if (!win) {
    return false;
  }

  win.document.open();
  win.document.write(html);
  win.document.close();
  win.focus();
  win.print();

  return true;
};

export default function PosOrdersPage() {
  const toast = useToast();
  const user = useAuthStore((state) => state.user);
  const { activeOutlet, activeOutletId } = useActiveOutlet();
  const currentOutletName =
    activeOutlet?.outlet_name ??
    (activeOutlet?.outlet_id ? `Outlet #${activeOutlet.outlet_id}` : "Belum dipilih");
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
  const [paymentOpen, setPaymentOpen] = useState(false);
  const [successOpen, setSuccessOpen] = useState(false);
  const [voucherCode, setVoucherCode] = useState("");
  const [appliedVoucher, setAppliedVoucher] = useState<PosVoucher | null>(null);
  const [voucherDiscount, setVoucherDiscount] = useState(0);
  const [latestReceipt, setLatestReceipt] = useState<PosReceiptSnapshot | null>(null);

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

  const vouchersQuery = useQuery({
    queryKey: ["pos-vouchers"],
    queryFn: () =>
      posService.getVouchers({
        per_page: 100,
        is_active: true,
      }),
    retry: 0,
  });

  const paymentMethodsQuery = useQuery({
    queryKey: ["pos-payment-methods"],
    queryFn: () => posService.getPaymentMethods({ per_page: 100, is_active: true }),
  });

  const openShiftQuery = useQuery({
    queryKey: ["pos-open-cashier-shift", activeOutletId],
    queryFn: () => posService.getOpenCashierShift(Number(activeOutletId)),
    enabled: Boolean(activeOutletId),
  });

  const checkoutMutation = useMutation({
    mutationFn: posService.submitBackendCheckout,
    onSuccess: (result) => {
      setLatestReceipt(result.receipt);
      setPaymentOpen(false);
      setSuccessOpen(true);

      clearCart();
      setVoucherCode("");
      setAppliedVoucher(null);
      setVoucherDiscount(0);

      toast.success("Checkout selesai", result.message);
    },
    onError: (error) => {
      toast.error("Checkout gagal", parseApiError(error));
    },
  });

  const paymentMethods = paymentMethodsQuery.data?.items ?? [];

  const categoryOptions = categoriesQuery.data?.items ?? [];
  const rawProducts = productsQuery.data?.items ?? [];
  const customerOptions = customersQuery.data?.items ?? [];
  const availableVouchers = vouchersQuery.data?.items ?? [];

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

  const subtotal = useMemo(() => {
    return items.reduce((sum, item) => {
      return sum + getCartItemUnitPrice(item) * Number(item.qty || 0);
    }, 0);
  }, [items]);

  const totalQty = useMemo(() => {
    return items.reduce((sum, item) => sum + Number(item.qty || 0), 0);
  }, [items]);

  const taxPercent = 0;
  const serviceChargePercent = 0;

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
    setVoucherCode("");
    setAppliedVoucher(null);
    setVoucherDiscount(0);
    toast.success("Cart dibersihkan");
  };

  const handleSubmitOrder = () => {
    if (!activeOutletId) {
      toast.warning(
        "Outlet belum aktif",
        "Pilih default outlet dulu dari data user sebelum checkout."
      );
      return;
    }

    if (!items.length) {
      toast.warning("Cart kosong", "Tambahkan produk dulu sebelum checkout.");
      return;
    }

    setPaymentOpen(true);
  };

  const handleApplyVoucher = async (code: string) => {
    if (!code.trim()) {
      toast.warning("Voucher kosong", "Masukkan kode voucher terlebih dahulu.");
      return;
    }

    if (vouchersQuery.isError) {
      toast.warning(
        "Voucher belum bisa diverifikasi dari backend",
        "Endpoint voucher tersedia, tetapi akses user saat ini mungkin belum diizinkan."
      );
      return;
    }

    const result = posService.evaluateVoucher({
      vouchers: availableVouchers,
      voucherCode: code,
      subtotal,
    });

    if (!result.valid || !result.voucher) {
      setAppliedVoucher(null);
      setVoucherDiscount(0);
      toast.warning("Voucher tidak valid", result.message);
      return;
    }

    setAppliedVoucher(result.voucher);
    setVoucherCode(result.voucher.code);
    setVoucherDiscount(result.discount_amount);
    toast.success("Voucher diterapkan", result.message);
  };

  const handleRemoveVoucher = () => {
    setAppliedVoucher(null);
    setVoucherCode("");
    setVoucherDiscount(0);
    toast.success("Voucher dihapus");
  };

  const handleConfirmCheckout = (payload: {
    payments: PosPaymentSplitRow[];
    totals: PosCheckoutTotals;
  }) => {
    if (!activeOutletId) {
      toast.warning("Outlet belum aktif");
      return;
    }

    if (!items.length) {
      toast.warning("Cart kosong", "Tambahkan produk dulu sebelum checkout.");
      return;
    }

    if (!paymentMethods.length) {
      toast.warning(
        "Metode pembayaran kosong",
        "Data metode pembayaran belum tersedia dari backend."
      );
      return;
    }

    const hasInvalidReference = payload.payments.some((payment) => {
      const method = paymentMethods.find(
        (entry) => entry.code === payment.payment_method_code
      );

      if (!method?.requires_reference) {
        return false;
      }

      return !payment.reference_number.trim();
    });

    if (hasInvalidReference) {
      toast.warning(
        "Reference number wajib",
        "QRIS, transfer, atau e-wallet harus memiliki reference number."
      );
      return;
    }

    const hasCashPayment = payload.payments.some((payment) => {
      const method = paymentMethods.find(
        (entry) => entry.code === payment.payment_method_code
      );

      return method?.type === "cash" || method?.code === "cash";
    });

    if (hasCashPayment && !openShiftQuery.data?.id) {
      toast.warning(
        "Shift kasir belum dibuka",
        "Pembayaran tunai wajib memakai shift kasir dengan status open."
      );
      return;
    }

    checkoutMutation.mutate({
      outlet_id: Number(activeOutletId),
      cashier_shift_id: openShiftQuery.data?.id ?? null,
      customer_id: customer?.id ?? null,
      customer_name: customer?.name ?? null,
      customer_phone: customer?.phone ?? null,
      outlet_name: currentOutletName,
      cashier_name: user?.name ?? "Kasir",
      order_channel: orderChannel,
      voucher_code: appliedVoucher?.code ?? null,
      totals: payload.totals,
      payments: payload.payments,
      payment_methods: paymentMethods,
      items,
    });
  };

  const handleReprintReceipt = (receipt: PosReceiptSnapshot) => {
    const printed = printReceipt(receipt);

    if (!printed) {
      toast.warning(
        "Print gagal dibuka",
        "Popup browser tertutup. Izinkan popup untuk print receipt."
      );
      return;
    }

    toast.success("Receipt dibuka", "Preview print receipt sudah dikirim ke browser.");
  };

  return (
    <PermissionWrapper permission="products.view">
      <div className="space-y-4">
        <PageHeader
          title="POS Checkout & Payment"
          description="Katalog cepat, cart interaktif, voucher, split payment, dan receipt print."
          actions={
            <div className="flex flex-wrap gap-2">
              <Badge variant={openShiftQuery.data?.id ? "success" : "danger"}>
                Shift: {openShiftQuery.data?.id ? "Open" : "Belum Open"}
              </Badge>

              <Badge variant="success">
                Mode: Backend Orders + Payments
              </Badge>
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
                        <div>Variant: {product.variant_groups?.length} group</div>
                      ) : null}

                      {(product.modifier_groups?.length ?? 0) > 0 ? (
                        <div>Modifier: {product.modifier_groups?.length} group</div>
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
            subtotal={subtotal}
            totalQty={totalQty}
          />
        </div>

        <PosProductConfiguratorModal
          open={Boolean(configProduct)}
          product={configProduct}
          outletPrice={configProduct ? getOutletPrice(configProduct, activeOutletId) : 0}
          onClose={() => setConfigProduct(null)}
          onSubmit={handleAddToCart}
        />

        <PosPaymentModal
          open={paymentOpen}
          onClose={() => setPaymentOpen(false)}
          items={items}
          customer={customer}
          outletName={currentOutletName}
          cashierName={user?.name ?? "Kasir"}
          paymentMethods={paymentMethods}
          availableVouchers={availableVouchers}
          voucherLoading={vouchersQuery.isLoading}
          orderChannel={orderChannel}
          subtotal={subtotal}
          taxPercent={taxPercent}
          serviceChargePercent={serviceChargePercent}
          onApplyVoucher={handleApplyVoucher}
          voucherCode={voucherCode}
          voucherDiscount={voucherDiscount}
          appliedVoucher={appliedVoucher}
          onVoucherCodeChange={setVoucherCode}
          onRemoveVoucher={handleRemoveVoucher}
          confirming={checkoutMutation.isPending}
          onConfirm={handleConfirmCheckout}
        />

        <PosCheckoutSuccessModal
          open={successOpen}
          receipt={latestReceipt}
          onClose={() => setSuccessOpen(false)}
          onReprint={handleReprintReceipt}
        />
      </div>
    </PermissionWrapper>
  );
}