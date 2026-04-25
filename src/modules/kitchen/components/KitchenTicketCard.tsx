import { Badge, Button, Card } from "@/components/ui";
import type { KitchenTicket, KitchenTicketStatus } from "@/types/kitchen";

interface KitchenTicketCardProps {
  ticket: KitchenTicket;
  loading?: boolean;
  onView: (ticket: KitchenTicket) => void;
  onPrint: (ticket: KitchenTicket) => void;
  onStartPreparing: (ticket: KitchenTicket) => void;
  onReady: (ticket: KitchenTicket) => void;
  onServe: (ticket: KitchenTicket) => void;
  onCancel: (ticket: KitchenTicket) => void;
}

const statusLabel: Record<KitchenTicketStatus, string> = {
  pending: "Pending",
  preparing: "Preparing",
  ready: "Ready",
  served: "Served",
  cancelled: "Cancelled",
};

const statusVariant: Record<KitchenTicketStatus, "default" | "success" | "warning" | "danger" | "info"> = {
  pending: "warning",
  preparing: "info",
  ready: "success",
  served: "default",
  cancelled: "danger",
};

const channelLabel: Record<string, string> = {
  pos: "POS",
  dine_in: "Dine In",
  takeaway: "Takeaway",
  pickup: "Pickup",
  delivery: "Delivery",
  website: "Website",
};

const formatTime = (value?: string | null) => {
  if (!value) {
    return "-";
  }

  return new Intl.DateTimeFormat("id-ID", {
    hour: "2-digit",
    minute: "2-digit",
    day: "2-digit",
    month: "short",
  }).format(new Date(value));
};

const getTicketAgeMinutes = (value?: string | null) => {
  if (!value) {
    return 0;
  }

  const createdTime = new Date(value).getTime();
  const now = Date.now();

  if (Number.isNaN(createdTime)) {
    return 0;
  }

  return Math.max(0, Math.floor((now - createdTime) / 60000));
};

export function KitchenTicketCard({
  ticket,
  loading = false,
  onView,
  onPrint,
  onStartPreparing,
  onReady,
  onServe,
  onCancel,
}: KitchenTicketCardProps) {
  const order = ticket.order;
  const items = ticket.items ?? [];
  const ageMinutes = getTicketAgeMinutes(ticket.created_at);
  const isOverdue = ageMinutes >= 30 && !["served", "cancelled"].includes(ticket.status);

  return (
    <Card
      className={[
        "border-slate-700 bg-slate-900 text-white",
        isOverdue ? "ring-2 ring-red-500" : "",
      ].join(" ")}
      title={ticket.ticket_number}
      description={order?.order_number ?? "-"}
      actions={<Badge variant={statusVariant[ticket.status]}>{statusLabel[ticket.status]}</Badge>}
    >
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-3 text-sm">
          <div className="rounded-xl bg-slate-800 p-3">
            <div className="text-slate-400">Queue</div>
            <div className="text-xl font-semibold">{order?.queue_number ?? "-"}</div>
          </div>
          <div className="rounded-xl bg-slate-800 p-3">
            <div className="text-slate-400">Channel</div>
            <div className="text-xl font-semibold">
              {channelLabel[order?.order_channel ?? ""] ?? order?.order_channel ?? "-"}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3 text-sm">
          <div>
            <div className="text-slate-400">Outlet</div>
            <div className="font-medium">{order?.outlet?.name ?? "-"}</div>
          </div>
          <div>
            <div className="text-slate-400">Masuk</div>
            <div className="font-medium">{formatTime(ticket.created_at)}</div>
          </div>
        </div>

        <div className="space-y-2">
          {items.length ? (
            items.slice(0, 4).map((item) => (
              <div key={item.id} className="rounded-xl bg-slate-800 p-3">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <div className="font-semibold">{item.item_name_snapshot}</div>
                    {item.notes ? (
                      <div className="mt-1 text-xs text-amber-300">{item.notes}</div>
                    ) : null}
                    {item.order_item?.notes && item.order_item.notes !== item.notes ? (
                      <div className="mt-1 text-xs text-amber-300">{item.order_item.notes}</div>
                    ) : null}
                  </div>
                  <div className="rounded-lg bg-slate-700 px-3 py-1 text-sm font-semibold">
                    x{Number(item.qty)}
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="rounded-xl bg-slate-800 p-3 text-sm text-slate-300">
              Belum ada item.
            </div>
          )}

          {items.length > 4 ? (
            <div className="text-sm text-slate-400">+{items.length - 4} item lainnya</div>
          ) : null}
        </div>

        {order?.notes ? (
          <div className="rounded-xl border border-amber-500/40 bg-amber-500/10 p-3 text-sm text-amber-100">
            {order.notes}
          </div>
        ) : null}

        <div className="grid grid-cols-2 gap-2">
          <Button variant="secondary" disabled={loading} onClick={() => onView(ticket)}>
            Detail
          </Button>

          {!ticket.printed_at ? (
            <Button variant="outline" disabled={loading} onClick={() => onPrint(ticket)}>
              Print
            </Button>
          ) : null}

          {ticket.status === "pending" ? (
            <Button loading={loading} onClick={() => onStartPreparing(ticket)}>
              Mulai
            </Button>
          ) : null}

          {ticket.status === "preparing" ? (
            <Button loading={loading} onClick={() => onReady(ticket)}>
              Ready
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
      </div>
    </Card>
  );
}