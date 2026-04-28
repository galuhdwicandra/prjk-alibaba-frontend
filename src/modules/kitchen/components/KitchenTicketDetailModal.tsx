import { Badge, Button, Modal } from "@/components/ui";
import type { KitchenTicket, KitchenTicketStatus } from "@/types/kitchen";

interface KitchenTicketDetailModalProps {
  open: boolean;
  ticket: KitchenTicket | null;
  loading?: boolean;
  onClose: () => void;
  onStartPreparing: (ticket: KitchenTicket) => void;
  onReady: (ticket: KitchenTicket) => void;
  onServe: (ticket: KitchenTicket) => void;
  onCancel: (ticket: KitchenTicket) => void;
}

const statusVariant: Record<KitchenTicketStatus, "default" | "success" | "warning" | "danger" | "info"> = {
  pending: "warning",
  preparing: "info",
  ready: "success",
  served: "default",
  cancelled: "danger",
};

const formatDateTime = (value?: string | null) => {
  if (!value) {
    return "-";
  }

  return new Intl.DateTimeFormat("id-ID", {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(new Date(value));
};

export function KitchenTicketDetailModal({
  open,
  ticket,
  loading = false,
  onClose,
  onStartPreparing,
  onReady,
  onServe,
  onCancel,
}: KitchenTicketDetailModalProps) {
  const items = ticket?.items ?? [];

  return (
    <Modal
      open={open}
      title={ticket ? `Detail Ticket ${ticket.ticket_number}` : "Detail Ticket"}
      onClose={onClose}
      footer={
        ticket ? (
          <div className="flex w-full flex-col-reverse gap-2 sm:flex-row sm:items-center sm:justify-end">
            <Button variant="outline" onClick={onClose}>
              Tutup
            </Button>

            {ticket.status === "pending" ? (
              <Button loading={loading} onClick={() => onStartPreparing(ticket)}>
                Mulai Preparing
              </Button>
            ) : null}

            {ticket.status === "preparing" ? (
              <Button loading={loading} onClick={() => onReady(ticket)}>
                Tandai Ready
              </Button>
            ) : null}

            {ticket.status === "ready" ? (
              <Button loading={loading} onClick={() => onServe(ticket)}>
                Serve
              </Button>
            ) : null}

            {["pending", "preparing"].includes(ticket.status) ? (
              <Button variant="danger" disabled={loading} onClick={() => onCancel(ticket)}>
                Cancel
              </Button>
            ) : null}
          </div>
        ) : null
      }
    >
      {!ticket ? null : (
        <div className="max-h-[72vh] space-y-5 overflow-y-auto pr-1">
          <div className="rounded-2xl border border-slate-200 bg-gradient-to-br from-orange-50 via-white to-amber-50 p-4">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
              <div className="min-w-0">
                <div className="text-xs font-semibold uppercase tracking-wide text-[var(--brand-brick)]">
                  Kitchen Ticket
                </div>
                <div className="mt-1 truncate text-lg font-semibold text-slate-950">
                  {ticket.ticket_number}
                </div>
                <div className="mt-1 text-sm text-slate-600">
                  Order {ticket.order?.order_number ?? "-"} • Queue{" "}
                  {ticket.order?.queue_number ?? "-"}
                </div>
              </div>

              <div className="flex flex-wrap gap-2 sm:justify-end">
                <Badge variant={statusVariant[ticket.status]}>{ticket.status}</Badge>
                <Badge>{ticket.order?.order_channel ?? "-"}</Badge>
                <Badge>{ticket.order?.payment_status ?? "-"}</Badge>
              </div>
            </div>
          </div>

          <div className="grid gap-3 rounded-2xl border border-slate-200 bg-white p-4 text-sm sm:grid-cols-2">
            <div className="rounded-xl bg-slate-50 p-3">
              <div className="text-xs font-medium uppercase tracking-wide text-slate-500">
                Order Number
              </div>
              <div className="mt-1 font-semibold text-slate-900">
                {ticket.order?.order_number ?? "-"}
              </div>
            </div>

            <div className="rounded-xl bg-slate-50 p-3">
              <div className="text-xs font-medium uppercase tracking-wide text-slate-500">
                Queue Number
              </div>
              <div className="mt-1 font-semibold text-slate-900">
                {ticket.order?.queue_number ?? "-"}
              </div>
            </div>

            <div className="rounded-xl bg-slate-50 p-3">
              <div className="text-xs font-medium uppercase tracking-wide text-slate-500">
                Outlet
              </div>
              <div className="mt-1 font-semibold text-slate-900">
                {ticket.order?.outlet?.name ?? "-"}
              </div>
            </div>

            <div className="rounded-xl bg-slate-50 p-3">
              <div className="text-xs font-medium uppercase tracking-wide text-slate-500">
                Customer
              </div>
              <div className="mt-1 font-semibold text-slate-900">
                {ticket.order?.customer?.name ?? "-"}
              </div>
            </div>

            <div className="rounded-xl bg-slate-50 p-3">
              <div className="text-xs font-medium uppercase tracking-wide text-slate-500">
                Created
              </div>
              <div className="mt-1 font-semibold text-slate-900">
                {formatDateTime(ticket.created_at)}
              </div>
            </div>

            <div className="rounded-xl bg-slate-50 p-3">
              <div className="text-xs font-medium uppercase tracking-wide text-slate-500">
                Printed
              </div>
              <div className="mt-1 font-semibold text-slate-900">
                {formatDateTime(ticket.printed_at)}
              </div>
            </div>

            <div className="rounded-xl bg-slate-50 p-3">
              <div className="text-xs font-medium uppercase tracking-wide text-slate-500">
                Prepared
              </div>
              <div className="mt-1 font-semibold text-slate-900">
                {formatDateTime(ticket.prepared_at)}
              </div>
            </div>

            <div className="rounded-xl bg-slate-50 p-3">
              <div className="text-xs font-medium uppercase tracking-wide text-slate-500">
                Ready
              </div>
              <div className="mt-1 font-semibold text-slate-900">
                {formatDateTime(ticket.ready_at)}
              </div>
            </div>
          </div>

          {ticket.order?.notes ? (
            <div className="rounded-2xl border border-amber-200 bg-amber-50 p-4 text-sm leading-6 text-amber-800">
              <div className="mb-1 font-semibold text-amber-900">Catatan Order</div>
              {ticket.order.notes}
            </div>
          ) : null}

          <div className="space-y-3">
            <div className="flex items-center justify-between gap-3">
              <h3 className="text-sm font-semibold text-slate-900">Item Pesanan</h3>
              <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">
                {items.length} item
              </span>
            </div>

            {items.length ? (
              <div className="space-y-3">
                {items.map((item) => (
                  <div
                    key={item.id}
                    className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="min-w-0">
                        <div className="truncate font-semibold text-slate-900">
                          {item.item_name_snapshot}
                        </div>
                        <div className="mt-1 text-sm text-slate-500">
                          Qty dapur: {Number(item.qty)}
                        </div>
                      </div>

                      <div className="shrink-0 rounded-xl bg-[var(--brand-brick-soft)] px-3 py-1 text-sm font-bold text-[var(--brand-brick)]">
                        x{Number(item.qty)}
                      </div>
                    </div>

                    {item.notes ? (
                      <div className="mt-3 rounded-xl border border-amber-200 bg-amber-50 p-3 text-sm leading-6 text-amber-800">
                        <span className="font-semibold">Catatan item:</span> {item.notes}
                      </div>
                    ) : null}

                    {item.order_item?.notes && item.order_item.notes !== item.notes ? (
                      <div className="mt-3 rounded-xl border border-amber-200 bg-amber-50 p-3 text-sm leading-6 text-amber-800">
                        <span className="font-semibold">Catatan order item:</span>{" "}
                        {item.order_item.notes}
                      </div>
                    ) : null}
                  </div>
                ))}
              </div>
            ) : (
              <div className="rounded-2xl border border-dashed border-slate-300 bg-slate-50 p-6 text-center text-sm text-slate-500">
                Belum ada item pada ticket ini.
              </div>
            )}
          </div>
        </div>
      )}
    </Modal>
  );
}