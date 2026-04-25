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
      <div className="space-y-4">
        <PageHeader
          title="Kategori Bahan Baku"
          description="Kelola kategori bahan baku untuk inventory."
          actions={<Button onClick={openCreate}>Tambah Kategori</Button>}
        />

        <Card>
          <Input
            placeholder="Cari kategori bahan baku..."
            value={search}
            onChange={(event) => setSearch(event.target.value)}
          />
        </Card>

        {categoriesQuery.isLoading ? (
          <Card>Memuat kategori bahan baku...</Card>
        ) : categoriesQuery.isError ? (
          <PageErrorState onRetry={() => void categoriesQuery.refetch()} />
        ) : !categories.length ? (
          <PageEmptyState title="Belum ada kategori bahan baku" />
        ) : (
          <div className="grid gap-4 lg:grid-cols-2">
            {categories.map((category) => (
              <Card key={category.id} title={category.name}>
                <div className="flex flex-wrap gap-2">
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
              </Card>
            ))}
          </div>
        )}

        <Modal
          open={openModal}
          title={editingCategory ? "Edit Kategori Bahan Baku" : "Tambah Kategori Bahan Baku"}
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
          <Input
            label="Nama Kategori"
            value={form.name}
            onChange={(event) => setForm((prev) => ({ ...prev, name: event.target.value }))}
          />
        </Modal>
      </div>
    </PermissionWrapper>
  );
}