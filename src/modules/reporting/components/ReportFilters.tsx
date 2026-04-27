import type { ReportExportFormat, ReportFilterParams, ReportGroupBy } from "@/types/report";
import { Button, Card, Input } from "@/components/ui";

interface ReportFiltersProps {
  value: ReportFilterParams;
  exportFormat: ReportExportFormat;
  loading?: boolean;
  exporting?: boolean;
  onChange: (next: ReportFilterParams) => void;
  onExportFormatChange: (format: ReportExportFormat) => void;
  onRefresh: () => void;
  onExport: () => void;
}

const groupByOptions: ReportGroupBy[] = ["day", "week", "month"];
const exportFormatOptions: ReportExportFormat[] = ["csv", "xls", "pdf"];

export function ReportFilters({
  value,
  exportFormat,
  loading = false,
  exporting = false,
  onChange,
  onExportFormatChange,
  onRefresh,
  onExport,
}: ReportFiltersProps) {
  const update = <K extends keyof ReportFilterParams>(key: K, fieldValue: ReportFilterParams[K]) => {
    onChange({
      ...value,
      [key]: fieldValue,
    });
  };

  return (
    <Card>
      <div className="grid gap-4 lg:grid-cols-6">
        <Input
          label="Dari Tanggal"
          type="date"
          value={value.date_from ?? ""}
          onChange={(event) => update("date_from", event.target.value || undefined)}
        />

        <Input
          label="Sampai Tanggal"
          type="date"
          value={value.date_until ?? ""}
          onChange={(event) => update("date_until", event.target.value || undefined)}
        />

        <Input
          label="Outlet ID"
          type="number"
          placeholder="Kosongkan untuk semua"
          value={value.outlet_id ? String(value.outlet_id) : ""}
          onChange={(event) =>
            update("outlet_id", event.target.value ? Number(event.target.value) : undefined)
          }
        />

        <Input
          label="Status"
          placeholder="paid, completed, approved..."
          value={value.status ?? ""}
          onChange={(event) => update("status", event.target.value || undefined)}
        />

        <Input
          label="Search"
          placeholder="Cari keyword"
          value={value.search ?? ""}
          onChange={(event) => update("search", event.target.value || undefined)}
        />

        <div>
          <label className="mb-2 block text-sm font-medium text-slate-700">Group By</label>
          <select
            className="w-full rounded-xl border border-slate-300 px-3 py-2 text-sm"
            value={value.group_by ?? "day"}
            onChange={(event) => update("group_by", event.target.value as ReportGroupBy)}
          >
            {groupByOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>

        <Input
          label="Limit"
          type="number"
          value={String(value.limit ?? 100)}
          onChange={(event) => update("limit", Number(event.target.value || 100))}
        />

        <div>
          <label className="mb-2 block text-sm font-medium text-slate-700">Format Export</label>
          <select
            className="w-full rounded-xl border border-slate-300 px-3 py-2 text-sm"
            value={exportFormat}
            onChange={(event) => onExportFormatChange(event.target.value as ReportExportFormat)}
          >
            {exportFormatOptions.map((option) => (
              <option key={option} value={option}>
                {option.toUpperCase()}
              </option>
            ))}
          </select>
        </div>

        <div className="flex items-end gap-2 lg:col-span-4">
          <Button loading={loading} onClick={onRefresh}>
            Terapkan Filter
          </Button>

          <Button variant="outline" loading={exporting} onClick={onExport}>
            Export
          </Button>
        </div>
      </div>
    </Card>
  );
}