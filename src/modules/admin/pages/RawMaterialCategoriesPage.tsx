import { useState } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  inventoryService,
  type RawMaterialCategoryPayload,
} from "@/modules/admin/services/inventory.service";
import { PageHeader } from "@/components/navigation/PageHeader";
import { PermissionWrapper } from "@/components/navigation/PermissionWrapper";
import { PageErrorState } from "@/components/feedback/PageErrorState";
import { PageEmptyState } from "@/components/feedback/PageEmptyState";
import { Button, Card, Input, Modal } from "@/components/ui";
import { parseApiError } from "@/services/api/error-parser";
import { useToast } from "@/hooks/useToast";
import type { RawMaterialCategory } from "@/types/inventory";

const initialForm: RawMaterialCategoryPayload = {
  name: "",
};

export default function RawMaterialCategoriesPage() {
  const toast = useToast();
  const queryClient = useQueryClient();

  const [search, setSearch] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const [editingCategory, setEditingCategory] = useState<RawMaterialCategory | null>(null);
  const [form, setForm] = useState<RawMaterialCategoryPayload>(initialForm);

  const categoriesQuery = useQuery({
    queryKey: ["inventory-raw-material-categories", search],
    queryFn: () => inventoryService.getRawMaterialCategories({ per_page: 100, search }),
  });

  const categories = categoriesQuery.data?.items ?? [];

  const saveMutation = useMutation({
    mutationFn: (payload: RawMaterialCategoryPayload) =>
      editingCategory
        ? inventoryService.updateRawMaterialCategory(editingCategory.id, payload)
        : inventoryService.createRawMaterialCategory(payload),
    onSuccess: (response) => {
      toast.success(response.message);
      setOpenModal(false);
      setEditingCategory(null);
      setForm(initialForm);
      void queryClient.invalidateQueries({
        queryKey: ["inventory-raw-material-categories"],
      });
    },
    onError: (error) => toast.error("Gagal menyimpan kategori bahan baku", parseApiError(error)),
  });

  const deleteMutation = useMutation({
    mutationFn: (id: number) => inventoryService.deleteRawMaterialCategory(id),
    onSuccess: (response) => {
      toast.success(response.message);
      void queryClient.invalidateQueries({
        queryKey: ["inventory-raw-material-categories"],
      });
    },
    onError: (error) => toast.error("Gagal menghapus kategori bahan baku", parseApiError(error)),
  });

  const openCreate = () => {
    setEditingCategory(null);
    setForm(initialForm);
    setOpenModal(true);
  };

  const openEdit = (category: RawMaterialCategory) => {
    setEditingCategory(category);
    setForm({ name: category.name });
    setOpenModal(true);
  };

  return (
    <PermissionWrapper permission="raw_material_categories.view">
      <div className="space-y-5">
        <PageHeader
          title="Kategori Bahan Baku"
          description="Kelola kategori bahan baku untuk inventory."
          actions={<Button onClick={openCreate}>Tambah Kategori</Button>}
        />

        <Card>
          <div className="grid gap-3 md:grid-cols-[1fr_auto] md:items-end">
            <Input
              label="Pencarian"
              placeholder="Cari kategori bahan baku..."
              value={search}
              onChange={(event) => setSearch(event.target.value)}
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
              Memuat kategori bahan baku...
            </div>
          </Card>
        ) : categoriesQuery.isError ? (
          <PageErrorState onRetry={() => void categoriesQuery.refetch()} />
        ) : !categories.length ? (
          <PageEmptyState
            title="Belum ada kategori bahan baku"
            description="Tambahkan kategori agar bahan baku lebih mudah dikelompokkan."
          />
        ) : (
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {categories.map((category) => (
              <Card key={category.id}>
                <div className="flex h-full flex-col justify-between gap-5">
                  <div>
                    <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--brand-brick-soft)] text-sm font-bold text-[var(--brand-brick)]">
                      {category.name.charAt(0).toUpperCase()}
                    </div>

                    <h3 className="line-clamp-2 text-base font-semibold text-[var(--color-text)]">
                      {category.name}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-[var(--color-muted)]">
                      Kategori inventory bahan baku.
                    </p>
                  </div>

                  <div className="flex flex-col gap-2 border-t border-slate-100 pt-4 sm:flex-row sm:items-center">
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
              </Card>
            ))}
          </div>
        )}

        <Modal
          open={openModal}
          title={editingCategory ? "Edit Kategori Bahan Baku" : "Tambah Kategori Bahan Baku"}
          description="Gunakan nama kategori yang singkat, jelas, dan mudah dikenali."
          onClose={() => setOpenModal(false)}
          footer={
            <>
              <Button variant="outline" onClick={() => setOpenModal(false)}>
                Batal
              </Button>
              <Button loading={saveMutation.isPending} onClick={() => saveMutation.mutate(form)}>
                Simpan
              </Button>
            </>
          }
        >
          <div className="space-y-4">
            <div className="rounded-2xl border border-slate-200 bg-slate-50/70 p-4">
              <Input
                label="Nama Kategori"
                placeholder="Contoh: Bahan utama, bumbu, kemasan..."
                value={form.name}
                onChange={(event) => setForm((prev) => ({ ...prev, name: event.target.value }))}
              />
            </div>
          </div>
        </Modal>
      </div>
    </PermissionWrapper>
  );
}