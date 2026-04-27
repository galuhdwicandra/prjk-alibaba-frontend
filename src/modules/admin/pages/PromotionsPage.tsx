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
import type {
    Promotion,
    PromotionPayload,
    PromotionRulePayload,
    PromotionRuleType,
    PromotionType,
} from "@/types/promo";

interface PromotionFormState {
    name: string;
    description: string;
    promotion_type: PromotionType;
    starts_at: string;
    ends_at: string;
    priority: string;
    is_active: boolean;
    rules: PromotionRulePayload[];
}

const createEmptyRule = (): PromotionRulePayload => ({
    rule_type: "min_total",
    operator: ">=",
    value: "",
});

const initialForm: PromotionFormState = {
    name: "",
    description: "",
    promotion_type: "discount",
    starts_at: "",
    ends_at: "",
    priority: "0",
    is_active: true,
    rules: [createEmptyRule()],
};

const toPayload = (form: PromotionFormState): PromotionPayload => ({
    name: form.name.trim(),
    description: form.description.trim() || null,
    promotion_type: form.promotion_type,
    starts_at: form.starts_at || null,
    ends_at: form.ends_at || null,
    priority: Number(form.priority || 0),
    is_active: form.is_active,
    rules: form.rules
        .filter((rule) => rule.rule_type && String(rule.value ?? "").trim() !== "")
        .map((rule) => ({
            rule_type: rule.rule_type,
            operator: rule.operator || null,
            value: rule.value || null,
        })),
});

const fromPromotion = (promotion: Promotion): PromotionFormState => ({
    name: promotion.name,
    description: promotion.description ?? "",
    promotion_type: promotion.promotion_type,
    starts_at: promotion.starts_at ?? "",
    ends_at: promotion.ends_at ?? "",
    priority: String(promotion.priority ?? 0),
    is_active: Boolean(promotion.is_active),
    rules:
        promotion.rules?.length
            ? promotion.rules.map((rule) => ({
                rule_type: rule.rule_type,
                operator: rule.operator,
                value: rule.value,
            }))
            : [createEmptyRule()],
});

export default function PromotionsPage() {
    const toast = useToast();
    const queryClient = useQueryClient();

    const [page, setPage] = useState(1);
    const [search, setSearch] = useState("");
    const [isActive, setIsActive] = useState<boolean | "">("");
    const [open, setOpen] = useState(false);
    const [editing, setEditing] = useState<Promotion | null>(null);
    const [deleting, setDeleting] = useState<Promotion | null>(null);
    const [form, setForm] = useState<PromotionFormState>(initialForm);

    const promotionsQuery = useQuery({
        queryKey: ["admin-promotions", page, search, isActive],
        queryFn: () =>
            customerPromoService.getPromotions({
                page,
                per_page: 10,
                search,
                is_active: isActive,
            }),
    });

    const promotions = promotionsQuery.data?.items ?? [];
    const meta = promotionsQuery.data?.meta ?? null;

    const saveMutation = useMutation({
        mutationFn: () => {
            const payload = toPayload(form);

            if (editing) {
                return customerPromoService.updatePromotion(editing.id, payload);
            }

            return customerPromoService.createPromotion(payload);
        },
        onSuccess: (response) => {
            toast.success(response.message);
            setOpen(false);
            setEditing(null);
            setForm(initialForm);
            void queryClient.invalidateQueries({ queryKey: ["admin-promotions"] });
        },
        onError: (error) => {
            toast.error("Gagal menyimpan promotion", parseApiError(error));
        },
    });

    const deleteMutation = useMutation({
        mutationFn: (promotion: Promotion) => customerPromoService.deletePromotion(promotion.id),
        onSuccess: (response) => {
            toast.success(response.message);
            setDeleting(null);
            void queryClient.invalidateQueries({ queryKey: ["admin-promotions"] });
        },
        onError: (error) => {
            toast.error("Gagal menghapus promotion", parseApiError(error));
        },
    });

    const openCreate = () => {
        setEditing(null);
        setForm(initialForm);
        setOpen(true);
    };

    const openEdit = (promotion: Promotion) => {
        setEditing(promotion);
        setForm(fromPromotion(promotion));
        setOpen(true);
    };

    const updateRule = (index: number, next: PromotionRulePayload) => {
        setForm((prev) => {
            const rules = [...prev.rules];
            rules[index] = next;

            return {
                ...prev,
                rules,
            };
        });
    };

    return (
        <PermissionWrapper permission="promotions.view">
            <div className="space-y-4">
                <PageHeader
                    title="Promotions"
                    description="Kelola promo campaign, tipe promo, prioritas, masa aktif, dan rule sederhana."
                    actions={
                        <PermissionWrapper permission="promotions.create" fallback={null}>
                            <Button onClick={openCreate}>Tambah Promo</Button>
                        </PermissionWrapper>
                    }
                />

                <Card>
                    <div className="grid gap-4 md:grid-cols-3">
                        <Input
                            placeholder="Cari nama promo..."
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

                {promotionsQuery.isLoading ? (
                    <Card>Memuat data promotion...</Card>
                ) : promotionsQuery.isError ? (
                    <PageErrorState onRetry={() => void promotionsQuery.refetch()} />
                ) : !promotions.length ? (
                    <PageEmptyState title="Belum ada promotion" />
                ) : (
                    <div className="grid gap-4 lg:grid-cols-2">
                        {promotions.map((promotion) => (
                            <Card
                                key={promotion.id}
                                title={promotion.name}
                                description={promotion.description ?? "-"}
                                actions={
                                    <Badge variant={promotion.is_active ? "success" : "danger"}>
                                        {promotion.is_active ? "Aktif" : "Nonaktif"}
                                    </Badge>
                                }
                            >
                                <div className="space-y-2 text-sm text-slate-600">
                                    <div>
                                        Tipe: <span className="font-semibold text-slate-900">{promotion.promotion_type}</span>
                                    </div>
                                    <div>Prioritas: {promotion.priority}</div>
                                    <div>
                                        Berlaku: {promotion.starts_at ?? "-"} s/d {promotion.ends_at ?? "-"}
                                    </div>
                                    <div>Rules: {promotion.rules?.length ?? 0}</div>
                                </div>

                                <div className="mt-4 flex flex-wrap gap-2">
                                    <PermissionWrapper permission="promotions.update" fallback={null}>
                                        <Button variant="secondary" onClick={() => openEdit(promotion)}>
                                            Edit
                                        </Button>
                                    </PermissionWrapper>
                                    <PermissionWrapper permission="promotions.delete" fallback={null}>
                                        <Button variant="danger" onClick={() => setDeleting(promotion)}>
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
                    title={editing ? "Edit Promotion" : "Tambah Promotion"}
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
                    <div className="space-y-4">
                        <div className="grid gap-4 md:grid-cols-2">
                            <Input
                                label="Nama Promo"
                                value={form.name}
                                onChange={(event) => setForm((prev) => ({ ...prev, name: event.target.value }))}
                            />

                            <div>
                                <label className="mb-2 block text-sm font-medium text-slate-700">Tipe Promo</label>
                                <select
                                    className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm"
                                    value={form.promotion_type}
                                    onChange={(event) =>
                                        setForm((prev) => ({
                                            ...prev,
                                            promotion_type: event.target.value as PromotionType,
                                        }))
                                    }
                                >
                                    <option value="discount">discount</option>
                                    <option value="bundle">bundle</option>
                                    <option value="buy_x_get_y">buy_x_get_y</option>
                                </select>
                            </div>

                            <Input
                                label="Mulai"
                                type="datetime-local"
                                value={form.starts_at}
                                onChange={(event) =>
                                    setForm((prev) => ({ ...prev, starts_at: event.target.value }))
                                }
                            />

                            <Input
                                label="Berakhir"
                                type="datetime-local"
                                value={form.ends_at}
                                onChange={(event) =>
                                    setForm((prev) => ({ ...prev, ends_at: event.target.value }))
                                }
                            />

                            <Input
                                label="Prioritas"
                                type="number"
                                value={form.priority}
                                onChange={(event) =>
                                    setForm((prev) => ({ ...prev, priority: event.target.value }))
                                }
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
                                Promo aktif
                            </label>
                        </div>

                        <Card title="Promotion Rules">
                            <div className="space-y-3">
                                {form.rules.map((rule, index) => (
                                    <div key={index} className="grid gap-3 rounded-xl border border-slate-200 p-3 md:grid-cols-4">
                                        <div>
                                            <label className="mb-2 block text-sm font-medium text-slate-700">Rule Type</label>
                                            <select
                                                className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm"
                                                value={rule.rule_type}
                                                onChange={(event) =>
                                                    updateRule(index, {
                                                        ...rule,
                                                        rule_type: event.target.value as PromotionRuleType,
                                                    })
                                                }
                                            >
                                                <option value="min_total">min_total</option>
                                                <option value="product">product</option>
                                                <option value="category">category</option>
                                                <option value="outlet">outlet</option>
                                                <option value="channel">channel</option>
                                                <option value="time">time</option>
                                            </select>
                                        </div>

                                        <Input
                                            label="Operator"
                                            value={rule.operator ?? ""}
                                            onChange={(event) =>
                                                updateRule(index, {
                                                    ...rule,
                                                    operator: event.target.value,
                                                })
                                            }
                                        />

                                        <Input
                                            label="Value"
                                            value={rule.value ?? ""}
                                            onChange={(event) =>
                                                updateRule(index, {
                                                    ...rule,
                                                    value: event.target.value,
                                                })
                                            }
                                        />

                                        <div className="flex items-end">
                                            <Button
                                                variant="danger"
                                                onClick={() =>
                                                    setForm((prev) => ({
                                                        ...prev,
                                                        rules: prev.rules.filter((_, ruleIndex) => ruleIndex !== index),
                                                    }))
                                                }
                                            >
                                                Hapus
                                            </Button>
                                        </div>
                                    </div>
                                ))}

                                <Button
                                    variant="outline"
                                    onClick={() =>
                                        setForm((prev) => ({
                                            ...prev,
                                            rules: [...prev.rules, createEmptyRule()],
                                        }))
                                    }
                                >
                                    Tambah Rule
                                </Button>
                            </div>
                        </Card>
                    </div>
                </Modal>

                <ConfirmDialog
                    open={Boolean(deleting)}
                    title="Hapus promotion?"
                    description={`Promotion ${deleting?.name ?? ""} akan dihapus.`}
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