interface PageErrorStateProps {
  title?: string;
  description?: string;
  onRetry?: () => void;
}

export function PageErrorState({
  title = "Terjadi kesalahan",
  description = "Halaman tidak dapat dimuat saat ini. Silakan coba lagi.",
  onRetry,
}: PageErrorStateProps) {
  return (
    <div className="flex flex-col items-center justify-center rounded-2xl border border-red-200 bg-white px-6 py-10 text-center shadow-sm">
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-red-100">
        <span className="text-lg font-bold text-red-600">!</span>
      </div>

      <h3 className="text-base font-semibold text-red-700">{title}</h3>

      <p className="mt-2 max-w-md text-sm leading-relaxed text-slate-600">
        {description}
      </p>

      {onRetry && (
        <button
          type="button"
          onClick={onRetry}
          className="mt-6 inline-flex items-center justify-center rounded-xl bg-slate-900 px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-slate-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900 focus-visible:ring-offset-2"
        >
          Coba lagi
        </button>
      )}
    </div>
  );
}