import { useMemo, useState } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  catalogService,
  type ProductBundleItemPayload,
  type ProductModifierGroupPayload,
  type ProductOutletStatusPayload,
  type ProductPayload,
  type ProductPricePayload,
  type ProductVariantGroupPayload,
} from "@/modules/admin/services/catalog.service";
import { masterDataService } from "@/modules/admin/services/master-data.service";
import { PageHeader } from "@/components/navigation/PageHeader";
import { PermissionWrapper } from "@/components/navigation/PermissionWrapper";
import { PageErrorState } from "@/components/feedback/PageErrorState";
import { PageEmptyState } from "@/components/feedback/PageEmptyState";
import { Badge, Button, Card, Checkbox, Input, Modal } from "@/components/ui";
import { parseApiError } from "@/services/api/error-parser";
import { useToast } from "@/hooks/useToast";
import type { Product } from "@/types/product";

const initialForm: ProductPayload = {
  product_category_id: 0,
  sku: "",
  code: "",
  name: "",
  slug: "",
  description: "",
  image_url: "",
  base_price: 0,
  product_type: "single",
  is_active: true,
  is_featured: false,
  track_recipe: true,
  track_stock_direct: false,
  prices: [],
  outlet_statuses: [],
  variant_groups: [],
  modifier_groups: [],
  bundle_items: [],
};

const createEmptyPrice = (): ProductPricePayload => ({
  outlet_id: 0,
  price: 0,
  dine_in_price: null,
  takeaway_price: null,
  delivery_price: null,
  starts_at: null,
  ends_at: null,
  is_active: true,
});

const createEmptyOutletStatus = (): ProductOutletStatusPayload => ({
  outlet_id: 0,
  is_available: true,
  is_hidden: false,
  daily_limit: null,
  notes: "",
});

const createEmptyVariantGroup = (): ProductVariantGroupPayload => ({
  name: "",
  selection_type: "single",
  is_required: true,
  sort_order: 0,
  options: [
    {
      name: "",
      price_adjustment: 0,
      sort_order: 0,
      is_active: true,
    },
  ],
});

const createEmptyModifierGroup = (): ProductModifierGroupPayload => ({
  name: "",
  min_select: 0,
  max_select: 1,
  is_required: false,
  sort_order: 0,
  options: [
    {
      name: "",
      price: 0,
      sort_order: 0,
      is_active: true,
    },
  ],
});

const createEmptyBundleItem = (): ProductBundleItemPayload => ({
  bundled_product_id: 0,
  qty: 1,
});

export default function ProductsPage() {
  const toast = useToast();
  const queryClient = useQueryClient();

  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [categoryFilter, setCategoryFilter] = useState<number | "">("");
  const [typeFilter, setTypeFilter] = useState<"single" | "bundle" | "">("");
  const [statusFilter, setStatusFilter] = useState<boolean | "">("");
  const [open, setOpen] = useState(false);
  const [editing, setEditing] = useState<Product | null>(null);
  const [form, setForm] = useState<ProductPayload>(initialForm);

  const categoriesQuery = useQuery({
    queryKey: ["admin-product-category-options"],
    queryFn: () => catalogService.getProductCategories({ per_page: 100 }),
  });

  const outletsQuery = useQuery({
    queryKey: ["admin-product-outlet-options"],
    queryFn: () => masterDataService.getOutlets({ per_page: 100 }),
  });

  const productsQuery = useQuery({
    queryKey: ["admin-products", page, search, categoryFilter, typeFilter, statusFilter],
    queryFn: () =>
      catalogService.getProducts({
        page,
        per_page: 10,
        search,
        product_category_id: categoryFilter,
        product_type: typeFilter,
        is_active: statusFilter,
      }),
  });

  const saveMutation = useMutation({
    mutationFn: (payload: ProductPayload) =>
      editing ? catalogService.updateProduct(editing.id, payload) : catalogService.createProduct(payload),
    onSuccess: (response) => {
      toast.success(response.message);
      setOpen(false);
      setEditing(null);
      setForm(initialForm);
      void queryClient.invalidateQueries({ queryKey: ["admin-products"] });
    },
    onError: (error) => toast.error("Gagal menyimpan produk", parseApiError(error)),
  });

  const deleteMutation = useMutation({
    mutationFn: (id: number) => catalogService.deleteProduct(id),
    onSuccess: (response) => {
      toast.success(response.message);
      void queryClient.invalidateQueries({ queryKey: ["admin-products"] });
    },
    onError: (error) => toast.error("Gagal menghapus produk", parseApiError(error)),
  });

  const categoryOptions = categoriesQuery.data?.items ?? [];
  const outletOptions = outletsQuery.data?.items ?? [];
  const products = productsQuery.data?.items ?? [];
  const meta = productsQuery.data?.meta;
  const totalPages = Number(meta?.last_page ?? 1);

  const bundleCandidateProducts = useMemo(() => {
    return products.filter((item) => item.id !== editing?.id);
  }, [products, editing?.id]);

  const openCreate = () => {
    setEditing(null);
    setForm(initialForm);
    setOpen(true);
  };

  const openEdit = (product: Product) => {
    setEditing(product);
    setForm({
      product_category_id: product.product_category_id,
      sku: product.sku ?? "",
      code: product.code ?? "",
      name: product.name,
      slug: product.slug ?? "",
      description: product.description ?? "",
      image_url: product.image_url ?? "",
      base_price: Number(product.base_price ?? 0),
      product_type: product.product_type,
      is_active: product.is_active,
      is_featured: product.is_featured,
      track_recipe: product.track_recipe,
      track_stock_direct: product.track_stock_direct,
      prices:
        product.prices?.map((item) => ({
          outlet_id: item.outlet_id,
          price: Number(item.price ?? 0),
          dine_in_price: item.dine_in_price !== null ? Number(item.dine_in_price ?? 0) : null,
          takeaway_price:
            item.takeaway_price !== null ? Number(item.takeaway_price ?? 0) : null,
          delivery_price:
            item.delivery_price !== null ? Number(item.delivery_price ?? 0) : null,
          starts_at: item.starts_at ?? null,
          ends_at: item.ends_at ?? null,
          is_active: item.is_active ?? true,
        })) ?? [],
      outlet_statuses:
        product.outlet_statuses?.map((item) => ({
          outlet_id: item.outlet_id,
          is_available: item.is_available ?? true,
          is_hidden: item.is_hidden ?? false,
          daily_limit: item.daily_limit ?? null,
          notes: item.notes ?? "",
        })) ?? [],
      variant_groups:
        product.variant_groups?.map((group) => ({
          name: group.name,
          selection_type: group.selection_type,
          is_required: group.is_required ?? true,
          sort_order: group.sort_order ?? 0,
          options:
            group.options?.map((option) => ({
              name: option.name,
              price_adjustment: Number(option.price_adjustment ?? 0),
              sort_order: option.sort_order ?? 0,
              is_active: option.is_active ?? true,
            })) ?? [],
        })) ?? [],
      modifier_groups:
        product.modifier_groups?.map((group) => ({
          name: group.name,
          min_select: group.min_select ?? 0,
          max_select: group.max_select ?? 1,
          is_required: group.is_required ?? false,
          sort_order: group.sort_order ?? 0,
          options:
            group.options?.map((option) => ({
              name: option.name,
              price: Number(option.price ?? 0),
              sort_order: option.sort_order ?? 0,
              is_active: option.is_active ?? true,
            })) ?? [],
        })) ?? [],
      bundle_items:
        product.bundle_items?.map((item) => ({
          bundled_product_id: item.bundled_product_id,
          qty: Number(item.qty ?? 1),
        })) ?? [],
    });
    setOpen(true);
  };

  const sanitizePayload = (payload: ProductPayload): ProductPayload => ({
    ...payload,
    sku: payload.sku || null,
    code: payload.code || null,
    slug: payload.slug || null,
    description: payload.description || null,
    image_url: payload.image_url || null,
    prices: (payload.prices ?? []).filter((item) => item.outlet_id > 0),
    outlet_statuses: (payload.outlet_statuses ?? []).filter((item) => item.outlet_id > 0),
    variant_groups: (payload.variant_groups ?? [])
      .filter((group) => group.name.trim() !== "")
      .map((group) => ({
        ...group,
        options: group.options.filter((option) => option.name.trim() !== ""),
      }))
      .filter((group) => group.options.length > 0),
    modifier_groups: (payload.modifier_groups ?? [])
      .filter((group) => group.name.trim() !== "")
      .map((group) => ({
        ...group,
        options: group.options.filter((option) => option.name.trim() !== ""),
      }))
      .filter((group) => group.options.length > 0),
    bundle_items:
      payload.product_type === "bundle"
        ? (payload.bundle_items ?? []).filter((item) => item.bundled_product_id > 0)
        : [],
  });

  return (
    <PermissionWrapper permission="products.view">
      <div className="space-y-5">
        <PageHeader
          title="Products"
          description="Kelola menu, harga outlet, status jual, varian, modifier, dan paket."
          actions={<Button onClick={openCreate}>Tambah Produk</Button>}
        />

        <Card>
          <div className="grid gap-4 xl:grid-cols-[minmax(0,1.4fr)_repeat(3,minmax(160px,1fr))]">
            <Input
              label="Pencarian"
              placeholder="Cari nama, SKU, code, atau slug..."
              value={search}
              onChange={(e) => {
                setPage(1);
                setSearch(e.target.value);
              }}
            />

            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">Kategori</label>
              <select
                className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm text-slate-800 shadow-sm outline-none transition focus:border-[var(--brand-brick)] focus:ring-2 focus:ring-orange-100"
                value={categoryFilter}
                onChange={(e) => {
                  setPage(1);
                  setCategoryFilter(e.target.value ? Number(e.target.value) : "");
                }}
              >
                <option value="">Semua kategori</option>
                {categoryOptions.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">Tipe Produk</label>
              <select
                className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm text-slate-800 shadow-sm outline-none transition focus:border-[var(--brand-brick)] focus:ring-2 focus:ring-orange-100"
                value={typeFilter}
                onChange={(e) => {
                  setPage(1);
                  setTypeFilter((e.target.value as "single" | "bundle" | "") || "");
                }}
              >
                <option value="">Semua tipe</option>
                <option value="single">single</option>
                <option value="bundle">bundle</option>
              </select>
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">Status</label>
              <select
                className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm text-slate-800 shadow-sm outline-none transition focus:border-[var(--brand-brick)] focus:ring-2 focus:ring-orange-100"
                value={statusFilter === "" ? "" : statusFilter ? "1" : "0"}
                onChange={(e) => {
                  setPage(1);
                  if (e.target.value === "") {
                    setStatusFilter("");
                  } else {
                    setStatusFilter(e.target.value === "1");
                  }
                }}
              >
                <option value="">Semua status</option>
                <option value="1">Aktif</option>
                <option value="0">Nonaktif</option>
              </select>
            </div>
          </div>
        </Card>

        {productsQuery.isLoading ? (
          <Card>
            <div className="flex min-h-40 items-center justify-center text-sm text-[var(--color-muted)]">
              Memuat produk...
            </div>
          </Card>
        ) : productsQuery.isError ? (
          <PageErrorState onRetry={() => void productsQuery.refetch()} />
        ) : !products.length ? (
          <PageEmptyState title="Belum ada produk" />
        ) : (
          <Card>
            <div className="overflow-x-auto rounded-xl border border-[var(--color-border)]">
              <table className="min-w-full divide-y divide-slate-200 text-sm">
                <thead className="bg-slate-50">
                  <tr className="text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
                    <th className="px-4 py-3">Produk</th>
                    <th className="px-4 py-3">Kategori</th>
                    <th className="px-4 py-3">Harga Dasar</th>
                    <th className="px-4 py-3">Tipe</th>
                    <th className="px-4 py-3">Tag</th>
                    <th className="px-4 py-3">Status</th>
                    <th className="px-4 py-3 text-right">Aksi</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 bg-white">
                  {products.map((product) => (
                    <tr
                      key={product.id}
                      className="align-top transition-colors hover:bg-orange-50/40"
                    >
                      <td className="px-4 py-4">
                        <div className="max-w-sm">
                          <div className="font-semibold text-slate-900">{product.name}</div>
                          <div className="mt-1 text-xs leading-5 text-slate-500">
                            SKU: {product.sku ?? "-"} • Code: {product.code ?? "-"}
                          </div>
                          {product.image_url ? (
                            <div className="mt-2 max-w-xs break-all rounded-lg bg-slate-50 px-2 py-1 text-xs text-sky-700">
                              {product.image_url}
                            </div>
                          ) : null}
                        </div>
                      </td>

                      <td className="px-4 py-4 text-slate-600">{product.category?.name ?? "-"}</td>

                      <td className="whitespace-nowrap px-4 py-4 font-semibold text-slate-800">
                        Rp {Number(product.base_price ?? 0).toLocaleString("id-ID")}
                      </td>

                      <td className="px-4 py-4">
                        <Badge variant={product.product_type === "bundle" ? "warning" : "info"}>
                          {product.product_type}
                        </Badge>
                      </td>

                      <td className="px-4 py-4">
                        <div className="flex max-w-md flex-wrap gap-2">
                          {product.is_featured ? <Badge variant="info">featured</Badge> : null}
                          {product.track_recipe ? <Badge variant="success">recipe</Badge> : null}
                          {product.track_stock_direct ? (
                            <Badge variant="warning">direct-stock</Badge>
                          ) : null}
                          {product.variant_groups?.length ? (
                            <Badge variant="info">variants: {product.variant_groups.length}</Badge>
                          ) : null}
                          {product.modifier_groups?.length ? (
                            <Badge variant="info">modifiers: {product.modifier_groups.length}</Badge>
                          ) : null}
                          {product.bundle_items?.length ? (
                            <Badge variant="warning">bundle: {product.bundle_items.length}</Badge>
                          ) : null}
                        </div>
                      </td>

                      <td className="px-4 py-4">
                        <Badge variant={product.is_active ? "success" : "danger"}>
                          {product.is_active ? "Aktif" : "Nonaktif"}
                        </Badge>
                      </td>

                      <td className="px-4 py-4">
                        <div className="flex flex-col justify-end gap-2 sm:flex-row">
                          <Button variant="outline" onClick={() => openEdit(product)}>
                            Edit
                          </Button>
                          <Button
                            variant="danger"
                            loading={deleteMutation.isPending}
                            onClick={() => deleteMutation.mutate(product.id)}
                          >
                            Hapus
                          </Button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-4 flex flex-col gap-3 border-t border-slate-100 pt-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="text-sm text-slate-500">
                Halaman{" "}
                <span className="font-semibold text-slate-800">
                  {meta?.current_page ?? 1}
                </span>{" "}
                dari <span className="font-semibold text-slate-800">{totalPages}</span>
              </div>

              <div className="flex flex-col gap-2 sm:flex-row">
                <Button
                  variant="outline"
                  disabled={(meta?.current_page ?? 1) <= 1}
                  onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
                >
                  Sebelumnya
                </Button>

                <Button
                  variant="outline"
                  disabled={(meta?.current_page ?? 1) >= totalPages}
                  onClick={() => setPage((prev) => prev + 1)}
                >
                  Berikutnya
                </Button>
              </div>
            </div>
          </Card>
        )}

        <Modal
          open={open}
          title={editing ? "Edit Produk" : "Tambah Produk"}
          onClose={() => setOpen(false)}
          footer={
            <>
              <Button variant="outline" onClick={() => setOpen(false)}>
                Batal
              </Button>
              <Button
                loading={saveMutation.isPending}
                onClick={() => saveMutation.mutate(sanitizePayload(form))}
              >
                Simpan
              </Button>
            </>
          }
        >
          <div className="max-h-[72vh] space-y-6 overflow-y-auto pr-1">
            <div className="rounded-2xl border border-slate-200 bg-white p-4">
              <div className="mb-4">
                <h3 className="text-sm font-semibold text-slate-900">Informasi Produk</h3>
                <p className="mt-1 text-xs text-slate-500">
                  Data utama produk yang tampil di katalog dan POS.
                </p>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">Kategori</label>
                  <select
                    className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm text-slate-800 shadow-sm outline-none transition focus:border-[var(--brand-brick)] focus:ring-2 focus:ring-orange-100"
                    value={form.product_category_id || ""}
                    onChange={(e) =>
                      setForm((prev) => ({
                        ...prev,
                        product_category_id: Number(e.target.value || 0),
                      }))
                    }
                  >
                    <option value="">Pilih kategori</option>
                    {categoryOptions.map((category) => (
                      <option key={category.id} value={category.id}>
                        {category.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">
                    Product Type
                  </label>
                  <select
                    className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm text-slate-800 shadow-sm outline-none transition focus:border-[var(--brand-brick)] focus:ring-2 focus:ring-orange-100"
                    value={form.product_type}
                    onChange={(e) =>
                      setForm((prev) => ({
                        ...prev,
                        product_type: e.target.value as "single" | "bundle",
                      }))
                    }
                  >
                    <option value="single">single</option>
                    <option value="bundle">bundle</option>
                  </select>
                </div>

                <Input
                  label="Nama Produk"
                  value={form.name}
                  onChange={(e) => setForm((prev) => ({ ...prev, name: e.target.value }))}
                />

                <Input
                  label="Harga Dasar"
                  type="number"
                  value={String(form.base_price ?? 0)}
                  onChange={(e) =>
                    setForm((prev) => ({
                      ...prev,
                      base_price: Number(e.target.value || 0),
                    }))
                  }
                />

                <Input
                  label="SKU"
                  value={form.sku ?? ""}
                  onChange={(e) => setForm((prev) => ({ ...prev, sku: e.target.value }))}
                />

                <Input
                  label="Code"
                  value={form.code ?? ""}
                  onChange={(e) => setForm((prev) => ({ ...prev, code: e.target.value }))}
                />

                <Input
                  label="Slug"
                  value={form.slug ?? ""}
                  onChange={(e) => setForm((prev) => ({ ...prev, slug: e.target.value }))}
                />

                <Input
                  label="Image URL"
                  value={form.image_url ?? ""}
                  onChange={(e) => setForm((prev) => ({ ...prev, image_url: e.target.value }))}
                />

                <div className="md:col-span-2">
                  <label className="mb-2 block text-sm font-medium text-slate-700">Deskripsi</label>
                  <textarea
                    className="min-h-[110px] w-full resize-y rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm text-slate-800 shadow-sm outline-none transition placeholder:text-slate-400 focus:border-[var(--brand-brick)] focus:ring-2 focus:ring-orange-100"
                    value={form.description ?? ""}
                    onChange={(e) =>
                      setForm((prev) => ({
                        ...prev,
                        description: e.target.value,
                      }))
                    }
                  />
                </div>

                <div className="md:col-span-2 grid gap-3 rounded-xl border border-slate-200 bg-slate-50 p-4 md:grid-cols-2">
                  <Checkbox
                    label="Produk aktif"
                    checked={Boolean(form.is_active)}
                    onChange={(e) => setForm((prev) => ({ ...prev, is_active: e.target.checked }))}
                  />
                  <Checkbox
                    label="Featured"
                    checked={Boolean(form.is_featured)}
                    onChange={(e) => setForm((prev) => ({ ...prev, is_featured: e.target.checked }))}
                  />
                  <Checkbox
                    label="Track recipe"
                    checked={Boolean(form.track_recipe)}
                    onChange={(e) => setForm((prev) => ({ ...prev, track_recipe: e.target.checked }))}
                  />
                  <Checkbox
                    label="Track stock direct"
                    checked={Boolean(form.track_stock_direct)}
                    onChange={(e) =>
                      setForm((prev) => ({
                        ...prev,
                        track_stock_direct: e.target.checked,
                      }))
                    }
                  />
                </div>
              </div>
            </div>

            <Card title="Harga per Outlet" description="Pengaturan harga penjualan per cabang.">
              <div className="space-y-4">
                {(form.prices ?? []).map((price, index) => (
                  <div
                    key={index}
                    className="rounded-2xl border border-slate-200 bg-slate-50/70 p-4"
                  >
                    <div className="mb-4 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                      <div>
                        <h4 className="text-sm font-semibold text-slate-900">
                          Harga Outlet #{index + 1}
                        </h4>
                        <p className="mt-1 text-xs text-slate-500">
                          Atur harga dasar dan harga per channel.
                        </p>
                      </div>

                      <Button
                        variant="danger"
                        onClick={() =>
                          setForm((prev) => ({
                            ...prev,
                            prices: (prev.prices ?? []).filter((_, i) => i !== index),
                          }))
                        }
                      >
                        Hapus Baris
                      </Button>
                    </div>

                    <div className="grid gap-3 md:grid-cols-3">
                      <div>
                        <label className="mb-2 block text-sm font-medium text-slate-700">Outlet</label>
                        <select
                          className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm text-slate-800 shadow-sm outline-none transition focus:border-[var(--brand-brick)] focus:ring-2 focus:ring-orange-100"
                          value={price.outlet_id || ""}
                          onChange={(e) =>
                            setForm((prev) => {
                              const next = [...(prev.prices ?? [])];
                              next[index] = {
                                ...next[index],
                                outlet_id: Number(e.target.value || 0),
                              };
                              return { ...prev, prices: next };
                            })
                          }
                        >
                          <option value="">Pilih outlet</option>
                          {outletOptions.map((outlet) => (
                            <option key={outlet.id} value={outlet.id}>
                              {outlet.name} ({outlet.code})
                            </option>
                          ))}
                        </select>
                      </div>

                      <Input
                        label="Price"
                        type="number"
                        value={String(price.price ?? 0)}
                        onChange={(e) =>
                          setForm((prev) => {
                            const next = [...(prev.prices ?? [])];
                            next[index] = { ...next[index], price: Number(e.target.value || 0) };
                            return { ...prev, prices: next };
                          })
                        }
                      />

                      <Input
                        label="Dine In Price"
                        type="number"
                        value={price.dine_in_price === null ? "" : String(price.dine_in_price ?? "")}
                        onChange={(e) =>
                          setForm((prev) => {
                            const next = [...(prev.prices ?? [])];
                            next[index] = {
                              ...next[index],
                              dine_in_price: e.target.value === "" ? null : Number(e.target.value),
                            };
                            return { ...prev, prices: next };
                          })
                        }
                      />

                      <Input
                        label="Takeaway Price"
                        type="number"
                        value={
                          price.takeaway_price === null ? "" : String(price.takeaway_price ?? "")
                        }
                        onChange={(e) =>
                          setForm((prev) => {
                            const next = [...(prev.prices ?? [])];
                            next[index] = {
                              ...next[index],
                              takeaway_price: e.target.value === "" ? null : Number(e.target.value),
                            };
                            return { ...prev, prices: next };
                          })
                        }
                      />

                      <Input
                        label="Delivery Price"
                        type="number"
                        value={
                          price.delivery_price === null ? "" : String(price.delivery_price ?? "")
                        }
                        onChange={(e) =>
                          setForm((prev) => {
                            const next = [...(prev.prices ?? [])];
                            next[index] = {
                              ...next[index],
                              delivery_price: e.target.value === "" ? null : Number(e.target.value),
                            };
                            return { ...prev, prices: next };
                          })
                        }
                      />
                    </div>
                  </div>
                ))}

                <Button
                  variant="outline"
                  onClick={() =>
                    setForm((prev) => ({
                      ...prev,
                      prices: [...(prev.prices ?? []), createEmptyPrice()],
                    }))
                  }
                >
                  Tambah Harga Outlet
                </Button>
              </div>
            </Card>

            <Card title="Status Produk per Outlet" description="Aktifasi jual dan visibility per outlet.">
              <div className="space-y-4">
                {(form.outlet_statuses ?? []).map((status, index) => (
                  <div
                    key={index}
                    className="rounded-2xl border border-slate-200 bg-slate-50/70 p-4"
                  >
                    <div className="mb-4 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                      <div>
                        <h4 className="text-sm font-semibold text-slate-900">
                          Status Outlet #{index + 1}
                        </h4>
                        <p className="mt-1 text-xs text-slate-500">
                          Atur availability, visibility, dan limit harian.
                        </p>
                      </div>

                      <Button
                        variant="danger"
                        onClick={() =>
                          setForm((prev) => ({
                            ...prev,
                            outlet_statuses: (prev.outlet_statuses ?? []).filter(
                              (_, i) => i !== index
                            ),
                          }))
                        }
                      >
                        Hapus Baris
                      </Button>
                    </div>

                    <div className="grid gap-3 md:grid-cols-3">
                      <div>
                        <label className="mb-2 block text-sm font-medium text-slate-700">Outlet</label>
                        <select
                          className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm text-slate-800 shadow-sm outline-none transition focus:border-[var(--brand-brick)] focus:ring-2 focus:ring-orange-100"
                          value={status.outlet_id || ""}
                          onChange={(e) =>
                            setForm((prev) => {
                              const next = [...(prev.outlet_statuses ?? [])];
                              next[index] = {
                                ...next[index],
                                outlet_id: Number(e.target.value || 0),
                              };
                              return { ...prev, outlet_statuses: next };
                            })
                          }
                        >
                          <option value="">Pilih outlet</option>
                          {outletOptions.map((outlet) => (
                            <option key={outlet.id} value={outlet.id}>
                              {outlet.name} ({outlet.code})
                            </option>
                          ))}
                        </select>
                      </div>

                      <Input
                        label="Daily Limit"
                        type="number"
                        value={status.daily_limit === null ? "" : String(status.daily_limit ?? "")}
                        onChange={(e) =>
                          setForm((prev) => {
                            const next = [...(prev.outlet_statuses ?? [])];
                            next[index] = {
                              ...next[index],
                              daily_limit: e.target.value === "" ? null : Number(e.target.value),
                            };
                            return { ...prev, outlet_statuses: next };
                          })
                        }
                      />

                      <div className="grid gap-3 rounded-xl border border-slate-200 bg-white p-3">
                        <Checkbox
                          label="Is available"
                          checked={Boolean(status.is_available)}
                          onChange={(e) =>
                            setForm((prev) => {
                              const next = [...(prev.outlet_statuses ?? [])];
                              next[index] = {
                                ...next[index],
                                is_available: e.target.checked,
                              };
                              return { ...prev, outlet_statuses: next };
                            })
                          }
                        />
                        <Checkbox
                          label="Is hidden"
                          checked={Boolean(status.is_hidden)}
                          onChange={(e) =>
                            setForm((prev) => {
                              const next = [...(prev.outlet_statuses ?? [])];
                              next[index] = {
                                ...next[index],
                                is_hidden: e.target.checked,
                              };
                              return { ...prev, outlet_statuses: next };
                            })
                          }
                        />
                      </div>

                      <div className="md:col-span-3">
                        <label className="mb-2 block text-sm font-medium text-slate-700">Notes</label>
                        <textarea
                          className="min-h-[80px] w-full resize-y rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm text-slate-800 shadow-sm outline-none transition placeholder:text-slate-400 focus:border-[var(--brand-brick)] focus:ring-2 focus:ring-orange-100"
                          value={status.notes ?? ""}
                          onChange={(e) =>
                            setForm((prev) => {
                              const next = [...(prev.outlet_statuses ?? [])];
                              next[index] = {
                                ...next[index],
                                notes: e.target.value,
                              };
                              return { ...prev, outlet_statuses: next };
                            })
                          }
                        />
                      </div>
                    </div>
                  </div>
                ))}

                <Button
                  variant="outline"
                  onClick={() =>
                    setForm((prev) => ({
                      ...prev,
                      outlet_statuses: [...(prev.outlet_statuses ?? []), createEmptyOutletStatus()],
                    }))
                  }
                >
                  Tambah Status Outlet
                </Button>
              </div>
            </Card>

            <Card title="Variant Groups" description="Contoh: potongan ayam, level pedas.">
              <div className="space-y-4">
                {(form.variant_groups ?? []).map((group, groupIndex) => (
                  <div
                    key={groupIndex}
                    className="rounded-2xl border border-slate-200 bg-slate-50/70 p-4"
                  >
                    <div className="mb-4 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                      <div>
                        <h4 className="text-sm font-semibold text-slate-900">
                          Variant Group #{groupIndex + 1}
                        </h4>
                        <p className="mt-1 text-xs text-slate-500">
                          Kelompok pilihan varian untuk produk.
                        </p>
                      </div>

                      <Button
                        variant="danger"
                        onClick={() =>
                          setForm((prev) => ({
                            ...prev,
                            variant_groups: (prev.variant_groups ?? []).filter(
                              (_, i) => i !== groupIndex
                            ),
                          }))
                        }
                      >
                        Hapus Group
                      </Button>
                    </div>

                    <div className="grid gap-3 md:grid-cols-3">
                      <Input
                        label="Nama Group"
                        value={group.name}
                        onChange={(e) =>
                          setForm((prev) => {
                            const next = [...(prev.variant_groups ?? [])];
                            next[groupIndex] = { ...next[groupIndex], name: e.target.value };
                            return { ...prev, variant_groups: next };
                          })
                        }
                      />

                      <div>
                        <label className="mb-2 block text-sm font-medium text-slate-700">
                          Selection Type
                        </label>
                        <select
                          className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm text-slate-800 shadow-sm outline-none transition focus:border-[var(--brand-brick)] focus:ring-2 focus:ring-orange-100"
                          value={group.selection_type}
                          onChange={(e) =>
                            setForm((prev) => {
                              const next = [...(prev.variant_groups ?? [])];
                              next[groupIndex] = {
                                ...next[groupIndex],
                                selection_type: e.target.value as "single" | "multiple",
                              };
                              return { ...prev, variant_groups: next };
                            })
                          }
                        >
                          <option value="single">single</option>
                          <option value="multiple">multiple</option>
                        </select>
                      </div>

                      <div className="flex items-end rounded-xl border border-slate-200 bg-white p-3">
                        <Checkbox
                          label="Required"
                          checked={Boolean(group.is_required)}
                          onChange={(e) =>
                            setForm((prev) => {
                              const next = [...(prev.variant_groups ?? [])];
                              next[groupIndex] = {
                                ...next[groupIndex],
                                is_required: e.target.checked,
                              };
                              return { ...prev, variant_groups: next };
                            })
                          }
                        />
                      </div>
                    </div>

                    <div className="mt-4 space-y-3">
                      {group.options.map((option, optionIndex) => (
                        <div
                          key={optionIndex}
                          className="grid gap-3 rounded-xl border border-slate-200 bg-white p-3 md:grid-cols-4"
                        >
                          <Input
                            label="Option Name"
                            value={option.name}
                            onChange={(e) =>
                              setForm((prev) => {
                                const groups = [...(prev.variant_groups ?? [])];
                                const options = [...groups[groupIndex].options];
                                options[optionIndex] = {
                                  ...options[optionIndex],
                                  name: e.target.value,
                                };
                                groups[groupIndex] = { ...groups[groupIndex], options };
                                return { ...prev, variant_groups: groups };
                              })
                            }
                          />

                          <Input
                            label="Price Adjustment"
                            type="number"
                            value={String(option.price_adjustment ?? 0)}
                            onChange={(e) =>
                              setForm((prev) => {
                                const groups = [...(prev.variant_groups ?? [])];
                                const options = [...groups[groupIndex].options];
                                options[optionIndex] = {
                                  ...options[optionIndex],
                                  price_adjustment: Number(e.target.value || 0),
                                };
                                groups[groupIndex] = { ...groups[groupIndex], options };
                                return { ...prev, variant_groups: groups };
                              })
                            }
                          />

                          <div className="flex items-end">
                            <Checkbox
                              label="Aktif"
                              checked={Boolean(option.is_active)}
                              onChange={(e) =>
                                setForm((prev) => {
                                  const groups = [...(prev.variant_groups ?? [])];
                                  const options = [...groups[groupIndex].options];
                                  options[optionIndex] = {
                                    ...options[optionIndex],
                                    is_active: e.target.checked,
                                  };
                                  groups[groupIndex] = { ...groups[groupIndex], options };
                                  return { ...prev, variant_groups: groups };
                                })
                              }
                            />
                          </div>

                          <div className="flex items-end">
                            <Button
                              variant="danger"
                              onClick={() =>
                                setForm((prev) => {
                                  const groups = [...(prev.variant_groups ?? [])];
                                  const options = groups[groupIndex].options.filter(
                                    (_, i) => i !== optionIndex
                                  );
                                  groups[groupIndex] = { ...groups[groupIndex], options };
                                  return { ...prev, variant_groups: groups };
                                })
                              }
                            >
                              Hapus Option
                            </Button>
                          </div>
                        </div>
                      ))}

                      <Button
                        variant="outline"
                        onClick={() =>
                          setForm((prev) => {
                            const next = [...(prev.variant_groups ?? [])];
                            next[groupIndex] = {
                              ...next[groupIndex],
                              options: [
                                ...next[groupIndex].options,
                                {
                                  name: "",
                                  price_adjustment: 0,
                                  sort_order: 0,
                                  is_active: true,
                                },
                              ],
                            };
                            return { ...prev, variant_groups: next };
                          })
                        }
                      >
                        Tambah Option Variant
                      </Button>
                    </div>
                  </div>
                ))}

                <Button
                  variant="outline"
                  onClick={() =>
                    setForm((prev) => ({
                      ...prev,
                      variant_groups: [...(prev.variant_groups ?? []), createEmptyVariantGroup()],
                    }))
                  }
                >
                  Tambah Variant Group
                </Button>
              </div>
            </Card>

            <Card title="Modifier Groups" description="Contoh: extra sambal, saus, nasi.">
              <div className="space-y-4">
                {(form.modifier_groups ?? []).map((group, groupIndex) => (
                  <div
                    key={groupIndex}
                    className="rounded-2xl border border-slate-200 bg-slate-50/70 p-4"
                  >
                    <div className="mb-4 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                      <div>
                        <h4 className="text-sm font-semibold text-slate-900">
                          Modifier Group #{groupIndex + 1}
                        </h4>
                        <p className="mt-1 text-xs text-slate-500">
                          Kelompok tambahan untuk pesanan.
                        </p>
                      </div>

                      <Button
                        variant="danger"
                        onClick={() =>
                          setForm((prev) => ({
                            ...prev,
                            modifier_groups: (prev.modifier_groups ?? []).filter(
                              (_, i) => i !== groupIndex
                            ),
                          }))
                        }
                      >
                        Hapus Group
                      </Button>
                    </div>

                    <div className="grid gap-3 md:grid-cols-4">
                      <Input
                        label="Nama Group"
                        value={group.name}
                        onChange={(e) =>
                          setForm((prev) => {
                            const next = [...(prev.modifier_groups ?? [])];
                            next[groupIndex] = { ...next[groupIndex], name: e.target.value };
                            return { ...prev, modifier_groups: next };
                          })
                        }
                      />

                      <Input
                        label="Min Select"
                        type="number"
                        value={String(group.min_select ?? 0)}
                        onChange={(e) =>
                          setForm((prev) => {
                            const next = [...(prev.modifier_groups ?? [])];
                            next[groupIndex] = {
                              ...next[groupIndex],
                              min_select: Number(e.target.value || 0),
                            };
                            return { ...prev, modifier_groups: next };
                          })
                        }
                      />

                      <Input
                        label="Max Select"
                        type="number"
                        value={String(group.max_select ?? 1)}
                        onChange={(e) =>
                          setForm((prev) => {
                            const next = [...(prev.modifier_groups ?? [])];
                            next[groupIndex] = {
                              ...next[groupIndex],
                              max_select: Number(e.target.value || 1),
                            };
                            return { ...prev, modifier_groups: next };
                          })
                        }
                      />

                      <div className="flex items-end rounded-xl border border-slate-200 bg-white p-3">
                        <Checkbox
                          label="Required"
                          checked={Boolean(group.is_required)}
                          onChange={(e) =>
                            setForm((prev) => {
                              const next = [...(prev.modifier_groups ?? [])];
                              next[groupIndex] = {
                                ...next[groupIndex],
                                is_required: e.target.checked,
                              };
                              return { ...prev, modifier_groups: next };
                            })
                          }
                        />
                      </div>
                    </div>

                    <div className="mt-4 space-y-3">
                      {group.options.map((option, optionIndex) => (
                        <div
                          key={optionIndex}
                          className="grid gap-3 rounded-xl border border-slate-200 bg-white p-3 md:grid-cols-4"
                        >
                          <Input
                            label="Option Name"
                            value={option.name}
                            onChange={(e) =>
                              setForm((prev) => {
                                const groups = [...(prev.modifier_groups ?? [])];
                                const options = [...groups[groupIndex].options];
                                options[optionIndex] = {
                                  ...options[optionIndex],
                                  name: e.target.value,
                                };
                                groups[groupIndex] = { ...groups[groupIndex], options };
                                return { ...prev, modifier_groups: groups };
                              })
                            }
                          />

                          <Input
                            label="Price"
                            type="number"
                            value={String(option.price ?? 0)}
                            onChange={(e) =>
                              setForm((prev) => {
                                const groups = [...(prev.modifier_groups ?? [])];
                                const options = [...groups[groupIndex].options];
                                options[optionIndex] = {
                                  ...options[optionIndex],
                                  price: Number(e.target.value || 0),
                                };
                                groups[groupIndex] = { ...groups[groupIndex], options };
                                return { ...prev, modifier_groups: groups };
                              })
                            }
                          />

                          <div className="flex items-end">
                            <Checkbox
                              label="Aktif"
                              checked={Boolean(option.is_active)}
                              onChange={(e) =>
                                setForm((prev) => {
                                  const groups = [...(prev.modifier_groups ?? [])];
                                  const options = [...groups[groupIndex].options];
                                  options[optionIndex] = {
                                    ...options[optionIndex],
                                    is_active: e.target.checked,
                                  };
                                  groups[groupIndex] = { ...groups[groupIndex], options };
                                  return { ...prev, modifier_groups: groups };
                                })
                              }
                            />
                          </div>

                          <div className="flex items-end">
                            <Button
                              variant="danger"
                              onClick={() =>
                                setForm((prev) => {
                                  const groups = [...(prev.modifier_groups ?? [])];
                                  const options = groups[groupIndex].options.filter(
                                    (_, i) => i !== optionIndex
                                  );
                                  groups[groupIndex] = { ...groups[groupIndex], options };
                                  return { ...prev, modifier_groups: groups };
                                })
                              }
                            >
                              Hapus Option
                            </Button>
                          </div>
                        </div>
                      ))}

                      <Button
                        variant="outline"
                        onClick={() =>
                          setForm((prev) => {
                            const next = [...(prev.modifier_groups ?? [])];
                            next[groupIndex] = {
                              ...next[groupIndex],
                              options: [
                                ...next[groupIndex].options,
                                {
                                  name: "",
                                  price: 0,
                                  sort_order: 0,
                                  is_active: true,
                                },
                              ],
                            };
                            return { ...prev, modifier_groups: next };
                          })
                        }
                      >
                        Tambah Option Modifier
                      </Button>
                    </div>
                  </div>
                ))}

                <Button
                  variant="outline"
                  onClick={() =>
                    setForm((prev) => ({
                      ...prev,
                      modifier_groups: [...(prev.modifier_groups ?? []), createEmptyModifierGroup()],
                    }))
                  }
                >
                  Tambah Modifier Group
                </Button>
              </div>
            </Card>

            {form.product_type === "bundle" ? (
              <Card title="Bundle Items" description="Komponen produk untuk paket/combo.">
                <div className="space-y-4">
                  {(form.bundle_items ?? []).map((item, index) => (
                    <div
                      key={index}
                      className="rounded-2xl border border-slate-200 bg-slate-50/70 p-4"
                    >
                      <div className="mb-4 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                        <div>
                          <h4 className="text-sm font-semibold text-slate-900">
                            Bundle Item #{index + 1}
                          </h4>
                          <p className="mt-1 text-xs text-slate-500">
                            Pilih produk yang menjadi komponen paket.
                          </p>
                        </div>

                        <Button
                          variant="danger"
                          onClick={() =>
                            setForm((prev) => ({
                              ...prev,
                              bundle_items: (prev.bundle_items ?? []).filter((_, i) => i !== index),
                            }))
                          }
                        >
                          Hapus Item
                        </Button>
                      </div>

                      <div className="grid gap-3 md:grid-cols-3">
                        <div className="md:col-span-2">
                          <label className="mb-2 block text-sm font-medium text-slate-700">
                            Bundled Product
                          </label>
                          <select
                            className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm text-slate-800 shadow-sm outline-none transition focus:border-[var(--brand-brick)] focus:ring-2 focus:ring-orange-100"
                            value={item.bundled_product_id || ""}
                            onChange={(e) =>
                              setForm((prev) => {
                                const next = [...(prev.bundle_items ?? [])];
                                next[index] = {
                                  ...next[index],
                                  bundled_product_id: Number(e.target.value || 0),
                                };
                                return { ...prev, bundle_items: next };
                              })
                            }
                          >
                            <option value="">Pilih produk</option>
                            {bundleCandidateProducts.map((product) => (
                              <option key={product.id} value={product.id}>
                                {product.name}
                              </option>
                            ))}
                          </select>
                        </div>

                        <Input
                          label="Qty"
                          type="number"
                          value={String(item.qty ?? 1)}
                          onChange={(e) =>
                            setForm((prev) => {
                              const next = [...(prev.bundle_items ?? [])];
                              next[index] = { ...next[index], qty: Number(e.target.value || 1) };
                              return { ...prev, bundle_items: next };
                            })
                          }
                        />
                      </div>
                    </div>
                  ))}

                  <Button
                    variant="outline"
                    onClick={() =>
                      setForm((prev) => ({
                        ...prev,
                        bundle_items: [...(prev.bundle_items ?? []), createEmptyBundleItem()],
                      }))
                    }
                  >
                    Tambah Bundle Item
                  </Button>
                </div>
              </Card>
            ) : null}
          </div>
        </Modal>
      </div>
    </PermissionWrapper>
  );
}