export default function NotFoundPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[var(--color-bg)] px-4">
      <div className="w-full max-w-md rounded-2xl border border-[var(--color-border)] bg-white p-8 text-center shadow-md">
        <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[var(--brand-yellow-soft)] text-[var(--brand-brick)]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M9.172 9.172a4 4 0 015.656 0M9 15h6" />
          </svg>
        </div>

        <h1 className="text-2xl font-semibold text-[var(--color-text)]">
          404
        </h1>

        <p className="mt-2 text-sm text-[var(--color-muted)]">
          Halaman yang Anda cari tidak ditemukan.
        </p>

        <div className="mt-6">
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-lg bg-[var(--brand-brick)] px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-[var(--brand-brick-dark)]"
          >
            Kembali ke Beranda
          </a>
        </div>
      </div>
    </div>
  );
}