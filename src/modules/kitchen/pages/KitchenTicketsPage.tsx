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

const statusVariant: Record<
  KitchenTicketStatus,
  "default" | "success" | "warning" | "danger" | "info"
> = {
  pending: "warning",
  preparing: "info",
  ready: "success",
  served: "default",
  cancelled: "danger",
};

const statusLabel: Record<KitchenTicketStatus, string> = {
  pending: "Pending",
  preparing: "Preparing",
  ready: "Ready",
  served: "Served",
  cancelled: "Cancelled",
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
          "space-y-5",
          fullscreen
            ? "fixed inset-0 z-50 overflow-y-auto bg-slate-950 p-4 sm:p-6"
            : "",
        ].join(" ")}
      >
        <PageHeader
          title="Kitchen Ticket Board"
          description="Pantau antrian pesanan dapur dan ubah status pengerjaan secara cepat."
          dark={fullscreen}
          actions={
            <div className="flex w-full flex-col gap-2 sm:w-auto sm:flex-row sm:flex-wrap">
              <Button
                variant={fullscreen ? "secondary" : "outline"}
                onClick={() => void ticketsQuery.refetch()}
                loading={ticketsQuery.isFetching}
              >
                Refresh
              </Button>
              <Button
                variant={fullscreen ? "secondary" : "primary"}
                onClick={() => setFullscreen((prev) => !prev)}
              >
                {fullscreen ? "Exit Fullscreen" : "Fullscreen"}
              </Button>
            </div>
          }
        />

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {(["pending", "preparing", "ready", "served", "cancelled"] as KitchenTicketStatus[]).map(
            (item) => (
              <button
                key={item}
                type="button"
                onClick={() => setStatus((prev) => (prev === item ? "" : item))}
                className={[
                  "rounded-2xl border p-4 text-left shadow-sm transition",
                  fullscreen
                    ? "border-slate-700 bg-slate-900 hover:border-orange-400"
                    : "border-[var(--color-border)] bg-white hover:border-orange-200 hover:bg-orange-50/40",
                  status === item
                    ? fullscreen
                      ? "ring-2 ring-orange-400"
                      : "ring-2 ring-orange-200"
                    : "",
                ].join(" ")}
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="min-w-0">
                    <div
                      className={[
                        "text-xs font-semibold uppercase tracking-wide",
                        fullscreen ? "text-slate-400" : "text-slate-500",
                      ].join(" ")}
                    >
                      {statusLabel[item]}
                    </div>
                    <div
                      className={[
                        "mt-2 text-3xl font-bold tracking-tight",
                        fullscreen ? "text-white" : "text-slate-950",
                      ].join(" ")}
                    >
                      {counters[item]}
                    </div>
                  </div>

                  <Badge variant={statusVariant[item]}>{statusLabel[item]}</Badge>
                </div>
              </button>
            )
          )}
        </div>

        <Card className={fullscreen ? "border-slate-700 bg-slate-900" : ""}>
          <div className="grid gap-3 lg:grid-cols-[1fr_220px_auto] lg:items-end">
            <Input
              label="Pencarian"
              placeholder="Cari ticket, order number, atau queue number..."
              value={search}
              onChange={(event) => setSearch(event.target.value)}
            />

            <div>
              <label
                className={[
                  "mb-2 block text-sm font-medium",
                  fullscreen ? "text-slate-200" : "text-slate-700",
                ].join(" ")}
              >
                Status
              </label>
              <select
                className={[
                  "w-full rounded-xl border px-3 py-2 text-sm shadow-sm outline-none transition focus:border-[var(--brand-brick)] focus:ring-2 focus:ring-orange-100",
                  fullscreen
                    ? "border-slate-700 bg-slate-950 text-white"
                    : "border-slate-300 bg-white text-slate-800",
                ].join(" ")}
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

            <div
              className={[
                "rounded-xl border px-4 py-3 text-sm",
                fullscreen
                  ? "border-slate-700 bg-slate-950 text-slate-300"
                  : "border-orange-100 bg-[var(--brand-brick-soft)] text-slate-700",
              ].join(" ")}
            >
              <div className="text-xs font-semibold uppercase tracking-wide text-[var(--brand-brick)]">
                Auto refresh
              </div>
              <div className={fullscreen ? "mt-1 text-white" : "mt-1 text-slate-900"}>
                Setiap 10 detik
              </div>
            </div>
          </div>
        </Card>

        {ticketsQuery.isLoading ? (
          <Card className={fullscreen ? "border-slate-700 bg-slate-900 text-white" : ""}>
            <div className="flex min-h-40 items-center justify-center text-sm">
              Memuat kitchen tickets...
            </div>
          </Card>
        ) : ticketsQuery.isError ? (
          <PageErrorState onRetry={() => void ticketsQuery.refetch()} />
        ) : !tickets.length ? (
          <PageEmptyState title="Belum ada kitchen ticket" />
        ) : (
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
            {tickets.map((ticket) => (
              <KitchenTicketCard
                key={ticket.id}
                ticket={ticket}
                loading={actionMutation.isPending}
                onView={openDetail}
                onPrint={(item) => actionMutation.mutate({ ticket: item, action: "print" })}
                onStartPreparing={(item) =>
                  actionMutation.mutate({ ticket: item, action: "start" })
                }
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