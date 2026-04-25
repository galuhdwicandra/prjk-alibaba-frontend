import { useMemo, useState } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { PageHeader } from "@/components/navigation/PageHeader";
import { PermissionWrapper } from "@/components/navigation/PermissionWrapper";
import { PageErrorState } from "@/components/feedback/PageErrorState";
import { PageEmptyState } from "@/components/feedback/PageEmptyState";
import { Badge, Button, Card, Input } from "@/components/ui";
import { KitchenTicketCard } from "@/modules/kitchen/components/KitchenTicketCard";
import { KitchenTicketDetailModal } from "@/modules/kitchen/components/KitchenTicketDetailModal";
import { kitchenService } from "@/modules/kitchen/services/kitchen.service";
import { parseApiError } from "@/services/api/error-parser";
import { useToast } from "@/hooks/useToast";
import { useActiveOutlet } from "@/hooks/useActiveOutlet";
import type { KitchenTicket, KitchenTicketStatus } from "@/types/kitchen";

const statusOptions: Array<{ label: string; value: KitchenTicketStatus | "" }> = [
  { label: "Semua", value: "" },
  { label: "Pending", value: "pending" },
  { label: "Preparing", value: "preparing" },
  { label: "Ready", value: "ready" },
  { label: "Served", value: "served" },
  { label: "Cancelled", value: "cancelled" },
];

const statusVariant: Record<KitchenTicketStatus, "default" | "success" | "warning" | "danger" | "info"> = {
  pending: "warning",
  preparing: "info",
  ready: "success",
  served: "default",
  cancelled: "danger",
};

export default function KitchenTicketsPage() {
  const toast = useToast();
  const queryClient = useQueryClient();
  const { activeOutletId } = useActiveOutlet();

  const [search, setSearch] = useState("");
  const [status, setStatus] = useState<KitchenTicketStatus | "">("");
  const [selectedTicket, setSelectedTicket] = useState<KitchenTicket | null>(null);
  const [detailOpen, setDetailOpen] = useState(false);
  const [fullscreen, setFullscreen] = useState(false);

  const ticketsQuery = useQuery({
    queryKey: ["kitchen-tickets", search, status, activeOutletId],
    queryFn: () =>
      kitchenService.getTickets({
        per_page: 100,
        search,
        status,
        outlet_id: activeOutletId ?? "",
      }),
    refetchInterval: 10000,
  });

  const tickets = ticketsQuery.data?.items ?? [];

  const counters = useMemo(() => {
    return tickets.reduce<Record<KitchenTicketStatus, number>>(
      (accumulator, ticket) => {
        accumulator[ticket.status] += 1;
        return accumulator;
      },
      {
        pending: 0,
        preparing: 0,
        ready: 0,
        served: 0,
        cancelled: 0,
      }
    );
  }, [tickets]);

  const invalidateTickets = async () => {
    await queryClient.invalidateQueries({ queryKey: ["kitchen-tickets"] });
  };

  const actionMutation = useMutation({
    mutationFn: async ({
      ticket,
      action,
    }: {
      ticket: KitchenTicket;
      action: "print" | "start" | "ready" | "serve" | "cancel";
    }) => {
      if (action === "print") {
        return kitchenService.markPrinted(ticket.id);
      }

      if (action === "start") {
        return kitchenService.startPreparing(ticket.id);
      }

      if (action === "ready") {
        return kitchenService.markReady(ticket.id);
      }

      if (action === "serve") {
        return kitchenService.serve(ticket.id);
      }

      return kitchenService.cancel(ticket.id);
    },
    onSuccess: async (response) => {
      toast.success(response.message);
      setSelectedTicket(response.data);
      await invalidateTickets();
    },
    onError: (error) => {
      toast.error("Gagal memproses kitchen ticket", parseApiError(error));
    },
  });

  const openDetail = (ticket: KitchenTicket) => {
    setSelectedTicket(ticket);
    setDetailOpen(true);
  };

  return (
    <PermissionWrapper permission="kitchen_tickets.view">
      <div
        className={[
          "space-y-4",
          fullscreen ? "fixed inset-0 z-50 overflow-y-auto bg-slate-950 p-4" : "",
        ].join(" ")}
      >
        <PageHeader
          title="Kitchen Ticket Board"
          description="Pantau antrian pesanan dapur dan ubah status pengerjaan secara cepat."
          actions={
            <div className="flex flex-wrap gap-2">
              <Button variant="outline" onClick={() => void ticketsQuery.refetch()}>
                Refresh
              </Button>
              <Button variant={fullscreen ? "secondary" : "primary"} onClick={() => setFullscreen((prev) => !prev)}>
                {fullscreen ? "Exit Fullscreen" : "Fullscreen"}
              </Button>
            </div>
          }
        />

        <div className="grid gap-3 md:grid-cols-5">
          {(["pending", "preparing", "ready", "served", "cancelled"] as KitchenTicketStatus[]).map(
            (item) => (
              <Card key={item} className={fullscreen ? "border-slate-700 bg-slate-900" : ""}>
                <div className="flex items-center justify-between">
                  <div>
                    <div className={fullscreen ? "text-sm text-slate-400" : "text-sm text-slate-500"}>
                      {item}
                    </div>
                    <div className={fullscreen ? "text-3xl font-semibold text-white" : "text-3xl font-semibold text-slate-900"}>
                      {counters[item]}
                    </div>
                  </div>
                  <Badge variant={statusVariant[item]}>{item}</Badge>
                </div>
              </Card>
            )
          )}
        </div>

        <Card className={fullscreen ? "border-slate-700 bg-slate-900" : ""}>
          <div className="grid gap-3 md:grid-cols-[1fr_220px]">
            <Input
              placeholder="Cari ticket, order number, atau queue number..."
              value={search}
              onChange={(event) => setSearch(event.target.value)}
            />

            <select
              className="w-full rounded-xl border border-slate-300 px-3 py-2 text-sm"
              value={status}
              onChange={(event) => setStatus(event.target.value as KitchenTicketStatus | "")}
            >
              {statusOptions.map((option) => (
                <option key={option.label} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        </Card>

        {ticketsQuery.isLoading ? (
          <Card className={fullscreen ? "border-slate-700 bg-slate-900 text-white" : ""}>
            Memuat kitchen tickets...
          </Card>
        ) : ticketsQuery.isError ? (
          <PageErrorState onRetry={() => void ticketsQuery.refetch()} />
        ) : !tickets.length ? (
          <PageEmptyState title="Belum ada kitchen ticket" />
        ) : (
          <div className="grid gap-4 xl:grid-cols-3 2xl:grid-cols-4">
            {tickets.map((ticket) => (
              <KitchenTicketCard
                key={ticket.id}
                ticket={ticket}
                loading={actionMutation.isPending}
                onView={openDetail}
                onPrint={(item) => actionMutation.mutate({ ticket: item, action: "print" })}
                onStartPreparing={(item) => actionMutation.mutate({ ticket: item, action: "start" })}
                onReady={(item) => actionMutation.mutate({ ticket: item, action: "ready" })}
                onServe={(item) => actionMutation.mutate({ ticket: item, action: "serve" })}
                onCancel={(item) => actionMutation.mutate({ ticket: item, action: "cancel" })}
              />
            ))}
          </div>
        )}

        <KitchenTicketDetailModal
          open={detailOpen}
          ticket={selectedTicket}
          loading={actionMutation.isPending}
          onClose={() => setDetailOpen(false)}
          onStartPreparing={(item) => actionMutation.mutate({ ticket: item, action: "start" })}
          onReady={(item) => actionMutation.mutate({ ticket: item, action: "ready" })}
          onServe={(item) => actionMutation.mutate({ ticket: item, action: "serve" })}
          onCancel={(item) => actionMutation.mutate({ ticket: item, action: "cancel" })}
        />
      </div>
    </PermissionWrapper>
  );
}