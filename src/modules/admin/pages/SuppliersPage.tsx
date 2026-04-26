// src/modules/admin/pages/SuppliersPage.tsx

import { useState } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
    purchasingService,
    type SupplierPayload,
} from "@/modules/admin/services/purchasing.service";
import { PageHeader } from "@/components/navigation/PageHeader";
import { PermissionWrapper } from "@/components/navigation/PermissionWrapper";
import { PageErrorState } from "@/components/feedback/PageErrorState";
import { PageEmptyState } from "@/components/feedback/PageEmptyState";
import { Badge, Button, Card, ConfirmDialog, Input, Modal, Switch } from "@/components/ui";
import { parseApiError } from "@/services/api/error-parser";
import { useToast } from "@/hooks/useToast";
import type { Supplier } from "@/types/purchasing";

const initialForm: SupplierPayload = {
    code: "",
    name: "",
    phone: "",
    email: "",
    address: "",
    city: "",
    contact_person: "",
    is_active: true,
};

export default function SuppliersPage() {
    const toast = useToast();
    const queryClient = useQueryClient();

    const [search, setSearch] = useState("");
    const [activeFilter, setActiveFilter] = useState<boolean | "">("");
    const [openModal, setOpenModal] = useState(false);
    const [editingSupplier, setEditingSupplier] = useState<Supplier | null>(null);
    const [deleteTarget, setDeleteTarget] = useState<Supplier | null>(null);
    const [form, setForm] = useState<SupplierPayload>(initialForm);

    const suppliersQuery = useQuery({
        queryKey: ["purchasing-suppliers", search, activeFilter],
        queryFn: () =>
            purchasingService.getSuppliers({
                per_page: 100,
                search,
                is_active: activeFilter,
            }),
    });

    const suppliers = suppliersQuery.data?.items ?? [];

    const saveMutation = useMutation({
        mutationFn: (payload: SupplierPayload) => {
            if (editingSupplier) {
                return purchasingService.updateSupplier(editingSupplier.id, payload);
            }

            return purchasingService.createSupplier(payload);
        },
        onSuccess: (response) => {
            toast.success(response.message);
            setOpenModal(false);
            setEditingSupplier(null);
            setForm(initialForm);
            void queryClient.invalidateQueries({ queryKey: ["purchasing-suppliers"] });
        },
        onError: (error) => toast.error("Gagal menyimpan supplier", parseApiError(error)),
    });

    const deleteMutation = useMutation({
        mutationFn: (supplier: Supplier) => purchasingService.deleteSupplier(supplier.id),
        onSuccess: (response) => {
            toast.success(response.message);
            setDeleteTarget(null);
            void queryClient.invalidateQueries({ queryKey: ["purchasing-suppliers"] });
        },
        onError: (error) => toast.error("Gagal menghapus supplier", parseApiError(error)),
    });

    const openCreate = () => {
        setEditingSupplier(null);
        setForm(initialForm);
        setOpenModal(true);
    };

    const openEdit = (supplier: Supplier) => {
        setEditingSupplier(supplier);
        setForm({
            code: supplier.code ?? "",
            name: supplier.name,
            phone: supplier.phone ?? "",
            email: supplier.email ?? "",
            address: supplier.address ?? "",
            city: supplier.city ?? "",
            contact_person: supplier.contact_person ?? "",
            is_active: supplier.is_active,
        });
        setOpenModal(true);
    };

    return (
        <PermissionWrapper permission="suppliers.view">
            <div className="space-y-4">
                <PageHeader
                    title="Supplier"
                    description="Kelola data supplier bahan baku dan vendor pembelian."
                    actions={<Button onClick={openCreate}>Tambah Supplier</Button>}
                />

                <Card>
                    <div className="grid gap-4 md:grid-cols-2">
                        <Input
                            placeholder="Cari kode, nama, telepon, email, kota..."
                            value={search}
                            onChange={(event) => setSearch(event.target.value)}
                        />

                        <select
                            className="w-full rounded-xl border border-slate-300 px-3 py-2 text-sm"
                            value={activeFilter === "" ? "" : String(activeFilter)}
                            onChange={(event) => {
                                const value = event.target.value;
                                setActiveFilter(value === "" ? "" : value === "true");
                            }}
                        >
                            <option value="">Semua status</option>
                            <option value="true">Aktif</option>
                            <option value="false">Nonaktif</option>
                        </select>
                    </div>
                </Card>

                {suppliersQuery.isLoading ? (
                    <Card>Memuat data supplier...</Card>
                ) : suppliersQuery.isError ? (
                    <PageErrorState onRetry={() => void suppliersQuery.refetch()} />
                ) : !suppliers.length ? (
                    <PageEmptyState title="Belum ada supplier" />
                ) : (
                    <div className="grid gap-4 lg:grid-cols-2">
                        {suppliers.map((supplier) => (
                            <Card
                                key={supplier.id}
                                title={supplier.name}
                                description={supplier.code ?? "Tanpa kode"}
                                actions={
                                    <Badge variant={supplier.is_active ? "success" : "danger"}>
                                        {supplier.is_active ? "Aktif" : "Nonaktif"}
                                    </Badge>
                                }
                            >
                                <div className="grid gap-3 text-sm text-slate-600 md:grid-cols-2">
                                    <div>
                                        <div className="text-xs text-slate-500">Kontak</div>
                                        <div>{supplier.contact_person ?? "-"}</div>
                                    </div>

                                    <div>
                                        <div className="text-xs text-slate-500">Telepon</div>
                                        <div>{supplier.phone ?? "-"}</div>
                                    </div>

                                    <div>
                                        <div className="text-xs text-slate-500">Email</div>
                                        <div>{supplier.email ?? "-"}</div>
                                    </div>

                                    <div>
                                        <div className="text-xs text-slate-500">Kota</div>
                                        <div>{supplier.city ?? "-"}</div>
                                    </div>

                                    <div className="md:col-span-2">
                                        <div className="text-xs text-slate-500">Alamat</div>
                                        <div>{supplier.address ?? "-"}</div>
                                    </div>
                                </div>

                                <div className="mt-4 flex flex-wrap gap-2">
                                    <Button variant="outline" onClick={() => openEdit(supplier)}>
                                        Edit
                                    </Button>
                                    <Button variant="danger" onClick={() => setDeleteTarget(supplier)}>
                                        Hapus
                                    </Button>
                                </div>
                            </Card>
                        ))}
                    </div>
                )}

                <Modal
                    open={openModal}
                    title={editingSupplier ? "Edit Supplier" : "Tambah Supplier"}
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
                    <div className="grid gap-4 md:grid-cols-2">
                        <Input
                            label="Kode"
                            value={form.code ?? ""}
                            onChange={(event) => setForm((prev) => ({ ...prev, code: event.target.value }))}
                        />

                        <Input
                            label="Nama Supplier"
                            value={form.name}
                            onChange={(event) => setForm((prev) => ({ ...prev, name: event.target.value }))}
                        />

                        <Input
                            label="Telepon"
                            value={form.phone ?? ""}
                            onChange={(event) => setForm((prev) => ({ ...prev, phone: event.target.value }))}
                        />

                        <Input
                            label="Email"
                            type="email"
                            value={form.email ?? ""}
                            onChange={(event) => setForm((prev) => ({ ...prev, email: event.target.value }))}
                        />

                        <Input
                            label="Kota"
                            value={form.city ?? ""}
                            onChange={(event) => setForm((prev) => ({ ...prev, city: event.target.value }))}
                        />

                        <Input
                            label="Contact Person"
                            value={form.contact_person ?? ""}
                            onChange={(event) =>
                                setForm((prev) => ({ ...prev, contact_person: event.target.value }))
                            }
                        />

                        <div className="md:col-span-2">
                            <Input
                                label="Alamat"
                                value={form.address ?? ""}
                                onChange={(event) => setForm((prev) => ({ ...prev, address: event.target.value }))}
                            />
                        </div>

                        <div className="md:col-span-2">
                            <Switch
                                label="Supplier aktif"
                                checked={Boolean(form.is_active)}
                                onChange={(checked) =>
                                    setForm((prev) => ({ ...prev, is_active: checked }))
                                }
                            />
                        </div>
                    </div>
                </Modal>

                <ConfirmDialog
                    open={Boolean(deleteTarget)}
                    title="Hapus supplier?"
                    description={`Supplier ${deleteTarget?.name ?? ""} akan dihapus.`}
                    confirmText="Hapus"
                    confirmVariant="danger"
                    loading={deleteMutation.isPending}
                    onClose={() => setDeleteTarget(null)}
                    onConfirm={() => {
                        if (deleteTarget) {
                            deleteMutation.mutate(deleteTarget);
                        }
                    }}
                />
            </div>
        </PermissionWrapper>
    );
}