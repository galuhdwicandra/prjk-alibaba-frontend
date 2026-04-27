import { Outlet } from "react-router-dom";

export function AuthLayout() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-slate-100 to-slate-200">
      <div className="mx-auto flex min-h-screen w-full max-w-md items-center justify-center px-4 sm:px-6">
        <div className="w-full rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <div className="mb-6 text-center">
            <h1 className="text-lg font-semibold text-slate-900">Welcome Back</h1>
            <p className="mt-1 text-sm text-slate-500">
              Silakan login untuk melanjutkan ke sistem
            </p>
          </div>

          <Outlet />
        </div>
      </div>
    </div>
  );
}