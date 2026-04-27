export default function UnauthorizedPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[var(--color-bg)] px-4">
      <div className="w-full max-w-md rounded-2xl border border-[var(--color-border)] bg-white p-8 text-center shadow-md">
        <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[var(--brand-brick-soft)] text-[var(--brand-brick)]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01M5.07 19h13.86c1.54 0 2.5-1.67 1.73-3L13.73 4c-.77-1.33-2.69-1.33-3.46 0L3.34 16c-.77 1.33.19 3 1.73 3z" />
          </svg>
        </div>

        <h1 className="text-xl font-semibold text-[var(--color-text)]">
          Akses Ditolak
        </h1>

        <p className="mt-2 text-sm text-[var(--color-muted)]">
          Anda tidak memiliki izin untuk membuka halaman ini.
        </p>

        <div className="mt-6">
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-lg bg-[var(--brand-brick)] px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-[var(--brand-brick-dark)]"
          >
            Kembali ke Dashboard
          </a>
        </div>
      </div>
    </div>
  );
}