import { Card } from "@/components/ui";

type ReportCellValue =
  | string
  | number
  | boolean
  | null
  | undefined
  | Record<string, unknown>
  | unknown[];

interface ReportDataTableProps {
  rows: Record<string, ReportCellValue>[];
}

const formatHeader = (key: string) => {
  return key
    .replaceAll("_", " ")
    .replaceAll("-", " ")
    .replace(/\b\w/g, (letter) => letter.toUpperCase());
};

const formatValue = (value: ReportCellValue): string => {
  if (value === null || value === undefined) {
    return "-";
  }

  if (typeof value === "boolean") {
    return value ? "Ya" : "Tidak";
  }

  if (typeof value === "number") {
    return value.toLocaleString("id-ID");
  }

  if (typeof value === "string") {
    return value;
  }

  if (Array.isArray(value)) {
    return value.length ? JSON.stringify(value) : "-";
  }

  if (typeof value === "object") {
    return JSON.stringify(value);
  }

  return String(value);
};

export function ReportDataTable({ rows }: ReportDataTableProps) {
  const columns = Array.from(
    rows.reduce<Set<string>>((accumulator, row) => {
      Object.keys(row).forEach((key) => accumulator.add(key));
      return accumulator;
    }, new Set<string>())
  );

  if (!rows.length || !columns.length) {
    return (
      <Card>
        <div className="py-8 text-center text-sm text-slate-500">
          Tidak ada data laporan untuk filter ini.
        </div>
      </Card>
    );
  }

  return (
    <Card>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-slate-200 text-sm">
          <thead className="bg-slate-50">
            <tr>
              {columns.map((column) => (
                <th
                  key={column}
                  className="whitespace-nowrap px-4 py-3 text-left font-semibold text-slate-700"
                >
                  {formatHeader(column)}
                </th>
              ))}
            </tr>
          </thead>

          <tbody className="divide-y divide-slate-100 bg-white">
            {rows.map((row, index) => (
              <tr key={index} className="hover:bg-slate-50">
                {columns.map((column) => (
                  <td key={column} className="whitespace-nowrap px-4 py-3 text-slate-700">
                    {formatValue(row[column])}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  );
}