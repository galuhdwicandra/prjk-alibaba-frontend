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
    <div className="space-y-4">
      {(title || description || actions) && (
        <Card title={title} description={description} actions={actions} />
      )}

      {filters ? <Card>{filters}</Card> : null}
      {table}
      {pagination}
    </div>
  );
}