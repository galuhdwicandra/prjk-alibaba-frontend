import { useOnlineStatus } from "@/hooks/useOnlineStatus";

export function NetworkStatusBanner() {
  const online = useOnlineStatus();

  if (online) {
    return null;
  }

  return (
    <div
      role="status"
      aria-live="polite"
      className="fixed inset-x-0 top-0 z-[70] flex items-center justify-center bg-amber-500/95 px-4 py-2.5 text-sm font-medium text-white shadow-md backdrop-blur"
    >
      <div className="flex items-center gap-2">
        <span className="h-2 w-2 rounded-full bg-white animate-pulse" />
        <span className="truncate">
          Koneksi internet terputus. Beberapa data mungkin belum tersimpan.
        </span>
      </div>
    </div>
  );
}