import { Button, Card, Input } from "@/components/ui";
import type { DashboardFilter } from "@/types/dashboard";
import type { Outlet } from "@/types/outlet";

interface DashboardFiltersProps {
  value: DashboardFilter;
  outlets: Outlet[];
  loading?: boolean;
  onChange: (next: DashboardFilter) => void;
  onRefresh: () => void;
  showOutletFilter?: boolean;
}

export function DashboardFilters({
  value,
  outlets,
  loading = false,
  onChange,
  onRefresh,
  showOutletFilter = true,
}: DashboardFiltersProps) {
  return (
    <Card>
      <div className="grid gap-4 md:grid-cols-5">
        {showOutletFilter ? (
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">
              Outlet
            </label>
            <select
              className="w-full rounded-xl border border-slate-300 px-3 py-2 text-sm"
              value={value.outlet_id ?? ""}
              onChange={(event) =>
                onChange({
                  ...value,
                  outlet_id: event.target.value ? Number(event.target.value) : "",
                })
              }
            >
              <option value="">Semua outlet</option>
              {outlets.map((outlet) => (
                <option key={outlet.id} value={outlet.id}>
                  {outlet.name}
                </option>
              ))}
            </select>
          </div>
        ) : null}

        <Input
          label="Tanggal Awal"
          type="date"
          value={value.date_from ?? ""}
          onChange={(event) =>
            onChange({
              ...value,
              date_from: event.target.value,
            })
          }
        />

        <Input
          label="Tanggal Akhir"
          type="date"
          value={value.date_until ?? ""}
          onChange={(event) =>
            onChange({
              ...value,
              date_until: event.target.value,
            })
          }
        />

        <Input
          label="Limit"
          type="number"
          min="1"
          max="20"
          value={String(value.limit ?? 5)}
          onChange={(event) =>
            onChange({
              ...value,
              limit: Number(event.target.value || 5),
            })
          }
        />

        <div className="flex items-end">
          <Button loading={loading} onClick={onRefresh}>
            Refresh
          </Button>
        </div>
      </div>
    </Card>
  );
}