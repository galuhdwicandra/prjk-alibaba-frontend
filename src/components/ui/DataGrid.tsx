import type { ReactNode } from "react";
import { Card } from "./Card";

interface DataGridProps {
  title?: string;
  description?: string;
  filters?: ReactNode;
  table: ReactNode;
  pagination?: ReactNode;
  actions?: ReactNode;
}

export function DataGrid({
  title,
  description,
  filters,
  table,
  pagination,
  actions,
}: DataGridProps) {
  return (
    <div className="space-y-6">
      {(title || description || actions) && (
        <Card
          title={title}
          description={description}
          actions={<div className="flex flex-wrap items-center gap-2">{actions}</div>}
        />
      )}

      {filters ? (
        <Card>
          <div className="flex flex-col gap-4 md:flex-row md:flex-wrap md:items-end">
            {filters}
          </div>
        </Card>
      ) : null}

      <Card>
        <div className="overflow-x-auto">{table}</div>
      </Card>

      {pagination ? (
        <div className="flex justify-end">{pagination}</div>
      ) : null}
    </div>
  );
}