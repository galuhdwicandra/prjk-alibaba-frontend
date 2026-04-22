# Dokumentasi Frontend (FULL Source)

_Dihasilkan otomatis: 2026-04-20 20:24:53_  
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
  - [src\modules\admin\pages\OutletsPage.tsx](#file-srcmodulesadminpagesoutletspagetsx)
  - [src\modules\admin\pages\PermissionsPage.tsx](#file-srcmodulesadminpagespermissionspagetsx)
  - [src\modules\admin\pages\ProductCategoriesPage.tsx](#file-srcmodulesadminpagesproductcategoriespagetsx)
  - [src\modules\admin\pages\ProductsPage.tsx](#file-srcmodulesadminpagesproductspagetsx)
  - [src\modules\admin\pages\RolesPage.tsx](#file-srcmodulesadminpagesrolespagetsx)
  - [src\modules\admin\pages\SystemSettingsPage.tsx](#file-srcmodulesadminpagessystemsettingspagetsx)
  - [src\modules\admin\pages\UsersPage.tsx](#file-srcmodulesadminpagesuserspagetsx)
  - [src\modules\admin\services\catalog.service.ts](#file-srcmodulesadminservicescatalogservicets)
  - [src\modules\admin\services\master-data.service.ts](#file-srcmodulesadminservicesmaster-dataservicets)
  - [src\modules\auth\hooks\useCurrentUser.ts](#file-srcmodulesauthhooksusecurrentuserts)
  - [src\modules\auth\pages\LoginPage.tsx](#file-srcmodulesauthpagesloginpagetsx)
  - [src\modules\auth\pages\NotFoundPage.tsx](#file-srcmodulesauthpagesnotfoundpagetsx)
  - [src\modules\auth\pages\UnauthorizedPage.tsx](#file-srcmodulesauthpagesunauthorizedpagetsx)
  - [src\modules\auth\schemas\login.schema.ts](#file-srcmodulesauthschemasloginschemats)
  - [src\modules\auth\services\auth.service.ts](#file-srcmodulesauthservicesauthservicets)
  - [src\modules\auth\store\auth.store.ts](#file-srcmodulesauthstoreauthstorets)
- [Components (src/components)](#components-src-components)
  - [src\components\feedback\AppLoader.tsx](#file-srccomponentsfeedbackapploadertsx)
  - [src\components\feedback\AppToaster.tsx](#file-srccomponentsfeedbackapptoastertsx)
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
  - [src\components\ui\Badge.tsx](#file-srccomponentsuibadgetsx)
  - [src\components\ui\Button.tsx](#file-srccomponentsuibuttontsx)
  - [src\components\ui\Card.tsx](#file-srccomponentsuicardtsx)
  - [src\components\ui\Checkbox.tsx](#file-srccomponentsuicheckboxtsx)
  - [src\components\ui\ConfirmDialog.tsx](#file-srccomponentsuiconfirmdialogtsx)
  - [src\components\ui\DataGrid.tsx](#file-srccomponentsuidatagridtsx)
  - [src\components\ui\Drawer.tsx](#file-srccomponentsuidrawertsx)
  - [src\components\ui\FileUploadField.tsx](#file-srccomponentsuifileuploadfieldtsx)
  - [src\components\ui\index.ts](#file-srccomponentsuiindexts)
  - [src\components\ui\Input.tsx](#file-srccomponentsuiinputtsx)
  - [src\components\ui\Modal.tsx](#file-srccomponentsuimodaltsx)
  - [src\components\ui\Pagination.tsx](#file-srccomponentsuipaginationtsx)
  - [src\components\ui\Radio.tsx](#file-srccomponentsuiradiotsx)
  - [src\components\ui\SearchField.tsx](#file-srccomponentsuisearchfieldtsx)
  - [src\components\ui\Select.tsx](#file-srccomponentsuiselecttsx)
  - [src\components\ui\Skeleton.tsx](#file-srccomponentsuiskeletontsx)
  - [src\components\ui\Switch.tsx](#file-srccomponentsuiswitchtsx)
  - [src\components\ui\Table.tsx](#file-srccomponentsuitabletsx)
  - [src\components\ui\Tabs.tsx](#file-srccomponentsuitabstsx)
  - [src\components\ui\utils.ts](#file-srccomponentsuiutilsts)
- [Services (src/services)](#services-src-services)
  - [src\services\api\api-client.ts](#file-srcservicesapiapi-clientts)
  - [src\services\api\endpoints.ts](#file-srcservicesapiendpointsts)
  - [src\services\api\error-parser.ts](#file-srcservicesapierror-parserts)
  - [src\services\storage\auth-storage.ts](#file-srcservicesstorageauth-storagets)
- [Hooks (src/hooks)](#hooks-src-hooks)
  - [src\hooks\useActiveOutlet.ts](#file-srchooksuseactiveoutletts)
  - [src\hooks\usePermission.ts](#file-srchooksusepermissionts)
  - [src\hooks\useToast.ts](#file-srchooksusetoastts)
- [Types (src/types)](#types-src-types)
  - [src\types\api.ts](#file-srctypesapits)
  - [src\types\auth.ts](#file-srctypesauthts)
  - [src\types\outlet.ts](#file-srctypesoutletts)
  - [src\types\permission.ts](#file-srctypespermissionts)
  - [src\types\product.ts](#file-srctypesproductts)
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
- SHA: `d2ca483aa4bd`  
- Ukuran: 321 B
<details><summary><strong>Lihat Kode Lengkap</strong></summary>

```tsx
import type { PropsWithChildren } from "react";
import { QueryProvider } from "./QueryProvider";
import { AppToaster } from "@/components/feedback/AppToaster";

export function AppProviders({ children }: PropsWithChildren) {
  return (
    <QueryProvider>
      {children}
      <AppToaster />
    </QueryProvider>
  );
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
- SHA: `a669d2286061`  
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
import UsersPage from "@/modules/admin/pages/UsersPage";
import RolesPage from "@/modules/admin/pages/RolesPage";
import PermissionsPage from "@/modules/admin/pages/PermissionsPage";
import OutletsPage from "@/modules/admin/pages/OutletsPage";
import SystemSettingsPage from "@/modules/admin/pages/SystemSettingsPage";
import ProductCategoriesPage from "@/modules/admin/pages/ProductCategoriesPage";
import ProductsPage from "@/modules/admin/pages/ProductsPage";

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
          { path: "users", element: <UsersPage /> },
          { path: "roles", element: <RolesPage /> },
          { path: "permissions", element: <PermissionsPage /> },
          { path: "outlets", element: <OutletsPage /> },
          { path: "system-settings", element: <SystemSettingsPage /> },
          { path: "product-categories", element: <ProductCategoriesPage /> },
          { path: "products", element: <ProductsPage /> },
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

<a id="file-srcmodulesadminpagesoutletspagetsx"></a>
### src\modules\admin\pages\OutletsPage.tsx
- SHA: `253f15245bde`  
- Ukuran: 14 KB
<details><summary><strong>Lihat Kode Lengkap</strong></summary>

```tsx
import { useState } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  masterDataService,
  type OutletPayload,
  type OutletSettingPayload,
} from "@/modules/admin/services/master-data.service";
import { PageHeader } from "@/components/navigation/PageHeader";
import { PermissionWrapper } from "@/components/navigation/PermissionWrapper";
import { PageErrorState } from "@/components/feedback/PageErrorState";
import { PageEmptyState } from "@/components/feedback/PageEmptyState";
import { Badge, Button, Card, Checkbox, Input, Modal } from "@/components/ui";
import { parseApiError } from "@/services/api/error-parser";
import { useToast } from "@/hooks/useToast";
import type { Outlet } from "@/types/outlet";

const initialOutletForm: OutletPayload = {
  code: "",
  name: "",
  phone: "",
  email: "",
  address: "",
  city: "",
  province: "",
  postal_code: "",
  latitude: "",
  longitude: "",
  opening_time: "",
  closing_time: "",
  is_active: true,
};

const initialSettingForm: OutletSettingPayload = {
  tax_percent: 0,
  service_charge_percent: 0,
  currency_code: "IDR",
  receipt_footer: "",
  invoice_prefix: "",
  order_prefix: "",
  timezone: "Asia/Jakarta",
  allow_negative_stock: false,
  low_stock_notification_enabled: true,
};

export default function OutletsPage() {
  const toast = useToast();
  const queryClient = useQueryClient();

  const [search, setSearch] = useState("");
  const [openOutletModal, setOpenOutletModal] = useState(false);
  const [openSettingModal, setOpenSettingModal] = useState(false);
  const [editingOutlet, setEditingOutlet] = useState<Outlet | null>(null);
  const [outletForm, setOutletForm] = useState<OutletPayload>(initialOutletForm);
  const [settingOutlet, setSettingOutlet] = useState<Outlet | null>(null);
  const [settingForm, setSettingForm] = useState<OutletSettingPayload>(initialSettingForm);

  const outletsQuery = useQuery({
    queryKey: ["admin-outlets", search],
    queryFn: () => masterDataService.getOutlets({ per_page: 100, search }),
  });

  const saveOutletMutation = useMutation({
    mutationFn: (payload: OutletPayload) =>
      editingOutlet
        ? masterDataService.updateOutlet(editingOutlet.id, payload)
        : masterDataService.createOutlet(payload),
    onSuccess: (response) => {
      toast.success(response.message);
      setOpenOutletModal(false);
      setEditingOutlet(null);
      setOutletForm(initialOutletForm);
      void queryClient.invalidateQueries({ queryKey: ["admin-outlets"] });
    },
    onError: (error) => toast.error("Gagal menyimpan outlet", parseApiError(error)),
  });

  const deleteMutation = useMutation({
    mutationFn: (id: number) => masterDataService.deleteOutlet(id),
    onSuccess: (response) => {
      toast.success(response.message);
      void queryClient.invalidateQueries({ queryKey: ["admin-outlets"] });
    },
    onError: (error) => toast.error("Gagal menghapus outlet", parseApiError(error)),
  });

  const saveSettingMutation = useMutation({
    mutationFn: () =>
      settingOutlet
        ? masterDataService.updateOutletSetting(settingOutlet.id, settingForm)
        : Promise.reject(new Error("Outlet tidak dipilih")),
    onSuccess: (response) => {
      toast.success(response.message);
      setOpenSettingModal(false);
      setSettingOutlet(null);
      void queryClient.invalidateQueries({ queryKey: ["admin-outlets"] });
    },
    onError: (error) => toast.error("Gagal menyimpan setting outlet", parseApiError(error)),
  });

  const outlets = outletsQuery.data?.items ?? [];

  const openCreate = () => {
    setEditingOutlet(null);
    setOutletForm(initialOutletForm);
    setOpenOutletModal(true);
  };

  const openEdit = (outlet: Outlet) => {
    setEditingOutlet(outlet);
    setOutletForm({
      code: outlet.code,
      name: outlet.name,
      phone: outlet.phone ?? "",
      email: outlet.email ?? "",
      address: outlet.address ?? "",
      city: outlet.city ?? "",
      province: outlet.province ?? "",
      postal_code: outlet.postal_code ?? "",
      latitude: outlet.latitude ?? "",
      longitude: outlet.longitude ?? "",
      opening_time: outlet.opening_time ?? "",
      closing_time: outlet.closing_time ?? "",
      is_active: outlet.is_active,
    });
    setOpenOutletModal(true);
  };

  const openSetting = async (outlet: Outlet) => {
    try {
      const response = await masterDataService.getOutletSetting(outlet.id);

      setSettingOutlet(outlet);
      setSettingForm({
        tax_percent: Number(response.data.tax_percent),
        service_charge_percent: Number(response.data.service_charge_percent),
        currency_code: response.data.currency_code,
        receipt_footer: response.data.receipt_footer ?? "",
        invoice_prefix: response.data.invoice_prefix ?? "",
        order_prefix: response.data.order_prefix ?? "",
        timezone: response.data.timezone,
        allow_negative_stock: response.data.allow_negative_stock,
        low_stock_notification_enabled: response.data.low_stock_notification_enabled,
      });
      setOpenSettingModal(true);
    } catch (error) {
      toast.error("Gagal mengambil setting outlet", parseApiError(error));
    }
  };

  return (
    <PermissionWrapper permission="outlets.view">
      <div className="space-y-4">
        <PageHeader
          title="Outlets"
          description="Kelola cabang dan setting per outlet."
          actions={<Button onClick={openCreate}>Tambah Outlet</Button>}
        />

        <Card>
          <Input
            placeholder="Cari code, nama, kota, atau provinsi..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </Card>

        {outletsQuery.isLoading ? (
          <Card>Memuat data outlet...</Card>
        ) : outletsQuery.isError ? (
          <PageErrorState onRetry={() => void outletsQuery.refetch()} />
        ) : !outlets.length ? (
          <PageEmptyState title="Belum ada outlet" />
        ) : (
          <div className="grid gap-4 lg:grid-cols-2">
            {outlets.map((outlet) => (
              <Card
                key={outlet.id}
                title={`${outlet.name} (${outlet.code})`}
                description={outlet.address ?? "-"}
                actions={
                  <Badge variant={outlet.is_active ? "success" : "danger"}>
                    {outlet.is_active ? "Aktif" : "Nonaktif"}
                  </Badge>
                }
              >
                <div className="space-y-2 text-sm text-slate-600">
                  <div>Kota: {outlet.city ?? "-"}</div>
                  <div>Provinsi: {outlet.province ?? "-"}</div>
                  <div>Jam Operasional: {outlet.opening_time ?? "-"} - {outlet.closing_time ?? "-"}</div>
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                  <Button variant="outline" onClick={() => openEdit(outlet)}>
                    Edit Outlet
                  </Button>
                  <Button variant="secondary" onClick={() => void openSetting(outlet)}>
                    Setting Outlet
                  </Button>
                  <Button
                    variant="danger"
                    loading={deleteMutation.isPending}
                    onClick={() => deleteMutation.mutate(outlet.id)}
                  >
                    Hapus
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        )}

        <Modal
          open={openOutletModal}
          title={editingOutlet ? "Edit Outlet" : "Tambah Outlet"}
          onClose={() => setOpenOutletModal(false)}
          footer={
            <>
              <Button variant="outline" onClick={() => setOpenOutletModal(false)}>
                Batal
              </Button>
              <Button
                loading={saveOutletMutation.isPending}
                onClick={() => saveOutletMutation.mutate(outletForm)}
              >
                Simpan
              </Button>
            </>
          }
        >
          <div className="grid gap-4 md:grid-cols-2">
            <Input
              label="Kode Outlet"
              value={outletForm.code}
              onChange={(e) => setOutletForm((prev) => ({ ...prev, code: e.target.value }))}
            />
            <Input
              label="Nama Outlet"
              value={outletForm.name}
              onChange={(e) => setOutletForm((prev) => ({ ...prev, name: e.target.value }))}
            />
            <Input
              label="Phone"
              value={outletForm.phone ?? ""}
              onChange={(e) => setOutletForm((prev) => ({ ...prev, phone: e.target.value }))}
            />
            <Input
              label="Email"
              value={outletForm.email ?? ""}
              onChange={(e) => setOutletForm((prev) => ({ ...prev, email: e.target.value }))}
            />
            <Input
              label="City"
              value={outletForm.city ?? ""}
              onChange={(e) => setOutletForm((prev) => ({ ...prev, city: e.target.value }))}
            />
            <Input
              label="Province"
              value={outletForm.province ?? ""}
              onChange={(e) => setOutletForm((prev) => ({ ...prev, province: e.target.value }))}
            />
            <Input
              label="Postal Code"
              value={outletForm.postal_code ?? ""}
              onChange={(e) => setOutletForm((prev) => ({ ...prev, postal_code: e.target.value }))}
            />
            <Input
              label="Address"
              value={outletForm.address ?? ""}
              onChange={(e) => setOutletForm((prev) => ({ ...prev, address: e.target.value }))}
            />
            <Input
              label="Latitude"
              value={outletForm.latitude ?? ""}
              onChange={(e) => setOutletForm((prev) => ({ ...prev, latitude: e.target.value }))}
            />
            <Input
              label="Longitude"
              value={outletForm.longitude ?? ""}
              onChange={(e) => setOutletForm((prev) => ({ ...prev, longitude: e.target.value }))}
            />
            <Input
              label="Opening Time"
              type="time"
              value={outletForm.opening_time ?? ""}
              onChange={(e) => setOutletForm((prev) => ({ ...prev, opening_time: e.target.value }))}
            />
            <Input
              label="Closing Time"
              type="time"
              value={outletForm.closing_time ?? ""}
              onChange={(e) => setOutletForm((prev) => ({ ...prev, closing_time: e.target.value }))}
            />
            <div className="md:col-span-2">
              <Checkbox
                label="Outlet aktif"
                checked={Boolean(outletForm.is_active)}
                onChange={(e) => setOutletForm((prev) => ({ ...prev, is_active: e.target.checked }))}
              />
            </div>
          </div>
        </Modal>

        <Modal
          open={openSettingModal}
          title={`Setting Outlet${settingOutlet ? ` — ${settingOutlet.name}` : ""}`}
          onClose={() => setOpenSettingModal(false)}
          footer={
            <>
              <Button variant="outline" onClick={() => setOpenSettingModal(false)}>
                Batal
              </Button>
              <Button loading={saveSettingMutation.isPending} onClick={() => saveSettingMutation.mutate()}>
                Simpan Setting
              </Button>
            </>
          }
        >
          <div className="grid gap-4 md:grid-cols-2">
            <Input
              label="Tax Percent"
              type="number"
              value={String(settingForm.tax_percent ?? 0)}
              onChange={(e) =>
                setSettingForm((prev) => ({ ...prev, tax_percent: Number(e.target.value) }))
              }
            />
            <Input
              label="Service Charge Percent"
              type="number"
              value={String(settingForm.service_charge_percent ?? 0)}
              onChange={(e) =>
                setSettingForm((prev) => ({
                  ...prev,
                  service_charge_percent: Number(e.target.value),
                }))
              }
            />
            <Input
              label="Currency Code"
              value={settingForm.currency_code ?? "IDR"}
              onChange={(e) =>
                setSettingForm((prev) => ({ ...prev, currency_code: e.target.value }))
              }
            />
            <Input
              label="Timezone"
              value={settingForm.timezone ?? "Asia/Jakarta"}
              onChange={(e) =>
                setSettingForm((prev) => ({ ...prev, timezone: e.target.value }))
              }
            />
            <Input
              label="Invoice Prefix"
              value={settingForm.invoice_prefix ?? ""}
              onChange={(e) =>
                setSettingForm((prev) => ({ ...prev, invoice_prefix: e.target.value }))
              }
            />
            <Input
              label="Order Prefix"
              value={settingForm.order_prefix ?? ""}
              onChange={(e) =>
                setSettingForm((prev) => ({ ...prev, order_prefix: e.target.value }))
              }
            />
            <div className="md:col-span-2">
              <Input
                label="Receipt Footer"
                value={settingForm.receipt_footer ?? ""}
                onChange={(e) =>
                  setSettingForm((prev) => ({ ...prev, receipt_footer: e.target.value }))
                }
              />
            </div>
            <div className="md:col-span-2 grid gap-2">
              <Checkbox
                label="Allow negative stock"
                checked={Boolean(settingForm.allow_negative_stock)}
                onChange={(e) =>
                  setSettingForm((prev) => ({
                    ...prev,
                    allow_negative_stock: e.target.checked,
                  }))
                }
              />
              <Checkbox
                label="Low stock notification enabled"
                checked={Boolean(settingForm.low_stock_notification_enabled)}
                onChange={(e) =>
                  setSettingForm((prev) => ({
                    ...prev,
                    low_stock_notification_enabled: e.target.checked,
                  }))
                }
              />
            </div>
          </div>
        </Modal>
      </div>
    </PermissionWrapper>
  );
}
```
</details>

<a id="file-srcmodulesadminpagespermissionspagetsx"></a>
### src\modules\admin\pages\PermissionsPage.tsx
- SHA: `de0fa91fa966`  
- Ukuran: 5 KB
<details><summary><strong>Lihat Kode Lengkap</strong></summary>

```tsx
import { useState } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { masterDataService } from "@/modules/admin/services/master-data.service";
import { PageHeader } from "@/components/navigation/PageHeader";
import { PermissionWrapper } from "@/components/navigation/PermissionWrapper";
import { PageErrorState } from "@/components/feedback/PageErrorState";
import { PageEmptyState } from "@/components/feedback/PageEmptyState";
import { Button, Card, Input, Modal } from "@/components/ui";
import { parseApiError } from "@/services/api/error-parser";
import { useToast } from "@/hooks/useToast";
import type { Permission } from "@/types/permission";

export default function PermissionsPage() {
  const toast = useToast();
  const queryClient = useQueryClient();

  const [open, setOpen] = useState(false);
  const [editing, setEditing] = useState<Permission | null>(null);
  const [name, setName] = useState("");

  const permissionsQuery = useQuery({
    queryKey: ["admin-permissions"],
    queryFn: () => masterDataService.getPermissions({ per_page: 200 }),
  });

  const saveMutation = useMutation({
    mutationFn: () =>
      editing
        ? masterDataService.updatePermission(editing.id, { name })
        : masterDataService.createPermission({ name }),
    onSuccess: (response) => {
      toast.success(response.message);
      setOpen(false);
      setEditing(null);
      setName("");
      void queryClient.invalidateQueries({ queryKey: ["admin-permissions"] });
    },
    onError: (error) => toast.error("Gagal menyimpan permission", parseApiError(error)),
  });

  const deleteMutation = useMutation({
    mutationFn: (id: number) => masterDataService.deletePermission(id),
    onSuccess: (response) => {
      toast.success(response.message);
      void queryClient.invalidateQueries({ queryKey: ["admin-permissions"] });
    },
    onError: (error) => toast.error("Gagal menghapus permission", parseApiError(error)),
  });

  const permissions = permissionsQuery.data?.items ?? [];

  return (
    <PermissionWrapper permission="permissions.view">
      <div className="space-y-4">
        <PageHeader
          title="Permissions"
          description="Kelola permission sistem."
          actions={
            <Button
              onClick={() => {
                setEditing(null);
                setName("");
                setOpen(true);
              }}
            >
              Tambah Permission
            </Button>
          }
        />

        {permissionsQuery.isLoading ? (
          <Card>Memuat data permission...</Card>
        ) : permissionsQuery.isError ? (
          <PageErrorState onRetry={() => void permissionsQuery.refetch()} />
        ) : !permissions.length ? (
          <PageEmptyState title="Belum ada permission" />
        ) : (
          <Card>
            <div className="space-y-3">
              {permissions.map((permission) => (
                <div
                  key={permission.id}
                  className="flex flex-col gap-3 rounded-2xl border border-slate-200 p-4 lg:flex-row lg:items-center lg:justify-between"
                >
                  <div>
                    <div className="font-medium text-slate-900">{permission.name}</div>
                    <div className="text-xs text-slate-500">{permission.guard_name}</div>
                  </div>

                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      onClick={() => {
                        setEditing(permission);
                        setName(permission.name);
                        setOpen(true);
                      }}
                    >
                      Edit
                    </Button>
                    <Button
                      variant="danger"
                      loading={deleteMutation.isPending}
                      onClick={() => deleteMutation.mutate(permission.id)}
                    >
                      Hapus
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        )}

        <Modal
          open={open}
          title={editing ? "Edit Permission" : "Tambah Permission"}
          onClose={() => setOpen(false)}
          footer={
            <>
              <Button variant="outline" onClick={() => setOpen(false)}>
                Batal
              </Button>
              <Button loading={saveMutation.isPending} onClick={() => saveMutation.mutate()}>
                Simpan
              </Button>
            </>
          }
        >
          <Input
            label="Nama Permission"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="contoh: users.view"
          />
        </Modal>
      </div>
    </PermissionWrapper>
  );
}
```
</details>

<a id="file-srcmodulesadminpagesproductcategoriespagetsx"></a>
### src\modules\admin\pages\ProductCategoriesPage.tsx
- SHA: `5bed9c304e5a`  
- Ukuran: 7 KB
<details><summary><strong>Lihat Kode Lengkap</strong></summary>

```tsx
import { useState } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  catalogService,
  type ProductCategoryPayload,
} from "@/modules/admin/services/catalog.service";
import { PageHeader } from "@/components/navigation/PageHeader";
import { PermissionWrapper } from "@/components/navigation/PermissionWrapper";
import { PageErrorState } from "@/components/feedback/PageErrorState";
import { PageEmptyState } from "@/components/feedback/PageEmptyState";
import { Badge, Button, Card, Checkbox, Input, Modal } from "@/components/ui";
import { parseApiError } from "@/services/api/error-parser";
import { useToast } from "@/hooks/useToast";
import type { ProductCategory } from "@/types/product";

const initialForm: ProductCategoryPayload = {
  name: "",
  slug: "",
  sort_order: 0,
  is_active: true,
};

export default function ProductCategoriesPage() {
  const toast = useToast();
  const queryClient = useQueryClient();

  const [search, setSearch] = useState("");
  const [open, setOpen] = useState(false);
  const [editing, setEditing] = useState<ProductCategory | null>(null);
  const [form, setForm] = useState<ProductCategoryPayload>(initialForm);

  const categoriesQuery = useQuery({
    queryKey: ["admin-product-categories", search],
    queryFn: () => catalogService.getProductCategories({ per_page: 100, search }),
  });

  const saveMutation = useMutation({
    mutationFn: (payload: ProductCategoryPayload) =>
      editing
        ? catalogService.updateProductCategory(editing.id, payload)
        : catalogService.createProductCategory(payload),
    onSuccess: (response) => {
      toast.success(response.message);
      setOpen(false);
      setEditing(null);
      setForm(initialForm);
      void queryClient.invalidateQueries({ queryKey: ["admin-product-categories"] });
    },
    onError: (error) => toast.error("Gagal menyimpan kategori", parseApiError(error)),
  });

  const deleteMutation = useMutation({
    mutationFn: (id: number) => catalogService.deleteProductCategory(id),
    onSuccess: (response) => {
      toast.success(response.message);
      void queryClient.invalidateQueries({ queryKey: ["admin-product-categories"] });
    },
    onError: (error) => toast.error("Gagal menghapus kategori", parseApiError(error)),
  });

  const categories = categoriesQuery.data?.items ?? [];

  const openCreate = () => {
    setEditing(null);
    setForm(initialForm);
    setOpen(true);
  };

  const openEdit = (category: ProductCategory) => {
    setEditing(category);
    setForm({
      name: category.name,
      slug: category.slug ?? "",
      sort_order: category.sort_order ?? 0,
      is_active: category.is_active,
    });
    setOpen(true);
  };

  return (
    <PermissionWrapper permission="product_categories.view">
      <div className="space-y-4">
        <PageHeader
          title="Product Categories"
          description="Kelola kategori menu Chicken Alibaba."
          actions={<Button onClick={openCreate}>Tambah Kategori</Button>}
        />

        <Card>
          <Input
            placeholder="Cari nama atau slug kategori..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </Card>

        {categoriesQuery.isLoading ? (
          <Card>Memuat kategori produk...</Card>
        ) : categoriesQuery.isError ? (
          <PageErrorState onRetry={() => void categoriesQuery.refetch()} />
        ) : !categories.length ? (
          <PageEmptyState title="Belum ada kategori produk" />
        ) : (
          <Card>
            <div className="space-y-3">
              {categories.map((category) => (
                <div
                  key={category.id}
                  className="flex flex-col gap-3 rounded-2xl border border-slate-200 p-4 lg:flex-row lg:items-center lg:justify-between"
                >
                  <div className="min-w-0">
                    <div className="font-medium text-slate-900">{category.name}</div>
                    <div className="text-xs text-slate-500">
                      slug: {category.slug ?? "-"} • sort: {category.sort_order ?? 0} • produk:{" "}
                      {category.products_count ?? 0}
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-2">
                    <Badge variant={category.is_active ? "success" : "danger"}>
                      {category.is_active ? "Aktif" : "Nonaktif"}
                    </Badge>

                    <Button variant="outline" onClick={() => openEdit(category)}>
                      Edit
                    </Button>

                    <Button
                      variant="danger"
                      loading={deleteMutation.isPending}
                      onClick={() => deleteMutation.mutate(category.id)}
                    >
                      Hapus
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        )}

        <Modal
          open={open}
          title={editing ? "Edit Kategori Produk" : "Tambah Kategori Produk"}
          onClose={() => setOpen(false)}
          footer={
            <>
              <Button variant="outline" onClick={() => setOpen(false)}>
                Batal
              </Button>
              <Button loading={saveMutation.isPending} onClick={() => saveMutation.mutate(form)}>
                Simpan
              </Button>
            </>
          }
        >
          <div className="grid gap-4 md:grid-cols-2">
            <Input
              label="Nama Kategori"
              value={form.name}
              onChange={(e) => setForm((prev) => ({ ...prev, name: e.target.value }))}
            />

            <Input
              label="Slug"
              value={form.slug ?? ""}
              onChange={(e) => setForm((prev) => ({ ...prev, slug: e.target.value }))}
            />

            <Input
              label="Sort Order"
              type="number"
              value={String(form.sort_order ?? 0)}
              onChange={(e) =>
                setForm((prev) => ({
                  ...prev,
                  sort_order: Number(e.target.value || 0),
                }))
              }
            />

            <div className="md:col-span-2">
              <Checkbox
                label="Kategori aktif"
                checked={Boolean(form.is_active)}
                onChange={(e) => setForm((prev) => ({ ...prev, is_active: e.target.checked }))}
              />
            </div>
          </div>
        </Modal>
      </div>
    </PermissionWrapper>
  );
}
```
</details>

<a id="file-srcmodulesadminpagesproductspagetsx"></a>
### src\modules\admin\pages\ProductsPage.tsx
- SHA: `a1be01ee9029`  
- Ukuran: 53 KB
<details><summary><strong>Lihat Kode Lengkap</strong></summary>

```tsx
import { useMemo, useState } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  catalogService,
  type ProductBundleItemPayload,
  type ProductModifierGroupPayload,
  type ProductOutletStatusPayload,
  type ProductPayload,
  type ProductPricePayload,
  type ProductVariantGroupPayload,
} from "@/modules/admin/services/catalog.service";
import { masterDataService } from "@/modules/admin/services/master-data.service";
import { PageHeader } from "@/components/navigation/PageHeader";
import { PermissionWrapper } from "@/components/navigation/PermissionWrapper";
import { PageErrorState } from "@/components/feedback/PageErrorState";
import { PageEmptyState } from "@/components/feedback/PageEmptyState";
import { Badge, Button, Card, Checkbox, Input, Modal } from "@/components/ui";
import { parseApiError } from "@/services/api/error-parser";
import { useToast } from "@/hooks/useToast";
import type { Product } from "@/types/product";

const initialForm: ProductPayload = {
  product_category_id: 0,
  sku: "",
  code: "",
  name: "",
  slug: "",
  description: "",
  image_url: "",
  base_price: 0,
  product_type: "single",
  is_active: true,
  is_featured: false,
  track_recipe: true,
  track_stock_direct: false,
  prices: [],
  outlet_statuses: [],
  variant_groups: [],
  modifier_groups: [],
  bundle_items: [],
};

const createEmptyPrice = (): ProductPricePayload => ({
  outlet_id: 0,
  price: 0,
  dine_in_price: null,
  takeaway_price: null,
  delivery_price: null,
  starts_at: null,
  ends_at: null,
  is_active: true,
});

const createEmptyOutletStatus = (): ProductOutletStatusPayload => ({
  outlet_id: 0,
  is_available: true,
  is_hidden: false,
  daily_limit: null,
  notes: "",
});

const createEmptyVariantGroup = (): ProductVariantGroupPayload => ({
  name: "",
  selection_type: "single",
  is_required: true,
  sort_order: 0,
  options: [
    {
      name: "",
      price_adjustment: 0,
      sort_order: 0,
      is_active: true,
    },
  ],
});

const createEmptyModifierGroup = (): ProductModifierGroupPayload => ({
  name: "",
  min_select: 0,
  max_select: 1,
  is_required: false,
  sort_order: 0,
  options: [
    {
      name: "",
      price: 0,
      sort_order: 0,
      is_active: true,
    },
  ],
});

const createEmptyBundleItem = (): ProductBundleItemPayload => ({
  bundled_product_id: 0,
  qty: 1,
});

export default function ProductsPage() {
  const toast = useToast();
  const queryClient = useQueryClient();

  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [categoryFilter, setCategoryFilter] = useState<number | "">("");
  const [typeFilter, setTypeFilter] = useState<"single" | "bundle" | "">("");
  const [statusFilter, setStatusFilter] = useState<boolean | "">("");
  const [open, setOpen] = useState(false);
  const [editing, setEditing] = useState<Product | null>(null);
  const [form, setForm] = useState<ProductPayload>(initialForm);

  const categoriesQuery = useQuery({
    queryKey: ["admin-product-category-options"],
    queryFn: () => catalogService.getProductCategories({ per_page: 100 }),
  });

  const outletsQuery = useQuery({
    queryKey: ["admin-product-outlet-options"],
    queryFn: () => masterDataService.getOutlets({ per_page: 100 }),
  });

  const productsQuery = useQuery({
    queryKey: ["admin-products", page, search, categoryFilter, typeFilter, statusFilter],
    queryFn: () =>
      catalogService.getProducts({
        page,
        per_page: 10,
        search,
        product_category_id: categoryFilter,
        product_type: typeFilter,
        is_active: statusFilter,
      }),
  });

  const saveMutation = useMutation({
    mutationFn: (payload: ProductPayload) =>
      editing ? catalogService.updateProduct(editing.id, payload) : catalogService.createProduct(payload),
    onSuccess: (response) => {
      toast.success(response.message);
      setOpen(false);
      setEditing(null);
      setForm(initialForm);
      void queryClient.invalidateQueries({ queryKey: ["admin-products"] });
    },
    onError: (error) => toast.error("Gagal menyimpan produk", parseApiError(error)),
  });

  const deleteMutation = useMutation({
    mutationFn: (id: number) => catalogService.deleteProduct(id),
    onSuccess: (response) => {
      toast.success(response.message);
      void queryClient.invalidateQueries({ queryKey: ["admin-products"] });
    },
    onError: (error) => toast.error("Gagal menghapus produk", parseApiError(error)),
  });

  const categoryOptions = categoriesQuery.data?.items ?? [];
  const outletOptions = outletsQuery.data?.items ?? [];
  const products = productsQuery.data?.items ?? [];
  const meta = productsQuery.data?.meta;
  const totalPages = Number(meta?.last_page ?? 1);

  const bundleCandidateProducts = useMemo(() => {
    return products.filter((item) => item.id !== editing?.id);
  }, [products, editing?.id]);

  const openCreate = () => {
    setEditing(null);
    setForm(initialForm);
    setOpen(true);
  };

  const openEdit = (product: Product) => {
    setEditing(product);
    setForm({
      product_category_id: product.product_category_id,
      sku: product.sku ?? "",
      code: product.code ?? "",
      name: product.name,
      slug: product.slug ?? "",
      description: product.description ?? "",
      image_url: product.image_url ?? "",
      base_price: Number(product.base_price ?? 0),
      product_type: product.product_type,
      is_active: product.is_active,
      is_featured: product.is_featured,
      track_recipe: product.track_recipe,
      track_stock_direct: product.track_stock_direct,
      prices:
        product.prices?.map((item) => ({
          outlet_id: item.outlet_id,
          price: Number(item.price ?? 0),
          dine_in_price: item.dine_in_price !== null ? Number(item.dine_in_price ?? 0) : null,
          takeaway_price:
            item.takeaway_price !== null ? Number(item.takeaway_price ?? 0) : null,
          delivery_price:
            item.delivery_price !== null ? Number(item.delivery_price ?? 0) : null,
          starts_at: item.starts_at ?? null,
          ends_at: item.ends_at ?? null,
          is_active: item.is_active ?? true,
        })) ?? [],
      outlet_statuses:
        product.outlet_statuses?.map((item) => ({
          outlet_id: item.outlet_id,
          is_available: item.is_available ?? true,
          is_hidden: item.is_hidden ?? false,
          daily_limit: item.daily_limit ?? null,
          notes: item.notes ?? "",
        })) ?? [],
      variant_groups:
        product.variant_groups?.map((group) => ({
          name: group.name,
          selection_type: group.selection_type,
          is_required: group.is_required ?? true,
          sort_order: group.sort_order ?? 0,
          options:
            group.options?.map((option) => ({
              name: option.name,
              price_adjustment: Number(option.price_adjustment ?? 0),
              sort_order: option.sort_order ?? 0,
              is_active: option.is_active ?? true,
            })) ?? [],
        })) ?? [],
      modifier_groups:
        product.modifier_groups?.map((group) => ({
          name: group.name,
          min_select: group.min_select ?? 0,
          max_select: group.max_select ?? 1,
          is_required: group.is_required ?? false,
          sort_order: group.sort_order ?? 0,
          options:
            group.options?.map((option) => ({
              name: option.name,
              price: Number(option.price ?? 0),
              sort_order: option.sort_order ?? 0,
              is_active: option.is_active ?? true,
            })) ?? [],
        })) ?? [],
      bundle_items:
        product.bundle_items?.map((item) => ({
          bundled_product_id: item.bundled_product_id,
          qty: Number(item.qty ?? 1),
        })) ?? [],
    });
    setOpen(true);
  };

  const sanitizePayload = (payload: ProductPayload): ProductPayload => ({
    ...payload,
    sku: payload.sku || null,
    code: payload.code || null,
    slug: payload.slug || null,
    description: payload.description || null,
    image_url: payload.image_url || null,
    prices: (payload.prices ?? []).filter((item) => item.outlet_id > 0),
    outlet_statuses: (payload.outlet_statuses ?? []).filter((item) => item.outlet_id > 0),
    variant_groups: (payload.variant_groups ?? [])
      .filter((group) => group.name.trim() !== "")
      .map((group) => ({
        ...group,
        options: group.options.filter((option) => option.name.trim() !== ""),
      }))
      .filter((group) => group.options.length > 0),
    modifier_groups: (payload.modifier_groups ?? [])
      .filter((group) => group.name.trim() !== "")
      .map((group) => ({
        ...group,
        options: group.options.filter((option) => option.name.trim() !== ""),
      }))
      .filter((group) => group.options.length > 0),
    bundle_items:
      payload.product_type === "bundle"
        ? (payload.bundle_items ?? []).filter((item) => item.bundled_product_id > 0)
        : [],
  });

  return (
    <PermissionWrapper permission="products.view">
      <div className="space-y-4">
        <PageHeader
          title="Products"
          description="Kelola menu, harga outlet, status jual, varian, modifier, dan paket."
          actions={<Button onClick={openCreate}>Tambah Produk</Button>}
        />

        <Card>
          <div className="grid gap-3 md:grid-cols-4">
            <Input
              placeholder="Cari nama, SKU, code, atau slug..."
              value={search}
              onChange={(e) => {
                setPage(1);
                setSearch(e.target.value);
              }}
            />

            <select
              className="w-full rounded-xl border border-slate-300 px-3 py-2 text-sm"
              value={categoryFilter}
              onChange={(e) => {
                setPage(1);
                setCategoryFilter(e.target.value ? Number(e.target.value) : "");
              }}
            >
              <option value="">Semua kategori</option>
              {categoryOptions.map((category) => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
            </select>

            <select
              className="w-full rounded-xl border border-slate-300 px-3 py-2 text-sm"
              value={typeFilter}
              onChange={(e) => {
                setPage(1);
                setTypeFilter((e.target.value as "single" | "bundle" | "") || "");
              }}
            >
              <option value="">Semua tipe</option>
              <option value="single">single</option>
              <option value="bundle">bundle</option>
            </select>

            <select
              className="w-full rounded-xl border border-slate-300 px-3 py-2 text-sm"
              value={statusFilter === "" ? "" : statusFilter ? "1" : "0"}
              onChange={(e) => {
                setPage(1);
                if (e.target.value === "") {
                  setStatusFilter("");
                } else {
                  setStatusFilter(e.target.value === "1");
                }
              }}
            >
              <option value="">Semua status</option>
              <option value="1">Aktif</option>
              <option value="0">Nonaktif</option>
            </select>
          </div>
        </Card>

        {productsQuery.isLoading ? (
          <Card>Memuat produk...</Card>
        ) : productsQuery.isError ? (
          <PageErrorState onRetry={() => void productsQuery.refetch()} />
        ) : !products.length ? (
          <PageEmptyState title="Belum ada produk" />
        ) : (
          <Card>
            <div className="overflow-x-auto">
              <table className="min-w-full text-sm">
                <thead>
                  <tr className="border-b border-slate-200 text-left text-slate-500">
                    <th className="px-3 py-3">Produk</th>
                    <th className="px-3 py-3">Kategori</th>
                    <th className="px-3 py-3">Harga Dasar</th>
                    <th className="px-3 py-3">Tipe</th>
                    <th className="px-3 py-3">Tag</th>
                    <th className="px-3 py-3">Status</th>
                    <th className="px-3 py-3 text-right">Aksi</th>
                  </tr>
                </thead>
                <tbody>
                  {products.map((product) => (
                    <tr key={product.id} className="border-b border-slate-100 align-top">
                      <td className="px-3 py-3">
                        <div className="font-medium text-slate-900">{product.name}</div>
                        <div className="text-xs text-slate-500">
                          SKU: {product.sku ?? "-"} • Code: {product.code ?? "-"}
                        </div>
                        {product.image_url ? (
                          <div className="mt-2 text-xs text-blue-600 break-all">{product.image_url}</div>
                        ) : null}
                      </td>

                      <td className="px-3 py-3 text-slate-600">{product.category?.name ?? "-"}</td>

                      <td className="px-3 py-3 text-slate-600">
                        Rp {Number(product.base_price ?? 0).toLocaleString("id-ID")}
                      </td>

                      <td className="px-3 py-3">
                        <Badge variant={product.product_type === "bundle" ? "warning" : "info"}>
                          {product.product_type}
                        </Badge>
                      </td>

                      <td className="px-3 py-3">
                        <div className="flex flex-wrap gap-2">
                          {product.is_featured ? <Badge variant="info">featured</Badge> : null}
                          {product.track_recipe ? <Badge variant="success">recipe</Badge> : null}
                          {product.track_stock_direct ? (
                            <Badge variant="warning">direct-stock</Badge>
                          ) : null}
                          {product.variant_groups?.length ? (
                            <Badge variant="info">variants: {product.variant_groups.length}</Badge>
                          ) : null}
                          {product.modifier_groups?.length ? (
                            <Badge variant="info">modifiers: {product.modifier_groups.length}</Badge>
                          ) : null}
                          {product.bundle_items?.length ? (
                            <Badge variant="warning">bundle: {product.bundle_items.length}</Badge>
                          ) : null}
                        </div>
                      </td>

                      <td className="px-3 py-3">
                        <Badge variant={product.is_active ? "success" : "danger"}>
                          {product.is_active ? "Aktif" : "Nonaktif"}
                        </Badge>
                      </td>

                      <td className="px-3 py-3">
                        <div className="flex justify-end gap-2">
                          <Button variant="outline" onClick={() => openEdit(product)}>
                            Edit
                          </Button>
                          <Button
                            variant="danger"
                            loading={deleteMutation.isPending}
                            onClick={() => deleteMutation.mutate(product.id)}
                          >
                            Hapus
                          </Button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-4 flex items-center justify-between">
              <div className="text-sm text-slate-500">
                Halaman {meta?.current_page ?? 1} dari {totalPages}
              </div>
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  disabled={(meta?.current_page ?? 1) <= 1}
                  onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
                >
                  Sebelumnya
                </Button>

                <Button
                  variant="outline"
                  disabled={(meta?.current_page ?? 1) >= totalPages}
                  onClick={() => setPage((prev) => prev + 1)}
                >
                  Berikutnya
                </Button>
              </div>
            </div>
          </Card>
        )}

        <Modal
          open={open}
          title={editing ? "Edit Produk" : "Tambah Produk"}
          onClose={() => setOpen(false)}
          footer={
            <>
              <Button variant="outline" onClick={() => setOpen(false)}>
                Batal
              </Button>
              <Button
                loading={saveMutation.isPending}
                onClick={() => saveMutation.mutate(sanitizePayload(form))}
              >
                Simpan
              </Button>
            </>
          }
        >
          <div className="space-y-6 max-h-[70vh] overflow-y-auto pr-1">
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">Kategori</label>
                <select
                  className="w-full rounded-xl border border-slate-300 px-3 py-2 text-sm"
                  value={form.product_category_id || ""}
                  onChange={(e) =>
                    setForm((prev) => ({
                      ...prev,
                      product_category_id: Number(e.target.value || 0),
                    }))
                  }
                >
                  <option value="">Pilih kategori</option>
                  {categoryOptions.map((category) => (
                    <option key={category.id} value={category.id}>
                      {category.name}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">Product Type</label>
                <select
                  className="w-full rounded-xl border border-slate-300 px-3 py-2 text-sm"
                  value={form.product_type}
                  onChange={(e) =>
                    setForm((prev) => ({
                      ...prev,
                      product_type: e.target.value as "single" | "bundle",
                    }))
                  }
                >
                  <option value="single">single</option>
                  <option value="bundle">bundle</option>
                </select>
              </div>

              <Input
                label="Nama Produk"
                value={form.name}
                onChange={(e) => setForm((prev) => ({ ...prev, name: e.target.value }))}
              />

              <Input
                label="Harga Dasar"
                type="number"
                value={String(form.base_price ?? 0)}
                onChange={(e) =>
                  setForm((prev) => ({
                    ...prev,
                    base_price: Number(e.target.value || 0),
                  }))
                }
              />

              <Input
                label="SKU"
                value={form.sku ?? ""}
                onChange={(e) => setForm((prev) => ({ ...prev, sku: e.target.value }))}
              />

              <Input
                label="Code"
                value={form.code ?? ""}
                onChange={(e) => setForm((prev) => ({ ...prev, code: e.target.value }))}
              />

              <Input
                label="Slug"
                value={form.slug ?? ""}
                onChange={(e) => setForm((prev) => ({ ...prev, slug: e.target.value }))}
              />

              <Input
                label="Image URL"
                value={form.image_url ?? ""}
                onChange={(e) => setForm((prev) => ({ ...prev, image_url: e.target.value }))}
              />

              <div className="md:col-span-2">
                <label className="mb-2 block text-sm font-medium text-slate-700">Deskripsi</label>
                <textarea
                  className="min-h-[100px] w-full rounded-xl border border-slate-300 px-3 py-2 text-sm"
                  value={form.description ?? ""}
                  onChange={(e) =>
                    setForm((prev) => ({
                      ...prev,
                      description: e.target.value,
                    }))
                  }
                />
              </div>

              <div className="md:col-span-2 grid gap-2 md:grid-cols-2">
                <Checkbox
                  label="Produk aktif"
                  checked={Boolean(form.is_active)}
                  onChange={(e) => setForm((prev) => ({ ...prev, is_active: e.target.checked }))}
                />
                <Checkbox
                  label="Featured"
                  checked={Boolean(form.is_featured)}
                  onChange={(e) => setForm((prev) => ({ ...prev, is_featured: e.target.checked }))}
                />
                <Checkbox
                  label="Track recipe"
                  checked={Boolean(form.track_recipe)}
                  onChange={(e) => setForm((prev) => ({ ...prev, track_recipe: e.target.checked }))}
                />
                <Checkbox
                  label="Track stock direct"
                  checked={Boolean(form.track_stock_direct)}
                  onChange={(e) =>
                    setForm((prev) => ({
                      ...prev,
                      track_stock_direct: e.target.checked,
                    }))
                  }
                />
              </div>
            </div>

            <Card title="Harga per Outlet" description="Pengaturan harga penjualan per cabang.">
              <div className="space-y-4">
                {(form.prices ?? []).map((price, index) => (
                  <div key={index} className="rounded-2xl border border-slate-200 p-4">
                    <div className="grid gap-3 md:grid-cols-3">
                      <div>
                        <label className="mb-2 block text-sm font-medium text-slate-700">Outlet</label>
                        <select
                          className="w-full rounded-xl border border-slate-300 px-3 py-2 text-sm"
                          value={price.outlet_id || ""}
                          onChange={(e) =>
                            setForm((prev) => {
                              const next = [...(prev.prices ?? [])];
                              next[index] = {
                                ...next[index],
                                outlet_id: Number(e.target.value || 0),
                              };
                              return { ...prev, prices: next };
                            })
                          }
                        >
                          <option value="">Pilih outlet</option>
                          {outletOptions.map((outlet) => (
                            <option key={outlet.id} value={outlet.id}>
                              {outlet.name} ({outlet.code})
                            </option>
                          ))}
                        </select>
                      </div>

                      <Input
                        label="Price"
                        type="number"
                        value={String(price.price ?? 0)}
                        onChange={(e) =>
                          setForm((prev) => {
                            const next = [...(prev.prices ?? [])];
                            next[index] = { ...next[index], price: Number(e.target.value || 0) };
                            return { ...prev, prices: next };
                          })
                        }
                      />

                      <div className="flex items-end">
                        <Button
                          variant="danger"
                          onClick={() =>
                            setForm((prev) => ({
                              ...prev,
                              prices: (prev.prices ?? []).filter((_, i) => i !== index),
                            }))
                          }
                        >
                          Hapus Baris
                        </Button>
                      </div>

                      <Input
                        label="Dine In Price"
                        type="number"
                        value={price.dine_in_price === null ? "" : String(price.dine_in_price ?? "")}
                        onChange={(e) =>
                          setForm((prev) => {
                            const next = [...(prev.prices ?? [])];
                            next[index] = {
                              ...next[index],
                              dine_in_price: e.target.value === "" ? null : Number(e.target.value),
                            };
                            return { ...prev, prices: next };
                          })
                        }
                      />

                      <Input
                        label="Takeaway Price"
                        type="number"
                        value={
                          price.takeaway_price === null ? "" : String(price.takeaway_price ?? "")
                        }
                        onChange={(e) =>
                          setForm((prev) => {
                            const next = [...(prev.prices ?? [])];
                            next[index] = {
                              ...next[index],
                              takeaway_price: e.target.value === "" ? null : Number(e.target.value),
                            };
                            return { ...prev, prices: next };
                          })
                        }
                      />

                      <Input
                        label="Delivery Price"
                        type="number"
                        value={
                          price.delivery_price === null ? "" : String(price.delivery_price ?? "")
                        }
                        onChange={(e) =>
                          setForm((prev) => {
                            const next = [...(prev.prices ?? [])];
                            next[index] = {
                              ...next[index],
                              delivery_price: e.target.value === "" ? null : Number(e.target.value),
                            };
                            return { ...prev, prices: next };
                          })
                        }
                      />
                    </div>
                  </div>
                ))}

                <Button
                  variant="outline"
                  onClick={() =>
                    setForm((prev) => ({
                      ...prev,
                      prices: [...(prev.prices ?? []), createEmptyPrice()],
                    }))
                  }
                >
                  Tambah Harga Outlet
                </Button>
              </div>
            </Card>

            <Card title="Status Produk per Outlet" description="Aktifasi jual dan visibility per outlet.">
              <div className="space-y-4">
                {(form.outlet_statuses ?? []).map((status, index) => (
                  <div key={index} className="rounded-2xl border border-slate-200 p-4">
                    <div className="grid gap-3 md:grid-cols-3">
                      <div>
                        <label className="mb-2 block text-sm font-medium text-slate-700">Outlet</label>
                        <select
                          className="w-full rounded-xl border border-slate-300 px-3 py-2 text-sm"
                          value={status.outlet_id || ""}
                          onChange={(e) =>
                            setForm((prev) => {
                              const next = [...(prev.outlet_statuses ?? [])];
                              next[index] = {
                                ...next[index],
                                outlet_id: Number(e.target.value || 0),
                              };
                              return { ...prev, outlet_statuses: next };
                            })
                          }
                        >
                          <option value="">Pilih outlet</option>
                          {outletOptions.map((outlet) => (
                            <option key={outlet.id} value={outlet.id}>
                              {outlet.name} ({outlet.code})
                            </option>
                          ))}
                        </select>
                      </div>

                      <Input
                        label="Daily Limit"
                        type="number"
                        value={status.daily_limit === null ? "" : String(status.daily_limit ?? "")}
                        onChange={(e) =>
                          setForm((prev) => {
                            const next = [...(prev.outlet_statuses ?? [])];
                            next[index] = {
                              ...next[index],
                              daily_limit: e.target.value === "" ? null : Number(e.target.value),
                            };
                            return { ...prev, outlet_statuses: next };
                          })
                        }
                      />

                      <div className="flex items-end">
                        <Button
                          variant="danger"
                          onClick={() =>
                            setForm((prev) => ({
                              ...prev,
                              outlet_statuses: (prev.outlet_statuses ?? []).filter(
                                (_, i) => i !== index
                              ),
                            }))
                          }
                        >
                          Hapus Baris
                        </Button>
                      </div>

                      <div className="md:col-span-3">
                        <label className="mb-2 block text-sm font-medium text-slate-700">Notes</label>
                        <textarea
                          className="min-h-[70px] w-full rounded-xl border border-slate-300 px-3 py-2 text-sm"
                          value={status.notes ?? ""}
                          onChange={(e) =>
                            setForm((prev) => {
                              const next = [...(prev.outlet_statuses ?? [])];
                              next[index] = {
                                ...next[index],
                                notes: e.target.value,
                              };
                              return { ...prev, outlet_statuses: next };
                            })
                          }
                        />
                      </div>

                      <div className="md:col-span-3 grid gap-2 md:grid-cols-2">
                        <Checkbox
                          label="Is available"
                          checked={Boolean(status.is_available)}
                          onChange={(e) =>
                            setForm((prev) => {
                              const next = [...(prev.outlet_statuses ?? [])];
                              next[index] = {
                                ...next[index],
                                is_available: e.target.checked,
                              };
                              return { ...prev, outlet_statuses: next };
                            })
                          }
                        />
                        <Checkbox
                          label="Is hidden"
                          checked={Boolean(status.is_hidden)}
                          onChange={(e) =>
                            setForm((prev) => {
                              const next = [...(prev.outlet_statuses ?? [])];
                              next[index] = {
                                ...next[index],
                                is_hidden: e.target.checked,
                              };
                              return { ...prev, outlet_statuses: next };
                            })
                          }
                        />
                      </div>
                    </div>
                  </div>
                ))}

                <Button
                  variant="outline"
                  onClick={() =>
                    setForm((prev) => ({
                      ...prev,
                      outlet_statuses: [...(prev.outlet_statuses ?? []), createEmptyOutletStatus()],
                    }))
                  }
                >
                  Tambah Status Outlet
                </Button>
              </div>
            </Card>

            <Card title="Variant Groups" description="Contoh: potongan ayam, level pedas.">
              <div className="space-y-4">
                {(form.variant_groups ?? []).map((group, groupIndex) => (
                  <div key={groupIndex} className="rounded-2xl border border-slate-200 p-4">
                    <div className="grid gap-3 md:grid-cols-3">
                      <Input
                        label="Nama Group"
                        value={group.name}
                        onChange={(e) =>
                          setForm((prev) => {
                            const next = [...(prev.variant_groups ?? [])];
                            next[groupIndex] = { ...next[groupIndex], name: e.target.value };
                            return { ...prev, variant_groups: next };
                          })
                        }
                      />

                      <div>
                        <label className="mb-2 block text-sm font-medium text-slate-700">
                          Selection Type
                        </label>
                        <select
                          className="w-full rounded-xl border border-slate-300 px-3 py-2 text-sm"
                          value={group.selection_type}
                          onChange={(e) =>
                            setForm((prev) => {
                              const next = [...(prev.variant_groups ?? [])];
                              next[groupIndex] = {
                                ...next[groupIndex],
                                selection_type: e.target.value as "single" | "multiple",
                              };
                              return { ...prev, variant_groups: next };
                            })
                          }
                        >
                          <option value="single">single</option>
                          <option value="multiple">multiple</option>
                        </select>
                      </div>

                      <div className="flex items-end">
                        <Button
                          variant="danger"
                          onClick={() =>
                            setForm((prev) => ({
                              ...prev,
                              variant_groups: (prev.variant_groups ?? []).filter(
                                (_, i) => i !== groupIndex
                              ),
                            }))
                          }
                        >
                          Hapus Group
                        </Button>
                      </div>

                      <div className="md:col-span-3 grid gap-2 md:grid-cols-2">
                        <Checkbox
                          label="Required"
                          checked={Boolean(group.is_required)}
                          onChange={(e) =>
                            setForm((prev) => {
                              const next = [...(prev.variant_groups ?? [])];
                              next[groupIndex] = {
                                ...next[groupIndex],
                                is_required: e.target.checked,
                              };
                              return { ...prev, variant_groups: next };
                            })
                          }
                        />
                      </div>
                    </div>

                    <div className="mt-4 space-y-3">
                      {group.options.map((option, optionIndex) => (
                        <div
                          key={optionIndex}
                          className="grid gap-3 rounded-xl border border-slate-100 p-3 md:grid-cols-4"
                        >
                          <Input
                            label="Option Name"
                            value={option.name}
                            onChange={(e) =>
                              setForm((prev) => {
                                const groups = [...(prev.variant_groups ?? [])];
                                const options = [...groups[groupIndex].options];
                                options[optionIndex] = {
                                  ...options[optionIndex],
                                  name: e.target.value,
                                };
                                groups[groupIndex] = { ...groups[groupIndex], options };
                                return { ...prev, variant_groups: groups };
                              })
                            }
                          />

                          <Input
                            label="Price Adjustment"
                            type="number"
                            value={String(option.price_adjustment ?? 0)}
                            onChange={(e) =>
                              setForm((prev) => {
                                const groups = [...(prev.variant_groups ?? [])];
                                const options = [...groups[groupIndex].options];
                                options[optionIndex] = {
                                  ...options[optionIndex],
                                  price_adjustment: Number(e.target.value || 0),
                                };
                                groups[groupIndex] = { ...groups[groupIndex], options };
                                return { ...prev, variant_groups: groups };
                              })
                            }
                          />

                          <div className="flex items-end">
                            <Checkbox
                              label="Aktif"
                              checked={Boolean(option.is_active)}
                              onChange={(e) =>
                                setForm((prev) => {
                                  const groups = [...(prev.variant_groups ?? [])];
                                  const options = [...groups[groupIndex].options];
                                  options[optionIndex] = {
                                    ...options[optionIndex],
                                    is_active: e.target.checked,
                                  };
                                  groups[groupIndex] = { ...groups[groupIndex], options };
                                  return { ...prev, variant_groups: groups };
                                })
                              }
                            />
                          </div>

                          <div className="flex items-end">
                            <Button
                              variant="danger"
                              onClick={() =>
                                setForm((prev) => {
                                  const groups = [...(prev.variant_groups ?? [])];
                                  const options = groups[groupIndex].options.filter(
                                    (_, i) => i !== optionIndex
                                  );
                                  groups[groupIndex] = { ...groups[groupIndex], options };
                                  return { ...prev, variant_groups: groups };
                                })
                              }
                            >
                              Hapus Option
                            </Button>
                          </div>
                        </div>
                      ))}

                      <Button
                        variant="outline"
                        onClick={() =>
                          setForm((prev) => {
                            const next = [...(prev.variant_groups ?? [])];
                            next[groupIndex] = {
                              ...next[groupIndex],
                              options: [
                                ...next[groupIndex].options,
                                {
                                  name: "",
                                  price_adjustment: 0,
                                  sort_order: 0,
                                  is_active: true,
                                },
                              ],
                            };
                            return { ...prev, variant_groups: next };
                          })
                        }
                      >
                        Tambah Option Variant
                      </Button>
                    </div>
                  </div>
                ))}

                <Button
                  variant="outline"
                  onClick={() =>
                    setForm((prev) => ({
                      ...prev,
                      variant_groups: [...(prev.variant_groups ?? []), createEmptyVariantGroup()],
                    }))
                  }
                >
                  Tambah Variant Group
                </Button>
              </div>
            </Card>

            <Card title="Modifier Groups" description="Contoh: extra sambal, saus, nasi.">
              <div className="space-y-4">
                {(form.modifier_groups ?? []).map((group, groupIndex) => (
                  <div key={groupIndex} className="rounded-2xl border border-slate-200 p-4">
                    <div className="grid gap-3 md:grid-cols-4">
                      <Input
                        label="Nama Group"
                        value={group.name}
                        onChange={(e) =>
                          setForm((prev) => {
                            const next = [...(prev.modifier_groups ?? [])];
                            next[groupIndex] = { ...next[groupIndex], name: e.target.value };
                            return { ...prev, modifier_groups: next };
                          })
                        }
                      />

                      <Input
                        label="Min Select"
                        type="number"
                        value={String(group.min_select ?? 0)}
                        onChange={(e) =>
                          setForm((prev) => {
                            const next = [...(prev.modifier_groups ?? [])];
                            next[groupIndex] = {
                              ...next[groupIndex],
                              min_select: Number(e.target.value || 0),
                            };
                            return { ...prev, modifier_groups: next };
                          })
                        }
                      />

                      <Input
                        label="Max Select"
                        type="number"
                        value={String(group.max_select ?? 1)}
                        onChange={(e) =>
                          setForm((prev) => {
                            const next = [...(prev.modifier_groups ?? [])];
                            next[groupIndex] = {
                              ...next[groupIndex],
                              max_select: Number(e.target.value || 1),
                            };
                            return { ...prev, modifier_groups: next };
                          })
                        }
                      />

                      <div className="flex items-end">
                        <Button
                          variant="danger"
                          onClick={() =>
                            setForm((prev) => ({
                              ...prev,
                              modifier_groups: (prev.modifier_groups ?? []).filter(
                                (_, i) => i !== groupIndex
                              ),
                            }))
                          }
                        >
                          Hapus Group
                        </Button>
                      </div>

                      <div className="md:col-span-4">
                        <Checkbox
                          label="Required"
                          checked={Boolean(group.is_required)}
                          onChange={(e) =>
                            setForm((prev) => {
                              const next = [...(prev.modifier_groups ?? [])];
                              next[groupIndex] = {
                                ...next[groupIndex],
                                is_required: e.target.checked,
                              };
                              return { ...prev, modifier_groups: next };
                            })
                          }
                        />
                      </div>
                    </div>

                    <div className="mt-4 space-y-3">
                      {group.options.map((option, optionIndex) => (
                        <div
                          key={optionIndex}
                          className="grid gap-3 rounded-xl border border-slate-100 p-3 md:grid-cols-4"
                        >
                          <Input
                            label="Option Name"
                            value={option.name}
                            onChange={(e) =>
                              setForm((prev) => {
                                const groups = [...(prev.modifier_groups ?? [])];
                                const options = [...groups[groupIndex].options];
                                options[optionIndex] = {
                                  ...options[optionIndex],
                                  name: e.target.value,
                                };
                                groups[groupIndex] = { ...groups[groupIndex], options };
                                return { ...prev, modifier_groups: groups };
                              })
                            }
                          />

                          <Input
                            label="Price"
                            type="number"
                            value={String(option.price ?? 0)}
                            onChange={(e) =>
                              setForm((prev) => {
                                const groups = [...(prev.modifier_groups ?? [])];
                                const options = [...groups[groupIndex].options];
                                options[optionIndex] = {
                                  ...options[optionIndex],
                                  price: Number(e.target.value || 0),
                                };
                                groups[groupIndex] = { ...groups[groupIndex], options };
                                return { ...prev, modifier_groups: groups };
                              })
                            }
                          />

                          <div className="flex items-end">
                            <Checkbox
                              label="Aktif"
                              checked={Boolean(option.is_active)}
                              onChange={(e) =>
                                setForm((prev) => {
                                  const groups = [...(prev.modifier_groups ?? [])];
                                  const options = [...groups[groupIndex].options];
                                  options[optionIndex] = {
                                    ...options[optionIndex],
                                    is_active: e.target.checked,
                                  };
                                  groups[groupIndex] = { ...groups[groupIndex], options };
                                  return { ...prev, modifier_groups: groups };
                                })
                              }
                            />
                          </div>

                          <div className="flex items-end">
                            <Button
                              variant="danger"
                              onClick={() =>
                                setForm((prev) => {
                                  const groups = [...(prev.modifier_groups ?? [])];
                                  const options = groups[groupIndex].options.filter(
                                    (_, i) => i !== optionIndex
                                  );
                                  groups[groupIndex] = { ...groups[groupIndex], options };
                                  return { ...prev, modifier_groups: groups };
                                })
                              }
                            >
                              Hapus Option
                            </Button>
                          </div>
                        </div>
                      ))}

                      <Button
                        variant="outline"
                        onClick={() =>
                          setForm((prev) => {
                            const next = [...(prev.modifier_groups ?? [])];
                            next[groupIndex] = {
                              ...next[groupIndex],
                              options: [
                                ...next[groupIndex].options,
                                {
                                  name: "",
                                  price: 0,
                                  sort_order: 0,
                                  is_active: true,
                                },
                              ],
                            };
                            return { ...prev, modifier_groups: next };
                          })
                        }
                      >
                        Tambah Option Modifier
                      </Button>
                    </div>
                  </div>
                ))}

                <Button
                  variant="outline"
                  onClick={() =>
                    setForm((prev) => ({
                      ...prev,
                      modifier_groups: [...(prev.modifier_groups ?? []), createEmptyModifierGroup()],
                    }))
                  }
                >
                  Tambah Modifier Group
                </Button>
              </div>
            </Card>

            {form.product_type === "bundle" ? (
              <Card title="Bundle Items" description="Komponen produk untuk paket/combo.">
                <div className="space-y-4">
                  {(form.bundle_items ?? []).map((item, index) => (
                    <div key={index} className="grid gap-3 rounded-2xl border border-slate-200 p-4 md:grid-cols-3">
                      <div>
                        <label className="mb-2 block text-sm font-medium text-slate-700">Bundled Product</label>
                        <select
                          className="w-full rounded-xl border border-slate-300 px-3 py-2 text-sm"
                          value={item.bundled_product_id || ""}
                          onChange={(e) =>
                            setForm((prev) => {
                              const next = [...(prev.bundle_items ?? [])];
                              next[index] = {
                                ...next[index],
                                bundled_product_id: Number(e.target.value || 0),
                              };
                              return { ...prev, bundle_items: next };
                            })
                          }
                        >
                          <option value="">Pilih produk</option>
                          {bundleCandidateProducts.map((product) => (
                            <option key={product.id} value={product.id}>
                              {product.name}
                            </option>
                          ))}
                        </select>
                      </div>

                      <Input
                        label="Qty"
                        type="number"
                        value={String(item.qty ?? 1)}
                        onChange={(e) =>
                          setForm((prev) => {
                            const next = [...(prev.bundle_items ?? [])];
                            next[index] = { ...next[index], qty: Number(e.target.value || 1) };
                            return { ...prev, bundle_items: next };
                          })
                        }
                      />

                      <div className="flex items-end">
                        <Button
                          variant="danger"
                          onClick={() =>
                            setForm((prev) => ({
                              ...prev,
                              bundle_items: (prev.bundle_items ?? []).filter((_, i) => i !== index),
                            }))
                          }
                        >
                          Hapus Item
                        </Button>
                      </div>
                    </div>
                  ))}

                  <Button
                    variant="outline"
                    onClick={() =>
                      setForm((prev) => ({
                        ...prev,
                        bundle_items: [...(prev.bundle_items ?? []), createEmptyBundleItem()],
                      }))
                    }
                  >
                    Tambah Bundle Item
                  </Button>
                </div>
              </Card>
            ) : null}
          </div>
        </Modal>
      </div>
    </PermissionWrapper>
  );
}
```
</details>

<a id="file-srcmodulesadminpagesrolespagetsx"></a>
### src\modules\admin\pages\RolesPage.tsx
- SHA: `d371390e27ee`  
- Ukuran: 7 KB
<details><summary><strong>Lihat Kode Lengkap</strong></summary>

```tsx
import { useEffect, useState } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { masterDataService, type RolePayload } from "@/modules/admin/services/master-data.service";
import { PageHeader } from "@/components/navigation/PageHeader";
import { PermissionWrapper } from "@/components/navigation/PermissionWrapper";
import { PageErrorState } from "@/components/feedback/PageErrorState";
import { PageEmptyState } from "@/components/feedback/PageEmptyState";
import { Badge, Button, Card, Checkbox, Input, Modal } from "@/components/ui";
import { parseApiError } from "@/services/api/error-parser";
import { useToast } from "@/hooks/useToast";
import type { Role } from "@/types/role";

export default function RolesPage() {
  const toast = useToast();
  const queryClient = useQueryClient();

  const [open, setOpen] = useState(false);
  const [editing, setEditing] = useState<Role | null>(null);
  const [name, setName] = useState("");
  const [selectedPermissions, setSelectedPermissions] = useState<string[]>([]);

  const rolesQuery = useQuery({
    queryKey: ["admin-roles"],
    queryFn: () => masterDataService.getRoles({ per_page: 100 }),
  });

  const permissionsQuery = useQuery({
    queryKey: ["admin-permissions-for-role-page"],
    queryFn: () => masterDataService.getPermissions({ per_page: 200 }),
  });

  const saveMutation = useMutation({
    mutationFn: (payload: RolePayload) =>
      editing
        ? masterDataService.updateRole(editing.id, payload)
        : masterDataService.createRole(payload),
    onSuccess: (response) => {
      toast.success(response.message);
      setOpen(false);
      setEditing(null);
      setName("");
      setSelectedPermissions([]);
      void queryClient.invalidateQueries({ queryKey: ["admin-roles"] });
    },
    onError: (error) => toast.error("Gagal menyimpan role", parseApiError(error)),
  });

  const deleteMutation = useMutation({
    mutationFn: (id: number) => masterDataService.deleteRole(id),
    onSuccess: (response) => {
      toast.success(response.message);
      void queryClient.invalidateQueries({ queryKey: ["admin-roles"] });
    },
    onError: (error) => toast.error("Gagal menghapus role", parseApiError(error)),
  });

  useEffect(() => {
    if (!open) {
      setEditing(null);
      setName("");
      setSelectedPermissions([]);
    }
  }, [open]);

  const openCreate = () => setOpen(true);

  const openEdit = (role: Role) => {
    setEditing(role);
    setName(role.name);
    setSelectedPermissions(role.permissions ?? []);
    setOpen(true);
  };

  const roles = rolesQuery.data?.items ?? [];
  const permissions = permissionsQuery.data?.items ?? [];

  return (
    <PermissionWrapper permission="roles.view">
      <div className="space-y-4">
        <PageHeader
          title="Roles"
          description="Kelola role dan permission matrix sederhana."
          actions={<Button onClick={openCreate}>Tambah Role</Button>}
        />

        {rolesQuery.isLoading ? (
          <Card>Memuat data role...</Card>
        ) : rolesQuery.isError ? (
          <PageErrorState onRetry={() => void rolesQuery.refetch()} />
        ) : !roles.length ? (
          <PageEmptyState title="Belum ada role" />
        ) : (
          <Card>
            <div className="space-y-4">
              {roles.map((role) => (
                <div
                  key={role.id}
                  className="rounded-2xl border border-slate-200 p-4"
                >
                  <div className="flex flex-col gap-3 lg:flex-row lg:items-start lg:justify-between">
                    <div>
                      <div className="text-base font-semibold text-slate-900">{role.name}</div>
                      <div className="mt-2 flex flex-wrap gap-2">
                        {(role.permissions ?? []).map((permission) => (
                          <Badge key={permission} variant="info">
                            {permission}
                          </Badge>
                        ))}
                        {!role.permissions?.length ? (
                          <span className="text-sm text-slate-500">Belum ada permission.</span>
                        ) : null}
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <Button variant="outline" onClick={() => openEdit(role)}>
                        Edit
                      </Button>
                      <Button
                        variant="danger"
                        loading={deleteMutation.isPending}
                        onClick={() => deleteMutation.mutate(role.id)}
                      >
                        Hapus
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        )}

        <Modal
          open={open}
          title={editing ? "Edit Role" : "Tambah Role"}
          description="Atur nama role dan checklist permission."
          onClose={() => setOpen(false)}
          footer={
            <>
              <Button variant="outline" onClick={() => setOpen(false)}>
                Batal
              </Button>
              <Button
                loading={saveMutation.isPending}
                onClick={() =>
                  saveMutation.mutate({
                    name,
                    permissions: selectedPermissions,
                  })
                }
              >
                Simpan
              </Button>
            </>
          }
        >
          <div className="space-y-4">
            <Input label="Nama Role" value={name} onChange={(e) => setName(e.target.value)} />

            <div>
              <div className="mb-2 text-sm font-medium text-slate-700">Permissions</div>
              <div className="grid gap-2 md:grid-cols-2">
                {permissions.map((permission) => {
                  const checked = selectedPermissions.includes(permission.name);

                  return (
                    <Checkbox
                      key={permission.id}
                      label={permission.name}
                      checked={checked}
                      onChange={(e) => {
                        setSelectedPermissions((prev) =>
                          e.target.checked
                            ? [...prev, permission.name]
                            : prev.filter((item) => item !== permission.name)
                        );
                      }}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </Modal>
      </div>
    </PermissionWrapper>
  );
}
```
</details>

<a id="file-srcmodulesadminpagessystemsettingspagetsx"></a>
### src\modules\admin\pages\SystemSettingsPage.tsx
- SHA: `cfb601943205`  
- Ukuran: 4 KB
<details><summary><strong>Lihat Kode Lengkap</strong></summary>

```tsx
import { useMemo, useState } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  masterDataService,
  type SystemSettingPayloadItem,
} from "@/modules/admin/services/master-data.service";
import { PageHeader } from "@/components/navigation/PageHeader";
import { PermissionWrapper } from "@/components/navigation/PermissionWrapper";
import { PageErrorState } from "@/components/feedback/PageErrorState";
import { PageEmptyState } from "@/components/feedback/PageEmptyState";
import { Badge, Button, Card, Input } from "@/components/ui";
import { parseApiError } from "@/services/api/error-parser";
import { useToast } from "@/hooks/useToast";
import type { SystemSetting } from "@/types/settings";

export default function SystemSettingsPage() {
  const toast = useToast();
  const queryClient = useQueryClient();
  const [search, setSearch] = useState("");
  const [drafts, setDrafts] = useState<Record<number, string>>({});

  const settingsQuery = useQuery({
    queryKey: ["admin-system-settings", search],
    queryFn: () => masterDataService.getSystemSettings({ per_page: 100, search }),
  });

  const saveMutation = useMutation({
    mutationFn: (payload: SystemSettingPayloadItem[]) => masterDataService.upsertSystemSettings(payload),
    onSuccess: (response) => {
      toast.success(response.message);
      void queryClient.invalidateQueries({ queryKey: ["admin-system-settings"] });
    },
    onError: (error) => toast.error("Gagal menyimpan system settings", parseApiError(error)),
  });

  const settings = settingsQuery.data?.items ?? [];

  const changedItems = useMemo(() => {
    return settings
      .filter((item) => Object.prototype.hasOwnProperty.call(drafts, item.id))
      .map((item): SystemSettingPayloadItem => ({
        key: item.key,
        value: drafts[item.id] ?? "",
        type: item.type,
      }));
  }, [drafts, settings]);

  const updateDraft = (item: SystemSetting, value: string) => {
    setDrafts((prev) => ({ ...prev, [item.id]: value }));
  };

  return (
    <PermissionWrapper permission="system_settings.view">
      <div className="space-y-4">
        <PageHeader
          title="System Settings"
          description="Kelola pengaturan sistem berbasis key-value."
          actions={
            <Button
              loading={saveMutation.isPending}
              disabled={!changedItems.length}
              onClick={() => saveMutation.mutate(changedItems)}
            >
              Simpan Perubahan
            </Button>
          }
        />

        <Card>
          <Input
            placeholder="Cari key setting..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </Card>

        {settingsQuery.isLoading ? (
          <Card>Memuat system settings...</Card>
        ) : settingsQuery.isError ? (
          <PageErrorState onRetry={() => void settingsQuery.refetch()} />
        ) : !settings.length ? (
          <PageEmptyState title="Belum ada system settings" />
        ) : (
          <div className="space-y-3">
            {settings.map((item) => (
              <Card key={item.id}>
                <div className="flex flex-col gap-3 lg:flex-row lg:items-start lg:justify-between">
                  <div className="min-w-0">
                    <div className="font-medium text-slate-900">{item.key}</div>
                    <div className="mt-1 flex items-center gap-2">
                      <Badge variant="info">{item.type}</Badge>
                    </div>
                  </div>

                  <div className="w-full max-w-xl">
                    <Input
                      value={drafts[item.id] ?? item.value ?? ""}
                      onChange={(e) => updateDraft(item, e.target.value)}
                    />
                  </div>
                </div>
              </Card>
            ))}
          </div>
        )}
      </div>
    </PermissionWrapper>
  );
}
```
</details>

<a id="file-srcmodulesadminpagesuserspagetsx"></a>
### src\modules\admin\pages\UsersPage.tsx
- SHA: `bab9dc4d7dc9`  
- Ukuran: 15 KB
<details><summary><strong>Lihat Kode Lengkap</strong></summary>

```tsx
import { useMemo, useState } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { masterDataService, type UserPayload } from "@/modules/admin/services/master-data.service";
import { PageHeader } from "@/components/navigation/PageHeader";
import { PermissionWrapper } from "@/components/navigation/PermissionWrapper";
import { PageErrorState } from "@/components/feedback/PageErrorState";
import { PageEmptyState } from "@/components/feedback/PageEmptyState";
import { Badge, Button, Card, Checkbox, Input, Modal } from "@/components/ui";
import { parseApiError } from "@/services/api/error-parser";
import { useToast } from "@/hooks/useToast";
import type { User } from "@/types/user";

const initialForm: UserPayload = {
  name: "",
  email: "",
  phone: "",
  username: "",
  password: "",
  password_confirmation: "",
  is_active: true,
  user_type: "staff",
  roles: [],
  outlet_ids: [],
  default_outlet_id: null,
};

export default function UsersPage() {
  const toast = useToast();
  const queryClient = useQueryClient();

  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [open, setOpen] = useState(false);
  const [editing, setEditing] = useState<User | null>(null);
  const [form, setForm] = useState<UserPayload>(initialForm);

  const usersQuery = useQuery({
    queryKey: ["admin-users", page, search],
    queryFn: () => masterDataService.getUsers({ page, per_page: 10, search }),
  });

  const rolesQuery = useQuery({
    queryKey: ["admin-role-options"],
    queryFn: () => masterDataService.getRoles({ per_page: 100 }),
  });

  const outletsQuery = useQuery({
    queryKey: ["admin-outlet-options"],
    queryFn: () => masterDataService.getOutlets({ per_page: 100 }),
  });

  const saveMutation = useMutation({
    mutationFn: (payload: UserPayload) =>
      editing
        ? masterDataService.updateUser(editing.id, payload)
        : masterDataService.createUser(payload),
    onSuccess: (response) => {
      toast.success(response.message);
      setOpen(false);
      setEditing(null);
      setForm(initialForm);
      void queryClient.invalidateQueries({ queryKey: ["admin-users"] });
    },
    onError: (error) => toast.error("Gagal menyimpan user", parseApiError(error)),
  });

  const deleteMutation = useMutation({
    mutationFn: (id: number) => masterDataService.deactivateUser(id),
    onSuccess: (response) => {
      toast.success(response.message);
      void queryClient.invalidateQueries({ queryKey: ["admin-users"] });
    },
    onError: (error) => toast.error("Gagal menonaktifkan user", parseApiError(error)),
  });

  const roleOptions = rolesQuery.data?.items ?? [];
  const outletOptions = outletsQuery.data?.items ?? [];
  const users = usersQuery.data?.items ?? [];
  const meta = usersQuery.data?.meta;

  const totalPages = Number(meta?.last_page ?? 1);

  const openCreate = () => {
    setEditing(null);
    setForm(initialForm);
    setOpen(true);
  };

  const openEdit = (user: User) => {
    setEditing(user);
    setForm({
      name: user.name,
      email: user.email ?? "",
      phone: user.phone ?? "",
      username: user.username ?? "",
      password: "",
      password_confirmation: "",
      is_active: user.is_active,
      user_type: user.user_type ?? "staff",
      roles: user.roles ?? [],
      outlet_ids: user.outlet_accesses?.map((item) => item.outlet_id) ?? [],
      default_outlet_id:
        user.outlet_accesses?.find((item) => item.is_default)?.outlet_id ?? null,
    });
    setOpen(true);
  };

  const selectedDefaultOutletName = useMemo(() => {
    return outletOptions.find((item) => item.id === form.default_outlet_id)?.name ?? "-";
  }, [form.default_outlet_id, outletOptions]);

  return (
    <PermissionWrapper permission="users.view">
      <div className="space-y-4">
        <PageHeader
          title="Users"
          description="Kelola akun user, role, dan akses outlet."
          actions={
            <Button onClick={openCreate} disabled={!roleOptions.length}>
              Tambah User
            </Button>
          }
        />

        <Card>
          <div className="grid gap-3 md:grid-cols-[1fr_180px]">
            <Input
              placeholder="Cari nama, email, phone, atau username..."
              value={search}
              onChange={(e) => {
                setPage(1);
                setSearch(e.target.value);
              }}
            />
            <div className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-600">
              Total: {meta?.total ?? 0}
            </div>
          </div>
        </Card>

        {usersQuery.isLoading ? (
          <Card>Memuat data user...</Card>
        ) : usersQuery.isError ? (
          <PageErrorState onRetry={() => void usersQuery.refetch()} />
        ) : !users.length ? (
          <PageEmptyState
            title="Belum ada user"
            description="Data user belum tersedia atau tidak cocok dengan filter."
          />
        ) : (
          <Card>
            <div className="overflow-x-auto">
              <table className="min-w-full text-sm">
                <thead>
                  <tr className="border-b border-slate-200 text-left text-slate-500">
                    <th className="px-3 py-3">Nama</th>
                    <th className="px-3 py-3">Login</th>
                    <th className="px-3 py-3">Role</th>
                    <th className="px-3 py-3">Outlet</th>
                    <th className="px-3 py-3">Status</th>
                    <th className="px-3 py-3 text-right">Aksi</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((user) => (
                    <tr key={user.id} className="border-b border-slate-100">
                      <td className="px-3 py-3">
                        <div className="font-medium text-slate-900">{user.name}</div>
                        <div className="text-xs text-slate-500">{user.user_type ?? "-"}</div>
                      </td>
                      <td className="px-3 py-3 text-slate-600">
                        {user.email ?? user.username ?? user.phone ?? "-"}
                      </td>
                      <td className="px-3 py-3">
                        <div className="flex flex-wrap gap-2">
                          {(user.roles ?? []).map((role) => (
                            <Badge key={role} variant="info">
                              {role}
                            </Badge>
                          ))}
                        </div>
                      </td>
                      <td className="px-3 py-3 text-slate-600">
                        {(user.outlet_accesses ?? []).length
                          ? user.outlet_accesses
                              ?.map((item) =>
                                item.is_default
                                  ? `${item.outlet_name ?? item.outlet_code} (default)`
                                  : item.outlet_name ?? item.outlet_code
                              )
                              .join(", ")
                          : "-"}
                      </td>
                      <td className="px-3 py-3">
                        <Badge variant={user.is_active ? "success" : "danger"}>
                          {user.is_active ? "Aktif" : "Nonaktif"}
                        </Badge>
                      </td>
                      <td className="px-3 py-3">
                        <div className="flex justify-end gap-2">
                          <Button variant="outline" onClick={() => openEdit(user)}>
                            Edit
                          </Button>
                          <Button
                            variant="danger"
                            loading={deleteMutation.isPending}
                            onClick={() => deleteMutation.mutate(user.id)}
                          >
                            Nonaktifkan
                          </Button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-4 flex items-center justify-between">
              <div className="text-sm text-slate-500">
                Halaman {meta?.current_page ?? 1} dari {totalPages}
              </div>
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  disabled={(meta?.current_page ?? 1) <= 1}
                  onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
                >
                  Sebelumnya
                </Button>
                <Button
                  variant="outline"
                  disabled={(meta?.current_page ?? 1) >= totalPages}
                  onClick={() => setPage((prev) => prev + 1)}
                >
                  Berikutnya
                </Button>
              </div>
            </div>
          </Card>
        )}

        <Modal
          open={open}
          title={editing ? "Edit User" : "Tambah User"}
          description="Isi data user, role, dan outlet access."
          onClose={() => setOpen(false)}
          footer={
            <>
              <Button variant="outline" onClick={() => setOpen(false)}>
                Batal
              </Button>
              <Button loading={saveMutation.isPending} onClick={() => saveMutation.mutate(form)}>
                Simpan
              </Button>
            </>
          }
        >
          <div className="grid gap-4 md:grid-cols-2">
            <Input
              label="Nama"
              value={form.name}
              onChange={(e) => setForm((prev) => ({ ...prev, name: e.target.value }))}
            />
            <Input
              label="Email"
              value={form.email ?? ""}
              onChange={(e) => setForm((prev) => ({ ...prev, email: e.target.value }))}
            />
            <Input
              label="Phone"
              value={form.phone ?? ""}
              onChange={(e) => setForm((prev) => ({ ...prev, phone: e.target.value }))}
            />
            <Input
              label="Username"
              value={form.username ?? ""}
              onChange={(e) => setForm((prev) => ({ ...prev, username: e.target.value }))}
            />

            <div className="md:col-span-2 grid gap-4 md:grid-cols-2">
              <Input
                label={editing ? "Password baru (opsional)" : "Password"}
                type="password"
                value={form.password ?? ""}
                onChange={(e) => setForm((prev) => ({ ...prev, password: e.target.value }))}
              />
              <Input
                label={editing ? "Konfirmasi password baru" : "Konfirmasi password"}
                type="password"
                value={form.password_confirmation ?? ""}
                onChange={(e) =>
                  setForm((prev) => ({ ...prev, password_confirmation: e.target.value }))
                }
              />
            </div>

            <div className="md:col-span-2">
              <label className="mb-2 block text-sm font-medium text-slate-700">Roles</label>
              <div className="grid gap-2 md:grid-cols-3">
                {roleOptions.map((role) => {
                  const checked = form.roles.includes(role.name);

                  return (
                    <Checkbox
                      key={role.id}
                      label={role.name}
                      checked={checked}
                      onChange={(e) => {
                        const nextRoles = e.target.checked
                          ? [...form.roles, role.name]
                          : form.roles.filter((item) => item !== role.name);

                        setForm((prev) => ({ ...prev, roles: nextRoles }));
                      }}
                    />
                  );
                })}
              </div>
            </div>

            <div className="md:col-span-2">
              <label className="mb-2 block text-sm font-medium text-slate-700">Outlet Access</label>
              <div className="grid gap-2 md:grid-cols-2">
                {outletOptions.map((outlet) => {
                  const checked = form.outlet_ids?.includes(outlet.id) ?? false;

                  return (
                    <Checkbox
                      key={outlet.id}
                      label={`${outlet.name} (${outlet.code})`}
                      checked={checked}
                      onChange={(e) => {
                        const current = form.outlet_ids ?? [];
                        const next = e.target.checked
                          ? [...current, outlet.id]
                          : current.filter((item) => item !== outlet.id);

                        setForm((prev) => ({
                          ...prev,
                          outlet_ids: next,
                          default_outlet_id:
                            prev.default_outlet_id && !next.includes(prev.default_outlet_id)
                              ? null
                              : prev.default_outlet_id,
                        }));
                      }}
                    />
                  );
                })}
              </div>
            </div>

            <div className="md:col-span-2">
              <label className="mb-2 block text-sm font-medium text-slate-700">
                Default Outlet
              </label>
              <select
                value={form.default_outlet_id ?? ""}
                onChange={(e) =>
                  setForm((prev) => ({
                    ...prev,
                    default_outlet_id: e.target.value ? Number(e.target.value) : null,
                  }))
                }
                className="w-full rounded-xl border border-slate-300 px-3 py-2 text-sm"
              >
                <option value="">Pilih default outlet</option>
                {(form.outlet_ids ?? []).map((outletId) => {
                  const outlet = outletOptions.find((item) => item.id === outletId);
                  if (!outlet) return null;

                  return (
                    <option key={outlet.id} value={outlet.id}>
                      {outlet.name} ({outlet.code})
                    </option>
                  );
                })}
              </select>
              <p className="mt-1 text-xs text-slate-500">
                Terpilih: {selectedDefaultOutletName}
              </p>
            </div>

            <div className="md:col-span-2">
              <Checkbox
                label="User aktif"
                checked={Boolean(form.is_active)}
                onChange={(e) => setForm((prev) => ({ ...prev, is_active: e.target.checked }))}
              />
            </div>
          </div>
        </Modal>
      </div>
    </PermissionWrapper>
  );
}
```
</details>

<a id="file-srcmodulesadminservicescatalogservicets"></a>
### src\modules\admin\services\catalog.service.ts
- SHA: `14e6905c0e73`  
- Ukuran: 5 KB
<details><summary><strong>Lihat Kode Lengkap</strong></summary>

```ts
import { apiClient } from "@/services/api/api-client";
import { endpoints } from "@/services/api/endpoints";
import type { ApiMeta, ApiResponse } from "@/types/api";
import type {
  Product,
  ProductBundleItem,
  ProductCategory,
  ProductModifierGroup,
  ProductOutletStatus,
  ProductPrice,
  ProductVariantGroup,
} from "@/types/product";

export interface PaginationQuery {
  page?: number;
  per_page?: number;
  search?: string;
  is_active?: boolean | "";
}

export interface ProductCategoryQuery extends PaginationQuery {}

export interface ProductQuery extends PaginationQuery {
  product_category_id?: number | "";
  product_type?: "single" | "bundle" | "";
}

export interface PaginatedResult<T> {
  items: T[];
  meta: ApiMeta | null;
  message: string;
}

export interface ProductCategoryPayload {
  name: string;
  slug?: string | null;
  sort_order?: number;
  is_active?: boolean;
}

export interface ProductPricePayload {
  outlet_id: number;
  price: number;
  dine_in_price?: number | null;
  takeaway_price?: number | null;
  delivery_price?: number | null;
  starts_at?: string | null;
  ends_at?: string | null;
  is_active?: boolean;
}

export interface ProductOutletStatusPayload {
  outlet_id: number;
  is_available?: boolean;
  is_hidden?: boolean;
  daily_limit?: number | null;
  notes?: string | null;
}

export interface ProductVariantOptionPayload {
  name: string;
  price_adjustment?: number;
  sort_order?: number;
  is_active?: boolean;
}

export interface ProductVariantGroupPayload {
  name: string;
  selection_type: "single" | "multiple";
  is_required?: boolean;
  sort_order?: number;
  options: ProductVariantOptionPayload[];
}

export interface ProductModifierOptionPayload {
  name: string;
  price?: number;
  is_active?: boolean;
  sort_order?: number;
}

export interface ProductModifierGroupPayload {
  name: string;
  min_select?: number;
  max_select?: number;
  is_required?: boolean;
  sort_order?: number;
  options: ProductModifierOptionPayload[];
}

export interface ProductBundleItemPayload {
  bundled_product_id: number;
  qty: number;
}

export interface ProductPayload {
  product_category_id: number;
  sku?: string | null;
  code?: string | null;
  name: string;
  slug?: string | null;
  description?: string | null;
  image_url?: string | null;
  base_price: number;
  product_type: "single" | "bundle";
  is_active?: boolean;
  is_featured?: boolean;
  track_recipe?: boolean;
  track_stock_direct?: boolean;
  prices?: ProductPricePayload[];
  outlet_statuses?: ProductOutletStatusPayload[];
  variant_groups?: ProductVariantGroupPayload[];
  modifier_groups?: ProductModifierGroupPayload[];
  bundle_items?: ProductBundleItemPayload[];
}

const unwrapPaginated = <T>(response: ApiResponse<T[]>): PaginatedResult<T> => ({
  items: response.data,
  meta: response.meta ?? null,
  message: response.message,
});

export const catalogService = {
  async getProductCategories(params: ProductCategoryQuery = {}) {
    const response = await apiClient.get<ApiResponse<ProductCategory[]>>(
      endpoints.productCategories.index,
      { params }
    );

    return unwrapPaginated(response.data);
  },

  async createProductCategory(payload: ProductCategoryPayload) {
    const response = await apiClient.post<ApiResponse<ProductCategory>>(
      endpoints.productCategories.store,
      payload
    );

    return response.data;
  },

  async updateProductCategory(id: number, payload: ProductCategoryPayload) {
    const response = await apiClient.put<ApiResponse<ProductCategory>>(
      endpoints.productCategories.update(id),
      payload
    );

    return response.data;
  },

  async deleteProductCategory(id: number) {
    const response = await apiClient.delete<ApiResponse<null>>(
      endpoints.productCategories.destroy(id)
    );

    return response.data;
  },

  async getProducts(params: ProductQuery = {}) {
    const response = await apiClient.get<ApiResponse<Product[]>>(endpoints.products.index, {
      params,
    });

    return unwrapPaginated(response.data);
  },

  async createProduct(payload: ProductPayload) {
    const response = await apiClient.post<ApiResponse<Product>>(endpoints.products.store, payload);
    return response.data;
  },

  async updateProduct(id: number, payload: ProductPayload) {
    const response = await apiClient.put<ApiResponse<Product>>(endpoints.products.update(id), payload);
    return response.data;
  },

  async deleteProduct(id: number) {
    const response = await apiClient.delete<ApiResponse<null>>(endpoints.products.destroy(id));
    return response.data;
  },
};

export type {
  Product,
  ProductBundleItem,
  ProductCategory,
  ProductModifierGroup,
  ProductOutletStatus,
  ProductPrice,
  ProductVariantGroup,
};
```
</details>

<a id="file-srcmodulesadminservicesmaster-dataservicets"></a>
### src\modules\admin\services\master-data.service.ts
- SHA: `710c66c0e62c`  
- Ukuran: 6 KB
<details><summary><strong>Lihat Kode Lengkap</strong></summary>

```ts
import { apiClient } from "@/services/api/api-client";
import { endpoints } from "@/services/api/endpoints";
import type { ApiMeta, ApiResponse } from "@/types/api";
import type { User } from "@/types/user";
import type { Role } from "@/types/role";
import type { Permission } from "@/types/permission";
import type { Outlet, OutletSetting } from "@/types/outlet";
import type { SystemSetting } from "@/types/settings";

export interface PaginationQuery {
  page?: number;
  per_page?: number;
  search?: string;
  is_active?: boolean | "";
}

export interface PaginatedResult<T> {
  items: T[];
  meta: ApiMeta | null;
  message: string;
}

export interface UserPayload {
  name: string;
  email?: string | null;
  phone?: string | null;
  username?: string | null;
  password?: string;
  password_confirmation?: string;
  is_active?: boolean;
  user_type?: "superadmin" | "staff" | "owner_viewer" | null;
  roles: string[];
  outlet_ids?: number[];
  default_outlet_id?: number | null;
}

export interface RolePayload {
  name: string;
  permissions?: string[];
}

export interface PermissionPayload {
  name: string;
}

export interface OutletPayload {
  code: string;
  name: string;
  phone?: string | null;
  email?: string | null;
  address?: string | null;
  city?: string | null;
  province?: string | null;
  postal_code?: string | null;
  latitude?: string | null;
  longitude?: string | null;
  opening_time?: string | null;
  closing_time?: string | null;
  is_active?: boolean;
}

export interface OutletSettingPayload {
  tax_percent?: number;
  service_charge_percent?: number;
  currency_code?: string;
  receipt_footer?: string | null;
  invoice_prefix?: string | null;
  order_prefix?: string | null;
  timezone?: string;
  allow_negative_stock?: boolean;
  low_stock_notification_enabled?: boolean;
}

export interface SystemSettingPayloadItem {
  key: string;
  value: string | number | boolean | Record<string, unknown> | null;
  type: "string" | "number" | "boolean" | "json";
}

const unwrapPaginated = <T>(response: ApiResponse<T[]>): PaginatedResult<T> => ({
  items: response.data,
  meta: response.meta ?? null,
  message: response.message,
});

export const masterDataService = {
  async getUsers(params: PaginationQuery = {}) {
    const response = await apiClient.get<ApiResponse<User[]>>(endpoints.users.index, { params });
    return unwrapPaginated(response.data);
  },

  async createUser(payload: UserPayload) {
    const response = await apiClient.post<ApiResponse<User>>(endpoints.users.store, payload);
    return response.data;
  },

  async updateUser(id: number, payload: UserPayload) {
    const response = await apiClient.put<ApiResponse<User>>(endpoints.users.update(id), payload);
    return response.data;
  },

  async deactivateUser(id: number) {
    const response = await apiClient.delete<ApiResponse<null>>(endpoints.users.destroy(id));
    return response.data;
  },

  async getRoles(params: Pick<PaginationQuery, "page" | "per_page"> = {}) {
    const response = await apiClient.get<ApiResponse<Role[]>>(endpoints.roles.index, { params });
    return unwrapPaginated(response.data);
  },

  async createRole(payload: RolePayload) {
    const response = await apiClient.post<ApiResponse<Role>>(endpoints.roles.store, payload);
    return response.data;
  },

  async updateRole(id: number, payload: RolePayload) {
    const response = await apiClient.put<ApiResponse<Role>>(endpoints.roles.update(id), payload);
    return response.data;
  },

  async deleteRole(id: number) {
    const response = await apiClient.delete<ApiResponse<null>>(endpoints.roles.destroy(id));
    return response.data;
  },

  async getPermissions(params: Pick<PaginationQuery, "page" | "per_page"> = {}) {
    const response = await apiClient.get<ApiResponse<Permission[]>>(endpoints.permissions.index, {
      params,
    });
    return unwrapPaginated(response.data);
  },

  async createPermission(payload: PermissionPayload) {
    const response = await apiClient.post<ApiResponse<Permission>>(
      endpoints.permissions.store,
      payload
    );
    return response.data;
  },

  async updatePermission(id: number, payload: PermissionPayload) {
    const response = await apiClient.put<ApiResponse<Permission>>(
      endpoints.permissions.update(id),
      payload
    );
    return response.data;
  },

  async deletePermission(id: number) {
    const response = await apiClient.delete<ApiResponse<null>>(endpoints.permissions.destroy(id));
    return response.data;
  },

  async getOutlets(params: PaginationQuery = {}) {
    const response = await apiClient.get<ApiResponse<Outlet[]>>(endpoints.outlets.index, { params });
    return unwrapPaginated(response.data);
  },

  async createOutlet(payload: OutletPayload) {
    const response = await apiClient.post<ApiResponse<Outlet>>(endpoints.outlets.store, payload);
    return response.data;
  },

  async updateOutlet(id: number, payload: OutletPayload) {
    const response = await apiClient.put<ApiResponse<Outlet>>(endpoints.outlets.update(id), payload);
    return response.data;
  },

  async deleteOutlet(id: number) {
    const response = await apiClient.delete<ApiResponse<null>>(endpoints.outlets.destroy(id));
    return response.data;
  },

  async getOutletSetting(outletId: number) {
    const response = await apiClient.get<ApiResponse<OutletSetting>>(endpoints.outlets.settings(outletId));
    return response.data;
  },

  async updateOutletSetting(outletId: number, payload: OutletSettingPayload) {
    const response = await apiClient.patch<ApiResponse<OutletSetting>>(
      endpoints.outlets.settings(outletId),
      payload
    );
    return response.data;
  },

  async getSystemSettings(params: Pick<PaginationQuery, "page" | "per_page" | "search"> = {}) {
    const response = await apiClient.get<ApiResponse<SystemSetting[]>>(endpoints.systemSettings.index, {
      params,
    });
    return unwrapPaginated(response.data);
  },

  async upsertSystemSettings(settings: SystemSettingPayloadItem[]) {
    const response = await apiClient.put<ApiResponse<SystemSetting[]>>(endpoints.systemSettings.upsert, {
      settings,
    });
    return response.data;
  },
};
```
</details>

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

<a id="file-srccomponentsfeedbackapptoastertsx"></a>
### src\components\feedback\AppToaster.tsx
- SHA: `f69c47fc1d35`  
- Ukuran: 1 KB
<details><summary><strong>Lihat Kode Lengkap</strong></summary>

```tsx
import { useToastStore } from "@/hooks/useToast";

const variantClassMap = {
  success: "border-emerald-200 bg-emerald-50 text-emerald-800",
  error: "border-red-200 bg-red-50 text-red-800",
  info: "border-sky-200 bg-sky-50 text-sky-800",
  warning: "border-amber-200 bg-amber-50 text-amber-800",
};

export function AppToaster() {
  const items = useToastStore((state) => state.items);
  const removeToast = useToastStore((state) => state.removeToast);

  return (
    <div className="pointer-events-none fixed right-4 top-4 z-[60] flex w-full max-w-sm flex-col gap-3">
      {items.map((item) => (
        <div
          key={item.id}
          className={[
            "pointer-events-auto rounded-2xl border px-4 py-3 shadow-lg",
            variantClassMap[item.variant],
          ].join(" ")}
        >
          <div className="flex items-start justify-between gap-3">
            <div>
              <div className="text-sm font-semibold">{item.title}</div>
              {item.description ? <div className="mt-1 text-xs">{item.description}</div> : null}
            </div>

            <button
              type="button"
              onClick={() => removeToast(item.id)}
              className="rounded-lg px-2 py-1 text-xs hover:bg-white/50"
            >
              Tutup
            </button>
          </div>
        </div>
      ))}
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
- SHA: `0d527e4967af`  
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
  {
    label: "Product Categories",
    to: "/admin/product-categories",
    permission: "product_categories.view",
  },
  {
    label: "Products",
    to: "/admin/products",
    permission: "products.view",
  },
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

<a id="file-srccomponentsuibadgetsx"></a>
### src\components\ui\Badge.tsx
- SHA: `db81eea0a0d2`  
- Ukuran: 811 B
<details><summary><strong>Lihat Kode Lengkap</strong></summary>

```tsx
import type { PropsWithChildren } from "react";
import { cn } from "./utils";

type BadgeVariant = "default" | "success" | "warning" | "danger" | "info";

const variantClassMap: Record<BadgeVariant, string> = {
  default: "bg-slate-100 text-slate-700",
  success: "bg-emerald-100 text-emerald-700",
  warning: "bg-amber-100 text-amber-700",
  danger: "bg-red-100 text-red-700",
  info: "bg-sky-100 text-sky-700",
};

interface BadgeProps extends PropsWithChildren {
  variant?: BadgeVariant;
  className?: string;
}

export function Badge({ children, variant = "default", className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex rounded-full px-2.5 py-1 text-xs font-medium",
        variantClassMap[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
```
</details>

<a id="file-srccomponentsuibuttontsx"></a>
### src\components\ui\Button.tsx
- SHA: `1fa7cf10b18b`  
- Ukuran: 2 KB
<details><summary><strong>Lihat Kode Lengkap</strong></summary>

```tsx
import type { ButtonHTMLAttributes, PropsWithChildren } from "react";
import { cn } from "./utils";

type ButtonVariant = "primary" | "secondary" | "outline" | "danger" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>, PropsWithChildren {
  variant?: ButtonVariant;
  size?: ButtonSize;
  loading?: boolean;
  fullWidth?: boolean;
}

const variantClassMap: Record<ButtonVariant, string> = {
  primary: "bg-slate-900 text-white hover:bg-slate-800",
  secondary: "bg-slate-100 text-slate-900 hover:bg-slate-200",
  outline: "border border-slate-300 bg-white text-slate-900 hover:bg-slate-50",
  danger: "bg-red-600 text-white hover:bg-red-700",
  ghost: "bg-transparent text-slate-700 hover:bg-slate-100",
};

const sizeClassMap: Record<ButtonSize, string> = {
  sm: "px-3 py-2 text-sm",
  md: "px-4 py-2 text-sm",
  lg: "px-5 py-3 text-base",
};

export function Button({
  children,
  className,
  variant = "primary",
  size = "md",
  loading = false,
  fullWidth = false,
  disabled,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center rounded-xl font-medium transition outline-none focus:ring-2 focus:ring-slate-300 disabled:cursor-not-allowed disabled:opacity-60",
        variantClassMap[variant],
        sizeClassMap[size],
        fullWidth && "w-full",
        className
      )}
      disabled={disabled || loading}
      {...props}
    >
      {loading ? "Memproses..." : children}
    </button>
  );
}
```
</details>

<a id="file-srccomponentsuicardtsx"></a>
### src\components\ui\Card.tsx
- SHA: `9401d0385591`  
- Ukuran: 851 B
<details><summary><strong>Lihat Kode Lengkap</strong></summary>

```tsx
import type { PropsWithChildren, ReactNode } from "react";
import { cn } from "./utils";

interface CardProps extends PropsWithChildren {
  title?: string;
  description?: string;
  actions?: ReactNode;
  className?: string;
}

export function Card({ title, description, actions, children, className }: CardProps) {
  return (
    <div className={cn("rounded-2xl border border-slate-200 bg-white p-5", className)}>
      {(title || actions) && (
        <div className="mb-4 flex items-start justify-between gap-4">
          <div>
            {title ? <h3 className="text-base font-semibold text-slate-900">{title}</h3> : null}
            {description ? <p className="mt-1 text-sm text-slate-500">{description}</p> : null}
          </div>
          {actions ? <div>{actions}</div> : null}
        </div>
      )}

      {children}
    </div>
  );
}
```
</details>

<a id="file-srccomponentsuicheckboxtsx"></a>
### src\components\ui\Checkbox.tsx
- SHA: `67aaf9b98c00`  
- Ukuran: 729 B
<details><summary><strong>Lihat Kode Lengkap</strong></summary>

```tsx
import type { InputHTMLAttributes } from "react";

interface CheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "type"> {
  label: string;
  hint?: string;
}

export function Checkbox({ label, hint, id, ...props }: CheckboxProps) {
  const inputId = id ?? props.name;

  return (
    <label htmlFor={inputId} className="flex cursor-pointer items-start gap-3">
      <input
        id={inputId}
        type="checkbox"
        className="mt-1 h-4 w-4 rounded border-slate-300 text-slate-900"
        {...props}
      />
      <div>
        <div className="text-sm font-medium text-slate-800">{label}</div>
        {hint ? <div className="text-xs text-slate-500">{hint}</div> : null}
      </div>
    </label>
  );
}
```
</details>

<a id="file-srccomponentsuiconfirmdialogtsx"></a>
### src\components\ui\ConfirmDialog.tsx
- SHA: `014675527a83`  
- Ukuran: 1 KB
<details><summary><strong>Lihat Kode Lengkap</strong></summary>

```tsx
import { Modal } from "./Modal";
import { Button } from "./Button";

interface ConfirmDialogProps {
  open: boolean;
  title?: string;
  description?: string;
  confirmText?: string;
  cancelText?: string;
  confirmVariant?: "primary" | "danger";
  loading?: boolean;
  onConfirm: () => void;
  onClose: () => void;
}

export function ConfirmDialog({
  open,
  title = "Konfirmasi aksi",
  description = "Apakah Anda yakin ingin melanjutkan aksi ini?",
  confirmText = "Ya, lanjutkan",
  cancelText = "Batal",
  confirmVariant = "danger",
  loading = false,
  onConfirm,
  onClose,
}: ConfirmDialogProps) {
  return (
    <Modal
      open={open}
      title={title}
      description={description}
      onClose={onClose}
      footer={
        <>
          <Button variant="outline" onClick={onClose}>
            {cancelText}
          </Button>
          <Button variant={confirmVariant} loading={loading} onClick={onConfirm}>
            {confirmText}
          </Button>
        </>
      }
    >
      <div className="text-sm text-slate-600">
        Tindakan ini sebaiknya hanya dilakukan jika Anda sudah yakin terhadap data yang dipilih.
      </div>
    </Modal>
  );
}
```
</details>

<a id="file-srccomponentsuidatagridtsx"></a>
### src\components\ui\DataGrid.tsx
- SHA: `bd6277512dd2`  
- Ukuran: 623 B
<details><summary><strong>Lihat Kode Lengkap</strong></summary>

```tsx
import type { ReactNode } from "react";
import { Card } from "./Card";

interface DataGridProps {
  title?: string;
  description?: string;
  filters?: ReactNode;
  table: ReactNode;
  pagination?: ReactNode;
  actions?: ReactNode;
}

export function DataGrid({
  title,
  description,
  filters,
  table,
  pagination,
  actions,
}: DataGridProps) {
  return (
    <div className="space-y-4">
      {(title || description || actions) && (
        <Card title={title} description={description} actions={actions} />
      )}

      {filters ? <Card>{filters}</Card> : null}
      {table}
      {pagination}
    </div>
  );
}
```
</details>

<a id="file-srccomponentsuidrawertsx"></a>
### src\components\ui\Drawer.tsx
- SHA: `3e0dd2c84136`  
- Ukuran: 1 KB
<details><summary><strong>Lihat Kode Lengkap</strong></summary>

```tsx
import type { PropsWithChildren, ReactNode } from "react";
import { Button } from "./Button";

interface DrawerProps extends PropsWithChildren {
  open: boolean;
  title: string;
  description?: string;
  side?: "left" | "right";
  widthClassName?: string;
  onClose: () => void;
  footer?: ReactNode;
}

export function Drawer({
  open,
  title,
  description,
  side = "right",
  widthClassName = "max-w-lg",
  onClose,
  footer,
  children,
}: DrawerProps) {
  if (!open) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/50">
      <div
        className={[
          "absolute top-0 h-full w-full bg-white shadow-xl sm:w-[520px]",
          widthClassName,
          side === "right" ? "right-0" : "left-0",
        ].join(" ")}
      >
        <div className="flex h-full flex-col p-6">
          <div className="flex items-start justify-between gap-4 border-b border-slate-200 pb-4">
            <div>
              <h2 className="text-lg font-semibold text-slate-900">{title}</h2>
              {description ? <p className="mt-1 text-sm text-slate-500">{description}</p> : null}
            </div>

            <Button variant="ghost" onClick={onClose}>
              Tutup
            </Button>
          </div>

          <div className="flex-1 overflow-y-auto py-5">{children}</div>

          {footer ? <div className="border-t border-slate-200 pt-4">{footer}</div> : null}
        </div>
      </div>
    </div>
  );
}
```
</details>

<a id="file-srccomponentsuifileuploadfieldtsx"></a>
### src\components\ui\FileUploadField.tsx
- SHA: `0f14b5817246`  
- Ukuran: 2 KB
<details><summary><strong>Lihat Kode Lengkap</strong></summary>

```tsx
import { useRef } from "react";
import { Button } from "./Button";

interface FileUploadFieldProps {
  label?: string;
  hint?: string;
  accept?: string;
  multiple?: boolean;
  files?: File[] | null;
  error?: string;
  onChange: (files: File[]) => void;
}

export function FileUploadField({
  label = "Upload file",
  hint,
  accept,
  multiple = false,
  files,
  error,
  onChange,
}: FileUploadFieldProps) {
  const inputRef = useRef<HTMLInputElement | null>(null);

  return (
    <div className="space-y-2">
      <div>
        <div className="text-sm font-medium text-slate-700">{label}</div>
        {hint ? <div className="text-xs text-slate-500">{hint}</div> : null}
      </div>

      <div className="rounded-2xl border border-dashed border-slate-300 bg-white p-4">
        <input
          ref={inputRef}
          type="file"
          accept={accept}
          multiple={multiple}
          className="hidden"
          onChange={(event) => {
            const selected = Array.from(event.target.files ?? []);
            onChange(selected);
          }}
        />

        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="text-sm text-slate-600">
            {files?.length ? `${files.length} file dipilih.` : "Belum ada file dipilih."}
          </div>

          <Button
            type="button"
            variant="outline"
            onClick={() => inputRef.current?.click()}
          >
            Pilih File
          </Button>
        </div>

        {files?.length ? (
          <ul className="mt-4 space-y-2 text-sm text-slate-700">
            {files.map((file) => (
              <li key={`${file.name}-${file.size}`} className="rounded-xl bg-slate-50 px-3 py-2">
                {file.name}
              </li>
            ))}
          </ul>
        ) : null}
      </div>

      {error ? <p className="text-xs text-red-600">{error}</p> : null}
    </div>
  );
}
```
</details>

<a id="file-srccomponentsuiindexts"></a>
### src\components\ui\index.ts
- SHA: `be0edc9bff36`  
- Ukuran: 514 B
<details><summary><strong>Lihat Kode Lengkap</strong></summary>

```ts
export * from "./utils";
export * from "./Button";
export * from "./Input";
export * from "./Select";
export * from "./SearchField";
export * from "./Checkbox";
export * from "./Radio";
export * from "./Switch";
export * from "./Modal";
export * from "./Drawer";
export * from "./Table";
export * from "./DataGrid";
export * from "./Pagination";
export * from "./Tabs";
export * from "./Card";
export * from "./Badge";
export * from "./ConfirmDialog";
export * from "./Skeleton";
export * from "./FileUploadField";
```
</details>

<a id="file-srccomponentsuiinputtsx"></a>
### src\components\ui\Input.tsx
- SHA: `98c50405fb80`  
- Ukuran: 1 KB
<details><summary><strong>Lihat Kode Lengkap</strong></summary>

```tsx
import type { InputHTMLAttributes } from "react";
import { cn } from "./utils";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  hint?: string;
  error?: string;
}

export function Input({ label, hint, error, className, id, ...props }: InputProps) {
  const inputId = id ?? props.name;

  return (
    <div className="space-y-1.5">
      {label ? (
        <label htmlFor={inputId} className="block text-sm font-medium text-slate-700">
          {label}
        </label>
      ) : null}

      <input
        id={inputId}
        className={cn(
          "w-full rounded-xl border px-3 py-2 text-sm outline-none transition",
          error
            ? "border-red-300 bg-red-50 text-slate-900 focus:border-red-400"
            : "border-slate-300 bg-white text-slate-900 focus:border-slate-500",
          className
        )}
        {...props}
      />

      {error ? <p className="text-xs text-red-600">{error}</p> : null}
      {!error && hint ? <p className="text-xs text-slate-500">{hint}</p> : null}
    </div>
  );
}
```
</details>

<a id="file-srccomponentsuimodaltsx"></a>
### src\components\ui\Modal.tsx
- SHA: `4841b04c5467`  
- Ukuran: 1 KB
<details><summary><strong>Lihat Kode Lengkap</strong></summary>

```tsx
import type { PropsWithChildren, ReactNode } from "react";
import { Button } from "./Button";

interface ModalProps extends PropsWithChildren {
  open: boolean;
  title: string;
  description?: string;
  onClose: () => void;
  footer?: ReactNode;
}

export function Modal({
  open,
  title,
  description,
  onClose,
  footer,
  children,
}: ModalProps) {
  if (!open) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/50 p-4">
      <div className="w-full max-w-xl rounded-2xl bg-white p-6 shadow-xl">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h2 className="text-lg font-semibold text-slate-900">{title}</h2>
            {description ? <p className="mt-1 text-sm text-slate-500">{description}</p> : null}
          </div>

          <Button variant="ghost" onClick={onClose}>
            Tutup
          </Button>
        </div>

        <div className="mt-5">{children}</div>

        {footer ? <div className="mt-6 flex justify-end gap-3">{footer}</div> : null}
      </div>
    </div>
  );
}
```
</details>

<a id="file-srccomponentsuipaginationtsx"></a>
### src\components\ui\Pagination.tsx
- SHA: `73b6df0984d6`  
- Ukuran: 1 KB
<details><summary><strong>Lihat Kode Lengkap</strong></summary>

```tsx
import type { ApiMeta } from "@/types/api";
import { Button } from "./Button";

interface PaginationProps {
  meta?: ApiMeta | null;
  onPageChange: (page: number) => void;
}

export function Pagination({ meta, onPageChange }: PaginationProps) {
  const currentPage = Number(meta?.current_page ?? 1);
  const lastPage = Number(meta?.last_page ?? 1);

  if (lastPage <= 1) {
    return null;
  }

  return (
    <div className="flex flex-col gap-3 rounded-2xl border border-slate-200 bg-white p-4 sm:flex-row sm:items-center sm:justify-between">
      <p className="text-sm text-slate-500">
        Halaman <span className="font-medium text-slate-900">{currentPage}</span> dari{" "}
        <span className="font-medium text-slate-900">{lastPage}</span>
      </p>

      <div className="flex gap-2">
        <Button
          variant="outline"
          disabled={currentPage <= 1}
          onClick={() => onPageChange(currentPage - 1)}
        >
          Sebelumnya
        </Button>

        <Button
          variant="outline"
          disabled={currentPage >= lastPage}
          onClick={() => onPageChange(currentPage + 1)}
        >
          Berikutnya
        </Button>
      </div>
    </div>
  );
}
```
</details>

<a id="file-srccomponentsuiradiotsx"></a>
### src\components\ui\Radio.tsx
- SHA: `5d879789fb35`  
- Ukuran: 729 B
<details><summary><strong>Lihat Kode Lengkap</strong></summary>

```tsx
import type { InputHTMLAttributes } from "react";

interface RadioProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "type"> {
  label: string;
  hint?: string;
}

export function Radio({ label, hint, id, ...props }: RadioProps) {
  const inputId = id ?? `${props.name}-${props.value}`;

  return (
    <label htmlFor={inputId} className="flex cursor-pointer items-start gap-3">
      <input
        id={inputId}
        type="radio"
        className="mt-1 h-4 w-4 border-slate-300 text-slate-900"
        {...props}
      />
      <div>
        <div className="text-sm font-medium text-slate-800">{label}</div>
        {hint ? <div className="text-xs text-slate-500">{hint}</div> : null}
      </div>
    </label>
  );
}
```
</details>

<a id="file-srccomponentsuisearchfieldtsx"></a>
### src\components\ui\SearchField.tsx
- SHA: `d2505c4d5034`  
- Ukuran: 1 KB
<details><summary><strong>Lihat Kode Lengkap</strong></summary>

```tsx
import type { InputHTMLAttributes } from "react";
import { cn } from "./utils";

interface SearchFieldProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "type"> {
  onClear?: () => void;
}

export function SearchField({ className, value, onClear, ...props }: SearchFieldProps) {
  const hasValue = typeof value === "string" ? value.length > 0 : Boolean(value);

  return (
    <div className="relative">
      <input
        type="search"
        value={value}
        className={cn(
          "w-full rounded-xl border border-slate-300 bg-white px-3 py-2 pr-10 text-sm outline-none transition focus:border-slate-500",
          className
        )}
        placeholder="Cari data..."
        {...props}
      />

      {hasValue && onClear ? (
        <button
          type="button"
          onClick={onClear}
          className="absolute right-2 top-1/2 -translate-y-1/2 rounded-lg px-2 py-1 text-xs text-slate-500 hover:bg-slate-100"
        >
          Clear
        </button>
      ) : null}
    </div>
  );
}
```
</details>

<a id="file-srccomponentsuiselecttsx"></a>
### src\components\ui\Select.tsx
- SHA: `9c02bc593449`  
- Ukuran: 1 KB
<details><summary><strong>Lihat Kode Lengkap</strong></summary>

```tsx
import type { SelectHTMLAttributes } from "react";
import { cn } from "./utils";

export interface SelectOption {
  label: string;
  value: string | number;
}

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  hint?: string;
  error?: string;
  placeholder?: string;
  options: SelectOption[];
}

export function Select({
  label,
  hint,
  error,
  id,
  name,
  placeholder = "Pilih data",
  options,
  className,
  ...props
}: SelectProps) {
  const selectId = id ?? name;

  return (
    <div className="space-y-1.5">
      {label ? (
        <label htmlFor={selectId} className="block text-sm font-medium text-slate-700">
          {label}
        </label>
      ) : null}

      <select
        id={selectId}
        name={name}
        className={cn(
          "w-full rounded-xl border px-3 py-2 text-sm outline-none transition",
          error
            ? "border-red-300 bg-red-50 text-slate-900 focus:border-red-400"
            : "border-slate-300 bg-white text-slate-900 focus:border-slate-500",
          className
        )}
        {...props}
      >
        <option value="">{placeholder}</option>
        {options.map((option) => (
          <option key={`${option.value}`} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>

      {error ? <p className="text-xs text-red-600">{error}</p> : null}
      {!error && hint ? <p className="text-xs text-slate-500">{hint}</p> : null}
    </div>
  );
}
```
</details>

<a id="file-srccomponentsuiskeletontsx"></a>
### src\components\ui\Skeleton.tsx
- SHA: `af989f4926c3`  
- Ukuran: 520 B
<details><summary><strong>Lihat Kode Lengkap</strong></summary>

```tsx
interface SkeletonProps {
  className?: string;
}

export function Skeleton({ className = "h-4 w-full" }: SkeletonProps) {
  return <div className={`animate-pulse rounded-xl bg-slate-200 ${className}`} />;
}

export function SkeletonCard() {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5">
      <Skeleton className="h-6 w-40" />
      <Skeleton className="mt-3 h-4 w-full" />
      <Skeleton className="mt-2 h-4 w-5/6" />
      <Skeleton className="mt-6 h-10 w-32" />
    </div>
  );
}
```
</details>

<a id="file-srccomponentsuiswitchtsx"></a>
### src\components\ui\Switch.tsx
- SHA: `89c40b999d7f`  
- Ukuran: 1 KB
<details><summary><strong>Lihat Kode Lengkap</strong></summary>

```tsx
interface SwitchProps {
  checked: boolean;
  onChange: (value: boolean) => void;
  label?: string;
  description?: string;
  disabled?: boolean;
}

export function Switch({
  checked,
  onChange,
  label,
  description,
  disabled = false,
}: SwitchProps) {
  return (
    <div className="flex items-center justify-between gap-4 rounded-2xl border border-slate-200 bg-white p-4">
      <div>
        {label ? <div className="text-sm font-medium text-slate-900">{label}</div> : null}
        {description ? <div className="text-xs text-slate-500">{description}</div> : null}
      </div>

      <button
        type="button"
        disabled={disabled}
        onClick={() => onChange(!checked)}
        className={[
          "relative inline-flex h-7 w-12 items-center rounded-full transition",
          checked ? "bg-slate-900" : "bg-slate-300",
          disabled ? "opacity-50" : "",
        ].join(" ")}
      >
        <span
          className={[
            "inline-block h-5 w-5 transform rounded-full bg-white transition",
            checked ? "translate-x-6" : "translate-x-1",
          ].join(" ")}
        />
      </button>
    </div>
  );
}
```
</details>

<a id="file-srccomponentsuitabletsx"></a>
### src\components\ui\Table.tsx
- SHA: `4db10a677b7b`  
- Ukuran: 2 KB
<details><summary><strong>Lihat Kode Lengkap</strong></summary>

```tsx
import type { ReactNode } from "react";

export interface TableColumn<T> {
  key: string;
  title: string;
  className?: string;
  render: (row: T, index: number) => ReactNode;
}

interface TableProps<T> {
  columns: TableColumn<T>[];
  data: T[];
  rowKey: (row: T, index: number) => string | number;
  emptyText?: string;
}

export function Table<T>({ columns, data, rowKey, emptyText = "Belum ada data." }: TableProps<T>) {
  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-slate-200">
          <thead className="bg-slate-50">
            <tr>
              {columns.map((column) => (
                <th
                  key={column.key}
                  className={[
                    "px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-slate-500",
                    column.className ?? "",
                  ].join(" ")}
                >
                  {column.title}
                </th>
              ))}
            </tr>
          </thead>

          <tbody className="divide-y divide-slate-100">
            {data.length > 0 ? (
              data.map((row, index) => (
                <tr key={rowKey(row, index)} className="hover:bg-slate-50">
                  {columns.map((column) => (
                    <td key={column.key} className="px-4 py-3 text-sm text-slate-700">
                      {column.render(row, index)}
                    </td>
                  ))}
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={columns.length} className="px-4 py-8 text-center text-sm text-slate-500">
                  {emptyText}
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
```
</details>

<a id="file-srccomponentsuitabstsx"></a>
### src\components\ui\Tabs.tsx
- SHA: `b7bb62e3a472`  
- Ukuran: 1 KB
<details><summary><strong>Lihat Kode Lengkap</strong></summary>

```tsx
import { useState, type ReactNode } from "react";
import { cn } from "./utils";

export interface TabItem {
  key: string;
  label: string;
  content: ReactNode;
}

interface TabsProps {
  items: TabItem[];
  defaultTab?: string;
}

export function Tabs({ items, defaultTab }: TabsProps) {
  const initialTab = defaultTab ?? items[0]?.key ?? "";
  const [activeTab, setActiveTab] = useState(initialTab);

  const current = items.find((item) => item.key === activeTab) ?? items[0];

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-2">
        {items.map((item) => {
          const active = item.key === current?.key;

          return (
            <button
              key={item.key}
              type="button"
              onClick={() => setActiveTab(item.key)}
              className={cn(
                "rounded-xl px-4 py-2 text-sm font-medium transition",
                active
                  ? "bg-slate-900 text-white"
                  : "border border-slate-300 bg-white text-slate-700 hover:bg-slate-50"
              )}
            >
              {item.label}
            </button>
          );
        })}
      </div>

      <div>{current?.content}</div>
    </div>
  );
}
```
</details>

<a id="file-srccomponentsuiutilsts"></a>
### src\components\ui\utils.ts
- SHA: `8b2a4f489c46`  
- Ukuran: 120 B
<details><summary><strong>Lihat Kode Lengkap</strong></summary>

```ts
export function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
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
- SHA: `a238404f6131`  
- Ukuran: 2 KB
<details><summary><strong>Lihat Kode Lengkap</strong></summary>

```ts
export const endpoints = {
  auth: {
    login: "/auth/login",
    logout: "/auth/logout",
    me: "/auth/me",
    changePassword: "/auth/change-password",
  },

  users: {
    index: "/users",
    store: "/users",
    show: (id: number | string) => `/users/${id}`,
    update: (id: number | string) => `/users/${id}`,
    destroy: (id: number | string) => `/users/${id}`,
  },

  roles: {
    index: "/roles",
    store: "/roles",
    show: (id: number | string) => `/roles/${id}`,
    update: (id: number | string) => `/roles/${id}`,
    destroy: (id: number | string) => `/roles/${id}`,
  },

  permissions: {
    index: "/permissions",
    store: "/permissions",
    show: (id: number | string) => `/permissions/${id}`,
    update: (id: number | string) => `/permissions/${id}`,
    destroy: (id: number | string) => `/permissions/${id}`,
  },

  outlets: {
    index: "/outlets",
    store: "/outlets",
    show: (id: number | string) => `/outlets/${id}`,
    update: (id: number | string) => `/outlets/${id}`,
    destroy: (id: number | string) => `/outlets/${id}`,
    settings: (id: number | string) => `/outlets/${id}/settings`,
  },

  systemSettings: {
    index: "/system-settings",
    upsert: "/system-settings",
  },

  productCategories: {
    index: "/product-categories",
    store: "/product-categories",
    show: (id: number | string) => `/product-categories/${id}`,
    update: (id: number | string) => `/product-categories/${id}`,
    destroy: (id: number | string) => `/product-categories/${id}`,
  },

  products: {
    index: "/products",
    store: "/products",
    show: (id: number | string) => `/products/${id}`,
    update: (id: number | string) => `/products/${id}`,
    destroy: (id: number | string) => `/products/${id}`,
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

<a id="file-srchooksusetoastts"></a>
### src\hooks\useToast.ts
- SHA: `6c56e3919bdc`  
- Ukuran: 1 KB
<details><summary><strong>Lihat Kode Lengkap</strong></summary>

```ts
import { create } from "zustand";

export type ToastVariant = "success" | "error" | "info" | "warning";

export interface ToastItem {
  id: number;
  title: string;
  description?: string;
  variant: ToastVariant;
}

interface ToastState {
  items: ToastItem[];
  showToast: (payload: Omit<ToastItem, "id">) => void;
  removeToast: (id: number) => void;
}

export const useToastStore = create<ToastState>((set, get) => ({
  items: [],
  showToast: (payload) => {
    const id = Date.now() + Math.floor(Math.random() * 1000);

    set((state) => ({
      items: [...state.items, { id, ...payload }],
    }));

    window.setTimeout(() => {
      get().removeToast(id);
    }, 3500);
  },
  removeToast: (id) =>
    set((state) => ({
      items: state.items.filter((item) => item.id !== id),
    })),
}));

export const useToast = () => {
  const showToast = useToastStore((state) => state.showToast);

  return {
    success: (title: string, description?: string) =>
      showToast({ title, description, variant: "success" }),
    error: (title: string, description?: string) =>
      showToast({ title, description, variant: "error" }),
    info: (title: string, description?: string) =>
      showToast({ title, description, variant: "info" }),
    warning: (title: string, description?: string) =>
      showToast({ title, description, variant: "warning" }),
  };
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

<a id="file-srctypesproductts"></a>
### src\types\product.ts
- SHA: `4a12cec8c54a`  
- Ukuran: 2 KB
<details><summary><strong>Lihat Kode Lengkap</strong></summary>

```ts
import type { Outlet } from "@/types/outlet";

export interface ProductCategory {
  id: number;
  name: string;
  slug: string | null;
  sort_order: number;
  is_active: boolean;
  products_count?: number;
  created_at?: string;
  updated_at?: string;
}

export interface ProductPrice {
  id?: number;
  outlet_id: number;
  price: number | string;
  dine_in_price?: number | string | null;
  takeaway_price?: number | string | null;
  delivery_price?: number | string | null;
  starts_at?: string | null;
  ends_at?: string | null;
  is_active?: boolean;
  outlet?: Outlet;
}

export interface ProductOutletStatus {
  id?: number;
  outlet_id: number;
  is_available?: boolean;
  is_hidden?: boolean;
  daily_limit?: number | null;
  notes?: string | null;
  outlet?: Outlet;
}

export interface ProductVariantOption {
  id?: number;
  name: string;
  price_adjustment?: number | string;
  sort_order?: number;
  is_active?: boolean;
}

export interface ProductVariantGroup {
  id?: number;
  name: string;
  selection_type: "single" | "multiple";
  is_required?: boolean;
  sort_order?: number;
  options: ProductVariantOption[];
}

export interface ProductModifierOption {
  id?: number;
  name: string;
  price?: number | string;
  is_active?: boolean;
  sort_order?: number;
}

export interface ProductModifierGroup {
  id?: number;
  name: string;
  min_select?: number;
  max_select?: number;
  is_required?: boolean;
  sort_order?: number;
  options: ProductModifierOption[];
}

export interface ProductBundleItem {
  id?: number;
  bundled_product_id: number;
  qty: number | string;
  bundled_product?: {
    id: number;
    name: string;
    sku?: string | null;
    code?: string | null;
  };
}

export interface Product {
  id: number;
  product_category_id: number;
  sku: string | null;
  code: string | null;
  name: string;
  slug: string | null;
  description: string | null;
  image_url: string | null;
  base_price: number | string;
  product_type: "single" | "bundle";
  is_active: boolean;
  is_featured: boolean;
  track_recipe: boolean;
  track_stock_direct: boolean;
  category?: ProductCategory | null;
  prices?: ProductPrice[];
  outlet_statuses?: ProductOutletStatus[];
  variant_groups?: ProductVariantGroup[];
  modifier_groups?: ProductModifierGroup[];
  bundle_items?: ProductBundleItem[];
  created_at?: string;
  updated_at?: string;
}
```
</details>

<a id="file-srctypesrolets"></a>
### src\types\role.ts
- SHA: `0fba3ace02e4`  
- Ukuran: 147 B
<details><summary><strong>Lihat Kode Lengkap</strong></summary>

```ts
export interface Role {
  id: number;
  name: string;
  guard_name: string;
  permissions?: string[];
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
