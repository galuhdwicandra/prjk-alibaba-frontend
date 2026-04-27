import type { ReactNode } from "react";
import { cn } from "./utils";

export interface TableColumn<T> {
  key: string;
  title: string;
  className?: string;
  render: (row: T, index: number) => ReactNode;
}

interface TableProps<T> {
  columns: TableColumn<T>[];
  data: T[];
  rowKey: (row: T, index: number) => string | number;
  emptyText?: string;
}

export function Table<T>({ columns, data, rowKey, emptyText = "Belum ada data." }: TableProps<T>) {
  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-slate-200 text-sm">
          <thead className="bg-slate-50">
            <tr>
              {columns.map((column) => (
                <th
                  key={column.key}
                  scope="col"
                  className={cn(
                    "whitespace-nowrap px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-slate-500",
                    column.className
                  )}
                >
                  {column.title}
                </th>
              ))}
            </tr>
          </thead>

          <tbody className="divide-y divide-slate-100 bg-white">
            {data.length > 0 ? (
              data.map((row, index) => (
                <tr
                  key={rowKey(row, index)}
                  className="transition-colors hover:bg-slate-50/80"
                >
                  {columns.map((column) => (
                    <td
                      key={column.key}
                      className={cn(
                        "px-4 py-3 align-middle text-sm text-slate-700",
                        column.className
                      )}
                    >
                      {column.render(row, index)}
                    </td>
                  ))}
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan={columns.length}
                  className="px-4 py-12 text-center text-sm text-slate-500"
                >
                  {emptyText}
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}