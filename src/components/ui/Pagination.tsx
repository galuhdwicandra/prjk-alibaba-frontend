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
    <div className="flex flex-col gap-3 rounded-2xl border border-slate-200 bg-white p-4 sm:flex-row sm:items-center sm:justify-between">
      <p className="text-sm text-slate-500">
        Halaman <span className="font-medium text-slate-900">{currentPage}</span> dari{" "}
        <span className="font-medium text-slate-900">{lastPage}</span>
      </p>

      <div className="flex gap-2">
        <Button
          variant="outline"
          disabled={currentPage <= 1}
          onClick={() => onPageChange(currentPage - 1)}
        >
          Sebelumnya
        </Button>

        <Button
          variant="outline"
          disabled={currentPage >= lastPage}
          onClick={() => onPageChange(currentPage + 1)}
        >
          Berikutnya
        </Button>
      </div>
    </div>
  );
}