import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate, useLocation } from "react-router-dom";
import { loginSchema, type LoginSchema } from "@/modules/auth/schemas/login.schema";
import { authService } from "@/modules/auth/services/auth.service";
import { parseApiError } from "@/services/api/error-parser";
import { authStorage } from "@/services/storage/auth-storage";
import { useAuthStore } from "@/modules/auth/store/auth.store";
import { redirectByRole } from "@/utils/redirect-by-role";

export default function LoginPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const setAuth = useAuthStore((state) => state.setAuth);

  const [serverError, setServerError] = useState<string>("");

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      login: "",
      password: "",
    },
  });

  const onSubmit = async (values: LoginSchema) => {
    try {
      setServerError("");

      const response = await authService.login(values);
      const token = response.data.token ?? null;
      const user = response.data.user;

      if (token) {
        authStorage.setToken(token);
      }

      setAuth({ token, user });

      const fallbackPath = redirectByRole(user.roles ?? []);
      const from = (location.state as { from?: { pathname?: string } } | null)?.from?.pathname;

      navigate(from || fallbackPath, { replace: true });
    } catch (error) {
      setServerError(parseApiError(error));
    }
  };

  return (
    <div>
      <h1 className="text-2xl font-semibold text-slate-900">Login Sistem</h1>
      <p className="mt-2 text-sm text-slate-500">
        Masuk menggunakan email, username, atau nomor telepon.
      </p>

      <form onSubmit={handleSubmit(onSubmit)} className="mt-6 space-y-4">
        <div>
          <label className="mb-1 block text-sm font-medium text-slate-700">Login</label>
          <input
            {...register("login")}
            className="w-full rounded-xl border border-slate-300 px-3 py-2 outline-none focus:border-slate-500"
            placeholder="Email / Username / Phone"
          />
          {errors.login && (
            <p className="mt-1 text-xs text-red-600">{errors.login.message}</p>
          )}
        </div>

        <div>
          <label className="mb-1 block text-sm font-medium text-slate-700">Password</label>
          <input
            type="password"
            {...register("password")}
            className="w-full rounded-xl border border-slate-300 px-3 py-2 outline-none focus:border-slate-500"
            placeholder="Masukkan password"
          />
          {errors.password && (
            <p className="mt-1 text-xs text-red-600">{errors.password.message}</p>
          )}
        </div>

        {serverError && (
          <div className="rounded-xl border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-600">
            {serverError}
          </div>
        )}

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full rounded-xl bg-slate-900 px-4 py-2 text-sm font-medium text-white disabled:opacity-60"
        >
          {isSubmitting ? "Memproses..." : "Masuk"}
        </button>
      </form>
    </div>
  );
}