import { useState } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { PageHeader } from "@/components/navigation/PageHeader";
import { PermissionWrapper } from "@/components/navigation/PermissionWrapper";
import { PageEmptyState } from "@/components/feedback/PageEmptyState";
import { PageErrorState } from "@/components/feedback/PageErrorState";
import { Badge, Button, Card, ConfirmDialog, Input, Modal, Pagination } from "@/components/ui";
import { parseApiError } from "@/services/api/error-parser";
import { useToast } from "@/hooks/useToast";
import { customerPromoService } from "@/modules/admin/services/customer-promo.service";
import type { Voucher, VoucherAppliesTo, VoucherDiscountType, VoucherPayload } from "@/types/promo";

interface VoucherFormState {
    code: string;
    name: string;
    description: string;
    discount_type: VoucherDiscountType;
    discount_value: string;
    max_discount: string;
    min_order_total: string;
    quota: string;
    starts_at: string;
    ends_at: string;
    is_active: boolean;
    applies_to: VoucherAppliesTo;
}

const initialForm: VoucherFormState = {
    code: "",
    name: "",
    description: "",
    discount_type: "fixed",
    discount_value: "0",
    max_discount: "",
    min_order_total: "0",
    quota: "",
    starts_at: "",
    ends_at: "",
    is_active: true,
    applies_to: "all",
};

const toPayload = (form: VoucherFormState): VoucherPayload => ({
    code: form.code.trim().toUpperCase(),
    name: form.name.trim(),
    description: form.description.trim() || null,
    discount_type: form.discount_type,
    discount_value: Number(form.discount_value || 0),
    max_discount: form.max_discount === "" ? null : Number(form.max_discount),
    min_order_total: Number(form.min_order_total || 0),
    quota: form.quota === "" ? null : Number(form.quota),
    starts_at: form.starts_at || null,
    ends_at: form.ends_at || null,
    is_active: form.is_active,
    applies_to: form.applies_to,
});

const fromVoucher = (voucher: Voucher): VoucherFormState => ({
    code: voucher.code,
    name: voucher.name,
    description: voucher.description ?? "",
    discount_type: voucher.discount_type,
    discount_value: String(voucher.discount_value ?? 0),
    max_discount: voucher.max_discount === null ? "" : String(voucher.max_discount),
    min_order_total: String(voucher.min_order_total ?? 0),
    quota: voucher.quota === null ? "" : String(voucher.quota),
    starts_at: voucher.starts_at ?? "",
    ends_at: voucher.ends_at ?? "",
    is_active: Boolean(voucher.is_active),
    applies_to: voucher.applies_to,
});

export default function VouchersPage() {
    const toast = useToast();
    const queryClient = useQueryClient();

    const [page, setPage] = useState(1);
    const [search, setSearch] = useState("");
    const [isActive, setIsActive] = useState<boolean | "">("");
    const [open, setOpen] = useState(false);
    const [editing, setEditing] = useState<Voucher | null>(null);
    const [deleting, setDeleting] = useState<Voucher | null>(null);
    const [form, setForm] = useState<VoucherFormState>(initialForm);

    const vouchersQuery = useQuery({
        queryKey: ["admin-vouchers", page, search, isActive],
        queryFn: () =>
            customerPromoService.getVouchers({
                page,
                per_page: 10,
                search,
                is_active: isActive,
            }),
    });

    const vouchers = vouchersQuery.data?.items ?? [];
    const meta = vouchersQuery.data?.meta ?? null;

    const saveMutation = useMutation({
        mutationFn: () => {
            const payload = toPayload(form);

            if (editing) {
                return customerPromoService.updateVoucher(editing.id, payload);
            }

            return customerPromoService.createVoucher(payload);
        },
        onSuccess: (response) => {
            toast.success(response.message);
            setOpen(false);
            setEditing(null);
            setForm(initialForm);
            void queryClient.invalidateQueries({ queryKey: ["admin-vouchers"] });
        },
        onError: (error) => {
            toast.error("Gagal menyimpan voucher", parseApiError(error));
        },
    });

    const deleteMutation = useMutation({
        mutationFn: (voucher: Voucher) => customerPromoService.deleteVoucher(voucher.id),
        onSuccess: (response) => {
            toast.success(response.message);
            setDeleting(null);
            void queryClient.invalidateQueries({ queryKey: ["admin-vouchers"] });
        },
        onError: (error) => {
            toast.error("Gagal menghapus voucher", parseApiError(error));
        },
    });

    const openCreate = () => {
        setEditing(null);
        setForm(initialForm);
        setOpen(true);
    };

    const openEdit = (voucher: Voucher) => {
        setEditing(voucher);
        setForm(fromVoucher(voucher));
        setOpen(true);
    };

    return (
        <PermissionWrapper permission="vouchers.view">
            <div className="space-y-4">
                <PageHeader
                    title="Vouchers"
                    description="Kelola kode voucher, nominal diskon, masa aktif, kuota, dan status voucher."
                    actions={
                        <PermissionWrapper permission="vouchers.create" fallback={null}>
                            <Button onClick={openCreate}>Tambah Voucher</Button>
                        </PermissionWrapper>
                    }
                />

                <Card>
                    <div className="grid gap-4 md:grid-cols-3">
                        <Input
                            placeholder="Cari kode atau nama voucher..."
                            value={search}
                            onChange={(event) => {
                                setSearch(event.target.value);
                                setPage(1);
                            }}
                        />

                        <select
                            className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900"
                            value={isActive === "" ? "" : String(isActive)}
                            onChange={(event) => {
                                const value = event.target.value;
                                setIsActive(value === "" ? "" : value === "true");
                                setPage(1);
                            }}
                        >
                            <option value="">Semua Status</option>
                            <option value="true">Aktif</option>
                            <option value="false">Nonaktif</option>
                        </select>
                    </div>
                </Card>

                {vouchersQuery.isLoading ? (
                    <Card>Memuat data voucher...</Card>
                ) : vouchersQuery.isError ? (
                    <PageErrorState onRetry={() => void vouchersQuery.refetch()} />
                ) : !vouchers.length ? (
                    <PageEmptyState title="Belum ada voucher" />
                ) : (
                    <div className="grid gap-4 lg:grid-cols-2">
                        {vouchers.map((voucher) => (
                            <Card
                                key={voucher.id}
                                title={voucher.name}
                                description={voucher.code}
                                actions={
                                    <Badge variant={voucher.is_active ? "success" : "danger"}>
                                        {voucher.is_active ? "Aktif" : "Nonaktif"}
                                    </Badge>
                                }
                            >
                                <div className="space-y-2 text-sm text-slate-600">
                                    <div>
                                        Diskon:{" "}
                                        <span className="font-semibold text-slate-900">
                                            {voucher.discount_type === "percent"
                                                ? `${Number(voucher.discount_value).toLocaleString("id-ID")}%`
                                                : `Rp ${Number(voucher.discount_value).toLocaleString("id-ID")}`}
                                        </span>
                                    </div>
                                    <div>
                                        Minimal Order: Rp {Number(voucher.min_order_total ?? 0).toLocaleString("id-ID")}
                                    </div>
                                    <div>
                                        Kuota: {voucher.quota ?? "Tanpa batas"} | Dipakai: {voucher.used_count}
                                    </div>
                                    <div>
                                        Berlaku: {voucher.starts_at ?? "-"} s/d {voucher.ends_at ?? "-"}
                                    </div>
                                    <div>Applies To: {voucher.applies_to}</div>
                                </div>

                                <div className="mt-4 flex flex-wrap gap-2">
                                    <PermissionWrapper permission="vouchers.update" fallback={null}>
                                        <Button variant="secondary" onClick={() => openEdit(voucher)}>
                                            Edit
                                        </Button>
                                    </PermissionWrapper>
                                    <PermissionWrapper permission="vouchers.delete" fallback={null}>
                                        <Button variant="danger" onClick={() => setDeleting(voucher)}>
                                            Hapus
                                        </Button>
                                    </PermissionWrapper>
                                </div>
                            </Card>
                        ))}
                    </div>
                )}

                {meta ? (
                    <Pagination
                        meta={meta}
                        onPageChange={setPage}
                    />
                ) : null}

                <Modal
                    open={open}
                    title={editing ? "Edit Voucher" : "Tambah Voucher"}
                    onClose={() => setOpen(false)}
                    footer={
                        <>
                            <Button variant="outline" onClick={() => setOpen(false)}>
                                Batal
                            </Button>
                            <Button loading={saveMutation.isPending} onClick={() => saveMutation.mutate()}>
                                Simpan
                            </Button>
                        </>
                    }
                >
                    <div className="grid gap-4 md:grid-cols-2">
                        <Input
                            label="Kode Voucher"
                            value={form.code}
                            onChange={(event) => setForm((prev) => ({ ...prev, code: event.target.value }))}
                        />
                        <Input
                            label="Nama Voucher"
                            value={form.name}
                            onChange={(event) => setForm((prev) => ({ ...prev, name: event.target.value }))}
                        />

                        <div>
                            <label className="mb-2 block text-sm font-medium text-slate-700">Tipe Diskon</label>
                            <select
                                className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm"
                                value={form.discount_type}
                                onChange={(event) =>
                                    setForm((prev) => ({
                                        ...prev,
                                        discount_type: event.target.value as VoucherDiscountType,
                                    }))
                                }
                            >
                                <option value="fixed">fixed</option>
                                <option value="percent">percent</option>
                            </select>
                        </div>

                        <Input
                            label="Nilai Diskon"
                            type="number"
                            value={form.discount_value}
                            onChange={(event) =>
                                setForm((prev) => ({ ...prev, discount_value: event.target.value }))
                            }
                        />

                        <Input
                            label="Max Discount"
                            type="number"
                            value={form.max_discount}
                            onChange={(event) =>
                                setForm((prev) => ({ ...prev, max_discount: event.target.value }))
                            }
                        />

                        <Input
                            label="Minimal Order"
                            type="number"
                            value={form.min_order_total}
                            onChange={(event) =>
                                setForm((prev) => ({ ...prev, min_order_total: event.target.value }))
                            }
                        />

                        <Input
                            label="Kuota"
                            type="number"
                            value={form.quota}
                            onChange={(event) => setForm((prev) => ({ ...prev, quota: event.target.value }))}
                        />

                        <div>
                            <label className="mb-2 block text-sm font-medium text-slate-700">Applies To</label>
                            <select
                                className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm"
                                value={form.applies_to}
                                onChange={(event) =>
                                    setForm((prev) => ({
                                        ...prev,
                                        applies_to: event.target.value as VoucherAppliesTo,
                                    }))
                                }
                            >
                                <option value="all">all</option>
                                <option value="specific_products">specific_products</option>
                                <option value="specific_categories">specific_categories</option>
                            </select>
                        </div>

                        <Input
                            label="Mulai"
                            type="datetime-local"
                            value={form.starts_at}
                            onChange={(event) => setForm((prev) => ({ ...prev, starts_at: event.target.value }))}
                        />

                        <Input
                            label="Berakhir"
                            type="datetime-local"
                            value={form.ends_at}
                            onChange={(event) => setForm((prev) => ({ ...prev, ends_at: event.target.value }))}
                        />

                        <Input
                            label="Deskripsi"
                            value={form.description}
                            onChange={(event) =>
                                setForm((prev) => ({ ...prev, description: event.target.value }))
                            }
                        />

                        <label className="flex items-center gap-2 text-sm text-slate-700">
                            <input
                                type="checkbox"
                                checked={form.is_active}
                                onChange={(event) =>
                                    setForm((prev) => ({ ...prev, is_active: event.target.checked }))
                                }
                            />
                            Voucher aktif
                        </label>
                    </div>
                </Modal>

                <ConfirmDialog
                    open={Boolean(deleting)}
                    title="Hapus voucher?"
                    description={`Voucher ${deleting?.code ?? ""} akan dihapus.`}
                    confirmText="Hapus"
                    confirmVariant="danger"
                    loading={deleteMutation.isPending}
                    onClose={() => setDeleting(null)}
                    onConfirm={() => {
                        if (deleting) {
                            deleteMutation.mutate(deleting);
                        }
                    }}
                />
            </div>
        </PermissionWrapper>
    );
}