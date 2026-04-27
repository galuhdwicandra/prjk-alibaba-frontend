import { useOnlineStatus } from "@/hooks/useOnlineStatus";

export function NetworkStatusBanner() {
  const online = useOnlineStatus();

  if (online) {
    return null;
  }

  return (
    <div className="fixed inset-x-0 top-0 z-[70] bg-amber-500 px-4 py-2 text-center text-sm font-medium text-white shadow">
      Koneksi internet terputus. Beberapa data mungkin belum tersimpan.
    </div>
  );
}