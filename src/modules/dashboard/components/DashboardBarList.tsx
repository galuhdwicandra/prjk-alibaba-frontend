import { Card } from "@/components/ui";

interface DashboardBarListItem {
  label: string;
  value: number;
  suffix?: string;
}

interface DashboardBarListProps {
  title: string;
  description?: string;
  items: DashboardBarListItem[];
  emptyText: string;
  valueFormatter?: (value: number) => string;
}

export function DashboardBarList({
  title,
  description,
  items,
  emptyText,
  valueFormatter,
}: DashboardBarListProps) {
  const maxValue = Math.max(...items.map((item) => item.value), 0);

  return (
    <Card title={title} description={description}>
      {!items.length ? (
        <p className="text-sm text-slate-500">{emptyText}</p>
      ) : (
        <div className="space-y-4">
          {items.map((item) => {
            const percentage = maxValue > 0 ? Math.max(6, (item.value / maxValue) * 100) : 0;

            return (
              <div key={item.label} className="space-y-2">
                <div className="flex items-center justify-between gap-4 text-sm">
                  <span className="font-medium text-slate-700">{item.label}</span>
                  <span className="text-slate-500">
                    {valueFormatter ? valueFormatter(item.value) : item.value.toLocaleString("id-ID")}
                    {item.suffix ? ` ${item.suffix}` : ""}
                  </span>
                </div>
                <div className="h-2 overflow-hidden rounded-full bg-slate-100">
                  <div
                    className="h-full rounded-full bg-slate-900"
                    style={{ width: `${percentage}%` }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      )}
    </Card>
  );
}