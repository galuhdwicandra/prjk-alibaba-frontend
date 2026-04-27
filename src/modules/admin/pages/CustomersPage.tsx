import { useMemo, useState } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { PageHeader } from "@/components/navigation/PageHeader";
import { PermissionWrapper } from "@/components/navigation/PermissionWrapper";
import { PageEmptyState } from "@/components/feedback/PageEmptyState";
import { PageErrorState } from "@/components/feedback/PageErrorState";
import { Badge, Button, Card, ConfirmDialog, Input, Modal, Pagination } from "@/components/ui";
import { parseApiError } from "@/services/api/error-parser";
import { useToast } from "@/hooks/useToast";
import { customerPromoService } from "@/modules/admin/services/customer-promo.service";
import type { Customer, CustomerPayload } from "@/types/customer";

interface CustomerFormState {
    code: string;
    name: string;
    phone: string;
    email: string;
    gender: string;
    birth_date: string;
    points: string;
    total_spent: string;
    is_member: boolean;
    notes: string;
}

const initialForm: CustomerFormState = {
    code: "",
    name: "",
    phone: "",
    email: "",
    gender: "",
    birth_date: "",
    points: "0",
    total_spent: "0",
    is_member: false,
    notes: "",
};

const toPayload = (form: CustomerFormState): CustomerPayload => ({
    code: form.code.trim() || null,
    name: form.name.trim(),
    phone: form.phone.trim() || null,
    email: form.email.trim() || null,
    gender: form.gender.trim() || null,
    birth_date: form.birth_date || null,
    points: Number(form.points || 0),
    total_spent: Number(form.total_spent || 0),
    is_member: form.is_member,
    notes: form.notes.trim() || null,
});

const fromCustomer = (customer: Customer): CustomerFormState => ({
    code: customer.code ?? "",
    name: customer.name,
    phone: customer.phone ?? "",
    email: customer.email ?? "",
    gender: customer.gender ?? "",
    birth_date: customer.birth_date ?? "",
    points: String(customer.points ?? 0),
    total_spent: String(customer.total_spent ?? 0),
    is_member: Boolean(customer.is_member),
    notes: customer.notes ?? "",
});

export default function CustomersPage() {
    const toast = useToast();
    const queryClient = useQueryClient();

    const [page, setPage] = useState(1);
    const [search, setSearch] = useState("");
    const [isMember, setIsMember] = useState<boolean | "">("");
    const [open, setOpen] = useState(false);
    const [detail, setDetail] = useState<Customer | null>(null);
    const [editing, setEditing] = useState<Customer | null>(null);
    const [deleting, setDeleting] = useState<Customer | null>(null);
    const [form, setForm] = useState<CustomerFormState>(initialForm);

    const customersQuery = useQuery({
        queryKey: ["admin-customers", page, search, isMember],
        queryFn: () =>
            customerPromoService.getCustomers({
                page,
                per_page: 10,
                search,
                is_member: isMember,
            }),
    });

    const customers = customersQuery.data?.items ?? [];
    const meta = customersQuery.data?.meta ?? null;

    const memberCount = useMemo(
        () => customers.filter((customer) => customer.is_member).length,
        [customers]
    );

    const saveMutation = useMutation({
        mutationFn: () => {
            const payload = toPayload(form);

            if (editing) {
                return customerPromoService.updateCustomer(editing.id, payload);
            }

            return customerPromoService.createCustomer(payload);
        },
        onSuccess: (response) => {
            toast.success(response.message);
            setOpen(false);
            setEditing(null);
            setForm(initialForm);
            void queryClient.invalidateQueries({ queryKey: ["admin-customers"] });
        },
        onError: (error) => {
            toast.error("Gagal menyimpan customer", parseApiError(error));
        },
    });

    const deleteMutation = useMutation({
        mutationFn: (customer: Customer) => customerPromoService.deleteCustomer(customer.id),
        onSuccess: (response) => {
            toast.success(response.message);
            setDeleting(null);
            void queryClient.invalidateQueries({ queryKey: ["admin-customers"] });
        },
        onError: (error) => {
            toast.error("Gagal menghapus customer", parseApiError(error));
        },
    });

    const openCreate = () => {
        setEditing(null);
        setForm(initialForm);
        setOpen(true);
    };

    const openEdit = (customer: Customer) => {
        setEditing(customer);
        setForm(fromCustomer(customer));
        setOpen(true);
    };

    return (
        <PermissionWrapper permission="customers.view">
            <div className="space-y-4">
                <PageHeader
                    title="Customers"
                    description="Kelola data pelanggan, status member, dan ringkasan transaksi pelanggan."
                    actions={
                        <PermissionWrapper permission="customers.create" fallback={null}>
                            <Button onClick={openCreate}>Tambah Customer</Button>
                        </PermissionWrapper>
                    }
                />

                <div className="grid gap-4 md:grid-cols-3">
                    <Card title="Total Customer">
                        <div className="text-3xl font-semibold text-slate-900">
                            {meta?.total ?? customers.length}
                        </div>
                    </Card>
                    <Card title="Member di Halaman Ini">
                        <div className="text-3xl font-semibold text-slate-900">{memberCount}</div>
                    </Card>
                    <Card title="Filter Aktif">
                        <div className="text-sm text-slate-600">{search || isMember !== "" ? "Ya" : "Tidak"}</div>
                    </Card>
                </div>

                <Card>
                    <div className="grid gap-4 md:grid-cols-3">
                        <Input
                            placeholder="Cari kode, nama, phone, atau email..."
                            value={search}
                            onChange={(event) => {
                                setSearch(event.target.value);
                                setPage(1);
                            }}
                        />

                        <select
                            className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900"
                            value={isMember === "" ? "" : String(isMember)}
                            onChange={(event) => {
                                const value = event.target.value;
                                setIsMember(value === "" ? "" : value === "true");
                                setPage(1);
                            }}
                        >
                            <option value="">Semua Status</option>
                            <option value="true">Member</option>
                            <option value="false">Non Member</option>
                        </select>
                    </div>
                </Card>

                {customersQuery.isLoading ? (
                    <Card>Memuat data customer...</Card>
                ) : customersQuery.isError ? (
                    <PageErrorState onRetry={() => void customersQuery.refetch()} />
                ) : !customers.length ? (
                    <PageEmptyState title="Belum ada customer" />
                ) : (
                    <div className="space-y-3">
                        {customers.map((customer) => (
                            <Card
                                key={customer.id}
                                title={customer.name}
                                description={customer.phone ?? customer.email ?? "-"}
                                actions={
                                    <Badge variant={customer.is_member ? "success" : "default"}>
                                        {customer.is_member ? "Member" : "Non Member"}
                                    </Badge>
                                }
                            >
                                <div className="grid gap-3 text-sm text-slate-600 md:grid-cols-4">
                                    <div>
                                        <div className="text-xs text-slate-400">Kode</div>
                                        <div className="font-medium text-slate-900">{customer.code ?? "-"}</div>
                                    </div>
                                    <div>
                                        <div className="text-xs text-slate-400">Point</div>
                                        <div className="font-medium text-slate-900">{customer.points}</div>
                                    </div>
                                    <div>
                                        <div className="text-xs text-slate-400">Total Belanja</div>
                                        <div className="font-medium text-slate-900">
                                            Rp {Number(customer.total_spent ?? 0).toLocaleString("id-ID")}
                                        </div>
                                    </div>
                                    <div>
                                        <div className="text-xs text-slate-400">Alamat</div>
                                        <div className="font-medium text-slate-900">
                                            {customer.addresses?.length ?? 0} alamat
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-4 flex flex-wrap gap-2">
                                    <Button variant="outline" onClick={() => setDetail(customer)}>
                                        Detail
                                    </Button>
                                    <PermissionWrapper permission="customers.update" fallback={null}>
                                        <Button variant="secondary" onClick={() => openEdit(customer)}>
                                            Edit
                                        </Button>
                                    </PermissionWrapper>
                                    <PermissionWrapper permission="customers.delete" fallback={null}>
                                        <Button variant="danger" onClick={() => setDeleting(customer)}>
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
                    title={editing ? "Edit Customer" : "Tambah Customer"}
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
                            label="Kode"
                            value={form.code}
                            onChange={(event) => setForm((prev) => ({ ...prev, code: event.target.value }))}
                        />
                        <Input
                            label="Nama"
                            value={form.name}
                            onChange={(event) => setForm((prev) => ({ ...prev, name: event.target.value }))}
                        />
                        <Input
                            label="Phone"
                            value={form.phone}
                            onChange={(event) => setForm((prev) => ({ ...prev, phone: event.target.value }))}
                        />
                        <Input
                            label="Email"
                            type="email"
                            value={form.email}
                            onChange={(event) => setForm((prev) => ({ ...prev, email: event.target.value }))}
                        />
                        <Input
                            label="Gender"
                            value={form.gender}
                            onChange={(event) => setForm((prev) => ({ ...prev, gender: event.target.value }))}
                        />
                        <Input
                            label="Tanggal Lahir"
                            type="date"
                            value={form.birth_date}
                            onChange={(event) => setForm((prev) => ({ ...prev, birth_date: event.target.value }))}
                        />
                        <Input
                            label="Point"
                            type="number"
                            value={form.points}
                            onChange={(event) => setForm((prev) => ({ ...prev, points: event.target.value }))}
                        />
                        <Input
                            label="Total Belanja"
                            type="number"
                            value={form.total_spent}
                            onChange={(event) =>
                                setForm((prev) => ({ ...prev, total_spent: event.target.value }))
                            }
                        />
                        <label className="flex items-center gap-2 text-sm text-slate-700">
                            <input
                                type="checkbox"
                                checked={form.is_member}
                                onChange={(event) =>
                                    setForm((prev) => ({ ...prev, is_member: event.target.checked }))
                                }
                            />
                            Customer member
                        </label>
                        <Input
                            label="Catatan"
                            value={form.notes}
                            onChange={(event) => setForm((prev) => ({ ...prev, notes: event.target.value }))}
                        />
                    </div>
                </Modal>

                <Modal
                    open={Boolean(detail)}
                    title="Detail Customer"
                    onClose={() => setDetail(null)}
                >
                    <div className="space-y-4 text-sm">
                        <Card title={detail?.name ?? "-"}>
                            <div className="grid gap-3 md:grid-cols-2">
                                <div>Kode: {detail?.code ?? "-"}</div>
                                <div>Phone: {detail?.phone ?? "-"}</div>
                                <div>Email: {detail?.email ?? "-"}</div>
                                <div>Status: {detail?.is_member ? "Member" : "Non Member"}</div>
                                <div>Point: {detail?.points ?? 0}</div>
                                <div>Total: Rp {Number(detail?.total_spent ?? 0).toLocaleString("id-ID")}</div>
                            </div>
                        </Card>

                        <Card title="Alamat Customer">
                            {!detail?.addresses?.length ? (
                                <div className="text-slate-500">Belum ada alamat.</div>
                            ) : (
                                <div className="space-y-3">
                                    {detail.addresses.map((address) => (
                                        <div key={address.id} className="rounded-xl border border-slate-200 p-3">
                                            <div className="font-semibold text-slate-900">
                                                {address.label ?? "Alamat"} {address.is_default ? "(Default)" : ""}
                                            </div>
                                            <div className="text-slate-600">{address.address}</div>
                                            <div className="text-slate-500">
                                                {[address.city, address.province, address.postal_code].filter(Boolean).join(", ")}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </Card>
                    </div>
                </Modal>

                <ConfirmDialog
                    open={Boolean(deleting)}
                    title="Hapus customer?"
                    description={`Customer ${deleting?.name ?? ""} akan dihapus.`}
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