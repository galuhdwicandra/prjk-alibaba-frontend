import { Outlet } from "react-router-dom";

export function PosLayout() {
  return (
    <div className="min-h-screen bg-white">
      <div className="border-b bg-slate-900 px-6 py-4 text-lg font-semibold text-white">POS App</div>
      <main className="p-4">
        <Outlet />
      </main>
    </div>
  );
}