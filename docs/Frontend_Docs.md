# Dokumentasi Frontend (FULL Source)

_Dihasilkan otomatis: 2026-04-20 15:37:48_  
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
  - [src\components\navigation\AppBreadcrumbs.tsx](#file-srccomponentsnavigationappbreadcrumbstsx)
  - [src\components\navigation\AppOutletSwitcher.tsx](#file-srccomponentsnavigationappoutletswitchertsx)
  - [src\components\navigation\AppProfileMenu.tsx](#file-srccomponentsnavigationappprofilemenutsx)
  - [src\components\navigation\AppShell.tsx](#file-srccomponentsnavigationappshelltsx)
  - [src\components\navigation\AppSidebar.tsx](#file-srccomponentsnavigationappsidebartsx)
  - [src\components\navigation\AppTopbar.tsx](#file-srccomponentsnavigationapptopbartsx)
  - [src\components\navigation\navigation.config.ts](#file-srccomponentsnavigationnavigationconfigts)
  - [src\components\navigation\PageHeader.tsx](#file-srccomponentsnavigationpageheadertsx)
  - [src\components\navigation\PermissionWrapper.tsx](#file-srccomponentsnavigationpermissionwrappertsx)
- [Services (src/services)](#services-src-services)
  - [src\services\api\api-client.ts](#file-srcservicesapiapi-clientts)
  - [src\services\api\endpoints.ts](#file-srcservicesapiendpointsts)
  - [src\services\api\error-parser.ts](#file-srcservicesapierror-parserts)
  - [src\services\storage\auth-storage.ts](#file-srcservicesstorageauth-storagets)
- [Hooks (src/hooks)](#hooks-src-hooks)
  - [src\hooks\useActiveOutlet.ts](#file-srchooksuseactiveoutletts)
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
- [Styles (src/styles)](#styles-src-styles)
  - [src\styles\index.css](#file-srcstylesindexcss)
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
- SHA: `2e825be240fa`  
- Ukuran: 3 KB
<details><summary><strong>Lihat Kode Lengkap</strong></summary>

```tsx
import { createBrowserRouter, Navigate } from "react-router-dom";
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
    path: "/",
    element: <Navigate to="/login" replace />,
  },
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
        children: [
          { index: true, element: <RoutePlaceholder title="Admin Dashboard" /> },
          { path: "users", element: <RoutePlaceholder title="Users" /> },
          { path: "roles", element: <RoutePlaceholder title="Roles" /> },
          { path: "permissions", element: <RoutePlaceholder title="Permissions" /> },
          { path: "outlets", element: <RoutePlaceholder title="Outlets" /> },
          { path: "system-settings", element: <RoutePlaceholder title="System Settings" /> },
        ],
      },
      {
        path: "/pos",
        element: <PosLayout />,
        children: [
          { index: true, element: <RoutePlaceholder title="POS Home" /> },
          { path: "orders", element: <RoutePlaceholder title="New Order" /> },
          { path: "shifts", element: <RoutePlaceholder title="Shift" /> },
        ],
      },
      {
        path: "/kitchen",
        element: <KitchenLayout />,
        children: [
          { index: true, element: <RoutePlaceholder title="Kitchen Home" /> },
          { path: "tickets", element: <RoutePlaceholder title="Kitchen Tickets" /> },
          { path: "ready", element: <RoutePlaceholder title="Ready Queue" /> },
        ],
      },
      {
        path: "/owner",
        element: <OwnerLayout />,
        children: [
          { index: true, element: <RoutePlaceholder title="Owner Home" /> },
          { path: "overview", element: <RoutePlaceholder title="Overview" /> },
          { path: "reports", element: <RoutePlaceholder title="Reports" /> },
        ],
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
- SHA: `b283e67b5614`  
- Ukuran: 245 B
<details><summary><strong>Lihat Kode Lengkap</strong></summary>

```tsx
import { AppShell } from "@/components/navigation/AppShell";
import { adminNavigation } from "@/components/navigation/navigation.config";

export function AdminLayout() {
  return <AppShell appTitle="Admin Panel" navItems={adminNavigation} />;
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
- SHA: `625e8c06a9e6`  
- Ukuran: 259 B
<details><summary><strong>Lihat Kode Lengkap</strong></summary>

```tsx
import { AppShell } from "@/components/navigation/AppShell";
import { kitchenNavigation } from "@/components/navigation/navigation.config";

export function KitchenLayout() {
  return <AppShell appTitle="Kitchen Screen" navItems={kitchenNavigation} dark />;
}
```
</details>

<a id="file-srclayoutsownerlayouttsx"></a>
### src\layouts\OwnerLayout.tsx
- SHA: `43924c2080ec`  
- Ukuran: 249 B
<details><summary><strong>Lihat Kode Lengkap</strong></summary>

```tsx
import { AppShell } from "@/components/navigation/AppShell";
import { ownerNavigation } from "@/components/navigation/navigation.config";

export function OwnerLayout() {
  return <AppShell appTitle="Owner Dashboard" navItems={ownerNavigation} />;
}
```
</details>

<a id="file-srclayoutsposlayouttsx"></a>
### src\layouts\PosLayout.tsx
- SHA: `688094f7dc88`  
- Ukuran: 235 B
<details><summary><strong>Lihat Kode Lengkap</strong></summary>

```tsx
import { AppShell } from "@/components/navigation/AppShell";
import { posNavigation } from "@/components/navigation/navigation.config";

export function PosLayout() {
  return <AppShell appTitle="POS App" navItems={posNavigation} />;
}
```
</details>


## Modules (src/modules)

<a id="file-srcmodulesauthhooksusecurrentuserts"></a>
### src\modules\auth\hooks\useCurrentUser.ts
- SHA: `7ad9f78edee0`  
- Ukuran: 987 B
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
        clearAuth();
        setHydrated(true);
        return;
      }

      try {
        const response = await authService.me();

        setAuth({
          token,
          user: response.data,
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
- SHA: `7f5053202098`  
- Ukuran: 4 KB
<details><summary><strong>Lihat Kode Lengkap</strong></summary>

```tsx
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate, useLocation, useSearchParams } from "react-router-dom";
import { loginSchema, type LoginSchema } from "@/modules/auth/schemas/login.schema";
import { authService } from "@/modules/auth/services/auth.service";
import { parseApiError } from "@/services/api/error-parser";
import { authStorage } from "@/services/storage/auth-storage";
import { useAuthStore } from "@/modules/auth/store/auth.store";
import { redirectByRole } from "@/utils/redirect-by-role";

export default function LoginPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const [searchParams] = useSearchParams();
  const setAuth = useAuthStore((state) => state.setAuth);

  const [serverError, setServerError] = useState<string>("");

  const sessionExpired = searchParams.get("reason") === "session-expired";
  const fromQuery = searchParams.get("from");

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

      const response = await authService.login({
        ...values,
        device_name: "web-browser",
      });

      const token = response.token ?? null;
      const user = response.data;

      if (token) {
        authStorage.setToken(token);
      }

      setAuth({ token, user });

      const fallbackPath = redirectByRole(user.roles ?? []);
      const fromState = (location.state as { from?: { pathname?: string } } | null)?.from?.pathname;
      const targetPath = fromState || fromQuery || fallbackPath;

      navigate(targetPath, { replace: true });
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

      {sessionExpired && (
        <div className="mt-4 rounded-xl border border-amber-200 bg-amber-50 px-3 py-2 text-sm text-amber-700">
          Sesi Anda telah berakhir. Silakan login kembali.
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="mt-6 space-y-4">
        <div>
          <label className="mb-1 block text-sm font-medium text-slate-700">Login</label>
          <input
            {...register("login")}
            className="w-full rounded-xl border border-slate-300 px-3 py-2 outline-none focus:border-slate-500"
            placeholder="Email / Username / Phone"
            autoComplete="username"
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
            autoComplete="current-password"
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
- SHA: `0eca7779224d`  
- Ukuran: 707 B
<details><summary><strong>Lihat Kode Lengkap</strong></summary>

```ts
import { apiClient } from "@/services/api/api-client";
import { endpoints } from "@/services/api/endpoints";
import type { ApiResponse } from "@/types/api";
import type { LoginPayload } from "@/types/auth";
import type { User } from "@/types/user";

export const authService = {
  async login(payload: LoginPayload) {
    const response = await apiClient.post<ApiResponse<User>>(endpoints.auth.login, payload);
    return response.data;
  },

  async logout() {
    const response = await apiClient.post<ApiResponse<null>>(endpoints.auth.logout);
    return response.data;
  },

  async me() {
    const response = await apiClient.get<ApiResponse<User>>(endpoints.auth.me);
    return response.data;
  },
};
```
</details>

<a id="file-srcmodulesauthstoreauthstorets"></a>
### src\modules\auth\store\auth.store.ts
- SHA: `7890b43ece36`  
- Ukuran: 2 KB
<details><summary><strong>Lihat Kode Lengkap</strong></summary>

```ts
import { create } from "zustand";
import type { User } from "@/types/user";

const ACTIVE_OUTLET_STORAGE_KEY = "chicken_alibaba_active_outlet_id";

const getInitialActiveOutletId = (user: User | null): number | null => {
  if (!user?.outlet_accesses?.length) {
    return null;
  }

  const stored = localStorage.getItem(ACTIVE_OUTLET_STORAGE_KEY);
  const storedId = stored ? Number(stored) : null;

  if (storedId && user.outlet_accesses.some((item) => item.outlet_id === storedId)) {
    return storedId;
  }

  const defaultAccess = user.outlet_accesses.find((item) => item.is_default);

  return defaultAccess?.outlet_id ?? user.outlet_accesses[0]?.outlet_id ?? null;
};

interface AuthState {
  token: string | null;
  user: User | null;
  hydrated: boolean;
  activeOutletId: number | null;
  setAuth: (payload: { token: string | null; user: User | null }) => void;
  setHydrated: (value: boolean) => void;
  setActiveOutletId: (outletId: number | null) => void;
  clearAuth: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  token: null,
  user: null,
  hydrated: false,
  activeOutletId: null,

  setAuth: ({ token, user }) =>
    set({
      token,
      user,
      activeOutletId: getInitialActiveOutletId(user),
    }),

  setHydrated: (hydrated) => set({ hydrated }),

  setActiveOutletId: (activeOutletId) => {
    if (activeOutletId) {
      localStorage.setItem(ACTIVE_OUTLET_STORAGE_KEY, String(activeOutletId));
    } else {
      localStorage.removeItem(ACTIVE_OUTLET_STORAGE_KEY);
    }

    set({ activeOutletId });
  },

  clearAuth: () => {
    localStorage.removeItem(ACTIVE_OUTLET_STORAGE_KEY);

    set({
      token: null,
      user: null,
      activeOutletId: null,
    });
  },
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
- SHA: `39531ec4a828`  
- Ukuran: 510 B
<details><summary><strong>Lihat Kode Lengkap</strong></summary>

```tsx
interface PageEmptyStateProps {
  title?: string;
  description?: string;
}

export function PageEmptyState({
  title = "Data belum tersedia",
  description = "Belum ada data yang dapat ditampilkan pada halaman ini.",
}: PageEmptyStateProps) {
  return (
    <div className="rounded-2xl border border-dashed border-slate-300 bg-white p-8 text-center">
      <h3 className="text-base font-semibold text-slate-900">{title}</h3>
      <p className="mt-2 text-sm text-slate-500">{description}</p>
    </div>
  );
}
```
</details>

<a id="file-srccomponentsfeedbackpageerrorstatetsx"></a>
### src\components\feedback\PageErrorState.tsx
- SHA: `748f33e75ec8`  
- Ukuran: 763 B
<details><summary><strong>Lihat Kode Lengkap</strong></summary>

```tsx
interface PageErrorStateProps {
  title?: string;
  description?: string;
  onRetry?: () => void;
}

export function PageErrorState({
  title = "Terjadi kesalahan",
  description = "Halaman tidak dapat dimuat saat ini. Silakan coba lagi.",
  onRetry,
}: PageErrorStateProps) {
  return (
    <div className="rounded-2xl border border-red-200 bg-white p-8 text-center">
      <h3 className="text-base font-semibold text-red-700">{title}</h3>
      <p className="mt-2 text-sm text-slate-600">{description}</p>

      {onRetry && (
        <button
          type="button"
          onClick={onRetry}
          className="mt-4 rounded-xl bg-slate-900 px-4 py-2 text-sm font-medium text-white"
        >
          Coba lagi
        </button>
      )}
    </div>
  );
}
```
</details>

<a id="file-srccomponentsfeedbackpermissiondeniedtsx"></a>
### src\components\feedback\PermissionDenied.tsx
- SHA: `61a7d70223df`  
- Ukuran: 488 B
<details><summary><strong>Lihat Kode Lengkap</strong></summary>

```tsx
interface PermissionDeniedProps {
  title?: string;
  description?: string;
}

export function PermissionDenied({
  title = "Akses ditolak",
  description = "Anda tidak memiliki permission untuk melihat konten ini.",
}: PermissionDeniedProps) {
  return (
    <div className="rounded-2xl border border-amber-200 bg-amber-50 p-6">
      <h3 className="text-base font-semibold text-amber-800">{title}</h3>
      <p className="mt-2 text-sm text-amber-700">{description}</p>
    </div>
  );
}
```
</details>

<a id="file-srccomponentsfeedbackrouteplaceholdertsx"></a>
### src\components\feedback\RoutePlaceholder.tsx
- SHA: `13435879a95d`  
- Ukuran: 603 B
<details><summary><strong>Lihat Kode Lengkap</strong></summary>

```tsx
import { PageHeader } from "@/components/navigation/PageHeader";

interface RoutePlaceholderProps {
  title: string;
  description?: string;
}

export function RoutePlaceholder({
  title,
  description = "Halaman ini sudah disiapkan pada fase layout & navigation. Konten modul akan diisi pada fase berikutnya.",
}: RoutePlaceholderProps) {
  return (
    <div className="space-y-4">
      <PageHeader title={title} description={description} />
      <div className="rounded-2xl border border-slate-200 bg-white p-6 text-sm text-slate-600">
        Placeholder route aktif.
      </div>
    </div>
  );
}
```
</details>

<a id="file-srccomponentsnavigationappbreadcrumbstsx"></a>
### src\components\navigation\AppBreadcrumbs.tsx
- SHA: `035cdb7a2229`  
- Ukuran: 1 KB
<details><summary><strong>Lihat Kode Lengkap</strong></summary>

```tsx
import { Link, useLocation } from "react-router-dom";

const LABEL_MAP: Record<string, string> = {
  admin: "Admin",
  users: "Users",
  roles: "Roles",
  permissions: "Permissions",
  outlets: "Outlets",
  "system-settings": "System Settings",
  pos: "POS",
  orders: "Orders",
  shifts: "Shifts",
  kitchen: "Kitchen",
  tickets: "Tickets",
  ready: "Ready Queue",
  owner: "Owner",
  overview: "Overview",
  reports: "Reports",
};

export function AppBreadcrumbs({ dark = false }: { dark?: boolean }) {
  const location = useLocation();

  const segments = location.pathname.split("/").filter(Boolean);
  const crumbs = segments.map((segment, index) => {
    const href = `/${segments.slice(0, index + 1).join("/")}`;

    return {
      href,
      label: LABEL_MAP[segment] ?? segment,
      isLast: index === segments.length - 1,
    };
  });

  return (
    <div
      className={[
        "flex flex-wrap items-center gap-2 text-sm",
        dark ? "text-slate-400" : "text-slate-500",
      ].join(" ")}
    >
      <Link to="/" className="hover:underline">
        Home
      </Link>

      {crumbs.map((item) => (
        <span key={item.href} className="flex items-center gap-2">
          <span>/</span>
          {item.isLast ? (
            <span className={dark ? "text-white" : "text-slate-900"}>{item.label}</span>
          ) : (
            <Link to={item.href} className="hover:underline">
              {item.label}
            </Link>
          )}
        </span>
      ))}
    </div>
  );
}
```
</details>

<a id="file-srccomponentsnavigationappoutletswitchertsx"></a>
### src\components\navigation\AppOutletSwitcher.tsx
- SHA: `62a55a4f9590`  
- Ukuran: 1 KB
<details><summary><strong>Lihat Kode Lengkap</strong></summary>

```tsx
import { useActiveOutlet } from "@/hooks/useActiveOutlet";

interface AppOutletSwitcherProps {
  dark?: boolean;
}

export function AppOutletSwitcher({ dark = false }: AppOutletSwitcherProps) {
  const { outlets, activeOutletId, setActiveOutletId } = useActiveOutlet();

  if (!outlets.length) {
    return null;
  }

  return (
    <div className="min-w-[220px]">
      <label
        className={[
          "mb-1 block text-xs font-medium",
          dark ? "text-slate-400" : "text-slate-500",
        ].join(" ")}
      >
        Outlet Aktif
      </label>

      <select
        value={activeOutletId ?? ""}
        onChange={(event) => {
          const value = event.target.value ? Number(event.target.value) : null;
          setActiveOutletId(value);
        }}
        className={[
          "w-full rounded-xl border px-3 py-2 text-sm outline-none",
          dark
            ? "border-slate-700 bg-slate-900 text-white"
            : "border-slate-300 bg-white text-slate-900",
        ].join(" ")}
      >
        {outlets.map((item) => (
          <option key={item.outlet_id} value={item.outlet_id}>
            {item.outlet_name ?? `Outlet #${item.outlet_id}`}{" "}
            {item.outlet_code ? `(${item.outlet_code})` : ""}
          </option>
        ))}
      </select>
    </div>
  );
}
```
</details>

<a id="file-srccomponentsnavigationappprofilemenutsx"></a>
### src\components\navigation\AppProfileMenu.tsx
- SHA: `9e8be6917282`  
- Ukuran: 3 KB
<details><summary><strong>Lihat Kode Lengkap</strong></summary>

```tsx
import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { authService } from "@/modules/auth/services/auth.service";
import { authStorage } from "@/services/storage/auth-storage";
import { useAuthStore } from "@/modules/auth/store/auth.store";
import { parseApiError } from "@/services/api/error-parser";

interface AppProfileMenuProps {
  dark?: boolean;
}

export function AppProfileMenu({ dark = false }: AppProfileMenuProps) {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const user = useAuthStore((state) => state.user);
  const clearAuth = useAuthStore((state) => state.clearAuth);

  const userRoleLabel = useMemo(() => {
    return user?.roles?.join(", ") || "No role";
  }, [user?.roles]);

  const handleLogout = async () => {
    try {
      setLoading(true);
      await authService.logout();
    } catch (error) {
      console.error(parseApiError(error));
    } finally {
      authStorage.clearToken();
      clearAuth();
      navigate("/login", { replace: true });
      setLoading(false);
    }
  };

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className={[
          "rounded-xl border px-3 py-2 text-left",
          dark
            ? "border-slate-700 bg-slate-900 text-white"
            : "border-slate-300 bg-white text-slate-900",
        ].join(" ")}
      >
        <div className="text-sm font-semibold">{user?.name ?? "Unknown User"}</div>
        <div className={["text-xs", dark ? "text-slate-400" : "text-slate-500"].join(" ")}>
          {userRoleLabel}
        </div>
      </button>

      {open && (
        <div
          className={[
            "absolute right-0 z-20 mt-2 w-64 rounded-2xl border p-3 shadow-lg",
            dark
              ? "border-slate-800 bg-slate-950 text-white"
              : "border-slate-200 bg-white text-slate-900",
          ].join(" ")}
        >
          <div className="border-b border-slate-200 pb-3 dark:border-slate-800">
            <div className="text-sm font-semibold">{user?.name}</div>
            <div className={["mt-1 text-xs", dark ? "text-slate-400" : "text-slate-500"].join(" ")}>
              {user?.email || user?.username || user?.phone || "-"}
            </div>
          </div>

          <button
            type="button"
            onClick={handleLogout}
            disabled={loading}
            className="mt-3 w-full rounded-xl bg-red-600 px-3 py-2 text-sm font-medium text-white disabled:opacity-60"
          >
            {loading ? "Memproses..." : "Logout"}
          </button>
        </div>
      )}
    </div>
  );
}
```
</details>

<a id="file-srccomponentsnavigationappshelltsx"></a>
### src\components\navigation\AppShell.tsx
- SHA: `871a8a002d63`  
- Ukuran: 853 B
<details><summary><strong>Lihat Kode Lengkap</strong></summary>

```tsx
import { Outlet } from "react-router-dom";
import { AppSidebar } from "./AppSidebar";
import { AppTopbar } from "./AppTopbar";
import type { NavigationItem } from "./navigation.config";

interface AppShellProps {
  appTitle: string;
  navItems: NavigationItem[];
  dark?: boolean;
  showOutletSwitcher?: boolean;
}

export function AppShell({
  appTitle,
  navItems,
  dark = false,
  showOutletSwitcher = true,
}: AppShellProps) {
  return (
    <div className={["min-h-screen lg:flex", dark ? "bg-slate-950" : "bg-slate-100"].join(" ")}>
      <AppSidebar title={appTitle} items={navItems} dark={dark} />

      <div className="flex min-h-screen flex-1 flex-col">
        <AppTopbar dark={dark} showOutletSwitcher={showOutletSwitcher} />

        <main className="flex-1 p-4 lg:p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
```
</details>

<a id="file-srccomponentsnavigationappsidebartsx"></a>
### src\components\navigation\AppSidebar.tsx
- SHA: `509afce80f98`  
- Ukuran: 2 KB
<details><summary><strong>Lihat Kode Lengkap</strong></summary>

```tsx
import { NavLink } from "react-router-dom";
import type { NavigationItem } from "./navigation.config";
import { usePermission } from "@/hooks/usePermission";

interface AppSidebarProps {
  title: string;
  items: NavigationItem[];
  dark?: boolean;
}

function SidebarLink({ item, dark = false }: { item: NavigationItem; dark?: boolean }) {
  const allowed = item.permission ? usePermission(item.permission) : true;

  if (!allowed) {
    return null;
  }

  return (
    <NavLink
      to={item.to}
      end={item.to.split("/").length <= 3}
      className={({ isActive }) =>
        [
          "block rounded-xl px-3 py-2 text-sm font-medium transition",
          dark
            ? isActive
              ? "bg-slate-800 text-white"
              : "text-slate-300 hover:bg-slate-900 hover:text-white"
            : isActive
              ? "bg-slate-900 text-white"
              : "text-slate-700 hover:bg-slate-100",
        ].join(" ")
      }
    >
      {item.label}
    </NavLink>
  );
}

export function AppSidebar({ title, items, dark = false }: AppSidebarProps) {
  return (
    <aside
      className={[
        "w-full shrink-0 border-r lg:w-64",
        dark ? "border-slate-800 bg-slate-950" : "border-slate-200 bg-white",
      ].join(" ")}
    >
      <div
        className={[
          "border-b px-5 py-4 text-lg font-semibold",
          dark ? "border-slate-800 text-white" : "border-slate-200 text-slate-900",
        ].join(" ")}
      >
        {title}
      </div>

      <nav className="space-y-1 p-3">
        {items.map((item) => (
          <SidebarLink key={item.to} item={item} dark={dark} />
        ))}
      </nav>
    </aside>
  );
}
```
</details>

<a id="file-srccomponentsnavigationapptopbartsx"></a>
### src\components\navigation\AppTopbar.tsx
- SHA: `cedeb8180028`  
- Ukuran: 885 B
<details><summary><strong>Lihat Kode Lengkap</strong></summary>

```tsx
import { AppBreadcrumbs } from "./AppBreadcrumbs";
import { AppOutletSwitcher } from "./AppOutletSwitcher";
import { AppProfileMenu } from "./AppProfileMenu";

interface AppTopbarProps {
  dark?: boolean;
  showOutletSwitcher?: boolean;
}

export function AppTopbar({
  dark = false,
  showOutletSwitcher = true,
}: AppTopbarProps) {
  return (
    <header
      className={[
        "border-b px-4 py-4 lg:px-6",
        dark ? "border-slate-800 bg-slate-950" : "border-slate-200 bg-white",
      ].join(" ")}
    >
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <AppBreadcrumbs dark={dark} />

        <div className="flex flex-col gap-3 lg:flex-row lg:items-center">
          {showOutletSwitcher ? <AppOutletSwitcher dark={dark} /> : null}
          <AppProfileMenu dark={dark} />
        </div>
      </div>
    </header>
  );
}
```
</details>

<a id="file-srccomponentsnavigationnavigationconfigts"></a>
### src\components\navigation\navigation.config.ts
- SHA: `d2b8d0204b2b`  
- Ukuran: 1 KB
<details><summary><strong>Lihat Kode Lengkap</strong></summary>

```ts
export interface NavigationItem {
  label: string;
  to: string;
  permission?: string;
}

export const adminNavigation: NavigationItem[] = [
  { label: "Dashboard", to: "/admin" },
  { label: "Users", to: "/admin/users", permission: "users.view" },
  { label: "Roles", to: "/admin/roles", permission: "roles.view" },
  { label: "Permissions", to: "/admin/permissions", permission: "permissions.view" },
  { label: "Outlets", to: "/admin/outlets", permission: "outlets.view" },
  { label: "System Settings", to: "/admin/system-settings", permission: "system_settings.view" },
];

export const posNavigation: NavigationItem[] = [
  { label: "POS Home", to: "/pos" },
  { label: "New Order", to: "/pos/orders" },
  { label: "Shift", to: "/pos/shifts" },
];

export const kitchenNavigation: NavigationItem[] = [
  { label: "Kitchen Home", to: "/kitchen" },
  { label: "Tickets", to: "/kitchen/tickets" },
  { label: "Ready Queue", to: "/kitchen/ready" },
];

export const ownerNavigation: NavigationItem[] = [
  { label: "Owner Home", to: "/owner" },
  { label: "Overview", to: "/owner/overview" },
  { label: "Reports", to: "/owner/reports" },
];
```
</details>

<a id="file-srccomponentsnavigationpageheadertsx"></a>
### src\components\navigation\PageHeader.tsx
- SHA: `4786b35663b5`  
- Ukuran: 739 B
<details><summary><strong>Lihat Kode Lengkap</strong></summary>

```tsx
import type { ReactNode } from "react";

interface PageHeaderProps {
  title: string;
  description?: string;
  actions?: ReactNode;
  dark?: boolean;
}

export function PageHeader({
  title,
  description,
  actions,
  dark = false,
}: PageHeaderProps) {
  return (
    <div className="flex flex-col gap-4 rounded-2xl border border-slate-200 bg-white p-5 lg:flex-row lg:items-center lg:justify-between">
      <div>
        <h1 className={["text-2xl font-semibold", dark ? "text-slate-900" : "text-slate-900"].join(" ")}>
          {title}
        </h1>
        {description && <p className="mt-1 text-sm text-slate-500">{description}</p>}
      </div>

      {actions ? <div className="shrink-0">{actions}</div> : null}
    </div>
  );
}
```
</details>

<a id="file-srccomponentsnavigationpermissionwrappertsx"></a>
### src\components\navigation\PermissionWrapper.tsx
- SHA: `60ccfe452222`  
- Ukuran: 550 B
<details><summary><strong>Lihat Kode Lengkap</strong></summary>

```tsx
import type { ReactNode } from "react";
import { usePermission } from "@/hooks/usePermission";
import { PermissionDenied } from "@/components/feedback/PermissionDenied";

interface PermissionWrapperProps {
  permission?: string;
  children: ReactNode;
  fallback?: ReactNode;
}

export function PermissionWrapper({
  permission,
  children,
  fallback,
}: PermissionWrapperProps) {
  const allowed = permission ? usePermission(permission) : true;

  if (!allowed) {
    return <>{fallback ?? <PermissionDenied />}</>;
  }

  return <>{children}</>;
}
```
</details>


## Services (src/services)

<a id="file-srcservicesapiapi-clientts"></a>
### src\services\api\api-client.ts
- SHA: `800aeabc0e54`  
- Ukuran: 1 KB
<details><summary><strong>Lihat Kode Lengkap</strong></summary>

```ts
import axios from "axios";
import { env } from "@/app/config/env";
import { authStorage } from "@/services/storage/auth-storage";
import { useAuthStore } from "@/modules/auth/store/auth.store";

const isLoginPage = () => {
  if (typeof window === "undefined") {
    return false;
  }

  return window.location.pathname === "/login";
};

const redirectToLoginBecauseSessionExpired = () => {
  if (typeof window === "undefined") {
    return;
  }

  const currentPath = window.location.pathname;
  const query = new URLSearchParams({
    reason: "session-expired",
  });

  if (currentPath && currentPath !== "/login") {
    query.set("from", currentPath);
  }

  window.location.replace(`/login?${query.toString()}`);
};

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
    const status = error?.response?.status;

    if (status === 401) {
      authStorage.clearToken();
      useAuthStore.getState().clearAuth();

      if (!isLoginPage()) {
        redirectToLoginBecauseSessionExpired();
      }
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
- SHA: `aa9d90801560`  
- Ukuran: 722 B
<details><summary><strong>Lihat Kode Lengkap</strong></summary>

```ts
import type { ApiErrorResponse } from "@/types/api";
import axios from "axios";

export const parseApiError = (error: unknown): string => {
  if (axios.isAxiosError<ApiErrorResponse>(error)) {
    const data = error.response?.data;

    if (data?.errors) {
      const firstEntry = Object.values(data.errors)[0];

      if (Array.isArray(firstEntry)) {
        return firstEntry[0] ?? data.message ?? "Terjadi kesalahan pada permintaan.";
      }

      if (typeof firstEntry === "string") {
        return firstEntry;
      }
    }

    return data?.message ?? "Terjadi kesalahan pada permintaan.";
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

<a id="file-srchooksuseactiveoutletts"></a>
### src\hooks\useActiveOutlet.ts
- SHA: `23665d1c6709`  
- Ukuran: 759 B
<details><summary><strong>Lihat Kode Lengkap</strong></summary>

```ts
import { useMemo } from "react";
import { useAuthStore } from "@/modules/auth/store/auth.store";

export const useActiveOutlet = () => {
  const user = useAuthStore((state) => state.user);
  const activeOutletId = useAuthStore((state) => state.activeOutletId);
  const setActiveOutletId = useAuthStore((state) => state.setActiveOutletId);

  const outlets = user?.outlet_accesses ?? [];

  const activeOutlet = useMemo(() => {
    if (!outlets.length) {
      return null;
    }

    return (
      outlets.find((item) => item.outlet_id === activeOutletId) ??
      outlets.find((item) => item.is_default) ??
      outlets[0]
    );
  }, [activeOutletId, outlets]);

  return {
    outlets,
    activeOutlet,
    activeOutletId,
    setActiveOutletId,
  };
};
```
</details>

<a id="file-srchooksusepermissionts"></a>
### src\hooks\usePermission.ts
- SHA: `e4875a651724`  
- Ukuran: 299 B
<details><summary><strong>Lihat Kode Lengkap</strong></summary>

```ts
import { useAuthStore } from "@/modules/auth/store/auth.store";

export const usePermission = (permissionName: string): boolean => {
  const user = useAuthStore((state) => state.user);

  if (!user?.permissions?.length) {
    return false;
  }

  return user.permissions.includes(permissionName);
};
```
</details>


## Types (src/types)

<a id="file-srctypesapits"></a>
### src\types\api.ts
- SHA: `c21e64164dde`  
- Ukuran: 498 B
<details><summary><strong>Lihat Kode Lengkap</strong></summary>

```ts
export interface ApiErrorBag {
  [key: string]: string[] | string;
}

export interface ApiMeta {
  current_page?: number;
  last_page?: number;
  per_page?: number;
  total?: number;
  [key: string]: unknown;
}

export interface ApiResponse<T> {
  message: string;
  data: T;
  token?: string;
  errors?: ApiErrorBag | null;
  meta?: ApiMeta | null;
}

export interface ApiErrorResponse {
  message: string;
  data?: null;
  token?: string;
  errors?: ApiErrorBag | null;
  meta?: ApiMeta | null;
}
```
</details>

<a id="file-srctypesauthts"></a>
### src\types\auth.ts
- SHA: `b4f6e7a5e83c`  
- Ukuran: 193 B
<details><summary><strong>Lihat Kode Lengkap</strong></summary>

```ts
import type { User } from "./user";

export interface LoginPayload {
  login: string;
  password: string;
  device_name?: string;
}

export type LoginResult = User;
export type MeResult = User;
```
</details>

<a id="file-srctypesoutletts"></a>
### src\types\outlet.ts
- SHA: `99d9dd100bd7`  
- Ukuran: 986 B
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
  outlet_id: number;
  outlet_name: string | null;
  outlet_code: string | null;
  is_default: boolean;
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
- SHA: `595575bc4572`  
- Ukuran: 426 B
<details><summary><strong>Lihat Kode Lengkap</strong></summary>

```ts
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
  roles?: string[];
  permissions?: string[];
  outlet_accesses?: UserOutletAccess[];
}
```
</details>


## Utils (src/utils)

<a id="file-srcutilsredirect-by-rolets"></a>
### src\utils\redirect-by-role.ts
- SHA: `632c9f062ef4`  
- Ukuran: 418 B
<details><summary><strong>Lihat Kode Lengkap</strong></summary>

```ts
export const redirectByRole = (roles: string[] = []): string => {
  if (
    roles.includes("superadmin") ||
    roles.includes("admin_pusat") ||
    roles.includes("admin_outlet")
  ) {
    return "/admin";
  }

  if (roles.includes("kasir")) {
    return "/pos";
  }

  if (roles.includes("dapur")) {
    return "/kitchen";
  }

  if (roles.includes("owner")) {
    return "/owner";
  }

  return "/unauthorized";
};
```
</details>


## Styles (src/styles)

<a id="file-srcstylesindexcss"></a>
### src\styles\index.css
- SHA: `2d05991c511e`  
- Ukuran: 58 B
<details><summary><strong>Lihat Kode Lengkap</strong></summary>

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
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
