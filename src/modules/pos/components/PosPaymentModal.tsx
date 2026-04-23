import { useEffect, useMemo, useState } from "react";
import { Badge, Button, Card, Input, Modal } from "@/components/ui";
import type { Customer } from "@/types/customer";
import type {
  PosCartItem,
  PosCheckoutTotals,
  PosPaymentMethodOption,
  PosPaymentSplitRow,
  PosVoucher,
} from "@/modules/pos/types/pos";

interface PosPaymentModalProps {
  open: boolean;
  onClose: () => void;
  items: PosCartItem[];
  customer: Customer | null;
  outletName: string;
  cashierName: string;
  paymentMethods: PosPaymentMethodOption[];
  availableVouchers: PosVoucher[];
  voucherLoading?: boolean;
  orderChannel: string;
  subtotal: number;
  taxPercent: number;
  serviceChargePercent: number;
  onApplyVoucher: (voucherCode: string) => Promise<void> | void;
  voucherCode: string;
  voucherDiscount: number;
  appliedVoucher: PosVoucher | null;
  onVoucherCodeChange: (value: string) => void;
  onRemoveVoucher: () => void;
  onConfirm: (payload: {
    payments: PosPaymentSplitRow[];
    totals: PosCheckoutTotals;
  }) => void;
}

const formatCurrency = (value: number) =>
  new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(Number(value || 0));

const createPaymentRow = (paymentMethodCode = "cash"): PosPaymentSplitRow => ({
  id: `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
  payment_method_code: paymentMethodCode,
  amount: 0,
  reference_number: "",
  notes: "",
});

export function PosPaymentModal({
  open,
  onClose,
  items,
  customer,
  outletName,
  cashierName,
  paymentMethods,
  availableVouchers,
  voucherLoading = false,
  orderChannel,
  subtotal,
  taxPercent,
  serviceChargePercent,
  onApplyVoucher,
  voucherCode,
  voucherDiscount,
  appliedVoucher,
  onVoucherCodeChange,
  onRemoveVoucher,
  onConfirm,
}: PosPaymentModalProps) {
  const [payments, setPayments] = useState<PosPaymentSplitRow[]>([createPaymentRow("cash")]);

  useEffect(() => {
    if (!open) {
      setPayments([createPaymentRow("cash")]);
    }
  }, [open]);

  const totals = useMemo<PosCheckoutTotals>(() => {
    const taxBase = Math.max(0, subtotal - voucherDiscount);
    const tax = Math.round((taxBase * Number(taxPercent || 0)) / 100);
    const serviceCharge = Math.round((taxBase * Number(serviceChargePercent || 0)) / 100);
    const grandTotal = Math.max(0, taxBase + tax + serviceCharge);
    const paidTotal = payments.reduce((sum, item) => sum + Number(item.amount || 0), 0);
    const remaining = Math.max(0, grandTotal - paidTotal);
    const changeAmount = Math.max(0, paidTotal - grandTotal);

    return {
      subtotal,
      discount: voucherDiscount,
      tax,
      serviceCharge,
      grandTotal,
      paidTotal,
      remaining,
      changeAmount,
    };
  }, [payments, serviceChargePercent, subtotal, taxPercent, voucherDiscount]);

  const cashRow = payments.find((item) => item.payment_method_code === "cash") ?? null;

  const suggestedVoucherList = useMemo(() => {
    return availableVouchers.slice(0, 6);
  }, [availableVouchers]);

  const handleChangePayment = (
    rowId: string,
    key: keyof PosPaymentSplitRow,
    value: string | number
  ) => {
    setPayments((prev) =>
      prev.map((row) =>
        row.id === rowId
          ? {
              ...row,
              [key]: value,
            }
          : row
      )
    );
  };

  const handleAddPayment = () => {
    const fallbackCode = paymentMethods.find((method) => method.code !== "cash")?.code ?? "cash";
    setPayments((prev) => [...prev, createPaymentRow(fallbackCode)]);
  };

  const handleRemovePayment = (rowId: string) => {
    setPayments((prev) => {
      if (prev.length <= 1) {
        return prev;
      }

      return prev.filter((row) => row.id !== rowId);
    });
  };

  const handleAutoFillCash = () => {
    if (!cashRow) {
      return;
    }

    setPayments((prev) =>
      prev.map((row) =>
        row.id === cashRow.id
          ? {
              ...row,
              amount: totals.grandTotal,
            }
          : row
      )
    );
  };

  const handleConfirm = () => {
    if (!items.length) {
      return;
    }

    const invalidRow = payments.find(
      (row) =>
        !row.payment_method_code ||
        Number(row.amount || 0) <= 0 ||
        !Number.isFinite(Number(row.amount))
    );

    if (invalidRow) {
      return;
    }

    onConfirm({
      payments,
      totals,
    });
  };

  return (
    <Modal
      open={open}
      title="Checkout & Payment"
      onClose={onClose}
      footer={
        <>
          <Button variant="outline" onClick={onClose}>
            Batal
          </Button>
          <Button onClick={handleConfirm} disabled={!items.length || totals.paidTotal <= 0}>
            Selesaikan Checkout
          </Button>
        </>
      }
    >
      <div className="max-h-[75vh] space-y-4 overflow-y-auto pr-1">
        <Card>
          <div className="grid gap-3 md:grid-cols-2">
            <div className="rounded-xl bg-slate-50 p-3 text-sm text-slate-700">
              <div className="text-xs uppercase tracking-wide text-slate-500">Outlet</div>
              <div className="font-semibold text-slate-900">{outletName}</div>
            </div>

            <div className="rounded-xl bg-slate-50 p-3 text-sm text-slate-700">
              <div className="text-xs uppercase tracking-wide text-slate-500">Kasir</div>
              <div className="font-semibold text-slate-900">{cashierName}</div>
            </div>

            <div className="rounded-xl bg-slate-50 p-3 text-sm text-slate-700">
              <div className="text-xs uppercase tracking-wide text-slate-500">Channel</div>
              <div className="font-semibold text-slate-900">{orderChannel}</div>
            </div>

            <div className="rounded-xl bg-slate-50 p-3 text-sm text-slate-700">
              <div className="text-xs uppercase tracking-wide text-slate-500">Customer</div>
              <div className="font-semibold text-slate-900">{customer?.name ?? "Tanpa customer"}</div>
            </div>
          </div>
        </Card>

        <Card title="Voucher">
          <div className="grid gap-3 md:grid-cols-[1fr_auto_auto]">
            <Input
              label="Kode Voucher"
              value={voucherCode}
              onChange={(event) => onVoucherCodeChange(event.target.value.toUpperCase())}
              placeholder="contoh: HEMAT10K"
            />

            <div className="pt-7">
              <Button variant="outline" onClick={() => onApplyVoucher(voucherCode)} disabled={!voucherCode.trim()}>
                Terapkan
              </Button>
            </div>

            <div className="pt-7">
              <Button variant="danger" onClick={onRemoveVoucher} disabled={!appliedVoucher}>
                Hapus Voucher
              </Button>
            </div>
          </div>

          {appliedVoucher ? (
            <div className="mt-3 rounded-xl border border-emerald-200 bg-emerald-50 p-3 text-sm text-emerald-800">
              <div className="font-semibold">
                {appliedVoucher.code} - {appliedVoucher.name}
              </div>
              <div>Diskon diterapkan: {formatCurrency(voucherDiscount)}</div>
            </div>
          ) : null}

          {voucherLoading ? (
            <div className="mt-3 text-sm text-slate-500">Memuat voucher...</div>
          ) : suggestedVoucherList.length ? (
            <div className="mt-4 space-y-2">
              <div className="text-sm font-medium text-slate-700">Voucher tersedia</div>
              <div className="flex flex-wrap gap-2">
                {suggestedVoucherList.map((voucher) => (
                  <button
                    key={voucher.id}
                    type="button"
                    className="rounded-xl border border-slate-300 px-3 py-2 text-left text-sm hover:bg-slate-50"
                    onClick={() => {
                      onVoucherCodeChange(voucher.code);
                      void onApplyVoucher(voucher.code);
                    }}
                  >
                    <div className="font-semibold text-slate-900">{voucher.code}</div>
                    <div className="text-xs text-slate-500">{voucher.name}</div>
                  </button>
                ))}
              </div>
            </div>
          ) : null}
        </Card>

        <Card
          title="Split Payment"
          actions={
            <div className="flex gap-2">
              <Button variant="outline" onClick={handleAddPayment}>
                Tambah Payment
              </Button>
              {cashRow ? (
                <Button variant="secondary" onClick={handleAutoFillCash}>
                  Pas Bayar Tunai
                </Button>
              ) : null}
            </div>
          }
        >
          <div className="space-y-3">
            {payments.map((row, index) => {
              const selectedMethod =
                paymentMethods.find((method) => method.code === row.payment_method_code) ?? null;

              return (
                <div key={row.id} className="rounded-2xl border border-slate-200 p-4">
                  <div className="mb-3 flex items-center justify-between">
                    <div className="font-semibold text-slate-900">Payment #{index + 1}</div>
                    <Button
                      variant="danger"
                      onClick={() => handleRemovePayment(row.id)}
                      disabled={payments.length <= 1}
                    >
                      Hapus
                    </Button>
                  </div>

                  <div className="grid gap-3 md:grid-cols-2">
                    <div>
                      <label className="mb-2 block text-sm font-medium text-slate-700">
                        Metode Pembayaran
                      </label>
                      <select
                        className="w-full rounded-xl border border-slate-300 px-3 py-2 text-sm"
                        value={row.payment_method_code}
                        onChange={(event) =>
                          handleChangePayment(row.id, "payment_method_code", event.target.value)
                        }
                      >
                        {paymentMethods
                          .filter((method) => method.is_active)
                          .map((method) => (
                            <option key={method.code} value={method.code}>
                              {method.name}
                            </option>
                          ))}
                      </select>
                    </div>

                    <Input
                      label="Nominal"
                      type="number"
                      value={String(row.amount || 0)}
                      onChange={(event) =>
                        handleChangePayment(row.id, "amount", Number(event.target.value || 0))
                      }
                    />

                    <Input
                      label="Reference Number"
                      value={row.reference_number}
                      onChange={(event) =>
                        handleChangePayment(row.id, "reference_number", event.target.value)
                      }
                      placeholder={
                        selectedMethod?.requires_reference
                          ? "Wajib untuk metode ini"
                          : "Opsional"
                      }
                    />

                    <Input
                      label="Catatan Pembayaran"
                      value={row.notes}
                      onChange={(event) => handleChangePayment(row.id, "notes", event.target.value)}
                      placeholder="Opsional"
                    />
                  </div>

                  <div className="mt-3">
                    <Badge variant="info">
                      {selectedMethod?.name ?? row.payment_method_code}
                    </Badge>
                  </div>
                </div>
              );
            })}
          </div>
        </Card>

        <Card title="Ringkasan Total">
          <div className="space-y-2 text-sm">
            <div className="flex items-center justify-between">
              <span>Subtotal</span>
              <span>{formatCurrency(totals.subtotal)}</span>
            </div>
            <div className="flex items-center justify-between">
              <span>Diskon Voucher</span>
              <span>- {formatCurrency(totals.discount)}</span>
            </div>
            <div className="flex items-center justify-between">
              <span>Pajak</span>
              <span>{formatCurrency(totals.tax)}</span>
            </div>
            <div className="flex items-center justify-between">
              <span>Service Charge</span>
              <span>{formatCurrency(totals.serviceCharge)}</span>
            </div>
            <div className="border-t border-slate-200 pt-2 text-base font-semibold">
              <div className="flex items-center justify-between">
                <span>Grand Total</span>
                <span>{formatCurrency(totals.grandTotal)}</span>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span>Total Dibayar</span>
              <span>{formatCurrency(totals.paidTotal)}</span>
            </div>
            <div className="flex items-center justify-between">
              <span>Sisa Bayar</span>
              <span>{formatCurrency(totals.remaining)}</span>
            </div>
            <div className="flex items-center justify-between">
              <span>Kembalian</span>
              <span>{formatCurrency(totals.changeAmount)}</span>
            </div>
          </div>
        </Card>
      </div>
    </Modal>
  );
}