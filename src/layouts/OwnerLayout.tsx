import { Outlet } from "react-router-dom";

export function OwnerLayout() {
  return (
    <div className="min-h-screen bg-slate-50">
      <div className="border-b bg-white px-6 py-4 text-lg font-semibold">Owner Dashboard</div>
      <main className="p-6">
        <Outlet />
      </main>
    </div>
  );
}