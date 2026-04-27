import type { ReactNode } from "react";
import { Card } from "@/components/ui";

interface DashboardQuickTableColumn<T> {
  key: string;
  label: string;
  render: (row: T) => ReactNode;
}

interface DashboardQuickTableProps<T> {
  title: string;
  description?: string;
  rows: T[];
  columns: DashboardQuickTableColumn<T>[];
  emptyText: string;
  getRowKey: (row: T, index: number) => string;
}

export function DashboardQuickTable<T>({
  title,
  description,
  rows,
  columns,
  emptyText,
  getRowKey,
}: DashboardQuickTableProps<T>) {
  return (
    <Card title={title} description={description}>
      {!rows.length ? (
        <p className="text-sm text-slate-500">{emptyText}</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full min-w-[680px] text-left text-sm">
            <thead>
              <tr className="border-b border-slate-200 text-xs uppercase tracking-wide text-slate-500">
                {columns.map((column) => (
                  <th key={column.key} className="px-3 py-3 font-semibold">
                    {column.label}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row, index) => (
                <tr key={getRowKey(row, index)} className="border-b border-slate-100">
                  {columns.map((column) => (
                    <td key={column.key} className="px-3 py-3 text-slate-700">
                      {column.render(row)}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </Card>
  );
}