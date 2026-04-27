import type { ApiMeta } from "@/types/api";
import { Button } from "./Button";

interface PaginationProps {
  meta?: ApiMeta | null;
  onPageChange: (page: number) => void;
}

export function Pagination({ meta, onPageChange }: PaginationProps) {
  const currentPage = Number(meta?.current_page ?? 1);
  const lastPage = Number(meta?.last_page ?? 1);

  if (lastPage <= 1) {
    return null;
  }

  return (
    <div className="flex flex-col gap-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:flex-row sm:items-center sm:justify-between">
      <div className="text-sm text-slate-500">
        Halaman{" "}
        <span className="font-semibold text-slate-900">{currentPage}</span>{" "}
        dari{" "}
        <span className="font-semibold text-slate-900">{lastPage}</span>
      </div>

      <div className="flex flex-wrap items-center gap-2 sm:justify-end">
        <Button
          variant="outline"
          size="sm"
          disabled={currentPage <= 1}
          onClick={() => onPageChange(currentPage - 1)}
        >
          Sebelumnya
        </Button>

        <div className="hidden items-center gap-1 sm:flex">
          <span className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-600">
            {currentPage}
          </span>
          <span className="text-xs text-slate-400">/</span>
          <span className="text-xs text-slate-500">{lastPage}</span>
        </div>

        <Button
          variant="outline"
          size="sm"
          disabled={currentPage >= lastPage}
          onClick={() => onPageChange(currentPage + 1)}
        >
          Berikutnya
        </Button>
      </div>
    </div>
  );
}