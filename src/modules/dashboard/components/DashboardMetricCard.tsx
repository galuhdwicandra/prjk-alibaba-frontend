import { Card } from "@/components/ui";

interface DashboardMetricCardProps {
  title: string;
  value: string;
  description?: string;
}

export function DashboardMetricCard({
  title,
  value,
  description,
}: DashboardMetricCardProps) {
  return (
    <Card>
      <div className="space-y-1">
        <p className="text-sm font-medium text-slate-500">{title}</p>
        <p className="text-2xl font-semibold text-slate-950">{value}</p>
        {description ? <p className="text-xs text-slate-500">{description}</p> : null}
      </div>
    </Card>
  );
}