import { Outlet } from "react-router-dom";

export function KitchenLayout() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <div className="border-b border-slate-800 px-6 py-4 text-lg font-semibold">Kitchen Screen</div>
      <main className="p-6">
        <Outlet />
      </main>
    </div>
  );
}