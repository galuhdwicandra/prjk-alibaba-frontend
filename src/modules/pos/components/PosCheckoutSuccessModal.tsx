import { Badge, Button, Card, Modal } from "@/components/ui";
import type { PosReceiptSnapshot } from "@/modules/pos/types/pos";

interface PosCheckoutSuccessModalProps {
  open: boolean;
  receipt: PosReceiptSnapshot | null;
  onClose: () => void;
  onReprint: (receipt: PosReceiptSnapshot) => void;
}

const formatCurrency = (value: number) =>
  new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(Number(value || 0));

export function PosCheckoutSuccessModal({
  open,
  receipt,
  onClose,
  onReprint,
}: PosCheckoutSuccessModalProps) {
  return (
    <Modal
      open={open}
      title="Transaksi Berhasil"
      onClose={onClose}
      footer={
        <>
          <Button variant="outline" onClick={onClose}>
            Tutup
          </Button>
          <Button onClick={() => receipt && onReprint(receipt)} disabled={!receipt}>
            Print / Reprint Receipt
          </Button>
        </>
      }
    >
      {!receipt ? (
        <div className="text-sm text-slate-500">Receipt belum tersedia.</div>
      ) : (
        <div className="space-y-4">
          <Card>
            <div className="flex flex-wrap items-center gap-2">
              <Badge variant="success">success</Badge>
              <Badge variant="info">{receipt.order_channel}</Badge>
              <Badge variant={receipt.payment_status === "success" ? "success" : "warning"}>
                {receipt.payment_status}
              </Badge>
            </div>

            <div className="mt-4 space-y-2 text-sm text-slate-700">
              <div>
                <span className="font-medium text-slate-900">Order Number:</span> {receipt.order_number}
              </div>
              <div>
                <span className="font-medium text-slate-900">Outlet:</span> {receipt.outlet_name}
              </div>
              <div>
                <span className="font-medium text-slate-900">Kasir:</span> {receipt.cashier_name}
              </div>
              <div>
                <span className="font-medium text-slate-900">Customer:</span>{" "}
                {receipt.customer_name ?? "Tanpa customer"}
              </div>
              <div>
                <span className="font-medium text-slate-900">Waktu:</span>{" "}
                {new Date(receipt.ordered_at).toLocaleString("id-ID")}
              </div>
            </div>
          </Card>

          <Card title="Ringkasan Pembayaran">
            <div className="space-y-2 text-sm">
              <div className="flex items-center justify-between">
                <span>Subtotal</span>
                <span>{formatCurrency(receipt.subtotal)}</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Diskon</span>
                <span>- {formatCurrency(receipt.discount_amount)}</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Pajak</span>
                <span>{formatCurrency(receipt.tax_amount)}</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Service Charge</span>
                <span>{formatCurrency(receipt.service_charge_amount)}</span>
              </div>
              <div className="flex items-center justify-between border-t border-slate-200 pt-2 font-semibold">
                <span>Grand Total</span>
                <span>{formatCurrency(receipt.grand_total)}</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Dibayar</span>
                <span>{formatCurrency(receipt.paid_total)}</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Kembalian</span>
                <span>{formatCurrency(receipt.change_amount)}</span>
              </div>
            </div>
          </Card>

          <Card title="Items">
            <div className="space-y-3">
              {receipt.items.map((item, index) => (
                <div key={`${receipt.order_number}-item-${index}`} className="rounded-xl border border-slate-200 p-3">
                  <div className="flex items-center justify-between gap-3">
                    <div className="font-medium text-slate-900">
                      {item.product_name} x{item.qty}
                    </div>
                    <div className="text-sm font-semibold text-slate-900">
                      {formatCurrency(item.line_total)}
                    </div>
                  </div>

                  {item.variants?.length ? (
                    <div className="mt-2 space-y-1 text-xs text-slate-600">
                      {item.variants.map((entry, entryIndex) => (
                        <div key={`variant-${entryIndex}`}>
                          Variant: {entry.group_name} - {entry.option_name}
                        </div>
                      ))}
                    </div>
                  ) : null}

                  {item.modifiers?.length ? (
                    <div className="mt-2 space-y-1 text-xs text-slate-600">
                      {item.modifiers.map((entry, entryIndex) => (
                        <div key={`modifier-${entryIndex}`}>
                          Modifier: {entry.group_name} - {entry.option_name} x{entry.qty}
                        </div>
                      ))}
                    </div>
                  ) : null}

                  {item.notes?.trim() ? (
                    <div className="mt-2 text-xs text-slate-500">Catatan: {item.notes}</div>
                  ) : null}
                </div>
              ))}
            </div>
          </Card>
        </div>
      )}
    </Modal>
  );
}