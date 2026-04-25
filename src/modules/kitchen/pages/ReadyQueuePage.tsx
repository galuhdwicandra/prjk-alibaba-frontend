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
      <div className="space-y-4">
        <PageHeader
          title="Ready Queue"
          description="Daftar pesanan yang sudah siap disajikan atau diserahkan."
          actions={
            <Button variant="outline" onClick={() => void readyQuery.refetch()}>
              Refresh
            </Button>
          }
        />

        <Card>
          <Input
            placeholder="Cari ticket, order number, atau queue number..."
            value={search}
            onChange={(event) => setSearch(event.target.value)}
          />
        </Card>

        {readyQuery.isLoading ? (
          <Card>Memuat ready queue...</Card>
        ) : readyQuery.isError ? (
          <PageErrorState onRetry={() => void readyQuery.refetch()} />
        ) : !readyTickets.length ? (
          <PageEmptyState title="Belum ada pesanan ready" />
        ) : (
          <div className="grid gap-4 lg:grid-cols-2 xl:grid-cols-3">
            {readyTickets.map((ticket) => (
              <Card
                key={ticket.id}
                title={ticket.ticket_number}
                description={ticket.order?.order_number ?? "-"}
                actions={<Badge variant="success">Ready</Badge>}
              >
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-3 text-sm">
                    <div className="rounded-xl bg-slate-50 p-3">
                      <div className="text-slate-500">Queue</div>
                      <div className="text-2xl font-semibold text-slate-900">
                        {ticket.order?.queue_number ?? "-"}
                      </div>
                    </div>

                    <div className="rounded-xl bg-slate-50 p-3">
                      <div className="text-slate-500">Ready At</div>
                      <div className="font-semibold text-slate-900">
                        {formatTime(ticket.ready_at)}
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    {(ticket.items ?? []).map((item) => (
                      <div key={item.id} className="flex justify-between rounded-xl border border-slate-200 p-3">
                        <div>
                          <div className="font-medium text-slate-900">{item.item_name_snapshot}</div>
                          {item.notes ? (
                            <div className="mt-1 text-xs text-amber-700">{item.notes}</div>
                          ) : null}
                        </div>
                        <div className="font-semibold text-slate-900">x{Number(item.qty)}</div>
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