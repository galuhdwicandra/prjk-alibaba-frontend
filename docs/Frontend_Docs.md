# Dokumentasi Frontend (FULL Source)

_Dihasilkan otomatis: 2026-04-20 12:31:40_  
**Root:** `G:\.galuh\latihanlaravel\A-Portfolio-Project\2026\alibaba\frontend`

## Daftar Isi
- [App Bootstrap (src/app)](#app-bootstrap-src-app)
  - [src\app\App.tsx](#file-srcappapptsx)
  - [src\app\config\env.ts](#file-srcappconfigenvts)
  - [src\app\providers\AppProviders.tsx](#file-srcappprovidersappproviderstsx)
  - [src\app\providers\QueryProvider.tsx](#file-srcappprovidersqueryprovidertsx)
- [Router (src/router)](#router-src-router)
  - [src\router\guards\AuthGuard.tsx](#file-srcrouterguardsauthguardtsx)
  - [src\router\guards\GuestGuard.tsx](#file-srcrouterguardsguestguardtsx)
  - [src\router\guards\PermissionGuard.tsx](#file-srcrouterguardspermissionguardtsx)
  - [src\router\index.tsx](#file-srcrouterindextsx)
- [Layouts (src/layouts)](#layouts-src-layouts)
  - [src\layouts\AdminLayout.tsx](#file-srclayoutsadminlayouttsx)
  - [src\layouts\AuthLayout.tsx](#file-srclayoutsauthlayouttsx)
  - [src\layouts\KitchenLayout.tsx](#file-srclayoutskitchenlayouttsx)
  - [src\layouts\OwnerLayout.tsx](#file-srclayoutsownerlayouttsx)
  - [src\layouts\PosLayout.tsx](#file-srclayoutsposlayouttsx)
- [Modules (src/modules)](#modules-src-modules)
  - [src\modules\auth\hooks\useCurrentUser.ts](#file-srcmodulesauthhooksusecurrentuserts)
  - [src\modules\auth\pages\LoginPage.tsx](#file-srcmodulesauthpagesloginpagetsx)
  - [src\modules\auth\pages\NotFoundPage.tsx](#file-srcmodulesauthpagesnotfoundpagetsx)
  - [src\modules\auth\pages\UnauthorizedPage.tsx](#file-srcmodulesauthpagesunauthorizedpagetsx)
  - [src\modules\auth\schemas\login.schema.ts](#file-srcmodulesauthschemasloginschemats)
  - [src\modules\auth\services\auth.service.ts](#file-srcmodulesauthservicesauthservicets)
  - [src\modules\auth\store\auth.store.ts](#file-srcmodulesauthstoreauthstorets)
- [Components (src/components)](#components-src-components)
  - [src\components\feedback\AppLoader.tsx](#file-srccomponentsfeedbackapploadertsx)
  - [src\components\feedback\PageEmptyState.tsx](#file-srccomponentsfeedbackpageemptystatetsx)
  - [src\components\feedback\PageErrorState.tsx](#file-srccomponentsfeedbackpageerrorstatetsx)
  - [src\components\feedback\PermissionDenied.tsx](#file-srccomponentsfeedbackpermissiondeniedtsx)
  - [src\components\feedback\RoutePlaceholder.tsx](#file-srccomponentsfeedbackrouteplaceholdertsx)
- [Services (src/services)](#services-src-services)
  - [src\services\api\api-client.ts](#file-srcservicesapiapi-clientts)
  - [src\services\api\endpoints.ts](#file-srcservicesapiendpointsts)
  - [src\services\api\error-parser.ts](#file-srcservicesapierror-parserts)
  - [src\services\storage\auth-storage.ts](#file-srcservicesstorageauth-storagets)
- [Hooks (src/hooks)](#hooks-src-hooks)
  - [src\hooks\usePermission.ts](#file-srchooksusepermissionts)
- [Types (src/types)](#types-src-types)
  - [src\types\api.ts](#file-srctypesapits)
  - [src\types\auth.ts](#file-srctypesauthts)
  - [src\types\outlet.ts](#file-srctypesoutletts)
  - [src\types\permission.ts](#file-srctypespermissionts)
  - [src\types\role.ts](#file-srctypesrolets)
  - [src\types\settings.ts](#file-srctypessettingsts)
  - [src\types\user.ts](#file-srctypesuserts)
- [Utils (src/utils)](#utils-src-utils)
  - [src\utils\redirect-by-role.ts](#file-srcutilsredirect-by-rolets)
- [Entry Files](#entry-files)
  - [src\main.tsx](#file-srcmaintsx)
  - [src\app\App.tsx](#file-srcappapptsx)

## App Bootstrap (src/app)

<a id="file-srcappapptsx"></a>
### src\app\App.tsx
- SHA: `4c040c6fb67e`  
- Ukuran: 256 B
<details><summary><strong>Lihat Kode Lengkap</strong></summary>

```tsx
import { RouterProvider } from "react-router-dom";
import { router } from "@/router";
import { useCurrentUser } from "@/modules/auth/hooks/useCurrentUser";

export default function App() {
  useCurrentUser();

  return <RouterProvider router={router} />;
}
```
</details>

<a id="file-srcappconfigenvts"></a>
### src\app\config\env.ts
- SHA: `a6c96ef7ea56`  
- Ukuran: 403 B
<details><summary><strong>Lihat Kode Lengkap</strong></summary>

```ts
const required = (value: string | undefined, name: string): string => {
  if (!value) {
    throw new Error(`Missing environment variable: ${name}`);
  }
  return value;
};

export const env = {
  appName: required(import.meta.env.VITE_APP_NAME, "VITE_APP_NAME"),
  apiBaseUrl: required(import.meta.env.VITE_API_BASE_URL, "VITE_API_BASE_URL"),
  appEnv: import.meta.env.VITE_APP_ENV ?? "development",
};
```
</details>

<a id="file-srcappprovidersappproviderstsx"></a>
### src\app\providers\AppProviders.tsx
- SHA: `4dbcff4a5bda`  
- Ukuran: 215 B
<details><summary><strong>Lihat Kode Lengkap</strong></summary>

```tsx
import type { PropsWithChildren } from "react";
import { QueryProvider } from "./QueryProvider";

export function AppProviders({ children }: PropsWithChildren) {
  return <QueryProvider>{children}</QueryProvider>;
}
```
</details>

<a id="file-srcappprovidersqueryprovidertsx"></a>
### src\app\providers\QueryProvider.tsx
- SHA: `29e30273a6bd`  
- Ukuran: 415 B
<details><summary><strong>Lihat Kode Lengkap</strong></summary>

```tsx
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import type { PropsWithChildren } from "react";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      refetchOnWindowFocus: false,
    },
  },
});

export function QueryProvider({ children }: PropsWithChildren) {
  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
}
```
</details>


## Router (src/router)

<a id="file-srcrouterguardsauthguardtsx"></a>
### src\router\guards\AuthGuard.tsx
- SHA: `eec86c825f4a`  
- Ukuran: 533 B
<details><summary><strong>Lihat Kode Lengkap</strong></summary>

```tsx
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuthStore } from "@/modules/auth/store/auth.store";
import { AppLoader } from "@/components/feedback/AppLoader";

export function AuthGuard() {
  const location = useLocation();
  const user = useAuthStore((state) => state.user);
  const hydrated = useAuthStore((state) => state.hydrated);

  if (!hydrated) {
    return <AppLoader />;
  }

  if (!user) {
    return <Navigate to="/login" replace state={{ from: location }} />;
  }

  return <Outlet />;
}
```
</details>

<a id="file-srcrouterguardsguestguardtsx"></a>
### src\router\guards\GuestGuard.tsx
- SHA: `4dcbbc4dc4a0`  
- Ukuran: 373 B
<details><summary><strong>Lihat Kode Lengkap</strong></summary>

```tsx
import { Navigate, Outlet } from "react-router-dom";
import { useAuthStore } from "@/modules/auth/store/auth.store";
import { redirectByRole } from "@/utils/redirect-by-role";

export function GuestGuard() {
  const user = useAuthStore((state) => state.user);

  if (user) {
    return <Navigate to={redirectByRole(user.roles ?? [])} replace />;
  }

  return <Outlet />;
}
```
</details>

<a id="file-srcrouterguardspermissionguardtsx"></a>
### src\router\guards\PermissionGuard.tsx
- SHA: `819a3058af5b`  
- Ukuran: 452 B
<details><summary><strong>Lihat Kode Lengkap</strong></summary>

```tsx
import { Navigate } from "react-router-dom";
import type { ReactNode } from "react";
import { usePermission } from "@/hooks/usePermission";

interface PermissionGuardProps {
  permission: string;
  children: ReactNode;
}

export function PermissionGuard({ permission, children }: PermissionGuardProps) {
  const allowed = usePermission(permission);

  if (!allowed) {
    return <Navigate to="/unauthorized" replace />;
  }

  return <>{children}</>;
}
```
</details>

<a id="file-srcrouterindextsx"></a>
### src\router\index.tsx
- SHA: `502926ba8cb2`  
- Ukuran: 2 KB
<details><summary><strong>Lihat Kode Lengkap</strong></summary>

```tsx
import { createBrowserRouter } from "react-router-dom";
import { AuthLayout } from "@/layouts/AuthLayout";
import { AdminLayout } from "@/layouts/AdminLayout";
import { PosLayout } from "@/layouts/PosLayout";
import { KitchenLayout } from "@/layouts/KitchenLayout";
import { OwnerLayout } from "@/layouts/OwnerLayout";
import { AuthGuard } from "@/router/guards/AuthGuard";
import { GuestGuard } from "@/router/guards/GuestGuard";
import LoginPage from "@/modules/auth/pages/LoginPage";
import UnauthorizedPage from "@/modules/auth/pages/UnauthorizedPage";
import NotFoundPage from "@/modules/auth/pages/NotFoundPage";
import { RoutePlaceholder } from "@/components/feedback/RoutePlaceholder";

export const router = createBrowserRouter([
  {
    element: <GuestGuard />,
    children: [
      {
        element: <AuthLayout />,
        children: [{ path: "/login", element: <LoginPage /> }],
      },
    ],
  },
  {
    path: "/unauthorized",
    element: <UnauthorizedPage />,
  },
  {
    element: <AuthGuard />,
    children: [
      {
        path: "/admin",
        element: <AdminLayout />,
        children: [{ index: true, element: <RoutePlaceholder title="Admin Home" /> }],
      },
      {
        path: "/pos",
        element: <PosLayout />,
        children: [{ index: true, element: <RoutePlaceholder title="POS Home" /> }],
      },
      {
        path: "/kitchen",
        element: <KitchenLayout />,
        children: [{ index: true, element: <RoutePlaceholder title="Kitchen Home" /> }],
      },
      {
        path: "/owner",
        element: <OwnerLayout />,
        children: [{ index: true, element: <RoutePlaceholder title="Owner Home" /> }],
      },
    ],
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
]);
```
</details>


## Layouts (src/layouts)

<a id="file-srclayoutsadminlayouttsx"></a>
### src\layouts\AdminLayout.tsx
- SHA: `08d137a3d291`  
- Ukuran: 305 B
<details><summary><strong>Lihat Kode Lengkap</strong></summary>

```tsx
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
```
</details>

<a id="file-srclayoutsauthlayouttsx"></a>
### src\layouts\AuthLayout.tsx
- SHA: `ffef65384647`  
- Ukuran: 368 B
<details><summary><strong>Lihat Kode Lengkap</strong></summary>

```tsx
import { Outlet } from "react-router-dom";

export function AuthLayout() {
  return (
    <div className="min-h-screen bg-slate-50">
      <div className="mx-auto flex min-h-screen max-w-md items-center px-4">
        <div className="w-full rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
```
</details>

<a id="file-srclayoutskitchenlayouttsx"></a>
### src\layouts\KitchenLayout.tsx
- SHA: `0ce0c15a8d79`  
- Ukuran: 329 B
<details><summary><strong>Lihat Kode Lengkap</strong></summary>

```tsx
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
```
</details>

<a id="file-srclayoutsownerlayouttsx"></a>
### src\layouts\OwnerLayout.tsx
- SHA: `f414bc8cd406`  
- Ukuran: 308 B
<details><summary><strong>Lihat Kode Lengkap</strong></summary>

```tsx
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
```
</details>

<a id="file-srclayoutsposlayouttsx"></a>
### src\layouts\PosLayout.tsx
- SHA: `9ca8b3651c03`  
- Ukuran: 310 B
<details><summary><strong>Lihat Kode Lengkap</strong></summary>

```tsx
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
```
</details>


## Modules (src/modules)

<a id="file-srcmodulesauthhooksusecurrentuserts"></a>
### src\modules\auth\hooks\useCurrentUser.ts
- SHA: `4510a46c8266`  
- Ukuran: 971 B
<details><summary><strong>Lihat Kode Lengkap</strong></summary>

```ts
import { useEffect } from "react";
import { authService } from "@/modules/auth/services/auth.service";
import { authStorage } from "@/services/storage/auth-storage";
import { useAuthStore } from "@/modules/auth/store/auth.store";

export const useCurrentUser = () => {
  const setAuth = useAuthStore((state) => state.setAuth);
  const clearAuth = useAuthStore((state) => state.clearAuth);
  const setHydrated = useAuthStore((state) => state.setHydrated);

  useEffect(() => {
    const bootstrap = async () => {
      const token = authStorage.getToken();

      if (!token) {
        setHydrated(true);
        return;
      }

      try {
        const response = await authService.me();

        setAuth({
          token,
          user: response.data.user,
        });
      } catch {
        authStorage.clearToken();
        clearAuth();
      } finally {
        setHydrated(true);
      }
    };

    void bootstrap();
  }, [clearAuth, setAuth, setHydrated]);
};
```
</details>

<a id="file-srcmodulesauthpagesloginpagetsx"></a>
### src\modules\auth\pages\LoginPage.tsx
- SHA: `435d4e0732fd`  
- Ukuran: 3 KB
<details><summary><strong>Lihat Kode Lengkap</strong></summary>

```tsx
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
```
</details>

<a id="file-srcmodulesauthpagesnotfoundpagetsx"></a>
### src\modules\auth\pages\NotFoundPage.tsx
- SHA: `5a169feee7d9`  
- Ukuran: 448 B
<details><summary><strong>Lihat Kode Lengkap</strong></summary>

```tsx
export default function NotFoundPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-50 px-4">
      <div className="rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-sm">
        <h1 className="text-2xl font-semibold text-slate-900">404</h1>
        <p className="mt-2 text-sm text-slate-500">
          Halaman yang Anda cari tidak ditemukan.
        </p>
      </div>
    </div>
  );
}
```
</details>

<a id="file-srcmodulesauthpagesunauthorizedpagetsx"></a>
### src\modules\auth\pages\UnauthorizedPage.tsx
- SHA: `c57c20f7c931`  
- Ukuran: 463 B
<details><summary><strong>Lihat Kode Lengkap</strong></summary>

```tsx
export default function UnauthorizedPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-50 px-4">
      <div className="rounded-2xl border border-amber-200 bg-white p-8 text-center shadow-sm">
        <h1 className="text-2xl font-semibold text-slate-900">Unauthorized</h1>
        <p className="mt-2 text-sm text-slate-500">
          Anda tidak memiliki akses ke halaman ini.
        </p>
      </div>
    </div>
  );
}
```
</details>

<a id="file-srcmodulesauthschemasloginschemats"></a>
### src\modules\auth\schemas\login.schema.ts
- SHA: `4e6f8d87355b`  
- Ukuran: 251 B
<details><summary><strong>Lihat Kode Lengkap</strong></summary>

```ts
import { z } from "zod";

export const loginSchema = z.object({
  login: z.string().min(1, "Email, username, atau phone wajib diisi."),
  password: z.string().min(1, "Password wajib diisi."),
});

export type LoginSchema = z.infer<typeof loginSchema>;
```
</details>

<a id="file-srcmodulesauthservicesauthservicets"></a>
### src\modules\auth\services\auth.service.ts
- SHA: `ffcf9c925b23`  
- Ukuran: 699 B
<details><summary><strong>Lihat Kode Lengkap</strong></summary>

```ts
import { apiClient } from "@/services/api/api-client";
import { endpoints } from "@/services/api/endpoints";
import type { ApiResponse } from "@/types/api";
import type { LoginPayload, LoginResult, MeResult } from "@/types/auth";

export const authService = {
  async login(payload: LoginPayload) {
    const response = await apiClient.post<ApiResponse<LoginResult>>(endpoints.auth.login, payload);
    return response.data;
  },

  async logout() {
    const response = await apiClient.post<ApiResponse<null>>(endpoints.auth.logout);
    return response.data;
  },

  async me() {
    const response = await apiClient.get<ApiResponse<MeResult>>(endpoints.auth.me);
    return response.data;
  },
};
```
</details>

<a id="file-srcmodulesauthstoreauthstorets"></a>
### src\modules\auth\store\auth.store.ts
- SHA: `4c2560d20e35`  
- Ukuran: 574 B
<details><summary><strong>Lihat Kode Lengkap</strong></summary>

```ts
import { create } from "zustand";
import type { User } from "@/types/user";

interface AuthState {
  token: string | null;
  user: User | null;
  hydrated: boolean;
  setAuth: (payload: { token: string | null; user: User | null }) => void;
  setHydrated: (value: boolean) => void;
  clearAuth: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  token: null,
  user: null,
  hydrated: false,
  setAuth: ({ token, user }) => set({ token, user }),
  setHydrated: (hydrated) => set({ hydrated }),
  clearAuth: () => set({ token: null, user: null }),
}));
```
</details>


## Components (src/components)

<a id="file-srccomponentsfeedbackapploadertsx"></a>
### src\components\feedback\AppLoader.tsx
- SHA: `499a2808ebe9`  
- Ukuran: 174 B
<details><summary><strong>Lihat Kode Lengkap</strong></summary>

```tsx
export function AppLoader() {
  return (
    <div className="flex min-h-screen items-center justify-center text-sm text-slate-600">
      Memuat aplikasi...
    </div>
  );
}
```
</details>

<a id="file-srccomponentsfeedbackpageemptystatetsx"></a>
### src\components\feedback\PageEmptyState.tsx
- SHA: `da39a3ee5e6b`  
- Ukuran: 0 B
<details><summary><strong>Lihat Kode Lengkap</strong></summary>

```tsx

```
</details>

<a id="file-srccomponentsfeedbackpageerrorstatetsx"></a>
### src\components\feedback\PageErrorState.tsx
- SHA: `da39a3ee5e6b`  
- Ukuran: 0 B
<details><summary><strong>Lihat Kode Lengkap</strong></summary>

```tsx

```
</details>

<a id="file-srccomponentsfeedbackpermissiondeniedtsx"></a>
### src\components\feedback\PermissionDenied.tsx
- SHA: `da39a3ee5e6b`  
- Ukuran: 0 B
<details><summary><strong>Lihat Kode Lengkap</strong></summary>

```tsx

```
</details>

<a id="file-srccomponentsfeedbackrouteplaceholdertsx"></a>
### src\components\feedback\RoutePlaceholder.tsx
- SHA: `59b2446a10c4`  
- Ukuran: 235 B
<details><summary><strong>Lihat Kode Lengkap</strong></summary>

```tsx
interface RoutePlaceholderProps {
  title: string;
}

export function RoutePlaceholder({ title }: RoutePlaceholderProps) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-6">
      {title}
    </div>
  );
}
```
</details>


## Services (src/services)

<a id="file-srcservicesapiapi-clientts"></a>
### src\services\api\api-client.ts
- SHA: `f09fed1dca8b`  
- Ukuran: 679 B
<details><summary><strong>Lihat Kode Lengkap</strong></summary>

```ts
import axios from "axios";
import { env } from "@/app/config/env";
import { authStorage } from "@/services/storage/auth-storage";

export const apiClient = axios.create({
  baseURL: env.apiBaseUrl,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

apiClient.interceptors.request.use((config) => {
  const token = authStorage.getToken();

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error?.response?.status === 401) {
      authStorage.clearToken();
    }

    return Promise.reject(error);
  }
);
```
</details>

<a id="file-srcservicesapiendpointsts"></a>
### src\services\api\endpoints.ts
- SHA: `1cd53adc5155`  
- Ukuran: 172 B
<details><summary><strong>Lihat Kode Lengkap</strong></summary>

```ts
export const endpoints = {
  auth: {
    login: "/auth/login",
    logout: "/auth/logout",
    me: "/auth/me",
    changePassword: "/auth/change-password",
  },
} as const;
```
</details>

<a id="file-srcservicesapierror-parserts"></a>
### src\services\api\error-parser.ts
- SHA: `5e3425bb6511`  
- Ukuran: 397 B
<details><summary><strong>Lihat Kode Lengkap</strong></summary>

```ts
import type { ApiErrorResponse } from "@/types/api";
import axios from "axios";

export const parseApiError = (error: unknown): string => {
  if (axios.isAxiosError<ApiErrorResponse>(error)) {
    return error.response?.data?.message ?? "Terjadi kesalahan pada permintaan.";
  }

  if (error instanceof Error) {
    return error.message;
  }

  return "Terjadi kesalahan yang tidak diketahui.";
};
```
</details>

<a id="file-srcservicesstorageauth-storagets"></a>
### src\services\storage\auth-storage.ts
- SHA: `44e89582c129`  
- Ukuran: 312 B
<details><summary><strong>Lihat Kode Lengkap</strong></summary>

```ts
const TOKEN_KEY = "chicken_alibaba_access_token";

export const authStorage = {
  getToken(): string | null {
    return localStorage.getItem(TOKEN_KEY);
  },
  setToken(token: string): void {
    localStorage.setItem(TOKEN_KEY, token);
  },
  clearToken(): void {
    localStorage.removeItem(TOKEN_KEY);
  },
};
```
</details>


## Hooks (src/hooks)

<a id="file-srchooksusepermissionts"></a>
### src\hooks\usePermission.ts
- SHA: `593a88491609`  
- Ukuran: 323 B
<details><summary><strong>Lihat Kode Lengkap</strong></summary>

```ts
import { useAuthStore } from "@/modules/auth/store/auth.store";

export const usePermission = (permissionName: string): boolean => {
  const user = useAuthStore((state) => state.user);

  if (!user?.permissions) {
    return false;
  }

  return user.permissions.some((permission) => permission.name === permissionName);
};
```
</details>


## Types (src/types)

<a id="file-srctypesapits"></a>
### src\types\api.ts
- SHA: `41431549f7b6`  
- Ukuran: 387 B
<details><summary><strong>Lihat Kode Lengkap</strong></summary>

```ts
export interface ApiErrorBag {
  [key: string]: string[] | string;
}

export interface ApiResponse<T> {
  success: boolean;
  message: string;
  data: T;
  errors: ApiErrorBag | null;
  meta: Record<string, unknown> | null;
}

export interface ApiErrorResponse {
  success: boolean;
  message: string;
  data: null;
  errors: ApiErrorBag | null;
  meta: Record<string, unknown> | null;
}
```
</details>

<a id="file-srctypesauthts"></a>
### src\types\auth.ts
- SHA: `30ff53738d98`  
- Ukuran: 218 B
<details><summary><strong>Lihat Kode Lengkap</strong></summary>

```ts
import type { User } from "./user";

export interface LoginPayload {
  login: string;
  password: string;
}

export interface LoginResult {
  token?: string;
  user: User;
}

export interface MeResult {
  user: User;
}
```
</details>

<a id="file-srctypesoutletts"></a>
### src\types\outlet.ts
- SHA: `e99cf78e5006`  
- Ukuran: 1008 B
<details><summary><strong>Lihat Kode Lengkap</strong></summary>

```ts
export interface Outlet {
  id: number;
  code: string;
  name: string;
  phone: string | null;
  email: string | null;
  address: string | null;
  city: string | null;
  province: string | null;
  postal_code: string | null;
  latitude: string | null;
  longitude: string | null;
  opening_time: string | null;
  closing_time: string | null;
  is_active: boolean;
  created_at: string;
  updated_at: string;
  deleted_at: string | null;
}

export interface UserOutletAccess {
  id: number;
  user_id: number;
  outlet_id: number;
  is_default: boolean;
  created_at: string;
  updated_at: string;
  outlet?: Outlet;
}

export interface OutletSetting {
  id: number;
  outlet_id: number;
  tax_percent: string;
  service_charge_percent: string;
  currency_code: string;
  receipt_footer: string | null;
  invoice_prefix: string | null;
  order_prefix: string | null;
  timezone: string;
  allow_negative_stock: boolean;
  low_stock_notification_enabled: boolean;
  created_at: string;
  updated_at: string;
}
```
</details>

<a id="file-srctypespermissionts"></a>
### src\types\permission.ts
- SHA: `26afe013ac53`  
- Ukuran: 127 B
<details><summary><strong>Lihat Kode Lengkap</strong></summary>

```ts
export interface Permission {
  id: number;
  name: string;
  guard_name: string;
  created_at: string;
  updated_at: string;
}
```
</details>

<a id="file-srctypesrolets"></a>
### src\types\role.ts
- SHA: `653740de7a0b`  
- Ukuran: 121 B
<details><summary><strong>Lihat Kode Lengkap</strong></summary>

```ts
export interface Role {
  id: number;
  name: string;
  guard_name: string;
  created_at: string;
  updated_at: string;
}
```
</details>

<a id="file-srctypessettingsts"></a>
### src\types\settings.ts
- SHA: `346032344799`  
- Ukuran: 181 B
<details><summary><strong>Lihat Kode Lengkap</strong></summary>

```ts
export interface SystemSetting {
  id: number;
  key: string;
  value: string | null;
  type: "string" | "number" | "boolean" | "json";
  created_at: string;
  updated_at: string;
}
```
</details>

<a id="file-srctypesuserts"></a>
### src\types\user.ts
- SHA: `d816c93c8e78`  
- Ukuran: 517 B
<details><summary><strong>Lihat Kode Lengkap</strong></summary>

```ts
import type { Role } from "./role";
import type { Permission } from "./permission";
import type { UserOutletAccess } from "./outlet";

export interface User {
  id: number;
  name: string;
  email: string | null;
  phone: string | null;
  username: string | null;
  is_active: boolean;
  user_type: "superadmin" | "staff" | "owner_viewer" | null;
  last_login_at: string | null;
  created_at: string;
  updated_at: string;
  roles?: Role[];
  permissions?: Permission[];
  user_outlet_accesses?: UserOutletAccess[];
}
```
</details>


## Utils (src/utils)

<a id="file-srcutilsredirect-by-rolets"></a>
### src\utils\redirect-by-role.ts
- SHA: `28ee9d5647c0`  
- Ukuran: 520 B
<details><summary><strong>Lihat Kode Lengkap</strong></summary>

```ts
import type { Role } from "@/types/role";

export const redirectByRole = (roles: Role[] = []): string => {
  const roleNames = roles.map((role) => role.name);

  if (roleNames.includes("superadmin") || roleNames.includes("admin_pusat") || roleNames.includes("admin_outlet")) {
    return "/admin";
  }

  if (roleNames.includes("kasir")) {
    return "/pos";
  }

  if (roleNames.includes("dapur")) {
    return "/kitchen";
  }

  if (roleNames.includes("owner")) {
    return "/owner";
  }

  return "/unauthorized";
};
```
</details>


## Entry Files

<a id="file-srcmaintsx"></a>
### src\main.tsx
- SHA: `9948d938ef39`  
- Ukuran: 348 B
<details><summary><strong>Lihat Kode Lengkap</strong></summary>

```tsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "@/app/App";
import { AppProviders } from "@/app/providers/AppProviders";
import "@/styles/index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AppProviders>
      <App />
    </AppProviders>
  </React.StrictMode>
);
```
</details>

<a id="file-srcappapptsx"></a>
### src\app\App.tsx
- SHA: `4c040c6fb67e`  
- Ukuran: 256 B
<details><summary><strong>Lihat Kode Lengkap</strong></summary>

```tsx
import { RouterProvider } from "react-router-dom";
import { router } from "@/router";
import { useCurrentUser } from "@/modules/auth/hooks/useCurrentUser";

export default function App() {
  useCurrentUser();

  return <RouterProvider router={router} />;
}
```
</details>
