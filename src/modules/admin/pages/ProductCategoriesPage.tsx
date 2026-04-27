import { useState } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  catalogService,
  type ProductCategoryPayload,
} from "@/modules/admin/services/catalog.service";
import { PageHeader } from "@/components/navigation/PageHeader";
import { PermissionWrapper } from "@/components/navigation/PermissionWrapper";
import { PageErrorState } from "@/components/feedback/PageErrorState";
import { PageEmptyState } from "@/components/feedback/PageEmptyState";
import { Badge, Button, Card, Checkbox, Input, Modal } from "@/components/ui";
import { parseApiError } from "@/services/api/error-parser";
import { useToast } from "@/hooks/useToast";
import type { ProductCategory } from "@/types/product";

const initialForm: ProductCategoryPayload = {
  name: "",
  slug: "",
  sort_order: 0,
  is_active: true,
};

export default function ProductCategoriesPage() {
  const toast = useToast();
  const queryClient = useQueryClient();

  const [search, setSearch] = useState("");
  const [open, setOpen] = useState(false);
  const [editing, setEditing] = useState<ProductCategory | null>(null);
  const [form, setForm] = useState<ProductCategoryPayload>(initialForm);

  const categoriesQuery = useQuery({
    queryKey: ["admin-product-categories", search],
    queryFn: () => catalogService.getProductCategories({ per_page: 100, search }),
  });

  const saveMutation = useMutation({
    mutationFn: (payload: ProductCategoryPayload) =>
      editing
        ? catalogService.updateProductCategory(editing.id, payload)
        : catalogService.createProductCategory(payload),
    onSuccess: (response) => {
      toast.success(response.message);
      setOpen(false);
      setEditing(null);
      setForm(initialForm);
      void queryClient.invalidateQueries({ queryKey: ["admin-product-categories"] });
    },
    onError: (error) => toast.error("Gagal menyimpan kategori", parseApiError(error)),
  });

  const deleteMutation = useMutation({
    mutationFn: (id: number) => catalogService.deleteProductCategory(id),
    onSuccess: (response) => {
      toast.success(response.message);
      void queryClient.invalidateQueries({ queryKey: ["admin-product-categories"] });
    },
    onError: (error) => toast.error("Gagal menghapus kategori", parseApiError(error)),
  });

  const categories = categoriesQuery.data?.items ?? [];

  const openCreate = () => {
    setEditing(null);
    setForm(initialForm);
    setOpen(true);
  };

  const openEdit = (category: ProductCategory) => {
    setEditing(category);
    setForm({
      name: category.name,
      slug: category.slug ?? "",
      sort_order: category.sort_order ?? 0,
      is_active: category.is_active,
    });
    setOpen(true);
  };

  return (
    <PermissionWrapper permission="product_categories.view">
      <div className="space-y-5">
        <PageHeader
          title="Product Categories"
          description="Kelola kategori menu Chicken Alibaba."
          actions={<Button onClick={openCreate}>Tambah Kategori</Button>}
        />

        <Card>
          <div className="grid gap-3 md:grid-cols-[1fr_auto] md:items-end">
            <Input
              label="Pencarian"
              placeholder="Cari nama atau slug kategori..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />

            <div className="rounded-xl border border-[var(--color-border)] bg-[var(--brand-brick-soft)] px-4 py-3 text-sm">
              <div className="text-xs font-medium uppercase tracking-wide text-[var(--brand-brick)]">
                Total Kategori
              </div>
              <div className="mt-1 text-lg font-semibold text-[var(--color-text)]">
                {categories.length}
              </div>
            </div>
          </div>
        </Card>

        {categoriesQuery.isLoading ? (
          <Card>
            <div className="flex min-h-40 items-center justify-center text-sm text-[var(--color-muted)]">
              Memuat kategori produk...
            </div>
          </Card>
        ) : categoriesQuery.isError ? (
          <PageErrorState onRetry={() => void categoriesQuery.refetch()} />
        ) : !categories.length ? (
          <PageEmptyState title="Belum ada kategori produk" />
        ) : (
          <Card>
            <div className="grid gap-3">
              {categories.map((category) => (
                <div
                  key={category.id}
                  className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition hover:border-orange-200 hover:bg-orange-50/30"
                >
                  <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                    <div className="min-w-0 space-y-2">
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="truncate text-base font-semibold text-slate-950">
                          {category.name}
                        </h3>
                        <Badge variant={category.is_active ? "success" : "danger"}>
                          {category.is_active ? "Aktif" : "Nonaktif"}
                        </Badge>
                      </div>

                      <div className="flex flex-wrap gap-2 text-xs text-slate-500">
                        <span className="rounded-full bg-slate-50 px-2.5 py-1">
                          Slug:{" "}
                          <span className="font-medium text-slate-700">
                            {category.slug ?? "-"}
                          </span>
                        </span>
                        <span className="rounded-full bg-slate-50 px-2.5 py-1">
                          Sort:{" "}
                          <span className="font-medium text-slate-700">
                            {category.sort_order ?? 0}
                          </span>
                        </span>
                        <span className="rounded-full bg-slate-50 px-2.5 py-1">
                          Produk:{" "}
                          <span className="font-medium text-slate-700">
                            {category.products_count ?? 0}
                          </span>
                        </span>
                      </div>
                    </div>

                    <div className="flex flex-col gap-2 sm:flex-row sm:items-center lg:justify-end">
                      <Button variant="outline" onClick={() => openEdit(category)}>
                        Edit
                      </Button>

                      <Button
                        variant="danger"
                        loading={deleteMutation.isPending}
                        onClick={() => deleteMutation.mutate(category.id)}
                      >
                        Hapus
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        )}

        <Modal
          open={open}
          title={editing ? "Edit Kategori Produk" : "Tambah Kategori Produk"}
          onClose={() => setOpen(false)}
          footer={
            <>
              <Button variant="outline" onClick={() => setOpen(false)}>
                Batal
              </Button>
              <Button loading={saveMutation.isPending} onClick={() => saveMutation.mutate(form)}>
                Simpan
              </Button>
            </>
          }
        >
          <div className="space-y-5">
            <div className="rounded-2xl border border-slate-200 bg-slate-50/60 p-4">
              <h3 className="text-sm font-semibold text-slate-900">Informasi Kategori</h3>
              <p className="mt-1 text-xs leading-5 text-slate-500">
                Atur nama, slug, urutan tampil, dan status aktif kategori produk.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <Input
                label="Nama Kategori"
                value={form.name}
                onChange={(e) => setForm((prev) => ({ ...prev, name: e.target.value }))}
              />

              <Input
                label="Slug"
                value={form.slug ?? ""}
                onChange={(e) => setForm((prev) => ({ ...prev, slug: e.target.value }))}
              />

              <Input
                label="Sort Order"
                type="number"
                value={String(form.sort_order ?? 0)}
                onChange={(e) =>
                  setForm((prev) => ({
                    ...prev,
                    sort_order: Number(e.target.value || 0),
                  }))
                }
              />

              <div className="flex items-end">
                <div className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3">
                  <Checkbox
                    label="Kategori aktif"
                    checked={Boolean(form.is_active)}
                    onChange={(e) => setForm((prev) => ({ ...prev, is_active: e.target.checked }))}
                  />
                </div>
              </div>
            </div>
          </div>
        </Modal>
      </div>
    </PermissionWrapper>
  );
}