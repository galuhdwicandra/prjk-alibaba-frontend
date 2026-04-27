interface PageEmptyStateProps {
  title?: string;
  description?: string;
}

export function PageEmptyState({
  title = "Data belum tersedia",
  description = "Belum ada data yang dapat ditampilkan pada halaman ini.",
}: PageEmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-slate-300 bg-white px-6 py-12 text-center">
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-slate-100">
        <span className="text-lg text-slate-400">—</span>
      </div>

      <h3 className="text-sm font-semibold text-slate-900 sm:text-base">{title}</h3>

      <p className="mt-2 max-w-md text-sm text-slate-500">{description}</p>
    </div>
  );
}