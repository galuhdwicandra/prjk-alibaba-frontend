export function AppLoader() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4 bg-transparent text-sm text-slate-500">
      <div className="h-8 w-8 animate-spin rounded-full border-2 border-slate-300 border-t-slate-900" />

      <div className="text-center">
        <div className="font-medium text-slate-700">Memuat aplikasi...</div>
        <div className="text-xs text-slate-400">Mohon tunggu sebentar</div>
      </div>
    </div>
  );
}