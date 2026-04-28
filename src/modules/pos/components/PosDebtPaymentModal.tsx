import { useEffect, useMemo, useState } from "react";
import { Button, Input, Modal } from "@/components/ui";
import type { PosPaymentMethodOption } from "@/modules/pos/types/pos";
import type { PosOrderResponse } from "@/modules/pos/services/pos.service";

interface PosDebtPaymentModalProps {
  open: boolean;
  order: PosOrderResponse | null;
  paymentMethods: PosPaymentMethodOption[];
  loading?: boolean;
  submitting?: boolean;
  onClose: () => void;
  onSubmit: (payload: {
    payment_method_id: number;
    amount: number;
    reference_number: string | null;
    notes: string | null;
  }) => void;
}

const formatCurrency = (value: number | string | null | undefined) =>
  new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(Number(value ?? 0));

export function PosDebtPaymentModal({
  open,
  order,
  paymentMethods,
  loading = false,
  submitting = false,
  onClose,
  onSubmit,
}: PosDebtPaymentModalProps) {
  const remainingAmount = useMemo(() => {
    if (!order) {
      return 0;
    }

    return Math.max(0, Number(order.grand_total ?? 0) - Number(order.paid_total ?? 0));
  }, [order]);

  const [paymentMethodId, setPaymentMethodId] = useState<number>(0);
  const [amount, setAmount] = useState<number>(0);
  const [referenceNumber, setReferenceNumber] = useState("");
  const [notes, setNotes] = useState("");

  const selectedPaymentMethod = paymentMethods.find(
    (method) => Number(method.id) === Number(paymentMethodId)
  );

  useEffect(() => {
    if (!open) {
      setPaymentMethodId(0);
      setAmount(0);
      setReferenceNumber("");
      setNotes("");
      return;
    }

    const defaultMethod =
      paymentMethods.find((method) => method.code === "cash" || method.type === "cash") ??
      paymentMethods[0];

    setPaymentMethodId(defaultMethod?.id ?? 0);
    setAmount(remainingAmount);
    setReferenceNumber("");
    setNotes("");
  }, [open, paymentMethods, remainingAmount]);

  const canSubmit =
    Boolean(order) &&
    Number(paymentMethodId) > 0 &&
    Number(amount) > 0 &&
    Number(amount) <= remainingAmount &&
    (!selectedPaymentMethod?.requires_reference || referenceNumber.trim() !== "");

  return (
    <Modal
      open={open}
      title="Pelunasan Piutang"
      description="Catat pembayaran tambahan untuk order yang masih unpaid atau partial."
      onClose={onClose}
      footer={
        <>
          <Button variant="outline" onClick={onClose}>
            Batal
          </Button>
          <Button
            loading={submitting}
            disabled={!canSubmit || loading}
            onClick={() =>
              onSubmit({
                payment_method_id: Number(paymentMethodId),
                amount: Number(amount),
                reference_number: referenceNumber.trim() || null,
                notes: notes.trim() || null,
              })
            }
          >
            Simpan Pembayaran
          </Button>
        </>
      }
    >
      {!order ? (
        <div className="text-sm text-slate-500">Order belum dipilih.</div>
      ) : (
        <div className="space-y-4">
          <div className="grid gap-3 rounded-2xl border border-orange-100 bg-orange-50/50 p-4 text-sm md:grid-cols-2">
            <div>
              <div className="text-xs font-medium uppercase tracking-wide text-slate-500">
                Nomor Order
              </div>
              <div className="mt-1 font-semibold text-slate-950">{order.order_number}</div>
            </div>

            <div>
              <div className="text-xs font-medium uppercase tracking-wide text-slate-500">
                Status Bayar
              </div>
              <div className="mt-1 font-semibold text-slate-950">{order.payment_status}</div>
            </div>

            <div>
              <div className="text-xs font-medium uppercase tracking-wide text-slate-500">
                Grand Total
              </div>
              <div className="mt-1 font-semibold text-slate-950">
                {formatCurrency(order.grand_total)}
              </div>
            </div>

            <div>
              <div className="text-xs font-medium uppercase tracking-wide text-slate-500">
                Sisa Tagihan
              </div>
              <div className="mt-1 font-semibold text-[var(--brand-brick)]">
                {formatCurrency(remainingAmount)}
              </div>
            </div>
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">
              Metode Pembayaran
            </label>
            <select
              className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm text-slate-800 shadow-sm outline-none transition focus:border-[var(--brand-brick)] focus:ring-2 focus:ring-orange-100"
              value={paymentMethodId || ""}
              onChange={(event) => setPaymentMethodId(Number(event.target.value || 0))}
            >
              <option value="">Pilih metode pembayaran</option>
              {paymentMethods.map((method) => (
                <option key={method.id} value={method.id}>
                  {method.name} ({method.code})
                </option>
              ))}
            </select>
          </div>

          <Input
            label="Nominal Bayar"
            type="number"
            value={String(amount)}
            onChange={(event) => setAmount(Number(event.target.value || 0))}
          />

          <Input
            label={
              selectedPaymentMethod?.requires_reference
                ? "Nomor Referensi / Bukti Transfer"
                : "Nomor Referensi (Opsional)"
            }
            value={referenceNumber}
            onChange={(event) => setReferenceNumber(event.target.value)}
          />

          <Input
            label="Catatan"
            value={notes}
            onChange={(event) => setNotes(event.target.value)}
          />

          {Number(amount) > remainingAmount ? (
            <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
              Nominal bayar tidak boleh lebih besar dari sisa tagihan.
            </div>
          ) : null}
        </div>
      )}
    </Modal>
  );
}