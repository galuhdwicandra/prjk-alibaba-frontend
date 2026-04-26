# Dokumentasi Frontend (FULL Source)

_Dihasilkan otomatis: 2026-04-26 11:05:07_  
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
  - [src\modules\admin\components\inventory\BomItemsEditor.tsx](#file-srcmodulesadmincomponentsinventorybomitemseditortsx)
  - [src\modules\admin\components\product-config\ProductBundleItemsEditor.tsx](#file-srcmodulesadmincomponentsproduct-configproductbundleitemseditortsx)
  - [src\modules\admin\components\product-config\ProductConfigPage.tsx](#file-srcmodulesadmincomponentsproduct-configproductconfigpagetsx)
  - [src\modules\admin\components\product-config\ProductModifierGroupsEditor.tsx](#file-srcmodulesadmincomponentsproduct-configproductmodifiergroupseditortsx)
  - [src\modules\admin\components\product-config\ProductVariantGroupsEditor.tsx](#file-srcmodulesadmincomponentsproduct-configproductvariantgroupseditortsx)
  - [src\modules\admin\components\purchasing\GoodsReceiptItemsEditor.tsx](#file-srcmodulesadmincomponentspurchasinggoodsreceiptitemseditortsx)
  - [src\modules\admin\components\purchasing\PurchaseOrderItemsEditor.tsx](#file-srcmodulesadmincomponentspurchasingpurchaseorderitemseditortsx)
  - [src\modules\admin\pages\GoodsReceiptsPage.tsx](#file-srcmodulesadminpagesgoodsreceiptspagetsx)
  - [src\modules\admin\pages\OutletMaterialStocksPage.tsx](#file-srcmodulesadminpagesoutletmaterialstockspagetsx)
  - [src\modules\admin\pages\OutletsPage.tsx](#file-srcmodulesadminpagesoutletspagetsx)
  - [src\modules\admin\pages\PermissionsPage.tsx](#file-srcmodulesadminpagespermissionspagetsx)
  - [src\modules\admin\pages\ProductBomsPage.tsx](#file-srcmodulesadminpagesproductbomspagetsx)
  - [src\modules\admin\pages\ProductBundlesPage.tsx](#file-srcmodulesadminpagesproductbundlespagetsx)
  - [src\modules\admin\pages\ProductCategoriesPage.tsx](#file-srcmodulesadminpagesproductcategoriespagetsx)
  - [src\modules\admin\pages\ProductModifiersPage.tsx](#file-srcmodulesadminpagesproductmodifierspagetsx)
  - [src\modules\admin\pages\ProductsPage.tsx](#file-srcmodulesadminpagesproductspagetsx)
  - [src\modules\admin\pages\ProductVariantsPage.tsx](#file-srcmodulesadminpagesproductvariantspagetsx)
  - [src\modules\admin\pages\PurchaseOrdersPage.tsx](#file-srcmodulesadminpagespurchaseorderspagetsx)
  - [src\modules\admin\pages\RawMaterialCategoriesPage.tsx](#file-srcmodulesadminpagesrawmaterialcategoriespagetsx)
  - [src\modules\admin\pages\RawMaterialsPage.tsx](#file-srcmodulesadminpagesrawmaterialspagetsx)
  - [src\modules\admin\pages\RolesPage.tsx](#file-srcmodulesadminpagesrolespagetsx)
  - [src\modules\admin\pages\SuppliersPage.tsx](#file-srcmodulesadminpagessupplierspagetsx)
  - [src\modules\admin\pages\SystemSettingsPage.tsx](#file-srcmodulesadminpagessystemsettingspagetsx)
  - [src\modules\admin\pages\UnitsPage.tsx](#file-srcmodulesadminpagesunitspagetsx)
  - [src\modules\admin\pages\UsersPage.tsx](#file-srcmodulesadminpagesuserspagetsx)
  - [src\modules\admin\services\catalog.service.ts](#file-srcmodulesadminservicescatalogservicets)
  - [src\modules\admin\services\inventory.service.ts](#file-srcmodulesadminservicesinventoryservicets)
  - [src\modules\admin\services\master-data.service.ts](#file-srcmodulesadminservicesmaster-dataservicets)
  - [src\modules\admin\services\purchasing.service.ts](#file-srcmodulesadminservicespurchasingservicets)
  - [src\modules\auth\hooks\useCurrentUser.ts](#file-srcmodulesauthhooksusecurrentuserts)
  - [src\modules\auth\pages\LoginPage.tsx](#file-srcmodulesauthpagesloginpagetsx)
  - [src\modules\auth\pages\NotFoundPage.tsx](#file-srcmodulesauthpagesnotfoundpagetsx)
  - [src\modules\auth\pages\UnauthorizedPage.tsx](#file-srcmodulesauthpagesunauthorizedpagetsx)
  - [src\modules\auth\schemas\login.schema.ts](#file-srcmodulesauthschemasloginschemats)
  - [src\modules\auth\services\auth.service.ts](#file-srcmodulesauthservicesauthservicets)
  - [src\modules\auth\store\auth.store.ts](#file-srcmodulesauthstoreauthstorets)
  - [src\modules\kitchen\components\KitchenTicketCard.tsx](#file-srcmoduleskitchencomponentskitchenticketcardtsx)
  - [src\modules\kitchen\components\KitchenTicketDetailModal.tsx](#file-srcmoduleskitchencomponentskitchenticketdetailmodaltsx)
  - [src\modules\kitchen\pages\KitchenTicketsPage.tsx](#file-srcmoduleskitchenpageskitchenticketspagetsx)
  - [src\modules\kitchen\pages\ReadyQueuePage.tsx](#file-srcmoduleskitchenpagesreadyqueuepagetsx)
  - [src\modules\kitchen\services\kitchen.service.ts](#file-srcmoduleskitchenserviceskitchenservicets)
  - [src\modules\pos\components\PosCartPanel.tsx](#file-srcmodulesposcomponentsposcartpaneltsx)
  - [src\modules\pos\components\PosCheckoutSuccessModal.tsx](#file-srcmodulesposcomponentsposcheckoutsuccessmodaltsx)
  - [src\modules\pos\components\PosPaymentModal.tsx](#file-srcmodulesposcomponentspospaymentmodaltsx)
  - [src\modules\pos\components\PosProductConfiguratorModal.tsx](#file-srcmodulesposcomponentsposproductconfiguratormodaltsx)
  - [src\modules\pos\hooks\usePosCartStore.ts](#file-srcmodulesposhooksuseposcartstorets)
  - [src\modules\pos\pages\PosOrdersPage.tsx](#file-srcmodulespospagesposorderspagetsx)
  - [src\modules\pos\pages\PosShiftsPage.tsx](#file-srcmodulespospagesposshiftspagetsx)
  - [src\modules\pos\services\pos.service.ts](#file-srcmodulesposservicesposservicets)
  - [src\modules\pos\services\shift.service.ts](#file-srcmodulesposservicesshiftservicets)
  - [src\modules\pos\types\pos.ts](#file-srcmodulespostypesposts)
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
  - [src\types\cashier-shift.ts](#file-srctypescashier-shiftts)
  - [src\types\customer.ts](#file-srctypescustomerts)
  - [src\types\inventory.ts](#file-srctypesinventoryts)
  - [src\types\kitchen.ts](#file-srctypeskitchents)
  - [src\types\outlet.ts](#file-srctypesoutletts)
  - [src\types\permission.ts](#file-srctypespermissionts)
  - [src\types\product.ts](#file-srctypesproductts)
  - [src\types\purchasing.ts](#file-srctypespurchasingts)
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
- SHA: `c2ae02e5c0f4`  
- Ukuran: 5 KB
<details><summary><strong>Lihat Kode Lengkap</strong></summary>

```tsx
// src/router/index.tsx

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
import ProductVariantsPage from "@/modules/admin/pages/ProductVariantsPage";
import ProductModifiersPage from "@/modules/admin/pages/ProductModifiersPage";
import ProductBundlesPage from "@/modules/admin/pages/ProductBundlesPage";
import UnitsPage from "@/modules/admin/pages/UnitsPage";
import RawMaterialCategoriesPage from "@/modules/admin/pages/RawMaterialCategoriesPage";
import RawMaterialsPage from "@/modules/admin/pages/RawMaterialsPage";
import OutletMaterialStocksPage from "@/modules/admin/pages/OutletMaterialStocksPage";
import ProductBomsPage from "@/modules/admin/pages/ProductBomsPage";
import SuppliersPage from "@/modules/admin/pages/SuppliersPage";
import PurchaseOrdersPage from "@/modules/admin/pages/PurchaseOrdersPage";
import GoodsReceiptsPage from "@/modules/admin/pages/GoodsReceiptsPage";
import PosOrdersPage from "@/modules/pos/pages/PosOrdersPage";
import PosShiftsPage from "@/modules/pos/pages/PosShiftsPage";
import KitchenTicketsPage from "@/modules/kitchen/pages/KitchenTicketsPage";
import ReadyQueuePage from "@/modules/kitchen/pages/ReadyQueuePage";

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
          { path: "product-variants", element: <ProductVariantsPage /> },
          { path: "product-modifiers", element: <ProductModifiersPage /> },
          { path: "product-bundles", element: <ProductBundlesPage /> },
          { path: "units", element: <UnitsPage /> },
          { path: "raw-material-categories", element: <RawMaterialCategoriesPage /> },
          { path: "raw-materials", element: <RawMaterialsPage /> },
          { path: "outlet-material-stocks", element: <OutletMaterialStocksPage /> },
          { path: "product-boms", element: <ProductBomsPage /> },
          { path: "suppliers", element: <SuppliersPage /> },
          { path: "purchase-orders", element: <PurchaseOrdersPage /> },
          { path: "goods-receipts", element: <GoodsReceiptsPage /> },
        ],
      },
      {
        path: "/pos",
        element: <PosLayout />,
        children: [
          { index: true, element: <RoutePlaceholder title="POS Home" /> },
          { path: "orders", element: <PosOrdersPage /> },
          { path: "shifts", element: <PosShiftsPage /> },
        ],
      },
      {
        path: "/kitchen",
        element: <KitchenLayout />,
        children: [
          { index: true, element: <Navigate to="/kitchen/tickets" replace /> },
          { path: "tickets", element: <KitchenTicketsPage /> },
          { path: "ready", element: <ReadyQueuePage /> },
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

<a id="file-srcmodulesadmincomponentsinventorybomitemseditortsx"></a>
### src\modules\admin\components\inventory\BomItemsEditor.tsx
- SHA: `702b89248cb3`  
- Ukuran: 5 KB
<details><summary><strong>Lihat Kode Lengkap</strong></summary>

```tsx
import { Button, Card, Input } from "@/components/ui";
import type { ProductBomItemPayload } from "@/modules/admin/services/inventory.service";
import type { RawMaterial, Unit } from "@/types/inventory";

interface BomItemsEditorProps {
  value: ProductBomItemPayload[];
  onChange: (next: ProductBomItemPayload[]) => void;
  rawMaterials: RawMaterial[];
  units: Unit[];
}

const createEmptyBomItem = (): ProductBomItemPayload => ({
  raw_material_id: 0,
  unit_id: 0,
  qty: 1,
  waste_percent: 0,
});

export function BomItemsEditor({
  value,
  onChange,
  rawMaterials,
  units,
}: BomItemsEditorProps) {
  const updateItems = (
    updater: (prev: ProductBomItemPayload[]) => ProductBomItemPayload[]
  ) => {
    onChange(updater(value));
  };

  return (
    <div className="space-y-4">
      {value.map((item, index) => (
        <Card key={index} title={`BOM Item #${index + 1}`}>
          <div className="grid gap-4 md:grid-cols-5">
            <div className="md:col-span-2">
              <label className="mb-2 block text-sm font-medium text-slate-700">
                Bahan Baku
              </label>
              <select
                className="w-full rounded-xl border border-slate-300 px-3 py-2 text-sm"
                value={item.raw_material_id || ""}
                onChange={(event) =>
                  updateItems((prev) => {
                    const next = [...prev];
                    const rawMaterialId = Number(event.target.value || 0);
                    const rawMaterial = rawMaterials.find((row) => row.id === rawMaterialId);

                    next[index] = {
                      ...next[index],
                      raw_material_id: rawMaterialId,
                      unit_id: rawMaterial?.unit_id ?? next[index].unit_id,
                    };

                    return next;
                  })
                }
              >
                <option value="">Pilih bahan baku</option>
                {rawMaterials.map((rawMaterial) => (
                  <option key={rawMaterial.id} value={rawMaterial.id}>
                    {rawMaterial.name}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">
                Satuan
              </label>
              <select
                className="w-full rounded-xl border border-slate-300 px-3 py-2 text-sm"
                value={item.unit_id || ""}
                onChange={(event) =>
                  updateItems((prev) => {
                    const next = [...prev];
                    next[index] = {
                      ...next[index],
                      unit_id: Number(event.target.value || 0),
                    };
                    return next;
                  })
                }
              >
                <option value="">Pilih satuan</option>
                {units.map((unit) => (
                  <option key={unit.id} value={unit.id}>
                    {unit.name} ({unit.code})
                  </option>
                ))}
              </select>
            </div>

            <Input
              label="Qty"
              type="number"
              value={String(item.qty ?? 0)}
              onChange={(event) =>
                updateItems((prev) => {
                  const next = [...prev];
                  next[index] = {
                    ...next[index],
                    qty: Number(event.target.value || 0),
                  };
                  return next;
                })
              }
            />

            <Input
              label="Waste %"
              type="number"
              value={String(item.waste_percent ?? 0)}
              onChange={(event) =>
                updateItems((prev) => {
                  const next = [...prev];
                  next[index] = {
                    ...next[index],
                    waste_percent: Number(event.target.value || 0),
                  };
                  return next;
                })
              }
            />

            <div className="md:col-span-5">
              <Button
                variant="danger"
                onClick={() => updateItems((prev) => prev.filter((_, idx) => idx !== index))}
              >
                Hapus Item
              </Button>
            </div>
          </div>
        </Card>
      ))}

      <Button
        variant="outline"
        onClick={() => onChange([...(value ?? []), createEmptyBomItem()])}
      >
        Tambah BOM Item
      </Button>
    </div>
  );
}

export function sanitizeBomItems(value: ProductBomItemPayload[]): ProductBomItemPayload[] {
  return (value ?? []).filter(
    (item) => item.raw_material_id > 0 && item.unit_id > 0 && Number(item.qty) > 0
  );
}

export function createInitialBomItems(): ProductBomItemPayload[] {
  return [createEmptyBomItem()];
}
```
</details>

<a id="file-srcmodulesadmincomponentsproduct-configproductbundleitemseditortsx"></a>
### src\modules\admin\components\product-config\ProductBundleItemsEditor.tsx
- SHA: `446cd1d9c02a`  
- Ukuran: 4 KB
<details><summary><strong>Lihat Kode Lengkap</strong></summary>

```tsx
import { Button, Card, Input } from "@/components/ui";
import type { ProductBundleItemPayload } from "@/modules/admin/services/catalog.service";
import type { Product } from "@/types/product";

interface ProductBundleItemsEditorProps {
  value: ProductBundleItemPayload[];
  onChange: (next: ProductBundleItemPayload[]) => void;
  productOptions: Product[];
}

const createEmptyBundleItem = (): ProductBundleItemPayload => ({
  bundled_product_id: 0,
  qty: 1,
});

export function ProductBundleItemsEditor({
  value,
  onChange,
  productOptions,
}: ProductBundleItemsEditorProps) {
  const updateItems = (
    updater: (prev: ProductBundleItemPayload[]) => ProductBundleItemPayload[]
  ) => {
    onChange(updater(value));
  };

  return (
    <div className="space-y-4">
      {value.map((item, index) => (
        <Card key={index} title={`Bundle Item #${index + 1}`}>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="md:col-span-2">
              <label className="mb-2 block text-sm font-medium text-slate-700">
                Bundled Product
              </label>
              <select
                className="w-full rounded-xl border border-slate-300 px-3 py-2 text-sm"
                value={item.bundled_product_id || ""}
                onChange={(e) =>
                  updateItems((prev) => {
                    const next = [...prev];
                    next[index] = {
                      ...next[index],
                      bundled_product_id: Number(e.target.value || 0),
                    };
                    return next;
                  })
                }
              >
                <option value="">Pilih produk</option>
                {productOptions.map((product) => (
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
                updateItems((prev) => {
                  const next = [...prev];
                  next[index] = {
                    ...next[index],
                    qty: Number(e.target.value || 1),
                  };
                  return next;
                })
              }
            />

            <div className="md:col-span-3">
              <Button
                variant="danger"
                onClick={() => updateItems((prev) => prev.filter((_, idx) => idx !== index))}
              >
                Hapus Item
              </Button>
            </div>
          </div>
        </Card>
      ))}

      <Button variant="outline" onClick={() => onChange([...(value ?? []), createEmptyBundleItem()])}>
        Tambah Bundle Item
      </Button>
    </div>
  );
}

export function mapBundleItemsFromProduct(product: {
  bundle_items?: Array<{
    bundled_product_id: number;
    qty?: number | string;
  }>;
}): ProductBundleItemPayload[] {
  if (!product.bundle_items?.length) {
    return [createEmptyBundleItem()];
  }

  return product.bundle_items.map((item) => ({
    bundled_product_id: item.bundled_product_id,
    qty: Number(item.qty ?? 1),
  }));
}

export function sanitizeBundleItems(value: ProductBundleItemPayload[]): ProductBundleItemPayload[] {
  return (value ?? []).filter((item) => item.bundled_product_id > 0);
}

export function validateBundleItems(
  value: ProductBundleItemPayload[],
  currentProductId: number
) {
  const sanitized = sanitizeBundleItems(value);

  if (!sanitized.length) {
    throw new Error("Produk bundle wajib memiliki minimal satu bundle item.");
  }

  const selfIncluded = sanitized.some(
    (item) => Number(item.bundled_product_id) === Number(currentProductId)
  );

  if (selfIncluded) {
    throw new Error("Produk bundle tidak boleh membundle dirinya sendiri.");
  }
}
```
</details>

<a id="file-srcmodulesadmincomponentsproduct-configproductconfigpagetsx"></a>
### src\modules\admin\components\product-config\ProductConfigPage.tsx
- SHA: `f9b6f538551c`  
- Ukuran: 6 KB
<details><summary><strong>Lihat Kode Lengkap</strong></summary>

```tsx
import { useMemo, useState, type ReactNode } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  catalogService,
  type ProductPayload,
} from "@/modules/admin/services/catalog.service";
import { PageHeader } from "@/components/navigation/PageHeader";
import { PermissionWrapper } from "@/components/navigation/PermissionWrapper";
import { PageErrorState } from "@/components/feedback/PageErrorState";
import { PageEmptyState } from "@/components/feedback/PageEmptyState";
import { Badge, Button, Card, Input, Modal } from "@/components/ui";
import { parseApiError } from "@/services/api/error-parser";
import { useToast } from "@/hooks/useToast";
import type { Product } from "@/types/product";

interface ProductConfigPageProps<TState> {
  title: string;
  description: string;
  queryKey: string;
  emptyTitle: string;
  searchPlaceholder: string;
  saveButtonLabel: string;
  getBadge: (product: Product) => { label: string; variant: "success" | "warning" | "info" | "danger" };
  renderSummary: (product: Product) => ReactNode;
  mapFromProduct: (product: Product) => TState;
  renderEditor: (args: {
    value: TState;
    onChange: (next: TState) => void;
    product: Product | null;
    products: Product[];
  }) => ReactNode;
  buildPayload: (args: { value: TState; product: Product }) => Partial<ProductPayload>;
  filterProducts?: (products: Product[]) => Product[];
}

export function ProductConfigPage<TState>({
  title,
  description,
  queryKey,
  emptyTitle,
  searchPlaceholder,
  saveButtonLabel,
  getBadge,
  renderSummary,
  mapFromProduct,
  renderEditor,
  buildPayload,
  filterProducts,
}: ProductConfigPageProps<TState>) {
  const toast = useToast();
  const queryClient = useQueryClient();

  const [search, setSearch] = useState("");
  const [open, setOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const [editorState, setEditorState] = useState<TState | null>(null);

  const productsQuery = useQuery({
    queryKey: [queryKey, search],
    queryFn: () => catalogService.getProducts({ per_page: 100, search }),
  });

  const allProducts = useMemo(() => productsQuery.data?.items ?? [], [productsQuery.data?.items]);
  const products = useMemo(
    () => (filterProducts ? filterProducts(allProducts) : allProducts),
    [allProducts, filterProducts]
  );

  const saveMutation = useMutation({
    mutationFn: async () => {
      if (!editingProduct || editorState === null) {
        throw new Error("Produk tidak dipilih");
      }

      const payload = buildPayload({
        value: editorState,
        product: editingProduct,
      });

      return catalogService.updateProduct(editingProduct.id, payload as ProductPayload);
    },
    onSuccess: (response) => {
      toast.success(response.message);
      setOpen(false);
      setEditingProduct(null);
      setEditorState(null);
      void queryClient.invalidateQueries({ queryKey: [queryKey] });
      void queryClient.invalidateQueries({ queryKey: ["admin-products"] });
    },
    onError: (error) => {
      toast.error(`Gagal menyimpan ${title.toLowerCase()}`, parseApiError(error));
    },
  });

  const openEditor = (product: Product) => {
    setEditingProduct(product);
    setEditorState(mapFromProduct(product));
    setOpen(true);
  };

  return (
    <PermissionWrapper permission="products.view">
      <div className="space-y-4">
        <PageHeader title={title} description={description} />

        <Card>
          <Input
            placeholder={searchPlaceholder}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </Card>

        {productsQuery.isLoading ? (
          <Card>Memuat data produk...</Card>
        ) : productsQuery.isError ? (
          <PageErrorState onRetry={() => void productsQuery.refetch()} />
        ) : !products.length ? (
          <PageEmptyState title={emptyTitle} />
        ) : (
          <div className="grid gap-4 lg:grid-cols-2">
            {products.map((product) => {
              const badge = getBadge(product);

              return (
                <Card
                  key={product.id}
                  title={product.name}
                  description={product.category?.name ?? "-"}
                  actions={<Badge variant={badge.variant}>{badge.label}</Badge>}
                >
                  <div className="space-y-2 text-sm text-slate-600">{renderSummary(product)}</div>

                  <div className="mt-4">
                    <Button onClick={() => openEditor(product)}>Kelola</Button>
                  </div>
                </Card>
              );
            })}
          </div>
        )}

        <Modal
          open={open}
          title={`${title}${editingProduct ? ` — ${editingProduct.name}` : ""}`}
          onClose={() => setOpen(false)}
          footer={
            <>
              <Button variant="outline" onClick={() => setOpen(false)}>
                Batal
              </Button>
              <Button loading={saveMutation.isPending} onClick={() => saveMutation.mutate()}>
                {saveButtonLabel}
              </Button>
            </>
          }
        >
          <div className="max-h-[70vh] overflow-y-auto pr-1">
            {editorState !== null
              ? renderEditor({
                  value: editorState,
                  onChange: setEditorState,
                  product: editingProduct,
                  products: allProducts,
                })
              : null}
          </div>
        </Modal>
      </div>
    </PermissionWrapper>
  );
}
```
</details>

<a id="file-srcmodulesadmincomponentsproduct-configproductmodifiergroupseditortsx"></a>
### src\modules\admin\components\product-config\ProductModifierGroupsEditor.tsx
- SHA: `b4403cb84072`  
- Ukuran: 10 KB
<details><summary><strong>Lihat Kode Lengkap</strong></summary>

```tsx
import { Button, Card, Checkbox, Input } from "@/components/ui";
import type { ProductModifierGroupPayload } from "@/modules/admin/services/catalog.service";

interface ProductModifierGroupsEditorProps {
  value: ProductModifierGroupPayload[];
  onChange: (next: ProductModifierGroupPayload[]) => void;
}

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

export function ProductModifierGroupsEditor({
  value,
  onChange,
}: ProductModifierGroupsEditorProps) {
  const updateGroups = (
    updater: (prev: ProductModifierGroupPayload[]) => ProductModifierGroupPayload[]
  ) => {
    onChange(updater(value));
  };

  return (
    <div className="space-y-4">
      {value.map((group, groupIndex) => (
        <Card key={groupIndex} title={`Modifier Group #${groupIndex + 1}`}>
          <div className="grid gap-4 md:grid-cols-4">
            <Input
              label="Nama Group"
              value={group.name}
              onChange={(e) =>
                updateGroups((prev) => {
                  const next = [...prev];
                  next[groupIndex] = { ...next[groupIndex], name: e.target.value };
                  return next;
                })
              }
            />

            <Input
              label="Min Select"
              type="number"
              value={String(group.min_select ?? 0)}
              onChange={(e) =>
                updateGroups((prev) => {
                  const next = [...prev];
                  next[groupIndex] = {
                    ...next[groupIndex],
                    min_select: Number(e.target.value || 0),
                  };
                  return next;
                })
              }
            />

            <Input
              label="Max Select"
              type="number"
              value={String(group.max_select ?? 1)}
              onChange={(e) =>
                updateGroups((prev) => {
                  const next = [...prev];
                  next[groupIndex] = {
                    ...next[groupIndex],
                    max_select: Number(e.target.value || 1),
                  };
                  return next;
                })
              }
            />

            <div className="flex items-end">
              <Button
                variant="danger"
                onClick={() => updateGroups((prev) => prev.filter((_, idx) => idx !== groupIndex))}
              >
                Hapus Group
              </Button>
            </div>

            <Input
              label="Sort Order"
              type="number"
              value={String(group.sort_order ?? 0)}
              onChange={(e) =>
                updateGroups((prev) => {
                  const next = [...prev];
                  next[groupIndex] = {
                    ...next[groupIndex],
                    sort_order: Number(e.target.value || 0),
                  };
                  return next;
                })
              }
            />

            <div className="md:col-span-3 flex items-end">
              <Checkbox
                label="Required"
                checked={Boolean(group.is_required)}
                onChange={(e) =>
                  updateGroups((prev) => {
                    const next = [...prev];
                    next[groupIndex] = {
                      ...next[groupIndex],
                      is_required: e.target.checked,
                    };
                    return next;
                  })
                }
              />
            </div>
          </div>

          <div className="mt-4 space-y-3">
            {group.options.map((option, optionIndex) => (
              <div
                key={optionIndex}
                className="grid gap-3 rounded-2xl border border-slate-200 p-4 md:grid-cols-4"
              >
                <Input
                  label="Option Name"
                  value={option.name}
                  onChange={(e) =>
                    updateGroups((prev) => {
                      const next = [...prev];
                      const options = [...next[groupIndex].options];
                      options[optionIndex] = {
                        ...options[optionIndex],
                        name: e.target.value,
                      };
                      next[groupIndex] = { ...next[groupIndex], options };
                      return next;
                    })
                  }
                />

                <Input
                  label="Price"
                  type="number"
                  value={String(option.price ?? 0)}
                  onChange={(e) =>
                    updateGroups((prev) => {
                      const next = [...prev];
                      const options = [...next[groupIndex].options];
                      options[optionIndex] = {
                        ...options[optionIndex],
                        price: Number(e.target.value || 0),
                      };
                      next[groupIndex] = { ...next[groupIndex], options };
                      return next;
                    })
                  }
                />

                <Input
                  label="Sort Order"
                  type="number"
                  value={String(option.sort_order ?? 0)}
                  onChange={(e) =>
                    updateGroups((prev) => {
                      const next = [...prev];
                      const options = [...next[groupIndex].options];
                      options[optionIndex] = {
                        ...options[optionIndex],
                        sort_order: Number(e.target.value || 0),
                      };
                      next[groupIndex] = { ...next[groupIndex], options };
                      return next;
                    })
                  }
                />

                <div className="flex items-end">
                  <Button
                    variant="danger"
                    onClick={() =>
                      updateGroups((prev) => {
                        const next = [...prev];
                        next[groupIndex] = {
                          ...next[groupIndex],
                          options: next[groupIndex].options.filter((_, idx) => idx !== optionIndex),
                        };
                        return next;
                      })
                    }
                  >
                    Hapus Option
                  </Button>
                </div>

                <div className="md:col-span-4">
                  <Checkbox
                    label="Option aktif"
                    checked={Boolean(option.is_active)}
                    onChange={(e) =>
                      updateGroups((prev) => {
                        const next = [...prev];
                        const options = [...next[groupIndex].options];
                        options[optionIndex] = {
                          ...options[optionIndex],
                          is_active: e.target.checked,
                        };
                        next[groupIndex] = { ...next[groupIndex], options };
                        return next;
                      })
                    }
                  />
                </div>
              </div>
            ))}

            <Button
              variant="outline"
              onClick={() =>
                updateGroups((prev) => {
                  const next = [...prev];
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
                  return next;
                })
              }
            >
              Tambah Option Modifier
            </Button>
          </div>
        </Card>
      ))}

      <Button variant="outline" onClick={() => onChange([...(value ?? []), createEmptyModifierGroup()])}>
        Tambah Modifier Group
      </Button>
    </div>
  );
}

export function mapModifierGroupsFromProduct(product: {
  modifier_groups?: Array<{
    name: string;
    min_select?: number;
    max_select?: number;
    is_required?: boolean;
    sort_order?: number;
    options?: Array<{
      name: string;
      price?: number | string;
      sort_order?: number;
      is_active?: boolean;
    }>;
  }>;
}): ProductModifierGroupPayload[] {
  if (!product.modifier_groups?.length) {
    return [createEmptyModifierGroup()];
  }

  return product.modifier_groups.map((group) => ({
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
  }));
}

export function sanitizeModifierGroups(
  value: ProductModifierGroupPayload[]
): ProductModifierGroupPayload[] {
  return (value ?? [])
    .filter((group) => group.name.trim() !== "")
    .map((group) => ({
      ...group,
      options: (group.options ?? []).filter((option) => option.name.trim() !== ""),
    }))
    .filter((group) => group.options.length > 0);
}

export function validateModifierGroups(value: ProductModifierGroupPayload[]) {
  const invalidGroup = (value ?? []).find(
    (group) => Number(group.max_select ?? 0) < Number(group.min_select ?? 0)
  );

  if (invalidGroup) {
    throw new Error("max_select tidak boleh lebih kecil dari min_select.");
  }
}
```
</details>

<a id="file-srcmodulesadmincomponentsproduct-configproductvariantgroupseditortsx"></a>
### src\modules\admin\components\product-config\ProductVariantGroupsEditor.tsx
- SHA: `56838f2ba75f`  
- Ukuran: 9 KB
<details><summary><strong>Lihat Kode Lengkap</strong></summary>

```tsx
import { Button, Card, Checkbox, Input } from "@/components/ui";
import type { ProductVariantGroupPayload } from "@/modules/admin/services/catalog.service";

interface ProductVariantGroupsEditorProps {
  value: ProductVariantGroupPayload[];
  onChange: (next: ProductVariantGroupPayload[]) => void;
}

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

export function ProductVariantGroupsEditor({
  value,
  onChange,
}: ProductVariantGroupsEditorProps) {
  const updateGroups = (updater: (prev: ProductVariantGroupPayload[]) => ProductVariantGroupPayload[]) => {
    onChange(updater(value));
  };

  return (
    <div className="space-y-4">
      {value.map((group, groupIndex) => (
        <Card key={groupIndex} title={`Variant Group #${groupIndex + 1}`}>
          <div className="grid gap-4 md:grid-cols-3">
            <Input
              label="Nama Group"
              value={group.name}
              onChange={(e) =>
                updateGroups((prev) => {
                  const next = [...prev];
                  next[groupIndex] = { ...next[groupIndex], name: e.target.value };
                  return next;
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
                  updateGroups((prev) => {
                    const next = [...prev];
                    next[groupIndex] = {
                      ...next[groupIndex],
                      selection_type: e.target.value as "single" | "multiple",
                    };
                    return next;
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
                onClick={() => updateGroups((prev) => prev.filter((_, idx) => idx !== groupIndex))}
              >
                Hapus Group
              </Button>
            </div>

            <Input
              label="Sort Order"
              type="number"
              value={String(group.sort_order ?? 0)}
              onChange={(e) =>
                updateGroups((prev) => {
                  const next = [...prev];
                  next[groupIndex] = {
                    ...next[groupIndex],
                    sort_order: Number(e.target.value || 0),
                  };
                  return next;
                })
              }
            />

            <div className="md:col-span-2 flex items-end">
              <Checkbox
                label="Required"
                checked={Boolean(group.is_required)}
                onChange={(e) =>
                  updateGroups((prev) => {
                    const next = [...prev];
                    next[groupIndex] = {
                      ...next[groupIndex],
                      is_required: e.target.checked,
                    };
                    return next;
                  })
                }
              />
            </div>
          </div>

          <div className="mt-4 space-y-3">
            {group.options.map((option, optionIndex) => (
              <div
                key={optionIndex}
                className="grid gap-3 rounded-2xl border border-slate-200 p-4 md:grid-cols-4"
              >
                <Input
                  label="Option Name"
                  value={option.name}
                  onChange={(e) =>
                    updateGroups((prev) => {
                      const next = [...prev];
                      const options = [...next[groupIndex].options];
                      options[optionIndex] = {
                        ...options[optionIndex],
                        name: e.target.value,
                      };
                      next[groupIndex] = { ...next[groupIndex], options };
                      return next;
                    })
                  }
                />

                <Input
                  label="Price Adjustment"
                  type="number"
                  value={String(option.price_adjustment ?? 0)}
                  onChange={(e) =>
                    updateGroups((prev) => {
                      const next = [...prev];
                      const options = [...next[groupIndex].options];
                      options[optionIndex] = {
                        ...options[optionIndex],
                        price_adjustment: Number(e.target.value || 0),
                      };
                      next[groupIndex] = { ...next[groupIndex], options };
                      return next;
                    })
                  }
                />

                <Input
                  label="Sort Order"
                  type="number"
                  value={String(option.sort_order ?? 0)}
                  onChange={(e) =>
                    updateGroups((prev) => {
                      const next = [...prev];
                      const options = [...next[groupIndex].options];
                      options[optionIndex] = {
                        ...options[optionIndex],
                        sort_order: Number(e.target.value || 0),
                      };
                      next[groupIndex] = { ...next[groupIndex], options };
                      return next;
                    })
                  }
                />

                <div className="flex items-end">
                  <Button
                    variant="danger"
                    onClick={() =>
                      updateGroups((prev) => {
                        const next = [...prev];
                        next[groupIndex] = {
                          ...next[groupIndex],
                          options: next[groupIndex].options.filter((_, idx) => idx !== optionIndex),
                        };
                        return next;
                      })
                    }
                  >
                    Hapus Option
                  </Button>
                </div>

                <div className="md:col-span-4">
                  <Checkbox
                    label="Option aktif"
                    checked={Boolean(option.is_active)}
                    onChange={(e) =>
                      updateGroups((prev) => {
                        const next = [...prev];
                        const options = [...next[groupIndex].options];
                        options[optionIndex] = {
                          ...options[optionIndex],
                          is_active: e.target.checked,
                        };
                        next[groupIndex] = { ...next[groupIndex], options };
                        return next;
                      })
                    }
                  />
                </div>
              </div>
            ))}

            <Button
              variant="outline"
              onClick={() =>
                updateGroups((prev) => {
                  const next = [...prev];
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
                  return next;
                })
              }
            >
              Tambah Option Variant
            </Button>
          </div>
        </Card>
      ))}

      <Button variant="outline" onClick={() => onChange([...(value ?? []), createEmptyVariantGroup()])}>
        Tambah Variant Group
      </Button>
    </div>
  );
}

export function mapVariantGroupsFromProduct(product: {
  variant_groups?: Array<{
    name: string;
    selection_type: "single" | "multiple";
    is_required?: boolean;
    sort_order?: number;
    options?: Array<{
      name: string;
      price_adjustment?: number | string;
      sort_order?: number;
      is_active?: boolean;
    }>;
  }>;
}): ProductVariantGroupPayload[] {
  if (!product.variant_groups?.length) {
    return [createEmptyVariantGroup()];
  }

  return product.variant_groups.map((group) => ({
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
  }));
}

export function sanitizeVariantGroups(value: ProductVariantGroupPayload[]): ProductVariantGroupPayload[] {
  return (value ?? [])
    .filter((group) => group.name.trim() !== "")
    .map((group) => ({
      ...group,
      options: (group.options ?? []).filter((option) => option.name.trim() !== ""),
    }))
    .filter((group) => group.options.length > 0);
}
```
</details>

<a id="file-srcmodulesadmincomponentspurchasinggoodsreceiptitemseditortsx"></a>
### src\modules\admin\components\purchasing\GoodsReceiptItemsEditor.tsx
- SHA: `7d8233c00ce7`  
- Ukuran: 7 KB
<details><summary><strong>Lihat Kode Lengkap</strong></summary>

```tsx
// src/modules/admin/components/purchasing/GoodsReceiptItemsEditor.tsx

import { Button, Card, Input } from "@/components/ui";
import type { GoodsReceiptItemPayload } from "@/modules/admin/services/purchasing.service";
import type { PurchaseOrder } from "@/types/purchasing";
import type { RawMaterial, Unit } from "@/types/inventory";

interface GoodsReceiptItemsEditorProps {
  value: GoodsReceiptItemPayload[];
  onChange: (next: GoodsReceiptItemPayload[]) => void;
  rawMaterials: RawMaterial[];
  units: Unit[];
  purchaseOrder: PurchaseOrder | null;
}

const createEmptyItem = (): GoodsReceiptItemPayload => ({
  raw_material_id: 0,
  qty_received: 1,
  unit_id: 0,
  unit_cost: 0,
  expired_at: null,
  notes: "",
});

export function GoodsReceiptItemsEditor({
  value,
  onChange,
  rawMaterials,
  units,
  purchaseOrder,
}: GoodsReceiptItemsEditorProps) {
  const updateItems = (
    updater: (prev: GoodsReceiptItemPayload[]) => GoodsReceiptItemPayload[]
  ) => {
    onChange(updater(value));
  };

  const getLineTotal = (item: GoodsReceiptItemPayload) => {
    return Math.max(0, Number(item.qty_received || 0) * Number(item.unit_cost || 0));
  };

  return (
    <div className="space-y-4">
      {value.map((item, index) => (
        <Card key={index} title={`Item Receipt #${index + 1}`}>
          <div className="grid gap-4 md:grid-cols-6">
            <div className="md:col-span-2">
              <label className="mb-2 block text-sm font-medium text-slate-700">
                Bahan Baku
              </label>
              <select
                className="w-full rounded-xl border border-slate-300 px-3 py-2 text-sm"
                value={item.raw_material_id || ""}
                onChange={(event) =>
                  updateItems((prev) => {
                    const next = [...prev];
                    const rawMaterialId = Number(event.target.value || 0);
                    const rawMaterial = rawMaterials.find((row) => row.id === rawMaterialId);
                    const poItem = purchaseOrder?.items?.find(
                      (row) => Number(row.raw_material_id) === rawMaterialId
                    );

                    next[index] = {
                      ...next[index],
                      raw_material_id: rawMaterialId,
                      unit_id: poItem?.unit_id ?? rawMaterial?.unit_id ?? next[index].unit_id,
                      unit_cost: Number(poItem?.unit_price ?? rawMaterial?.last_purchase_price ?? 0),
                      qty_received: Number(poItem?.qty_ordered ?? next[index].qty_received),
                    };

                    return next;
                  })
                }
              >
                <option value="">Pilih bahan baku</option>
                {rawMaterials.map((rawMaterial) => (
                  <option key={rawMaterial.id} value={rawMaterial.id}>
                    {rawMaterial.name}
                  </option>
                ))}
              </select>
            </div>

            <Input
              label="Qty Diterima"
              type="number"
              value={String(item.qty_received ?? 0)}
              onChange={(event) =>
                updateItems((prev) => {
                  const next = [...prev];
                  next[index] = {
                    ...next[index],
                    qty_received: Number(event.target.value || 0),
                  };
                  return next;
                })
              }
            />

            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">
                Satuan
              </label>
              <select
                className="w-full rounded-xl border border-slate-300 px-3 py-2 text-sm"
                value={item.unit_id || ""}
                onChange={(event) =>
                  updateItems((prev) => {
                    const next = [...prev];
                    next[index] = {
                      ...next[index],
                      unit_id: Number(event.target.value || 0),
                    };
                    return next;
                  })
                }
              >
                <option value="">Pilih satuan</option>
                {units.map((unit) => (
                  <option key={unit.id} value={unit.id}>
                    {unit.name} ({unit.code})
                  </option>
                ))}
              </select>
            </div>

            <Input
              label="Harga Terima"
              type="number"
              value={String(item.unit_cost ?? 0)}
              onChange={(event) =>
                updateItems((prev) => {
                  const next = [...prev];
                  next[index] = {
                    ...next[index],
                    unit_cost: Number(event.target.value || 0),
                  };
                  return next;
                })
              }
            />

            <Input
              label="Expired At"
              type="date"
              value={item.expired_at ?? ""}
              onChange={(event) =>
                updateItems((prev) => {
                  const next = [...prev];
                  next[index] = {
                    ...next[index],
                    expired_at: event.target.value || null,
                  };
                  return next;
                })
              }
            />

            <div className="md:col-span-4">
              <Input
                label="Catatan Item"
                value={item.notes ?? ""}
                onChange={(event) =>
                  updateItems((prev) => {
                    const next = [...prev];
                    next[index] = {
                      ...next[index],
                      notes: event.target.value,
                    };
                    return next;
                  })
                }
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">
                Subtotal
              </label>
              <div className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm font-semibold text-slate-900">
                Rp {getLineTotal(item).toLocaleString("id-ID")}
              </div>
            </div>

            <div className="flex items-end">
              <Button
                variant="danger"
                onClick={() => updateItems((prev) => prev.filter((_, idx) => idx !== index))}
              >
                Hapus
              </Button>
            </div>
          </div>
        </Card>
      ))}

      <Button variant="outline" onClick={() => onChange([...(value ?? []), createEmptyItem()])}>
        Tambah Item Receipt
      </Button>
    </div>
  );
}

export function mapGoodsReceiptItemsFromPurchaseOrder(
  purchaseOrder: PurchaseOrder | null
): GoodsReceiptItemPayload[] {
  if (!purchaseOrder?.items?.length) {
    return [createEmptyItem()];
  }

  return purchaseOrder.items.map((item) => ({
    raw_material_id: item.raw_material_id,
    qty_received: Number(item.qty_ordered ?? 0),
    unit_id: item.unit_id,
    unit_cost: Number(item.unit_price ?? 0),
    expired_at: null,
    notes: item.notes ?? "",
  }));
}

export function sanitizeGoodsReceiptItems(
  value: GoodsReceiptItemPayload[]
): GoodsReceiptItemPayload[] {
  return (value ?? []).filter(
    (item) =>
      Number(item.raw_material_id) > 0 &&
      Number(item.unit_id) > 0 &&
      Number(item.qty_received) > 0 &&
      Number(item.unit_cost) >= 0
  );
}
```
</details>

<a id="file-srcmodulesadmincomponentspurchasingpurchaseorderitemseditortsx"></a>
### src\modules\admin\components\purchasing\PurchaseOrderItemsEditor.tsx
- SHA: `f3f4cfb96460`  
- Ukuran: 7 KB
<details><summary><strong>Lihat Kode Lengkap</strong></summary>

```tsx
// src/modules/admin/components/purchasing/PurchaseOrderItemsEditor.tsx

import { Button, Card, Input } from "@/components/ui";
import type { PurchaseOrderItemPayload } from "@/modules/admin/services/purchasing.service";
import type { RawMaterial, Unit } from "@/types/inventory";

interface PurchaseOrderItemsEditorProps {
  value: PurchaseOrderItemPayload[];
  onChange: (next: PurchaseOrderItemPayload[]) => void;
  rawMaterials: RawMaterial[];
  units: Unit[];
}

const createEmptyItem = (): PurchaseOrderItemPayload => ({
  raw_material_id: 0,
  qty_ordered: 1,
  unit_id: 0,
  unit_price: 0,
  discount_amount: 0,
  notes: "",
});

export function PurchaseOrderItemsEditor({
  value,
  onChange,
  rawMaterials,
  units,
}: PurchaseOrderItemsEditorProps) {
  const updateItems = (
    updater: (prev: PurchaseOrderItemPayload[]) => PurchaseOrderItemPayload[]
  ) => {
    onChange(updater(value));
  };

  const getLineTotal = (item: PurchaseOrderItemPayload) => {
    return Math.max(
      0,
      Number(item.qty_ordered || 0) * Number(item.unit_price || 0) -
        Number(item.discount_amount || 0)
    );
  };

  return (
    <div className="space-y-4">
      {value.map((item, index) => (
        <Card key={index} title={`Item PO #${index + 1}`}>
          <div className="grid gap-4 md:grid-cols-6">
            <div className="md:col-span-2">
              <label className="mb-2 block text-sm font-medium text-slate-700">
                Bahan Baku
              </label>
              <select
                className="w-full rounded-xl border border-slate-300 px-3 py-2 text-sm"
                value={item.raw_material_id || ""}
                onChange={(event) =>
                  updateItems((prev) => {
                    const next = [...prev];
                    const rawMaterialId = Number(event.target.value || 0);
                    const rawMaterial = rawMaterials.find((row) => row.id === rawMaterialId);

                    next[index] = {
                      ...next[index],
                      raw_material_id: rawMaterialId,
                      unit_id: rawMaterial?.unit_id ?? next[index].unit_id,
                      unit_price: Number(rawMaterial?.last_purchase_price ?? next[index].unit_price),
                    };

                    return next;
                  })
                }
              >
                <option value="">Pilih bahan baku</option>
                {rawMaterials.map((rawMaterial) => (
                  <option key={rawMaterial.id} value={rawMaterial.id}>
                    {rawMaterial.name}
                  </option>
                ))}
              </select>
            </div>

            <Input
              label="Qty Order"
              type="number"
              value={String(item.qty_ordered ?? 0)}
              onChange={(event) =>
                updateItems((prev) => {
                  const next = [...prev];
                  next[index] = {
                    ...next[index],
                    qty_ordered: Number(event.target.value || 0),
                  };
                  return next;
                })
              }
            />

            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">
                Satuan
              </label>
              <select
                className="w-full rounded-xl border border-slate-300 px-3 py-2 text-sm"
                value={item.unit_id || ""}
                onChange={(event) =>
                  updateItems((prev) => {
                    const next = [...prev];
                    next[index] = {
                      ...next[index],
                      unit_id: Number(event.target.value || 0),
                    };
                    return next;
                  })
                }
              >
                <option value="">Pilih satuan</option>
                {units.map((unit) => (
                  <option key={unit.id} value={unit.id}>
                    {unit.name} ({unit.code})
                  </option>
                ))}
              </select>
            </div>

            <Input
              label="Harga Satuan"
              type="number"
              value={String(item.unit_price ?? 0)}
              onChange={(event) =>
                updateItems((prev) => {
                  const next = [...prev];
                  next[index] = {
                    ...next[index],
                    unit_price: Number(event.target.value || 0),
                  };
                  return next;
                })
              }
            />

            <Input
              label="Diskon"
              type="number"
              value={String(item.discount_amount ?? 0)}
              onChange={(event) =>
                updateItems((prev) => {
                  const next = [...prev];
                  next[index] = {
                    ...next[index],
                    discount_amount: Number(event.target.value || 0),
                  };
                  return next;
                })
              }
            />

            <div className="md:col-span-4">
              <Input
                label="Catatan Item"
                value={item.notes ?? ""}
                onChange={(event) =>
                  updateItems((prev) => {
                    const next = [...prev];
                    next[index] = {
                      ...next[index],
                      notes: event.target.value,
                    };
                    return next;
                  })
                }
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">
                Subtotal
              </label>
              <div className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm font-semibold text-slate-900">
                Rp {getLineTotal(item).toLocaleString("id-ID")}
              </div>
            </div>

            <div className="flex items-end">
              <Button
                variant="danger"
                onClick={() => updateItems((prev) => prev.filter((_, idx) => idx !== index))}
              >
                Hapus
              </Button>
            </div>
          </div>
        </Card>
      ))}

      <Button variant="outline" onClick={() => onChange([...(value ?? []), createEmptyItem()])}>
        Tambah Item PO
      </Button>
    </div>
  );
}

export function createInitialPurchaseOrderItems(): PurchaseOrderItemPayload[] {
  return [createEmptyItem()];
}

export function sanitizePurchaseOrderItems(
  value: PurchaseOrderItemPayload[]
): PurchaseOrderItemPayload[] {
  return (value ?? []).filter(
    (item) =>
      Number(item.raw_material_id) > 0 &&
      Number(item.unit_id) > 0 &&
      Number(item.qty_ordered) > 0 &&
      Number(item.unit_price) >= 0
  );
}
```
</details>

<a id="file-srcmodulesadminpagesgoodsreceiptspagetsx"></a>
### src\modules\admin\pages\GoodsReceiptsPage.tsx
- SHA: `6ce93a64cb35`  
- Ukuran: 25 KB
<details><summary><strong>Lihat Kode Lengkap</strong></summary>

```tsx
// src/modules/admin/pages/GoodsReceiptsPage.tsx

import { useMemo, useState } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { masterDataService } from "@/modules/admin/services/master-data.service";
import { inventoryService } from "@/modules/admin/services/inventory.service";
import {
    purchasingService,
    type GoodsReceiptItemPayload,
    type GoodsReceiptPayload,
} from "@/modules/admin/services/purchasing.service";
import {
    GoodsReceiptItemsEditor,
    mapGoodsReceiptItemsFromPurchaseOrder,
    sanitizeGoodsReceiptItems,
} from "@/modules/admin/components/purchasing/GoodsReceiptItemsEditor";
import { PageHeader } from "@/components/navigation/PageHeader";
import { PermissionWrapper } from "@/components/navigation/PermissionWrapper";
import { PageErrorState } from "@/components/feedback/PageErrorState";
import { PageEmptyState } from "@/components/feedback/PageEmptyState";
import { Badge, Button, Card, ConfirmDialog, Input, Modal } from "@/components/ui";
import { parseApiError } from "@/services/api/error-parser";
import { useToast } from "@/hooks/useToast";
import type { GoodsReceipt, GoodsReceiptStatus } from "@/types/purchasing";

const nowLocalInput = () => {
    const date = new Date();
    date.setMinutes(date.getMinutes() - date.getTimezoneOffset());
    return date.toISOString().slice(0, 16);
};

const initialForm: GoodsReceiptPayload = {
    purchase_order_id: 0,
    outlet_id: 0,
    received_date: nowLocalInput(),
    notes: "",
    items: [],
};

const statusVariant: Record<GoodsReceiptStatus, "success" | "warning" | "danger"> = {
    draft: "warning",
    posted: "success",
    cancelled: "danger",
};

export default function GoodsReceiptsPage() {
    const toast = useToast();
    const queryClient = useQueryClient();

    const [search, setSearch] = useState("");
    const [outletFilter, setOutletFilter] = useState<number | "">("");
    const [purchaseOrderFilter, setPurchaseOrderFilter] = useState<number | "">("");
    const [statusFilter, setStatusFilter] = useState<GoodsReceiptStatus | "">("");
    const [openModal, setOpenModal] = useState(false);
    const [detailReceipt, setDetailReceipt] = useState<GoodsReceipt | null>(null);
    const [editingReceipt, setEditingReceipt] = useState<GoodsReceipt | null>(null);
    const [deleteTarget, setDeleteTarget] = useState<GoodsReceipt | null>(null);
    const [form, setForm] = useState<GoodsReceiptPayload>(initialForm);

    const goodsReceiptsQuery = useQuery({
        queryKey: ["purchasing-goods-receipts", search, outletFilter, purchaseOrderFilter, statusFilter],
        queryFn: () =>
            purchasingService.getGoodsReceipts({
                per_page: 100,
                search,
                outlet_id: outletFilter,
                purchase_order_id: purchaseOrderFilter,
                status: statusFilter,
            }),
    });

    const outletsQuery = useQuery({
        queryKey: ["purchasing-gr-outlets"],
        queryFn: () => masterDataService.getOutlets({ per_page: 100 }),
    });

    const purchaseOrdersQuery = useQuery({
        queryKey: ["purchasing-gr-purchase-orders"],
        queryFn: () =>
            purchasingService.getPurchaseOrders({
                per_page: 100,
                status: "",
            }),
    });

    const rawMaterialsQuery = useQuery({
        queryKey: ["purchasing-gr-raw-materials"],
        queryFn: () => inventoryService.getRawMaterials({ per_page: 100 }),
    });

    const unitsQuery = useQuery({
        queryKey: ["purchasing-gr-units"],
        queryFn: () => inventoryService.getUnits({ per_page: 100 }),
    });

    const receipts = goodsReceiptsQuery.data?.items ?? [];
    const outlets = outletsQuery.data?.items ?? [];
    const purchaseOrders = purchaseOrdersQuery.data?.items ?? [];
    const rawMaterials = rawMaterialsQuery.data?.items ?? [];
    const units = unitsQuery.data?.items ?? [];

    const selectedPurchaseOrder = useMemo(() => {
        return purchaseOrders.find((row) => Number(row.id) === Number(form.purchase_order_id)) ?? null;
    }, [form.purchase_order_id, purchaseOrders]);

    const formTotal = useMemo(() => {
        return sanitizeGoodsReceiptItems(form.items).reduce((total, item) => {
            return total + Math.max(0, Number(item.qty_received || 0) * Number(item.unit_cost || 0));
        }, 0);
    }, [form.items]);

    const saveMutation = useMutation({
        mutationFn: (payload: GoodsReceiptPayload) => {
            const sanitizedPayload = {
                ...payload,
                items: sanitizeGoodsReceiptItems(payload.items),
            };

            if (editingReceipt) {
                return purchasingService.updateGoodsReceipt(editingReceipt.id, sanitizedPayload);
            }

            return purchasingService.createGoodsReceipt(sanitizedPayload);
        },
        onSuccess: (response) => {
            toast.success(response.message);
            setOpenModal(false);
            setEditingReceipt(null);
            setForm(initialForm);
            void queryClient.invalidateQueries({ queryKey: ["purchasing-goods-receipts"] });
            void queryClient.invalidateQueries({ queryKey: ["purchasing-purchase-orders"] });
        },
        onError: (error) => toast.error("Gagal menyimpan goods receipt", parseApiError(error)),
    });

    const postMutation = useMutation({
        mutationFn: (receipt: GoodsReceipt) => purchasingService.postGoodsReceipt(receipt.id),
        onSuccess: (response) => {
            toast.success(response.message);
            void queryClient.invalidateQueries({ queryKey: ["purchasing-goods-receipts"] });
            void queryClient.invalidateQueries({ queryKey: ["inventory-outlet-material-stocks"] });
        },
        onError: (error) => toast.error("Gagal posting goods receipt", parseApiError(error)),
    });

    const cancelMutation = useMutation({
        mutationFn: (receipt: GoodsReceipt) => purchasingService.cancelGoodsReceipt(receipt.id),
        onSuccess: (response) => {
            toast.success(response.message);
            void queryClient.invalidateQueries({ queryKey: ["purchasing-goods-receipts"] });
        },
        onError: (error) => toast.error("Gagal membatalkan goods receipt", parseApiError(error)),
    });

    const deleteMutation = useMutation({
        mutationFn: (receipt: GoodsReceipt) => purchasingService.deleteGoodsReceipt(receipt.id),
        onSuccess: (response) => {
            toast.success(response.message);
            setDeleteTarget(null);
            void queryClient.invalidateQueries({ queryKey: ["purchasing-goods-receipts"] });
        },
        onError: (error) => toast.error("Gagal menghapus goods receipt", parseApiError(error)),
    });

    const openCreate = () => {
        setEditingReceipt(null);
        setForm({
            ...initialForm,
            received_date: nowLocalInput(),
            items: mapGoodsReceiptItemsFromPurchaseOrder(null),
        });
        setOpenModal(true);
    };

    const openEdit = (receipt: GoodsReceipt) => {
        const purchaseOrder = receipt.purchase_order ?? receipt.purchaseOrder ?? null;

        setEditingReceipt(receipt);
        setForm({
            purchase_order_id: receipt.purchase_order_id,
            outlet_id: receipt.outlet_id,
            received_date: receipt.received_date?.slice(0, 16) ?? nowLocalInput(),
            notes: receipt.notes ?? "",
            items:
                receipt.items?.map((item) => ({
                    raw_material_id: item.raw_material_id,
                    qty_received: Number(item.qty_received ?? 0),
                    unit_id: item.unit_id,
                    unit_cost: Number(item.unit_cost ?? 0),
                    expired_at: item.expired_at,
                    notes: item.notes ?? "",
                })) ?? mapGoodsReceiptItemsFromPurchaseOrder(purchaseOrder),
        });
        setOpenModal(true);
    };

    const handlePurchaseOrderChange = (purchaseOrderId: number) => {
        const purchaseOrder = purchaseOrders.find((row) => Number(row.id) === Number(purchaseOrderId));

        setForm((prev) => ({
            ...prev,
            purchase_order_id: purchaseOrderId,
            outlet_id: purchaseOrder?.outlet_id ?? prev.outlet_id,
            items: mapGoodsReceiptItemsFromPurchaseOrder(purchaseOrder ?? null),
        }));
    };

    return (
        <PermissionWrapper permission="goods_receipts.view">
            <div className="space-y-4">
                <PageHeader
                    title="Goods Receipt"
                    description="Kelola penerimaan bahan baku dari purchase order."
                    actions={<Button onClick={openCreate}>Buat Receipt</Button>}
                />

                <Card>
                    <div className="grid gap-4 md:grid-cols-4">
                        <Input
                            placeholder="Cari nomor receipt atau PO..."
                            value={search}
                            onChange={(event) => setSearch(event.target.value)}
                        />

                        <select
                            className="w-full rounded-xl border border-slate-300 px-3 py-2 text-sm"
                            value={outletFilter}
                            onChange={(event) =>
                                setOutletFilter(event.target.value ? Number(event.target.value) : "")
                            }
                        >
                            <option value="">Semua outlet</option>
                            {outlets.map((outlet) => (
                                <option key={outlet.id} value={outlet.id}>
                                    {outlet.name}
                                </option>
                            ))}
                        </select>

                        <select
                            className="w-full rounded-xl border border-slate-300 px-3 py-2 text-sm"
                            value={purchaseOrderFilter}
                            onChange={(event) =>
                                setPurchaseOrderFilter(event.target.value ? Number(event.target.value) : "")
                            }
                        >
                            <option value="">Semua PO</option>
                            {purchaseOrders.map((order) => (
                                <option key={order.id} value={order.id}>
                                    {order.po_number}
                                </option>
                            ))}
                        </select>

                        <select
                            className="w-full rounded-xl border border-slate-300 px-3 py-2 text-sm"
                            value={statusFilter}
                            onChange={(event) => setStatusFilter(event.target.value as GoodsReceiptStatus | "")}
                        >
                            <option value="">Semua status</option>
                            <option value="draft">draft</option>
                            <option value="posted">posted</option>
                            <option value="cancelled">cancelled</option>
                        </select>
                    </div>
                </Card>

                {goodsReceiptsQuery.isLoading ? (
                    <Card>Memuat goods receipt...</Card>
                ) : goodsReceiptsQuery.isError ? (
                    <PageErrorState onRetry={() => void goodsReceiptsQuery.refetch()} />
                ) : !receipts.length ? (
                    <PageEmptyState title="Belum ada goods receipt" />
                ) : (
                    <div className="grid gap-4 xl:grid-cols-2">
                        {receipts.map((receipt) => {
                            const purchaseOrder = receipt.purchase_order ?? receipt.purchaseOrder ?? null;

                            return (
                                <Card
                                    key={receipt.id}
                                    title={receipt.receipt_number}
                                    description={`${receipt.outlet?.name ?? "-"} • ${purchaseOrder?.po_number ?? "-"
                                        }`}
                                    actions={<Badge variant={statusVariant[receipt.status]}>{receipt.status}</Badge>}
                                >
                                    <div className="grid gap-3 text-sm text-slate-600 md:grid-cols-2">
                                        <div>
                                            <div className="text-xs text-slate-500">Received Date</div>
                                            <div>{receipt.received_date}</div>
                                        </div>

                                        <div>
                                            <div className="text-xs text-slate-500">Supplier</div>
                                            <div>{purchaseOrder?.supplier?.name ?? "-"}</div>
                                        </div>

                                        <div className="md:col-span-2">
                                            <div className="text-xs text-slate-500">Notes</div>
                                            <div>{receipt.notes ?? "-"}</div>
                                        </div>
                                    </div>

                                    <div className="mt-4 flex flex-wrap gap-2">
                                        <Button variant="outline" onClick={() => setDetailReceipt(receipt)}>
                                            Detail
                                        </Button>

                                        {receipt.status === "draft" ? (
                                            <>
                                                <Button variant="outline" onClick={() => openEdit(receipt)}>
                                                    Edit
                                                </Button>
                                                <Button
                                                    loading={postMutation.isPending}
                                                    onClick={() => postMutation.mutate(receipt)}
                                                >
                                                    Post
                                                </Button>
                                                <Button
                                                    variant="danger"
                                                    loading={cancelMutation.isPending}
                                                    onClick={() => cancelMutation.mutate(receipt)}
                                                >
                                                    Cancel
                                                </Button>
                                                <Button variant="danger" onClick={() => setDeleteTarget(receipt)}>
                                                    Hapus
                                                </Button>
                                            </>
                                        ) : null}
                                    </div>
                                </Card>
                            );
                        })}
                    </div>
                )}

                <Modal
                    open={openModal}
                    title={editingReceipt ? "Edit Goods Receipt" : "Buat Goods Receipt"}
                    onClose={() => setOpenModal(false)}
                    footer={
                        <>
                            <Button variant="outline" onClick={() => setOpenModal(false)}>
                                Batal
                            </Button>
                            <Button loading={saveMutation.isPending} onClick={() => saveMutation.mutate(form)}>
                                Simpan
                            </Button>
                        </>
                    }
                >
                    <div className="space-y-4">
                        <div className="grid gap-4 md:grid-cols-2">
                            <div>
                                <label className="mb-2 block text-sm font-medium text-slate-700">
                                    Purchase Order
                                </label>
                                <select
                                    className="w-full rounded-xl border border-slate-300 px-3 py-2 text-sm"
                                    value={form.purchase_order_id || ""}
                                    onChange={(event) => handlePurchaseOrderChange(Number(event.target.value || 0))}
                                >
                                    <option value="">Pilih PO</option>
                                    {purchaseOrders.map((order) => (
                                        <option key={order.id} value={order.id}>
                                            {order.po_number} - {order.supplier?.name ?? "-"}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            <div>
                                <label className="mb-2 block text-sm font-medium text-slate-700">
                                    Outlet
                                </label>
                                <select
                                    className="w-full rounded-xl border border-slate-300 px-3 py-2 text-sm"
                                    value={form.outlet_id || ""}
                                    onChange={(event) =>
                                        setForm((prev) => ({
                                            ...prev,
                                            outlet_id: Number(event.target.value || 0),
                                        }))
                                    }
                                >
                                    <option value="">Pilih outlet</option>
                                    {outlets.map((outlet) => (
                                        <option key={outlet.id} value={outlet.id}>
                                            {outlet.name}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            <Input
                                label="Received Date"
                                type="datetime-local"
                                value={form.received_date}
                                onChange={(event) =>
                                    setForm((prev) => ({
                                        ...prev,
                                        received_date: event.target.value,
                                    }))
                                }
                            />

                            <Input
                                label="Catatan"
                                value={form.notes ?? ""}
                                onChange={(event) =>
                                    setForm((prev) => ({
                                        ...prev,
                                        notes: event.target.value,
                                    }))
                                }
                            />
                        </div>

                        <GoodsReceiptItemsEditor
                            value={form.items}
                            onChange={(items: GoodsReceiptItemPayload[]) =>
                                setForm((prev) => ({
                                    ...prev,
                                    items,
                                }))
                            }
                            rawMaterials={rawMaterials}
                            units={units}
                            purchaseOrder={selectedPurchaseOrder}
                        />

                        <Card>
                            <div className="text-sm">
                                <div className="text-xs text-slate-500">Estimasi Total Receipt</div>
                                <div className="text-lg font-bold text-slate-900">
                                    Rp {formTotal.toLocaleString("id-ID")}
                                </div>
                            </div>
                        </Card>
                    </div>
                </Modal>

                <Modal
                    open={Boolean(detailReceipt)}
                    title={`Detail Receipt ${detailReceipt?.receipt_number ?? ""}`}
                    onClose={() => setDetailReceipt(null)}
                    footer={
                        <Button variant="outline" onClick={() => setDetailReceipt(null)}>
                            Tutup
                        </Button>
                    }
                >
                    <div className="space-y-4">
                        <Card>
                            <div className="grid gap-3 text-sm md:grid-cols-2">
                                <div>
                                    <div className="text-xs text-slate-500">Outlet</div>
                                    <div>{detailReceipt?.outlet?.name ?? "-"}</div>
                                </div>

                                <div>
                                    <div className="text-xs text-slate-500">PO</div>
                                    <div>
                                        {detailReceipt?.purchase_order?.po_number ??
                                            detailReceipt?.purchaseOrder?.po_number ??
                                            "-"}
                                    </div>
                                </div>

                                <div>
                                    <div className="text-xs text-slate-500">Status</div>
                                    <div>{detailReceipt?.status ?? "-"}</div>
                                </div>

                                <div>
                                    <div className="text-xs text-slate-500">Received Date</div>
                                    <div>{detailReceipt?.received_date ?? "-"}</div>
                                </div>

                                <div className="md:col-span-2">
                                    <div className="text-xs text-slate-500">Notes</div>
                                    <div>{detailReceipt?.notes ?? "-"}</div>
                                </div>
                            </div>
                        </Card>

                        <div className="space-y-3">
                            {detailReceipt?.items?.map((item) => (
                                <Card
                                    key={item.id}
                                    title={item.raw_material?.name ?? item.rawMaterial?.name ?? "-"}
                                    description={`${Number(item.qty_received ?? 0).toLocaleString("id-ID")} ${item.unit?.code ?? ""
                                        }`}
                                >
                                    <div className="grid gap-3 text-sm md:grid-cols-3">
                                        <div>
                                            <div className="text-xs text-slate-500">Unit Cost</div>
                                            <div>Rp {Number(item.unit_cost ?? 0).toLocaleString("id-ID")}</div>
                                        </div>

                                        <div>
                                            <div className="text-xs text-slate-500">Expired</div>
                                            <div>{item.expired_at ?? "-"}</div>
                                        </div>

                                        <div>
                                            <div className="text-xs text-slate-500">Line Total</div>
                                            <div className="font-semibold text-slate-900">
                                                Rp {Number(item.line_total ?? 0).toLocaleString("id-ID")}
                                            </div>
                                        </div>
                                    </div>
                                </Card>
                            ))}
                        </div>
                    </div>
                </Modal>

                <ConfirmDialog
                    open={Boolean(deleteTarget)}
                    title="Hapus goods receipt?"
                    description={`Receipt ${deleteTarget?.receipt_number ?? ""} akan dihapus.`}
                    confirmText="Hapus"
                    confirmVariant="danger"
                    loading={deleteMutation.isPending}
                    onClose={() => setDeleteTarget(null)}
                    onConfirm={() => {
                        if (deleteTarget) {
                            deleteMutation.mutate(deleteTarget);
                        }
                    }}
                />
            </div>
        </PermissionWrapper>
    );
}

```
</details>

<a id="file-srcmodulesadminpagesoutletmaterialstockspagetsx"></a>
### src\modules\admin\pages\OutletMaterialStocksPage.tsx
- SHA: `8632fd757ac1`  
- Ukuran: 11 KB
<details><summary><strong>Lihat Kode Lengkap</strong></summary>

```tsx
import { useState } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  inventoryService,
  type OutletMaterialStockPayload,
} from "@/modules/admin/services/inventory.service";
import { masterDataService } from "@/modules/admin/services/master-data.service";
import { PageHeader } from "@/components/navigation/PageHeader";
import { PermissionWrapper } from "@/components/navigation/PermissionWrapper";
import { PageErrorState } from "@/components/feedback/PageErrorState";
import { PageEmptyState } from "@/components/feedback/PageEmptyState";
import { Badge, Button, Card, Input, Modal } from "@/components/ui";
import { parseApiError } from "@/services/api/error-parser";
import { useToast } from "@/hooks/useToast";
import type { OutletMaterialStock } from "@/types/inventory";

const initialForm: OutletMaterialStockPayload = {
  outlet_id: 0,
  raw_material_id: 0,
  qty_on_hand: 0,
  qty_reserved: 0,
  last_movement_at: null,
};

export default function OutletMaterialStocksPage() {
  const toast = useToast();
  const queryClient = useQueryClient();

  const [search, setSearch] = useState("");
  const [outletFilter, setOutletFilter] = useState<number | "">("");
  const [rawMaterialFilter, setRawMaterialFilter] = useState<number | "">("");
  const [openModal, setOpenModal] = useState(false);
  const [editingStock, setEditingStock] = useState<OutletMaterialStock | null>(null);
  const [form, setForm] = useState<OutletMaterialStockPayload>(initialForm);

  const stocksQuery = useQuery({
    queryKey: ["inventory-outlet-material-stocks", search, outletFilter, rawMaterialFilter],
    queryFn: () =>
      inventoryService.getOutletMaterialStocks({
        per_page: 100,
        search,
        outlet_id: outletFilter,
        raw_material_id: rawMaterialFilter,
      }),
  });

  const outletsQuery = useQuery({
    queryKey: ["inventory-stock-outlets"],
    queryFn: () => masterDataService.getOutlets({ per_page: 100 }),
  });

  const rawMaterialsQuery = useQuery({
    queryKey: ["inventory-stock-raw-materials"],
    queryFn: () => inventoryService.getRawMaterials({ per_page: 100 }),
  });

  const stocks = stocksQuery.data?.items ?? [];
  const outlets = outletsQuery.data?.items ?? [];
  const rawMaterials = rawMaterialsQuery.data?.items ?? [];

  const saveMutation = useMutation({
    mutationFn: (payload: OutletMaterialStockPayload) =>
      inventoryService.upsertOutletMaterialStock(payload),
    onSuccess: (response) => {
      toast.success(response.message);
      setOpenModal(false);
      setEditingStock(null);
      setForm(initialForm);
      void queryClient.invalidateQueries({
        queryKey: ["inventory-outlet-material-stocks"],
      });
    },
    onError: (error) => toast.error("Gagal menyimpan stok outlet", parseApiError(error)),
  });

  const openCreate = () => {
    setEditingStock(null);
    setForm(initialForm);
    setOpenModal(true);
  };

  const openEdit = (stock: OutletMaterialStock) => {
    setEditingStock(stock);
    setForm({
      outlet_id: stock.outlet_id,
      raw_material_id: stock.raw_material_id,
      qty_on_hand: Number(stock.qty_on_hand ?? 0),
      qty_reserved: Number(stock.qty_reserved ?? 0),
      last_movement_at: stock.last_movement_at ?? null,
    });
    setOpenModal(true);
  };

  const getRawMaterial = (stock: OutletMaterialStock) => {
    return stock.raw_material ?? stock.rawMaterial ?? null;
  };

  const getStockVariant = (stock: OutletMaterialStock) => {
    const rawMaterial = getRawMaterial(stock);
    const minimumStock = Number(rawMaterial?.minimum_stock ?? 0);
    const qtyOnHand = Number(stock.qty_on_hand ?? 0);

    if (qtyOnHand <= minimumStock) {
      return "danger";
    }

    return "success";
  };

  return (
    <PermissionWrapper permission="outlet_material_stocks.view">
      <div className="space-y-4">
        <PageHeader
          title="Stok Bahan Per Outlet"
          description="Pantau dan update saldo stok bahan baku per outlet."
          actions={<Button onClick={openCreate}>Update Stok</Button>}
        />

        <Card>
          <div className="grid gap-4 md:grid-cols-3">
            <Input
              placeholder="Cari bahan atau outlet..."
              value={search}
              onChange={(event) => setSearch(event.target.value)}
            />

            <select
              className="w-full rounded-xl border border-slate-300 px-3 py-2 text-sm"
              value={outletFilter}
              onChange={(event) =>
                setOutletFilter(event.target.value ? Number(event.target.value) : "")
              }
            >
              <option value="">Semua outlet</option>
              {outlets.map((outlet) => (
                <option key={outlet.id} value={outlet.id}>
                  {outlet.name} ({outlet.code})
                </option>
              ))}
            </select>

            <select
              className="w-full rounded-xl border border-slate-300 px-3 py-2 text-sm"
              value={rawMaterialFilter}
              onChange={(event) =>
                setRawMaterialFilter(event.target.value ? Number(event.target.value) : "")
              }
            >
              <option value="">Semua bahan</option>
              {rawMaterials.map((rawMaterial) => (
                <option key={rawMaterial.id} value={rawMaterial.id}>
                  {rawMaterial.name}
                </option>
              ))}
            </select>
          </div>
        </Card>

        {stocksQuery.isLoading ? (
          <Card>Memuat stok bahan per outlet...</Card>
        ) : stocksQuery.isError ? (
          <PageErrorState onRetry={() => void stocksQuery.refetch()} />
        ) : !stocks.length ? (
          <PageEmptyState title="Belum ada data stok outlet" />
        ) : (
          <div className="grid gap-4 lg:grid-cols-2">
            {stocks.map((stock) => {
              const rawMaterial = getRawMaterial(stock);

              return (
                <Card
                  key={stock.id}
                  title={rawMaterial?.name ?? "-"}
                  description={stock.outlet?.name ?? "-"}
                  actions={
                    <Badge variant={getStockVariant(stock)}>
                      {getStockVariant(stock) === "danger" ? "Low Stock" : "Aman"}
                    </Badge>
                  }
                >
                  <div className="grid gap-3 text-sm text-slate-600 md:grid-cols-2">
                    <div>
                      <div className="text-xs text-slate-500">Qty On Hand</div>
                      <div className="text-lg font-semibold text-slate-900">
                        {Number(stock.qty_on_hand ?? 0).toLocaleString("id-ID")}{" "}
                        {rawMaterial?.unit?.code ?? ""}
                      </div>
                    </div>

                    <div>
                      <div className="text-xs text-slate-500">Qty Reserved</div>
                      <div className="text-lg font-semibold text-slate-900">
                        {Number(stock.qty_reserved ?? 0).toLocaleString("id-ID")}{" "}
                        {rawMaterial?.unit?.code ?? ""}
                      </div>
                    </div>

                    <div>
                      <div className="text-xs text-slate-500">Minimum Stok</div>
                      <div>{Number(rawMaterial?.minimum_stock ?? 0).toLocaleString("id-ID")}</div>
                    </div>

                    <div>
                      <div className="text-xs text-slate-500">Last Movement</div>
                      <div>{stock.last_movement_at ?? "-"}</div>
                    </div>
                  </div>

                  <div className="mt-4">
                    <Button variant="outline" onClick={() => openEdit(stock)}>
                      Edit Stok
                    </Button>
                  </div>
                </Card>
              );
            })}
          </div>
        )}

        <Modal
          open={openModal}
          title={editingStock ? "Edit Stok Outlet" : "Update Stok Outlet"}
          onClose={() => setOpenModal(false)}
          footer={
            <>
              <Button variant="outline" onClick={() => setOpenModal(false)}>
                Batal
              </Button>
              <Button loading={saveMutation.isPending} onClick={() => saveMutation.mutate(form)}>
                Simpan
              </Button>
            </>
          }
        >
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">
                Outlet
              </label>
              <select
                className="w-full rounded-xl border border-slate-300 px-3 py-2 text-sm"
                value={form.outlet_id || ""}
                onChange={(event) =>
                  setForm((prev) => ({
                    ...prev,
                    outlet_id: Number(event.target.value || 0),
                  }))
                }
              >
                <option value="">Pilih outlet</option>
                {outlets.map((outlet) => (
                  <option key={outlet.id} value={outlet.id}>
                    {outlet.name} ({outlet.code})
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">
                Bahan Baku
              </label>
              <select
                className="w-full rounded-xl border border-slate-300 px-3 py-2 text-sm"
                value={form.raw_material_id || ""}
                onChange={(event) =>
                  setForm((prev) => ({
                    ...prev,
                    raw_material_id: Number(event.target.value || 0),
                  }))
                }
              >
                <option value="">Pilih bahan baku</option>
                {rawMaterials.map((rawMaterial) => (
                  <option key={rawMaterial.id} value={rawMaterial.id}>
                    {rawMaterial.name}
                  </option>
                ))}
              </select>
            </div>

            <Input
              label="Qty On Hand"
              type="number"
              value={String(form.qty_on_hand ?? 0)}
              onChange={(event) =>
                setForm((prev) => ({
                  ...prev,
                  qty_on_hand: Number(event.target.value || 0),
                }))
              }
            />

            <Input
              label="Qty Reserved"
              type="number"
              value={String(form.qty_reserved ?? 0)}
              onChange={(event) =>
                setForm((prev) => ({
                  ...prev,
                  qty_reserved: Number(event.target.value || 0),
                }))
              }
            />
          </div>
        </Modal>
      </div>
    </PermissionWrapper>
  );
}
```
</details>

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

<a id="file-srcmodulesadminpagesproductbomspagetsx"></a>
### src\modules\admin\pages\ProductBomsPage.tsx
- SHA: `9e1b0f83ac42`  
- Ukuran: 10 KB
<details><summary><strong>Lihat Kode Lengkap</strong></summary>

```tsx
import { useState } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { catalogService } from "@/modules/admin/services/catalog.service";
import {
  inventoryService,
  type ProductBomItemPayload,
  type ProductBomPayload,
} from "@/modules/admin/services/inventory.service";
import {
  BomItemsEditor,
  createInitialBomItems,
  sanitizeBomItems,
} from "@/modules/admin/components/inventory/BomItemsEditor";
import { PageHeader } from "@/components/navigation/PageHeader";
import { PermissionWrapper } from "@/components/navigation/PermissionWrapper";
import { PageErrorState } from "@/components/feedback/PageErrorState";
import { PageEmptyState } from "@/components/feedback/PageEmptyState";
import { Badge, Button, Card, Checkbox, Input, Modal } from "@/components/ui";
import { parseApiError } from "@/services/api/error-parser";
import { useToast } from "@/hooks/useToast";
import type { ProductBom } from "@/types/inventory";

interface BomFormState {
  product_id: number;
  version: number;
  is_active: boolean;
  notes: string;
  items: ProductBomItemPayload[];
}

const initialForm: BomFormState = {
  product_id: 0,
  version: 1,
  is_active: true,
  notes: "",
  items: createInitialBomItems(),
};

export default function ProductBomsPage() {
  const toast = useToast();
  const queryClient = useQueryClient();

  const [search, setSearch] = useState("");
  const [productFilter, setProductFilter] = useState<number | "">("");
  const [openModal, setOpenModal] = useState(false);
  const [editingBom, setEditingBom] = useState<ProductBom | null>(null);
  const [form, setForm] = useState<BomFormState>(initialForm);

  const bomsQuery = useQuery({
    queryKey: ["inventory-product-boms", search, productFilter],
    queryFn: () =>
      inventoryService.getProductBoms({
        per_page: 100,
        search,
        product_id: productFilter,
      }),
  });

  const productsQuery = useQuery({
    queryKey: ["inventory-bom-products"],
    queryFn: () => catalogService.getProducts({ per_page: 100 }),
  });

  const rawMaterialsQuery = useQuery({
    queryKey: ["inventory-bom-raw-materials"],
    queryFn: () => inventoryService.getRawMaterials({ per_page: 100, is_active: true }),
  });

  const unitsQuery = useQuery({
    queryKey: ["inventory-bom-units"],
    queryFn: () => inventoryService.getUnits({ per_page: 100 }),
  });

  const boms = bomsQuery.data?.items ?? [];
  const products = productsQuery.data?.items ?? [];
  const rawMaterials = rawMaterialsQuery.data?.items ?? [];
  const units = unitsQuery.data?.items ?? [];

  const saveMutation = useMutation({
    mutationFn: (payload: ProductBomPayload) =>
      editingBom
        ? inventoryService.updateProductBom(editingBom.id, payload)
        : inventoryService.createProductBom(payload),
    onSuccess: (response) => {
      toast.success(response.message);
      setOpenModal(false);
      setEditingBom(null);
      setForm(initialForm);
      void queryClient.invalidateQueries({ queryKey: ["inventory-product-boms"] });
    },
    onError: (error) => toast.error("Gagal menyimpan BOM produk", parseApiError(error)),
  });

  const deleteMutation = useMutation({
    mutationFn: (id: number) => inventoryService.deleteProductBom(id),
    onSuccess: (response) => {
      toast.success(response.message);
      void queryClient.invalidateQueries({ queryKey: ["inventory-product-boms"] });
    },
    onError: (error) => toast.error("Gagal menghapus BOM produk", parseApiError(error)),
  });

  const openCreate = () => {
    setEditingBom(null);
    setForm(initialForm);
    setOpenModal(true);
  };

  const openEdit = (bom: ProductBom) => {
    setEditingBom(bom);
    setForm({
      product_id: bom.product_id,
      version: Number(bom.version ?? 1),
      is_active: bom.is_active,
      notes: bom.notes ?? "",
      items: bom.items?.length
        ? bom.items.map((item) => ({
            raw_material_id: item.raw_material_id,
            unit_id: item.unit_id,
            qty: Number(item.qty ?? 0),
            waste_percent: Number(item.waste_percent ?? 0),
          }))
        : createInitialBomItems(),
    });
    setOpenModal(true);
  };

  const submitForm = () => {
    const payload: ProductBomPayload = {
      product_id: form.product_id,
      version: form.version,
      is_active: form.is_active,
      notes: form.notes || null,
      items: sanitizeBomItems(form.items),
    };

    saveMutation.mutate(payload);
  };

  return (
    <PermissionWrapper permission="product_boms.view">
      <div className="space-y-4">
        <PageHeader
          title="BOM / Resep Produk"
          description="Kelola komposisi bahan baku untuk setiap produk."
          actions={<Button onClick={openCreate}>Tambah BOM</Button>}
        />

        <Card>
          <div className="grid gap-4 md:grid-cols-2">
            <Input
              placeholder="Cari BOM..."
              value={search}
              onChange={(event) => setSearch(event.target.value)}
            />

            <select
              className="w-full rounded-xl border border-slate-300 px-3 py-2 text-sm"
              value={productFilter}
              onChange={(event) =>
                setProductFilter(event.target.value ? Number(event.target.value) : "")
              }
            >
              <option value="">Semua produk</option>
              {products.map((product) => (
                <option key={product.id} value={product.id}>
                  {product.name}
                </option>
              ))}
            </select>
          </div>
        </Card>

        {bomsQuery.isLoading ? (
          <Card>Memuat BOM produk...</Card>
        ) : bomsQuery.isError ? (
          <PageErrorState onRetry={() => void bomsQuery.refetch()} />
        ) : !boms.length ? (
          <PageEmptyState title="Belum ada BOM produk" />
        ) : (
          <div className="grid gap-4 lg:grid-cols-2">
            {boms.map((bom) => (
              <Card
                key={bom.id}
                title={bom.product?.name ?? "-"}
                description={`Versi ${bom.version}`}
                actions={
                  <Badge variant={bom.is_active ? "success" : "default"}>
                    {bom.is_active ? "Aktif" : "Nonaktif"}
                  </Badge>
                }
              >
                <div className="space-y-2 text-sm text-slate-600">
                  <div>Catatan: {bom.notes ?? "-"}</div>
                  <div>Jumlah Item: {bom.items?.length ?? 0}</div>
                  <div className="space-y-1">
                    {(bom.items ?? []).slice(0, 5).map((item) => (
                      <div key={item.id}>
                        {item.raw_material?.name ?? item.rawMaterial?.name ?? "-"} —{" "}
                        {Number(item.qty ?? 0).toLocaleString("id-ID")}{" "}
                        {item.unit?.code ?? ""}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                  <Button variant="outline" onClick={() => openEdit(bom)}>
                    Edit
                  </Button>
                  <Button
                    variant="danger"
                    loading={deleteMutation.isPending}
                    onClick={() => deleteMutation.mutate(bom.id)}
                  >
                    Hapus
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        )}

        <Modal
          open={openModal}
          title={editingBom ? "Edit BOM Produk" : "Tambah BOM Produk"}
          onClose={() => setOpenModal(false)}
          footer={
            <>
              <Button variant="outline" onClick={() => setOpenModal(false)}>
                Batal
              </Button>
              <Button loading={saveMutation.isPending} onClick={submitForm}>
                Simpan
              </Button>
            </>
          }
        >
          <div className="max-h-[70vh] space-y-5 overflow-y-auto pr-1">
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">
                  Produk
                </label>
                <select
                  className="w-full rounded-xl border border-slate-300 px-3 py-2 text-sm"
                  value={form.product_id || ""}
                  onChange={(event) =>
                    setForm((prev) => ({
                      ...prev,
                      product_id: Number(event.target.value || 0),
                    }))
                  }
                >
                  <option value="">Pilih produk</option>
                  {products.map((product) => (
                    <option key={product.id} value={product.id}>
                      {product.name}
                    </option>
                  ))}
                </select>
              </div>

              <Input
                label="Versi"
                type="number"
                value={String(form.version)}
                onChange={(event) =>
                  setForm((prev) => ({
                    ...prev,
                    version: Number(event.target.value || 1),
                  }))
                }
              />

              <Input
                label="Catatan"
                value={form.notes}
                onChange={(event) =>
                  setForm((prev) => ({
                    ...prev,
                    notes: event.target.value,
                  }))
                }
              />

              <div className="flex items-end">
                <Checkbox
                  label="BOM aktif"
                  checked={form.is_active}
                  onChange={(event) =>
                    setForm((prev) => ({
                      ...prev,
                      is_active: event.target.checked,
                    }))
                  }
                />
              </div>
            </div>

            <BomItemsEditor
              value={form.items}
              onChange={(items) => setForm((prev) => ({ ...prev, items }))}
              rawMaterials={rawMaterials}
              units={units}
            />
          </div>
        </Modal>
      </div>
    </PermissionWrapper>
  );
}
```
</details>

<a id="file-srcmodulesadminpagesproductbundlespagetsx"></a>
### src\modules\admin\pages\ProductBundlesPage.tsx
- SHA: `227f55bfa56a`  
- Ukuran: 2 KB
<details><summary><strong>Lihat Kode Lengkap</strong></summary>

```tsx
import { ProductConfigPage } from "@/modules/admin/components/product-config/ProductConfigPage";
import {
  ProductBundleItemsEditor,
  mapBundleItemsFromProduct,
  sanitizeBundleItems,
  validateBundleItems,
} from "@/modules/admin/components/product-config/ProductBundleItemsEditor";
import type { ProductBundleItemPayload } from "@/modules/admin/services/catalog.service";
import type { Product } from "@/types/product";

export default function ProductBundlesPage() {
  return (
    <ProductConfigPage<ProductBundleItemPayload[]>
      title="Product Bundles"
      description="Kelola paket atau combo product."
      queryKey="admin-product-bundles"
      emptyTitle="Belum ada produk bundle"
      searchPlaceholder="Cari produk bundle..."
      saveButtonLabel="Simpan Bundle"
      filterProducts={(products) => products.filter((product) => product.product_type === "bundle")}
      getBadge={() => ({
        label: "bundle",
        variant: "warning",
      })}
      renderSummary={(product: Product) =>
        (product.bundle_items ?? []).length ? (
          <>
            {product.bundle_items?.map((item) => (
              <div key={item.id} className="rounded-xl border border-slate-200 p-3">
                <div className="font-medium text-slate-800">
                  {item.bundled_product?.name ?? `Produk #${item.bundled_product_id}`}
                </div>
                <div className="mt-1 text-xs text-slate-500">Qty: {item.qty}</div>
              </div>
            ))}
          </>
        ) : (
          <div>Produk bundle ini belum punya item.</div>
        )
      }
      mapFromProduct={mapBundleItemsFromProduct}
      renderEditor={({ value, onChange, product, products }) => (
        <ProductBundleItemsEditor
          value={value}
          onChange={onChange}
          productOptions={products.filter((item) => item.id !== product?.id)}
        />
      )}
      buildPayload={({ value, product }) => {
        validateBundleItems(value, product.id);

        return {
          product_type: "bundle",
          bundle_items: sanitizeBundleItems(value),
        };
      }}
    />
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

<a id="file-srcmodulesadminpagesproductmodifierspagetsx"></a>
### src\modules\admin\pages\ProductModifiersPage.tsx
- SHA: `cb169112697c`  
- Ukuran: 2 KB
<details><summary><strong>Lihat Kode Lengkap</strong></summary>

```tsx
import { ProductConfigPage } from "@/modules/admin/components/product-config/ProductConfigPage";
import {
  ProductModifierGroupsEditor,
  mapModifierGroupsFromProduct,
  sanitizeModifierGroups,
  validateModifierGroups,
} from "@/modules/admin/components/product-config/ProductModifierGroupsEditor";
import type { ProductModifierGroupPayload } from "@/modules/admin/services/catalog.service";
import type { Product } from "@/types/product";

export default function ProductModifiersPage() {
  return (
    <ProductConfigPage<ProductModifierGroupPayload[]>
      title="Product Modifiers"
      description="Kelola modifier group dan option per produk."
      queryKey="admin-product-modifiers"
      emptyTitle="Belum ada produk"
      searchPlaceholder="Cari produk untuk mengatur modifier..."
      saveButtonLabel="Simpan Modifier"
      getBadge={(product: Product) => ({
        label: product.modifier_groups?.length
          ? `${product.modifier_groups.length} group`
          : "Belum ada modifier",
        variant: product.modifier_groups?.length ? "success" : "warning",
      })}
      renderSummary={(product: Product) =>
        (product.modifier_groups ?? []).length ? (
          <>
            {product.modifier_groups?.map((group) => (
              <div key={group.id} className="rounded-xl border border-slate-200 p-3">
                <div className="font-medium text-slate-800">{group.name}</div>
                <div className="mt-1 text-xs text-slate-500">
                  min: {group.min_select ?? 0} • max: {group.max_select ?? 1} • option:{" "}
                  {group.options?.length ?? 0}
                </div>
              </div>
            ))}
          </>
        ) : (
          <div>Produk ini belum memiliki modifier group.</div>
        )
      }
      mapFromProduct={mapModifierGroupsFromProduct}
      renderEditor={({ value, onChange }) => (
        <ProductModifierGroupsEditor value={value} onChange={onChange} />
      )}
      buildPayload={({ value }) => {
        validateModifierGroups(value);

        return {
          modifier_groups: sanitizeModifierGroups(value),
        };
      }}
    />
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

<a id="file-srcmodulesadminpagesproductvariantspagetsx"></a>
### src\modules\admin\pages\ProductVariantsPage.tsx
- SHA: `b2a66a29d76f`  
- Ukuran: 2 KB
<details><summary><strong>Lihat Kode Lengkap</strong></summary>

```tsx
import { ProductConfigPage } from "@/modules/admin/components/product-config/ProductConfigPage";
import {
  ProductVariantGroupsEditor,
  mapVariantGroupsFromProduct,
  sanitizeVariantGroups,
} from "@/modules/admin/components/product-config/ProductVariantGroupsEditor";
import type { ProductVariantGroupPayload } from "@/modules/admin/services/catalog.service";
import type { Product } from "@/types/product";

export default function ProductVariantsPage() {
  return (
    <ProductConfigPage<ProductVariantGroupPayload[]>
      title="Product Variants"
      description="Kelola variant group dan option per produk."
      queryKey="admin-product-variants"
      emptyTitle="Belum ada produk"
      searchPlaceholder="Cari produk untuk mengatur varian..."
      saveButtonLabel="Simpan Varian"
      getBadge={(product: Product) => ({
        label: product.variant_groups?.length
          ? `${product.variant_groups.length} group`
          : "Belum ada varian",
        variant: product.variant_groups?.length ? "success" : "warning",
      })}
      renderSummary={(product: Product) =>
        (product.variant_groups ?? []).length ? (
          <>
            {product.variant_groups?.map((group) => (
              <div key={group.id} className="rounded-xl border border-slate-200 p-3">
                <div className="font-medium text-slate-800">
                  {group.name} ({group.selection_type})
                </div>
                <div className="mt-1 text-xs text-slate-500">
                  option: {group.options?.length ?? 0}
                </div>
              </div>
            ))}
          </>
        ) : (
          <div>Produk ini belum memiliki variant group.</div>
        )
      }
      mapFromProduct={mapVariantGroupsFromProduct}
      renderEditor={({ value, onChange }) => (
        <ProductVariantGroupsEditor value={value} onChange={onChange} />
      )}
      buildPayload={({ value }) => ({
        variant_groups: sanitizeVariantGroups(value),
      })}
    />
  );
}
```
</details>

<a id="file-srcmodulesadminpagespurchaseorderspagetsx"></a>
### src\modules\admin\pages\PurchaseOrdersPage.tsx
- SHA: `6a95c54b1409`  
- Ukuran: 27 KB
<details><summary><strong>Lihat Kode Lengkap</strong></summary>

```tsx
// src/modules/admin/pages/PurchaseOrdersPage.tsx

import { useMemo, useState } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { masterDataService } from "@/modules/admin/services/master-data.service";
import { inventoryService } from "@/modules/admin/services/inventory.service";
import {
    purchasingService,
    type PurchaseOrderItemPayload,
    type PurchaseOrderPayload,
} from "@/modules/admin/services/purchasing.service";
import {
    PurchaseOrderItemsEditor,
    createInitialPurchaseOrderItems,
    sanitizePurchaseOrderItems,
} from "@/modules/admin/components/purchasing/PurchaseOrderItemsEditor";
import { PageHeader } from "@/components/navigation/PageHeader";
import { PermissionWrapper } from "@/components/navigation/PermissionWrapper";
import { PageErrorState } from "@/components/feedback/PageErrorState";
import { PageEmptyState } from "@/components/feedback/PageEmptyState";
import { Badge, Button, Card, ConfirmDialog, Input, Modal } from "@/components/ui";
import { parseApiError } from "@/services/api/error-parser";
import { useToast } from "@/hooks/useToast";
import type { PurchaseOrder, PurchaseOrderStatus } from "@/types/purchasing";

const today = new Date().toISOString().slice(0, 10);

const initialForm: PurchaseOrderPayload = {
    outlet_id: 0,
    supplier_id: 0,
    order_date: today,
    expected_date: null,
    discount_amount: 0,
    tax_amount: 0,
    notes: "",
    items: createInitialPurchaseOrderItems(),
};

const statusVariant: Record<PurchaseOrderStatus, "success" | "warning" | "info" | "danger"> = {
    draft: "warning",
    approved: "info",
    partial_received: "warning",
    received: "success",
    cancelled: "danger",
};

export default function PurchaseOrdersPage() {
    const toast = useToast();
    const queryClient = useQueryClient();

    const [search, setSearch] = useState("");
    const [outletFilter, setOutletFilter] = useState<number | "">("");
    const [supplierFilter, setSupplierFilter] = useState<number | "">("");
    const [statusFilter, setStatusFilter] = useState<PurchaseOrderStatus | "">("");
    const [openModal, setOpenModal] = useState(false);
    const [detailOrder, setDetailOrder] = useState<PurchaseOrder | null>(null);
    const [editingOrder, setEditingOrder] = useState<PurchaseOrder | null>(null);
    const [deleteTarget, setDeleteTarget] = useState<PurchaseOrder | null>(null);
    const [form, setForm] = useState<PurchaseOrderPayload>(initialForm);

    const purchaseOrdersQuery = useQuery({
        queryKey: ["purchasing-purchase-orders", search, outletFilter, supplierFilter, statusFilter],
        queryFn: () =>
            purchasingService.getPurchaseOrders({
                per_page: 100,
                search,
                outlet_id: outletFilter,
                supplier_id: supplierFilter,
                status: statusFilter,
            }),
    });

    const outletsQuery = useQuery({
        queryKey: ["purchasing-po-outlets"],
        queryFn: () => masterDataService.getOutlets({ per_page: 100 }),
    });

    const suppliersQuery = useQuery({
        queryKey: ["purchasing-po-suppliers"],
        queryFn: () => purchasingService.getSuppliers({ per_page: 100, is_active: true }),
    });

    const rawMaterialsQuery = useQuery({
        queryKey: ["purchasing-po-raw-materials"],
        queryFn: () => inventoryService.getRawMaterials({ per_page: 100 }),
    });

    const unitsQuery = useQuery({
        queryKey: ["purchasing-po-units"],
        queryFn: () => inventoryService.getUnits({ per_page: 100 }),
    });

    const purchaseOrders = purchaseOrdersQuery.data?.items ?? [];
    const outlets = outletsQuery.data?.items ?? [];
    const suppliers = suppliersQuery.data?.items ?? [];
    const rawMaterials = rawMaterialsQuery.data?.items ?? [];
    const units = unitsQuery.data?.items ?? [];

    const formSubtotal = useMemo(() => {
        return sanitizePurchaseOrderItems(form.items).reduce((total, item) => {
            return (
                total +
                Math.max(
                    0,
                    Number(item.qty_ordered || 0) * Number(item.unit_price || 0) -
                    Number(item.discount_amount || 0)
                )
            );
        }, 0);
    }, [form.items]);

    const formTotal = Math.max(
        0,
        formSubtotal - Number(form.discount_amount || 0) + Number(form.tax_amount || 0)
    );

    const saveMutation = useMutation({
        mutationFn: (payload: PurchaseOrderPayload) => {
            const sanitizedPayload = {
                ...payload,
                items: sanitizePurchaseOrderItems(payload.items),
            };

            if (editingOrder) {
                return purchasingService.updatePurchaseOrder(editingOrder.id, sanitizedPayload);
            }

            return purchasingService.createPurchaseOrder(sanitizedPayload);
        },
        onSuccess: (response) => {
            toast.success(response.message);
            setOpenModal(false);
            setEditingOrder(null);
            setForm(initialForm);
            void queryClient.invalidateQueries({ queryKey: ["purchasing-purchase-orders"] });
        },
        onError: (error) => toast.error("Gagal menyimpan purchase order", parseApiError(error)),
    });

    const approveMutation = useMutation({
        mutationFn: (order: PurchaseOrder) => purchasingService.approvePurchaseOrder(order.id),
        onSuccess: (response) => {
            toast.success(response.message);
            void queryClient.invalidateQueries({ queryKey: ["purchasing-purchase-orders"] });
        },
        onError: (error) => toast.error("Gagal approve purchase order", parseApiError(error)),
    });

    const cancelMutation = useMutation({
        mutationFn: (order: PurchaseOrder) => purchasingService.cancelPurchaseOrder(order.id),
        onSuccess: (response) => {
            toast.success(response.message);
            void queryClient.invalidateQueries({ queryKey: ["purchasing-purchase-orders"] });
        },
        onError: (error) => toast.error("Gagal membatalkan purchase order", parseApiError(error)),
    });

    const deleteMutation = useMutation({
        mutationFn: (order: PurchaseOrder) => purchasingService.deletePurchaseOrder(order.id),
        onSuccess: (response) => {
            toast.success(response.message);
            setDeleteTarget(null);
            void queryClient.invalidateQueries({ queryKey: ["purchasing-purchase-orders"] });
        },
        onError: (error) => toast.error("Gagal menghapus purchase order", parseApiError(error)),
    });

    const openCreate = () => {
        setEditingOrder(null);
        setForm(initialForm);
        setOpenModal(true);
    };

    const openEdit = (order: PurchaseOrder) => {
        setEditingOrder(order);
        setForm({
            outlet_id: order.outlet_id,
            supplier_id: order.supplier_id,
            order_date: order.order_date,
            expected_date: order.expected_date,
            discount_amount: Number(order.discount_amount ?? 0),
            tax_amount: Number(order.tax_amount ?? 0),
            notes: order.notes ?? "",
            items:
                order.items?.map((item) => ({
                    raw_material_id: item.raw_material_id,
                    qty_ordered: Number(item.qty_ordered ?? 0),
                    unit_id: item.unit_id,
                    unit_price: Number(item.unit_price ?? 0),
                    discount_amount: Number(item.discount_amount ?? 0),
                    notes: item.notes ?? "",
                })) ?? createInitialPurchaseOrderItems(),
        });
        setOpenModal(true);
    };

    return (
        <PermissionWrapper permission="purchase_orders.view">
            <div className="space-y-4">
                <PageHeader
                    title="Purchase Order"
                    description="Kelola draft, approval, dan riwayat pembelian bahan baku."
                    actions={<Button onClick={openCreate}>Buat PO</Button>}
                />

                <Card>
                    <div className="grid gap-4 md:grid-cols-4">
                        <Input
                            placeholder="Cari nomor PO atau supplier..."
                            value={search}
                            onChange={(event) => setSearch(event.target.value)}
                        />

                        <select
                            className="w-full rounded-xl border border-slate-300 px-3 py-2 text-sm"
                            value={outletFilter}
                            onChange={(event) =>
                                setOutletFilter(event.target.value ? Number(event.target.value) : "")
                            }
                        >
                            <option value="">Semua outlet</option>
                            {outlets.map((outlet) => (
                                <option key={outlet.id} value={outlet.id}>
                                    {outlet.name}
                                </option>
                            ))}
                        </select>

                        <select
                            className="w-full rounded-xl border border-slate-300 px-3 py-2 text-sm"
                            value={supplierFilter}
                            onChange={(event) =>
                                setSupplierFilter(event.target.value ? Number(event.target.value) : "")
                            }
                        >
                            <option value="">Semua supplier</option>
                            {suppliers.map((supplier) => (
                                <option key={supplier.id} value={supplier.id}>
                                    {supplier.name}
                                </option>
                            ))}
                        </select>

                        <select
                            className="w-full rounded-xl border border-slate-300 px-3 py-2 text-sm"
                            value={statusFilter}
                            onChange={(event) => setStatusFilter(event.target.value as PurchaseOrderStatus | "")}
                        >
                            <option value="">Semua status</option>
                            <option value="draft">draft</option>
                            <option value="approved">approved</option>
                            <option value="partial_received">partial_received</option>
                            <option value="received">received</option>
                            <option value="cancelled">cancelled</option>
                        </select>
                    </div>
                </Card>

                {purchaseOrdersQuery.isLoading ? (
                    <Card>Memuat purchase order...</Card>
                ) : purchaseOrdersQuery.isError ? (
                    <PageErrorState onRetry={() => void purchaseOrdersQuery.refetch()} />
                ) : !purchaseOrders.length ? (
                    <PageEmptyState title="Belum ada purchase order" />
                ) : (
                    <div className="grid gap-4 xl:grid-cols-2">
                        {purchaseOrders.map((order) => (
                            <Card
                                key={order.id}
                                title={order.po_number}
                                description={`${order.outlet?.name ?? "-"} • ${order.supplier?.name ?? "-"}`}
                                actions={<Badge variant={statusVariant[order.status]}>{order.status}</Badge>}
                            >
                                <div className="grid gap-3 text-sm text-slate-600 md:grid-cols-2">
                                    <div>
                                        <div className="text-xs text-slate-500">Tanggal Order</div>
                                        <div>{order.order_date}</div>
                                    </div>

                                    <div>
                                        <div className="text-xs text-slate-500">Expected Date</div>
                                        <div>{order.expected_date ?? "-"}</div>
                                    </div>

                                    <div>
                                        <div className="text-xs text-slate-500">Subtotal</div>
                                        <div>Rp {Number(order.subtotal ?? 0).toLocaleString("id-ID")}</div>
                                    </div>

                                    <div>
                                        <div className="text-xs text-slate-500">Total</div>
                                        <div className="font-semibold text-slate-900">
                                            Rp {Number(order.total_amount ?? 0).toLocaleString("id-ID")}
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-4 flex flex-wrap gap-2">
                                    <Button variant="outline" onClick={() => setDetailOrder(order)}>
                                        Detail
                                    </Button>

                                    {order.status === "draft" ? (
                                        <>
                                            <Button variant="outline" onClick={() => openEdit(order)}>
                                                Edit
                                            </Button>
                                            <Button
                                                loading={approveMutation.isPending}
                                                onClick={() => approveMutation.mutate(order)}
                                            >
                                                Approve
                                            </Button>
                                            <Button
                                                variant="danger"
                                                loading={cancelMutation.isPending}
                                                onClick={() => cancelMutation.mutate(order)}
                                            >
                                                Cancel
                                            </Button>
                                            <Button variant="danger" onClick={() => setDeleteTarget(order)}>
                                                Hapus
                                            </Button>
                                        </>
                                    ) : null}
                                </div>
                            </Card>
                        ))}
                    </div>
                )}

                <Modal
                    open={openModal}
                    title={editingOrder ? "Edit Purchase Order" : "Buat Purchase Order"}
                    onClose={() => setOpenModal(false)}
                    footer={
                        <>
                            <Button variant="outline" onClick={() => setOpenModal(false)}>
                                Batal
                            </Button>
                            <Button loading={saveMutation.isPending} onClick={() => saveMutation.mutate(form)}>
                                Simpan
                            </Button>
                        </>
                    }
                >
                    <div className="space-y-4">
                        <div className="grid gap-4 md:grid-cols-2">
                            <div>
                                <label className="mb-2 block text-sm font-medium text-slate-700">
                                    Outlet
                                </label>
                                <select
                                    className="w-full rounded-xl border border-slate-300 px-3 py-2 text-sm"
                                    value={form.outlet_id || ""}
                                    onChange={(event) =>
                                        setForm((prev) => ({
                                            ...prev,
                                            outlet_id: Number(event.target.value || 0),
                                        }))
                                    }
                                >
                                    <option value="">Pilih outlet</option>
                                    {outlets.map((outlet) => (
                                        <option key={outlet.id} value={outlet.id}>
                                            {outlet.name}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            <div>
                                <label className="mb-2 block text-sm font-medium text-slate-700">
                                    Supplier
                                </label>
                                <select
                                    className="w-full rounded-xl border border-slate-300 px-3 py-2 text-sm"
                                    value={form.supplier_id || ""}
                                    onChange={(event) =>
                                        setForm((prev) => ({
                                            ...prev,
                                            supplier_id: Number(event.target.value || 0),
                                        }))
                                    }
                                >
                                    <option value="">Pilih supplier</option>
                                    {suppliers.map((supplier) => (
                                        <option key={supplier.id} value={supplier.id}>
                                            {supplier.name}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            <Input
                                label="Order Date"
                                type="date"
                                value={form.order_date}
                                onChange={(event) =>
                                    setForm((prev) => ({
                                        ...prev,
                                        order_date: event.target.value,
                                    }))
                                }
                            />

                            <Input
                                label="Expected Date"
                                type="date"
                                value={form.expected_date ?? ""}
                                onChange={(event) =>
                                    setForm((prev) => ({
                                        ...prev,
                                        expected_date: event.target.value || null,
                                    }))
                                }
                            />

                            <Input
                                label="Diskon Header"
                                type="number"
                                value={String(form.discount_amount ?? 0)}
                                onChange={(event) =>
                                    setForm((prev) => ({
                                        ...prev,
                                        discount_amount: Number(event.target.value || 0),
                                    }))
                                }
                            />

                            <Input
                                label="Pajak"
                                type="number"
                                value={String(form.tax_amount ?? 0)}
                                onChange={(event) =>
                                    setForm((prev) => ({
                                        ...prev,
                                        tax_amount: Number(event.target.value || 0),
                                    }))
                                }
                            />

                            <div className="md:col-span-2">
                                <Input
                                    label="Catatan"
                                    value={form.notes ?? ""}
                                    onChange={(event) =>
                                        setForm((prev) => ({
                                            ...prev,
                                            notes: event.target.value,
                                        }))
                                    }
                                />
                            </div>
                        </div>

                        <PurchaseOrderItemsEditor
                            value={form.items}
                            onChange={(items: PurchaseOrderItemPayload[]) =>
                                setForm((prev) => ({
                                    ...prev,
                                    items,
                                }))
                            }
                            rawMaterials={rawMaterials}
                            units={units}
                        />

                        <Card>
                            <div className="grid gap-3 text-sm md:grid-cols-3">
                                <div>
                                    <div className="text-xs text-slate-500">Subtotal Item</div>
                                    <div className="font-semibold text-slate-900">
                                        Rp {formSubtotal.toLocaleString("id-ID")}
                                    </div>
                                </div>

                                <div>
                                    <div className="text-xs text-slate-500">Diskon + Pajak</div>
                                    <div className="font-semibold text-slate-900">
                                        Rp{" "}
                                        {(
                                            Number(form.tax_amount || 0) - Number(form.discount_amount || 0)
                                        ).toLocaleString("id-ID")}
                                    </div>
                                </div>

                                <div>
                                    <div className="text-xs text-slate-500">Estimasi Total</div>
                                    <div className="text-lg font-bold text-slate-900">
                                        Rp {formTotal.toLocaleString("id-ID")}
                                    </div>
                                </div>
                            </div>
                        </Card>
                    </div>
                </Modal>

                <Modal
                    open={Boolean(detailOrder)}
                    title={`Detail PO ${detailOrder?.po_number ?? ""}`}
                    onClose={() => setDetailOrder(null)}
                    footer={
                        <Button variant="outline" onClick={() => setDetailOrder(null)}>
                            Tutup
                        </Button>
                    }
                >
                    <div className="space-y-4">
                        <Card>
                            <div className="grid gap-3 text-sm md:grid-cols-2">
                                <div>
                                    <div className="text-xs text-slate-500">Outlet</div>
                                    <div>{detailOrder?.outlet?.name ?? "-"}</div>
                                </div>

                                <div>
                                    <div className="text-xs text-slate-500">Supplier</div>
                                    <div>{detailOrder?.supplier?.name ?? "-"}</div>
                                </div>

                                <div>
                                    <div className="text-xs text-slate-500">Status</div>
                                    <div>{detailOrder?.status ?? "-"}</div>
                                </div>

                                <div>
                                    <div className="text-xs text-slate-500">Approved At</div>
                                    <div>{detailOrder?.approved_at ?? "-"}</div>
                                </div>

                                <div className="md:col-span-2">
                                    <div className="text-xs text-slate-500">Notes</div>
                                    <div>{detailOrder?.notes ?? "-"}</div>
                                </div>
                            </div>
                        </Card>

                        <div className="space-y-3">
                            {detailOrder?.items?.map((item) => (
                                <Card
                                    key={item.id}
                                    title={item.raw_material?.name ?? item.rawMaterial?.name ?? "-"}
                                    description={`${Number(item.qty_ordered ?? 0).toLocaleString("id-ID")} ${item.unit?.code ?? ""
                                        }`}
                                >
                                    <div className="grid gap-3 text-sm md:grid-cols-3">
                                        <div>
                                            <div className="text-xs text-slate-500">Unit Price</div>
                                            <div>Rp {Number(item.unit_price ?? 0).toLocaleString("id-ID")}</div>
                                        </div>

                                        <div>
                                            <div className="text-xs text-slate-500">Diskon</div>
                                            <div>Rp {Number(item.discount_amount ?? 0).toLocaleString("id-ID")}</div>
                                        </div>

                                        <div>
                                            <div className="text-xs text-slate-500">Line Total</div>
                                            <div className="font-semibold text-slate-900">
                                                Rp {Number(item.line_total ?? 0).toLocaleString("id-ID")}
                                            </div>
                                        </div>
                                    </div>
                                </Card>
                            ))}
                        </div>
                    </div>
                </Modal>

                <ConfirmDialog
                    open={Boolean(deleteTarget)}
                    title="Hapus purchase order?"
                    description={`PO ${deleteTarget?.po_number ?? ""} akan dihapus.`}
                    confirmText="Hapus"
                    confirmVariant="danger"
                    loading={deleteMutation.isPending}
                    onClose={() => setDeleteTarget(null)}
                    onConfirm={() => {
                        if (deleteTarget) {
                            deleteMutation.mutate(deleteTarget);
                        }
                    }}
                />
            </div>
        </PermissionWrapper>
    );
}
```
</details>

<a id="file-srcmodulesadminpagesrawmaterialcategoriespagetsx"></a>
### src\modules\admin\pages\RawMaterialCategoriesPage.tsx
- SHA: `890bbc3fd3df`  
- Ukuran: 5 KB
<details><summary><strong>Lihat Kode Lengkap</strong></summary>

```tsx
import { useState } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  inventoryService,
  type RawMaterialCategoryPayload,
} from "@/modules/admin/services/inventory.service";
import { PageHeader } from "@/components/navigation/PageHeader";
import { PermissionWrapper } from "@/components/navigation/PermissionWrapper";
import { PageErrorState } from "@/components/feedback/PageErrorState";
import { PageEmptyState } from "@/components/feedback/PageEmptyState";
import { Button, Card, Input, Modal } from "@/components/ui";
import { parseApiError } from "@/services/api/error-parser";
import { useToast } from "@/hooks/useToast";
import type { RawMaterialCategory } from "@/types/inventory";

const initialForm: RawMaterialCategoryPayload = {
  name: "",
};

export default function RawMaterialCategoriesPage() {
  const toast = useToast();
  const queryClient = useQueryClient();

  const [search, setSearch] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const [editingCategory, setEditingCategory] = useState<RawMaterialCategory | null>(null);
  const [form, setForm] = useState<RawMaterialCategoryPayload>(initialForm);

  const categoriesQuery = useQuery({
    queryKey: ["inventory-raw-material-categories", search],
    queryFn: () => inventoryService.getRawMaterialCategories({ per_page: 100, search }),
  });

  const categories = categoriesQuery.data?.items ?? [];

  const saveMutation = useMutation({
    mutationFn: (payload: RawMaterialCategoryPayload) =>
      editingCategory
        ? inventoryService.updateRawMaterialCategory(editingCategory.id, payload)
        : inventoryService.createRawMaterialCategory(payload),
    onSuccess: (response) => {
      toast.success(response.message);
      setOpenModal(false);
      setEditingCategory(null);
      setForm(initialForm);
      void queryClient.invalidateQueries({
        queryKey: ["inventory-raw-material-categories"],
      });
    },
    onError: (error) => toast.error("Gagal menyimpan kategori bahan baku", parseApiError(error)),
  });

  const deleteMutation = useMutation({
    mutationFn: (id: number) => inventoryService.deleteRawMaterialCategory(id),
    onSuccess: (response) => {
      toast.success(response.message);
      void queryClient.invalidateQueries({
        queryKey: ["inventory-raw-material-categories"],
      });
    },
    onError: (error) => toast.error("Gagal menghapus kategori bahan baku", parseApiError(error)),
  });

  const openCreate = () => {
    setEditingCategory(null);
    setForm(initialForm);
    setOpenModal(true);
  };

  const openEdit = (category: RawMaterialCategory) => {
    setEditingCategory(category);
    setForm({ name: category.name });
    setOpenModal(true);
  };

  return (
    <PermissionWrapper permission="raw_material_categories.view">
      <div className="space-y-4">
        <PageHeader
          title="Kategori Bahan Baku"
          description="Kelola kategori bahan baku untuk inventory."
          actions={<Button onClick={openCreate}>Tambah Kategori</Button>}
        />

        <Card>
          <Input
            placeholder="Cari kategori bahan baku..."
            value={search}
            onChange={(event) => setSearch(event.target.value)}
          />
        </Card>

        {categoriesQuery.isLoading ? (
          <Card>Memuat kategori bahan baku...</Card>
        ) : categoriesQuery.isError ? (
          <PageErrorState onRetry={() => void categoriesQuery.refetch()} />
        ) : !categories.length ? (
          <PageEmptyState title="Belum ada kategori bahan baku" />
        ) : (
          <div className="grid gap-4 lg:grid-cols-2">
            {categories.map((category) => (
              <Card key={category.id} title={category.name}>
                <div className="flex flex-wrap gap-2">
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
              </Card>
            ))}
          </div>
        )}

        <Modal
          open={openModal}
          title={editingCategory ? "Edit Kategori Bahan Baku" : "Tambah Kategori Bahan Baku"}
          onClose={() => setOpenModal(false)}
          footer={
            <>
              <Button variant="outline" onClick={() => setOpenModal(false)}>
                Batal
              </Button>
              <Button loading={saveMutation.isPending} onClick={() => saveMutation.mutate(form)}>
                Simpan
              </Button>
            </>
          }
        >
          <Input
            label="Nama Kategori"
            value={form.name}
            onChange={(event) => setForm((prev) => ({ ...prev, name: event.target.value }))}
          />
        </Modal>
      </div>
    </PermissionWrapper>
  );
}
```
</details>

<a id="file-srcmodulesadminpagesrawmaterialspagetsx"></a>
### src\modules\admin\pages\RawMaterialsPage.tsx
- SHA: `d861c3190858`  
- Ukuran: 16 KB
<details><summary><strong>Lihat Kode Lengkap</strong></summary>

```tsx
import { useState } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  inventoryService,
  type RawMaterialPayload,
} from "@/modules/admin/services/inventory.service";
import { masterDataService } from "@/modules/admin/services/master-data.service";
import { PageHeader } from "@/components/navigation/PageHeader";
import { PermissionWrapper } from "@/components/navigation/PermissionWrapper";
import { PageErrorState } from "@/components/feedback/PageErrorState";
import { PageEmptyState } from "@/components/feedback/PageEmptyState";
import { Badge, Button, Card, Checkbox, Input, Modal } from "@/components/ui";
import { parseApiError } from "@/services/api/error-parser";
import { useToast } from "@/hooks/useToast";
import type { RawMaterial } from "@/types/inventory";

const initialForm: RawMaterialPayload = {
  raw_material_category_id: 0,
  unit_id: 0,
  code: "",
  name: "",
  sku: "",
  description: "",
  minimum_stock: 0,
  last_purchase_price: 0,
  average_cost: 0,
  is_active: true,
  outlet_stocks: [],
};

export default function RawMaterialsPage() {
  const toast = useToast();
  const queryClient = useQueryClient();

  const [search, setSearch] = useState("");
  const [categoryFilter, setCategoryFilter] = useState<number | "">("");
  const [unitFilter, setUnitFilter] = useState<number | "">("");
  const [openModal, setOpenModal] = useState(false);
  const [editingRawMaterial, setEditingRawMaterial] = useState<RawMaterial | null>(null);
  const [form, setForm] = useState<RawMaterialPayload>(initialForm);

  const rawMaterialsQuery = useQuery({
    queryKey: ["inventory-raw-materials", search, categoryFilter, unitFilter],
    queryFn: () =>
      inventoryService.getRawMaterials({
        per_page: 100,
        search,
        raw_material_category_id: categoryFilter,
        unit_id: unitFilter,
      }),
  });

  const categoriesQuery = useQuery({
    queryKey: ["inventory-raw-material-categories-options"],
    queryFn: () => inventoryService.getRawMaterialCategories({ per_page: 100 }),
  });

  const unitsQuery = useQuery({
    queryKey: ["inventory-units-options"],
    queryFn: () => inventoryService.getUnits({ per_page: 100 }),
  });

  const outletsQuery = useQuery({
    queryKey: ["inventory-outlet-options"],
    queryFn: () => masterDataService.getOutlets({ per_page: 100 }),
  });

  const rawMaterials = rawMaterialsQuery.data?.items ?? [];
  const categories = categoriesQuery.data?.items ?? [];
  const units = unitsQuery.data?.items ?? [];
  const outlets = outletsQuery.data?.items ?? [];

  const saveMutation = useMutation({
    mutationFn: (payload: RawMaterialPayload) =>
      editingRawMaterial
        ? inventoryService.updateRawMaterial(editingRawMaterial.id, payload)
        : inventoryService.createRawMaterial(payload),
    onSuccess: (response) => {
      toast.success(response.message);
      setOpenModal(false);
      setEditingRawMaterial(null);
      setForm(initialForm);
      void queryClient.invalidateQueries({ queryKey: ["inventory-raw-materials"] });
      void queryClient.invalidateQueries({ queryKey: ["inventory-outlet-material-stocks"] });
    },
    onError: (error) => toast.error("Gagal menyimpan bahan baku", parseApiError(error)),
  });

  const deleteMutation = useMutation({
    mutationFn: (id: number) => inventoryService.deleteRawMaterial(id),
    onSuccess: (response) => {
      toast.success(response.message);
      void queryClient.invalidateQueries({ queryKey: ["inventory-raw-materials"] });
    },
    onError: (error) => toast.error("Gagal menghapus bahan baku", parseApiError(error)),
  });

  const openCreate = () => {
    setEditingRawMaterial(null);
    setForm({
      ...initialForm,
      outlet_stocks: outlets.map((outlet) => ({
        outlet_id: outlet.id,
        qty_on_hand: 0,
        qty_reserved: 0,
        last_movement_at: null,
      })),
    });
    setOpenModal(true);
  };

  const openEdit = (rawMaterial: RawMaterial) => {
    const stocks = rawMaterial.outlet_stocks ?? rawMaterial.outletStocks ?? [];

    setEditingRawMaterial(rawMaterial);
    setForm({
      raw_material_category_id: rawMaterial.raw_material_category_id,
      unit_id: rawMaterial.unit_id,
      code: rawMaterial.code ?? "",
      name: rawMaterial.name,
      sku: rawMaterial.sku ?? "",
      description: rawMaterial.description ?? "",
      minimum_stock: Number(rawMaterial.minimum_stock ?? 0),
      last_purchase_price: Number(rawMaterial.last_purchase_price ?? 0),
      average_cost: Number(rawMaterial.average_cost ?? 0),
      is_active: rawMaterial.is_active,
      outlet_stocks: outlets.map((outlet) => {
        const stock = stocks.find((item) => item.outlet_id === outlet.id);

        return {
          outlet_id: outlet.id,
          qty_on_hand: Number(stock?.qty_on_hand ?? 0),
          qty_reserved: Number(stock?.qty_reserved ?? 0),
          last_movement_at: stock?.last_movement_at ?? null,
        };
      }),
    });
    setOpenModal(true);
  };

  const updateStock = (
    outletId: number,
    field: "qty_on_hand" | "qty_reserved",
    value: number
  ) => {
    setForm((prev) => {
      const currentStocks = prev.outlet_stocks ?? [];
      const exists = currentStocks.some((item) => item.outlet_id === outletId);

      const nextStocks = exists
        ? currentStocks.map((item) =>
            item.outlet_id === outletId ? { ...item, [field]: value } : item
          )
        : [
            ...currentStocks,
            {
              outlet_id: outletId,
              qty_on_hand: field === "qty_on_hand" ? value : 0,
              qty_reserved: field === "qty_reserved" ? value : 0,
              last_movement_at: null,
            },
          ];

      return {
        ...prev,
        outlet_stocks: nextStocks,
      };
    });
  };

  const getStockValue = (outletId: number, field: "qty_on_hand" | "qty_reserved") => {
    const stock = form.outlet_stocks?.find((item) => item.outlet_id === outletId);
    return String(stock?.[field] ?? 0);
  };

  return (
    <PermissionWrapper permission="raw_materials.view">
      <div className="space-y-4">
        <PageHeader
          title="Bahan Baku"
          description="Kelola bahan baku, minimum stok, harga, dan saldo awal per outlet."
          actions={<Button onClick={openCreate}>Tambah Bahan Baku</Button>}
        />

        <Card>
          <div className="grid gap-4 md:grid-cols-3">
            <Input
              placeholder="Cari nama, kode, atau SKU..."
              value={search}
              onChange={(event) => setSearch(event.target.value)}
            />

            <select
              className="w-full rounded-xl border border-slate-300 px-3 py-2 text-sm"
              value={categoryFilter}
              onChange={(event) =>
                setCategoryFilter(event.target.value ? Number(event.target.value) : "")
              }
            >
              <option value="">Semua kategori</option>
              {categories.map((category) => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
            </select>

            <select
              className="w-full rounded-xl border border-slate-300 px-3 py-2 text-sm"
              value={unitFilter}
              onChange={(event) =>
                setUnitFilter(event.target.value ? Number(event.target.value) : "")
              }
            >
              <option value="">Semua satuan</option>
              {units.map((unit) => (
                <option key={unit.id} value={unit.id}>
                  {unit.name} ({unit.code})
                </option>
              ))}
            </select>
          </div>
        </Card>

        {rawMaterialsQuery.isLoading ? (
          <Card>Memuat bahan baku...</Card>
        ) : rawMaterialsQuery.isError ? (
          <PageErrorState onRetry={() => void rawMaterialsQuery.refetch()} />
        ) : !rawMaterials.length ? (
          <PageEmptyState title="Belum ada bahan baku" />
        ) : (
          <div className="grid gap-4 lg:grid-cols-2">
            {rawMaterials.map((rawMaterial) => (
              <Card
                key={rawMaterial.id}
                title={rawMaterial.name}
                description={`${rawMaterial.code ?? "-"} / ${rawMaterial.sku ?? "-"}`}
                actions={
                  <Badge variant={rawMaterial.is_active ? "success" : "danger"}>
                    {rawMaterial.is_active ? "Aktif" : "Nonaktif"}
                  </Badge>
                }
              >
                <div className="space-y-2 text-sm text-slate-600">
                  <div>Kategori: {rawMaterial.category?.name ?? "-"}</div>
                  <div>Satuan: {rawMaterial.unit?.code ?? "-"}</div>
                  <div>
                    Minimum Stok:{" "}
                    {Number(rawMaterial.minimum_stock ?? 0).toLocaleString("id-ID")}
                  </div>
                  <div>
                    Harga Beli Terakhir: Rp{" "}
                    {Number(rawMaterial.last_purchase_price ?? 0).toLocaleString("id-ID")}
                  </div>
                  <div>
                    Average Cost: Rp{" "}
                    {Number(rawMaterial.average_cost ?? 0).toLocaleString("id-ID")}
                  </div>
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                  <Button variant="outline" onClick={() => openEdit(rawMaterial)}>
                    Edit
                  </Button>
                  <Button
                    variant="danger"
                    loading={deleteMutation.isPending}
                    onClick={() => deleteMutation.mutate(rawMaterial.id)}
                  >
                    Hapus
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        )}

        <Modal
          open={openModal}
          title={editingRawMaterial ? "Edit Bahan Baku" : "Tambah Bahan Baku"}
          onClose={() => setOpenModal(false)}
          footer={
            <>
              <Button variant="outline" onClick={() => setOpenModal(false)}>
                Batal
              </Button>
              <Button loading={saveMutation.isPending} onClick={() => saveMutation.mutate(form)}>
                Simpan
              </Button>
            </>
          }
        >
          <div className="max-h-[70vh] space-y-5 overflow-y-auto pr-1">
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">
                  Kategori
                </label>
                <select
                  className="w-full rounded-xl border border-slate-300 px-3 py-2 text-sm"
                  value={form.raw_material_category_id || ""}
                  onChange={(event) =>
                    setForm((prev) => ({
                      ...prev,
                      raw_material_category_id: Number(event.target.value || 0),
                    }))
                  }
                >
                  <option value="">Pilih kategori</option>
                  {categories.map((category) => (
                    <option key={category.id} value={category.id}>
                      {category.name}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">
                  Satuan
                </label>
                <select
                  className="w-full rounded-xl border border-slate-300 px-3 py-2 text-sm"
                  value={form.unit_id || ""}
                  onChange={(event) =>
                    setForm((prev) => ({
                      ...prev,
                      unit_id: Number(event.target.value || 0),
                    }))
                  }
                >
                  <option value="">Pilih satuan</option>
                  {units.map((unit) => (
                    <option key={unit.id} value={unit.id}>
                      {unit.name} ({unit.code})
                    </option>
                  ))}
                </select>
              </div>

              <Input
                label="Kode"
                value={form.code ?? ""}
                onChange={(event) => setForm((prev) => ({ ...prev, code: event.target.value }))}
              />

              <Input
                label="SKU"
                value={form.sku ?? ""}
                onChange={(event) => setForm((prev) => ({ ...prev, sku: event.target.value }))}
              />

              <Input
                label="Nama Bahan Baku"
                value={form.name}
                onChange={(event) => setForm((prev) => ({ ...prev, name: event.target.value }))}
              />

              <Input
                label="Minimum Stok"
                type="number"
                value={String(form.minimum_stock ?? 0)}
                onChange={(event) =>
                  setForm((prev) => ({
                    ...prev,
                    minimum_stock: Number(event.target.value || 0),
                  }))
                }
              />

              <Input
                label="Harga Beli Terakhir"
                type="number"
                value={String(form.last_purchase_price ?? 0)}
                onChange={(event) =>
                  setForm((prev) => ({
                    ...prev,
                    last_purchase_price: Number(event.target.value || 0),
                  }))
                }
              />

              <Input
                label="Average Cost"
                type="number"
                value={String(form.average_cost ?? 0)}
                onChange={(event) =>
                  setForm((prev) => ({
                    ...prev,
                    average_cost: Number(event.target.value || 0),
                  }))
                }
              />

              <Input
                label="Deskripsi"
                value={form.description ?? ""}
                onChange={(event) =>
                  setForm((prev) => ({ ...prev, description: event.target.value }))
                }
              />

              <div className="flex items-end">
                <Checkbox
                  label="Bahan baku aktif"
                  checked={Boolean(form.is_active)}
                  onChange={(event) =>
                    setForm((prev) => ({ ...prev, is_active: event.target.checked }))
                  }
                />
              </div>
            </div>

            <Card title="Saldo Awal Per Outlet">
              <div className="space-y-3">
                {outlets.map((outlet) => (
                  <div
                    key={outlet.id}
                    className="grid gap-3 rounded-2xl border border-slate-200 p-4 md:grid-cols-3"
                  >
                    <div>
                      <div className="text-sm font-medium text-slate-900">{outlet.name}</div>
                      <div className="text-xs text-slate-500">{outlet.code}</div>
                    </div>

                    <Input
                      label="Qty On Hand"
                      type="number"
                      value={getStockValue(outlet.id, "qty_on_hand")}
                      onChange={(event) =>
                        updateStock(outlet.id, "qty_on_hand", Number(event.target.value || 0))
                      }
                    />

                    <Input
                      label="Qty Reserved"
                      type="number"
                      value={getStockValue(outlet.id, "qty_reserved")}
                      onChange={(event) =>
                        updateStock(outlet.id, "qty_reserved", Number(event.target.value || 0))
                      }
                    />
                  </div>
                ))}
              </div>
            </Card>
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

<a id="file-srcmodulesadminpagessupplierspagetsx"></a>
### src\modules\admin\pages\SuppliersPage.tsx
- SHA: `ec860c87629e`  
- Ukuran: 12 KB
<details><summary><strong>Lihat Kode Lengkap</strong></summary>

```tsx
// src/modules/admin/pages/SuppliersPage.tsx

import { useState } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
    purchasingService,
    type SupplierPayload,
} from "@/modules/admin/services/purchasing.service";
import { PageHeader } from "@/components/navigation/PageHeader";
import { PermissionWrapper } from "@/components/navigation/PermissionWrapper";
import { PageErrorState } from "@/components/feedback/PageErrorState";
import { PageEmptyState } from "@/components/feedback/PageEmptyState";
import { Badge, Button, Card, ConfirmDialog, Input, Modal, Switch } from "@/components/ui";
import { parseApiError } from "@/services/api/error-parser";
import { useToast } from "@/hooks/useToast";
import type { Supplier } from "@/types/purchasing";

const initialForm: SupplierPayload = {
    code: "",
    name: "",
    phone: "",
    email: "",
    address: "",
    city: "",
    contact_person: "",
    is_active: true,
};

export default function SuppliersPage() {
    const toast = useToast();
    const queryClient = useQueryClient();

    const [search, setSearch] = useState("");
    const [activeFilter, setActiveFilter] = useState<boolean | "">("");
    const [openModal, setOpenModal] = useState(false);
    const [editingSupplier, setEditingSupplier] = useState<Supplier | null>(null);
    const [deleteTarget, setDeleteTarget] = useState<Supplier | null>(null);
    const [form, setForm] = useState<SupplierPayload>(initialForm);

    const suppliersQuery = useQuery({
        queryKey: ["purchasing-suppliers", search, activeFilter],
        queryFn: () =>
            purchasingService.getSuppliers({
                per_page: 100,
                search,
                is_active: activeFilter,
            }),
    });

    const suppliers = suppliersQuery.data?.items ?? [];

    const saveMutation = useMutation({
        mutationFn: (payload: SupplierPayload) => {
            if (editingSupplier) {
                return purchasingService.updateSupplier(editingSupplier.id, payload);
            }

            return purchasingService.createSupplier(payload);
        },
        onSuccess: (response) => {
            toast.success(response.message);
            setOpenModal(false);
            setEditingSupplier(null);
            setForm(initialForm);
            void queryClient.invalidateQueries({ queryKey: ["purchasing-suppliers"] });
        },
        onError: (error) => toast.error("Gagal menyimpan supplier", parseApiError(error)),
    });

    const deleteMutation = useMutation({
        mutationFn: (supplier: Supplier) => purchasingService.deleteSupplier(supplier.id),
        onSuccess: (response) => {
            toast.success(response.message);
            setDeleteTarget(null);
            void queryClient.invalidateQueries({ queryKey: ["purchasing-suppliers"] });
        },
        onError: (error) => toast.error("Gagal menghapus supplier", parseApiError(error)),
    });

    const openCreate = () => {
        setEditingSupplier(null);
        setForm(initialForm);
        setOpenModal(true);
    };

    const openEdit = (supplier: Supplier) => {
        setEditingSupplier(supplier);
        setForm({
            code: supplier.code ?? "",
            name: supplier.name,
            phone: supplier.phone ?? "",
            email: supplier.email ?? "",
            address: supplier.address ?? "",
            city: supplier.city ?? "",
            contact_person: supplier.contact_person ?? "",
            is_active: supplier.is_active,
        });
        setOpenModal(true);
    };

    return (
        <PermissionWrapper permission="suppliers.view">
            <div className="space-y-4">
                <PageHeader
                    title="Supplier"
                    description="Kelola data supplier bahan baku dan vendor pembelian."
                    actions={<Button onClick={openCreate}>Tambah Supplier</Button>}
                />

                <Card>
                    <div className="grid gap-4 md:grid-cols-2">
                        <Input
                            placeholder="Cari kode, nama, telepon, email, kota..."
                            value={search}
                            onChange={(event) => setSearch(event.target.value)}
                        />

                        <select
                            className="w-full rounded-xl border border-slate-300 px-3 py-2 text-sm"
                            value={activeFilter === "" ? "" : String(activeFilter)}
                            onChange={(event) => {
                                const value = event.target.value;
                                setActiveFilter(value === "" ? "" : value === "true");
                            }}
                        >
                            <option value="">Semua status</option>
                            <option value="true">Aktif</option>
                            <option value="false">Nonaktif</option>
                        </select>
                    </div>
                </Card>

                {suppliersQuery.isLoading ? (
                    <Card>Memuat data supplier...</Card>
                ) : suppliersQuery.isError ? (
                    <PageErrorState onRetry={() => void suppliersQuery.refetch()} />
                ) : !suppliers.length ? (
                    <PageEmptyState title="Belum ada supplier" />
                ) : (
                    <div className="grid gap-4 lg:grid-cols-2">
                        {suppliers.map((supplier) => (
                            <Card
                                key={supplier.id}
                                title={supplier.name}
                                description={supplier.code ?? "Tanpa kode"}
                                actions={
                                    <Badge variant={supplier.is_active ? "success" : "danger"}>
                                        {supplier.is_active ? "Aktif" : "Nonaktif"}
                                    </Badge>
                                }
                            >
                                <div className="grid gap-3 text-sm text-slate-600 md:grid-cols-2">
                                    <div>
                                        <div className="text-xs text-slate-500">Kontak</div>
                                        <div>{supplier.contact_person ?? "-"}</div>
                                    </div>

                                    <div>
                                        <div className="text-xs text-slate-500">Telepon</div>
                                        <div>{supplier.phone ?? "-"}</div>
                                    </div>

                                    <div>
                                        <div className="text-xs text-slate-500">Email</div>
                                        <div>{supplier.email ?? "-"}</div>
                                    </div>

                                    <div>
                                        <div className="text-xs text-slate-500">Kota</div>
                                        <div>{supplier.city ?? "-"}</div>
                                    </div>

                                    <div className="md:col-span-2">
                                        <div className="text-xs text-slate-500">Alamat</div>
                                        <div>{supplier.address ?? "-"}</div>
                                    </div>
                                </div>

                                <div className="mt-4 flex flex-wrap gap-2">
                                    <Button variant="outline" onClick={() => openEdit(supplier)}>
                                        Edit
                                    </Button>
                                    <Button variant="danger" onClick={() => setDeleteTarget(supplier)}>
                                        Hapus
                                    </Button>
                                </div>
                            </Card>
                        ))}
                    </div>
                )}

                <Modal
                    open={openModal}
                    title={editingSupplier ? "Edit Supplier" : "Tambah Supplier"}
                    onClose={() => setOpenModal(false)}
                    footer={
                        <>
                            <Button variant="outline" onClick={() => setOpenModal(false)}>
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
                            label="Kode"
                            value={form.code ?? ""}
                            onChange={(event) => setForm((prev) => ({ ...prev, code: event.target.value }))}
                        />

                        <Input
                            label="Nama Supplier"
                            value={form.name}
                            onChange={(event) => setForm((prev) => ({ ...prev, name: event.target.value }))}
                        />

                        <Input
                            label="Telepon"
                            value={form.phone ?? ""}
                            onChange={(event) => setForm((prev) => ({ ...prev, phone: event.target.value }))}
                        />

                        <Input
                            label="Email"
                            type="email"
                            value={form.email ?? ""}
                            onChange={(event) => setForm((prev) => ({ ...prev, email: event.target.value }))}
                        />

                        <Input
                            label="Kota"
                            value={form.city ?? ""}
                            onChange={(event) => setForm((prev) => ({ ...prev, city: event.target.value }))}
                        />

                        <Input
                            label="Contact Person"
                            value={form.contact_person ?? ""}
                            onChange={(event) =>
                                setForm((prev) => ({ ...prev, contact_person: event.target.value }))
                            }
                        />

                        <div className="md:col-span-2">
                            <Input
                                label="Alamat"
                                value={form.address ?? ""}
                                onChange={(event) => setForm((prev) => ({ ...prev, address: event.target.value }))}
                            />
                        </div>

                        <div className="md:col-span-2">
                            <Switch
                                label="Supplier aktif"
                                checked={Boolean(form.is_active)}
                                onChange={(checked) =>
                                    setForm((prev) => ({ ...prev, is_active: checked }))
                                }
                            />
                        </div>
                    </div>
                </Modal>

                <ConfirmDialog
                    open={Boolean(deleteTarget)}
                    title="Hapus supplier?"
                    description={`Supplier ${deleteTarget?.name ?? ""} akan dihapus.`}
                    confirmText="Hapus"
                    confirmVariant="danger"
                    loading={deleteMutation.isPending}
                    onClose={() => setDeleteTarget(null)}
                    onConfirm={() => {
                        if (deleteTarget) {
                            deleteMutation.mutate(deleteTarget);
                        }
                    }}
                />
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

<a id="file-srcmodulesadminpagesunitspagetsx"></a>
### src\modules\admin\pages\UnitsPage.tsx
- SHA: `c1037c038622`  
- Ukuran: 12 KB
<details><summary><strong>Lihat Kode Lengkap</strong></summary>

```tsx
import { useState } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  inventoryService,
  type UnitConversionPayload,
  type UnitPayload,
} from "@/modules/admin/services/inventory.service";
import { PageHeader } from "@/components/navigation/PageHeader";
import { PermissionWrapper } from "@/components/navigation/PermissionWrapper";
import { PageErrorState } from "@/components/feedback/PageErrorState";
import { PageEmptyState } from "@/components/feedback/PageEmptyState";
import { Button, Card, Input, Modal } from "@/components/ui";
import { parseApiError } from "@/services/api/error-parser";
import { useToast } from "@/hooks/useToast";
import type { Unit, UnitConversion } from "@/types/inventory";

const initialUnitForm: UnitPayload = {
  name: "",
  code: "",
};

const initialConversionForm: UnitConversionPayload = {
  from_unit_id: 0,
  to_unit_id: 0,
  multiplier: 1,
};

export default function UnitsPage() {
  const toast = useToast();
  const queryClient = useQueryClient();

  const [search, setSearch] = useState("");
  const [openUnitModal, setOpenUnitModal] = useState(false);
  const [openConversionModal, setOpenConversionModal] = useState(false);
  const [editingUnit, setEditingUnit] = useState<Unit | null>(null);
  const [editingConversion, setEditingConversion] = useState<UnitConversion | null>(null);
  const [unitForm, setUnitForm] = useState<UnitPayload>(initialUnitForm);
  const [conversionForm, setConversionForm] =
    useState<UnitConversionPayload>(initialConversionForm);

  const unitsQuery = useQuery({
    queryKey: ["inventory-units", search],
    queryFn: () => inventoryService.getUnits({ per_page: 100, search }),
  });

  const conversionsQuery = useQuery({
    queryKey: ["inventory-unit-conversions"],
    queryFn: () => inventoryService.getUnitConversions({ per_page: 100 }),
  });

  const units = unitsQuery.data?.items ?? [];
  const conversions = conversionsQuery.data?.items ?? [];

  const saveUnitMutation = useMutation({
    mutationFn: (payload: UnitPayload) =>
      editingUnit
        ? inventoryService.updateUnit(editingUnit.id, payload)
        : inventoryService.createUnit(payload),
    onSuccess: (response) => {
      toast.success(response.message);
      setOpenUnitModal(false);
      setEditingUnit(null);
      setUnitForm(initialUnitForm);
      void queryClient.invalidateQueries({ queryKey: ["inventory-units"] });
    },
    onError: (error) => toast.error("Gagal menyimpan satuan", parseApiError(error)),
  });

  const deleteUnitMutation = useMutation({
    mutationFn: (id: number) => inventoryService.deleteUnit(id),
    onSuccess: (response) => {
      toast.success(response.message);
      void queryClient.invalidateQueries({ queryKey: ["inventory-units"] });
    },
    onError: (error) => toast.error("Gagal menghapus satuan", parseApiError(error)),
  });

  const saveConversionMutation = useMutation({
    mutationFn: (payload: UnitConversionPayload) =>
      editingConversion
        ? inventoryService.updateUnitConversion(editingConversion.id, payload)
        : inventoryService.createUnitConversion(payload),
    onSuccess: (response) => {
      toast.success(response.message);
      setOpenConversionModal(false);
      setEditingConversion(null);
      setConversionForm(initialConversionForm);
      void queryClient.invalidateQueries({ queryKey: ["inventory-unit-conversions"] });
    },
    onError: (error) => toast.error("Gagal menyimpan konversi satuan", parseApiError(error)),
  });

  const deleteConversionMutation = useMutation({
    mutationFn: (id: number) => inventoryService.deleteUnitConversion(id),
    onSuccess: (response) => {
      toast.success(response.message);
      void queryClient.invalidateQueries({ queryKey: ["inventory-unit-conversions"] });
    },
    onError: (error) => toast.error("Gagal menghapus konversi satuan", parseApiError(error)),
  });

  const openCreateUnit = () => {
    setEditingUnit(null);
    setUnitForm(initialUnitForm);
    setOpenUnitModal(true);
  };

  const openEditUnit = (unit: Unit) => {
    setEditingUnit(unit);
    setUnitForm({
      name: unit.name,
      code: unit.code,
    });
    setOpenUnitModal(true);
  };

  const openCreateConversion = () => {
    setEditingConversion(null);
    setConversionForm(initialConversionForm);
    setOpenConversionModal(true);
  };

  const openEditConversion = (conversion: UnitConversion) => {
    setEditingConversion(conversion);
    setConversionForm({
      from_unit_id: conversion.from_unit_id,
      to_unit_id: conversion.to_unit_id,
      multiplier: Number(conversion.multiplier),
    });
    setOpenConversionModal(true);
  };

  const getUnitName = (id: number) => {
    const unit = units.find((item) => item.id === id);
    return unit ? `${unit.name} (${unit.code})` : "-";
  };

  return (
    <PermissionWrapper permission="units.view">
      <div className="space-y-4">
        <PageHeader
          title="Satuan & Konversi"
          description="Kelola satuan bahan baku dan konversi antar satuan."
          actions={
            <div className="flex flex-wrap gap-2">
              <Button onClick={openCreateUnit}>Tambah Satuan</Button>
              <Button variant="outline" onClick={openCreateConversion}>
                Tambah Konversi
              </Button>
            </div>
          }
        />

        <Card>
          <Input
            placeholder="Cari satuan..."
            value={search}
            onChange={(event) => setSearch(event.target.value)}
          />
        </Card>

        <div className="grid gap-4 lg:grid-cols-2">
          <Card title="Daftar Satuan">
            {unitsQuery.isLoading ? (
              <div className="text-sm text-slate-500">Memuat satuan...</div>
            ) : unitsQuery.isError ? (
              <PageErrorState onRetry={() => void unitsQuery.refetch()} />
            ) : !units.length ? (
              <PageEmptyState title="Belum ada satuan" />
            ) : (
              <div className="space-y-3">
                {units.map((unit) => (
                  <div
                    key={unit.id}
                    className="flex flex-col gap-3 rounded-2xl border border-slate-200 p-4 md:flex-row md:items-center md:justify-between"
                  >
                    <div>
                      <div className="font-medium text-slate-900">{unit.name}</div>
                      <div className="text-sm text-slate-500">{unit.code}</div>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <Button variant="outline" onClick={() => openEditUnit(unit)}>
                        Edit
                      </Button>
                      <Button
                        variant="danger"
                        loading={deleteUnitMutation.isPending}
                        onClick={() => deleteUnitMutation.mutate(unit.id)}
                      >
                        Hapus
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </Card>

          <Card title="Konversi Satuan">
            {conversionsQuery.isLoading ? (
              <div className="text-sm text-slate-500">Memuat konversi...</div>
            ) : conversionsQuery.isError ? (
              <PageErrorState onRetry={() => void conversionsQuery.refetch()} />
            ) : !conversions.length ? (
              <PageEmptyState title="Belum ada konversi satuan" />
            ) : (
              <div className="space-y-3">
                {conversions.map((conversion) => (
                  <div
                    key={conversion.id}
                    className="rounded-2xl border border-slate-200 p-4"
                  >
                    <div className="font-medium text-slate-900">
                      1 {getUnitName(conversion.from_unit_id)} ={" "}
                      {Number(conversion.multiplier).toLocaleString("id-ID")}{" "}
                      {getUnitName(conversion.to_unit_id)}
                    </div>
                    <div className="mt-3 flex flex-wrap gap-2">
                      <Button variant="outline" onClick={() => openEditConversion(conversion)}>
                        Edit
                      </Button>
                      <Button
                        variant="danger"
                        loading={deleteConversionMutation.isPending}
                        onClick={() => deleteConversionMutation.mutate(conversion.id)}
                      >
                        Hapus
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </Card>
        </div>

        <Modal
          open={openUnitModal}
          title={editingUnit ? "Edit Satuan" : "Tambah Satuan"}
          onClose={() => setOpenUnitModal(false)}
          footer={
            <>
              <Button variant="outline" onClick={() => setOpenUnitModal(false)}>
                Batal
              </Button>
              <Button
                loading={saveUnitMutation.isPending}
                onClick={() => saveUnitMutation.mutate(unitForm)}
              >
                Simpan
              </Button>
            </>
          }
        >
          <div className="grid gap-4 md:grid-cols-2">
            <Input
              label="Nama"
              value={unitForm.name}
              onChange={(event) =>
                setUnitForm((prev) => ({ ...prev, name: event.target.value }))
              }
            />
            <Input
              label="Kode"
              value={unitForm.code}
              onChange={(event) =>
                setUnitForm((prev) => ({ ...prev, code: event.target.value }))
              }
            />
          </div>
        </Modal>

        <Modal
          open={openConversionModal}
          title={editingConversion ? "Edit Konversi Satuan" : "Tambah Konversi Satuan"}
          onClose={() => setOpenConversionModal(false)}
          footer={
            <>
              <Button variant="outline" onClick={() => setOpenConversionModal(false)}>
                Batal
              </Button>
              <Button
                loading={saveConversionMutation.isPending}
                onClick={() => saveConversionMutation.mutate(conversionForm)}
              >
                Simpan
              </Button>
            </>
          }
        >
          <div className="grid gap-4 md:grid-cols-3">
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">
                Dari Satuan
              </label>
              <select
                className="w-full rounded-xl border border-slate-300 px-3 py-2 text-sm"
                value={conversionForm.from_unit_id || ""}
                onChange={(event) =>
                  setConversionForm((prev) => ({
                    ...prev,
                    from_unit_id: Number(event.target.value || 0),
                  }))
                }
              >
                <option value="">Pilih satuan</option>
                {units.map((unit) => (
                  <option key={unit.id} value={unit.id}>
                    {unit.name} ({unit.code})
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">
                Ke Satuan
              </label>
              <select
                className="w-full rounded-xl border border-slate-300 px-3 py-2 text-sm"
                value={conversionForm.to_unit_id || ""}
                onChange={(event) =>
                  setConversionForm((prev) => ({
                    ...prev,
                    to_unit_id: Number(event.target.value || 0),
                  }))
                }
              >
                <option value="">Pilih satuan</option>
                {units.map((unit) => (
                  <option key={unit.id} value={unit.id}>
                    {unit.name} ({unit.code})
                  </option>
                ))}
              </select>
            </div>

            <Input
              label="Multiplier"
              type="number"
              value={String(conversionForm.multiplier)}
              onChange={(event) =>
                setConversionForm((prev) => ({
                  ...prev,
                  multiplier: Number(event.target.value || 0),
                }))
              }
            />
          </div>
        </Modal>
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

<a id="file-srcmodulesadminservicesinventoryservicets"></a>
### src\modules\admin\services\inventory.service.ts
- SHA: `c1b010b6ce81`  
- Ukuran: 7 KB
<details><summary><strong>Lihat Kode Lengkap</strong></summary>

```ts
import { apiClient } from "@/services/api/api-client";
import { endpoints } from "@/services/api/endpoints";
import type { ApiMeta, ApiResponse } from "@/types/api";
import type {
  OutletMaterialStock,
  ProductBom,
  RawMaterial,
  RawMaterialCategory,
  Unit,
  UnitConversion,
} from "@/types/inventory";

export interface InventoryPaginationQuery {
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

export interface UnitPayload {
  name: string;
  code: string;
}

export interface UnitConversionPayload {
  from_unit_id: number;
  to_unit_id: number;
  multiplier: number;
}

export interface RawMaterialCategoryPayload {
  name: string;
}

export interface OutletStockPayload {
  outlet_id: number;
  qty_on_hand?: number;
  qty_reserved?: number;
  last_movement_at?: string | null;
}

export interface RawMaterialPayload {
  raw_material_category_id: number;
  unit_id: number;
  code?: string | null;
  name: string;
  sku?: string | null;
  description?: string | null;
  minimum_stock?: number;
  last_purchase_price?: number;
  average_cost?: number;
  is_active?: boolean;
  outlet_stocks?: OutletStockPayload[];
}

export interface OutletMaterialStockPayload {
  outlet_id: number;
  raw_material_id: number;
  qty_on_hand?: number;
  qty_reserved?: number;
  last_movement_at?: string | null;
}

export interface ProductBomItemPayload {
  raw_material_id: number;
  unit_id: number;
  qty: number;
  waste_percent?: number;
}

export interface ProductBomPayload {
  product_id: number;
  version?: number;
  is_active?: boolean;
  notes?: string | null;
  items: ProductBomItemPayload[];
}

export interface RawMaterialQuery extends InventoryPaginationQuery {
  raw_material_category_id?: number | "";
  unit_id?: number | "";
}

export interface OutletMaterialStockQuery extends InventoryPaginationQuery {
  outlet_id?: number | "";
  raw_material_id?: number | "";
}

export interface ProductBomQuery extends InventoryPaginationQuery {
  product_id?: number | "";
  is_active?: boolean | "";
}

const unwrapPaginated = <T>(response: ApiResponse<T[]>): PaginatedResult<T> => ({
  items: response.data,
  meta: response.meta ?? null,
  message: response.message,
});

export const inventoryService = {
  async getUnits(params: InventoryPaginationQuery = {}) {
    const response = await apiClient.get<ApiResponse<Unit[]>>(endpoints.units.index, { params });
    return unwrapPaginated(response.data);
  },

  async createUnit(payload: UnitPayload) {
    const response = await apiClient.post<ApiResponse<Unit>>(endpoints.units.store, payload);
    return response.data;
  },

  async updateUnit(id: number, payload: UnitPayload) {
    const response = await apiClient.put<ApiResponse<Unit>>(endpoints.units.update(id), payload);
    return response.data;
  },

  async deleteUnit(id: number) {
    const response = await apiClient.delete<ApiResponse<null>>(endpoints.units.destroy(id));
    return response.data;
  },

  async getUnitConversions(params: InventoryPaginationQuery = {}) {
    const response = await apiClient.get<ApiResponse<UnitConversion[]>>(
      endpoints.unitConversions.index,
      { params }
    );

    return unwrapPaginated(response.data);
  },

  async createUnitConversion(payload: UnitConversionPayload) {
    const response = await apiClient.post<ApiResponse<UnitConversion>>(
      endpoints.unitConversions.store,
      payload
    );

    return response.data;
  },

  async updateUnitConversion(id: number, payload: UnitConversionPayload) {
    const response = await apiClient.put<ApiResponse<UnitConversion>>(
      endpoints.unitConversions.update(id),
      payload
    );

    return response.data;
  },

  async deleteUnitConversion(id: number) {
    const response = await apiClient.delete<ApiResponse<null>>(
      endpoints.unitConversions.destroy(id)
    );

    return response.data;
  },

  async getRawMaterialCategories(params: InventoryPaginationQuery = {}) {
    const response = await apiClient.get<ApiResponse<RawMaterialCategory[]>>(
      endpoints.rawMaterialCategories.index,
      { params }
    );

    return unwrapPaginated(response.data);
  },

  async createRawMaterialCategory(payload: RawMaterialCategoryPayload) {
    const response = await apiClient.post<ApiResponse<RawMaterialCategory>>(
      endpoints.rawMaterialCategories.store,
      payload
    );

    return response.data;
  },

  async updateRawMaterialCategory(id: number, payload: RawMaterialCategoryPayload) {
    const response = await apiClient.put<ApiResponse<RawMaterialCategory>>(
      endpoints.rawMaterialCategories.update(id),
      payload
    );

    return response.data;
  },

  async deleteRawMaterialCategory(id: number) {
    const response = await apiClient.delete<ApiResponse<null>>(
      endpoints.rawMaterialCategories.destroy(id)
    );

    return response.data;
  },

  async getRawMaterials(params: RawMaterialQuery = {}) {
    const response = await apiClient.get<ApiResponse<RawMaterial[]>>(
      endpoints.rawMaterials.index,
      { params }
    );

    return unwrapPaginated(response.data);
  },

  async createRawMaterial(payload: RawMaterialPayload) {
    const response = await apiClient.post<ApiResponse<RawMaterial>>(
      endpoints.rawMaterials.store,
      payload
    );

    return response.data;
  },

  async updateRawMaterial(id: number, payload: RawMaterialPayload) {
    const response = await apiClient.put<ApiResponse<RawMaterial>>(
      endpoints.rawMaterials.update(id),
      payload
    );

    return response.data;
  },

  async deleteRawMaterial(id: number) {
    const response = await apiClient.delete<ApiResponse<null>>(
      endpoints.rawMaterials.destroy(id)
    );

    return response.data;
  },

  async getOutletMaterialStocks(params: OutletMaterialStockQuery = {}) {
    const response = await apiClient.get<ApiResponse<OutletMaterialStock[]>>(
      endpoints.outletMaterialStocks.index,
      { params }
    );

    return unwrapPaginated(response.data);
  },

  async upsertOutletMaterialStock(payload: OutletMaterialStockPayload) {
    const response = await apiClient.post<ApiResponse<OutletMaterialStock>>(
      endpoints.outletMaterialStocks.upsert,
      payload
    );

    return response.data;
  },

  async getProductBoms(params: ProductBomQuery = {}) {
    const response = await apiClient.get<ApiResponse<ProductBom[]>>(endpoints.productBoms.index, {
      params,
    });

    return unwrapPaginated(response.data);
  },

  async createProductBom(payload: ProductBomPayload) {
    const response = await apiClient.post<ApiResponse<ProductBom>>(
      endpoints.productBoms.store,
      payload
    );

    return response.data;
  },

  async updateProductBom(id: number, payload: ProductBomPayload) {
    const response = await apiClient.put<ApiResponse<ProductBom>>(
      endpoints.productBoms.update(id),
      payload
    );

    return response.data;
  },

  async deleteProductBom(id: number) {
    const response = await apiClient.delete<ApiResponse<null>>(
      endpoints.productBoms.destroy(id)
    );

    return response.data;
  },
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

<a id="file-srcmodulesadminservicespurchasingservicets"></a>
### src\modules\admin\services\purchasing.service.ts
- SHA: `d4aab07bb46a`  
- Ukuran: 5 KB
<details><summary><strong>Lihat Kode Lengkap</strong></summary>

```ts
// src/modules/admin/services/purchasing.service.ts

import { apiClient } from "@/services/api/api-client";
import { endpoints } from "@/services/api/endpoints";
import type { ApiMeta, ApiResponse } from "@/types/api";
import type {
  GoodsReceipt,
  GoodsReceiptStatus,
  PurchaseOrder,
  PurchaseOrderStatus,
  Supplier,
} from "@/types/purchasing";

export interface PaginatedResult<T> {
  items: T[];
  meta: ApiMeta | null;
  message: string;
}

export interface PurchasingPaginationQuery {
  page?: number;
  per_page?: number;
  search?: string;
}

export interface SupplierQuery extends PurchasingPaginationQuery {
  is_active?: boolean | "";
}

export interface PurchaseOrderQuery extends PurchasingPaginationQuery {
  outlet_id?: number | "";
  supplier_id?: number | "";
  status?: PurchaseOrderStatus | "";
}

export interface GoodsReceiptQuery extends PurchasingPaginationQuery {
  purchase_order_id?: number | "";
  outlet_id?: number | "";
  status?: GoodsReceiptStatus | "";
}

export interface SupplierPayload {
  code?: string | null;
  name: string;
  phone?: string | null;
  email?: string | null;
  address?: string | null;
  city?: string | null;
  contact_person?: string | null;
  is_active?: boolean;
}

export interface PurchaseOrderItemPayload {
  raw_material_id: number;
  qty_ordered: number;
  unit_id: number;
  unit_price: number;
  discount_amount?: number;
  notes?: string | null;
}

export interface PurchaseOrderPayload {
  outlet_id: number;
  supplier_id: number;
  order_date: string;
  expected_date?: string | null;
  discount_amount?: number;
  tax_amount?: number;
  notes?: string | null;
  items: PurchaseOrderItemPayload[];
}

export interface GoodsReceiptItemPayload {
  raw_material_id: number;
  qty_received: number;
  unit_id: number;
  unit_cost: number;
  expired_at?: string | null;
  notes?: string | null;
}

export interface GoodsReceiptPayload {
  purchase_order_id: number;
  outlet_id: number;
  received_date: string;
  notes?: string | null;
  items: GoodsReceiptItemPayload[];
}

const unwrapPaginated = <T>(response: ApiResponse<T[]>): PaginatedResult<T> => ({
  items: response.data,
  meta: response.meta ?? null,
  message: response.message,
});

export const purchasingService = {
  async getSuppliers(params: SupplierQuery = {}) {
    const response = await apiClient.get<ApiResponse<Supplier[]>>(endpoints.suppliers.index, {
      params,
    });

    return unwrapPaginated(response.data);
  },

  async createSupplier(payload: SupplierPayload) {
    const response = await apiClient.post<ApiResponse<Supplier>>(endpoints.suppliers.store, payload);
    return response.data;
  },

  async updateSupplier(id: number, payload: SupplierPayload) {
    const response = await apiClient.put<ApiResponse<Supplier>>(
      endpoints.suppliers.update(id),
      payload
    );

    return response.data;
  },

  async deleteSupplier(id: number) {
    const response = await apiClient.delete<ApiResponse<null>>(endpoints.suppliers.destroy(id));
    return response.data;
  },

  async getPurchaseOrders(params: PurchaseOrderQuery = {}) {
    const response = await apiClient.get<ApiResponse<PurchaseOrder[]>>(
      endpoints.purchaseOrders.index,
      { params }
    );

    return unwrapPaginated(response.data);
  },

  async createPurchaseOrder(payload: PurchaseOrderPayload) {
    const response = await apiClient.post<ApiResponse<PurchaseOrder>>(
      endpoints.purchaseOrders.store,
      payload
    );

    return response.data;
  },

  async updatePurchaseOrder(id: number, payload: PurchaseOrderPayload) {
    const response = await apiClient.put<ApiResponse<PurchaseOrder>>(
      endpoints.purchaseOrders.update(id),
      payload
    );

    return response.data;
  },

  async deletePurchaseOrder(id: number) {
    const response = await apiClient.delete<ApiResponse<null>>(
      endpoints.purchaseOrders.destroy(id)
    );

    return response.data;
  },

  async approvePurchaseOrder(id: number) {
    const response = await apiClient.post<ApiResponse<PurchaseOrder>>(
      endpoints.purchaseOrders.approve(id)
    );

    return response.data;
  },

  async cancelPurchaseOrder(id: number) {
    const response = await apiClient.post<ApiResponse<PurchaseOrder>>(
      endpoints.purchaseOrders.cancel(id)
    );

    return response.data;
  },

  async getGoodsReceipts(params: GoodsReceiptQuery = {}) {
    const response = await apiClient.get<ApiResponse<GoodsReceipt[]>>(
      endpoints.goodsReceipts.index,
      { params }
    );

    return unwrapPaginated(response.data);
  },

  async createGoodsReceipt(payload: GoodsReceiptPayload) {
    const response = await apiClient.post<ApiResponse<GoodsReceipt>>(
      endpoints.goodsReceipts.store,
      payload
    );

    return response.data;
  },

  async updateGoodsReceipt(id: number, payload: GoodsReceiptPayload) {
    const response = await apiClient.put<ApiResponse<GoodsReceipt>>(
      endpoints.goodsReceipts.update(id),
      payload
    );

    return response.data;
  },

  async deleteGoodsReceipt(id: number) {
    const response = await apiClient.delete<ApiResponse<null>>(endpoints.goodsReceipts.destroy(id));
    return response.data;
  },

  async postGoodsReceipt(id: number) {
    const response = await apiClient.post<ApiResponse<GoodsReceipt>>(
      endpoints.goodsReceipts.post(id)
    );

    return response.data;
  },

  async cancelGoodsReceipt(id: number) {
    const response = await apiClient.post<ApiResponse<GoodsReceipt>>(
      endpoints.goodsReceipts.cancel(id)
    );

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

<a id="file-srcmoduleskitchencomponentskitchenticketcardtsx"></a>
### src\modules\kitchen\components\KitchenTicketCard.tsx
- SHA: `ec9044b182db`  
- Ukuran: 6 KB
<details><summary><strong>Lihat Kode Lengkap</strong></summary>

```tsx
import { Badge, Button, Card } from "@/components/ui";
import type { KitchenTicket, KitchenTicketStatus } from "@/types/kitchen";

interface KitchenTicketCardProps {
  ticket: KitchenTicket;
  loading?: boolean;
  onView: (ticket: KitchenTicket) => void;
  onPrint: (ticket: KitchenTicket) => void;
  onStartPreparing: (ticket: KitchenTicket) => void;
  onReady: (ticket: KitchenTicket) => void;
  onServe: (ticket: KitchenTicket) => void;
  onCancel: (ticket: KitchenTicket) => void;
}

const statusLabel: Record<KitchenTicketStatus, string> = {
  pending: "Pending",
  preparing: "Preparing",
  ready: "Ready",
  served: "Served",
  cancelled: "Cancelled",
};

const statusVariant: Record<KitchenTicketStatus, "default" | "success" | "warning" | "danger" | "info"> = {
  pending: "warning",
  preparing: "info",
  ready: "success",
  served: "default",
  cancelled: "danger",
};

const channelLabel: Record<string, string> = {
  pos: "POS",
  dine_in: "Dine In",
  takeaway: "Takeaway",
  pickup: "Pickup",
  delivery: "Delivery",
  website: "Website",
};

const formatTime = (value?: string | null) => {
  if (!value) {
    return "-";
  }

  return new Intl.DateTimeFormat("id-ID", {
    hour: "2-digit",
    minute: "2-digit",
    day: "2-digit",
    month: "short",
  }).format(new Date(value));
};

const getTicketAgeMinutes = (value?: string | null) => {
  if (!value) {
    return 0;
  }

  const createdTime = new Date(value).getTime();
  const now = Date.now();

  if (Number.isNaN(createdTime)) {
    return 0;
  }

  return Math.max(0, Math.floor((now - createdTime) / 60000));
};

export function KitchenTicketCard({
  ticket,
  loading = false,
  onView,
  onPrint,
  onStartPreparing,
  onReady,
  onServe,
  onCancel,
}: KitchenTicketCardProps) {
  const order = ticket.order;
  const items = ticket.items ?? [];
  const ageMinutes = getTicketAgeMinutes(ticket.created_at);
  const isOverdue = ageMinutes >= 30 && !["served", "cancelled"].includes(ticket.status);

  return (
    <Card
      className={[
        "border-slate-700 bg-slate-900 text-white",
        isOverdue ? "ring-2 ring-red-500" : "",
      ].join(" ")}
      title={ticket.ticket_number}
      description={order?.order_number ?? "-"}
      actions={<Badge variant={statusVariant[ticket.status]}>{statusLabel[ticket.status]}</Badge>}
    >
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-3 text-sm">
          <div className="rounded-xl bg-slate-800 p-3">
            <div className="text-slate-400">Queue</div>
            <div className="text-xl font-semibold">{order?.queue_number ?? "-"}</div>
          </div>
          <div className="rounded-xl bg-slate-800 p-3">
            <div className="text-slate-400">Channel</div>
            <div className="text-xl font-semibold">
              {channelLabel[order?.order_channel ?? ""] ?? order?.order_channel ?? "-"}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3 text-sm">
          <div>
            <div className="text-slate-400">Outlet</div>
            <div className="font-medium">{order?.outlet?.name ?? "-"}</div>
          </div>
          <div>
            <div className="text-slate-400">Masuk</div>
            <div className="font-medium">{formatTime(ticket.created_at)}</div>
          </div>
        </div>

        <div className="space-y-2">
          {items.length ? (
            items.slice(0, 4).map((item) => (
              <div key={item.id} className="rounded-xl bg-slate-800 p-3">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <div className="font-semibold">{item.item_name_snapshot}</div>
                    {item.notes ? (
                      <div className="mt-1 text-xs text-amber-300">{item.notes}</div>
                    ) : null}
                    {item.order_item?.notes && item.order_item.notes !== item.notes ? (
                      <div className="mt-1 text-xs text-amber-300">{item.order_item.notes}</div>
                    ) : null}
                  </div>
                  <div className="rounded-lg bg-slate-700 px-3 py-1 text-sm font-semibold">
                    x{Number(item.qty)}
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="rounded-xl bg-slate-800 p-3 text-sm text-slate-300">
              Belum ada item.
            </div>
          )}

          {items.length > 4 ? (
            <div className="text-sm text-slate-400">+{items.length - 4} item lainnya</div>
          ) : null}
        </div>

        {order?.notes ? (
          <div className="rounded-xl border border-amber-500/40 bg-amber-500/10 p-3 text-sm text-amber-100">
            {order.notes}
          </div>
        ) : null}

        <div className="grid grid-cols-2 gap-2">
          <Button variant="secondary" disabled={loading} onClick={() => onView(ticket)}>
            Detail
          </Button>

          {!ticket.printed_at ? (
            <Button variant="outline" disabled={loading} onClick={() => onPrint(ticket)}>
              Print
            </Button>
          ) : null}

          {ticket.status === "pending" ? (
            <Button loading={loading} onClick={() => onStartPreparing(ticket)}>
              Mulai
            </Button>
          ) : null}

          {ticket.status === "preparing" ? (
            <Button loading={loading} onClick={() => onReady(ticket)}>
              Ready
            </Button>
          ) : null}

          {ticket.status === "ready" ? (
            <Button loading={loading} onClick={() => onServe(ticket)}>
              Serve
            </Button>
          ) : null}

          {["pending", "preparing"].includes(ticket.status) ? (
            <Button variant="danger" disabled={loading} onClick={() => onCancel(ticket)}>
              Cancel
            </Button>
          ) : null}
        </div>
      </div>
    </Card>
  );
}
```
</details>

<a id="file-srcmoduleskitchencomponentskitchenticketdetailmodaltsx"></a>
### src\modules\kitchen\components\KitchenTicketDetailModal.tsx
- SHA: `eef8976e1d7d`  
- Ukuran: 6 KB
<details><summary><strong>Lihat Kode Lengkap</strong></summary>

```tsx
import { Badge, Button, Modal } from "@/components/ui";
import type { KitchenTicket, KitchenTicketStatus } from "@/types/kitchen";

interface KitchenTicketDetailModalProps {
  open: boolean;
  ticket: KitchenTicket | null;
  loading?: boolean;
  onClose: () => void;
  onStartPreparing: (ticket: KitchenTicket) => void;
  onReady: (ticket: KitchenTicket) => void;
  onServe: (ticket: KitchenTicket) => void;
  onCancel: (ticket: KitchenTicket) => void;
}

const statusVariant: Record<KitchenTicketStatus, "default" | "success" | "warning" | "danger" | "info"> = {
  pending: "warning",
  preparing: "info",
  ready: "success",
  served: "default",
  cancelled: "danger",
};

const formatDateTime = (value?: string | null) => {
  if (!value) {
    return "-";
  }

  return new Intl.DateTimeFormat("id-ID", {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(new Date(value));
};

export function KitchenTicketDetailModal({
  open,
  ticket,
  loading = false,
  onClose,
  onStartPreparing,
  onReady,
  onServe,
  onCancel,
}: KitchenTicketDetailModalProps) {
  const items = ticket?.items ?? [];

  return (
    <Modal
      open={open}
      title={ticket ? `Detail Ticket ${ticket.ticket_number}` : "Detail Ticket"}
      onClose={onClose}
      footer={
        ticket ? (
          <>
            <Button variant="outline" onClick={onClose}>
              Tutup
            </Button>

            {ticket.status === "pending" ? (
              <Button loading={loading} onClick={() => onStartPreparing(ticket)}>
                Mulai Preparing
              </Button>
            ) : null}

            {ticket.status === "preparing" ? (
              <Button loading={loading} onClick={() => onReady(ticket)}>
                Tandai Ready
              </Button>
            ) : null}

            {ticket.status === "ready" ? (
              <Button loading={loading} onClick={() => onServe(ticket)}>
                Serve
              </Button>
            ) : null}

            {["pending", "preparing"].includes(ticket.status) ? (
              <Button variant="danger" disabled={loading} onClick={() => onCancel(ticket)}>
                Cancel
              </Button>
            ) : null}
          </>
        ) : null
      }
    >
      {!ticket ? null : (
        <div className="space-y-5">
          <div className="flex flex-wrap items-center gap-2">
            <Badge variant={statusVariant[ticket.status]}>{ticket.status}</Badge>
            <Badge>{ticket.order?.order_channel ?? "-"}</Badge>
            <Badge>{ticket.order?.payment_status ?? "-"}</Badge>
          </div>

          <div className="grid gap-3 rounded-2xl bg-slate-50 p-4 text-sm md:grid-cols-2">
            <div>
              <div className="text-slate-500">Order Number</div>
              <div className="font-semibold text-slate-900">{ticket.order?.order_number ?? "-"}</div>
            </div>
            <div>
              <div className="text-slate-500">Queue Number</div>
              <div className="font-semibold text-slate-900">{ticket.order?.queue_number ?? "-"}</div>
            </div>
            <div>
              <div className="text-slate-500">Outlet</div>
              <div className="font-semibold text-slate-900">{ticket.order?.outlet?.name ?? "-"}</div>
            </div>
            <div>
              <div className="text-slate-500">Customer</div>
              <div className="font-semibold text-slate-900">{ticket.order?.customer?.name ?? "-"}</div>
            </div>
            <div>
              <div className="text-slate-500">Created</div>
              <div className="font-semibold text-slate-900">{formatDateTime(ticket.created_at)}</div>
            </div>
            <div>
              <div className="text-slate-500">Printed</div>
              <div className="font-semibold text-slate-900">{formatDateTime(ticket.printed_at)}</div>
            </div>
            <div>
              <div className="text-slate-500">Prepared</div>
              <div className="font-semibold text-slate-900">{formatDateTime(ticket.prepared_at)}</div>
            </div>
            <div>
              <div className="text-slate-500">Ready</div>
              <div className="font-semibold text-slate-900">{formatDateTime(ticket.ready_at)}</div>
            </div>
          </div>

          {ticket.order?.notes ? (
            <div className="rounded-2xl border border-amber-200 bg-amber-50 p-4 text-sm text-amber-800">
              {ticket.order.notes}
            </div>
          ) : null}

          <div className="space-y-3">
            <h3 className="text-sm font-semibold text-slate-900">Item Pesanan</h3>

            {items.length ? (
              items.map((item) => (
                <div key={item.id} className="rounded-2xl border border-slate-200 p-4">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="font-semibold text-slate-900">{item.item_name_snapshot}</div>
                      <div className="mt-1 text-sm text-slate-500">
                        Qty: {Number(item.qty)}
                      </div>
                    </div>
                    <div className="rounded-xl bg-slate-100 px-3 py-1 text-sm font-semibold text-slate-800">
                      x{Number(item.qty)}
                    </div>
                  </div>

                  {item.notes ? (
                    <div className="mt-3 rounded-xl bg-amber-50 p-3 text-sm text-amber-700">
                      Catatan item: {item.notes}
                    </div>
                  ) : null}

                  {item.order_item?.notes && item.order_item.notes !== item.notes ? (
                    <div className="mt-3 rounded-xl bg-amber-50 p-3 text-sm text-amber-700">
                      Catatan order item: {item.order_item.notes}
                    </div>
                  ) : null}
                </div>
              ))
            ) : (
              <div className="rounded-2xl border border-slate-200 p-4 text-sm text-slate-500">
                Belum ada item pada ticket ini.
              </div>
            )}
          </div>
        </div>
      )}
    </Modal>
  );
}
```
</details>

<a id="file-srcmoduleskitchenpageskitchenticketspagetsx"></a>
### src\modules\kitchen\pages\KitchenTicketsPage.tsx
- SHA: `a1266712187a`  
- Ukuran: 8 KB
<details><summary><strong>Lihat Kode Lengkap</strong></summary>

```tsx
import { useMemo, useState } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { PageHeader } from "@/components/navigation/PageHeader";
import { PermissionWrapper } from "@/components/navigation/PermissionWrapper";
import { PageErrorState } from "@/components/feedback/PageErrorState";
import { PageEmptyState } from "@/components/feedback/PageEmptyState";
import { Badge, Button, Card, Input } from "@/components/ui";
import { KitchenTicketCard } from "@/modules/kitchen/components/KitchenTicketCard";
import { KitchenTicketDetailModal } from "@/modules/kitchen/components/KitchenTicketDetailModal";
import { kitchenService } from "@/modules/kitchen/services/kitchen.service";
import { parseApiError } from "@/services/api/error-parser";
import { useToast } from "@/hooks/useToast";
import { useActiveOutlet } from "@/hooks/useActiveOutlet";
import type { KitchenTicket, KitchenTicketStatus } from "@/types/kitchen";

const statusOptions: Array<{ label: string; value: KitchenTicketStatus | "" }> = [
  { label: "Semua", value: "" },
  { label: "Pending", value: "pending" },
  { label: "Preparing", value: "preparing" },
  { label: "Ready", value: "ready" },
  { label: "Served", value: "served" },
  { label: "Cancelled", value: "cancelled" },
];

const statusVariant: Record<KitchenTicketStatus, "default" | "success" | "warning" | "danger" | "info"> = {
  pending: "warning",
  preparing: "info",
  ready: "success",
  served: "default",
  cancelled: "danger",
};

export default function KitchenTicketsPage() {
  const toast = useToast();
  const queryClient = useQueryClient();
  const { activeOutletId } = useActiveOutlet();

  const [search, setSearch] = useState("");
  const [status, setStatus] = useState<KitchenTicketStatus | "">("");
  const [selectedTicket, setSelectedTicket] = useState<KitchenTicket | null>(null);
  const [detailOpen, setDetailOpen] = useState(false);
  const [fullscreen, setFullscreen] = useState(false);

  const ticketsQuery = useQuery({
    queryKey: ["kitchen-tickets", search, status, activeOutletId],
    queryFn: () =>
      kitchenService.getTickets({
        per_page: 100,
        search,
        status,
        outlet_id: activeOutletId ?? "",
      }),
    refetchInterval: 10000,
  });

  const tickets = ticketsQuery.data?.items ?? [];

  const counters = useMemo(() => {
    return tickets.reduce<Record<KitchenTicketStatus, number>>(
      (accumulator, ticket) => {
        accumulator[ticket.status] += 1;
        return accumulator;
      },
      {
        pending: 0,
        preparing: 0,
        ready: 0,
        served: 0,
        cancelled: 0,
      }
    );
  }, [tickets]);

  const invalidateTickets = async () => {
    await queryClient.invalidateQueries({ queryKey: ["kitchen-tickets"] });
  };

  const actionMutation = useMutation({
    mutationFn: async ({
      ticket,
      action,
    }: {
      ticket: KitchenTicket;
      action: "print" | "start" | "ready" | "serve" | "cancel";
    }) => {
      if (action === "print") {
        return kitchenService.markPrinted(ticket.id);
      }

      if (action === "start") {
        return kitchenService.startPreparing(ticket.id);
      }

      if (action === "ready") {
        return kitchenService.markReady(ticket.id);
      }

      if (action === "serve") {
        return kitchenService.serve(ticket.id);
      }

      return kitchenService.cancel(ticket.id);
    },
    onSuccess: async (response) => {
      toast.success(response.message);
      setSelectedTicket(response.data);
      await invalidateTickets();
    },
    onError: (error) => {
      toast.error("Gagal memproses kitchen ticket", parseApiError(error));
    },
  });

  const openDetail = (ticket: KitchenTicket) => {
    setSelectedTicket(ticket);
    setDetailOpen(true);
  };

  return (
    <PermissionWrapper permission="kitchen_tickets.view">
      <div
        className={[
          "space-y-4",
          fullscreen ? "fixed inset-0 z-50 overflow-y-auto bg-slate-950 p-4" : "",
        ].join(" ")}
      >
        <PageHeader
          title="Kitchen Ticket Board"
          description="Pantau antrian pesanan dapur dan ubah status pengerjaan secara cepat."
          actions={
            <div className="flex flex-wrap gap-2">
              <Button variant="outline" onClick={() => void ticketsQuery.refetch()}>
                Refresh
              </Button>
              <Button variant={fullscreen ? "secondary" : "primary"} onClick={() => setFullscreen((prev) => !prev)}>
                {fullscreen ? "Exit Fullscreen" : "Fullscreen"}
              </Button>
            </div>
          }
        />

        <div className="grid gap-3 md:grid-cols-5">
          {(["pending", "preparing", "ready", "served", "cancelled"] as KitchenTicketStatus[]).map(
            (item) => (
              <Card key={item} className={fullscreen ? "border-slate-700 bg-slate-900" : ""}>
                <div className="flex items-center justify-between">
                  <div>
                    <div className={fullscreen ? "text-sm text-slate-400" : "text-sm text-slate-500"}>
                      {item}
                    </div>
                    <div className={fullscreen ? "text-3xl font-semibold text-white" : "text-3xl font-semibold text-slate-900"}>
                      {counters[item]}
                    </div>
                  </div>
                  <Badge variant={statusVariant[item]}>{item}</Badge>
                </div>
              </Card>
            )
          )}
        </div>

        <Card className={fullscreen ? "border-slate-700 bg-slate-900" : ""}>
          <div className="grid gap-3 md:grid-cols-[1fr_220px]">
            <Input
              placeholder="Cari ticket, order number, atau queue number..."
              value={search}
              onChange={(event) => setSearch(event.target.value)}
            />

            <select
              className="w-full rounded-xl border border-slate-300 px-3 py-2 text-sm"
              value={status}
              onChange={(event) => setStatus(event.target.value as KitchenTicketStatus | "")}
            >
              {statusOptions.map((option) => (
                <option key={option.label} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        </Card>

        {ticketsQuery.isLoading ? (
          <Card className={fullscreen ? "border-slate-700 bg-slate-900 text-white" : ""}>
            Memuat kitchen tickets...
          </Card>
        ) : ticketsQuery.isError ? (
          <PageErrorState onRetry={() => void ticketsQuery.refetch()} />
        ) : !tickets.length ? (
          <PageEmptyState title="Belum ada kitchen ticket" />
        ) : (
          <div className="grid gap-4 xl:grid-cols-3 2xl:grid-cols-4">
            {tickets.map((ticket) => (
              <KitchenTicketCard
                key={ticket.id}
                ticket={ticket}
                loading={actionMutation.isPending}
                onView={openDetail}
                onPrint={(item) => actionMutation.mutate({ ticket: item, action: "print" })}
                onStartPreparing={(item) => actionMutation.mutate({ ticket: item, action: "start" })}
                onReady={(item) => actionMutation.mutate({ ticket: item, action: "ready" })}
                onServe={(item) => actionMutation.mutate({ ticket: item, action: "serve" })}
                onCancel={(item) => actionMutation.mutate({ ticket: item, action: "cancel" })}
              />
            ))}
          </div>
        )}

        <KitchenTicketDetailModal
          open={detailOpen}
          ticket={selectedTicket}
          loading={actionMutation.isPending}
          onClose={() => setDetailOpen(false)}
          onStartPreparing={(item) => actionMutation.mutate({ ticket: item, action: "start" })}
          onReady={(item) => actionMutation.mutate({ ticket: item, action: "ready" })}
          onServe={(item) => actionMutation.mutate({ ticket: item, action: "serve" })}
          onCancel={(item) => actionMutation.mutate({ ticket: item, action: "cancel" })}
        />
      </div>
    </PermissionWrapper>
  );
}
```
</details>

<a id="file-srcmoduleskitchenpagesreadyqueuepagetsx"></a>
### src\modules\kitchen\pages\ReadyQueuePage.tsx
- SHA: `1685d1caa430`  
- Ukuran: 5 KB
<details><summary><strong>Lihat Kode Lengkap</strong></summary>

```tsx
import { useState } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { PageHeader } from "@/components/navigation/PageHeader";
import { PermissionWrapper } from "@/components/navigation/PermissionWrapper";
import { PageErrorState } from "@/components/feedback/PageErrorState";
import { PageEmptyState } from "@/components/feedback/PageEmptyState";
import { Badge, Button, Card, Input } from "@/components/ui";
import { kitchenService } from "@/modules/kitchen/services/kitchen.service";
import { parseApiError } from "@/services/api/error-parser";
import { useToast } from "@/hooks/useToast";
import { useActiveOutlet } from "@/hooks/useActiveOutlet";
import type { KitchenTicket } from "@/types/kitchen";

const formatTime = (value?: string | null) => {
  if (!value) {
    return "-";
  }

  return new Intl.DateTimeFormat("id-ID", {
    hour: "2-digit",
    minute: "2-digit",
    day: "2-digit",
    month: "short",
  }).format(new Date(value));
};

export default function ReadyQueuePage() {
  const toast = useToast();
  const queryClient = useQueryClient();
  const { activeOutletId } = useActiveOutlet();

  const [search, setSearch] = useState("");

  const readyQuery = useQuery({
    queryKey: ["kitchen-ready-queue", search, activeOutletId],
    queryFn: () =>
      kitchenService.getTickets({
        per_page: 100,
        search,
        status: "ready",
        outlet_id: activeOutletId ?? "",
      }),
    refetchInterval: 10000,
  });

  const readyTickets = readyQuery.data?.items ?? [];

  const serveMutation = useMutation({
    mutationFn: (ticket: KitchenTicket) => kitchenService.serve(ticket.id),
    onSuccess: async (response) => {
      toast.success(response.message);
      await queryClient.invalidateQueries({ queryKey: ["kitchen-ready-queue"] });
      await queryClient.invalidateQueries({ queryKey: ["kitchen-tickets"] });
    },
    onError: (error) => {
      toast.error("Gagal menyelesaikan ticket", parseApiError(error));
    },
  });

  return (
    <PermissionWrapper permission="kitchen_tickets.view">
      <div className="space-y-4">
        <PageHeader
          title="Ready Queue"
          description="Daftar pesanan yang sudah siap disajikan atau diserahkan."
          actions={
            <Button variant="outline" onClick={() => void readyQuery.refetch()}>
              Refresh
            </Button>
          }
        />

        <Card>
          <Input
            placeholder="Cari ticket, order number, atau queue number..."
            value={search}
            onChange={(event) => setSearch(event.target.value)}
          />
        </Card>

        {readyQuery.isLoading ? (
          <Card>Memuat ready queue...</Card>
        ) : readyQuery.isError ? (
          <PageErrorState onRetry={() => void readyQuery.refetch()} />
        ) : !readyTickets.length ? (
          <PageEmptyState title="Belum ada pesanan ready" />
        ) : (
          <div className="grid gap-4 lg:grid-cols-2 xl:grid-cols-3">
            {readyTickets.map((ticket) => (
              <Card
                key={ticket.id}
                title={ticket.ticket_number}
                description={ticket.order?.order_number ?? "-"}
                actions={<Badge variant="success">Ready</Badge>}
              >
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-3 text-sm">
                    <div className="rounded-xl bg-slate-50 p-3">
                      <div className="text-slate-500">Queue</div>
                      <div className="text-2xl font-semibold text-slate-900">
                        {ticket.order?.queue_number ?? "-"}
                      </div>
                    </div>

                    <div className="rounded-xl bg-slate-50 p-3">
                      <div className="text-slate-500">Ready At</div>
                      <div className="font-semibold text-slate-900">
                        {formatTime(ticket.ready_at)}
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    {(ticket.items ?? []).map((item) => (
                      <div key={item.id} className="flex justify-between rounded-xl border border-slate-200 p-3">
                        <div>
                          <div className="font-medium text-slate-900">{item.item_name_snapshot}</div>
                          {item.notes ? (
                            <div className="mt-1 text-xs text-amber-700">{item.notes}</div>
                          ) : null}
                        </div>
                        <div className="font-semibold text-slate-900">x{Number(item.qty)}</div>
                      </div>
                    ))}
                  </div>

                  <Button
                    fullWidth
                    loading={serveMutation.isPending}
                    onClick={() => serveMutation.mutate(ticket)}
                  >
                    Serve / Selesai
                  </Button>
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

<a id="file-srcmoduleskitchenserviceskitchenservicets"></a>
### src\modules\kitchen\services\kitchen.service.ts
- SHA: `dd144fb806c5`  
- Ukuran: 3 KB
<details><summary><strong>Lihat Kode Lengkap</strong></summary>

```ts
import { apiClient } from "@/services/api/api-client";
import type { ApiResponse } from "@/types/api";
import type {
  KitchenPaginatedResult,
  KitchenTicket,
  KitchenTicketActionPayload,
  KitchenTicketQuery,
} from "@/types/kitchen";

const unwrapPaginated = <T>(response: ApiResponse<T[]>): KitchenPaginatedResult<T> => ({
  items: response.data,
  meta: response.meta ?? null,
  message: response.message,
});

const kitchenTicketEndpoints = {
  index: "/kitchen-tickets",
  show: (id: number | string) => `/kitchen-tickets/${id}`,
  print: (id: number | string) => `/kitchen-tickets/${id}/print`,
  startPreparing: (id: number | string) => `/kitchen-tickets/${id}/start-preparing`,
  ready: (id: number | string) => `/kitchen-tickets/${id}/ready`,
  serve: (id: number | string) => `/kitchen-tickets/${id}/serve`,
  cancel: (id: number | string) => `/kitchen-tickets/${id}/cancel`,
  destroy: (id: number | string) => `/kitchen-tickets/${id}`,
};

export const kitchenService = {
  async getTickets(params: KitchenTicketQuery = {}) {
    const response = await apiClient.get<ApiResponse<KitchenTicket[]>>(
      kitchenTicketEndpoints.index,
      { params }
    );

    return unwrapPaginated(response.data);
  },

  async getTicket(id: number) {
    const response = await apiClient.get<ApiResponse<KitchenTicket>>(
      kitchenTicketEndpoints.show(id)
    );

    return response.data;
  },

  async markPrinted(id: number, payload: KitchenTicketActionPayload = {}) {
    const response = await apiClient.post<ApiResponse<KitchenTicket>>(
      kitchenTicketEndpoints.print(id),
      {
        printed_at: payload.printed_at ?? new Date().toISOString(),
      }
    );

    return response.data;
  },

  async startPreparing(id: number, payload: KitchenTicketActionPayload = {}) {
    const response = await apiClient.post<ApiResponse<KitchenTicket>>(
      kitchenTicketEndpoints.startPreparing(id),
      {
        prepared_at: payload.prepared_at ?? new Date().toISOString(),
        notes: payload.notes ?? null,
      }
    );

    return response.data;
  },

  async markReady(id: number, payload: KitchenTicketActionPayload = {}) {
    const response = await apiClient.post<ApiResponse<KitchenTicket>>(
      kitchenTicketEndpoints.ready(id),
      {
        ready_at: payload.ready_at ?? new Date().toISOString(),
        notes: payload.notes ?? null,
      }
    );

    return response.data;
  },

  async serve(id: number, payload: KitchenTicketActionPayload = {}) {
    const response = await apiClient.post<ApiResponse<KitchenTicket>>(
      kitchenTicketEndpoints.serve(id),
      {
        completed_at: payload.completed_at ?? new Date().toISOString(),
        notes: payload.notes ?? null,
      }
    );

    return response.data;
  },

  async cancel(id: number, payload: KitchenTicketActionPayload = {}) {
    const response = await apiClient.post<ApiResponse<KitchenTicket>>(
      kitchenTicketEndpoints.cancel(id),
      {
        cancelled_at: payload.cancelled_at ?? new Date().toISOString(),
        notes: payload.notes ?? null,
      }
    );

    return response.data;
  },

  async deleteTicket(id: number) {
    const response = await apiClient.delete<ApiResponse<null>>(
      kitchenTicketEndpoints.destroy(id)
    );

    return response.data;
  },
};
```
</details>

<a id="file-srcmodulesposcomponentsposcartpaneltsx"></a>
### src\modules\pos\components\PosCartPanel.tsx
- SHA: `2e3554a7e459`  
- Ukuran: 10 KB
<details><summary><strong>Lihat Kode Lengkap</strong></summary>

```tsx
import { Badge, Button, Card, Input } from "@/components/ui";
import type { Customer } from "@/types/customer";
import type { PosCartItem, PosOrderChannel } from "@/modules/pos/types/pos";

interface PosCartPanelProps {
  items: PosCartItem[];
  customer: Customer | null;
  customerSearch: string;
  onCustomerSearchChange: (value: string) => void;
  customerResults: Customer[];
  canSearchCustomer: boolean;
  loadingCustomers: boolean;
  orderChannel: PosOrderChannel;
  onOrderChannelChange: (value: PosOrderChannel) => void;
  onPickCustomer: (customer: Customer) => void;
  onClearCustomer: () => void;
  onUpdateQty: (itemId: string, qty: number) => void;
  onUpdateNotes: (itemId: string, notes: string) => void;
  onRemoveItem: (itemId: string) => void;
  onClearCart: () => void;
  onHoldOrder: () => void;
  onRestoreHeldOrder: () => void;
  onDiscardHeldOrder: () => void;
  hasHeldOrder: boolean;
  onSubmitOrder: () => void;
  subtotal: number;
  totalQty: number;
}

const formatCurrency = (value: number) =>
  new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(Number(value || 0));

const getItemUnitPrice = (item: PosCartItem) => {
  const variantsTotal = (item.selected_variants ?? []).reduce(
    (sum, entry) => sum + Number(entry.price_adjustment || 0),
    0
  );

  const modifiersTotal = (item.selected_modifiers ?? []).reduce(
    (sum, entry) => sum + Number(entry.price || 0) * Number(entry.qty || 0),
    0
  );

  return Number(item.base_unit_price || 0) + variantsTotal + modifiersTotal;
};

const getItemLineTotal = (item: PosCartItem) => getItemUnitPrice(item) * Number(item.qty || 0);

export function PosCartPanel({
  items,
  customer,
  customerSearch,
  onCustomerSearchChange,
  customerResults,
  canSearchCustomer,
  loadingCustomers,
  orderChannel,
  onOrderChannelChange,
  onPickCustomer,
  onClearCustomer,
  onUpdateQty,
  onUpdateNotes,
  onRemoveItem,
  onClearCart,
  onHoldOrder,
  onRestoreHeldOrder,
  onDiscardHeldOrder,
  hasHeldOrder,
  onSubmitOrder,
  subtotal,
  totalQty,
}: PosCartPanelProps) {
  return (
    <Card title="Cart & Checkout" description="Ringkasan order kasir dan aksi checkout.">
      <div className="space-y-4">
        <div>
          <label className="mb-2 block text-sm font-medium text-slate-700">Order Channel</label>
          <select
            className="w-full rounded-xl border border-slate-300 px-3 py-2 text-sm"
            value={orderChannel}
            onChange={(event) => onOrderChannelChange(event.target.value as PosOrderChannel)}
          >
            <option value="pos">pos</option>
            <option value="takeaway">takeaway</option>
            <option value="pickup">pickup</option>
            <option value="dine_in">dine_in</option>
            <option value="delivery">delivery</option>
            <option value="website">website</option>
          </select>
        </div>

        <div className="rounded-2xl border border-slate-200 p-4">
          <div className="mb-2 flex items-center justify-between">
            <div className="text-sm font-semibold text-slate-900">Customer</div>
            {customer ? (
              <Button variant="outline" onClick={onClearCustomer}>
                Lepas Customer
              </Button>
            ) : null}
          </div>

          {customer ? (
            <div className="rounded-xl bg-slate-50 p-3 text-sm text-slate-700">
              <div className="font-semibold text-slate-900">{customer.name}</div>
              <div>{customer.phone ?? "-"}</div>
              <div>{customer.email ?? "-"}</div>
            </div>
          ) : canSearchCustomer ? (
            <div className="space-y-3">
              <Input
                placeholder="Cari customer minimal 2 huruf..."
                value={customerSearch}
                onChange={(event) => onCustomerSearchChange(event.target.value)}
              />

              {loadingCustomers ? (
                <div className="text-sm text-slate-500">Mencari customer...</div>
              ) : customerSearch.trim().length >= 2 && customerResults.length ? (
                <div className="space-y-2">
                  {customerResults.map((entry) => (
                    <button
                      key={entry.id}
                      type="button"
                      className="w-full rounded-xl border border-slate-200 p-3 text-left hover:bg-slate-50"
                      onClick={() => onPickCustomer(entry)}
                    >
                      <div className="font-medium text-slate-900">{entry.name}</div>
                      <div className="text-xs text-slate-500">
                        {entry.phone ?? "-"} · {entry.email ?? "-"}
                      </div>
                    </button>
                  ))}
                </div>
              ) : customerSearch.trim().length >= 2 ? (
                <div className="text-sm text-slate-500">Customer tidak ditemukan.</div>
              ) : (
                <div className="text-sm text-slate-500">
                  Customer opsional. Bisa lanjut tanpa customer.
                </div>
              )}
            </div>
          ) : (
            <div className="text-sm text-slate-500">
              User ini tidak memiliki permission untuk mencari customer.
            </div>
          )}
        </div>

        <div className="grid gap-2 sm:grid-cols-3">
          <Button variant="outline" onClick={onHoldOrder}>
            Hold Order
          </Button>
          <Button variant="outline" onClick={onRestoreHeldOrder} disabled={!hasHeldOrder}>
            Restore Held
          </Button>
          <Button variant="danger" onClick={onDiscardHeldOrder} disabled={!hasHeldOrder}>
            Hapus Held
          </Button>
        </div>

        {!items.length ? (
          <div className="rounded-2xl border border-dashed border-slate-300 px-4 py-8 text-center text-sm text-slate-500">
            Cart masih kosong.
          </div>
        ) : (
          <div className="space-y-3">
            {items.map((item) => {
              const unitPrice = getItemUnitPrice(item);
              const lineTotal = getItemLineTotal(item);

              return (
                <div key={item.id} className="rounded-2xl border border-slate-200 p-4">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <div className="font-semibold text-slate-900">{item.product_name}</div>
                      <div className="text-xs text-slate-500">{formatCurrency(unitPrice)} / item</div>
                    </div>

                    <Badge variant={item.product_type === "bundle" ? "warning" : "info"}>
                      {item.product_type}
                    </Badge>
                  </div>

                  {item.selected_variants?.length ? (
                    <div className="mt-3 space-y-1 text-xs text-slate-600">
                      {item.selected_variants.map((entry, index) => (
                        <div key={`${item.id}-variant-${index}`}>
                          Variant: {entry.group_name} - {entry.option_name}
                          {Number(entry.price_adjustment) > 0
                            ? ` (+${formatCurrency(entry.price_adjustment)})`
                            : ""}
                        </div>
                      ))}
                    </div>
                  ) : null}

                  {item.selected_modifiers?.length ? (
                    <div className="mt-3 space-y-1 text-xs text-slate-600">
                      {item.selected_modifiers.map((entry, index) => (
                        <div key={`${item.id}-modifier-${index}`}>
                          Modifier: {entry.group_name} - {entry.option_name} x{entry.qty}
                          {Number(entry.price) > 0 ? ` (+${formatCurrency(entry.price)})` : ""}
                        </div>
                      ))}
                    </div>
                  ) : null}

                  <div className="mt-3 grid gap-3">
                    <div className="grid grid-cols-[90px_1fr_auto] items-center gap-3">
                      <Input
                        label="Qty"
                        type="number"
                        value={String(item.qty)}
                        onChange={(event) =>
                          onUpdateQty(item.id, Math.max(0, Number(event.target.value || 0)))
                        }
                      />

                      <Input
                        label="Catatan"
                        value={item.notes}
                        onChange={(event) => onUpdateNotes(item.id, event.target.value)}
                        placeholder="Catatan item..."
                      />

                      <div className="pt-7">
                        <Button variant="danger" onClick={() => onRemoveItem(item.id)}>
                          Hapus
                        </Button>
                      </div>
                    </div>

                    <div className="text-right text-sm font-semibold text-slate-900">
                      Line Total: {formatCurrency(lineTotal)}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        <div className="rounded-2xl bg-slate-900 p-4 text-white">
          <div className="flex items-center justify-between text-sm">
            <span>Total Item</span>
            <span>{totalQty}</span>
          </div>
          <div className="mt-2 flex items-center justify-between">
            <span className="text-sm">Subtotal</span>
            <span className="text-xl font-bold">{formatCurrency(subtotal)}</span>
          </div>
        </div>

        <div className="grid gap-2 sm:grid-cols-2">
          <Button variant="danger" onClick={onClearCart} disabled={!items.length}>
            Clear Cart
          </Button>
          <Button onClick={onSubmitOrder} disabled={!items.length}>
            Checkout & Payment
          </Button>
        </div>
      </div>
    </Card>
  );
}
```
</details>

<a id="file-srcmodulesposcomponentsposcheckoutsuccessmodaltsx"></a>
### src\modules\pos\components\PosCheckoutSuccessModal.tsx
- SHA: `276e8e20d361`  
- Ukuran: 6 KB
<details><summary><strong>Lihat Kode Lengkap</strong></summary>

```tsx
import { Badge, Button, Card, Modal } from "@/components/ui";
import type { PosReceiptSnapshot } from "@/modules/pos/types/pos";

interface PosCheckoutSuccessModalProps {
  open: boolean;
  receipt: PosReceiptSnapshot | null;
  onClose: () => void;
  onReprint: (receipt: PosReceiptSnapshot) => void;
}

const formatCurrency = (value: number) =>
  new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(Number(value || 0));

export function PosCheckoutSuccessModal({
  open,
  receipt,
  onClose,
  onReprint,
}: PosCheckoutSuccessModalProps) {
  return (
    <Modal
      open={open}
      title="Transaksi Berhasil"
      onClose={onClose}
      footer={
        <>
          <Button variant="outline" onClick={onClose}>
            Tutup
          </Button>
          <Button onClick={() => receipt && onReprint(receipt)} disabled={!receipt}>
            Print / Reprint Receipt
          </Button>
        </>
      }
    >
      {!receipt ? (
        <div className="text-sm text-slate-500">Receipt belum tersedia.</div>
      ) : (
        <div className="space-y-4">
          <Card>
            <div className="flex flex-wrap items-center gap-2">
              <Badge variant="success">success</Badge>
              <Badge variant="info">{receipt.order_channel}</Badge>
              <Badge variant={receipt.payment_status === "success" ? "success" : "warning"}>
                {receipt.payment_status}
              </Badge>
            </div>

            <div className="mt-4 space-y-2 text-sm text-slate-700">
              <div>
                <span className="font-medium text-slate-900">Order Number:</span> {receipt.order_number}
              </div>
              <div>
                <span className="font-medium text-slate-900">Outlet:</span> {receipt.outlet_name}
              </div>
              <div>
                <span className="font-medium text-slate-900">Kasir:</span> {receipt.cashier_name}
              </div>
              <div>
                <span className="font-medium text-slate-900">Customer:</span>{" "}
                {receipt.customer_name ?? "Tanpa customer"}
              </div>
              <div>
                <span className="font-medium text-slate-900">Waktu:</span>{" "}
                {new Date(receipt.ordered_at).toLocaleString("id-ID")}
              </div>
            </div>
          </Card>

          <Card title="Ringkasan Pembayaran">
            <div className="space-y-2 text-sm">
              <div className="flex items-center justify-between">
                <span>Subtotal</span>
                <span>{formatCurrency(receipt.subtotal)}</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Diskon</span>
                <span>- {formatCurrency(receipt.discount_amount)}</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Pajak</span>
                <span>{formatCurrency(receipt.tax_amount)}</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Service Charge</span>
                <span>{formatCurrency(receipt.service_charge_amount)}</span>
              </div>
              <div className="flex items-center justify-between border-t border-slate-200 pt-2 font-semibold">
                <span>Grand Total</span>
                <span>{formatCurrency(receipt.grand_total)}</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Dibayar</span>
                <span>{formatCurrency(receipt.paid_total)}</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Kembalian</span>
                <span>{formatCurrency(receipt.change_amount)}</span>
              </div>
            </div>
          </Card>

          <Card title="Items">
            <div className="space-y-3">
              {receipt.items.map((item, index) => (
                <div key={`${receipt.order_number}-item-${index}`} className="rounded-xl border border-slate-200 p-3">
                  <div className="flex items-center justify-between gap-3">
                    <div className="font-medium text-slate-900">
                      {item.product_name} x{item.qty}
                    </div>
                    <div className="text-sm font-semibold text-slate-900">
                      {formatCurrency(item.line_total)}
                    </div>
                  </div>

                  {item.variants?.length ? (
                    <div className="mt-2 space-y-1 text-xs text-slate-600">
                      {item.variants.map((entry, entryIndex) => (
                        <div key={`variant-${entryIndex}`}>
                          Variant: {entry.group_name} - {entry.option_name}
                        </div>
                      ))}
                    </div>
                  ) : null}

                  {item.modifiers?.length ? (
                    <div className="mt-2 space-y-1 text-xs text-slate-600">
                      {item.modifiers.map((entry, entryIndex) => (
                        <div key={`modifier-${entryIndex}`}>
                          Modifier: {entry.group_name} - {entry.option_name} x{entry.qty}
                        </div>
                      ))}
                    </div>
                  ) : null}

                  {item.notes?.trim() ? (
                    <div className="mt-2 text-xs text-slate-500">Catatan: {item.notes}</div>
                  ) : null}
                </div>
              ))}
            </div>
          </Card>
        </div>
      )}
    </Modal>
  );
}
```
</details>

<a id="file-srcmodulesposcomponentspospaymentmodaltsx"></a>
### src\modules\pos\components\PosPaymentModal.tsx
- SHA: `6f6c1e25d414`  
- Ukuran: 14 KB
<details><summary><strong>Lihat Kode Lengkap</strong></summary>

```tsx
import { useEffect, useMemo, useState } from "react";
import { Badge, Button, Card, Input, Modal } from "@/components/ui";
import type { Customer } from "@/types/customer";
import type {
  PosCartItem,
  PosCheckoutTotals,
  PosPaymentMethodOption,
  PosPaymentSplitRow,
  PosVoucher,
} from "@/modules/pos/types/pos";

interface PosPaymentModalProps {
  open: boolean;
  onClose: () => void;
  items: PosCartItem[];
  customer: Customer | null;
  outletName: string;
  cashierName: string;
  paymentMethods: PosPaymentMethodOption[];
  availableVouchers: PosVoucher[];
  voucherLoading?: boolean;
  orderChannel: string;
  subtotal: number;
  taxPercent: number;
  serviceChargePercent: number;
  onApplyVoucher: (voucherCode: string) => Promise<void> | void;
  voucherCode: string;
  voucherDiscount: number;
  appliedVoucher: PosVoucher | null;
  onVoucherCodeChange: (value: string) => void;
  onRemoveVoucher: () => void;
  onConfirm: (payload: {
    payments: PosPaymentSplitRow[];
    totals: PosCheckoutTotals;
  }) => void;
}

const formatCurrency = (value: number) =>
  new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(Number(value || 0));

const createPaymentRow = (paymentMethodCode = "cash"): PosPaymentSplitRow => ({
  id: `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
  payment_method_code: paymentMethodCode,
  amount: 0,
  reference_number: "",
  notes: "",
});

export function PosPaymentModal({
  open,
  onClose,
  items,
  customer,
  outletName,
  cashierName,
  paymentMethods,
  availableVouchers,
  voucherLoading = false,
  orderChannel,
  subtotal,
  taxPercent,
  serviceChargePercent,
  onApplyVoucher,
  voucherCode,
  voucherDiscount,
  appliedVoucher,
  onVoucherCodeChange,
  onRemoveVoucher,
  onConfirm,
}: PosPaymentModalProps) {
  const [payments, setPayments] = useState<PosPaymentSplitRow[]>([createPaymentRow("cash")]);

  useEffect(() => {
    if (!open) {
      setPayments([createPaymentRow("cash")]);
    }
  }, [open]);

  const totals = useMemo<PosCheckoutTotals>(() => {
    const taxBase = Math.max(0, subtotal - voucherDiscount);
    const tax = Math.round((taxBase * Number(taxPercent || 0)) / 100);
    const serviceCharge = Math.round((taxBase * Number(serviceChargePercent || 0)) / 100);
    const grandTotal = Math.max(0, taxBase + tax + serviceCharge);
    const paidTotal = payments.reduce((sum, item) => sum + Number(item.amount || 0), 0);
    const remaining = Math.max(0, grandTotal - paidTotal);
    const changeAmount = Math.max(0, paidTotal - grandTotal);

    return {
      subtotal,
      discount: voucherDiscount,
      tax,
      serviceCharge,
      grandTotal,
      paidTotal,
      remaining,
      changeAmount,
    };
  }, [payments, serviceChargePercent, subtotal, taxPercent, voucherDiscount]);

  const cashRow = payments.find((item) => item.payment_method_code === "cash") ?? null;

  const suggestedVoucherList = useMemo(() => {
    return availableVouchers.slice(0, 6);
  }, [availableVouchers]);

  const handleChangePayment = (
    rowId: string,
    key: keyof PosPaymentSplitRow,
    value: string | number
  ) => {
    setPayments((prev) =>
      prev.map((row) =>
        row.id === rowId
          ? {
              ...row,
              [key]: value,
            }
          : row
      )
    );
  };

  const handleAddPayment = () => {
    const fallbackCode = paymentMethods.find((method) => method.code !== "cash")?.code ?? "cash";
    setPayments((prev) => [...prev, createPaymentRow(fallbackCode)]);
  };

  const handleRemovePayment = (rowId: string) => {
    setPayments((prev) => {
      if (prev.length <= 1) {
        return prev;
      }

      return prev.filter((row) => row.id !== rowId);
    });
  };

  const handleAutoFillCash = () => {
    if (!cashRow) {
      return;
    }

    setPayments((prev) =>
      prev.map((row) =>
        row.id === cashRow.id
          ? {
              ...row,
              amount: totals.grandTotal,
            }
          : row
      )
    );
  };

  const handleConfirm = () => {
    if (!items.length) {
      return;
    }

    const invalidRow = payments.find(
      (row) =>
        !row.payment_method_code ||
        Number(row.amount || 0) <= 0 ||
        !Number.isFinite(Number(row.amount))
    );

    if (invalidRow) {
      return;
    }

    onConfirm({
      payments,
      totals,
    });
  };

  return (
    <Modal
      open={open}
      title="Checkout & Payment"
      onClose={onClose}
      footer={
        <>
          <Button variant="outline" onClick={onClose}>
            Batal
          </Button>
          <Button onClick={handleConfirm} disabled={!items.length || totals.paidTotal <= 0}>
            Selesaikan Checkout
          </Button>
        </>
      }
    >
      <div className="max-h-[75vh] space-y-4 overflow-y-auto pr-1">
        <Card>
          <div className="grid gap-3 md:grid-cols-2">
            <div className="rounded-xl bg-slate-50 p-3 text-sm text-slate-700">
              <div className="text-xs uppercase tracking-wide text-slate-500">Outlet</div>
              <div className="font-semibold text-slate-900">{outletName}</div>
            </div>

            <div className="rounded-xl bg-slate-50 p-3 text-sm text-slate-700">
              <div className="text-xs uppercase tracking-wide text-slate-500">Kasir</div>
              <div className="font-semibold text-slate-900">{cashierName}</div>
            </div>

            <div className="rounded-xl bg-slate-50 p-3 text-sm text-slate-700">
              <div className="text-xs uppercase tracking-wide text-slate-500">Channel</div>
              <div className="font-semibold text-slate-900">{orderChannel}</div>
            </div>

            <div className="rounded-xl bg-slate-50 p-3 text-sm text-slate-700">
              <div className="text-xs uppercase tracking-wide text-slate-500">Customer</div>
              <div className="font-semibold text-slate-900">{customer?.name ?? "Tanpa customer"}</div>
            </div>
          </div>
        </Card>

        <Card title="Voucher">
          <div className="grid gap-3 md:grid-cols-[1fr_auto_auto]">
            <Input
              label="Kode Voucher"
              value={voucherCode}
              onChange={(event) => onVoucherCodeChange(event.target.value.toUpperCase())}
              placeholder="contoh: HEMAT10K"
            />

            <div className="pt-7">
              <Button variant="outline" onClick={() => onApplyVoucher(voucherCode)} disabled={!voucherCode.trim()}>
                Terapkan
              </Button>
            </div>

            <div className="pt-7">
              <Button variant="danger" onClick={onRemoveVoucher} disabled={!appliedVoucher}>
                Hapus Voucher
              </Button>
            </div>
          </div>

          {appliedVoucher ? (
            <div className="mt-3 rounded-xl border border-emerald-200 bg-emerald-50 p-3 text-sm text-emerald-800">
              <div className="font-semibold">
                {appliedVoucher.code} - {appliedVoucher.name}
              </div>
              <div>Diskon diterapkan: {formatCurrency(voucherDiscount)}</div>
            </div>
          ) : null}

          {voucherLoading ? (
            <div className="mt-3 text-sm text-slate-500">Memuat voucher...</div>
          ) : suggestedVoucherList.length ? (
            <div className="mt-4 space-y-2">
              <div className="text-sm font-medium text-slate-700">Voucher tersedia</div>
              <div className="flex flex-wrap gap-2">
                {suggestedVoucherList.map((voucher) => (
                  <button
                    key={voucher.id}
                    type="button"
                    className="rounded-xl border border-slate-300 px-3 py-2 text-left text-sm hover:bg-slate-50"
                    onClick={() => {
                      onVoucherCodeChange(voucher.code);
                      void onApplyVoucher(voucher.code);
                    }}
                  >
                    <div className="font-semibold text-slate-900">{voucher.code}</div>
                    <div className="text-xs text-slate-500">{voucher.name}</div>
                  </button>
                ))}
              </div>
            </div>
          ) : null}
        </Card>

        <Card
          title="Split Payment"
          actions={
            <div className="flex gap-2">
              <Button variant="outline" onClick={handleAddPayment}>
                Tambah Payment
              </Button>
              {cashRow ? (
                <Button variant="secondary" onClick={handleAutoFillCash}>
                  Pas Bayar Tunai
                </Button>
              ) : null}
            </div>
          }
        >
          <div className="space-y-3">
            {payments.map((row, index) => {
              const selectedMethod =
                paymentMethods.find((method) => method.code === row.payment_method_code) ?? null;

              return (
                <div key={row.id} className="rounded-2xl border border-slate-200 p-4">
                  <div className="mb-3 flex items-center justify-between">
                    <div className="font-semibold text-slate-900">Payment #{index + 1}</div>
                    <Button
                      variant="danger"
                      onClick={() => handleRemovePayment(row.id)}
                      disabled={payments.length <= 1}
                    >
                      Hapus
                    </Button>
                  </div>

                  <div className="grid gap-3 md:grid-cols-2">
                    <div>
                      <label className="mb-2 block text-sm font-medium text-slate-700">
                        Metode Pembayaran
                      </label>
                      <select
                        className="w-full rounded-xl border border-slate-300 px-3 py-2 text-sm"
                        value={row.payment_method_code}
                        onChange={(event) =>
                          handleChangePayment(row.id, "payment_method_code", event.target.value)
                        }
                      >
                        {paymentMethods
                          .filter((method) => method.is_active)
                          .map((method) => (
                            <option key={method.code} value={method.code}>
                              {method.name}
                            </option>
                          ))}
                      </select>
                    </div>

                    <Input
                      label="Nominal"
                      type="number"
                      value={String(row.amount || 0)}
                      onChange={(event) =>
                        handleChangePayment(row.id, "amount", Number(event.target.value || 0))
                      }
                    />

                    <Input
                      label="Reference Number"
                      value={row.reference_number}
                      onChange={(event) =>
                        handleChangePayment(row.id, "reference_number", event.target.value)
                      }
                      placeholder={
                        selectedMethod?.requires_reference
                          ? "Wajib untuk metode ini"
                          : "Opsional"
                      }
                    />

                    <Input
                      label="Catatan Pembayaran"
                      value={row.notes}
                      onChange={(event) => handleChangePayment(row.id, "notes", event.target.value)}
                      placeholder="Opsional"
                    />
                  </div>

                  <div className="mt-3">
                    <Badge variant="info">
                      {selectedMethod?.name ?? row.payment_method_code}
                    </Badge>
                  </div>
                </div>
              );
            })}
          </div>
        </Card>

        <Card title="Ringkasan Total">
          <div className="space-y-2 text-sm">
            <div className="flex items-center justify-between">
              <span>Subtotal</span>
              <span>{formatCurrency(totals.subtotal)}</span>
            </div>
            <div className="flex items-center justify-between">
              <span>Diskon Voucher</span>
              <span>- {formatCurrency(totals.discount)}</span>
            </div>
            <div className="flex items-center justify-between">
              <span>Pajak</span>
              <span>{formatCurrency(totals.tax)}</span>
            </div>
            <div className="flex items-center justify-between">
              <span>Service Charge</span>
              <span>{formatCurrency(totals.serviceCharge)}</span>
            </div>
            <div className="border-t border-slate-200 pt-2 text-base font-semibold">
              <div className="flex items-center justify-between">
                <span>Grand Total</span>
                <span>{formatCurrency(totals.grandTotal)}</span>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span>Total Dibayar</span>
              <span>{formatCurrency(totals.paidTotal)}</span>
            </div>
            <div className="flex items-center justify-between">
              <span>Sisa Bayar</span>
              <span>{formatCurrency(totals.remaining)}</span>
            </div>
            <div className="flex items-center justify-between">
              <span>Kembalian</span>
              <span>{formatCurrency(totals.changeAmount)}</span>
            </div>
          </div>
        </Card>
      </div>
    </Modal>
  );
}
```
</details>

<a id="file-srcmodulesposcomponentsposproductconfiguratormodaltsx"></a>
### src\modules\pos\components\PosProductConfiguratorModal.tsx
- SHA: `b99235061543`  
- Ukuran: 13 KB
<details><summary><strong>Lihat Kode Lengkap</strong></summary>

```tsx
import { useMemo, useState } from "react";
import { Badge, Button, Card, Checkbox, Input, Modal } from "@/components/ui";
import type { Product } from "@/types/product";
import type {
  PosModifierSelection,
  PosProductConfiguratorSubmit,
  PosVariantSelection,
} from "@/modules/pos/types/pos";

interface PosProductConfiguratorModalProps {
  open: boolean;
  product: Product | null;
  outletPrice: number;
  onClose: () => void;
  onSubmit: (payload: PosProductConfiguratorSubmit) => void;
}

const formatCurrency = (value: number) =>
  new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(Number(value || 0));

const groupSelectionsById = (ids: number[]) => Array.from(new Set(ids));

const getSafeId = (value?: number | null) => (typeof value === "number" ? value : null);

export function PosProductConfiguratorModal({
  open,
  product,
  outletPrice,
  onClose,
  onSubmit,
}: PosProductConfiguratorModalProps) {
  const [qty, setQty] = useState(1);
  const [note, setNote] = useState("");
  const [selectedVariantIds, setSelectedVariantIds] = useState<Record<number, number[]>>({});
  const [selectedModifierIds, setSelectedModifierIds] = useState<Record<number, number[]>>({});

  const resetState = () => {
    setQty(1);
    setNote("");
    setSelectedVariantIds({});
    setSelectedModifierIds({});
  };

  const handleClose = () => {
    resetState();
    onClose();
  };

  const selectedVariants = useMemo<PosVariantSelection[]>(() => {
    if (!product?.variant_groups?.length) return [];

    const results: PosVariantSelection[] = [];

    product.variant_groups.forEach((group) => {
      const groupId = getSafeId(group.id);
      if (groupId === null) return;

      const pickedIds = selectedVariantIds[groupId] ?? [];

      group.options?.forEach((option) => {
        const optionId = getSafeId(option.id);
        if (optionId === null) return;
        if (!pickedIds.includes(optionId)) return;

        results.push({
          group_name: group.name,
          option_name: option.name,
          price_adjustment: Number(option.price_adjustment ?? 0),
        });
      });
    });

    return results;
  }, [product, selectedVariantIds]);

  const selectedModifiers = useMemo<PosModifierSelection[]>(() => {
    if (!product?.modifier_groups?.length) return [];

    const results: PosModifierSelection[] = [];

    product.modifier_groups.forEach((group) => {
      const groupId = getSafeId(group.id);
      if (groupId === null) return;

      const pickedIds = selectedModifierIds[groupId] ?? [];

      group.options?.forEach((option) => {
        const optionId = getSafeId(option.id);
        if (optionId === null) return;
        if (!pickedIds.includes(optionId)) return;

        results.push({
          group_name: group.name,
          option_name: option.name,
          qty: 1,
          price: Number(option.price ?? 0),
        });
      });
    });

    return results;
  }, [product, selectedModifierIds]);

  const variantTotal = selectedVariants.reduce(
    (sum, item) => sum + Number(item.price_adjustment ?? 0),
    0
  );

  const modifierTotal = selectedModifiers.reduce(
    (sum, item) => sum + Number(item.price ?? 0) * Number(item.qty ?? 1),
    0
  );

  const previewLineTotal =
    (Number(outletPrice ?? 0) + variantTotal + modifierTotal) * Number(qty || 1);

  const validateSelections = () => {
    if (!product) {
      throw new Error("Produk belum dipilih.");
    }

    for (const group of product.variant_groups ?? []) {
      const groupId = getSafeId(group.id);
      if (groupId === null) continue;

      const pickedIds = selectedVariantIds[groupId] ?? [];

      if (group.is_required && pickedIds.length === 0) {
        throw new Error(`Variant "${group.name}" wajib dipilih.`);
      }

      if (group.selection_type === "single" && pickedIds.length > 1) {
        throw new Error(`Variant "${group.name}" hanya boleh memilih satu opsi.`);
      }
    }

    for (const group of product.modifier_groups ?? []) {
      const groupId = getSafeId(group.id);
      if (groupId === null) continue;

      const pickedIds = selectedModifierIds[groupId] ?? [];
      const minSelect = Number(group.min_select ?? 0);
      const maxSelect = Number(group.max_select ?? 0);

      if (group.is_required && pickedIds.length === 0) {
        throw new Error(`Modifier "${group.name}" wajib dipilih.`);
      }

      if (pickedIds.length < minSelect) {
        throw new Error(`Modifier "${group.name}" minimal harus memilih ${minSelect} opsi.`);
      }

      if (maxSelect > 0 && pickedIds.length > maxSelect) {
        throw new Error(`Modifier "${group.name}" maksimal hanya ${maxSelect} opsi.`);
      }
    }
  };

  const toggleVariant = (
    groupId: number,
    optionId: number,
    selectionType: "single" | "multiple"
  ) => {
    setSelectedVariantIds((prev) => {
      const current = prev[groupId] ?? [];

      if (selectionType === "single") {
        return {
          ...prev,
          [groupId]: current.includes(optionId) ? [] : [optionId],
        };
      }

      return {
        ...prev,
        [groupId]: current.includes(optionId)
          ? current.filter((id) => id !== optionId)
          : groupSelectionsById([...current, optionId]),
      };
    });
  };

  const toggleModifier = (
    groupId: number,
    optionId: number,
    maxSelect?: number | null
  ) => {
    setSelectedModifierIds((prev) => {
      const current = prev[groupId] ?? [];

      if (current.includes(optionId)) {
        return {
          ...prev,
          [groupId]: current.filter((id) => id !== optionId),
        };
      }

      if (maxSelect && maxSelect > 0 && current.length >= maxSelect) {
        return prev;
      }

      return {
        ...prev,
        [groupId]: groupSelectionsById([...current, optionId]),
      };
    });
  };

  const handleSubmit = () => {
    if (!product) return;

    validateSelections();

    onSubmit({
      product,
      qty: Math.max(1, Number(qty || 1)),
      base_unit_price: Number(outletPrice ?? 0),
      notes: note,
      selected_variants: selectedVariants,
      selected_modifiers: selectedModifiers,
    });

    resetState();
  };

  return (
    <Modal
      open={open}
      title={product ? `Konfigurasi Produk — ${product.name}` : "Konfigurasi Produk"}
      onClose={handleClose}
      footer={
        <>
          <Button variant="outline" onClick={handleClose}>
            Batal
          </Button>
          <Button onClick={handleSubmit}>Tambahkan ke Cart</Button>
        </>
      }
    >
      {!product ? null : (
        <div className="space-y-4">
          <Card
            title={product.name}
            description={product.category?.name ?? "-"}
            actions={<Badge variant="info">{formatCurrency(outletPrice)}</Badge>}
          >
            <div className="text-sm text-slate-600">
              {product.description?.trim() || "Tidak ada deskripsi produk."}
            </div>
          </Card>

          {(product.variant_groups ?? []).map((group, groupIndex) => {
            const groupId = getSafeId(group.id);
            const pickedIds = groupId !== null ? selectedVariantIds[groupId] ?? [] : [];

            return (
              <Card
                key={groupId ?? `variant-group-${groupIndex}`}
                title={group.name}
                description={`Tipe: ${group.selection_type} • ${
                  group.is_required ? "Wajib" : "Opsional"
                }`}
              >
                <div className="grid gap-2 md:grid-cols-2">
                  {group.options?.map((option, optionIndex) => {
                    const optionId = getSafeId(option.id);
                    const selected = optionId !== null ? pickedIds.includes(optionId) : false;

                    return (
                      <button
                        key={optionId ?? `variant-option-${groupIndex}-${optionIndex}`}
                        type="button"
                        disabled={groupId === null || optionId === null}
                        onClick={() => {
                          if (groupId === null || optionId === null) return;
                          toggleVariant(groupId, optionId, group.selection_type);
                        }}
                        className={[
                          "rounded-2xl border p-3 text-left transition",
                          selected
                            ? "border-slate-900 bg-slate-900 text-white"
                            : "border-slate-200 bg-white text-slate-800 hover:bg-slate-50",
                          groupId === null || optionId === null
                            ? "cursor-not-allowed opacity-60"
                            : "",
                        ].join(" ")}
                      >
                        <div className="font-medium">{option.name}</div>
                        <div
                          className={[
                            "mt-1 text-xs",
                            selected ? "text-slate-200" : "text-slate-500",
                          ].join(" ")}
                        >
                          {Number(option.price_adjustment ?? 0) > 0
                            ? `+ ${formatCurrency(Number(option.price_adjustment ?? 0))}`
                            : "Tanpa tambahan harga"}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </Card>
            );
          })}

          {(product.modifier_groups ?? []).map((group, groupIndex) => {
            const groupId = getSafeId(group.id);
            const pickedIds = groupId !== null ? selectedModifierIds[groupId] ?? [] : [];

            return (
              <Card
                key={groupId ?? `modifier-group-${groupIndex}`}
                title={group.name}
                description={`Min ${Number(group.min_select ?? 0)} • Max ${Number(
                  group.max_select ?? 0
                )} • ${group.is_required ? "Wajib" : "Opsional"}`}
              >
                <div className="grid gap-3 md:grid-cols-2">
                  {group.options?.map((option, optionIndex) => {
                    const optionId = getSafeId(option.id);
                    const checked = optionId !== null ? pickedIds.includes(optionId) : false;

                    return (
                      <div
                        key={optionId ?? `modifier-option-${groupIndex}-${optionIndex}`}
                        className="rounded-2xl border border-slate-200 p-3"
                      >
                        <Checkbox
                          label={`${option.name} ${
                            Number(option.price ?? 0) > 0
                              ? `(+${formatCurrency(Number(option.price ?? 0))})`
                              : ""
                          }`}
                          checked={checked}
                          onChange={() => {
                            if (groupId === null || optionId === null) return;
                            toggleModifier(groupId, optionId, group.max_select);
                          }}
                        />
                      </div>
                    );
                  })}
                </div>
              </Card>
            );
          })}

          <div className="grid gap-4 md:grid-cols-2">
            <Input
              label="Qty"
              type="number"
              value={String(qty)}
              onChange={(event) => setQty(Math.max(1, Number(event.target.value || 1)))}
            />
            <Input
              label="Catatan Item"
              value={note}
              onChange={(event) => setNote(event.target.value)}
              placeholder="Contoh: sambal dipisah"
            />
          </div>

          <Card title="Ringkasan Harga">
            <div className="space-y-2 text-sm text-slate-700">
              <div className="flex items-center justify-between">
                <span>Harga dasar</span>
                <span>{formatCurrency(outletPrice)}</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Tambahan variant</span>
                <span>{formatCurrency(variantTotal)}</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Tambahan modifier</span>
                <span>{formatCurrency(modifierTotal)}</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Qty</span>
                <span>{qty}</span>
              </div>
              <div className="border-t border-slate-200 pt-2 text-base font-semibold text-slate-900">
                <div className="flex items-center justify-between">
                  <span>Total sementara</span>
                  <span>{formatCurrency(previewLineTotal)}</span>
                </div>
              </div>
            </div>
          </Card>
        </div>
      )}
    </Modal>
  );
}
```
</details>

<a id="file-srcmodulesposhooksuseposcartstorets"></a>
### src\modules\pos\hooks\usePosCartStore.ts
- SHA: `5b595d1b2a20`  
- Ukuran: 5 KB
<details><summary><strong>Lihat Kode Lengkap</strong></summary>

```ts
import { create } from "zustand";
import type { Customer } from "@/types/customer";
import type {
  PosCartItem,
  PosCartItemInput,
  PosCartState,
  PosHeldCart,
  PosOrderChannel,
} from "@/modules/pos/types/pos";

const HELD_CART_STORAGE_KEY = "chicken-alibaba-pos-held-cart";

const generateCartItemId = () =>
  `${Date.now()}-${Math.random().toString(36).slice(2, 10)}`;

const calculateLineTotal = (item: {
  qty: number;
  base_unit_price: number;
  selected_variants: Array<{ price_adjustment: number }>;
  selected_modifiers: Array<{ qty: number; price: number }>;
}) => {
  const variantTotal = (item.selected_variants ?? []).reduce(
    (sum, entry) => sum + Number(entry.price_adjustment || 0),
    0
  );

  const modifierTotal = (item.selected_modifiers ?? []).reduce(
    (sum, entry) => sum + Number(entry.price || 0) * Number(entry.qty || 0),
    0
  );

  const unitPrice = Number(item.base_unit_price || 0) + variantTotal + modifierTotal;

  return unitPrice * Number(item.qty || 0);
};

const areSameSelection = (left: PosCartItemInput, right: PosCartItemInput) => {
  return JSON.stringify(left) === JSON.stringify(right);
};

const initialState = {
  items: [] as PosCartItem[],
  customer: null as Customer | null,
  orderChannel: "takeaway" as PosOrderChannel,
  heldCartMeta: null as PosHeldCart | null,
};

export const usePosCartStore = create<PosCartState>((set, get) => ({
  ...initialState,

  setCustomer: (customer) => set({ customer }),

  setOrderChannel: (orderChannel) => set({ orderChannel }),

  addItem: (item) => {
    const nextItem: PosCartItem = {
      ...item,
      id: generateCartItemId(),
      line_total: calculateLineTotal(item),
    };

    const existingIndex = get().items.findIndex((current) =>
      areSameSelection(
        {
          product_id: current.product_id,
          product_name: current.product_name,
          product_type: current.product_type,
          image_url: current.image_url,
          qty: current.qty,
          base_unit_price: current.base_unit_price,
          notes: current.notes,
          selected_variants: current.selected_variants,
          selected_modifiers: current.selected_modifiers,
        },
        {
          product_id: nextItem.product_id,
          product_name: nextItem.product_name,
          product_type: nextItem.product_type,
          image_url: nextItem.image_url,
          qty: nextItem.qty,
          base_unit_price: nextItem.base_unit_price,
          notes: nextItem.notes,
          selected_variants: nextItem.selected_variants,
          selected_modifiers: nextItem.selected_modifiers,
        }
      )
    );

    if (existingIndex >= 0) {
      const items = [...get().items];
      const mergedQty = Number(items[existingIndex].qty) + Number(nextItem.qty);

      items[existingIndex] = {
        ...items[existingIndex],
        qty: mergedQty,
        line_total: calculateLineTotal({
          qty: mergedQty,
          base_unit_price: items[existingIndex].base_unit_price,
          selected_variants: items[existingIndex].selected_variants,
          selected_modifiers: items[existingIndex].selected_modifiers,
        }),
      };

      set({ items });
      return;
    }

    set({
      items: [...get().items, nextItem],
    });
  },

  updateQty: (itemId, qty) => {
    if (qty <= 0) {
      set({
        items: get().items.filter((item) => item.id !== itemId),
      });
      return;
    }

    set({
      items: get().items.map((item) =>
        item.id === itemId
          ? {
              ...item,
              qty,
              line_total: calculateLineTotal({
                qty,
                base_unit_price: item.base_unit_price,
                selected_variants: item.selected_variants,
                selected_modifiers: item.selected_modifiers,
              }),
            }
          : item
      ),
    });
  },

  updateNotes: (itemId, notes) => {
    set({
      items: get().items.map((item) =>
        item.id === itemId
          ? {
              ...item,
              notes,
            }
          : item
      ),
    });
  },

  removeItem: (itemId) => {
    set({
      items: get().items.filter((item) => item.id !== itemId),
    });
  },

  clearCart: () =>
    set({
      items: [],
      customer: null,
      orderChannel: "takeaway",
    }),

  holdCart: () => {
    const snapshot: PosHeldCart = {
      held_at: new Date().toISOString(),
      customer: get().customer,
      order_channel: get().orderChannel,
      items: get().items,
    };

    localStorage.setItem(HELD_CART_STORAGE_KEY, JSON.stringify(snapshot));
    set({ heldCartMeta: snapshot });
  },

  restoreHeldCart: () => {
    const raw = localStorage.getItem(HELD_CART_STORAGE_KEY);

    if (!raw) {
      return false;
    }

    try {
      const parsed = JSON.parse(raw) as PosHeldCart;

      set({
        customer: parsed.customer ?? null,
        orderChannel: parsed.order_channel ?? "takeaway",
        items: parsed.items ?? [],
        heldCartMeta: parsed,
      });

      return true;
    } catch {
      localStorage.removeItem(HELD_CART_STORAGE_KEY);
      set({ heldCartMeta: null });
      return false;
    }
  },

  discardHeldCart: () => {
    localStorage.removeItem(HELD_CART_STORAGE_KEY);
    set({ heldCartMeta: null });
  },
}));
```
</details>

<a id="file-srcmodulespospagesposorderspagetsx"></a>
### src\modules\pos\pages\PosOrdersPage.tsx
- SHA: `285b7e7ec485`  
- Ukuran: 24 KB
<details><summary><strong>Lihat Kode Lengkap</strong></summary>

```tsx
import { useMemo, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Badge, Button, Card, Input } from "@/components/ui";
import { PageHeader } from "@/components/navigation/PageHeader";
import { PermissionWrapper } from "@/components/navigation/PermissionWrapper";
import { PageEmptyState } from "@/components/feedback/PageEmptyState";
import { PageErrorState } from "@/components/feedback/PageErrorState";
import { useToast } from "@/hooks/useToast";
import { useActiveOutlet } from "@/hooks/useActiveOutlet";
import { usePermission } from "@/hooks/usePermission";
import { useAuthStore } from "@/modules/auth/store/auth.store";
import { usePosCartStore } from "@/modules/pos/hooks/usePosCartStore";
import { posService } from "@/modules/pos/services/pos.service";
import { PosCartPanel } from "@/modules/pos/components/PosCartPanel";
import { PosProductConfiguratorModal } from "@/modules/pos/components/PosProductConfiguratorModal";
import { PosPaymentModal } from "@/modules/pos/components/PosPaymentModal";
import { PosCheckoutSuccessModal } from "@/modules/pos/components/PosCheckoutSuccessModal";
import type { Customer } from "@/types/customer";
import type { Product } from "@/types/product";
import type {
  PosCheckoutTotals,
  PosPaymentSplitRow,
  PosReceiptSnapshot,
  PosVoucher,
} from "@/modules/pos/types/pos";

const formatCurrency = (value: number) =>
  new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(Number(value || 0));

const getOutletPrice = (product: Product, outletId: number | null) => {
  if (!outletId) {
    return Number(product.base_price ?? 0);
  }

  const activePriceRow = product.prices?.find(
    (item) => Number(item.outlet_id) === Number(outletId) && Boolean(item.is_active ?? true)
  );

  return Number(activePriceRow?.price ?? product.base_price ?? 0);
};

const isProductAvailableForOutlet = (product: Product, outletId: number | null) => {
  if (!product.is_active) {
    return false;
  }

  if (!outletId) {
    return true;
  }

  const status = product.outlet_statuses?.find(
    (item) => Number(item.outlet_id) === Number(outletId)
  );

  if (!status) {
    return true;
  }

  if (status.is_hidden) {
    return false;
  }

  if (status.is_available === false) {
    return false;
  }

  return true;
};

const getCartItemUnitPrice = (item: {
  base_unit_price: number;
  selected_variants?: Array<{ price_adjustment: number }>;
  selected_modifiers?: Array<{ qty: number; price: number }>;
}) => {
  const variantsTotal = (item.selected_variants ?? []).reduce(
    (sum, entry) => sum + Number(entry.price_adjustment || 0),
    0
  );

  const modifiersTotal = (item.selected_modifiers ?? []).reduce(
    (sum, entry) => sum + Number(entry.price || 0) * Number(entry.qty || 0),
    0
  );

  return Number(item.base_unit_price || 0) + variantsTotal + modifiersTotal;
};

const printReceipt = (receipt: PosReceiptSnapshot) => {
  const formatMoney = (value: number) =>
    new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      maximumFractionDigits: 0,
    }).format(Number(value || 0));

  const itemRows = receipt.items
    .map((item) => {
      const variantRows = (item.variants ?? [])
        .map(
          (entry) =>
            `<div style="font-size:11px;color:#444;">Variant: ${entry.group_name} - ${entry.option_name}</div>`
        )
        .join("");

      const modifierRows = (item.modifiers ?? [])
        .map(
          (entry) =>
            `<div style="font-size:11px;color:#444;">Modifier: ${entry.group_name} - ${entry.option_name} x${entry.qty}</div>`
        )
        .join("");

      const noteRow = item.notes?.trim()
        ? `<div style="font-size:11px;color:#444;">Catatan: ${item.notes}</div>`
        : "";

      return `
        <div style="padding:8px 0;border-bottom:1px dashed #999;">
          <div style="display:flex;justify-content:space-between;gap:8px;">
            <div style="font-weight:600;">${item.product_name} x${item.qty}</div>
            <div style="font-weight:600;">${formatMoney(item.line_total)}</div>
          </div>
          ${variantRows}
          ${modifierRows}
          ${noteRow}
        </div>
      `;
    })
    .join("");

  const paymentRows = receipt.payments
    .map(
      (payment) => `
        <div style="display:flex;justify-content:space-between;gap:8px;margin-top:4px;">
          <span>${payment.payment_method_code.toUpperCase()}</span>
          <span>${formatMoney(payment.amount)}</span>
        </div>
        ${payment.reference_number?.trim()
          ? `<div style="font-size:11px;color:#444;">Ref: ${payment.reference_number}</div>`
          : ""
        }
      `
    )
    .join("");

  const html = `
    <html>
      <head>
        <title>${receipt.order_number}</title>
      </head>
      <body style="font-family:Arial,sans-serif;padding:16px;color:#111;">
        <div style="max-width:320px;margin:0 auto;">
          <div style="text-align:center;">
            <div style="font-size:18px;font-weight:700;">Chicken Alibaba</div>
            <div style="font-size:12px;">${receipt.outlet_name}</div>
            <div style="font-size:12px;">Order #${receipt.order_number}</div>
            <div style="font-size:12px;">${new Date(receipt.ordered_at).toLocaleString("id-ID")}</div>
          </div>

          <div style="margin-top:12px;font-size:12px;">
            <div>Kasir: ${receipt.cashier_name}</div>
            <div>Channel: ${receipt.order_channel}</div>
            <div>Customer: ${receipt.customer_name ?? "Tanpa customer"}</div>
            ${receipt.customer_phone
      ? `<div>Phone: ${receipt.customer_phone}</div>`
      : ""
    }
            ${receipt.voucher_code
      ? `<div>Voucher: ${receipt.voucher_code}</div>`
      : ""
    }
          </div>

          <div style="margin-top:12px;">${itemRows}</div>

          <div style="margin-top:12px;font-size:12px;">
            <div style="display:flex;justify-content:space-between;"><span>Subtotal</span><span>${formatMoney(receipt.subtotal)}</span></div>
            <div style="display:flex;justify-content:space-between;"><span>Diskon</span><span>- ${formatMoney(receipt.discount_amount)}</span></div>
            <div style="display:flex;justify-content:space-between;"><span>Pajak</span><span>${formatMoney(receipt.tax_amount)}</span></div>
            <div style="display:flex;justify-content:space-between;"><span>Service</span><span>${formatMoney(receipt.service_charge_amount)}</span></div>
            <div style="display:flex;justify-content:space-between;font-weight:700;border-top:1px solid #111;padding-top:6px;margin-top:6px;"><span>Total</span><span>${formatMoney(receipt.grand_total)}</span></div>
          </div>

          <div style="margin-top:12px;font-size:12px;">
            ${paymentRows}
          </div>

          <div style="margin-top:12px;font-size:12px;">
            <div style="display:flex;justify-content:space-between;"><span>Dibayar</span><span>${formatMoney(receipt.paid_total)}</span></div>
            <div style="display:flex;justify-content:space-between;"><span>Kembalian</span><span>${formatMoney(receipt.change_amount)}</span></div>
          </div>

          <div style="margin-top:16px;text-align:center;font-size:11px;">
            Terima kasih telah berbelanja.
          </div>
        </div>
      </body>
    </html>
  `;

  const win = window.open("", "_blank", "width=420,height=720");

  if (!win) {
    return false;
  }

  win.document.open();
  win.document.write(html);
  win.document.close();
  win.focus();
  win.print();

  return true;
};

export default function PosOrdersPage() {
  const toast = useToast();
  const user = useAuthStore((state) => state.user);
  const { activeOutlet, activeOutletId } = useActiveOutlet();
  const currentOutletName =
    activeOutlet?.outlet_name ??
    (activeOutlet?.outlet_id ? `Outlet #${activeOutlet.outlet_id}` : "Belum dipilih");
  const canViewCustomers = usePermission("customers.view");

  const {
    items,
    customer,
    orderChannel,
    setOrderChannel,
    setCustomer,
    addItem,
    updateQty,
    updateNotes,
    removeItem,
    clearCart,
    holdCart,
    restoreHeldCart,
    discardHeldCart,
  } = usePosCartStore();

  const [search, setSearch] = useState("");
  const [activeCategoryId, setActiveCategoryId] = useState<number | "all">("all");
  const [customerSearch, setCustomerSearch] = useState("");
  const [configProduct, setConfigProduct] = useState<Product | null>(null);
  const [paymentOpen, setPaymentOpen] = useState(false);
  const [successOpen, setSuccessOpen] = useState(false);
  const [voucherCode, setVoucherCode] = useState("");
  const [appliedVoucher, setAppliedVoucher] = useState<PosVoucher | null>(null);
  const [voucherDiscount, setVoucherDiscount] = useState(0);
  const [latestReceipt, setLatestReceipt] = useState<PosReceiptSnapshot | null>(null);

  const categoriesQuery = useQuery({
    queryKey: ["pos-product-categories"],
    queryFn: () => posService.getProductCategories({ per_page: 100, is_active: true }),
  });

  const productsQuery = useQuery({
    queryKey: ["pos-products", search],
    queryFn: () =>
      posService.getProducts({
        per_page: 200,
        search,
        is_active: true,
      }),
  });

  const customersQuery = useQuery({
    queryKey: ["pos-customers", customerSearch],
    queryFn: () =>
      posService.getCustomers({
        per_page: 10,
        search: customerSearch,
      }),
    enabled: canViewCustomers && customerSearch.trim().length >= 2,
  });

  const vouchersQuery = useQuery({
    queryKey: ["pos-vouchers"],
    queryFn: () =>
      posService.getVouchers({
        per_page: 100,
        is_active: true,
      }),
    retry: 0,
  });

  const paymentMethods = useMemo(() => posService.getPaymentMethods(), []);

  const categoryOptions = categoriesQuery.data?.items ?? [];
  const rawProducts = productsQuery.data?.items ?? [];
  const customerOptions = customersQuery.data?.items ?? [];
  const availableVouchers = vouchersQuery.data?.items ?? [];

  const visibleProducts = useMemo(() => {
    return rawProducts
      .filter((product) => isProductAvailableForOutlet(product, activeOutletId))
      .map((product) => ({
        ...product,
        effective_price: getOutletPrice(product, activeOutletId),
      }))
      .filter((product) =>
        activeCategoryId === "all"
          ? true
          : Number(product.product_category_id) === Number(activeCategoryId)
      );
  }, [activeCategoryId, activeOutletId, rawProducts]);

  const categoryTabs = useMemo(() => {
    const counts = new Map<number, number>();

    rawProducts.forEach((product) => {
      if (!isProductAvailableForOutlet(product, activeOutletId)) return;

      const current = counts.get(product.product_category_id) ?? 0;
      counts.set(product.product_category_id, current + 1);
    });

    return categoryOptions
      .filter((category) => (counts.get(category.id) ?? 0) > 0)
      .map((category) => ({
        id: category.id,
        name: category.name,
        count: counts.get(category.id) ?? 0,
      }));
  }, [activeOutletId, categoryOptions, rawProducts]);

  const subtotal = useMemo(() => {
    return items.reduce((sum, item) => {
      return sum + getCartItemUnitPrice(item) * Number(item.qty || 0);
    }, 0);
  }, [items]);

  const totalQty = useMemo(() => {
    return items.reduce((sum, item) => sum + Number(item.qty || 0), 0);
  }, [items]);

  const taxPercent = 0;
  const serviceChargePercent = 0;

  const handleOpenConfigurator = (product: Product) => {
    setConfigProduct(product);
  };

  const handleAddToCart = (payload: {
    product: Product;
    qty: number;
    base_unit_price: number;
    notes: string;
    selected_variants: Array<{
      group_name: string;
      option_name: string;
      price_adjustment: number;
    }>;
    selected_modifiers: Array<{
      group_name: string;
      option_name: string;
      qty: number;
      price: number;
    }>;
  }) => {
    addItem({
      product_id: payload.product.id,
      product_name: payload.product.name,
      product_type: payload.product.product_type,
      image_url: payload.product.image_url ?? null,
      qty: payload.qty,
      base_unit_price: payload.base_unit_price,
      notes: payload.notes,
      selected_variants: payload.selected_variants,
      selected_modifiers: payload.selected_modifiers,
    });

    setConfigProduct(null);
    toast.success("Produk ditambahkan", `${payload.product.name} masuk ke cart.`);
  };

  const handlePickCustomer = (pickedCustomer: Customer) => {
    setCustomer(pickedCustomer);
    setCustomerSearch("");
    toast.success("Customer dipilih", pickedCustomer.name);
  };

  const handleHoldOrder = () => {
    if (!items.length) {
      toast.warning("Cart kosong", "Tidak ada item yang bisa di-hold.");
      return;
    }

    holdCart();
    toast.success("Order di-hold", "Cart sementara berhasil disimpan.");
  };

  const handleRestoreHeld = () => {
    const restored = restoreHeldCart();

    if (!restored) {
      toast.warning("Held order tidak ada", "Belum ada held order yang tersimpan.");
      return;
    }

    toast.success("Held order dimuat", "Cart sementara berhasil dipulihkan.");
  };

  const handleDiscardHeld = () => {
    discardHeldCart();
    toast.success("Held order dihapus");
  };

  const handleClearCart = () => {
    clearCart();
    setVoucherCode("");
    setAppliedVoucher(null);
    setVoucherDiscount(0);
    toast.success("Cart dibersihkan");
  };

  const handleSubmitOrder = () => {
    if (!activeOutletId) {
      toast.warning(
        "Outlet belum aktif",
        "Pilih default outlet dulu dari data user sebelum checkout."
      );
      return;
    }

    if (!items.length) {
      toast.warning("Cart kosong", "Tambahkan produk dulu sebelum checkout.");
      return;
    }

    setPaymentOpen(true);
  };

  const handleApplyVoucher = async (code: string) => {
    if (!code.trim()) {
      toast.warning("Voucher kosong", "Masukkan kode voucher terlebih dahulu.");
      return;
    }

    if (vouchersQuery.isError) {
      toast.warning(
        "Voucher belum bisa diverifikasi dari backend",
        "Endpoint voucher tersedia, tetapi akses user saat ini mungkin belum diizinkan."
      );
      return;
    }

    const result = posService.evaluateVoucher({
      vouchers: availableVouchers,
      voucherCode: code,
      subtotal,
    });

    if (!result.valid || !result.voucher) {
      setAppliedVoucher(null);
      setVoucherDiscount(0);
      toast.warning("Voucher tidak valid", result.message);
      return;
    }

    setAppliedVoucher(result.voucher);
    setVoucherCode(result.voucher.code);
    setVoucherDiscount(result.discount_amount);
    toast.success("Voucher diterapkan", result.message);
  };

  const handleRemoveVoucher = () => {
    setAppliedVoucher(null);
    setVoucherCode("");
    setVoucherDiscount(0);
    toast.success("Voucher dihapus");
  };

  const handleConfirmCheckout = (payload: {
    payments: PosPaymentSplitRow[];
    totals: PosCheckoutTotals;
  }) => {
    if (!activeOutletId) {
      toast.warning("Outlet belum aktif");
      return;
    }

    const hasInvalidReference = payload.payments.some((payment) => {
      const method = paymentMethods.find((entry) => entry.code === payment.payment_method_code);

      if (!method?.requires_reference) {
        return false;
      }

      return !payment.reference_number.trim();
    });

    if (hasInvalidReference) {
      toast.warning(
        "Reference number wajib",
        "QRIS atau transfer harus memiliki reference number."
      );
      return;
    }

    const paymentStatus = payload.totals.remaining > 0 ? "pending" : "success";

    const result = posService.submitCheckoutDraft({
      outlet_name: currentOutletName,
      cashier_name: user?.name ?? "Kasir",
      order_channel: orderChannel,
      customer_name: customer?.name ?? null,
      customer_phone: customer?.phone ?? null,
      voucher_code: appliedVoucher?.code ?? null,
      subtotal: payload.totals.subtotal,
      discount_amount: payload.totals.discount,
      tax_amount: payload.totals.tax,
      service_charge_amount: payload.totals.serviceCharge,
      grand_total: payload.totals.grandTotal,
      paid_total: payload.totals.paidTotal,
      change_amount: payload.totals.changeAmount,
      payment_status: paymentStatus,
      payments: payload.payments,
      items: items.map((item) => ({
        product_name: item.product_name,
        qty: item.qty,
        unit_price: getCartItemUnitPrice(item),
        notes: item.notes,
        variants: item.selected_variants,
        modifiers: item.selected_modifiers,
        line_total: getCartItemUnitPrice(item) * Number(item.qty || 0),
      })),
    });

    setLatestReceipt(result.receipt);
    setPaymentOpen(false);
    setSuccessOpen(true);

    clearCart();
    setVoucherCode("");
    setAppliedVoucher(null);
    setVoucherDiscount(0);

    toast.success(
      paymentStatus === "success" ? "Checkout selesai" : "Checkout pending",
      result.message
    );
  };

  const handleReprintReceipt = (receipt: PosReceiptSnapshot) => {
    const printed = printReceipt(receipt);

    if (!printed) {
      toast.warning(
        "Print gagal dibuka",
        "Popup browser tertutup. Izinkan popup untuk print receipt."
      );
      return;
    }

    toast.success("Receipt dibuka", "Preview print receipt sudah dikirim ke browser.");
  };

  return (
    <PermissionWrapper permission="products.view">
      <div className="space-y-4">
        <PageHeader
          title="POS Checkout & Payment"
          description="Katalog cepat, cart interaktif, voucher, split payment, dan receipt print."
          actions={
            <div className="flex flex-wrap gap-2">
              <Badge variant="info">
                Outlet: {currentOutletName}
              </Badge>
              <Badge variant="warning">
                Mode: Hybrid Voucher API + Checkout Draft
              </Badge>
            </div>
          }
        />

        {!activeOutletId ? (
          <Card>
            <div className="rounded-2xl border border-amber-200 bg-amber-50 px-4 py-4 text-sm text-amber-800">
              User ini belum memiliki active outlet. Pilih default outlet dulu dari data user.
            </div>
          </Card>
        ) : null}

        <div className="grid gap-4 xl:grid-cols-[1.6fr_0.9fr]">
          <div className="space-y-4">
            <Card>
              <div className="grid gap-3 md:grid-cols-[1fr_auto]">
                <Input
                  placeholder="Cari nama, sku, code, atau slug produk..."
                  value={search}
                  onChange={(event) => setSearch(event.target.value)}
                />

                <Button variant="outline" onClick={() => setSearch("")}>
                  Reset Search
                </Button>
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                <button
                  type="button"
                  onClick={() => setActiveCategoryId("all")}
                  className={[
                    "rounded-xl px-4 py-2 text-sm font-medium transition",
                    activeCategoryId === "all"
                      ? "bg-slate-900 text-white"
                      : "border border-slate-300 bg-white text-slate-700 hover:bg-slate-50",
                  ].join(" ")}
                >
                  Semua
                </button>

                {categoryTabs.map((category) => (
                  <button
                    key={category.id}
                    type="button"
                    onClick={() => setActiveCategoryId(category.id)}
                    className={[
                      "rounded-xl px-4 py-2 text-sm font-medium transition",
                      activeCategoryId === category.id
                        ? "bg-slate-900 text-white"
                        : "border border-slate-300 bg-white text-slate-700 hover:bg-slate-50",
                    ].join(" ")}
                  >
                    {category.name} ({category.count})
                  </button>
                ))}
              </div>
            </Card>

            {productsQuery.isLoading ? (
              <Card>Memuat katalog produk...</Card>
            ) : productsQuery.isError ? (
              <PageErrorState onRetry={() => void productsQuery.refetch()} />
            ) : !visibleProducts.length ? (
              <PageEmptyState title="Produk POS tidak ditemukan" />
            ) : (
              <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                {visibleProducts.map((product) => (
                  <Card
                    key={product.id}
                    title={product.name}
                    description={product.category?.name ?? "-"}
                    actions={
                      <Badge variant={product.product_type === "bundle" ? "warning" : "info"}>
                        {product.product_type}
                      </Badge>
                    }
                  >
                    <div className="space-y-2 text-sm text-slate-600">
                      <div className="font-semibold text-slate-900">
                        {formatCurrency(product.effective_price)}
                      </div>
                      <div>{product.description?.trim() || "Tanpa deskripsi produk."}</div>

                      {(product.variant_groups?.length ?? 0) > 0 ? (
                        <div>Variant: {product.variant_groups?.length} group</div>
                      ) : null}

                      {(product.modifier_groups?.length ?? 0) > 0 ? (
                        <div>Modifier: {product.modifier_groups?.length} group</div>
                      ) : null}
                    </div>

                    <div className="mt-4">
                      <Button onClick={() => handleOpenConfigurator(product)}>
                        Tambah ke Cart
                      </Button>
                    </div>
                  </Card>
                ))}
              </div>
            )}
          </div>

          <PosCartPanel
            items={items}
            customer={customer}
            customerSearch={customerSearch}
            onCustomerSearchChange={setCustomerSearch}
            customerResults={customerOptions}
            canSearchCustomer={canViewCustomers}
            loadingCustomers={customersQuery.isFetching}
            orderChannel={orderChannel}
            onOrderChannelChange={setOrderChannel}
            onPickCustomer={handlePickCustomer}
            onClearCustomer={() => setCustomer(null)}
            onUpdateQty={updateQty}
            onUpdateNotes={updateNotes}
            onRemoveItem={removeItem}
            onClearCart={handleClearCart}
            onHoldOrder={handleHoldOrder}
            onRestoreHeldOrder={handleRestoreHeld}
            onDiscardHeldOrder={handleDiscardHeld}
            hasHeldOrder={Boolean(usePosCartStore.getState().heldCartMeta)}
            onSubmitOrder={handleSubmitOrder}
            subtotal={subtotal}
            totalQty={totalQty}
          />
        </div>

        <PosProductConfiguratorModal
          open={Boolean(configProduct)}
          product={configProduct}
          outletPrice={configProduct ? getOutletPrice(configProduct, activeOutletId) : 0}
          onClose={() => setConfigProduct(null)}
          onSubmit={handleAddToCart}
        />

        <PosPaymentModal
          open={paymentOpen}
          onClose={() => setPaymentOpen(false)}
          items={items}
          customer={customer}
          outletName={currentOutletName}
          cashierName={user?.name ?? "Kasir"}
          paymentMethods={paymentMethods}
          availableVouchers={availableVouchers}
          voucherLoading={vouchersQuery.isLoading}
          orderChannel={orderChannel}
          subtotal={subtotal}
          taxPercent={taxPercent}
          serviceChargePercent={serviceChargePercent}
          onApplyVoucher={handleApplyVoucher}
          voucherCode={voucherCode}
          voucherDiscount={voucherDiscount}
          appliedVoucher={appliedVoucher}
          onVoucherCodeChange={setVoucherCode}
          onRemoveVoucher={handleRemoveVoucher}
          onConfirm={handleConfirmCheckout}
        />

        <PosCheckoutSuccessModal
          open={successOpen}
          receipt={latestReceipt}
          onClose={() => setSuccessOpen(false)}
          onReprint={handleReprintReceipt}
        />
      </div>
    </PermissionWrapper>
  );
}
```
</details>

<a id="file-srcmodulespospagesposshiftspagetsx"></a>
### src\modules\pos\pages\PosShiftsPage.tsx
- SHA: `38c39d8bba24`  
- Ukuran: 24 KB
<details><summary><strong>Lihat Kode Lengkap</strong></summary>

```tsx
// src/modules/pos/pages/PosShiftsPage.tsx

import { useMemo, useState } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { PageHeader } from "@/components/navigation/PageHeader";
import { PermissionWrapper } from "@/components/navigation/PermissionWrapper";
import { PageEmptyState } from "@/components/feedback/PageEmptyState";
import { PageErrorState } from "@/components/feedback/PageErrorState";
import { Badge, Button, Card, Input, Modal } from "@/components/ui";
import { useActiveOutlet } from "@/hooks/useActiveOutlet";
import { useToast } from "@/hooks/useToast";
import { parseApiError } from "@/services/api/error-parser";
import { shiftService } from "@/modules/pos/services/shift.service";
import type {
  CashierShift,
  CashierShiftStatus,
  CashMovement,
  CashMovementType,
} from "@/types/cashier-shift";

interface OpenShiftForm {
  opening_cash: string;
  notes: string;
}

interface CashMovementForm {
  movement_type: "cash_in" | "cash_out";
  amount: string;
  reason: string;
  notes: string;
}

interface CloseShiftForm {
  closing_cash: string;
  notes: string;
}

const initialOpenShiftForm: OpenShiftForm = {
  opening_cash: "0",
  notes: "",
};

const initialCashMovementForm: CashMovementForm = {
  movement_type: "cash_in",
  amount: "",
  reason: "",
  notes: "",
};

const initialCloseShiftForm: CloseShiftForm = {
  closing_cash: "",
  notes: "",
};

const formatCurrency = (value: number | string | null | undefined) =>
  new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(Number(value ?? 0));

const formatDateTime = (value?: string | null) => {
  if (!value) {
    return "-";
  }

  return new Intl.DateTimeFormat("id-ID", {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(new Date(value));
};

const getShiftMovements = (shift: CashierShift | null): CashMovement[] => {
  if (!shift) {
    return [];
  }

  return shift.cash_movements ?? shift.cashMovements ?? [];
};

const getMovementLabel = (movementType: CashMovementType) => {
  const labels: Record<CashMovementType, string> = {
    opening: "Modal Awal",
    cash_in: "Kas Masuk",
    cash_out: "Kas Keluar",
    closing_adjustment: "Penyesuaian Tutup Shift",
  };

  return labels[movementType];
};

const getMovementBadgeVariant = (movementType: CashMovementType) => {
  if (movementType === "cash_out") {
    return "danger";
  }

  if (movementType === "closing_adjustment") {
    return "warning";
  }

  return "success";
};

const getShiftBadgeVariant = (status: CashierShiftStatus) =>
  status === "open" ? "success" : "default";

export default function PosShiftsPage() {
  const toast = useToast();
  const queryClient = useQueryClient();
  const { activeOutlet } = useActiveOutlet();

  const activeOutletId = activeOutlet?.outlet_id ?? null;
  const activeOutletName = activeOutlet
  ? `${activeOutlet.outlet_name ?? `Outlet #${activeOutlet.outlet_id}`}${
      activeOutlet.outlet_code ? ` (${activeOutlet.outlet_code})` : ""
    }`
  : "Outlet belum dipilih";

  const [openShiftModal, setOpenShiftModal] = useState(false);
  const [cashMovementModal, setCashMovementModal] = useState(false);
  const [closeShiftModal, setCloseShiftModal] = useState(false);
  const [selectedStatus, setSelectedStatus] = useState<CashierShiftStatus | "">("");
  const [openShiftForm, setOpenShiftForm] = useState<OpenShiftForm>(initialOpenShiftForm);
  const [cashMovementForm, setCashMovementForm] =
    useState<CashMovementForm>(initialCashMovementForm);
  const [closeShiftForm, setCloseShiftForm] = useState<CloseShiftForm>(initialCloseShiftForm);

  const shiftsQuery = useQuery({
    queryKey: ["pos-cashier-shifts", activeOutletId, selectedStatus],
    enabled: Boolean(activeOutletId),
    queryFn: () =>
      shiftService.getCashierShifts({
        outlet_id: activeOutletId ?? "",
        status: selectedStatus,
        per_page: 50,
      }),
  });

  const shifts = shiftsQuery.data?.items ?? [];

  const currentShift = useMemo(
    () => shifts.find((shift) => shift.status === "open") ?? null,
    [shifts]
  );

  const currentShiftDetailQuery = useQuery({
    queryKey: ["pos-current-cashier-shift-detail", currentShift?.id],
    enabled: Boolean(currentShift?.id),
    queryFn: () => shiftService.getCashierShift(Number(currentShift?.id)),
  });

  const currentShiftDetail = currentShiftDetailQuery.data?.data ?? currentShift;
  const shiftMovements = getShiftMovements(currentShiftDetail);

  const cashInTotal = shiftMovements
    .filter((movement) => movement.movement_type === "cash_in")
    .reduce((sum, movement) => sum + Number(movement.amount || 0), 0);

  const cashOutTotal = shiftMovements
    .filter((movement) => movement.movement_type === "cash_out")
    .reduce((sum, movement) => sum + Number(movement.amount || 0), 0);

  const openingCash = Number(currentShiftDetail?.opening_cash ?? 0);
  const expectedCash = Number(currentShiftDetail?.expected_cash ?? openingCash + cashInTotal - cashOutTotal);

  const openShiftMutation = useMutation({
    mutationFn: () => {
      if (!activeOutletId) {
        throw new Error("Outlet aktif belum dipilih.");
      }

      return shiftService.openCashierShift({
        outlet_id: activeOutletId,
        opening_cash: Number(openShiftForm.opening_cash || 0),
        notes: openShiftForm.notes.trim() || null,
      });
    },
    onSuccess: (response) => {
      toast.success(response.message);
      setOpenShiftModal(false);
      setOpenShiftForm(initialOpenShiftForm);
      void queryClient.invalidateQueries({ queryKey: ["pos-cashier-shifts"] });
    },
    onError: (error) => {
      toast.error("Gagal membuka shift", parseApiError(error));
    },
  });

  const cashMovementMutation = useMutation({
    mutationFn: () => {
      if (!currentShiftDetail?.id) {
        throw new Error("Shift aktif tidak ditemukan.");
      }

      return shiftService.createCashMovement({
        cashier_shift_id: currentShiftDetail.id,
        movement_type: cashMovementForm.movement_type,
        amount: Number(cashMovementForm.amount || 0),
        reason: cashMovementForm.reason.trim() || null,
        notes: cashMovementForm.notes.trim() || null,
      });
    },
    onSuccess: (response) => {
      toast.success(response.message);
      setCashMovementModal(false);
      setCashMovementForm(initialCashMovementForm);
      void queryClient.invalidateQueries({ queryKey: ["pos-cashier-shifts"] });
      void queryClient.invalidateQueries({ queryKey: ["pos-current-cashier-shift-detail"] });
    },
    onError: (error) => {
      toast.error("Gagal menyimpan pergerakan kas", parseApiError(error));
    },
  });

  const closeShiftMutation = useMutation({
    mutationFn: () => {
      if (!currentShiftDetail?.id) {
        throw new Error("Shift aktif tidak ditemukan.");
      }

      return shiftService.closeCashierShift(currentShiftDetail.id, {
        closing_cash: Number(closeShiftForm.closing_cash || 0),
        notes: closeShiftForm.notes.trim() || null,
      });
    },
    onSuccess: (response) => {
      toast.success(response.message);
      setCloseShiftModal(false);
      setCloseShiftForm(initialCloseShiftForm);
      void queryClient.invalidateQueries({ queryKey: ["pos-cashier-shifts"] });
      void queryClient.invalidateQueries({ queryKey: ["pos-current-cashier-shift-detail"] });
    },
    onError: (error) => {
      toast.error("Gagal menutup shift", parseApiError(error));
    },
  });

  const openCloseShiftModal = () => {
    setCloseShiftForm({
      closing_cash: String(expectedCash),
      notes: "",
    });
    setCloseShiftModal(true);
  };

  return (
    <PermissionWrapper permission="cashier_shifts.view">
      <div className="space-y-4">
        <PageHeader
          title="Shift Kasir"
          description="Kelola buka shift, kas masuk, kas keluar, dan tutup shift."
          actions={
            <div className="flex flex-wrap gap-2">
              <Button
                variant="outline"
                onClick={() => void shiftsQuery.refetch()}
                loading={shiftsQuery.isFetching}
              >
                Refresh
              </Button>
              <Button
                disabled={!activeOutletId || Boolean(currentShiftDetail)}
                onClick={() => setOpenShiftModal(true)}
              >
                Buka Shift
              </Button>
            </div>
          }
        />

        <Card>
          <div className="grid gap-3 md:grid-cols-4">
            <div>
              <div className="text-xs font-medium uppercase tracking-wide text-slate-500">
                Outlet Aktif
              </div>
              <div className="mt-1 text-sm font-semibold text-slate-900">{activeOutletName}</div>
            </div>

            <div>
              <div className="text-xs font-medium uppercase tracking-wide text-slate-500">
                Status Shift
              </div>
              <div className="mt-1">
                <Badge variant={currentShiftDetail ? "success" : "warning"}>
                  {currentShiftDetail ? "Shift Terbuka" : "Belum Ada Shift Aktif"}
                </Badge>
              </div>
            </div>

            <div>
              <div className="text-xs font-medium uppercase tracking-wide text-slate-500">
                Expected Cash
              </div>
              <div className="mt-1 text-sm font-semibold text-slate-900">
                {formatCurrency(expectedCash)}
              </div>
            </div>

            <div>
              <label className="mb-1 block text-xs font-medium uppercase tracking-wide text-slate-500">
                Filter Riwayat
              </label>
              <select
                className="w-full rounded-xl border border-slate-300 px-3 py-2 text-sm"
                value={selectedStatus}
                onChange={(event) => setSelectedStatus(event.target.value as CashierShiftStatus | "")}
              >
                <option value="">Semua Status</option>
                <option value="open">Open</option>
                <option value="closed">Closed</option>
              </select>
            </div>
          </div>
        </Card>

        {!activeOutletId ? (
          <PageEmptyState title="Outlet aktif belum dipilih" />
        ) : shiftsQuery.isLoading ? (
          <Card>Memuat data shift...</Card>
        ) : shiftsQuery.isError ? (
          <PageErrorState onRetry={() => void shiftsQuery.refetch()} />
        ) : (
          <div className="grid gap-4 xl:grid-cols-[1.1fr_0.9fr]">
            <div className="space-y-4">
              <Card
                title="Current Shift"
                description="Shift aktif yang sedang digunakan kasir."
                actions={
                  currentShiftDetail ? (
                    <Badge variant={getShiftBadgeVariant(currentShiftDetail.status)}>
                      {currentShiftDetail.status}
                    </Badge>
                  ) : null
                }
              >
                {!currentShiftDetail ? (
                  <PageEmptyState title="Belum ada shift aktif" />
                ) : (
                  <div className="space-y-4">
                    <div className="grid gap-3 md:grid-cols-2">
                      <div className="rounded-2xl border border-slate-200 p-4">
                        <div className="text-xs text-slate-500">Nomor Shift</div>
                        <div className="mt-1 font-semibold text-slate-900">
                          {currentShiftDetail.shift_number}
                        </div>
                      </div>

                      <div className="rounded-2xl border border-slate-200 p-4">
                        <div className="text-xs text-slate-500">Dibuka</div>
                        <div className="mt-1 font-semibold text-slate-900">
                          {formatDateTime(currentShiftDetail.opened_at)}
                        </div>
                      </div>

                      <div className="rounded-2xl border border-slate-200 p-4">
                        <div className="text-xs text-slate-500">Modal Awal</div>
                        <div className="mt-1 font-semibold text-slate-900">
                          {formatCurrency(currentShiftDetail.opening_cash)}
                        </div>
                      </div>

                      <div className="rounded-2xl border border-slate-200 p-4">
                        <div className="text-xs text-slate-500">Jumlah Order</div>
                        <div className="mt-1 font-semibold text-slate-900">
                          {currentShiftDetail.orders_count ?? 0}
                        </div>
                      </div>
                    </div>

                    <div className="grid gap-3 md:grid-cols-3">
                      <div className="rounded-2xl bg-emerald-50 p-4">
                        <div className="text-xs text-emerald-700">Kas Masuk</div>
                        <div className="mt-1 font-semibold text-emerald-900">
                          {formatCurrency(cashInTotal)}
                        </div>
                      </div>

                      <div className="rounded-2xl bg-rose-50 p-4">
                        <div className="text-xs text-rose-700">Kas Keluar</div>
                        <div className="mt-1 font-semibold text-rose-900">
                          {formatCurrency(cashOutTotal)}
                        </div>
                      </div>

                      <div className="rounded-2xl bg-slate-100 p-4">
                        <div className="text-xs text-slate-600">Expected Cash</div>
                        <div className="mt-1 font-semibold text-slate-900">
                          {formatCurrency(expectedCash)}
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      <Button variant="secondary" onClick={() => setCashMovementModal(true)}>
                        Tambah Kas Masuk/Keluar
                      </Button>
                      <Button variant="danger" onClick={openCloseShiftModal}>
                        Tutup Shift
                      </Button>
                    </div>
                  </div>
                )}
              </Card>

              <Card title="Riwayat Pergerakan Kas">
                {!currentShiftDetail ? (
                  <PageEmptyState title="Shift aktif belum tersedia" />
                ) : currentShiftDetailQuery.isLoading ? (
                  <div>Memuat pergerakan kas...</div>
                ) : !shiftMovements.length ? (
                  <PageEmptyState title="Belum ada pergerakan kas" />
                ) : (
                  <div className="overflow-x-auto">
                    <table className="w-full min-w-[720px] text-left text-sm">
                      <thead>
                        <tr className="border-b border-slate-200 text-xs uppercase text-slate-500">
                          <th className="px-3 py-2">Tipe</th>
                          <th className="px-3 py-2">Nominal</th>
                          <th className="px-3 py-2">Alasan</th>
                          <th className="px-3 py-2">Catatan</th>
                          <th className="px-3 py-2">Waktu</th>
                        </tr>
                      </thead>
                      <tbody>
                        {shiftMovements.map((movement) => (
                          <tr key={movement.id} className="border-b border-slate-100">
                            <td className="px-3 py-3">
                              <Badge variant={getMovementBadgeVariant(movement.movement_type)}>
                                {getMovementLabel(movement.movement_type)}
                              </Badge>
                            </td>
                            <td className="px-3 py-3 font-semibold">
                              {formatCurrency(movement.amount)}
                            </td>
                            <td className="px-3 py-3">{movement.reason ?? "-"}</td>
                            <td className="px-3 py-3">{movement.notes ?? "-"}</td>
                            <td className="px-3 py-3">{formatDateTime(movement.created_at)}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </Card>
            </div>

            <Card title="Riwayat Shift" description="Daftar shift outlet aktif.">
              {!shifts.length ? (
                <PageEmptyState title="Belum ada riwayat shift" />
              ) : (
                <div className="space-y-3">
                  {shifts.map((shift) => (
                    <div key={shift.id} className="rounded-2xl border border-slate-200 p-4">
                      <div className="flex flex-wrap items-start justify-between gap-3">
                        <div>
                          <div className="font-semibold text-slate-900">{shift.shift_number}</div>
                          <div className="mt-1 text-xs text-slate-500">
                            {formatDateTime(shift.opened_at)} - {formatDateTime(shift.closed_at)}
                          </div>
                        </div>
                        <Badge variant={getShiftBadgeVariant(shift.status)}>{shift.status}</Badge>
                      </div>

                      <div className="mt-3 grid gap-2 text-sm text-slate-600 md:grid-cols-2">
                        <div>Opening: {formatCurrency(shift.opening_cash)}</div>
                        <div>Expected: {formatCurrency(shift.expected_cash)}</div>
                        <div>Closing: {formatCurrency(shift.closing_cash)}</div>
                        <div>Selisih: {formatCurrency(shift.cash_difference)}</div>
                      </div>

                      {shift.notes ? (
                        <div className="mt-3 rounded-xl bg-slate-50 p-3 text-sm text-slate-600">
                          {shift.notes}
                        </div>
                      ) : null}
                    </div>
                  ))}
                </div>
              )}
            </Card>
          </div>
        )}

        <Modal
          open={openShiftModal}
          title="Buka Shift"
          onClose={() => setOpenShiftModal(false)}
          footer={
            <>
              <Button variant="outline" onClick={() => setOpenShiftModal(false)}>
                Batal
              </Button>
              <Button
                loading={openShiftMutation.isPending}
                onClick={() => openShiftMutation.mutate()}
              >
                Simpan
              </Button>
            </>
          }
        >
          <div className="space-y-4">
            <Input
              label="Modal Awal"
              type="number"
              min="0"
              value={openShiftForm.opening_cash}
              onChange={(event) =>
                setOpenShiftForm((prev) => ({
                  ...prev,
                  opening_cash: event.target.value,
                }))
              }
            />

            <Input
              label="Catatan"
              value={openShiftForm.notes}
              onChange={(event) =>
                setOpenShiftForm((prev) => ({
                  ...prev,
                  notes: event.target.value,
                }))
              }
            />
          </div>
        </Modal>

        <Modal
          open={cashMovementModal}
          title="Tambah Kas Masuk/Keluar"
          onClose={() => setCashMovementModal(false)}
          footer={
            <>
              <Button variant="outline" onClick={() => setCashMovementModal(false)}>
                Batal
              </Button>
              <Button
                loading={cashMovementMutation.isPending}
                onClick={() => cashMovementMutation.mutate()}
              >
                Simpan
              </Button>
            </>
          }
        >
          <div className="space-y-4">
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">
                Tipe Pergerakan Kas
              </label>
              <select
                className="w-full rounded-xl border border-slate-300 px-3 py-2 text-sm"
                value={cashMovementForm.movement_type}
                onChange={(event) =>
                  setCashMovementForm((prev) => ({
                    ...prev,
                    movement_type: event.target.value as "cash_in" | "cash_out",
                  }))
                }
              >
                <option value="cash_in">Kas Masuk</option>
                <option value="cash_out">Kas Keluar</option>
              </select>
            </div>

            <Input
              label="Nominal"
              type="number"
              min="1"
              value={cashMovementForm.amount}
              onChange={(event) =>
                setCashMovementForm((prev) => ({
                  ...prev,
                  amount: event.target.value,
                }))
              }
            />

            <Input
              label="Alasan"
              value={cashMovementForm.reason}
              onChange={(event) =>
                setCashMovementForm((prev) => ({
                  ...prev,
                  reason: event.target.value,
                }))
              }
            />

            <Input
              label="Catatan"
              value={cashMovementForm.notes}
              onChange={(event) =>
                setCashMovementForm((prev) => ({
                  ...prev,
                  notes: event.target.value,
                }))
              }
            />
          </div>
        </Modal>

        <Modal
          open={closeShiftModal}
          title="Tutup Shift"
          onClose={() => setCloseShiftModal(false)}
          footer={
            <>
              <Button variant="outline" onClick={() => setCloseShiftModal(false)}>
                Batal
              </Button>
              <Button
                variant="danger"
                loading={closeShiftMutation.isPending}
                onClick={() => closeShiftMutation.mutate()}
              >
                Tutup Shift
              </Button>
            </>
          }
        >
          <div className="space-y-4">
            <Card>
              <div className="space-y-2 text-sm text-slate-700">
                <div className="flex justify-between">
                  <span>Modal Awal</span>
                  <span>{formatCurrency(openingCash)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Kas Masuk</span>
                  <span>{formatCurrency(cashInTotal)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Kas Keluar</span>
                  <span>{formatCurrency(cashOutTotal)}</span>
                </div>
                <div className="flex justify-between border-t border-slate-200 pt-2 font-semibold text-slate-900">
                  <span>Expected Cash</span>
                  <span>{formatCurrency(expectedCash)}</span>
                </div>
              </div>
            </Card>

            <Input
              label="Uang Fisik Saat Tutup"
              type="number"
              min="0"
              value={closeShiftForm.closing_cash}
              onChange={(event) =>
                setCloseShiftForm((prev) => ({
                  ...prev,
                  closing_cash: event.target.value,
                }))
              }
            />

            <Input
              label="Catatan Tutup Shift"
              value={closeShiftForm.notes}
              onChange={(event) =>
                setCloseShiftForm((prev) => ({
                  ...prev,
                  notes: event.target.value,
                }))
              }
            />

            <div className="rounded-2xl bg-slate-100 p-4 text-sm text-slate-700">
              Selisih sementara:{" "}
              <span className="font-semibold text-slate-900">
                {formatCurrency(Number(closeShiftForm.closing_cash || 0) - expectedCash)}
              </span>
            </div>
          </div>
        </Modal>
      </div>
    </PermissionWrapper>
  );
}
```
</details>

<a id="file-srcmodulesposservicesposservicets"></a>
### src\modules\pos\services\pos.service.ts
- SHA: `32962d927f2e`  
- Ukuran: 8 KB
<details><summary><strong>Lihat Kode Lengkap</strong></summary>

```ts
import { apiClient } from "@/services/api/api-client";
import { endpoints } from "@/services/api/endpoints";
import type { ApiMeta, ApiResponse } from "@/types/api";
import type { Customer } from "@/types/customer";
import type { Product, ProductCategory } from "@/types/product";
import type {
  PosCheckoutDraftResult,
  PosOrderChannel,
  PosPaymentMethodOption,
  PosPaymentSplitRow,
  PosReceiptItemSnapshot,
  PosReceiptSnapshot,
  PosVoucher,
  PosVoucherEvaluationResult,
} from "@/modules/pos/types/pos";

export interface PosPaginationQuery {
  page?: number;
  per_page?: number;
  search?: string;
  is_active?: boolean | "";
}

export interface PosProductQuery extends PosPaginationQuery {
  product_category_id?: number | "";
  product_type?: "single" | "bundle" | "";
}

export interface PosCustomerQuery extends PosPaginationQuery {
  is_member?: boolean | "";
}

export interface PosVoucherQuery extends PosPaginationQuery {
  discount_type?: "percent" | "fixed" | "";
}

export interface PosPaginatedResult<T> {
  items: T[];
  meta: ApiMeta | null;
  message: string;
}

export interface SubmitCheckoutDraftPayload {
  outlet_name: string;
  cashier_name: string;
  order_channel: PosOrderChannel;
  customer_name?: string | null;
  customer_phone?: string | null;
  voucher_code?: string | null;
  subtotal: number;
  discount_amount: number;
  tax_amount: number;
  service_charge_amount: number;
  grand_total: number;
  paid_total: number;
  change_amount: number;
  payment_status: "pending" | "success";
  payments: PosPaymentSplitRow[];
  items: PosReceiptItemSnapshot[];
}

const unwrapPaginated = <T>(response: ApiResponse<T[]>): PosPaginatedResult<T> => ({
  items: response.data,
  meta: response.meta ?? null,
  message: response.message,
});

const RECEIPT_DRAFTS_STORAGE_KEY = "chicken-alibaba-pos-receipt-drafts";

const formatOrderNumber = () => {
  const now = new Date();
  const stamp = [
    now.getFullYear(),
    String(now.getMonth() + 1).padStart(2, "0"),
    String(now.getDate()).padStart(2, "0"),
    String(now.getHours()).padStart(2, "0"),
    String(now.getMinutes()).padStart(2, "0"),
    String(now.getSeconds()).padStart(2, "0"),
  ].join("");

  return `ORD-${stamp}-${Math.random().toString(36).slice(2, 6).toUpperCase()}`;
};

const parseNumber = (value: number | string | null | undefined) => Number(value ?? 0);

const nowIsoLocal = () => new Date().toISOString();

export const posService = {
  async getProductCategories(params: PosPaginationQuery = {}) {
    const response = await apiClient.get<ApiResponse<ProductCategory[]>>(
      endpoints.productCategories.index,
      { params }
    );

    return unwrapPaginated(response.data);
  },

  async getProducts(params: PosProductQuery = {}) {
    const response = await apiClient.get<ApiResponse<Product[]>>(endpoints.products.index, {
      params,
    });

    return unwrapPaginated(response.data);
  },

  async getCustomers(params: PosCustomerQuery = {}) {
    const response = await apiClient.get<ApiResponse<Customer[]>>(endpoints.customers.index, {
      params,
    });

    return unwrapPaginated(response.data);
  },

  async getVouchers(params: PosVoucherQuery = {}) {
    const response = await apiClient.get<ApiResponse<PosVoucher[]>>(endpoints.vouchers.index, {
      params,
    });

    return unwrapPaginated(response.data);
  },

  getPaymentMethods(): PosPaymentMethodOption[] {
    return [
      {
        code: "cash",
        name: "Tunai",
        type: "cash",
        is_active: true,
        allow_overpay: true,
      },
      {
        code: "qris",
        name: "QRIS",
        type: "qris",
        is_active: true,
        requires_reference: true,
        allow_overpay: false,
      },
      {
        code: "transfer",
        name: "Transfer",
        type: "transfer",
        is_active: true,
        requires_reference: true,
        allow_overpay: false,
      },
    ];
  },

  evaluateVoucher(params: {
    vouchers: PosVoucher[];
    voucherCode: string;
    subtotal: number;
  }): PosVoucherEvaluationResult {
    const code = params.voucherCode.trim().toUpperCase();

    if (!code) {
      return {
        valid: false,
        message: "Kode voucher masih kosong.",
        discount_amount: 0,
        voucher: null,
      };
    }

    const voucher =
      params.vouchers.find((item) => item.code.trim().toUpperCase() === code) ?? null;

    if (!voucher) {
      return {
        valid: false,
        message: "Voucher tidak ditemukan.",
        discount_amount: 0,
        voucher: null,
      };
    }

    if (!voucher.is_active) {
      return {
        valid: false,
        message: "Voucher tidak aktif.",
        discount_amount: 0,
        voucher,
      };
    }

    const now = Date.now();
    const startsAt = voucher.starts_at ? new Date(voucher.starts_at).getTime() : null;
    const endsAt = voucher.ends_at ? new Date(voucher.ends_at).getTime() : null;

    if (startsAt && now < startsAt) {
      return {
        valid: false,
        message: "Voucher belum mulai berlaku.",
        discount_amount: 0,
        voucher,
      };
    }

    if (endsAt && now > endsAt) {
      return {
        valid: false,
        message: "Voucher sudah berakhir.",
        discount_amount: 0,
        voucher,
      };
    }

    const minOrderTotal = parseNumber(voucher.min_order_total);

    if (params.subtotal < minOrderTotal) {
      return {
        valid: false,
        message: `Minimal transaksi untuk voucher ini adalah Rp${minOrderTotal.toLocaleString("id-ID")}.`,
        discount_amount: 0,
        voucher,
      };
    }

    if (
      typeof voucher.quota === "number" &&
      typeof voucher.used_count === "number" &&
      voucher.quota > 0 &&
      voucher.used_count >= voucher.quota
    ) {
      return {
        valid: false,
        message: "Kuota voucher sudah habis.",
        discount_amount: 0,
        voucher,
      };
    }

    let discountAmount = 0;

    if (voucher.discount_type === "fixed") {
      discountAmount = parseNumber(voucher.discount_value);
    } else {
      discountAmount = (params.subtotal * parseNumber(voucher.discount_value)) / 100;
      const maxDiscount = parseNumber(voucher.max_discount);

      if (maxDiscount > 0) {
        discountAmount = Math.min(discountAmount, maxDiscount);
      }
    }

    discountAmount = Math.min(discountAmount, params.subtotal);

    return {
      valid: true,
      message: `Voucher ${voucher.code} berhasil diterapkan.`,
      discount_amount: discountAmount,
      voucher,
    };
  },

  submitCheckoutDraft(payload: SubmitCheckoutDraftPayload): PosCheckoutDraftResult {
    const order_number = formatOrderNumber();

    const receipt: PosReceiptSnapshot = {
      order_number,
      order_channel: payload.order_channel,
      outlet_name: payload.outlet_name,
      cashier_name: payload.cashier_name,
      customer_name: payload.customer_name ?? null,
      customer_phone: payload.customer_phone ?? null,
      ordered_at: nowIsoLocal(),
      voucher_code: payload.voucher_code ?? null,
      subtotal: payload.subtotal,
      discount_amount: payload.discount_amount,
      tax_amount: payload.tax_amount,
      service_charge_amount: payload.service_charge_amount,
      grand_total: payload.grand_total,
      paid_total: payload.paid_total,
      change_amount: payload.change_amount,
      payment_status: payload.payment_status,
      payments: payload.payments,
      items: payload.items,
    };

    const raw = localStorage.getItem(RECEIPT_DRAFTS_STORAGE_KEY);
    const existing = raw ? ((JSON.parse(raw) as PosReceiptSnapshot[]) ?? []) : [];
    const next = [receipt, ...existing].slice(0, 50);

    localStorage.setItem(RECEIPT_DRAFTS_STORAGE_KEY, JSON.stringify(next));

    return {
      message:
        "Checkout draft berhasil dibuat. Siap diganti ke submit API saat backend orders/payments tersedia.",
      order_number,
      receipt,
    };
  },

  getStoredReceipts(): PosReceiptSnapshot[] {
    const raw = localStorage.getItem(RECEIPT_DRAFTS_STORAGE_KEY);

    if (!raw) {
      return [];
    }

    try {
      return JSON.parse(raw) as PosReceiptSnapshot[];
    } catch {
      localStorage.removeItem(RECEIPT_DRAFTS_STORAGE_KEY);
      return [];
    }
  },

  getStoredReceiptByOrderNumber(orderNumber: string): PosReceiptSnapshot | null {
    const receipts = this.getStoredReceipts();
    return receipts.find((item) => item.order_number === orderNumber) ?? null;
  },
};
```
</details>

<a id="file-srcmodulesposservicesshiftservicets"></a>
### src\modules\pos\services\shift.service.ts
- SHA: `471405418a0a`  
- Ukuran: 2 KB
<details><summary><strong>Lihat Kode Lengkap</strong></summary>

```ts
// src/modules/pos/services/shift.service.ts

import { apiClient } from "@/services/api/api-client";
import { endpoints } from "@/services/api/endpoints";
import type { ApiMeta, ApiResponse } from "@/types/api";
import type {
  CashierShift,
  CashierShiftQuery,
  CashMovement,
  CashMovementPayload,
  CashMovementQuery,
  CloseCashierShiftPayload,
  OpenCashierShiftPayload,
} from "@/types/cashier-shift";

export interface ShiftPaginatedResult<T> {
  items: T[];
  meta: ApiMeta | null;
  message: string;
}

const unwrapPaginated = <T>(response: ApiResponse<T[]>): ShiftPaginatedResult<T> => ({
  items: response.data,
  meta: response.meta ?? null,
  message: response.message,
});

export const shiftService = {
  async getCashierShifts(params: CashierShiftQuery = {}) {
    const response = await apiClient.get<ApiResponse<CashierShift[]>>(
      endpoints.cashierShifts.index,
      { params }
    );

    return unwrapPaginated(response.data);
  },

  async getCashierShift(id: number) {
    const response = await apiClient.get<ApiResponse<CashierShift>>(
      endpoints.cashierShifts.show(id)
    );

    return response.data;
  },

  async openCashierShift(payload: OpenCashierShiftPayload) {
    const response = await apiClient.post<ApiResponse<CashierShift>>(
      endpoints.cashierShifts.store,
      payload
    );

    return response.data;
  },

  async closeCashierShift(id: number, payload: CloseCashierShiftPayload) {
    const response = await apiClient.post<ApiResponse<CashierShift>>(
      endpoints.cashierShifts.close(id),
      payload
    );

    return response.data;
  },

  async updateCashierShiftNotes(id: number, notes: string | null) {
    const response = await apiClient.put<ApiResponse<CashierShift>>(
      endpoints.cashierShifts.update(id),
      { notes }
    );

    return response.data;
  },

  async getCashMovements(params: CashMovementQuery = {}) {
    const response = await apiClient.get<ApiResponse<CashMovement[]>>(
      endpoints.cashMovements.index,
      { params }
    );

    return unwrapPaginated(response.data);
  },

  async createCashMovement(payload: CashMovementPayload) {
    const response = await apiClient.post<ApiResponse<CashMovement>>(
      endpoints.cashMovements.store,
      payload
    );

    return response.data;
  },
};
```
</details>

<a id="file-srcmodulespostypesposts"></a>
### src\modules\pos\types\pos.ts
- SHA: `937c28a31595`  
- Ukuran: 5 KB
<details><summary><strong>Lihat Kode Lengkap</strong></summary>

```ts
import type { Customer } from "@/types/customer";
import type { Product, ProductModifierGroup, ProductVariantGroup } from "@/types/product";

export type PosOrderChannel =
  | "pos"
  | "takeaway"
  | "dine_in"
  | "pickup"
  | "delivery"
  | "website";

export interface PosVariantSelection {
  group_name: string;
  option_name: string;
  price_adjustment: number;
}

export interface PosModifierSelection {
  group_name: string;
  option_name: string;
  qty: number;
  price: number;
}

export interface PosCartItem {
  id: string;
  product_id: number;
  product_name: string;
  product_type: "single" | "bundle";
  image_url: string | null;
  qty: number;
  base_unit_price: number;
  notes: string;
  selected_variants: PosVariantSelection[];
  selected_modifiers: PosModifierSelection[];
  line_total: number;
}

export type PosCartItemInput = Omit<PosCartItem, "id" | "line_total">;

export interface PosHeldCart {
  held_at: string;
  customer: Customer | null;
  order_channel: PosOrderChannel;
  items: PosCartItem[];
}

export interface PosProductConfiguratorValue {
  product: Product;
  outlet_price: number;
  selected_variant_ids: Record<number, number[]>;
  selected_modifier_ids: Record<number, number[]>;
  note: string;
}

export interface PosProductConfiguratorSubmit {
  product: Product;
  qty: number;
  base_unit_price: number;
  notes: string;
  selected_variants: PosVariantSelection[];
  selected_modifiers: PosModifierSelection[];
}

export interface PosDisplayProduct extends Product {
  effective_price: number;
  is_available_in_pos: boolean;
}

export interface PosProductFilterResult {
  items: PosDisplayProduct[];
  categories: Array<{
    id: number;
    name: string;
    count: number;
  }>;
}

export interface PosVariantGroupView extends ProductVariantGroup {
  options: NonNullable<ProductVariantGroup["options"]>;
}

export interface PosModifierGroupView extends ProductModifierGroup {
  options: NonNullable<ProductModifierGroup["options"]>;
}

export interface PosCartState {
  items: PosCartItem[];
  customer: Customer | null;
  orderChannel: PosOrderChannel;
  heldCartMeta: PosHeldCart | null;
  setCustomer: (customer: Customer | null) => void;
  setOrderChannel: (channel: PosOrderChannel) => void;
  addItem: (item: PosCartItemInput) => void;
  updateQty: (itemId: string, qty: number) => void;
  updateNotes: (itemId: string, notes: string) => void;
  removeItem: (itemId: string) => void;
  clearCart: () => void;
  holdCart: () => void;
  restoreHeldCart: () => boolean;
  discardHeldCart: () => void;
}

export interface PosPaymentMethodOption {
  code: string;
  name: string;
  type: "cash" | "qris" | "transfer" | "ewallet" | "other";
  is_active: boolean;
  requires_reference?: boolean;
  allow_overpay?: boolean;
}

export interface PosPaymentSplitRow {
  id: string;
  payment_method_code: string;
  amount: number;
  reference_number: string;
  notes: string;
}

export interface PosVoucher {
  id: number;
  code: string;
  name: string;
  description?: string | null;
  discount_type: "percent" | "fixed";
  discount_value: number | string;
  max_discount?: number | string | null;
  min_order_total: number | string;
  quota?: number | null;
  used_count?: number;
  starts_at?: string | null;
  ends_at?: string | null;
  is_active: boolean;
  applies_to: "all" | "specific_products" | "specific_categories";
}

export interface PosVoucherEvaluationResult {
  valid: boolean;
  message: string;
  discount_amount: number;
  voucher: PosVoucher | null;
}

export interface PosCheckoutTotals {
  subtotal: number;
  discount: number;
  tax: number;
  serviceCharge: number;
  grandTotal: number;
  paidTotal: number;
  remaining: number;
  changeAmount: number;
}

export interface PosReceiptItemSnapshot {
  product_name: string;
  qty: number;
  unit_price: number;
  notes?: string;
  variants: PosVariantSelection[];
  modifiers: PosModifierSelection[];
  line_total: number;
}

export interface PosReceiptSnapshot {
  order_number: string;
  order_channel: PosOrderChannel;
  outlet_name: string;
  cashier_name: string;
  customer_name?: string | null;
  customer_phone?: string | null;
  ordered_at: string;
  voucher_code?: string | null;
  subtotal: number;
  discount_amount: number;
  tax_amount: number;
  service_charge_amount: number;
  grand_total: number;
  paid_total: number;
  change_amount: number;
  payment_status: "pending" | "success";
  payments: PosPaymentSplitRow[];
  items: PosReceiptItemSnapshot[];
}

export interface PosCheckoutDraftResult {
  message: string;
  order_number: string;
  receipt: PosReceiptSnapshot;
}
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
- SHA: `b62362432c7b`  
- Ukuran: 3 KB
<details><summary><strong>Lihat Kode Lengkap</strong></summary>

```ts
// src/components/navigation/navigation.config.ts

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
  {
    label: "Product Variants",
    to: "/admin/product-variants",
    permission: "products.view",
  },
  {
    label: "Product Modifiers",
    to: "/admin/product-modifiers",
    permission: "products.view",
  },
  {
    label: "Product Bundles",
    to: "/admin/product-bundles",
    permission: "products.view",
  },
  {
    label: "Units",
    to: "/admin/units",
    permission: "units.view",
  },
  {
    label: "Raw Material Categories",
    to: "/admin/raw-material-categories",
    permission: "raw_material_categories.view",
  },
  {
    label: "Raw Materials",
    to: "/admin/raw-materials",
    permission: "raw_materials.view",
  },
  {
    label: "Outlet Material Stocks",
    to: "/admin/outlet-material-stocks",
    permission: "outlet_material_stocks.view",
  },
  {
    label: "Product BOM",
    to: "/admin/product-boms",
    permission: "product_boms.view",
  },
  {
    label: "Suppliers",
    to: "/admin/suppliers",
    permission: "suppliers.view",
  },
  {
    label: "Purchase Orders",
    to: "/admin/purchase-orders",
    permission: "purchase_orders.view",
  },
  {
    label: "Goods Receipts",
    to: "/admin/goods-receipts",
    permission: "goods_receipts.view",
  },
  {
    label: "POS",
    to: "/pos/orders",
    permission: "products.view",
  },
  {
    label: "Kitchen",
    to: "/kitchen/tickets",
    permission: "kitchen_tickets.view",
  },
];

export const posNavigation: NavigationItem[] = [
  { label: "POS Home", to: "/pos" },
  { label: "New Order", to: "/pos/orders", permission: "orders.create" },
  { label: "Shift", to: "/pos/shifts", permission: "cashier_shifts.view" },
];

export const kitchenNavigation: NavigationItem[] = [
  { label: "Tickets", to: "/kitchen/tickets", permission: "kitchen_tickets.view" },
  { label: "Ready Queue", to: "/kitchen/ready", permission: "kitchen_tickets.view" },
];

export const ownerNavigation: NavigationItem[] = [
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
- SHA: `897180785ed2`  
- Ukuran: 6 KB
<details><summary><strong>Lihat Kode Lengkap</strong></summary>

```ts
// src/services/api/endpoints.ts

export const endpoints = {
  auth: {
    login: "/login",
    me: "/me",
    logout: "/logout",
    changePassword: "/change-password",
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
  },

  outletSettings: {
    show: (outletId: number | string) => `/outlets/${outletId}/settings`,
    update: (outletId: number | string) => `/outlets/${outletId}/settings`,
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

  units: {
    index: "/units",
    store: "/units",
    show: (id: number | string) => `/units/${id}`,
    update: (id: number | string) => `/units/${id}`,
    destroy: (id: number | string) => `/units/${id}`,
  },

  unitConversions: {
    index: "/unit-conversions",
    store: "/unit-conversions",
    show: (id: number | string) => `/unit-conversions/${id}`,
    update: (id: number | string) => `/unit-conversions/${id}`,
    destroy: (id: number | string) => `/unit-conversions/${id}`,
  },

  rawMaterialCategories: {
    index: "/raw-material-categories",
    store: "/raw-material-categories",
    show: (id: number | string) => `/raw-material-categories/${id}`,
    update: (id: number | string) => `/raw-material-categories/${id}`,
    destroy: (id: number | string) => `/raw-material-categories/${id}`,
  },

  rawMaterials: {
    index: "/raw-materials",
    store: "/raw-materials",
    show: (id: number | string) => `/raw-materials/${id}`,
    update: (id: number | string) => `/raw-materials/${id}`,
    destroy: (id: number | string) => `/raw-materials/${id}`,
  },

  outletMaterialStocks: {
    index: "/outlet-material-stocks",
    upsert: "/outlet-material-stocks/upsert",
    show: (id: number | string) => `/outlet-material-stocks/${id}`,
  },

  productBoms: {
    index: "/product-boms",
    store: "/product-boms",
    show: (id: number | string) => `/product-boms/${id}`,
    update: (id: number | string) => `/product-boms/${id}`,
    destroy: (id: number | string) => `/product-boms/${id}`,
  },

  suppliers: {
    index: "/suppliers",
    store: "/suppliers",
    show: (id: number | string) => `/suppliers/${id}`,
    update: (id: number | string) => `/suppliers/${id}`,
    destroy: (id: number | string) => `/suppliers/${id}`,
  },

  purchaseOrders: {
    index: "/purchase-orders",
    store: "/purchase-orders",
    show: (id: number | string) => `/purchase-orders/${id}`,
    update: (id: number | string) => `/purchase-orders/${id}`,
    destroy: (id: number | string) => `/purchase-orders/${id}`,
    approve: (id: number | string) => `/purchase-orders/${id}/approve`,
    cancel: (id: number | string) => `/purchase-orders/${id}/cancel`,
  },

  goodsReceipts: {
    index: "/goods-receipts",
    store: "/goods-receipts",
    show: (id: number | string) => `/goods-receipts/${id}`,
    update: (id: number | string) => `/goods-receipts/${id}`,
    destroy: (id: number | string) => `/goods-receipts/${id}`,
    post: (id: number | string) => `/goods-receipts/${id}/post`,
    cancel: (id: number | string) => `/goods-receipts/${id}/cancel`,
  },

  orders: {
    index: "/orders",
    store: "/orders",
    show: (id: number | string) => `/orders/${id}`,
    update: (id: number | string) => `/orders/${id}`,
    destroy: (id: number | string) => `/orders/${id}`,
    confirm: (id: number | string) => `/orders/${id}/confirm`,
    complete: (id: number | string) => `/orders/${id}/complete`,
    cancel: (id: number | string) => `/orders/${id}/cancel`,
  },

  payments: {
    index: "/payments",
    store: "/payments",
    show: (id: number | string) => `/payments/${id}`,
    cancel: (id: number | string) => `/payments/${id}/cancel`,
  },

  paymentMethods: {
    index: "/payment-methods",
    store: "/payment-methods",
    show: (id: number | string) => `/payment-methods/${id}`,
    update: (id: number | string) => `/payment-methods/${id}`,
    destroy: (id: number | string) => `/payment-methods/${id}`,
  },

  receiptPrints: {
    show: (orderId: number | string) => `/orders/${orderId}/receipt`,
  },

  cashierShifts: {
    index: "/cashier-shifts",
    store: "/cashier-shifts",
    show: (id: number | string) => `/cashier-shifts/${id}`,
    update: (id: number | string) => `/cashier-shifts/${id}`,
    close: (id: number | string) => `/cashier-shifts/${id}/close`,
  },

  cashMovements: {
    index: "/cash-movements",
    store: "/cash-movements",
    show: (id: number | string) => `/cash-movements/${id}`,
  },

  kitchenTickets: {
    index: "/kitchen-tickets",
    store: "/kitchen-tickets",
    show: (id: number | string) => `/kitchen-tickets/${id}`,
    print: (id: number | string) => `/kitchen-tickets/${id}/print`,
    startPreparing: (id: number | string) => `/kitchen-tickets/${id}/start-preparing`,
    markReady: (id: number | string) => `/kitchen-tickets/${id}/ready`,
    serve: (id: number | string) => `/kitchen-tickets/${id}/serve`,
    cancel: (id: number | string) => `/kitchen-tickets/${id}/cancel`,
    destroy: (id: number | string) => `/kitchen-tickets/${id}`,
  },
};
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

<a id="file-srctypescashier-shiftts"></a>
### src\types\cashier-shift.ts
- SHA: `887395fef1ff`  
- Ukuran: 2 KB
<details><summary><strong>Lihat Kode Lengkap</strong></summary>

```ts
// src/types/cashier-shift.ts

import type { Outlet } from "@/types/outlet";
import type { User } from "@/types/user";

export type CashierShiftStatus = "open" | "closed";

export type CashMovementType =
  | "cash_in"
  | "cash_out"
  | "opening"
  | "closing_adjustment";

export interface CashMovement {
  id: number;
  cashier_shift_id: number;
  movement_type: CashMovementType;
  amount: number | string;
  reason?: string | null;
  notes?: string | null;
  created_by?: number | null;
  created_at?: string | null;
  updated_at?: string | null;
  creator?: User | null;
}

export interface CashierShift {
  id: number;
  outlet_id: number;
  user_id: number;
  shift_number: string;
  opened_at: string;
  closed_at?: string | null;
  opening_cash: number | string;
  expected_cash: number | string;
  closing_cash: number | string;
  cash_difference: number | string;
  status: CashierShiftStatus;
  notes?: string | null;
  created_at?: string | null;
  updated_at?: string | null;
  outlet?: Outlet | null;
  user?: User | null;
  cash_movements?: CashMovement[];
  cashMovements?: CashMovement[];
  orders_count?: number;
}

export interface CashierShiftQuery {
  page?: number;
  per_page?: number;
  outlet_id?: number | "";
  user_id?: number | "";
  status?: CashierShiftStatus | "";
  opened_from?: string;
  opened_until?: string;
}

export interface CashMovementQuery {
  page?: number;
  per_page?: number;
  cashier_shift_id?: number | "";
  outlet_id?: number | "";
  movement_type?: "cash_in" | "cash_out" | "";
}

export interface OpenCashierShiftPayload {
  outlet_id: number;
  opening_cash?: number;
  opened_at?: string | null;
  notes?: string | null;
}

export interface CloseCashierShiftPayload {
  closing_cash: number;
  closed_at?: string | null;
  notes?: string | null;
}

export interface CashMovementPayload {
  cashier_shift_id: number;
  movement_type: "cash_in" | "cash_out";
  amount: number;
  reason?: string | null;
  notes?: string | null;
}
```
</details>

<a id="file-srctypescustomerts"></a>
### src\types\customer.ts
- SHA: `c6eb0d8af4fe`  
- Ukuran: 751 B
<details><summary><strong>Lihat Kode Lengkap</strong></summary>

```ts
export interface CustomerAddress {
  id: number;
  label: string | null;
  recipient_name: string | null;
  recipient_phone: string | null;
  address: string;
  city: string | null;
  province: string | null;
  postal_code: string | null;
  latitude: string | null;
  longitude: string | null;
  is_default: boolean;
  created_at: string;
  updated_at: string;
}

export interface Customer {
  id: number;
  code: string | null;
  name: string;
  phone: string | null;
  email: string | null;
  gender: string | null;
  birth_date: string | null;
  points: number;
  total_spent: string | number;
  is_member: boolean;
  notes: string | null;
  addresses?: CustomerAddress[];
  created_at: string;
  updated_at: string;
  deleted_at?: string | null;
}
```
</details>

<a id="file-srctypesinventoryts"></a>
### src\types\inventory.ts
- SHA: `c36df19df4cd`  
- Ukuran: 2 KB
<details><summary><strong>Lihat Kode Lengkap</strong></summary>

```ts
import type { Outlet } from "@/types/outlet";
import type { Product } from "@/types/product";

export interface Unit {
  id: number;
  name: string;
  code: string;
  created_at?: string | null;
  updated_at?: string | null;
}

export interface UnitConversion {
  id: number;
  from_unit_id: number;
  to_unit_id: number;
  multiplier: number;
  from_unit?: Unit | null;
  to_unit?: Unit | null;
  created_at?: string | null;
  updated_at?: string | null;
}

export interface RawMaterialCategory {
  id: number;
  name: string;
  created_at?: string | null;
  updated_at?: string | null;
}

export interface OutletMaterialStock {
  id: number;
  outlet_id: number;
  raw_material_id: number;
  qty_on_hand: number;
  qty_reserved: number;
  last_movement_at?: string | null;
  outlet?: Outlet | null;
  raw_material?: RawMaterial | null;
  rawMaterial?: RawMaterial | null;
  created_at?: string | null;
  updated_at?: string | null;
}

export interface RawMaterial {
  id: number;
  raw_material_category_id: number;
  unit_id: number;
  code?: string | null;
  name: string;
  sku?: string | null;
  description?: string | null;
  minimum_stock: number;
  last_purchase_price: number;
  average_cost: number;
  is_active: boolean;
  category?: RawMaterialCategory | null;
  unit?: Unit | null;
  outlet_stocks?: OutletMaterialStock[];
  outletStocks?: OutletMaterialStock[];
  created_at?: string | null;
  updated_at?: string | null;
}

export interface ProductBomItem {
  id: number;
  product_bom_id: number;
  raw_material_id: number;
  unit_id: number;
  qty: number;
  waste_percent: number;
  raw_material?: RawMaterial | null;
  rawMaterial?: RawMaterial | null;
  unit?: Unit | null;
  created_at?: string | null;
  updated_at?: string | null;
}

export interface ProductBom {
  id: number;
  product_id: number;
  version: number;
  is_active: boolean;
  notes?: string | null;
  product?: Product | null;
  items?: ProductBomItem[];
  created_at?: string | null;
  updated_at?: string | null;
}
```
</details>

<a id="file-srctypeskitchents"></a>
### src\types\kitchen.ts
- SHA: `4b1d3de66a2b`  
- Ukuran: 2 KB
<details><summary><strong>Lihat Kode Lengkap</strong></summary>

```ts
import type { ApiMeta } from "@/types/api";

export type KitchenTicketStatus =
  | "pending"
  | "preparing"
  | "ready"
  | "served"
  | "cancelled";

export type KitchenOrderChannel =
  | "pos"
  | "dine_in"
  | "takeaway"
  | "pickup"
  | "delivery"
  | "website";

export interface KitchenTicketOrderOutlet {
  id: number;
  code: string;
  name: string;
}

export interface KitchenTicketOrderCustomer {
  id: number;
  code?: string | null;
  name: string;
  phone?: string | null;
}

export interface KitchenTicketOrder {
  id: number;
  order_number: string;
  queue_number?: string | null;
  order_channel: KitchenOrderChannel;
  order_status: string;
  payment_status: string;
  outlet_id: number;
  outlet?: KitchenTicketOrderOutlet | null;
  customer?: KitchenTicketOrderCustomer | null;
  ordered_at?: string | null;
  notes?: string | null;
}

export interface KitchenTicketOrderItem {
  id: number;
  product_id?: number | null;
  product_name_snapshot: string;
  sku_snapshot?: string | null;
  qty: number | string;
  unit_price: number | string;
  discount_amount: number | string;
  line_total: number | string;
  notes?: string | null;
}

export interface KitchenTicketItem {
  id: number;
  kitchen_ticket_id: number;
  order_item_id: number;
  item_name_snapshot: string;
  qty: number | string;
  notes?: string | null;
  order_item?: KitchenTicketOrderItem | null;
  created_at?: string | null;
  updated_at?: string | null;
}

export interface KitchenTicket {
  id: number;
  order_id: number;
  ticket_number: string;
  status: KitchenTicketStatus;
  printed_at?: string | null;
  prepared_at?: string | null;
  ready_at?: string | null;
  order?: KitchenTicketOrder | null;
  items?: KitchenTicketItem[];
  created_at?: string | null;
  updated_at?: string | null;
}

export interface KitchenTicketQuery {
  page?: number;
  per_page?: number;
  search?: string;
  status?: KitchenTicketStatus | "";
  outlet_id?: number | "";
  order_id?: number | "";
}

export interface KitchenTicketActionPayload {
  notes?: string | null;
  printed_at?: string | null;
  prepared_at?: string | null;
  ready_at?: string | null;
  completed_at?: string | null;
  cancelled_at?: string | null;
}

export interface KitchenPaginatedResult<T> {
  items: T[];
  meta: ApiMeta | null;
  message: string;
}
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

<a id="file-srctypespurchasingts"></a>
### src\types\purchasing.ts
- SHA: `b11fca67cef8`  
- Ukuran: 3 KB
<details><summary><strong>Lihat Kode Lengkap</strong></summary>

```ts
// src/types/purchasing.ts

import type { Outlet } from "@/types/outlet";
import type { RawMaterial, Unit } from "@/types/inventory";
import type { User } from "@/types/user";

export type PurchaseOrderStatus =
  | "draft"
  | "approved"
  | "partial_received"
  | "received"
  | "cancelled";

export type GoodsReceiptStatus = "draft" | "posted" | "cancelled";

export interface Supplier {
  id: number;
  code: string | null;
  name: string;
  phone: string | null;
  email: string | null;
  address: string | null;
  city: string | null;
  contact_person: string | null;
  is_active: boolean;
  purchase_orders_count?: number;
  purchaseOrders_count?: number;
  created_at?: string | null;
  updated_at?: string | null;
  deleted_at?: string | null;
}

export interface PurchaseOrderItem {
  id: number;
  purchase_order_id: number;
  raw_material_id: number;
  unit_id: number;
  qty_ordered: number;
  unit_price: number;
  discount_amount: number;
  line_total: number;
  notes: string | null;
  raw_material?: RawMaterial | null;
  rawMaterial?: RawMaterial | null;
  unit?: Unit | null;
  created_at?: string | null;
  updated_at?: string | null;
}

export interface PurchaseOrder {
  id: number;
  outlet_id: number;
  supplier_id: number;
  po_number: string;
  status: PurchaseOrderStatus;
  order_date: string;
  expected_date: string | null;
  subtotal: number;
  discount_amount: number;
  tax_amount: number;
  total_amount: number;
  notes: string | null;
  approved_by: number | null;
  approved_at: string | null;
  created_by: number | null;
  outlet?: Outlet | null;
  supplier?: Supplier | null;
  approver?: User | null;
  creator?: User | null;
  items?: PurchaseOrderItem[];
  goods_receipts?: GoodsReceipt[];
  goodsReceipts?: GoodsReceipt[];
  created_at?: string | null;
  updated_at?: string | null;
}

export interface GoodsReceiptItem {
  id: number;
  goods_receipt_id: number;
  raw_material_id: number;
  unit_id: number;
  qty_received: number;
  unit_cost: number;
  line_total: number;
  expired_at: string | null;
  notes: string | null;
  raw_material?: RawMaterial | null;
  rawMaterial?: RawMaterial | null;
  unit?: Unit | null;
  created_at?: string | null;
  updated_at?: string | null;
}

export interface GoodsReceipt {
  id: number;
  purchase_order_id: number;
  outlet_id: number;
  receipt_number: string;
  received_date: string;
  status: GoodsReceiptStatus;
  notes: string | null;
  received_by: number | null;
  purchase_order?: PurchaseOrder | null;
  purchaseOrder?: PurchaseOrder | null;
  outlet?: Outlet | null;
  receiver?: User | null;
  items?: GoodsReceiptItem[];
  created_at?: string | null;
  updated_at?: string | null;
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
