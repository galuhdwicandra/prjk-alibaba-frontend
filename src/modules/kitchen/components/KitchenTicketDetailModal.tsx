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
          <>
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
          </>
        ) : null
      }
    >
      {!ticket ? null : (
        <div className="space-y-5">
          <div className="flex flex-wrap items-center gap-2">
            <Badge variant={statusVariant[ticket.status]}>{ticket.status}</Badge>
            <Badge>{ticket.order?.order_channel ?? "-"}</Badge>
            <Badge>{ticket.order?.payment_status ?? "-"}</Badge>
          </div>

          <div className="grid gap-3 rounded-2xl bg-slate-50 p-4 text-sm md:grid-cols-2">
            <div>
              <div className="text-slate-500">Order Number</div>
              <div className="font-semibold text-slate-900">{ticket.order?.order_number ?? "-"}</div>
            </div>
            <div>
              <div className="text-slate-500">Queue Number</div>
              <div className="font-semibold text-slate-900">{ticket.order?.queue_number ?? "-"}</div>
            </div>
            <div>
              <div className="text-slate-500">Outlet</div>
              <div className="font-semibold text-slate-900">{ticket.order?.outlet?.name ?? "-"}</div>
            </div>
            <div>
              <div className="text-slate-500">Customer</div>
              <div className="font-semibold text-slate-900">{ticket.order?.customer?.name ?? "-"}</div>
            </div>
            <div>
              <div className="text-slate-500">Created</div>
              <div className="font-semibold text-slate-900">{formatDateTime(ticket.created_at)}</div>
            </div>
            <div>
              <div className="text-slate-500">Printed</div>
              <div className="font-semibold text-slate-900">{formatDateTime(ticket.printed_at)}</div>
            </div>
            <div>
              <div className="text-slate-500">Prepared</div>
              <div className="font-semibold text-slate-900">{formatDateTime(ticket.prepared_at)}</div>
            </div>
            <div>
              <div className="text-slate-500">Ready</div>
              <div className="font-semibold text-slate-900">{formatDateTime(ticket.ready_at)}</div>
            </div>
          </div>

          {ticket.order?.notes ? (
            <div className="rounded-2xl border border-amber-200 bg-amber-50 p-4 text-sm text-amber-800">
              {ticket.order.notes}
            </div>
          ) : null}

          <div className="space-y-3">
            <h3 className="text-sm font-semibold text-slate-900">Item Pesanan</h3>

            {items.length ? (
              items.map((item) => (
                <div key={item.id} className="rounded-2xl border border-slate-200 p-4">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="font-semibold text-slate-900">{item.item_name_snapshot}</div>
                      <div className="mt-1 text-sm text-slate-500">
                        Qty: {Number(item.qty)}
                      </div>
                    </div>
                    <div className="rounded-xl bg-slate-100 px-3 py-1 text-sm font-semibold text-slate-800">
                      x{Number(item.qty)}
                    </div>
                  </div>

                  {item.notes ? (
                    <div className="mt-3 rounded-xl bg-amber-50 p-3 text-sm text-amber-700">
                      Catatan item: {item.notes}
                    </div>
                  ) : null}

                  {item.order_item?.notes && item.order_item.notes !== item.notes ? (
                    <div className="mt-3 rounded-xl bg-amber-50 p-3 text-sm text-amber-700">
                      Catatan order item: {item.order_item.notes}
                    </div>
                  ) : null}
                </div>
              ))
            ) : (
              <div className="rounded-2xl border border-slate-200 p-4 text-sm text-slate-500">
                Belum ada item pada ticket ini.
              </div>
            )}
          </div>
        </div>
      )}
    </Modal>
  );
}