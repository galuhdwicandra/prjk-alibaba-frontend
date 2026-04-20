import { Outlet } from "react-router-dom";

export function AdminLayout() {
  return (
    <div className="min-h-screen bg-slate-100">
      <div className="border-b bg-white px-6 py-4 text-lg font-semibold">Admin Panel</div>
      <main className="p-6">
        <Outlet />
      </main>
    </div>
  );
}