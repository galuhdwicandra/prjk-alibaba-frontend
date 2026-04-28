import { useState } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { PageHeader } from "@/components/navigation/PageHeader";
import { PermissionWrapper } from "@/components/navigation/PermissionWrapper";
import { PageErrorState } from "@/components/feedback/PageErrorState";
import { PageEmptyState } from "@/components/feedback/PageEmptyState";
import { Badge, Button, Card, Input } from "@/components/ui";
import { kitchenService } from "@/modules/kitchen/services/kitchen.service";
import { parseApiError } from "@/services/api/error-parser";
import { useToast } from "@/hooks/useToast";
import { useActiveOutlet } from "@/hooks/useActiveOutlet";
import type { KitchenTicket } from "@/types/kitchen";

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

export default function ReadyQueuePage() {
  const toast = useToast();
  const queryClient = useQueryClient();
  const { activeOutletId } = useActiveOutlet();

  const [search, setSearch] = useState("");

  const readyQuery = useQuery({
    queryKey: ["kitchen-ready-queue", search, activeOutletId],
    queryFn: () =>
      kitchenService.getTickets({
        per_page: 100,
        search,
        status: "ready",
        outlet_id: activeOutletId ?? "",
      }),
    refetchInterval: 10000,
  });

  const readyTickets = readyQuery.data?.items ?? [];

  const serveMutation = useMutation({
    mutationFn: (ticket: KitchenTicket) => kitchenService.serve(ticket.id),
    onSuccess: async (response) => {
      toast.success(response.message);
      await queryClient.invalidateQueries({ queryKey: ["kitchen-ready-queue"] });
      await queryClient.invalidateQueries({ queryKey: ["kitchen-tickets"] });
    },
    onError: (error) => {
      toast.error("Gagal menyelesaikan ticket", parseApiError(error));
    },
  });

  return (
    <PermissionWrapper permission="kitchen_tickets.view">
      <div className="space-y-5">
        <PageHeader
          title="Ready Queue"
          description="Daftar pesanan yang sudah siap disajikan atau diserahkan."
          actions={
            <Button
              variant="outline"
              loading={readyQuery.isFetching}
              onClick={() => void readyQuery.refetch()}
            >
              Refresh
            </Button>
          }
        />

        <div className="grid gap-4 lg:grid-cols-[1fr_240px]">
          <Card>
            <Input
              label="Pencarian"
              placeholder="Cari ticket, order number, atau queue number..."
              value={search}
              onChange={(event) => setSearch(event.target.value)}
            />
          </Card>

          <Card>
            <div className="text-xs font-semibold uppercase tracking-wide text-[var(--brand-brick)]">
              Ready Ticket
            </div>
            <div className="mt-2 text-3xl font-bold tracking-tight text-slate-950">
              {readyTickets.length}
            </div>
            <div className="mt-1 text-sm text-slate-500">
              Auto refresh setiap 10 detik
            </div>
          </Card>
        </div>

        {readyQuery.isLoading ? (
          <Card>
            <div className="flex min-h-40 items-center justify-center text-sm text-slate-500">
              Memuat ready queue...
            </div>
          </Card>
        ) : readyQuery.isError ? (
          <PageErrorState onRetry={() => void readyQuery.refetch()} />
        ) : !readyTickets.length ? (
          <PageEmptyState
            title="Belum ada pesanan ready"
            description="Pesanan yang sudah siap akan muncul di halaman ini."
          />
        ) : (
          <div className="grid gap-4 lg:grid-cols-2 xl:grid-cols-3">
            {readyTickets.map((ticket) => (
              <Card
                key={ticket.id}
                title={ticket.ticket_number}
                description={ticket.order?.order_number ?? "-"}
                actions={<Badge variant="success">Ready</Badge>}
                className="overflow-hidden"
              >
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-3 text-sm">
                    <div className="rounded-2xl border border-orange-100 bg-[var(--brand-brick-soft)] p-4">
                      <div className="text-xs font-semibold uppercase tracking-wide text-[var(--brand-brick)]">
                        Queue
                      </div>
                      <div className="mt-2 text-3xl font-bold text-slate-950">
                        {ticket.order?.queue_number ?? "-"}
                      </div>
                    </div>

                    <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                      <div className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                        Ready At
                      </div>
                      <div className="mt-2 text-base font-semibold text-slate-900">
                        {formatTime(ticket.ready_at)}
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    {(ticket.items ?? []).map((item) => (
                      <div
                        key={item.id}
                        className="flex items-start justify-between gap-3 rounded-2xl border border-slate-200 bg-white p-3 shadow-sm"
                      >
                        <div className="min-w-0">
                          <div className="truncate font-semibold text-slate-900">
                            {item.item_name_snapshot}
                          </div>
                          {item.notes ? (
                            <div className="mt-1 rounded-lg bg-amber-50 px-2 py-1 text-xs font-medium text-amber-700">
                              {item.notes}
                            </div>
                          ) : null}
                        </div>

                        <div className="shrink-0 rounded-full bg-slate-100 px-3 py-1 text-sm font-bold text-slate-900">
                          x{Number(item.qty)}
                        </div>
                      </div>
                    ))}
                  </div>

                  <Button
                    fullWidth
                    loading={serveMutation.isPending}
                    onClick={() => serveMutation.mutate(ticket)}
                  >
                    Serve / Selesai
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        )}
      </div>
    </PermissionWrapper>
  );
}