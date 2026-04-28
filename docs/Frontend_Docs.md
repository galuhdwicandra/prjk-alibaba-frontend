# Dokumentasi Frontend (FULL Source)

_Dihasilkan otomatis: 2026-04-28 10:00:48_  
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
  - [src\modules\admin\components\stock\StockFlowItemsEditor.tsx](#file-srcmodulesadmincomponentsstockstockflowitemseditortsx)
  - [src\modules\admin\pages\ActivityLogsPage.tsx](#file-srcmodulesadminpagesactivitylogspagetsx)
  - [src\modules\admin\pages\CashMovementsPage.tsx](#file-srcmodulesadminpagescashmovementspagetsx)
  - [src\modules\admin\pages\CriticalAlertsPage.tsx](#file-srcmodulesadminpagescriticalalertspagetsx)
  - [src\modules\admin\pages\CustomersPage.tsx](#file-srcmodulesadminpagescustomerspagetsx)
  - [src\modules\admin\pages\ExpenseCategoriesPage.tsx](#file-srcmodulesadminpagesexpensecategoriespagetsx)
  - [src\modules\admin\pages\ExpensesPage.tsx](#file-srcmodulesadminpagesexpensespagetsx)
  - [src\modules\admin\pages\GoodsReceiptsPage.tsx](#file-srcmodulesadminpagesgoodsreceiptspagetsx)
  - [src\modules\admin\pages\NotificationsPage.tsx](#file-srcmodulesadminpagesnotificationspagetsx)
  - [src\modules\admin\pages\OutletMaterialStocksPage.tsx](#file-srcmodulesadminpagesoutletmaterialstockspagetsx)
  - [src\modules\admin\pages\OutletsPage.tsx](#file-srcmodulesadminpagesoutletspagetsx)
  - [src\modules\admin\pages\PermissionsPage.tsx](#file-srcmodulesadminpagespermissionspagetsx)
  - [src\modules\admin\pages\ProductBomsPage.tsx](#file-srcmodulesadminpagesproductbomspagetsx)
  - [src\modules\admin\pages\ProductBundlesPage.tsx](#file-srcmodulesadminpagesproductbundlespagetsx)
  - [src\modules\admin\pages\ProductCategoriesPage.tsx](#file-srcmodulesadminpagesproductcategoriespagetsx)
  - [src\modules\admin\pages\ProductModifiersPage.tsx](#file-srcmodulesadminpagesproductmodifierspagetsx)
  - [src\modules\admin\pages\ProductsPage.tsx](#file-srcmodulesadminpagesproductspagetsx)
  - [src\modules\admin\pages\ProductVariantsPage.tsx](#file-srcmodulesadminpagesproductvariantspagetsx)
  - [src\modules\admin\pages\PromotionsPage.tsx](#file-srcmodulesadminpagespromotionspagetsx)
  - [src\modules\admin\pages\PurchaseOrdersPage.tsx](#file-srcmodulesadminpagespurchaseorderspagetsx)
  - [src\modules\admin\pages\RawMaterialCategoriesPage.tsx](#file-srcmodulesadminpagesrawmaterialcategoriespagetsx)
  - [src\modules\admin\pages\RawMaterialsPage.tsx](#file-srcmodulesadminpagesrawmaterialspagetsx)
  - [src\modules\admin\pages\RolesPage.tsx](#file-srcmodulesadminpagesrolespagetsx)
  - [src\modules\admin\pages\StockMovementsPage.tsx](#file-srcmodulesadminpagesstockmovementspagetsx)
  - [src\modules\admin\pages\SuppliersPage.tsx](#file-srcmodulesadminpagessupplierspagetsx)
  - [src\modules\admin\pages\SystemSettingsPage.tsx](#file-srcmodulesadminpagessystemsettingspagetsx)
  - [src\modules\admin\pages\UnitsPage.tsx](#file-srcmodulesadminpagesunitspagetsx)
  - [src\modules\admin\pages\UsersPage.tsx](#file-srcmodulesadminpagesuserspagetsx)
  - [src\modules\admin\pages\VouchersPage.tsx](#file-srcmodulesadminpagesvoucherspagetsx)
  - [src\modules\admin\services\catalog.service.ts](#file-srcmodulesadminservicescatalogservicets)
  - [src\modules\admin\services\customer-promo.service.ts](#file-srcmodulesadminservicescustomer-promoservicets)
  - [src\modules\admin\services\expense.service.ts](#file-srcmodulesadminservicesexpenseservicets)
  - [src\modules\admin\services\inventory.service.ts](#file-srcmodulesadminservicesinventoryservicets)
  - [src\modules\admin\services\master-data.service.ts](#file-srcmodulesadminservicesmaster-dataservicets)
  - [src\modules\admin\services\notification.service.ts](#file-srcmodulesadminservicesnotificationservicets)
  - [src\modules\admin\services\purchasing.service.ts](#file-srcmodulesadminservicespurchasingservicets)
  - [src\modules\admin\services\stock-movement.service.ts](#file-srcmodulesadminservicesstock-movementservicets)
  - [src\modules\auth\hooks\useCurrentUser.ts](#file-srcmodulesauthhooksusecurrentuserts)
  - [src\modules\auth\pages\LoginPage.tsx](#file-srcmodulesauthpagesloginpagetsx)
  - [src\modules\auth\pages\NotFoundPage.tsx](#file-srcmodulesauthpagesnotfoundpagetsx)
  - [src\modules\auth\pages\UnauthorizedPage.tsx](#file-srcmodulesauthpagesunauthorizedpagetsx)
  - [src\modules\auth\schemas\login.schema.ts](#file-srcmodulesauthschemasloginschemats)
  - [src\modules\auth\services\auth.service.ts](#file-srcmodulesauthservicesauthservicets)
  - [src\modules\auth\store\auth.store.ts](#file-srcmodulesauthstoreauthstorets)
  - [src\modules\dashboard\components\DashboardBarList.tsx](#file-srcmodulesdashboardcomponentsdashboardbarlisttsx)
  - [src\modules\dashboard\components\DashboardFilters.tsx](#file-srcmodulesdashboardcomponentsdashboardfilterstsx)
  - [src\modules\dashboard\components\DashboardMetricCard.tsx](#file-srcmodulesdashboardcomponentsdashboardmetriccardtsx)
  - [src\modules\dashboard\components\DashboardQuickTable.tsx](#file-srcmodulesdashboardcomponentsdashboardquicktabletsx)
  - [src\modules\dashboard\pages\AdminDashboardPage.tsx](#file-srcmodulesdashboardpagesadmindashboardpagetsx)
  - [src\modules\dashboard\pages\OwnerDashboardPage.tsx](#file-srcmodulesdashboardpagesownerdashboardpagetsx)
  - [src\modules\dashboard\services\dashboard.service.ts](#file-srcmodulesdashboardservicesdashboardservicets)
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
  - [src\modules\pos\hooks\usePosKeyboardShortcuts.ts](#file-srcmodulesposhooksuseposkeyboardshortcutsts)
  - [src\modules\pos\pages\PosOrdersPage.tsx](#file-srcmodulespospagesposorderspagetsx)
  - [src\modules\pos\pages\PosShiftsPage.tsx](#file-srcmodulespospagesposshiftspagetsx)
  - [src\modules\pos\services\pos.service.ts](#file-srcmodulesposservicesposservicets)
  - [src\modules\pos\services\shift.service.ts](#file-srcmodulesposservicesshiftservicets)
  - [src\modules\pos\types\pos.ts](#file-srcmodulespostypesposts)
  - [src\modules\reporting\components\ReportDataTable.tsx](#file-srcmodulesreportingcomponentsreportdatatabletsx)
  - [src\modules\reporting\components\ReportFilters.tsx](#file-srcmodulesreportingcomponentsreportfilterstsx)
  - [src\modules\reporting\pages\ReportsPage.tsx](#file-srcmodulesreportingpagesreportspagetsx)
  - [src\modules\reporting\services\report.service.ts](#file-srcmodulesreportingservicesreportservicets)
- [Components (src/components)](#components-src-components)
  - [src\components\feedback\AppErrorBoundary.tsx](#file-srccomponentsfeedbackapperrorboundarytsx)
  - [src\components\feedback\AppLoader.tsx](#file-srccomponentsfeedbackapploadertsx)
  - [src\components\feedback\AppToaster.tsx](#file-srccomponentsfeedbackapptoastertsx)
  - [src\components\feedback\NetworkStatusBanner.tsx](#file-srccomponentsfeedbacknetworkstatusbannertsx)
  - [src\components\feedback\PageEmptyState.tsx](#file-srccomponentsfeedbackpageemptystatetsx)
  - [src\components\feedback\PageErrorState.tsx](#file-srccomponentsfeedbackpageerrorstatetsx)
  - [src\components\feedback\PageSkeleton.tsx](#file-srccomponentsfeedbackpageskeletontsx)
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
  - [src\hooks\useDebouncedValue.ts](#file-srchooksusedebouncedvaluets)
  - [src\hooks\useKeyboardShortcut.ts](#file-srchooksusekeyboardshortcutts)
  - [src\hooks\useOnlineStatus.ts](#file-srchooksuseonlinestatusts)
  - [src\hooks\usePermission.ts](#file-srchooksusepermissionts)
  - [src\hooks\useToast.ts](#file-srchooksusetoastts)
- [Types (src/types)](#types-src-types)
  - [src\types\api.ts](#file-srctypesapits)
  - [src\types\auth.ts](#file-srctypesauthts)
  - [src\types\cashier-shift.ts](#file-srctypescashier-shiftts)
  - [src\types\customer.ts](#file-srctypescustomerts)
  - [src\types\dashboard.ts](#file-srctypesdashboardts)
  - [src\types\expense.ts](#file-srctypesexpensets)
  - [src\types\inventory.ts](#file-srctypesinventoryts)
  - [src\types\kitchen.ts](#file-srctypeskitchents)
  - [src\types\notification.ts](#file-srctypesnotificationts)
  - [src\types\outlet.ts](#file-srctypesoutletts)
  - [src\types\permission.ts](#file-srctypespermissionts)
  - [src\types\product.ts](#file-srctypesproductts)
  - [src\types\promo.ts](#file-srctypespromots)
  - [src\types\purchasing.ts](#file-srctypespurchasingts)
  - [src\types\report.ts](#file-srctypesreportts)
  - [src\types\role.ts](#file-srctypesrolets)
  - [src\types\settings.ts](#file-srctypessettingsts)
  - [src\types\stock-movement.ts](#file-srctypesstock-movementts)
  - [src\types\user.ts](#file-srctypesuserts)
- [Utils (src/utils)](#utils-src-utils)
  - [src\utils\error-message.ts](#file-srcutilserror-messagets)
  - [src\utils\performance.ts](#file-srcutilsperformancets)
  - [src\utils\print.ts](#file-srcutilsprintts)
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
- SHA: `6f4deb457d89`  
- Ukuran: 564 B
<details><summary><strong>Lihat Kode Lengkap</strong></summary>

```tsx
import type { PropsWithChildren } from "react";
import { QueryProvider } from "./QueryProvider";
import { AppToaster } from "@/components/feedback/AppToaster";
import { AppErrorBoundary } from "@/components/feedback/AppErrorBoundary";
import { NetworkStatusBanner } from "@/components/feedback/NetworkStatusBanner";

export function AppProviders({ children }: PropsWithChildren) {
  return (
    <AppErrorBoundary>
      <QueryProvider>
        <NetworkStatusBanner />
        {children}
        <AppToaster />
      </QueryProvider>
    </AppErrorBoundary>
  );
}
```
</details>

<a id="file-srcappprovidersqueryprovidertsx"></a>
### src\app\providers\QueryProvider.tsx
- SHA: `ec21aca5629b`  
- Ukuran: 970 B
<details><summary><strong>Lihat Kode Lengkap</strong></summary>

```tsx
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import type { PropsWithChildren } from "react";
import { getAppErrorMessage } from "@/utils/error-message";

const shouldRetryRequest = (failureCount: number, error: unknown) => {
  const message = getAppErrorMessage(error).toLowerCase();

  if (failureCount >= 2) {
    return false;
  }

  if (
    message.includes("unauthorized") ||
    message.includes("forbidden") ||
    message.includes("validasi") ||
    message.includes("not found")
  ) {
    return false;
  }

  return true;
};

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: shouldRetryRequest,
      refetchOnWindowFocus: false,
      staleTime: 30_000,
      gcTime: 5 * 60_000,
    },
    mutations: {
      retry: false,
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
- SHA: `b1a357b8ecf1`  
- Ukuran: 7 KB
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
import StockMovementsPage from "@/modules/admin/pages/StockMovementsPage";
import CustomersPage from "@/modules/admin/pages/CustomersPage";
import VouchersPage from "@/modules/admin/pages/VouchersPage";
import PromotionsPage from "@/modules/admin/pages/PromotionsPage";
import ExpenseCategoriesPage from "@/modules/admin/pages/ExpenseCategoriesPage";
import ExpensesPage from "@/modules/admin/pages/ExpensesPage";
import CashMovementsPage from "@/modules/admin/pages/CashMovementsPage";
import NotificationsPage from "@/modules/admin/pages/NotificationsPage";
import ActivityLogsPage from "@/modules/admin/pages/ActivityLogsPage";
import CriticalAlertsPage from "@/modules/admin/pages/CriticalAlertsPage";
import AdminDashboardPage from "@/modules/dashboard/pages/AdminDashboardPage";
import OwnerDashboardPage from "@/modules/dashboard/pages/OwnerDashboardPage";
import ReportsPage from "@/modules/reporting/pages/ReportsPage";
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
          { index: true, element: <AdminDashboardPage /> },
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
          { path: "stock-movements", element: <StockMovementsPage /> },
          { path: "customers", element: <CustomersPage /> },
          { path: "vouchers", element: <VouchersPage /> },
          { path: "promotions", element: <PromotionsPage /> },
          { path: "expense-categories", element: <ExpenseCategoriesPage /> },
          { path: "expenses", element: <ExpensesPage /> },
          { path: "cash-movements", element: <CashMovementsPage /> },
          { path: "notifications", element: <NotificationsPage /> },
          { path: "critical-alerts", element: <CriticalAlertsPage /> },
          { path: "activity-logs", element: <ActivityLogsPage /> },
          { path: "reports", element: <ReportsPage /> },
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
          { index: true, element: <OwnerDashboardPage /> },
          { path: "overview", element: <OwnerDashboardPage /> },
          { path: "reports", element: <ReportsPage /> },
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
- SHA: `d618484bb117`  
- Ukuran: 296 B
<details><summary><strong>Lihat Kode Lengkap</strong></summary>

```tsx
import { AppShell } from "@/components/navigation/AppShell";
import { adminNavigation } from "@/components/navigation/navigation.config";

export function AdminLayout() {
  return (
    <AppShell
      appTitle="Admin Panel"
      navItems={adminNavigation}
      showOutletSwitcher
    />
  );
}
```
</details>

<a id="file-srclayoutsauthlayouttsx"></a>
### src\layouts\AuthLayout.tsx
- SHA: `ba844ad01f30`  
- Ukuran: 727 B
<details><summary><strong>Lihat Kode Lengkap</strong></summary>

```tsx
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
```
</details>

<a id="file-srclayoutskitchenlayouttsx"></a>
### src\layouts\KitchenLayout.tsx
- SHA: `a13883196cf1`  
- Ukuran: 324 B
<details><summary><strong>Lihat Kode Lengkap</strong></summary>

```tsx
import { AppShell } from "@/components/navigation/AppShell";
import { kitchenNavigation } from "@/components/navigation/navigation.config";

export function KitchenLayout() {
  return (
    <AppShell
      appTitle="Kitchen Screen"
      navItems={kitchenNavigation}
      dark
      showOutletSwitcher={false}
    />
  );
}
```
</details>

<a id="file-srclayoutsownerlayouttsx"></a>
### src\layouts\OwnerLayout.tsx
- SHA: `d3cf8b845dc2`  
- Ukuran: 300 B
<details><summary><strong>Lihat Kode Lengkap</strong></summary>

```tsx
import { AppShell } from "@/components/navigation/AppShell";
import { ownerNavigation } from "@/components/navigation/navigation.config";

export function OwnerLayout() {
  return (
    <AppShell
      appTitle="Owner Dashboard"
      navItems={ownerNavigation}
      showOutletSwitcher
    />
  );
}
```
</details>

<a id="file-srclayoutsposlayouttsx"></a>
### src\layouts\PosLayout.tsx
- SHA: `97c35d24cefd`  
- Ukuran: 286 B
<details><summary><strong>Lihat Kode Lengkap</strong></summary>

```tsx
import { AppShell } from "@/components/navigation/AppShell";
import { posNavigation } from "@/components/navigation/navigation.config";

export function PosLayout() {
  return (
    <AppShell
      appTitle="POS App"
      navItems={posNavigation}
      showOutletSwitcher
    />
  );
}
```
</details>


## Modules (src/modules)

<a id="file-srcmodulesadmincomponentsinventorybomitemseditortsx"></a>
### src\modules\admin\components\inventory\BomItemsEditor.tsx
- SHA: `16cf9783391c`  
- Ukuran: 6 KB
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
        <Card
          key={index}
          title={`BOM Item #${index + 1}`}
          description="Atur bahan baku, satuan, kuantitas, dan estimasi waste."
        >
          <div className="grid gap-4 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <label className="mb-2 block text-sm font-medium text-slate-700">
                Bahan Baku
              </label>
              <select
                className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2.5 text-sm text-slate-800 shadow-sm outline-none transition focus:border-[var(--brand-brick)] focus:ring-2 focus:ring-orange-100"
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

            <div className="lg:col-span-3">
              <label className="mb-2 block text-sm font-medium text-slate-700">
                Satuan
              </label>
              <select
                className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2.5 text-sm text-slate-800 shadow-sm outline-none transition focus:border-[var(--brand-brick)] focus:ring-2 focus:ring-orange-100"
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

            <div className="lg:col-span-2">
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
            </div>

            <div className="lg:col-span-2">
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
            </div>

            <div className="flex items-end lg:col-span-1">
              <Button
                variant="danger"
                className="w-full"
                onClick={() => updateItems((prev) => prev.filter((_, idx) => idx !== index))}
              >
                Hapus
              </Button>
            </div>
          </div>
        </Card>
      ))}

      <div className="rounded-2xl border border-dashed border-orange-200 bg-orange-50/40 p-4">
        <Button
          variant="outline"
          onClick={() => onChange([...(value ?? []), createEmptyBomItem()])}
        >
          Tambah BOM Item
        </Button>
      </div>
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
- SHA: `b9448e782c4c`  
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
      <div className="rounded-2xl border border-orange-100 bg-orange-50/50 px-4 py-3">
        <p className="text-sm font-semibold text-[var(--brand-brick)]">
          Bundle Items
        </p>
        <p className="mt-1 text-xs leading-5 text-slate-600">
          Atur produk yang menjadi bagian dari paket dan jumlah item di dalam bundle.
        </p>
      </div>

      {value.map((item, index) => (
        <Card key={index} title={`Bundle Item #${index + 1}`}>
          <div className="grid gap-4 md:grid-cols-[minmax(0,1fr)_160px]">
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">
                Bundled Product
              </label>
              <select
                className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2.5 text-sm text-slate-800 shadow-sm outline-none transition focus:border-[var(--brand-brick)] focus:ring-2 focus:ring-orange-100"
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

            <div className="flex justify-end md:col-span-2">
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

      <div className="flex justify-end">
        <Button
          variant="outline"
          onClick={() => onChange([...(value ?? []), createEmptyBundleItem()])}
        >
          Tambah Bundle Item
        </Button>
      </div>
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
- SHA: `c2b38e473d47`  
- Ukuran: 9 KB
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
  getBadge: (product: Product) => {
    label: string;
    variant: "success" | "warning" | "info" | "danger";
  };
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
      <div className="space-y-5">
        <PageHeader title={title} description={description} />

        <Card>
          <div className="grid gap-4 lg:grid-cols-[1fr_auto] lg:items-end">
            <Input
              label="Pencarian Produk"
              placeholder={searchPlaceholder}
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />

            <div className="rounded-xl border border-[var(--color-border)] bg-[var(--brand-brick-soft)] px-4 py-3 text-sm">
              <div className="text-xs font-medium uppercase tracking-wide text-[var(--brand-brick)]">
                Total Produk
              </div>
              <div className="mt-1 text-lg font-semibold text-[var(--color-text)]">
                {products.length}
              </div>
            </div>
          </div>
        </Card>

        {productsQuery.isLoading ? (
          <Card>
            <div className="grid gap-4 md:grid-cols-2">
              {Array.from({ length: 4 }).map((_, index) => (
                <div
                  key={index}
                  className="rounded-2xl border border-slate-200 bg-slate-50 p-5"
                >
                  <div className="h-4 w-2/3 rounded-full bg-slate-200" />
                  <div className="mt-3 h-3 w-1/2 rounded-full bg-slate-200" />
                  <div className="mt-5 space-y-2">
                    <div className="h-3 rounded-full bg-slate-200" />
                    <div className="h-3 w-5/6 rounded-full bg-slate-200" />
                  </div>
                  <div className="mt-5 h-9 w-24 rounded-xl bg-slate-200" />
                </div>
              ))}
            </div>
          </Card>
        ) : productsQuery.isError ? (
          <PageErrorState onRetry={() => void productsQuery.refetch()} />
        ) : !products.length ? (
          <PageEmptyState
            title={emptyTitle}
            description="Data produk belum tersedia atau tidak cocok dengan pencarian."
          />
        ) : (
          <div className="grid gap-4 xl:grid-cols-2">
            {products.map((product) => {
              const badge = getBadge(product);

              return (
                <Card
                  key={product.id}
                  title={product.name}
                  description={product.category?.name ?? "-"}
                  actions={<Badge variant={badge.variant}>{badge.label}</Badge>}
                >
                  <div className="flex h-full flex-col gap-5">
                    <div className="rounded-2xl border border-slate-100 bg-slate-50/80 p-4">
                      <div className="mb-3 flex items-center justify-between gap-3">
                        <div>
                          <div className="text-xs font-medium uppercase tracking-wide text-slate-500">
                            Ringkasan Konfigurasi
                          </div>
                          <div className="mt-1 text-sm font-semibold text-slate-900">
                            {product.name}
                          </div>
                        </div>
                      </div>

                      <div className="space-y-2 text-sm leading-6 text-slate-600">
                        {renderSummary(product)}
                      </div>
                    </div>

                    <div className="mt-auto flex flex-col gap-2 border-t border-slate-100 pt-4 sm:flex-row sm:items-center sm:justify-between">
                      <p className="text-xs leading-5 text-slate-500">
                        Kelola konfigurasi produk tanpa mengubah data utama produk.
                      </p>

                      <Button onClick={() => openEditor(product)}>Kelola</Button>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        )}

        <Modal
          open={open}
          title={`${title}${editingProduct ? ` — ${editingProduct.name}` : ""}`}
          description="Atur konfigurasi produk dengan teliti sebelum menyimpan perubahan."
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
          <div className="max-h-[72vh] overflow-y-auto pr-1">
            {editingProduct ? (
              <div className="mb-5 rounded-2xl border border-orange-100 bg-[var(--brand-brick-soft)] p-4">
                <div className="text-xs font-semibold uppercase tracking-wide text-[var(--brand-brick)]">
                  Produk Dipilih
                </div>
                <div className="mt-1 text-sm font-semibold text-slate-900">
                  {editingProduct.name}
                </div>
                <div className="mt-1 text-xs text-slate-600">
                  {editingProduct.category?.name ?? "Tanpa kategori"}
                </div>
              </div>
            ) : null}

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
- SHA: `490f1a1034da`  
- Ukuran: 12 KB
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
    <div className="space-y-5">
      {value.map((group, groupIndex) => (
        <Card key={groupIndex}>
          <div className="mb-5 flex flex-col gap-3 border-b border-slate-100 pb-4 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <div className="inline-flex items-center rounded-full border border-orange-200 bg-orange-50 px-2.5 py-1 text-xs font-semibold text-orange-700">
                Modifier Group #{groupIndex + 1}
              </div>
              <h3 className="mt-2 text-base font-semibold text-slate-950">
                {group.name.trim() || "Group belum diberi nama"}
              </h3>
              <p className="mt-1 text-sm text-slate-500">
                Atur pilihan modifier, batas pilihan, status wajib, dan urutan tampil.
              </p>
            </div>

            <Button
              variant="danger"
              onClick={() => updateGroups((prev) => prev.filter((_, idx) => idx !== groupIndex))}
            >
              Hapus Group
            </Button>
          </div>

          <div className="grid gap-4 md:grid-cols-4">
            <div className="md:col-span-2">
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
            </div>

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

            <div className="flex items-end md:col-span-3">
              <div className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3">
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
          </div>

          <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50/70 p-4">
            <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h4 className="text-sm font-semibold text-slate-950">
                  Modifier Options
                </h4>
                <p className="mt-1 text-xs text-slate-500">
                  Tambahkan pilihan modifier beserta harga tambahan dan urutannya.
                </p>
              </div>

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

            <div className="space-y-3">
              {group.options.map((option, optionIndex) => (
                <div
                  key={optionIndex}
                  className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm"
                >
                  <div className="mb-4 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <div className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                        Option #{optionIndex + 1}
                      </div>
                      <div className="mt-1 text-sm font-semibold text-slate-900">
                        {option.name.trim() || "Option belum diberi nama"}
                      </div>
                    </div>

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

                  <div className="grid gap-4 md:grid-cols-3">
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

                    <div className="md:col-span-3">
                      <div className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3">
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
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Card>
      ))}

      <div className="rounded-2xl border border-dashed border-orange-200 bg-orange-50/50 p-4">
        <Button
          variant="outline"
          onClick={() => onChange([...(value ?? []), createEmptyModifierGroup()])}
        >
          Tambah Modifier Group
        </Button>
      </div>
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
- SHA: `4c6bc1116a00`  
- Ukuran: 13 KB
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
  const updateGroups = (
    updater: (prev: ProductVariantGroupPayload[]) => ProductVariantGroupPayload[]
  ) => {
    onChange(updater(value));
  };

  return (
    <div className="space-y-5">
      {value.map((group, groupIndex) => (
        <Card key={groupIndex} title={`Variant Group #${groupIndex + 1}`}>
          <div className="space-y-5">
            <div className="rounded-2xl border border-[var(--color-border)] bg-white p-4 shadow-sm">
              <div className="mb-4 flex flex-col gap-2 border-b border-slate-100 pb-4 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h3 className="text-sm font-semibold text-[var(--color-text)]">
                    Pengaturan Group Variant
                  </h3>
                  <p className="mt-1 text-xs leading-5 text-[var(--color-muted)]">
                    Atur nama group, tipe pilihan, urutan tampil, dan status wajib pilih.
                  </p>
                </div>

                <Button
                  variant="danger"
                  onClick={() =>
                    updateGroups((prev) => prev.filter((_, idx) => idx !== groupIndex))
                  }
                >
                  Hapus Group
                </Button>
              </div>

              <div className="grid gap-4 md:grid-cols-4">
                <div className="md:col-span-2">
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
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">
                    Selection Type
                  </label>
                  <select
                    className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm text-slate-800 shadow-sm outline-none transition focus:border-[var(--brand-brick)] focus:ring-2 focus:ring-orange-100"
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

                <div className="md:col-span-4">
                  <div className="rounded-xl border border-orange-100 bg-[var(--brand-brick-soft)] px-4 py-3">
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
              </div>
            </div>

            <div className="rounded-2xl border border-[var(--color-border)] bg-slate-50/70 p-4">
              <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h3 className="text-sm font-semibold text-[var(--color-text)]">
                    Option Variant
                  </h3>
                  <p className="mt-1 text-xs leading-5 text-[var(--color-muted)]">
                    Tambahkan pilihan variant beserta penyesuaian harga dan urutan tampil.
                  </p>
                </div>

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

              <div className="space-y-3">
                {group.options.map((option, optionIndex) => (
                  <div
                    key={optionIndex}
                    className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm"
                  >
                    <div className="mb-4 flex flex-col gap-2 border-b border-slate-100 pb-3 sm:flex-row sm:items-center sm:justify-between">
                      <div>
                        <div className="text-sm font-semibold text-slate-900">
                          Option #{optionIndex + 1}
                        </div>
                        <div className="mt-1 text-xs text-slate-500">
                          {option.is_active ? "Aktif" : "Nonaktif"}
                        </div>
                      </div>

                      <Button
                        variant="danger"
                        onClick={() =>
                          updateGroups((prev) => {
                            const next = [...prev];
                            next[groupIndex] = {
                              ...next[groupIndex],
                              options: next[groupIndex].options.filter(
                                (_, idx) => idx !== optionIndex
                              ),
                            };
                            return next;
                          })
                        }
                      >
                        Hapus Option
                      </Button>
                    </div>

                    <div className="grid gap-4 md:grid-cols-3">
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

                      <div className="md:col-span-3">
                        <div className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3">
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
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Card>
      ))}

      <div className="rounded-2xl border border-dashed border-orange-200 bg-orange-50/50 p-4">
        <Button
          variant="outline"
          onClick={() => onChange([...(value ?? []), createEmptyVariantGroup()])}
        >
          Tambah Variant Group
        </Button>
      </div>
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

export function sanitizeVariantGroups(
  value: ProductVariantGroupPayload[]
): ProductVariantGroupPayload[] {
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

<a id="file-srcmodulesadmincomponentsstockstockflowitemseditortsx"></a>
### src\modules\admin\components\stock\StockFlowItemsEditor.tsx
- SHA: `0cd3f298d478`  
- Ukuran: 10 KB
<details><summary><strong>Lihat Kode Lengkap</strong></summary>

```tsx
import { Button, Card, Input } from "@/components/ui";
import type {
  StockAdjustmentItemPayload,
  StockOpnameItemPayload,
  StockTransferItemPayload,
} from "@/modules/admin/services/stock-movement.service";
import type { OutletMaterialStock, RawMaterial, Unit } from "@/types/inventory";

type ItemMode = "adjustment" | "transfer" | "opname";

type StockItemPayload =
  | StockAdjustmentItemPayload
  | StockTransferItemPayload
  | StockOpnameItemPayload;

interface StockFlowItemsEditorProps<T extends StockItemPayload> {
  mode: ItemMode;
  value: T[];
  onChange: (next: T[]) => void;
  rawMaterials: RawMaterial[];
  units: Unit[];
  outletStocks?: OutletMaterialStock[];
}

const createEmptyItem = <T extends StockItemPayload>(mode: ItemMode): T => {
  if (mode === "adjustment") {
    return {
      raw_material_id: 0,
      qty_difference: 0,
      unit_id: 0,
      notes: "",
    } as T;
  }

  if (mode === "opname") {
    return {
      raw_material_id: 0,
      system_qty: 0,
      actual_qty: 0,
      unit_id: 0,
      notes: "",
    } as T;
  }

  return {
    raw_material_id: 0,
    qty_sent: 1,
    qty_received: null,
    unit_id: 0,
    notes: "",
  } as T;
};

export function StockFlowItemsEditor<T extends StockItemPayload>({
  mode,
  value,
  onChange,
  rawMaterials,
  units,
  outletStocks = [],
}: StockFlowItemsEditorProps<T>) {
  const updateItems = (updater: (prev: T[]) => T[]) => {
    onChange(updater(value));
  };

  const getRawMaterial = (id: number) => rawMaterials.find((item) => Number(item.id) === Number(id));

  const getSystemQty = (rawMaterialId: number) => {
    const stock = outletStocks.find((item) => Number(item.raw_material_id) === Number(rawMaterialId));
    return Number(stock?.qty_on_hand ?? 0);
  };

  const getTitle = () => {
    if (mode === "adjustment") {
      return "Item Adjustment";
    }

    if (mode === "opname") {
      return "Item Opname";
    }

    return "Item Transfer";
  };

  return (
    <div className="space-y-4">
      {value.map((item, index) => {
        const rawMaterial = getRawMaterial(item.raw_material_id);
        const unitId = item.unit_id || rawMaterial?.unit_id || 0;

        return (
          <Card key={index} title={`${getTitle()} #${index + 1}`}>
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
                      const selected = getRawMaterial(rawMaterialId);
                      const systemQty = getSystemQty(rawMaterialId);

                      next[index] = {
                        ...next[index],
                        raw_material_id: rawMaterialId,
                        unit_id: selected?.unit_id ?? next[index].unit_id,
                        ...(mode === "opname" ? { system_qty: systemQty } : {}),
                      };

                      return next;
                    })
                  }
                >
                  <option value="">Pilih bahan baku</option>
                  {rawMaterials.map((rawMaterialOption) => (
                    <option key={rawMaterialOption.id} value={rawMaterialOption.id}>
                      {rawMaterialOption.name}
                    </option>
                  ))}
                </select>
              </div>

              {mode === "adjustment" ? (
                <Input
                  label="Selisih Qty"
                  type="number"
                  value={String((item as StockAdjustmentItemPayload).qty_difference ?? 0)}
                  onChange={(event) =>
                    updateItems((prev) => {
                      const next = [...prev];

                      next[index] = {
                        ...next[index],
                        qty_difference: Number(event.target.value || 0),
                      } as T;

                      return next;
                    })
                  }
                />
              ) : null}

              {mode === "transfer" ? (
                <Input
                  label="Qty Kirim"
                  type="number"
                  value={String((item as StockTransferItemPayload).qty_sent ?? 0)}
                  onChange={(event) =>
                    updateItems((prev) => {
                      const next = [...prev];

                      next[index] = {
                        ...next[index],
                        qty_sent: Number(event.target.value || 0),
                      } as T;

                      return next;
                    })
                  }
                />
              ) : null}

              {mode === "opname" ? (
                <>
                  <Input
                    label="Qty Sistem"
                    type="number"
                    value={String((item as StockOpnameItemPayload).system_qty ?? 0)}
                    onChange={(event) =>
                      updateItems((prev) => {
                        const next = [...prev];

                        next[index] = {
                          ...next[index],
                          system_qty: Number(event.target.value || 0),
                        } as T;

                        return next;
                      })
                    }
                  />

                  <Input
                    label="Qty Fisik"
                    type="number"
                    value={String((item as StockOpnameItemPayload).actual_qty ?? 0)}
                    onChange={(event) =>
                      updateItems((prev) => {
                        const next = [...prev];

                        next[index] = {
                          ...next[index],
                          actual_qty: Number(event.target.value || 0),
                        } as T;

                        return next;
                      })
                    }
                  />
                </>
              ) : null}

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">Satuan</label>
                <select
                  className="w-full rounded-xl border border-slate-300 px-3 py-2 text-sm"
                  value={unitId || ""}
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

              {mode === "opname" ? (
                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">Selisih</label>
                  <div className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm font-semibold text-slate-900">
                    {(
                      Number((item as StockOpnameItemPayload).actual_qty ?? 0) -
                      Number((item as StockOpnameItemPayload).system_qty ?? 0)
                    ).toLocaleString("id-ID")}
                  </div>
                </div>
              ) : null}

              <div className={mode === "opname" ? "md:col-span-4" : "md:col-span-3"}>
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

              <div className="flex items-end">
                <Button
                  variant="danger"
                  onClick={() => updateItems((prev) => prev.filter((_, itemIndex) => itemIndex !== index))}
                >
                  Hapus
                </Button>
              </div>
            </div>
          </Card>
        );
      })}

      <Button variant="outline" onClick={() => onChange([...(value ?? []), createEmptyItem<T>(mode)])}>
        Tambah Item
      </Button>
    </div>
  );
}

export function createInitialStockItems<T extends StockItemPayload>(mode: ItemMode): T[] {
  return [createEmptyItem<T>(mode)];
}

export function sanitizeAdjustmentItems(
  value: StockAdjustmentItemPayload[]
): StockAdjustmentItemPayload[] {
  return (value ?? []).filter(
    (item) =>
      Number(item.raw_material_id) > 0 &&
      Number(item.unit_id) > 0 &&
      Number(item.qty_difference) !== 0
  );
}

export function sanitizeTransferItems(
  value: StockTransferItemPayload[]
): StockTransferItemPayload[] {
  return (value ?? []).filter(
    (item) =>
      Number(item.raw_material_id) > 0 &&
      Number(item.unit_id) > 0 &&
      Number(item.qty_sent) > 0
  );
}

export function sanitizeOpnameItems(value: StockOpnameItemPayload[]): StockOpnameItemPayload[] {
  return (value ?? []).filter(
    (item) =>
      Number(item.raw_material_id) > 0 &&
      Number(item.unit_id) > 0 &&
      Number(item.actual_qty) >= 0
  );
}
```
</details>

<a id="file-srcmodulesadminpagesactivitylogspagetsx"></a>
### src\modules\admin\pages\ActivityLogsPage.tsx
- SHA: `d4d334175004`  
- Ukuran: 11 KB
<details><summary><strong>Lihat Kode Lengkap</strong></summary>

```tsx
import { useMemo, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { PageHeader } from "@/components/navigation/PageHeader";
import { PermissionWrapper } from "@/components/navigation/PermissionWrapper";
import { PageEmptyState } from "@/components/feedback/PageEmptyState";
import { PageErrorState } from "@/components/feedback/PageErrorState";
import { Badge, Button, Card, Input, Modal, Pagination } from "@/components/ui";
import { masterDataService } from "@/modules/admin/services/master-data.service";
import { notificationService } from "@/modules/admin/services/notification.service";
import type { ActivityLog, ActivityLogQuery } from "@/types/notification";

const formatDateTime = (value: string | null | undefined) => {
  if (!value) {
    return "-";
  }

  return new Intl.DateTimeFormat("id-ID", {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(new Date(value));
};

const shortReference = (value: string | null | undefined) => {
  if (!value) {
    return "-";
  }

  const parts = value.split("\\");
  return parts[parts.length - 1] ?? value;
};

export default function ActivityLogsPage() {
  const [filters, setFilters] = useState<ActivityLogQuery>({
    page: 1,
    per_page: 10,
    search: "",
    outlet_id: "",
    action: "",
    module: "",
    created_from: "",
    created_until: "",
  });
  const [selected, setSelected] = useState<ActivityLog | null>(null);

  const queryParams = useMemo(
    () => ({
      ...filters,
      search: filters.search || undefined,
      outlet_id: filters.outlet_id || undefined,
      action: filters.action || undefined,
      module: filters.module || undefined,
      created_from: filters.created_from || undefined,
      created_until: filters.created_until || undefined,
    }),
    [filters]
  );

  const outletsQuery = useQuery({
    queryKey: ["activity-log-outlets"],
    queryFn: () => masterDataService.getOutlets({ per_page: 100, is_active: true }),
  });

  const logsQuery = useQuery({
    queryKey: ["activity-logs", queryParams],
    queryFn: () => notificationService.getActivityLogs(queryParams),
  });

  const detailQuery = useQuery({
    queryKey: ["activity-log-detail", selected?.id],
    queryFn: () => notificationService.getActivityLog(Number(selected?.id)),
    enabled: Boolean(selected?.id),
  });

  const rows = logsQuery.data?.items ?? [];
  const outlets = outletsQuery.data?.items ?? [];
  const detail = detailQuery.data?.data ?? selected;

  return (
    <PermissionWrapper permission="activity_logs.view">
      <div className="space-y-4">
        <PageHeader
          title="Activity Logs"
          description="Histori aktivitas user, request API, modul, outlet, dan metadata teknis sistem."
        />

        <Card>
          <div className="grid gap-4 lg:grid-cols-6">
            <Input
              label="Search"
              placeholder="Cari action, module, user, outlet..."
              value={filters.search ?? ""}
              onChange={(event) =>
                setFilters((prev) => ({
                  ...prev,
                  page: 1,
                  search: event.target.value,
                }))
              }
            />

            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">Outlet</label>
              <select
                className="w-full rounded-xl border border-slate-300 px-3 py-2 text-sm"
                value={filters.outlet_id ?? ""}
                onChange={(event) =>
                  setFilters((prev) => ({
                    ...prev,
                    page: 1,
                    outlet_id: event.target.value ? Number(event.target.value) : "",
                  }))
                }
              >
                <option value="">Semua outlet</option>
                {outlets.map((outlet) => (
                  <option key={outlet.id} value={outlet.id}>
                    {outlet.name}
                  </option>
                ))}
              </select>
            </div>

            <Input
              label="Action"
              placeholder="create, update, login..."
              value={filters.action ?? ""}
              onChange={(event) =>
                setFilters((prev) => ({
                  ...prev,
                  page: 1,
                  action: event.target.value,
                }))
              }
            />

            <Input
              label="Module"
              placeholder="auth, reports, v1..."
              value={filters.module ?? ""}
              onChange={(event) =>
                setFilters((prev) => ({
                  ...prev,
                  page: 1,
                  module: event.target.value,
                }))
              }
            />

            <Input
              label="Dari"
              type="date"
              value={filters.created_from ?? ""}
              onChange={(event) =>
                setFilters((prev) => ({
                  ...prev,
                  page: 1,
                  created_from: event.target.value,
                }))
              }
            />

            <Input
              label="Sampai"
              type="date"
              value={filters.created_until ?? ""}
              onChange={(event) =>
                setFilters((prev) => ({
                  ...prev,
                  page: 1,
                  created_until: event.target.value,
                }))
              }
            />

            <div className="flex items-end">
              <Button loading={logsQuery.isFetching} onClick={() => void logsQuery.refetch()}>
                Terapkan Filter
              </Button>
            </div>
          </div>
        </Card>

        {logsQuery.isLoading ? (
          <Card>Memuat activity log...</Card>
        ) : logsQuery.isError ? (
          <PageErrorState onRetry={() => void logsQuery.refetch()} />
        ) : !rows.length ? (
          <PageEmptyState title="Belum ada activity log" />
        ) : (
          <Card>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-slate-200 text-sm">
                <thead>
                  <tr className="text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
                    <th className="px-3 py-3">Waktu</th>
                    <th className="px-3 py-3">User</th>
                    <th className="px-3 py-3">Outlet</th>
                    <th className="px-3 py-3">Action</th>
                    <th className="px-3 py-3">Module</th>
                    <th className="px-3 py-3">Reference</th>
                    <th className="px-3 py-3">Description</th>
                    <th className="px-3 py-3 text-right">Aksi</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {rows.map((row) => (
                    <tr key={row.id} className="align-top">
                      <td className="whitespace-nowrap px-3 py-3 text-slate-700">
                        {formatDateTime(row.created_at)}
                      </td>
                      <td className="px-3 py-3 text-slate-700">{row.user?.name ?? "-"}</td>
                      <td className="px-3 py-3 text-slate-700">{row.outlet?.name ?? "-"}</td>
                      <td className="px-3 py-3">
                        <Badge variant="info">{row.action}</Badge>
                      </td>
                      <td className="px-3 py-3 text-slate-700">{row.module}</td>
                      <td className="px-3 py-3 text-slate-700">
                        {shortReference(row.reference_type)} #{row.reference_id ?? "-"}
                      </td>
                      <td className="px-3 py-3 text-slate-700">{row.description ?? "-"}</td>
                      <td className="px-3 py-3">
                        <div className="flex justify-end">
                          <Button variant="outline" onClick={() => setSelected(row)}>
                            Detail
                          </Button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        )}

        <Pagination
          meta={logsQuery.data?.meta}
          onPageChange={(nextPage) => setFilters((prev) => ({ ...prev, page: nextPage }))}
        />

        <Modal
          open={Boolean(selected)}
          title="Detail Activity Log"
          onClose={() => setSelected(null)}
          footer={
            <Button variant="outline" onClick={() => setSelected(null)}>
              Tutup
            </Button>
          }
        >
          {detailQuery.isLoading ? (
            <div className="text-sm text-slate-500">Memuat detail...</div>
          ) : detail ? (
            <div className="space-y-4 text-sm">
              <div className="grid gap-3 md:grid-cols-2">
                <div className="rounded-xl bg-slate-50 p-3">
                  <div className="text-xs text-slate-500">User</div>
                  <div className="font-medium text-slate-900">{detail.user?.name ?? "-"}</div>
                </div>
                <div className="rounded-xl bg-slate-50 p-3">
                  <div className="text-xs text-slate-500">Outlet</div>
                  <div className="font-medium text-slate-900">{detail.outlet?.name ?? "-"}</div>
                </div>
                <div className="rounded-xl bg-slate-50 p-3">
                  <div className="text-xs text-slate-500">Action</div>
                  <div className="font-medium text-slate-900">{detail.action}</div>
                </div>
                <div className="rounded-xl bg-slate-50 p-3">
                  <div className="text-xs text-slate-500">Module</div>
                  <div className="font-medium text-slate-900">{detail.module}</div>
                </div>
                <div className="rounded-xl bg-slate-50 p-3">
                  <div className="text-xs text-slate-500">IP Address</div>
                  <div className="font-medium text-slate-900">{detail.ip_address ?? "-"}</div>
                </div>
                <div className="rounded-xl bg-slate-50 p-3">
                  <div className="text-xs text-slate-500">Reference</div>
                  <div className="font-medium text-slate-900">
                    {shortReference(detail.reference_type)} #{detail.reference_id ?? "-"}
                  </div>
                </div>
              </div>

              <div>
                <div className="mb-2 font-semibold text-slate-900">Description</div>
                <div className="rounded-xl border border-slate-200 p-3 text-slate-700">
                  {detail.description ?? "-"}
                </div>
              </div>

              <div>
                <div className="mb-2 font-semibold text-slate-900">User Agent</div>
                <div className="rounded-xl border border-slate-200 p-3 text-xs text-slate-700">
                  {detail.user_agent ?? "-"}
                </div>
              </div>

              <div>
                <div className="mb-2 font-semibold text-slate-900">Metadata</div>
                <pre className="max-h-72 overflow-auto rounded-xl bg-slate-950 p-3 text-xs text-slate-50">
                  {JSON.stringify(detail.metadata ?? {}, null, 2)}
                </pre>
              </div>
            </div>
          ) : null}
        </Modal>
      </div>
    </PermissionWrapper>
  );
}
```
</details>

<a id="file-srcmodulesadminpagescashmovementspagetsx"></a>
### src\modules\admin\pages\CashMovementsPage.tsx
- SHA: `09923f5d1dde`  
- Ukuran: 10 KB
<details><summary><strong>Lihat Kode Lengkap</strong></summary>

```tsx
import { useMemo, useState } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { PageHeader } from "@/components/navigation/PageHeader";
import { PermissionWrapper } from "@/components/navigation/PermissionWrapper";
import { PageErrorState } from "@/components/feedback/PageErrorState";
import { PageEmptyState } from "@/components/feedback/PageEmptyState";
import { Badge, Button, Card, Input, Modal, Pagination } from "@/components/ui";
import { parseApiError } from "@/services/api/error-parser";
import { useToast } from "@/hooks/useToast";
import { expenseService } from "@/modules/admin/services/expense.service";
import type { CashMovementPayload, CashMovementType } from "@/types/expense";

const formatCurrency = (value: number | string | null | undefined) =>
  `Rp ${Number(value ?? 0).toLocaleString("id-ID")}`;

const initialForm: CashMovementPayload = {
  cashier_shift_id: 0,
  movement_type: "cash_in",
  amount: 0,
  reason: "",
  notes: "",
};

const movementBadge = (type: CashMovementType) => {
  if (type === "cash_in" || type === "opening") {
    return "success";
  }

  if (type === "cash_out") {
    return "danger";
  }

  return "warning";
};

export default function CashMovementsPage() {
  const toast = useToast();
  const queryClient = useQueryClient();

  const [page, setPage] = useState(1);
  const [movementType, setMovementType] = useState<CashMovementType | "">("");
  const [cashierShiftId, setCashierShiftId] = useState<number | "">("");
  const [openForm, setOpenForm] = useState(false);
  const [form, setForm] = useState<CashMovementPayload>(initialForm);

  const queryParams = useMemo(
    () => ({
      page,
      per_page: 10,
      movement_type: movementType,
      cashier_shift_id: cashierShiftId,
    }),
    [page, movementType, cashierShiftId]
  );

  const cashMovementsQuery = useQuery({
    queryKey: ["cash-movements", queryParams],
    queryFn: () => expenseService.getCashMovements(queryParams),
  });

  const shiftsQuery = useQuery({
    queryKey: ["cashier-shifts", "cash-movement-options"],
    queryFn: () => expenseService.getCashierShifts({ per_page: 100 }),
  });

  const saveMutation = useMutation({
    mutationFn: () => expenseService.createCashMovement(form),
    onSuccess: (response) => {
      toast.success(response.message);
      setOpenForm(false);
      setForm(initialForm);
      void queryClient.invalidateQueries({ queryKey: ["cash-movements"] });
      void queryClient.invalidateQueries({ queryKey: ["cashier-shifts"] });
    },
    onError: (error) => {
      toast.error("Gagal menyimpan cash movement", parseApiError(error));
    },
  });

  const openCreateForm = () => {
    setForm(initialForm);
    setOpenForm(true);
  };

  return (
    <PermissionWrapper permission="cash_movements.view">
      <div className="space-y-4">
        <PageHeader
          title="Cash Movements"
          description="Pantau dan catat pergerakan kas pada shift kasir."
        />

        <Card>
          <div className="grid gap-4 md:grid-cols-3">
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">Shift</label>
              <select
                className="w-full rounded-xl border border-slate-300 px-3 py-2 text-sm"
                value={cashierShiftId}
                onChange={(event) => {
                  setCashierShiftId(event.target.value ? Number(event.target.value) : "");
                  setPage(1);
                }}
              >
                <option value="">Semua shift</option>
                {shiftsQuery.data?.items.map((shift) => (
                  <option key={shift.id} value={shift.id}>
                    {shift.shift_number} — {shift.outlet?.name ?? "-"}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">Tipe</label>
              <select
                className="w-full rounded-xl border border-slate-300 px-3 py-2 text-sm"
                value={movementType}
                onChange={(event) => {
                  setMovementType(event.target.value as CashMovementType | "");
                  setPage(1);
                }}
              >
                <option value="">Semua tipe</option>
                <option value="opening">opening</option>
                <option value="cash_in">cash_in</option>
                <option value="cash_out">cash_out</option>
                <option value="closing_adjustment">closing_adjustment</option>
              </select>
            </div>

            <div className="flex items-end justify-end">
              <PermissionWrapper permission="cash_movements.create">
                <Button onClick={openCreateForm}>Tambah Cash Movement</Button>
              </PermissionWrapper>
            </div>
          </div>
        </Card>

        {cashMovementsQuery.isLoading ? (
          <Card>Memuat cash movement...</Card>
        ) : cashMovementsQuery.isError ? (
          <PageErrorState onRetry={() => void cashMovementsQuery.refetch()} />
        ) : !cashMovementsQuery.data?.items.length ? (
          <PageEmptyState title="Belum ada cash movement" />
        ) : (
          <Card>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="border-b border-slate-200 text-slate-500">
                    <th className="px-3 py-3 font-medium">Shift</th>
                    <th className="px-3 py-3 font-medium">Outlet</th>
                    <th className="px-3 py-3 font-medium">Tipe</th>
                    <th className="px-3 py-3 font-medium">Nominal</th>
                    <th className="px-3 py-3 font-medium">Alasan</th>
                    <th className="px-3 py-3 font-medium">Dibuat Oleh</th>
                  </tr>
                </thead>
                <tbody>
                  {cashMovementsQuery.data.items.map((movement) => {
                    const shift = movement.cashier_shift ?? movement.cashierShift ?? null;

                    return (
                      <tr key={movement.id} className="border-b border-slate-100">
                        <td className="px-3 py-3 font-medium text-slate-900">
                          {shift?.shift_number ?? `#${movement.cashier_shift_id}`}
                        </td>
                        <td className="px-3 py-3 text-slate-600">{shift?.outlet?.name ?? "-"}</td>
                        <td className="px-3 py-3">
                          <Badge variant={movementBadge(movement.movement_type)}>
                            {movement.movement_type}
                          </Badge>
                        </td>
                        <td className="px-3 py-3 font-semibold text-slate-900">
                          {formatCurrency(movement.amount)}
                        </td>
                        <td className="px-3 py-3 text-slate-600">{movement.reason ?? "-"}</td>
                        <td className="px-3 py-3 text-slate-600">
                          {movement.creator?.name ?? "-"}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </Card>
        )}

        <Pagination meta={cashMovementsQuery.data?.meta ?? null} onPageChange={setPage} />

        <Modal
          open={openForm}
          title="Tambah Cash Movement"
          onClose={() => setOpenForm(false)}
          footer={
            <>
              <Button variant="outline" onClick={() => setOpenForm(false)}>
                Batal
              </Button>
              <Button loading={saveMutation.isPending} onClick={() => saveMutation.mutate()}>
                Simpan
              </Button>
            </>
          }
        >
          <div className="space-y-4">
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">Shift</label>
              <select
                className="w-full rounded-xl border border-slate-300 px-3 py-2 text-sm"
                value={form.cashier_shift_id || ""}
                onChange={(event) =>
                  setForm((prev) => ({
                    ...prev,
                    cashier_shift_id: Number(event.target.value || 0),
                  }))
                }
              >
                <option value="">Pilih shift</option>
                {shiftsQuery.data?.items.map((shift) => (
                  <option key={shift.id} value={shift.id}>
                    {shift.shift_number} — {shift.outlet?.name ?? "-"} — {shift.status}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">Tipe</label>
              <select
                className="w-full rounded-xl border border-slate-300 px-3 py-2 text-sm"
                value={form.movement_type}
                onChange={(event) =>
                  setForm((prev) => ({
                    ...prev,
                    movement_type: event.target.value as CashMovementType,
                  }))
                }
              >
                <option value="cash_in">cash_in</option>
                <option value="cash_out">cash_out</option>
                <option value="opening">opening</option>
                <option value="closing_adjustment">closing_adjustment</option>
              </select>
            </div>

            <Input
              label="Nominal"
              type="number"
              value={String(form.amount)}
              onChange={(event) =>
                setForm((prev) => ({
                  ...prev,
                  amount: Number(event.target.value || 0),
                }))
              }
            />

            <Input
              label="Alasan"
              value={form.reason ?? ""}
              onChange={(event) => setForm((prev) => ({ ...prev, reason: event.target.value }))}
            />

            <Input
              label="Catatan"
              value={form.notes ?? ""}
              onChange={(event) => setForm((prev) => ({ ...prev, notes: event.target.value }))}
            />
          </div>
        </Modal>
      </div>
    </PermissionWrapper>
  );
}
```
</details>

<a id="file-srcmodulesadminpagescriticalalertspagetsx"></a>
### src\modules\admin\pages\CriticalAlertsPage.tsx
- SHA: `19698caea20a`  
- Ukuran: 9 KB
<details><summary><strong>Lihat Kode Lengkap</strong></summary>

```tsx
import { useMemo, useState } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { PageHeader } from "@/components/navigation/PageHeader";
import { PermissionWrapper } from "@/components/navigation/PermissionWrapper";
import { PageEmptyState } from "@/components/feedback/PageEmptyState";
import { PageErrorState } from "@/components/feedback/PageErrorState";
import { Badge, Button, Card, Input, Pagination } from "@/components/ui";
import { masterDataService } from "@/modules/admin/services/master-data.service";
import { notificationService } from "@/modules/admin/services/notification.service";
import { parseApiError } from "@/services/api/error-parser";
import { useToast } from "@/hooks/useToast";
import type { NotificationQuery, NotificationType } from "@/types/notification";

const criticalTypes: Array<NotificationType | ""> = [
  "",
  "low_stock",
  "order_overdue",
  "shift_not_closed",
  "promo_expiring",
];

const formatDateTime = (value: string | null | undefined) => {
  if (!value) {
    return "-";
  }

  return new Intl.DateTimeFormat("id-ID", {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(new Date(value));
};

const typeLabel = (type: NotificationType) => {
  const labels: Record<NotificationType, string> = {
    low_stock: "Low Stock",
    shift_not_closed: "Shift Belum Ditutup",
    promo_expiring: "Promo Hampir Habis",
    order_overdue: "Order Terlambat",
  };

  return labels[type];
};

export default function CriticalAlertsPage() {
  const toast = useToast();
  const queryClient = useQueryClient();

  const [filters, setFilters] = useState<NotificationQuery>({
    page: 1,
    per_page: 10,
    outlet_id: "",
    type: "",
    severity: "danger",
    status: "unread",
  });

  const queryParams = useMemo(
    () => ({
      ...filters,
      outlet_id: filters.outlet_id || undefined,
      type: filters.type || undefined,
      severity: "danger" as const,
      status: filters.status || undefined,
    }),
    [filters]
  );

  const outletsQuery = useQuery({
    queryKey: ["critical-alert-outlets"],
    queryFn: () => masterDataService.getOutlets({ per_page: 100, is_active: true }),
  });

  const alertsQuery = useQuery({
    queryKey: ["critical-alerts", queryParams],
    queryFn: () => notificationService.getNotifications(queryParams),
  });

  const scanMutation = useMutation({
    mutationFn: () =>
      notificationService.scanAlerts({
        outlet_id: filters.outlet_id ? Number(filters.outlet_id) : null,
        alert_type: filters.type || null,
      }),
    onSuccess: (response) => {
      toast.success(response.message);
      void queryClient.invalidateQueries({ queryKey: ["critical-alerts"] });
    },
    onError: (error) => {
      toast.error("Gagal menjalankan scan critical alert", parseApiError(error));
    },
  });

  const resolveMutation = useMutation({
    mutationFn: (id: number) => notificationService.resolveNotification(id),
    onSuccess: (response) => {
      toast.success(response.message);
      void queryClient.invalidateQueries({ queryKey: ["critical-alerts"] });
    },
    onError: (error) => {
      toast.error("Gagal resolve critical alert", parseApiError(error));
    },
  });

  const rows = alertsQuery.data?.items ?? [];
  const outlets = outletsQuery.data?.items ?? [];

  return (
    <PermissionWrapper permission="notifications.view">
      <div className="space-y-4">
        <PageHeader
          title="Critical Alerts"
          description="Daftar alert prioritas tinggi yang perlu ditindaklanjuti lebih cepat."
        />

        <Card>
          <div className="grid gap-4 lg:grid-cols-5">
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">Outlet</label>
              <select
                className="w-full rounded-xl border border-slate-300 px-3 py-2 text-sm"
                value={filters.outlet_id ?? ""}
                onChange={(event) =>
                  setFilters((prev) => ({
                    ...prev,
                    page: 1,
                    outlet_id: event.target.value ? Number(event.target.value) : "",
                  }))
                }
              >
                <option value="">Semua outlet</option>
                {outlets.map((outlet) => (
                  <option key={outlet.id} value={outlet.id}>
                    {outlet.name}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">Tipe Alert</label>
              <select
                className="w-full rounded-xl border border-slate-300 px-3 py-2 text-sm"
                value={filters.type ?? ""}
                onChange={(event) =>
                  setFilters((prev) => ({
                    ...prev,
                    page: 1,
                    type: event.target.value as NotificationType | "",
                  }))
                }
              >
                {criticalTypes.map((type) => (
                  <option key={type || "all"} value={type}>
                    {type ? typeLabel(type) : "Semua tipe critical"}
                  </option>
                ))}
              </select>
            </div>

            <Input label="Severity" value="danger" disabled />

            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">Status</label>
              <select
                className="w-full rounded-xl border border-slate-300 px-3 py-2 text-sm"
                value={filters.status ?? ""}
                onChange={(event) =>
                  setFilters((prev) => ({
                    ...prev,
                    page: 1,
                    status: event.target.value as NotificationQuery["status"],
                  }))
                }
              >
                <option value="">Semua status</option>
                <option value="unread">unread</option>
                <option value="read">read</option>
                <option value="resolved">resolved</option>
              </select>
            </div>

            <div className="flex items-end gap-2">
              <Button loading={alertsQuery.isFetching} onClick={() => void alertsQuery.refetch()}>
                Refresh
              </Button>
              <Button
                variant="outline"
                loading={scanMutation.isPending}
                onClick={() => scanMutation.mutate()}
              >
                Scan
              </Button>
            </div>
          </div>
        </Card>

        {alertsQuery.isLoading ? (
          <Card>Memuat critical alert...</Card>
        ) : alertsQuery.isError ? (
          <PageErrorState onRetry={() => void alertsQuery.refetch()} />
        ) : !rows.length ? (
          <PageEmptyState title="Tidak ada critical alert" />
        ) : (
          <div className="grid gap-4 xl:grid-cols-2">
            {rows.map((row) => (
              <Card
                key={row.id}
                title={row.title}
                description={row.outlet?.name ?? "Semua outlet"}
                actions={<Badge variant="danger">{row.status}</Badge>}
              >
                <div className="space-y-4">
                  <p className="text-sm text-slate-600">{row.message}</p>

                  <div className="grid gap-3 md:grid-cols-3">
                    <div className="rounded-xl bg-slate-50 p-3">
                      <div className="text-xs text-slate-500">Tipe</div>
                      <div className="font-medium text-slate-900">{typeLabel(row.type)}</div>
                    </div>

                    <div className="rounded-xl bg-slate-50 p-3">
                      <div className="text-xs text-slate-500">Source</div>
                      <div className="font-medium text-slate-900">#{row.source_id ?? "-"}</div>
                    </div>

                    <div className="rounded-xl bg-slate-50 p-3">
                      <div className="text-xs text-slate-500">Waktu</div>
                      <div className="font-medium text-slate-900">{formatDateTime(row.created_at)}</div>
                    </div>
                  </div>

                  {row.status !== "resolved" ? (
                    <Button
                      loading={resolveMutation.isPending}
                      onClick={() => resolveMutation.mutate(row.id)}
                    >
                      Resolve Alert
                    </Button>
                  ) : null}
                </div>
              </Card>
            ))}
          </div>
        )}

        <Pagination
          meta={alertsQuery.data?.meta}
          onPageChange={(nextPage) => setFilters((prev) => ({ ...prev, page: nextPage }))}
        />
      </div>
    </PermissionWrapper>
  );
}
```
</details>

<a id="file-srcmodulesadminpagescustomerspagetsx"></a>
### src\modules\admin\pages\CustomersPage.tsx
- SHA: `35c63d229182`  
- Ukuran: 18 KB
<details><summary><strong>Lihat Kode Lengkap</strong></summary>

```tsx
import { useMemo, useState } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { PageHeader } from "@/components/navigation/PageHeader";
import { PermissionWrapper } from "@/components/navigation/PermissionWrapper";
import { PageEmptyState } from "@/components/feedback/PageEmptyState";
import { PageErrorState } from "@/components/feedback/PageErrorState";
import { Badge, Button, Card, ConfirmDialog, Input, Modal, Pagination } from "@/components/ui";
import { parseApiError } from "@/services/api/error-parser";
import { useToast } from "@/hooks/useToast";
import { customerPromoService } from "@/modules/admin/services/customer-promo.service";
import type { Customer, CustomerPayload } from "@/types/customer";

interface CustomerFormState {
    code: string;
    name: string;
    phone: string;
    email: string;
    gender: string;
    birth_date: string;
    points: string;
    total_spent: string;
    is_member: boolean;
    notes: string;
}

const initialForm: CustomerFormState = {
    code: "",
    name: "",
    phone: "",
    email: "",
    gender: "",
    birth_date: "",
    points: "0",
    total_spent: "0",
    is_member: false,
    notes: "",
};

const toPayload = (form: CustomerFormState): CustomerPayload => ({
    code: form.code.trim() || null,
    name: form.name.trim(),
    phone: form.phone.trim() || null,
    email: form.email.trim() || null,
    gender: form.gender.trim() || null,
    birth_date: form.birth_date || null,
    points: Number(form.points || 0),
    total_spent: Number(form.total_spent || 0),
    is_member: form.is_member,
    notes: form.notes.trim() || null,
});

const fromCustomer = (customer: Customer): CustomerFormState => ({
    code: customer.code ?? "",
    name: customer.name,
    phone: customer.phone ?? "",
    email: customer.email ?? "",
    gender: customer.gender ?? "",
    birth_date: customer.birth_date ?? "",
    points: String(customer.points ?? 0),
    total_spent: String(customer.total_spent ?? 0),
    is_member: Boolean(customer.is_member),
    notes: customer.notes ?? "",
});

export default function CustomersPage() {
    const toast = useToast();
    const queryClient = useQueryClient();

    const [page, setPage] = useState(1);
    const [search, setSearch] = useState("");
    const [isMember, setIsMember] = useState<boolean | "">("");
    const [open, setOpen] = useState(false);
    const [detail, setDetail] = useState<Customer | null>(null);
    const [editing, setEditing] = useState<Customer | null>(null);
    const [deleting, setDeleting] = useState<Customer | null>(null);
    const [form, setForm] = useState<CustomerFormState>(initialForm);

    const customersQuery = useQuery({
        queryKey: ["admin-customers", page, search, isMember],
        queryFn: () =>
            customerPromoService.getCustomers({
                page,
                per_page: 10,
                search,
                is_member: isMember,
            }),
    });

    const customers = customersQuery.data?.items ?? [];
    const meta = customersQuery.data?.meta ?? null;

    const memberCount = useMemo(
        () => customers.filter((customer) => customer.is_member).length,
        [customers]
    );

    const saveMutation = useMutation({
        mutationFn: () => {
            const payload = toPayload(form);

            if (editing) {
                return customerPromoService.updateCustomer(editing.id, payload);
            }

            return customerPromoService.createCustomer(payload);
        },
        onSuccess: (response) => {
            toast.success(response.message);
            setOpen(false);
            setEditing(null);
            setForm(initialForm);
            void queryClient.invalidateQueries({ queryKey: ["admin-customers"] });
        },
        onError: (error) => {
            toast.error("Gagal menyimpan customer", parseApiError(error));
        },
    });

    const deleteMutation = useMutation({
        mutationFn: (customer: Customer) => customerPromoService.deleteCustomer(customer.id),
        onSuccess: (response) => {
            toast.success(response.message);
            setDeleting(null);
            void queryClient.invalidateQueries({ queryKey: ["admin-customers"] });
        },
        onError: (error) => {
            toast.error("Gagal menghapus customer", parseApiError(error));
        },
    });

    const openCreate = () => {
        setEditing(null);
        setForm(initialForm);
        setOpen(true);
    };

    const openEdit = (customer: Customer) => {
        setEditing(customer);
        setForm(fromCustomer(customer));
        setOpen(true);
    };

    return (
        <PermissionWrapper permission="customers.view">
            <div className="space-y-4">
                <PageHeader
                    title="Customers"
                    description="Kelola data pelanggan, status member, dan ringkasan transaksi pelanggan."
                    actions={
                        <PermissionWrapper permission="customers.create" fallback={null}>
                            <Button onClick={openCreate}>Tambah Customer</Button>
                        </PermissionWrapper>
                    }
                />

                <div className="grid gap-4 md:grid-cols-3">
                    <Card title="Total Customer">
                        <div className="text-3xl font-semibold text-slate-900">
                            {meta?.total ?? customers.length}
                        </div>
                    </Card>
                    <Card title="Member di Halaman Ini">
                        <div className="text-3xl font-semibold text-slate-900">{memberCount}</div>
                    </Card>
                    <Card title="Filter Aktif">
                        <div className="text-sm text-slate-600">{search || isMember !== "" ? "Ya" : "Tidak"}</div>
                    </Card>
                </div>

                <Card>
                    <div className="grid gap-4 md:grid-cols-3">
                        <Input
                            placeholder="Cari kode, nama, phone, atau email..."
                            value={search}
                            onChange={(event) => {
                                setSearch(event.target.value);
                                setPage(1);
                            }}
                        />

                        <select
                            className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900"
                            value={isMember === "" ? "" : String(isMember)}
                            onChange={(event) => {
                                const value = event.target.value;
                                setIsMember(value === "" ? "" : value === "true");
                                setPage(1);
                            }}
                        >
                            <option value="">Semua Status</option>
                            <option value="true">Member</option>
                            <option value="false">Non Member</option>
                        </select>
                    </div>
                </Card>

                {customersQuery.isLoading ? (
                    <Card>Memuat data customer...</Card>
                ) : customersQuery.isError ? (
                    <PageErrorState onRetry={() => void customersQuery.refetch()} />
                ) : !customers.length ? (
                    <PageEmptyState title="Belum ada customer" />
                ) : (
                    <div className="space-y-3">
                        {customers.map((customer) => (
                            <Card
                                key={customer.id}
                                title={customer.name}
                                description={customer.phone ?? customer.email ?? "-"}
                                actions={
                                    <Badge variant={customer.is_member ? "success" : "default"}>
                                        {customer.is_member ? "Member" : "Non Member"}
                                    </Badge>
                                }
                            >
                                <div className="grid gap-3 text-sm text-slate-600 md:grid-cols-4">
                                    <div>
                                        <div className="text-xs text-slate-400">Kode</div>
                                        <div className="font-medium text-slate-900">{customer.code ?? "-"}</div>
                                    </div>
                                    <div>
                                        <div className="text-xs text-slate-400">Point</div>
                                        <div className="font-medium text-slate-900">{customer.points}</div>
                                    </div>
                                    <div>
                                        <div className="text-xs text-slate-400">Total Belanja</div>
                                        <div className="font-medium text-slate-900">
                                            Rp {Number(customer.total_spent ?? 0).toLocaleString("id-ID")}
                                        </div>
                                    </div>
                                    <div>
                                        <div className="text-xs text-slate-400">Alamat</div>
                                        <div className="font-medium text-slate-900">
                                            {customer.addresses?.length ?? 0} alamat
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-4 flex flex-wrap gap-2">
                                    <Button variant="outline" onClick={() => setDetail(customer)}>
                                        Detail
                                    </Button>
                                    <PermissionWrapper permission="customers.update" fallback={null}>
                                        <Button variant="secondary" onClick={() => openEdit(customer)}>
                                            Edit
                                        </Button>
                                    </PermissionWrapper>
                                    <PermissionWrapper permission="customers.delete" fallback={null}>
                                        <Button variant="danger" onClick={() => setDeleting(customer)}>
                                            Hapus
                                        </Button>
                                    </PermissionWrapper>
                                </div>
                            </Card>
                        ))}
                    </div>
                )}

                {meta ? (
                    <Pagination
                        meta={meta}
                        onPageChange={setPage}
                    />
                ) : null}

                <Modal
                    open={open}
                    title={editing ? "Edit Customer" : "Tambah Customer"}
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
                    <div className="grid gap-4 md:grid-cols-2">
                        <Input
                            label="Kode"
                            value={form.code}
                            onChange={(event) => setForm((prev) => ({ ...prev, code: event.target.value }))}
                        />
                        <Input
                            label="Nama"
                            value={form.name}
                            onChange={(event) => setForm((prev) => ({ ...prev, name: event.target.value }))}
                        />
                        <Input
                            label="Phone"
                            value={form.phone}
                            onChange={(event) => setForm((prev) => ({ ...prev, phone: event.target.value }))}
                        />
                        <Input
                            label="Email"
                            type="email"
                            value={form.email}
                            onChange={(event) => setForm((prev) => ({ ...prev, email: event.target.value }))}
                        />
                        <Input
                            label="Gender"
                            value={form.gender}
                            onChange={(event) => setForm((prev) => ({ ...prev, gender: event.target.value }))}
                        />
                        <Input
                            label="Tanggal Lahir"
                            type="date"
                            value={form.birth_date}
                            onChange={(event) => setForm((prev) => ({ ...prev, birth_date: event.target.value }))}
                        />
                        <Input
                            label="Point"
                            type="number"
                            value={form.points}
                            onChange={(event) => setForm((prev) => ({ ...prev, points: event.target.value }))}
                        />
                        <Input
                            label="Total Belanja"
                            type="number"
                            value={form.total_spent}
                            onChange={(event) =>
                                setForm((prev) => ({ ...prev, total_spent: event.target.value }))
                            }
                        />
                        <label className="flex items-center gap-2 text-sm text-slate-700">
                            <input
                                type="checkbox"
                                checked={form.is_member}
                                onChange={(event) =>
                                    setForm((prev) => ({ ...prev, is_member: event.target.checked }))
                                }
                            />
                            Customer member
                        </label>
                        <Input
                            label="Catatan"
                            value={form.notes}
                            onChange={(event) => setForm((prev) => ({ ...prev, notes: event.target.value }))}
                        />
                    </div>
                </Modal>

                <Modal
                    open={Boolean(detail)}
                    title="Detail Customer"
                    onClose={() => setDetail(null)}
                >
                    <div className="space-y-4 text-sm">
                        <Card title={detail?.name ?? "-"}>
                            <div className="grid gap-3 md:grid-cols-2">
                                <div>Kode: {detail?.code ?? "-"}</div>
                                <div>Phone: {detail?.phone ?? "-"}</div>
                                <div>Email: {detail?.email ?? "-"}</div>
                                <div>Status: {detail?.is_member ? "Member" : "Non Member"}</div>
                                <div>Point: {detail?.points ?? 0}</div>
                                <div>Total: Rp {Number(detail?.total_spent ?? 0).toLocaleString("id-ID")}</div>
                            </div>
                        </Card>

                        <Card title="Alamat Customer">
                            {!detail?.addresses?.length ? (
                                <div className="text-slate-500">Belum ada alamat.</div>
                            ) : (
                                <div className="space-y-3">
                                    {detail.addresses.map((address) => (
                                        <div key={address.id} className="rounded-xl border border-slate-200 p-3">
                                            <div className="font-semibold text-slate-900">
                                                {address.label ?? "Alamat"} {address.is_default ? "(Default)" : ""}
                                            </div>
                                            <div className="text-slate-600">{address.address}</div>
                                            <div className="text-slate-500">
                                                {[address.city, address.province, address.postal_code].filter(Boolean).join(", ")}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </Card>
                    </div>
                </Modal>

                <ConfirmDialog
                    open={Boolean(deleting)}
                    title="Hapus customer?"
                    description={`Customer ${deleting?.name ?? ""} akan dihapus.`}
                    confirmText="Hapus"
                    confirmVariant="danger"
                    loading={deleteMutation.isPending}
                    onClose={() => setDeleting(null)}
                    onConfirm={() => {
                        if (deleting) {
                            deleteMutation.mutate(deleting);
                        }
                    }}
                />
            </div>
        </PermissionWrapper>
    );
}
```
</details>

<a id="file-srcmodulesadminpagesexpensecategoriespagetsx"></a>
### src\modules\admin\pages\ExpenseCategoriesPage.tsx
- SHA: `1efdfb97f6a7`  
- Ukuran: 9 KB
<details><summary><strong>Lihat Kode Lengkap</strong></summary>

```tsx
import { useMemo, useState } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { PageHeader } from "@/components/navigation/PageHeader";
import { PermissionWrapper } from "@/components/navigation/PermissionWrapper";
import { PageErrorState } from "@/components/feedback/PageErrorState";
import { PageEmptyState } from "@/components/feedback/PageEmptyState";
import { Badge, Button, Card, ConfirmDialog, Input, Modal, Pagination } from "@/components/ui";
import { parseApiError } from "@/services/api/error-parser";
import { useToast } from "@/hooks/useToast";
import { expenseService } from "@/modules/admin/services/expense.service";
import type { ExpenseCategory, ExpenseCategoryPayload } from "@/types/expense";

const initialForm: ExpenseCategoryPayload = {
  name: "",
  is_active: true,
};

export default function ExpenseCategoriesPage() {
  const toast = useToast();
  const queryClient = useQueryClient();

  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [isActive, setIsActive] = useState<boolean | "">("");
  const [openForm, setOpenForm] = useState(false);
  const [editing, setEditing] = useState<ExpenseCategory | null>(null);
  const [form, setForm] = useState<ExpenseCategoryPayload>(initialForm);
  const [deleting, setDeleting] = useState<ExpenseCategory | null>(null);

  const queryParams = useMemo(
    () => ({
      page,
      per_page: 10,
      search,
      is_active: isActive,
    }),
    [page, search, isActive]
  );

  const categoriesQuery = useQuery({
    queryKey: ["expense-categories", queryParams],
    queryFn: () => expenseService.getExpenseCategories(queryParams),
  });

  const saveMutation = useMutation({
    mutationFn: () => {
      if (editing) {
        return expenseService.updateExpenseCategory(editing.id, form);
      }

      return expenseService.createExpenseCategory(form);
    },
    onSuccess: (response) => {
      toast.success(response.message);
      setOpenForm(false);
      setEditing(null);
      setForm(initialForm);
      void queryClient.invalidateQueries({ queryKey: ["expense-categories"] });
    },
    onError: (error) => {
      toast.error("Gagal menyimpan kategori expense", parseApiError(error));
    },
  });

  const deleteMutation = useMutation({
    mutationFn: (id: number) => expenseService.deleteExpenseCategory(id),
    onSuccess: (response) => {
      toast.success(response.message);
      setDeleting(null);
      void queryClient.invalidateQueries({ queryKey: ["expense-categories"] });
    },
    onError: (error) => {
      toast.error("Gagal menghapus kategori expense", parseApiError(error));
    },
  });

  const openCreateForm = () => {
    setEditing(null);
    setForm(initialForm);
    setOpenForm(true);
  };

  const openEditForm = (category: ExpenseCategory) => {
    setEditing(category);
    setForm({
      name: category.name,
      is_active: Boolean(category.is_active),
    });
    setOpenForm(true);
  };

  return (
    <PermissionWrapper permission="expense_categories.view">
      <div className="space-y-4">
        <PageHeader
          title="Expense Categories"
          description="Kelola kategori pengeluaran operasional outlet."
        />

        <Card>
          <div className="grid gap-4 md:grid-cols-3">
            <Input
              label="Search"
              placeholder="Cari nama kategori"
              value={search}
              onChange={(event) => {
                setSearch(event.target.value);
                setPage(1);
              }}
            />

            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">Status</label>
              <select
                className="w-full rounded-xl border border-slate-300 px-3 py-2 text-sm"
                value={isActive === "" ? "" : String(isActive)}
                onChange={(event) => {
                  const value = event.target.value;
                  setIsActive(value === "" ? "" : value === "true");
                  setPage(1);
                }}
              >
                <option value="">Semua status</option>
                <option value="true">Aktif</option>
                <option value="false">Nonaktif</option>
              </select>
            </div>

            <div className="flex items-end justify-end">
              <PermissionWrapper permission="expense_categories.create">
                <Button onClick={openCreateForm}>Tambah Kategori</Button>
              </PermissionWrapper>
            </div>
          </div>
        </Card>

        {categoriesQuery.isLoading ? (
          <Card>Memuat kategori expense...</Card>
        ) : categoriesQuery.isError ? (
          <PageErrorState onRetry={() => void categoriesQuery.refetch()} />
        ) : !categoriesQuery.data?.items.length ? (
          <PageEmptyState title="Belum ada kategori expense" />
        ) : (
          <Card>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="border-b border-slate-200 text-slate-500">
                    <th className="px-3 py-3 font-medium">Nama</th>
                    <th className="px-3 py-3 font-medium">Status</th>
                    <th className="px-3 py-3 font-medium">Total Expense</th>
                    <th className="px-3 py-3 text-right font-medium">Aksi</th>
                  </tr>
                </thead>
                <tbody>
                  {categoriesQuery.data.items.map((category) => (
                    <tr key={category.id} className="border-b border-slate-100">
                      <td className="px-3 py-3 font-medium text-slate-900">{category.name}</td>
                      <td className="px-3 py-3">
                        <Badge variant={category.is_active ? "success" : "danger"}>
                          {category.is_active ? "Aktif" : "Nonaktif"}
                        </Badge>
                      </td>
                      <td className="px-3 py-3 text-slate-600">
                        {Number(category.expenses_count ?? 0).toLocaleString("id-ID")}
                      </td>
                      <td className="px-3 py-3">
                        <div className="flex justify-end gap-2">
                          <PermissionWrapper permission="expense_categories.update">
                            <Button variant="outline" onClick={() => openEditForm(category)}>
                              Edit
                            </Button>
                          </PermissionWrapper>

                          <PermissionWrapper permission="expense_categories.delete">
                            <Button variant="danger" onClick={() => setDeleting(category)}>
                              Hapus
                            </Button>
                          </PermissionWrapper>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        )}

        <Pagination meta={categoriesQuery.data?.meta ?? null} onPageChange={setPage} />

        <Modal
          open={openForm}
          title={editing ? "Edit Kategori Expense" : "Tambah Kategori Expense"}
          onClose={() => setOpenForm(false)}
          footer={
            <>
              <Button variant="outline" onClick={() => setOpenForm(false)}>
                Batal
              </Button>
              <Button loading={saveMutation.isPending} onClick={() => saveMutation.mutate()}>
                Simpan
              </Button>
            </>
          }
        >
          <div className="space-y-4">
            <Input
              label="Nama Kategori"
              value={form.name}
              onChange={(event) => setForm((prev) => ({ ...prev, name: event.target.value }))}
            />

            <label className="flex items-center gap-2 text-sm text-slate-700">
              <input
                type="checkbox"
                checked={form.is_active}
                onChange={(event) =>
                  setForm((prev) => ({ ...prev, is_active: event.target.checked }))
                }
              />
              Aktif
            </label>
          </div>
        </Modal>

        <ConfirmDialog
          open={Boolean(deleting)}
          title="Hapus kategori expense"
          description={`Kategori "${deleting?.name ?? "-"}" akan dihapus.`}
          loading={deleteMutation.isPending}
          onClose={() => setDeleting(null)}
          onConfirm={() => deleting && deleteMutation.mutate(deleting.id)}
        />
      </div>
    </PermissionWrapper>
  );
}
```
</details>

<a id="file-srcmodulesadminpagesexpensespagetsx"></a>
### src\modules\admin\pages\ExpensesPage.tsx
- SHA: `f88c2f049fd3`  
- Ukuran: 22 KB
<details><summary><strong>Lihat Kode Lengkap</strong></summary>

```tsx
import { useMemo, useState } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { PageHeader } from "@/components/navigation/PageHeader";
import { PermissionWrapper } from "@/components/navigation/PermissionWrapper";
import { PageErrorState } from "@/components/feedback/PageErrorState";
import { PageEmptyState } from "@/components/feedback/PageEmptyState";
import { Badge, Button, Card, ConfirmDialog, Input, Modal, Pagination } from "@/components/ui";
import { parseApiError } from "@/services/api/error-parser";
import { useToast } from "@/hooks/useToast";
import { expenseService } from "@/modules/admin/services/expense.service";
import { masterDataService } from "@/modules/admin/services/master-data.service";
import type { Expense, ExpensePayload, ExpenseStatus } from "@/types/expense";

const formatCurrency = (value: number | string | null | undefined) =>
  `Rp ${Number(value ?? 0).toLocaleString("id-ID")}`;

const today = () => new Date().toISOString().slice(0, 10);

const initialForm: ExpensePayload = {
  outlet_id: 0,
  expense_category_id: 0,
  expense_date: today(),
  amount: 0,
  description: "",
  status: "draft",
};

const statusBadge = (status: ExpenseStatus) => {
  if (status === "approved") {
    return "success";
  }

  if (status === "submitted") {
    return "warning";
  }

  if (status === "rejected") {
    return "danger";
  }

  return "info";
};

export default function ExpensesPage() {
  const toast = useToast();
  const queryClient = useQueryClient();

  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState<ExpenseStatus | "">("");
  const [outletId, setOutletId] = useState<number | "">("");
  const [categoryId, setCategoryId] = useState<number | "">("");
  const [expenseFrom, setExpenseFrom] = useState("");
  const [expenseUntil, setExpenseUntil] = useState("");
  const [openForm, setOpenForm] = useState(false);
  const [editing, setEditing] = useState<Expense | null>(null);
  const [form, setForm] = useState<ExpensePayload>(initialForm);
  const [deleting, setDeleting] = useState<Expense | null>(null);
  const [actionTarget, setActionTarget] = useState<Expense | null>(null);
  const [actionType, setActionType] = useState<"submit" | "approve" | "reject" | null>(null);
  const [approvalNotes, setApprovalNotes] = useState("");
  const [attachmentTarget, setAttachmentTarget] = useState<Expense | null>(null);
  const [attachmentFiles, setAttachmentFiles] = useState<File[]>([]);

  const queryParams = useMemo(
    () => ({
      page,
      per_page: 10,
      search,
      status,
      outlet_id: outletId,
      expense_category_id: categoryId,
      expense_from: expenseFrom,
      expense_until: expenseUntil,
    }),
    [page, search, status, outletId, categoryId, expenseFrom, expenseUntil]
  );

  const expensesQuery = useQuery({
    queryKey: ["expenses", queryParams],
    queryFn: () => expenseService.getExpenses(queryParams),
  });

  const categoriesQuery = useQuery({
    queryKey: ["expense-categories", "active-options"],
    queryFn: () => expenseService.getExpenseCategories({ per_page: 100, is_active: true }),
  });

  const outletsQuery = useQuery({
    queryKey: ["outlets", "expense-options"],
    queryFn: () => masterDataService.getOutlets({ per_page: 100 }),
  });

  const saveMutation = useMutation({
    mutationFn: () => {
      if (editing) {
        return expenseService.updateExpense(editing.id, form);
      }

      return expenseService.createExpense(form);
    },
    onSuccess: (response) => {
      toast.success(response.message);
      setOpenForm(false);
      setEditing(null);
      setForm(initialForm);
      void queryClient.invalidateQueries({ queryKey: ["expenses"] });
    },
    onError: (error) => {
      toast.error("Gagal menyimpan expense", parseApiError(error));
    },
  });

  const deleteMutation = useMutation({
    mutationFn: (id: number) => expenseService.deleteExpense(id),
    onSuccess: (response) => {
      toast.success(response.message);
      setDeleting(null);
      void queryClient.invalidateQueries({ queryKey: ["expenses"] });
    },
    onError: (error) => {
      toast.error("Gagal menghapus expense", parseApiError(error));
    },
  });

  const statusMutation = useMutation({
    mutationFn: () => {
      if (!actionTarget || !actionType) {
        throw new Error("Expense belum dipilih");
      }

      if (actionType === "submit") {
        return expenseService.submitExpense(actionTarget.id);
      }

      if (actionType === "approve") {
        return expenseService.approveExpense(actionTarget.id, approvalNotes);
      }

      return expenseService.rejectExpense(actionTarget.id, approvalNotes);
    },
    onSuccess: (response) => {
      toast.success(response.message);
      setActionTarget(null);
      setActionType(null);
      setApprovalNotes("");
      void queryClient.invalidateQueries({ queryKey: ["expenses"] });
    },
    onError: (error) => {
      toast.error("Gagal memproses status expense", parseApiError(error));
    },
  });

  const uploadMutation = useMutation({
    mutationFn: () => {
      if (!attachmentTarget) {
        throw new Error("Expense belum dipilih");
      }

      return expenseService.uploadExpenseAttachments(attachmentTarget.id, attachmentFiles);
    },
    onSuccess: (response) => {
      toast.success(response.message);
      setAttachmentTarget(null);
      setAttachmentFiles([]);
      void queryClient.invalidateQueries({ queryKey: ["expenses"] });
    },
    onError: (error) => {
      toast.error("Gagal upload attachment", parseApiError(error));
    },
  });

  const deleteAttachmentMutation = useMutation({
    mutationFn: (id: number) => expenseService.deleteExpenseAttachment(id),
    onSuccess: (response) => {
      toast.success(response.message);
      void queryClient.invalidateQueries({ queryKey: ["expenses"] });
    },
    onError: (error) => {
      toast.error("Gagal menghapus attachment", parseApiError(error));
    },
  });

  const openCreateForm = () => {
    setEditing(null);
    setForm(initialForm);
    setOpenForm(true);
  };

  const openEditForm = (expense: Expense) => {
    setEditing(expense);
    setForm({
      outlet_id: expense.outlet_id,
      expense_category_id: expense.expense_category_id,
      expense_date: expense.expense_date,
      amount: Number(expense.amount ?? 0),
      description: expense.description ?? "",
      status: expense.status,
    });
    setOpenForm(true);
  };

  const confirmStatusAction = (expense: Expense, nextAction: "submit" | "approve" | "reject") => {
    setActionTarget(expense);
    setActionType(nextAction);
    setApprovalNotes("");
  };

  return (
    <PermissionWrapper permission="expenses.view">
      <div className="space-y-4">
        <PageHeader title="Expenses" description="Catat dan kontrol biaya operasional outlet." />

        <Card>
          <div className="grid gap-4 md:grid-cols-4">
            <Input
              label="Search"
              placeholder="Deskripsi, outlet, kategori"
              value={search}
              onChange={(event) => {
                setSearch(event.target.value);
                setPage(1);
              }}
            />

            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">Outlet</label>
              <select
                className="w-full rounded-xl border border-slate-300 px-3 py-2 text-sm"
                value={outletId}
                onChange={(event) => {
                  setOutletId(event.target.value ? Number(event.target.value) : "");
                  setPage(1);
                }}
              >
                <option value="">Semua outlet</option>
                {outletsQuery.data?.items.map((outlet) => (
                  <option key={outlet.id} value={outlet.id}>
                    {outlet.name}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">Kategori</label>
              <select
                className="w-full rounded-xl border border-slate-300 px-3 py-2 text-sm"
                value={categoryId}
                onChange={(event) => {
                  setCategoryId(event.target.value ? Number(event.target.value) : "");
                  setPage(1);
                }}
              >
                <option value="">Semua kategori</option>
                {categoriesQuery.data?.items.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">Status</label>
              <select
                className="w-full rounded-xl border border-slate-300 px-3 py-2 text-sm"
                value={status}
                onChange={(event) => {
                  setStatus(event.target.value as ExpenseStatus | "");
                  setPage(1);
                }}
              >
                <option value="">Semua status</option>
                <option value="draft">draft</option>
                <option value="submitted">submitted</option>
                <option value="approved">approved</option>
                <option value="rejected">rejected</option>
              </select>
            </div>

            <Input
              label="Dari tanggal"
              type="date"
              value={expenseFrom}
              onChange={(event) => {
                setExpenseFrom(event.target.value);
                setPage(1);
              }}
            />

            <Input
              label="Sampai tanggal"
              type="date"
              value={expenseUntil}
              onChange={(event) => {
                setExpenseUntil(event.target.value);
                setPage(1);
              }}
            />

            <div className="md:col-span-2 flex items-end justify-end">
              <PermissionWrapper permission="expenses.create">
                <Button onClick={openCreateForm}>Tambah Expense</Button>
              </PermissionWrapper>
            </div>
          </div>
        </Card>

        {expensesQuery.isLoading ? (
          <Card>Memuat expense...</Card>
        ) : expensesQuery.isError ? (
          <PageErrorState onRetry={() => void expensesQuery.refetch()} />
        ) : !expensesQuery.data?.items.length ? (
          <PageEmptyState title="Belum ada data expense" />
        ) : (
          <div className="space-y-4">
            {expensesQuery.data.items.map((expense) => (
              <Card
                key={expense.id}
                title={expense.category?.name ?? "Expense"}
                description={`${expense.outlet?.name ?? "-"} • ${expense.expense_date}`}
                actions={<Badge variant={statusBadge(expense.status)}>{expense.status}</Badge>}
              >
                <div className="grid gap-4 lg:grid-cols-[1.5fr_1fr]">
                  <div className="space-y-3">
                    <div>
                      <div className="text-2xl font-semibold text-slate-900">
                        {formatCurrency(expense.amount)}
                      </div>
                      <p className="mt-1 text-sm text-slate-500">
                        {expense.description || "Tidak ada deskripsi"}
                      </p>
                    </div>

                    <div className="grid gap-3 text-sm md:grid-cols-3">
                      <div className="rounded-xl bg-slate-50 p-3">
                        <div className="text-slate-500">Dibuat oleh</div>
                        <div className="font-medium text-slate-900">
                          {expense.creator?.name ?? "-"}
                        </div>
                      </div>

                      <div className="rounded-xl bg-slate-50 p-3">
                        <div className="text-slate-500">Disetujui oleh</div>
                        <div className="font-medium text-slate-900">
                          {expense.approver?.name ?? "-"}
                        </div>
                      </div>

                      <div className="rounded-xl bg-slate-50 p-3">
                        <div className="text-slate-500">Attachment</div>
                        <div className="font-medium text-slate-900">
                          {Number(expense.attachments_count ?? expense.attachments?.length ?? 0)}
                        </div>
                      </div>
                    </div>

                    {expense.attachments?.length ? (
                      <div className="space-y-2">
                        <div className="text-sm font-medium text-slate-700">Attachment</div>
                        <div className="grid gap-2 md:grid-cols-2">
                          {expense.attachments.map((attachment) => (
                            <div
                              key={attachment.id}
                              className="flex items-center justify-between rounded-xl border border-slate-200 p-3 text-sm"
                            >
                              <span className="truncate text-slate-700">
                                {attachment.file_name ?? attachment.file_path}
                              </span>
                              <PermissionWrapper permission="expenses.update">
                                <Button
                                  variant="ghost"
                                  onClick={() => deleteAttachmentMutation.mutate(attachment.id)}
                                >
                                  Hapus
                                </Button>
                              </PermissionWrapper>
                            </div>
                          ))}
                        </div>
                      </div>
                    ) : null}
                  </div>

                  <div className="flex flex-col gap-2 lg:items-end">
                    <PermissionWrapper permission="expenses.update">
                      <Button variant="outline" onClick={() => openEditForm(expense)}>
                        Edit
                      </Button>
                    </PermissionWrapper>

                    <PermissionWrapper permission="expenses.submit">
                      <Button
                        variant="outline"
                        disabled={expense.status !== "draft"}
                        onClick={() => confirmStatusAction(expense, "submit")}
                      >
                        Submit
                      </Button>
                    </PermissionWrapper>

                    <PermissionWrapper permission="expenses.approve">
                      <Button
                        variant="outline"
                        disabled={expense.status !== "submitted"}
                        onClick={() => confirmStatusAction(expense, "approve")}
                      >
                        Approve
                      </Button>
                    </PermissionWrapper>

                    <PermissionWrapper permission="expenses.reject">
                      <Button
                        variant="outline"
                        disabled={expense.status !== "submitted"}
                        onClick={() => confirmStatusAction(expense, "reject")}
                      >
                        Reject
                      </Button>
                    </PermissionWrapper>

                    <PermissionWrapper permission="expenses.update">
                      <Button variant="outline" onClick={() => setAttachmentTarget(expense)}>
                        Upload Attachment
                      </Button>
                    </PermissionWrapper>

                    <PermissionWrapper permission="expenses.delete">
                      <Button variant="danger" onClick={() => setDeleting(expense)}>
                        Hapus
                      </Button>
                    </PermissionWrapper>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        )}

        <Pagination meta={expensesQuery.data?.meta ?? null} onPageChange={setPage} />

        <Modal
          open={openForm}
          title={editing ? "Edit Expense" : "Tambah Expense"}
          onClose={() => setOpenForm(false)}
          footer={
            <>
              <Button variant="outline" onClick={() => setOpenForm(false)}>
                Batal
              </Button>
              <Button loading={saveMutation.isPending} onClick={() => saveMutation.mutate()}>
                Simpan
              </Button>
            </>
          }
        >
          <div className="space-y-4">
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">Outlet</label>
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
                {outletsQuery.data?.items.map((outlet) => (
                  <option key={outlet.id} value={outlet.id}>
                    {outlet.name}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">Kategori</label>
              <select
                className="w-full rounded-xl border border-slate-300 px-3 py-2 text-sm"
                value={form.expense_category_id || ""}
                onChange={(event) =>
                  setForm((prev) => ({
                    ...prev,
                    expense_category_id: Number(event.target.value || 0),
                  }))
                }
              >
                <option value="">Pilih kategori</option>
                {categoriesQuery.data?.items.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
              </select>
            </div>

            <Input
              label="Tanggal Expense"
              type="date"
              value={form.expense_date}
              onChange={(event) =>
                setForm((prev) => ({ ...prev, expense_date: event.target.value }))
              }
            />

            <Input
              label="Nominal"
              type="number"
              value={String(form.amount)}
              onChange={(event) =>
                setForm((prev) => ({
                  ...prev,
                  amount: Number(event.target.value || 0),
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
          </div>
        </Modal>

        <Modal
          open={Boolean(actionTarget && actionType)}
          title="Konfirmasi Status Expense"
          description={`${actionType ?? "-"} expense #${actionTarget?.id ?? "-"}`}
          onClose={() => {
            setActionTarget(null);
            setActionType(null);
            setApprovalNotes("");
          }}
          footer={
            <>
              <Button
                variant="outline"
                onClick={() => {
                  setActionTarget(null);
                  setActionType(null);
                  setApprovalNotes("");
                }}
              >
                Batal
              </Button>
              <Button loading={statusMutation.isPending} onClick={() => statusMutation.mutate()}>
                Proses
              </Button>
            </>
          }
        >
          <div className="space-y-4">
            <Input
              label="Catatan"
              value={approvalNotes}
              onChange={(event) => setApprovalNotes(event.target.value)}
              placeholder="Opsional untuk approve, wajib untuk reject jika backend mewajibkan"
            />
          </div>
        </Modal>

        <Modal
          open={Boolean(attachmentTarget)}
          title="Upload Attachment Expense"
          onClose={() => {
            setAttachmentTarget(null);
            setAttachmentFiles([]);
          }}
          footer={
            <>
              <Button
                variant="outline"
                onClick={() => {
                  setAttachmentTarget(null);
                  setAttachmentFiles([]);
                }}
              >
                Batal
              </Button>
              <Button
                loading={uploadMutation.isPending}
                disabled={!attachmentFiles.length}
                onClick={() => uploadMutation.mutate()}
              >
                Upload
              </Button>
            </>
          }
        >
          <div className="space-y-4">
            <Input
              type="file"
              multiple
              onChange={(event) => setAttachmentFiles(Array.from(event.target.files ?? []))}
            />

            <div className="text-sm text-slate-500">
              {attachmentFiles.length
                ? `${attachmentFiles.length} file dipilih`
                : "Belum ada file dipilih"}
            </div>
          </div>
        </Modal>

        <ConfirmDialog
          open={Boolean(deleting)}
          title="Hapus expense"
          description={`Expense #${deleting?.id ?? "-"} akan dihapus.`}
          loading={deleteMutation.isPending}
          onClose={() => setDeleting(null)}
          onConfirm={() => deleting && deleteMutation.mutate(deleting.id)}
        />
      </div>
    </PermissionWrapper>
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

<a id="file-srcmodulesadminpagesnotificationspagetsx"></a>
### src\modules\admin\pages\NotificationsPage.tsx
- SHA: `af1eaf1b05a0`  
- Ukuran: 17 KB
<details><summary><strong>Lihat Kode Lengkap</strong></summary>

```tsx
import { useMemo, useState } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { PageHeader } from "@/components/navigation/PageHeader";
import { PermissionWrapper } from "@/components/navigation/PermissionWrapper";
import { PageEmptyState } from "@/components/feedback/PageEmptyState";
import { PageErrorState } from "@/components/feedback/PageErrorState";
import { Badge, Button, Card, ConfirmDialog, Input, Modal, Pagination } from "@/components/ui";
import { masterDataService } from "@/modules/admin/services/master-data.service";
import { notificationService } from "@/modules/admin/services/notification.service";
import { parseApiError } from "@/services/api/error-parser";
import { useToast } from "@/hooks/useToast";
import type {
  Notification,
  NotificationQuery,
  NotificationSeverity,
  NotificationStatus,
  NotificationType,
} from "@/types/notification";

const notificationTypes: Array<NotificationType | ""> = [
  "",
  "low_stock",
  "shift_not_closed",
  "promo_expiring",
  "order_overdue",
];

const severityOptions: Array<NotificationSeverity | ""> = ["", "info", "warning", "danger"];

const statusOptions: Array<NotificationStatus | ""> = ["", "unread", "read", "resolved"];

const formatDateTime = (value: string | null | undefined) => {
  if (!value) {
    return "-";
  }

  return new Intl.DateTimeFormat("id-ID", {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(new Date(value));
};

const severityBadge = (severity: NotificationSeverity) => {
  if (severity === "danger") {
    return "danger";
  }

  if (severity === "warning") {
    return "warning";
  }

  return "info";
};

const statusBadge = (status: NotificationStatus) => {
  if (status === "resolved") {
    return "success";
  }

  if (status === "read") {
    return "info";
  }

  return "warning";
};

const typeLabel = (type: NotificationType) => {
  const labels: Record<NotificationType, string> = {
    low_stock: "Low Stock",
    shift_not_closed: "Shift Belum Ditutup",
    promo_expiring: "Promo Hampir Habis",
    order_overdue: "Order Terlambat",
  };

  return labels[type];
};

export default function NotificationsPage() {
  const toast = useToast();
  const queryClient = useQueryClient();

  const [filters, setFilters] = useState<NotificationQuery>({
    page: 1,
    per_page: 10,
    outlet_id: "",
    type: "",
    severity: "",
    status: "",
  });
  const [selected, setSelected] = useState<Notification | null>(null);
  const [deleting, setDeleting] = useState<Notification | null>(null);

  const queryParams = useMemo(
    () => ({
      ...filters,
      outlet_id: filters.outlet_id || undefined,
      type: filters.type || undefined,
      severity: filters.severity || undefined,
      status: filters.status || undefined,
    }),
    [filters]
  );

  const outletsQuery = useQuery({
    queryKey: ["notification-outlets"],
    queryFn: () => masterDataService.getOutlets({ per_page: 100, is_active: true }),
  });

  const notificationsQuery = useQuery({
    queryKey: ["notifications", queryParams],
    queryFn: () => notificationService.getNotifications(queryParams),
  });

  const detailQuery = useQuery({
    queryKey: ["notification-detail", selected?.id],
    queryFn: () => notificationService.getNotification(Number(selected?.id)),
    enabled: Boolean(selected?.id),
  });

  const markReadMutation = useMutation({
    mutationFn: (id: number) => notificationService.markNotificationAsRead(id),
    onSuccess: (response) => {
      toast.success(response.message);
      void queryClient.invalidateQueries({ queryKey: ["notifications"] });
      void queryClient.invalidateQueries({ queryKey: ["notification-detail"] });
    },
    onError: (error) => {
      toast.error("Gagal menandai notification", parseApiError(error));
    },
  });

  const markAllReadMutation = useMutation({
    mutationFn: () => notificationService.markAllNotificationsAsRead(filters.outlet_id),
    onSuccess: (response) => {
      toast.success(response.message, `${response.data.updated_count} notification diperbarui.`);
      void queryClient.invalidateQueries({ queryKey: ["notifications"] });
    },
    onError: (error) => {
      toast.error("Gagal menandai semua notification", parseApiError(error));
    },
  });

  const resolveMutation = useMutation({
    mutationFn: (id: number) => notificationService.resolveNotification(id),
    onSuccess: (response) => {
      toast.success(response.message);
      void queryClient.invalidateQueries({ queryKey: ["notifications"] });
      void queryClient.invalidateQueries({ queryKey: ["notification-detail"] });
    },
    onError: (error) => {
      toast.error("Gagal resolve notification", parseApiError(error));
    },
  });

  const deleteMutation = useMutation({
    mutationFn: (id: number) => notificationService.deleteNotification(id),
    onSuccess: (response) => {
      toast.success(response.message);
      setDeleting(null);
      void queryClient.invalidateQueries({ queryKey: ["notifications"] });
    },
    onError: (error) => {
      toast.error("Gagal menghapus notification", parseApiError(error));
    },
  });

  const scanMutation = useMutation({
    mutationFn: () =>
      notificationService.scanAlerts({
        outlet_id: filters.outlet_id ? Number(filters.outlet_id) : null,
        alert_type: filters.type || null,
      }),
    onSuccess: (response) => {
      toast.success(response.message);
      void queryClient.invalidateQueries({ queryKey: ["notifications"] });
    },
    onError: (error) => {
      toast.error("Gagal menjalankan scan alert", parseApiError(error));
    },
  });

  const rows = notificationsQuery.data?.items ?? [];
  const outlets = outletsQuery.data?.items ?? [];
  const detail = detailQuery.data?.data ?? selected;

  return (
    <PermissionWrapper permission="notifications.view">
      <div className="space-y-4">
        <PageHeader
          title="Notification Center"
          description="Pantau alert operasional seperti stok rendah, order terlambat, promo hampir habis, dan shift yang belum ditutup."
        />

        <Card>
          <div className="grid gap-4 lg:grid-cols-6">
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">Outlet</label>
              <select
                className="w-full rounded-xl border border-slate-300 px-3 py-2 text-sm"
                value={filters.outlet_id ?? ""}
                onChange={(event) =>
                  setFilters((prev) => ({
                    ...prev,
                    page: 1,
                    outlet_id: event.target.value ? Number(event.target.value) : "",
                  }))
                }
              >
                <option value="">Semua outlet</option>
                {outlets.map((outlet) => (
                  <option key={outlet.id} value={outlet.id}>
                    {outlet.name}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">Tipe</label>
              <select
                className="w-full rounded-xl border border-slate-300 px-3 py-2 text-sm"
                value={filters.type ?? ""}
                onChange={(event) =>
                  setFilters((prev) => ({
                    ...prev,
                    page: 1,
                    type: event.target.value as NotificationType | "",
                  }))
                }
              >
                {notificationTypes.map((type) => (
                  <option key={type || "all"} value={type}>
                    {type ? typeLabel(type) : "Semua tipe"}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">Severity</label>
              <select
                className="w-full rounded-xl border border-slate-300 px-3 py-2 text-sm"
                value={filters.severity ?? ""}
                onChange={(event) =>
                  setFilters((prev) => ({
                    ...prev,
                    page: 1,
                    severity: event.target.value as NotificationSeverity | "",
                  }))
                }
              >
                {severityOptions.map((severity) => (
                  <option key={severity || "all"} value={severity}>
                    {severity || "Semua severity"}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">Status</label>
              <select
                className="w-full rounded-xl border border-slate-300 px-3 py-2 text-sm"
                value={filters.status ?? ""}
                onChange={(event) =>
                  setFilters((prev) => ({
                    ...prev,
                    page: 1,
                    status: event.target.value as NotificationStatus | "",
                  }))
                }
              >
                {statusOptions.map((status) => (
                  <option key={status || "all"} value={status}>
                    {status || "Semua status"}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex items-end">
              <Button
                loading={notificationsQuery.isFetching}
                onClick={() => void notificationsQuery.refetch()}
              >
                Refresh
              </Button>
            </div>

            <div className="flex items-end gap-2">
              <Button
                variant="outline"
                loading={scanMutation.isPending}
                onClick={() => scanMutation.mutate()}
              >
                Scan Alert
              </Button>

              <Button
                variant="outline"
                loading={markAllReadMutation.isPending}
                onClick={() => markAllReadMutation.mutate()}
              >
                Mark All Read
              </Button>
            </div>
          </div>
        </Card>

        {notificationsQuery.isLoading ? (
          <Card>Memuat notification...</Card>
        ) : notificationsQuery.isError ? (
          <PageErrorState onRetry={() => void notificationsQuery.refetch()} />
        ) : !rows.length ? (
          <PageEmptyState title="Belum ada notification" />
        ) : (
          <Card>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-slate-200 text-sm">
                <thead>
                  <tr className="text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
                    <th className="px-3 py-3">Notification</th>
                    <th className="px-3 py-3">Outlet</th>
                    <th className="px-3 py-3">Tipe</th>
                    <th className="px-3 py-3">Severity</th>
                    <th className="px-3 py-3">Status</th>
                    <th className="px-3 py-3">Waktu</th>
                    <th className="px-3 py-3 text-right">Aksi</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {rows.map((row) => (
                    <tr key={row.id} className="align-top">
                      <td className="px-3 py-3">
                        <div className="font-medium text-slate-900">{row.title}</div>
                        <div className="mt-1 max-w-xl text-xs text-slate-500">{row.message}</div>
                      </td>
                      <td className="px-3 py-3 text-slate-700">{row.outlet?.name ?? "-"}</td>
                      <td className="px-3 py-3 text-slate-700">{typeLabel(row.type)}</td>
                      <td className="px-3 py-3">
                        <Badge variant={severityBadge(row.severity)}>{row.severity}</Badge>
                      </td>
                      <td className="px-3 py-3">
                        <Badge variant={statusBadge(row.status)}>{row.status}</Badge>
                      </td>
                      <td className="px-3 py-3 text-slate-700">{formatDateTime(row.created_at)}</td>
                      <td className="px-3 py-3">
                        <div className="flex justify-end gap-2">
                          <Button variant="outline" onClick={() => setSelected(row)}>
                            Detail
                          </Button>
                          {row.status === "unread" ? (
                            <Button
                              variant="outline"
                              loading={markReadMutation.isPending}
                              onClick={() => markReadMutation.mutate(row.id)}
                            >
                              Read
                            </Button>
                          ) : null}
                          {row.status !== "resolved" ? (
                            <Button
                              variant="outline"
                              loading={resolveMutation.isPending}
                              onClick={() => resolveMutation.mutate(row.id)}
                            >
                              Resolve
                            </Button>
                          ) : null}
                          <Button variant="danger" onClick={() => setDeleting(row)}>
                            Hapus
                          </Button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        )}

        <Pagination
          meta={notificationsQuery.data?.meta}
          onPageChange={(nextPage) => setFilters((prev) => ({ ...prev, page: nextPage }))}
        />

        <Modal
          open={Boolean(selected)}
          title="Detail Notification"
          onClose={() => setSelected(null)}
          footer={
            <Button variant="outline" onClick={() => setSelected(null)}>
              Tutup
            </Button>
          }
        >
          {detailQuery.isLoading ? (
            <div className="text-sm text-slate-500">Memuat detail...</div>
          ) : detail ? (
            <div className="space-y-4 text-sm">
              <div>
                <div className="font-semibold text-slate-900">{detail.title}</div>
                <div className="mt-1 text-slate-600">{detail.message}</div>
              </div>

              <div className="grid gap-3 md:grid-cols-2">
                <div className="rounded-xl bg-slate-50 p-3">
                  <div className="text-xs text-slate-500">Outlet</div>
                  <div className="font-medium text-slate-900">{detail.outlet?.name ?? "-"}</div>
                </div>
                <div className="rounded-xl bg-slate-50 p-3">
                  <div className="text-xs text-slate-500">Source</div>
                  <div className="font-medium text-slate-900">
                    {detail.source_type ?? "-"} #{detail.source_id ?? "-"}
                  </div>
                </div>
                <div className="rounded-xl bg-slate-50 p-3">
                  <div className="text-xs text-slate-500">Read At</div>
                  <div className="font-medium text-slate-900">{formatDateTime(detail.read_at)}</div>
                </div>
                <div className="rounded-xl bg-slate-50 p-3">
                  <div className="text-xs text-slate-500">Resolved At</div>
                  <div className="font-medium text-slate-900">
                    {formatDateTime(detail.resolved_at)}
                  </div>
                </div>
              </div>

              <div>
                <div className="mb-2 font-semibold text-slate-900">Data</div>
                <pre className="max-h-56 overflow-auto rounded-xl bg-slate-950 p-3 text-xs text-slate-50">
                  {JSON.stringify(detail.data ?? {}, null, 2)}
                </pre>
              </div>

              <div>
                <div className="mb-2 font-semibold text-slate-900">Log</div>
                <div className="space-y-2">
                  {(detail.logs ?? []).map((log) => (
                    <div key={log.id} className="rounded-xl border border-slate-200 p-3">
                      <div className="flex items-center justify-between gap-3">
                        <div className="font-medium text-slate-900">{log.action}</div>
                        <Badge variant={log.status === "success" ? "success" : "warning"}>
                          {log.status}
                        </Badge>
                      </div>
                      <div className="mt-1 text-xs text-slate-500">{formatDateTime(log.logged_at)}</div>
                      <div className="mt-2 text-slate-600">{log.message ?? "-"}</div>
                    </div>
                  ))}
                  {!detail.logs?.length ? (
                    <div className="rounded-xl border border-dashed border-slate-200 p-4 text-slate-500">
                      Belum ada log untuk notification ini.
                    </div>
                  ) : null}
                </div>
              </div>
            </div>
          ) : null}
        </Modal>

        <ConfirmDialog
          open={Boolean(deleting)}
          title="Hapus notification"
          description={`Notification "${deleting?.title ?? ""}" akan dihapus.`}
          loading={deleteMutation.isPending}
          onClose={() => setDeleting(null)}
          onConfirm={() => deleting && deleteMutation.mutate(deleting.id)}
        />
      </div>
    </PermissionWrapper>
  );
}
```
</details>

<a id="file-srcmodulesadminpagesoutletmaterialstockspagetsx"></a>
### src\modules\admin\pages\OutletMaterialStocksPage.tsx
- SHA: `5c0c569e5514`  
- Ukuran: 17 KB
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

const formatNumber = (value: number | string | null | undefined) =>
  Number(value ?? 0).toLocaleString("id-ID");

const formatDateTime = (value: string | null | undefined) => {
  if (!value) {
    return "-";
  }

  return new Intl.DateTimeFormat("id-ID", {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(new Date(value));
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

  const getAvailableStock = (stock: OutletMaterialStock) => {
    return Number(stock.qty_on_hand ?? 0) - Number(stock.qty_reserved ?? 0);
  };

  return (
    <PermissionWrapper permission="outlet_material_stocks.view">
      <div className="space-y-5">
        <PageHeader
          title="Stok Bahan Per Outlet"
          description="Pantau dan update saldo stok bahan baku per outlet."
          actions={<Button onClick={openCreate}>Update Stok</Button>}
        />

        <Card>
          <div className="grid gap-4 lg:grid-cols-[1.3fr_1fr_1fr_auto] lg:items-end">
            <Input
              label="Pencarian"
              placeholder="Cari bahan atau outlet..."
              value={search}
              onChange={(event) => setSearch(event.target.value)}
            />

            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">
                Outlet
              </label>
              <select
                className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm text-slate-800 shadow-sm outline-none transition focus:border-[var(--brand-brick)] focus:ring-2 focus:ring-orange-100"
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
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">
                Bahan Baku
              </label>
              <select
                className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm text-slate-800 shadow-sm outline-none transition focus:border-[var(--brand-brick)] focus:ring-2 focus:ring-orange-100"
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

            <div className="rounded-xl border border-[var(--color-border)] bg-[var(--brand-brick-soft)] px-4 py-3 text-sm">
              <div className="text-xs font-medium uppercase tracking-wide text-[var(--brand-brick)]">
                Total Data
              </div>
              <div className="mt-1 text-lg font-semibold text-[var(--color-text)]">
                {stocks.length}
              </div>
            </div>
          </div>
        </Card>

        {stocksQuery.isLoading ? (
          <Card>
            <div className="flex min-h-40 items-center justify-center text-sm text-[var(--color-muted)]">
              Memuat stok bahan per outlet...
            </div>
          </Card>
        ) : stocksQuery.isError ? (
          <PageErrorState onRetry={() => void stocksQuery.refetch()} />
        ) : !stocks.length ? (
          <PageEmptyState
            title="Belum ada data stok outlet"
            description="Data stok belum tersedia atau tidak cocok dengan filter yang dipilih."
          />
        ) : (
          <div className="grid gap-4 xl:grid-cols-2">
            {stocks.map((stock) => {
              const rawMaterial = getRawMaterial(stock);
              const stockVariant = getStockVariant(stock);
              const unitCode = rawMaterial?.unit?.code ?? "";
              const minimumStock = Number(rawMaterial?.minimum_stock ?? 0);
              const qtyOnHand = Number(stock.qty_on_hand ?? 0);
              const qtyReserved = Number(stock.qty_reserved ?? 0);
              const availableStock = getAvailableStock(stock);

              return (
                <Card key={stock.id}>
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                    <div className="min-w-0">
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="truncate text-base font-semibold text-slate-950">
                          {rawMaterial?.name ?? "-"}
                        </h3>
                        <Badge variant={stockVariant}>
                          {stockVariant === "danger" ? "Low Stock" : "Aman"}
                        </Badge>
                      </div>

                      <div className="mt-1 flex flex-wrap items-center gap-2 text-sm text-slate-500">
                        <span>{stock.outlet?.name ?? "-"}</span>
                        <span className="h-1 w-1 rounded-full bg-slate-300" />
                        <span>{rawMaterial?.category?.name ?? "Tanpa kategori"}</span>
                      </div>
                    </div>

                    <Button variant="outline" onClick={() => openEdit(stock)}>
                      Edit Stok
                    </Button>
                  </div>

                  <div className="mt-5 grid gap-3 sm:grid-cols-3">
                    <div className="rounded-2xl border border-slate-200 bg-white p-4">
                      <div className="text-xs font-medium uppercase tracking-wide text-slate-500">
                        Qty On Hand
                      </div>
                      <div className="mt-2 text-xl font-semibold text-slate-950">
                        {formatNumber(qtyOnHand)}
                      </div>
                      <div className="mt-1 text-xs text-slate-500">{unitCode || "-"}</div>
                    </div>

                    <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                      <div className="text-xs font-medium uppercase tracking-wide text-slate-500">
                        Reserved
                      </div>
                      <div className="mt-2 text-xl font-semibold text-slate-950">
                        {formatNumber(qtyReserved)}
                      </div>
                      <div className="mt-1 text-xs text-slate-500">{unitCode || "-"}</div>
                    </div>

                    <div
                      className={[
                        "rounded-2xl border p-4",
                        stockVariant === "danger"
                          ? "border-red-200 bg-red-50"
                          : "border-emerald-200 bg-emerald-50",
                      ].join(" ")}
                    >
                      <div
                        className={[
                          "text-xs font-medium uppercase tracking-wide",
                          stockVariant === "danger" ? "text-red-600" : "text-emerald-600",
                        ].join(" ")}
                      >
                        Tersedia
                      </div>
                      <div className="mt-2 text-xl font-semibold text-slate-950">
                        {formatNumber(availableStock)}
                      </div>
                      <div className="mt-1 text-xs text-slate-500">{unitCode || "-"}</div>
                    </div>
                  </div>

                  <div className="mt-4 grid gap-3 rounded-2xl border border-slate-200 bg-slate-50/70 p-4 text-sm sm:grid-cols-2">
                    <div>
                      <div className="text-xs font-medium text-slate-500">Minimum Stok</div>
                      <div className="mt-1 font-semibold text-slate-900">
                        {formatNumber(minimumStock)} {unitCode}
                      </div>
                    </div>

                    <div>
                      <div className="text-xs font-medium text-slate-500">Last Movement</div>
                      <div className="mt-1 font-semibold text-slate-900">
                        {formatDateTime(stock.last_movement_at)}
                      </div>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        )}

        <Modal
          open={openModal}
          title={editingStock ? "Edit Stok Outlet" : "Update Stok Outlet"}
          description="Pilih outlet dan bahan baku, lalu isi saldo stok yang tersedia dan sedang reserved."
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
          <div className="space-y-5">
            <div className="rounded-2xl border border-slate-200 bg-white p-4">
              <div className="mb-4">
                <h3 className="text-sm font-semibold text-slate-900">Identitas Stok</h3>
                <p className="mt-1 text-xs text-slate-500">
                  Hubungkan saldo stok dengan outlet dan bahan baku yang sesuai.
                </p>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">
                    Outlet
                  </label>
                  <select
                    className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm text-slate-800 shadow-sm outline-none transition focus:border-[var(--brand-brick)] focus:ring-2 focus:ring-orange-100"
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
                    className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm text-slate-800 shadow-sm outline-none transition focus:border-[var(--brand-brick)] focus:ring-2 focus:ring-orange-100"
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
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-slate-50/70 p-4">
              <div className="mb-4">
                <h3 className="text-sm font-semibold text-slate-900">Saldo Stok</h3>
                <p className="mt-1 text-xs text-slate-500">
                  Qty on hand adalah saldo fisik. Qty reserved adalah saldo yang sudah dialokasikan.
                </p>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
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
            </div>
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
- SHA: `53e50b10a8ad`  
- Ukuran: 21 KB
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
      <div className="space-y-5">
        <PageHeader
          title="Outlets"
          description="Kelola cabang, data operasional, dan setting per outlet."
          actions={<Button onClick={openCreate}>Tambah Outlet</Button>}
        />

        <Card>
          <div className="grid gap-3 md:grid-cols-[1fr_auto] md:items-end">
            <Input
              label="Pencarian"
              placeholder="Cari code, nama, kota, atau provinsi..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />

            <div className="rounded-xl border border-[var(--color-border)] bg-[var(--brand-brick-soft)] px-4 py-3 text-sm">
              <div className="text-xs font-medium uppercase tracking-wide text-[var(--brand-brick)]">
                Total Outlet
              </div>
              <div className="mt-1 text-lg font-semibold text-[var(--color-text)]">
                {outlets.length}
              </div>
            </div>
          </div>
        </Card>

        {outletsQuery.isLoading ? (
          <Card>
            <div className="flex min-h-40 items-center justify-center text-sm text-[var(--color-muted)]">
              Memuat data outlet...
            </div>
          </Card>
        ) : outletsQuery.isError ? (
          <PageErrorState onRetry={() => void outletsQuery.refetch()} />
        ) : !outlets.length ? (
          <PageEmptyState
            title="Belum ada outlet"
            description="Data outlet belum tersedia atau tidak cocok dengan pencarian."
          />
        ) : (
          <div className="grid gap-4 lg:grid-cols-2">
            {outlets.map((outlet) => (
              <Card
                key={outlet.id}
                title={outlet.name}
                description={`${outlet.code} • ${outlet.city ?? "-"}, ${outlet.province ?? "-"}`}
                actions={
                  <Badge variant={outlet.is_active ? "success" : "danger"}>
                    {outlet.is_active ? "Aktif" : "Nonaktif"}
                  </Badge>
                }
              >
                <div className="space-y-4">
                  <div className="rounded-2xl border border-slate-100 bg-slate-50/70 p-4">
                    <div className="grid gap-3 text-sm sm:grid-cols-2">
                      <div>
                        <div className="text-xs font-medium uppercase tracking-wide text-slate-400">
                          Alamat
                        </div>
                        <div className="mt-1 line-clamp-2 font-medium text-slate-700">
                          {outlet.address ?? "-"}
                        </div>
                      </div>

                      <div>
                        <div className="text-xs font-medium uppercase tracking-wide text-slate-400">
                          Jam Operasional
                        </div>
                        <div className="mt-1 font-medium text-slate-700">
                          {outlet.opening_time ?? "-"} - {outlet.closing_time ?? "-"}
                        </div>
                      </div>

                      <div>
                        <div className="text-xs font-medium uppercase tracking-wide text-slate-400">
                          Kontak
                        </div>
                        <div className="mt-1 font-medium text-slate-700">
                          {outlet.phone ?? "-"}
                        </div>
                      </div>

                      <div>
                        <div className="text-xs font-medium uppercase tracking-wide text-slate-400">
                          Email
                        </div>
                        <div className="mt-1 truncate font-medium text-slate-700">
                          {outlet.email ?? "-"}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col gap-2 sm:flex-row sm:flex-wrap">
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
                </div>
              </Card>
            ))}
          </div>
        )}

        <Modal
          open={openOutletModal}
          title={editingOutlet ? "Edit Outlet" : "Tambah Outlet"}
          description="Lengkapi identitas outlet dan informasi operasional cabang."
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
          <div className="max-h-[72vh] space-y-6 overflow-y-auto pr-1">
            <div className="rounded-2xl border border-slate-200 bg-white p-4">
              <div className="mb-4">
                <h3 className="text-sm font-semibold text-slate-900">Identitas Outlet</h3>
                <p className="mt-1 text-xs text-slate-500">
                  Data utama cabang yang tampil di dashboard dan transaksi.
                </p>
              </div>

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
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-slate-50/60 p-4">
              <div className="mb-4">
                <h3 className="text-sm font-semibold text-slate-900">Lokasi</h3>
                <p className="mt-1 text-xs text-slate-500">
                  Informasi alamat dan koordinat outlet.
                </p>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <Input
                  label="City"
                  value={outletForm.city ?? ""}
                  onChange={(e) => setOutletForm((prev) => ({ ...prev, city: e.target.value }))}
                />
                <Input
                  label="Province"
                  value={outletForm.province ?? ""}
                  onChange={(e) =>
                    setOutletForm((prev) => ({ ...prev, province: e.target.value }))
                  }
                />
                <Input
                  label="Postal Code"
                  value={outletForm.postal_code ?? ""}
                  onChange={(e) =>
                    setOutletForm((prev) => ({ ...prev, postal_code: e.target.value }))
                  }
                />
                <Input
                  label="Address"
                  value={outletForm.address ?? ""}
                  onChange={(e) =>
                    setOutletForm((prev) => ({ ...prev, address: e.target.value }))
                  }
                />
                <Input
                  label="Latitude"
                  value={outletForm.latitude ?? ""}
                  onChange={(e) =>
                    setOutletForm((prev) => ({ ...prev, latitude: e.target.value }))
                  }
                />
                <Input
                  label="Longitude"
                  value={outletForm.longitude ?? ""}
                  onChange={(e) =>
                    setOutletForm((prev) => ({ ...prev, longitude: e.target.value }))
                  }
                />
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-4">
              <div className="mb-4">
                <h3 className="text-sm font-semibold text-slate-900">Operasional</h3>
                <p className="mt-1 text-xs text-slate-500">
                  Atur jam operasional dan status outlet.
                </p>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <Input
                  label="Opening Time"
                  type="time"
                  value={outletForm.opening_time ?? ""}
                  onChange={(e) =>
                    setOutletForm((prev) => ({ ...prev, opening_time: e.target.value }))
                  }
                />
                <Input
                  label="Closing Time"
                  type="time"
                  value={outletForm.closing_time ?? ""}
                  onChange={(e) =>
                    setOutletForm((prev) => ({ ...prev, closing_time: e.target.value }))
                  }
                />
                <div className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 md:col-span-2">
                  <Checkbox
                    label="Outlet aktif"
                    checked={Boolean(outletForm.is_active)}
                    onChange={(e) =>
                      setOutletForm((prev) => ({ ...prev, is_active: e.target.checked }))
                    }
                  />
                </div>
              </div>
            </div>
          </div>
        </Modal>

        <Modal
          open={openSettingModal}
          title={`Setting Outlet${settingOutlet ? ` — ${settingOutlet.name}` : ""}`}
          description="Atur pajak, prefix dokumen, struk, stok, dan notifikasi outlet."
          onClose={() => setOpenSettingModal(false)}
          footer={
            <>
              <Button variant="outline" onClick={() => setOpenSettingModal(false)}>
                Batal
              </Button>
              <Button
                loading={saveSettingMutation.isPending}
                onClick={() => saveSettingMutation.mutate()}
              >
                Simpan Setting
              </Button>
            </>
          }
        >
          <div className="max-h-[72vh] space-y-6 overflow-y-auto pr-1">
            <div className="rounded-2xl border border-slate-200 bg-white p-4">
              <div className="mb-4">
                <h3 className="text-sm font-semibold text-slate-900">Biaya & Regional</h3>
                <p className="mt-1 text-xs text-slate-500">
                  Konfigurasi pajak, service charge, mata uang, dan zona waktu.
                </p>
              </div>

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
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-slate-50/60 p-4">
              <div className="mb-4">
                <h3 className="text-sm font-semibold text-slate-900">Dokumen & Struk</h3>
                <p className="mt-1 text-xs text-slate-500">
                  Prefix transaksi dan teks footer struk.
                </p>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
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
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-4">
              <div className="mb-4">
                <h3 className="text-sm font-semibold text-slate-900">Stok & Notifikasi</h3>
                <p className="mt-1 text-xs text-slate-500">
                  Pengaturan toleransi stok dan notifikasi stok rendah.
                </p>
              </div>

              <div className="grid gap-3">
                <div className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3">
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
                </div>
                <div className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3">
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
- SHA: `dd129187357a`  
- Ukuran: 6 KB
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
      <div className="space-y-5">
        <PageHeader
          title="Permissions"
          description="Kelola daftar permission sistem untuk pembatasan akses fitur."
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
          <Card>
            <div className="flex min-h-40 items-center justify-center text-sm text-[var(--color-muted)]">
              Memuat data permission...
            </div>
          </Card>
        ) : permissionsQuery.isError ? (
          <PageErrorState onRetry={() => void permissionsQuery.refetch()} />
        ) : !permissions.length ? (
          <PageEmptyState
            title="Belum ada permission"
            description="Permission sistem belum tersedia."
          />
        ) : (
          <Card>
            <div className="mb-4 flex flex-col gap-2 border-b border-slate-100 pb-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h2 className="text-sm font-semibold text-slate-900">Daftar Permission</h2>
                <p className="mt-1 text-xs text-slate-500">
                  Total {permissions.length} permission terdaftar.
                </p>
              </div>

              <Button variant="outline" onClick={() => void permissionsQuery.refetch()}>
                Refresh
              </Button>
            </div>

            <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
              {permissions.map((permission) => (
                <div
                  key={permission.id}
                  className="group rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition hover:border-orange-200 hover:bg-orange-50/30"
                >
                  <div className="flex min-h-24 flex-col justify-between gap-4">
                    <div className="min-w-0">
                      <div className="truncate text-sm font-semibold text-slate-900">
                        {permission.name}
                      </div>
                      <div className="mt-2 inline-flex rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 text-xs font-medium text-slate-500">
                        {permission.guard_name}
                      </div>
                    </div>

                    <div className="flex flex-col gap-2 sm:flex-row sm:justify-end">
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
                </div>
              ))}
            </div>
          </Card>
        )}

        <Modal
          open={open}
          title={editing ? "Edit Permission" : "Tambah Permission"}
          description="Gunakan format nama permission yang konsisten dengan backend."
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
          <div className="space-y-4">
            <Input
              label="Nama Permission"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="contoh: users.view"
            />

            <div className="rounded-xl border border-orange-200 bg-[var(--brand-brick-soft)] px-4 py-3 text-xs leading-5 text-orange-800">
              Permission sebaiknya mengikuti pola modul.aksi, misalnya users.view,
              users.create, atau reports.export.
            </div>
          </div>
        </Modal>
      </div>
    </PermissionWrapper>
  );
}
```
</details>

<a id="file-srcmodulesadminpagesproductbomspagetsx"></a>
### src\modules\admin\pages\ProductBomsPage.tsx
- SHA: `a1e9b41d0134`  
- Ukuran: 15 KB
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
      <div className="space-y-5">
        <PageHeader
          title="BOM / Resep Produk"
          description="Kelola komposisi bahan baku untuk setiap produk."
          actions={<Button onClick={openCreate}>Tambah BOM</Button>}
        />

        <Card>
          <div className="grid gap-4 lg:grid-cols-[1fr_280px] lg:items-end">
            <Input
              label="Pencarian"
              placeholder="Cari BOM, produk, atau bahan baku..."
              value={search}
              onChange={(event) => setSearch(event.target.value)}
            />

            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">
                Produk
              </label>
              <select
                className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm text-slate-800 shadow-sm outline-none transition focus:border-[var(--brand-brick)] focus:ring-2 focus:ring-orange-100"
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
          </div>
        </Card>

        {bomsQuery.isLoading ? (
          <Card>
            <div className="flex min-h-40 items-center justify-center text-sm text-[var(--color-muted)]">
              Memuat BOM produk...
            </div>
          </Card>
        ) : bomsQuery.isError ? (
          <PageErrorState onRetry={() => void bomsQuery.refetch()} />
        ) : !boms.length ? (
          <PageEmptyState
            title="Belum ada BOM produk"
            description="Tambahkan resep produk untuk mengatur kebutuhan bahan baku."
          />
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
                <div className="space-y-4">
                  <div className="grid gap-3 sm:grid-cols-2">
                    <div className="rounded-2xl border border-slate-200 bg-slate-50/70 p-4">
                      <div className="text-xs font-medium uppercase tracking-wide text-slate-500">
                        Jumlah Item
                      </div>
                      <div className="mt-1 text-lg font-semibold text-slate-900">
                        {bom.items?.length ?? 0}
                      </div>
                    </div>

                    <div className="rounded-2xl border border-slate-200 bg-slate-50/70 p-4">
                      <div className="text-xs font-medium uppercase tracking-wide text-slate-500">
                        Status Resep
                      </div>
                      <div className="mt-2">
                        <Badge variant={bom.is_active ? "success" : "default"}>
                          {bom.is_active ? "Digunakan" : "Arsip"}
                        </Badge>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="mb-2 text-xs font-semibold uppercase tracking-wide text-slate-500">
                      Catatan
                    </div>
                    <div className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm leading-6 text-slate-600">
                      {bom.notes ?? "-"}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                      Komposisi Bahan
                    </div>

                    {(bom.items ?? []).slice(0, 5).length ? (
                      <div className="space-y-2">
                        {(bom.items ?? []).slice(0, 5).map((item) => (
                          <div
                            key={item.id}
                            className="flex flex-col gap-2 rounded-2xl border border-slate-200 bg-slate-50/70 px-4 py-3 sm:flex-row sm:items-center sm:justify-between"
                          >
                            <div className="min-w-0">
                              <div className="truncate text-sm font-semibold text-slate-900">
                                {item.raw_material?.name ?? item.rawMaterial?.name ?? "-"}
                              </div>
                              <div className="mt-1 text-xs text-slate-500">
                                Waste {Number(item.waste_percent ?? 0).toLocaleString("id-ID")}%
                              </div>
                            </div>

                            <div className="shrink-0 rounded-full border border-orange-200 bg-orange-50 px-2.5 py-1 text-xs font-semibold text-orange-700">
                              {Number(item.qty ?? 0).toLocaleString("id-ID")}{" "}
                              {item.unit?.code ?? ""}
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="rounded-2xl border border-dashed border-amber-200 bg-amber-50/60 px-4 py-3 text-sm text-amber-700">
                        Belum ada bahan baku pada BOM ini.
                      </div>
                    )}
                  </div>

                  <div className="flex flex-col gap-2 border-t border-slate-100 pt-4 sm:flex-row sm:justify-end">
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
          <div className="max-h-[72vh] space-y-6 overflow-y-auto pr-1">
            <div className="rounded-2xl border border-slate-200 bg-white p-4">
              <div className="mb-4">
                <h3 className="text-sm font-semibold text-slate-900">
                  Informasi BOM
                </h3>
                <p className="mt-1 text-xs text-slate-500">
                  Tentukan produk, versi resep, status aktif, dan catatan produksi.
                </p>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">
                    Produk
                  </label>
                  <select
                    className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm text-slate-800 shadow-sm outline-none transition focus:border-[var(--brand-brick)] focus:ring-2 focus:ring-orange-100"
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

                <div className="md:col-span-2">
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
                </div>

                <div className="md:col-span-2 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3">
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
            </div>

            <div className="rounded-2xl border border-slate-200 bg-slate-50/60 p-4">
              <div className="mb-4">
                <h3 className="text-sm font-semibold text-slate-900">
                  Komposisi Bahan Baku
                </h3>
                <p className="mt-1 text-xs text-slate-500">
                  Atur bahan, satuan, kuantitas, dan waste percent untuk resep produk.
                </p>
              </div>

              <BomItemsEditor
                value={form.items}
                onChange={(items) => setForm((prev) => ({ ...prev, items }))}
                rawMaterials={rawMaterials}
                units={units}
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

<a id="file-srcmodulesadminpagesproductbundlespagetsx"></a>
### src\modules\admin\pages\ProductBundlesPage.tsx
- SHA: `ea602e497aff`  
- Ukuran: 3 KB
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
          <div className="space-y-3">
            {product.bundle_items?.map((item) => (
              <div
                key={item.id}
                className="rounded-2xl border border-slate-200 bg-slate-50/70 p-4 transition-colors hover:border-orange-200 hover:bg-orange-50/40"
              >
                <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                  <div className="min-w-0">
                    <div className="truncate text-sm font-semibold text-slate-900">
                      {item.bundled_product?.name ?? `Produk #${item.bundled_product_id}`}
                    </div>
                    <div className="mt-1 text-xs font-medium text-slate-500">
                      Item dalam paket
                    </div>
                  </div>

                  <div className="shrink-0 rounded-full border border-amber-200 bg-amber-50 px-2.5 py-1 text-xs font-semibold text-amber-700">
                    Qty {item.qty}
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="rounded-2xl border border-dashed border-amber-200 bg-amber-50/60 px-4 py-3 text-sm text-amber-700">
            Produk bundle ini belum punya item.
          </div>
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
- SHA: `e5cd80e32f49`  
- Ukuran: 9 KB
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
      <div className="space-y-5">
        <PageHeader
          title="Product Categories"
          description="Kelola kategori menu Chicken Alibaba."
          actions={<Button onClick={openCreate}>Tambah Kategori</Button>}
        />

        <Card>
          <div className="grid gap-3 md:grid-cols-[1fr_auto] md:items-end">
            <Input
              label="Pencarian"
              placeholder="Cari nama atau slug kategori..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />

            <div className="rounded-xl border border-[var(--color-border)] bg-[var(--brand-brick-soft)] px-4 py-3 text-sm">
              <div className="text-xs font-medium uppercase tracking-wide text-[var(--brand-brick)]">
                Total Kategori
              </div>
              <div className="mt-1 text-lg font-semibold text-[var(--color-text)]">
                {categories.length}
              </div>
            </div>
          </div>
        </Card>

        {categoriesQuery.isLoading ? (
          <Card>
            <div className="flex min-h-40 items-center justify-center text-sm text-[var(--color-muted)]">
              Memuat kategori produk...
            </div>
          </Card>
        ) : categoriesQuery.isError ? (
          <PageErrorState onRetry={() => void categoriesQuery.refetch()} />
        ) : !categories.length ? (
          <PageEmptyState title="Belum ada kategori produk" />
        ) : (
          <Card>
            <div className="grid gap-3">
              {categories.map((category) => (
                <div
                  key={category.id}
                  className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition hover:border-orange-200 hover:bg-orange-50/30"
                >
                  <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                    <div className="min-w-0 space-y-2">
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="truncate text-base font-semibold text-slate-950">
                          {category.name}
                        </h3>
                        <Badge variant={category.is_active ? "success" : "danger"}>
                          {category.is_active ? "Aktif" : "Nonaktif"}
                        </Badge>
                      </div>

                      <div className="flex flex-wrap gap-2 text-xs text-slate-500">
                        <span className="rounded-full bg-slate-50 px-2.5 py-1">
                          Slug:{" "}
                          <span className="font-medium text-slate-700">
                            {category.slug ?? "-"}
                          </span>
                        </span>
                        <span className="rounded-full bg-slate-50 px-2.5 py-1">
                          Sort:{" "}
                          <span className="font-medium text-slate-700">
                            {category.sort_order ?? 0}
                          </span>
                        </span>
                        <span className="rounded-full bg-slate-50 px-2.5 py-1">
                          Produk:{" "}
                          <span className="font-medium text-slate-700">
                            {category.products_count ?? 0}
                          </span>
                        </span>
                      </div>
                    </div>

                    <div className="flex flex-col gap-2 sm:flex-row sm:items-center lg:justify-end">
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
          <div className="space-y-5">
            <div className="rounded-2xl border border-slate-200 bg-slate-50/60 p-4">
              <h3 className="text-sm font-semibold text-slate-900">Informasi Kategori</h3>
              <p className="mt-1 text-xs leading-5 text-slate-500">
                Atur nama, slug, urutan tampil, dan status aktif kategori produk.
              </p>
            </div>

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

              <div className="flex items-end">
                <div className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3">
                  <Checkbox
                    label="Kategori aktif"
                    checked={Boolean(form.is_active)}
                    onChange={(e) => setForm((prev) => ({ ...prev, is_active: e.target.checked }))}
                  />
                </div>
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

<a id="file-srcmodulesadminpagesproductmodifierspagetsx"></a>
### src\modules\admin\pages\ProductModifiersPage.tsx
- SHA: `c609c46bf004`  
- Ukuran: 3 KB
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
          <div className="space-y-3">
            {product.modifier_groups?.map((group) => (
              <div
                key={group.id}
                className="rounded-2xl border border-slate-200 bg-slate-50/70 p-4 transition-colors hover:border-orange-200 hover:bg-orange-50/40"
              >
                <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                  <div className="min-w-0">
                    <div className="truncate text-sm font-semibold text-slate-900">
                      {group.name}
                    </div>
                    <div className="mt-2 flex flex-wrap gap-2 text-xs">
                      <span className="rounded-full border border-slate-200 bg-white px-2.5 py-1 font-medium text-slate-600">
                        Min {group.min_select ?? 0}
                      </span>
                      <span className="rounded-full border border-slate-200 bg-white px-2.5 py-1 font-medium text-slate-600">
                        Max {group.max_select ?? 1}
                      </span>
                    </div>
                  </div>

                  <div className="shrink-0 rounded-full border border-slate-200 bg-white px-2.5 py-1 text-xs font-semibold text-slate-600">
                    {group.options?.length ?? 0} option
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="rounded-2xl border border-dashed border-amber-200 bg-amber-50/60 px-4 py-3 text-sm text-amber-700">
            Produk ini belum memiliki modifier group.
          </div>
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
- SHA: `04319c62c1e5`  
- Ukuran: 60 KB
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
      <div className="space-y-5">
        <PageHeader
          title="Products"
          description="Kelola menu, harga outlet, status jual, varian, modifier, dan paket."
          actions={<Button onClick={openCreate}>Tambah Produk</Button>}
        />

        <Card>
          <div className="grid gap-4 xl:grid-cols-[minmax(0,1.4fr)_repeat(3,minmax(160px,1fr))]">
            <Input
              label="Pencarian"
              placeholder="Cari nama, SKU, code, atau slug..."
              value={search}
              onChange={(e) => {
                setPage(1);
                setSearch(e.target.value);
              }}
            />

            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">Kategori</label>
              <select
                className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm text-slate-800 shadow-sm outline-none transition focus:border-[var(--brand-brick)] focus:ring-2 focus:ring-orange-100"
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
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">Tipe Produk</label>
              <select
                className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm text-slate-800 shadow-sm outline-none transition focus:border-[var(--brand-brick)] focus:ring-2 focus:ring-orange-100"
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
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">Status</label>
              <select
                className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm text-slate-800 shadow-sm outline-none transition focus:border-[var(--brand-brick)] focus:ring-2 focus:ring-orange-100"
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
          </div>
        </Card>

        {productsQuery.isLoading ? (
          <Card>
            <div className="flex min-h-40 items-center justify-center text-sm text-[var(--color-muted)]">
              Memuat produk...
            </div>
          </Card>
        ) : productsQuery.isError ? (
          <PageErrorState onRetry={() => void productsQuery.refetch()} />
        ) : !products.length ? (
          <PageEmptyState title="Belum ada produk" />
        ) : (
          <Card>
            <div className="overflow-x-auto rounded-xl border border-[var(--color-border)]">
              <table className="min-w-full divide-y divide-slate-200 text-sm">
                <thead className="bg-slate-50">
                  <tr className="text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
                    <th className="px-4 py-3">Produk</th>
                    <th className="px-4 py-3">Kategori</th>
                    <th className="px-4 py-3">Harga Dasar</th>
                    <th className="px-4 py-3">Tipe</th>
                    <th className="px-4 py-3">Tag</th>
                    <th className="px-4 py-3">Status</th>
                    <th className="px-4 py-3 text-right">Aksi</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 bg-white">
                  {products.map((product) => (
                    <tr
                      key={product.id}
                      className="align-top transition-colors hover:bg-orange-50/40"
                    >
                      <td className="px-4 py-4">
                        <div className="max-w-sm">
                          <div className="font-semibold text-slate-900">{product.name}</div>
                          <div className="mt-1 text-xs leading-5 text-slate-500">
                            SKU: {product.sku ?? "-"} • Code: {product.code ?? "-"}
                          </div>
                          {product.image_url ? (
                            <div className="mt-2 max-w-xs break-all rounded-lg bg-slate-50 px-2 py-1 text-xs text-sky-700">
                              {product.image_url}
                            </div>
                          ) : null}
                        </div>
                      </td>

                      <td className="px-4 py-4 text-slate-600">{product.category?.name ?? "-"}</td>

                      <td className="whitespace-nowrap px-4 py-4 font-semibold text-slate-800">
                        Rp {Number(product.base_price ?? 0).toLocaleString("id-ID")}
                      </td>

                      <td className="px-4 py-4">
                        <Badge variant={product.product_type === "bundle" ? "warning" : "info"}>
                          {product.product_type}
                        </Badge>
                      </td>

                      <td className="px-4 py-4">
                        <div className="flex max-w-md flex-wrap gap-2">
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

                      <td className="px-4 py-4">
                        <Badge variant={product.is_active ? "success" : "danger"}>
                          {product.is_active ? "Aktif" : "Nonaktif"}
                        </Badge>
                      </td>

                      <td className="px-4 py-4">
                        <div className="flex flex-col justify-end gap-2 sm:flex-row">
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

            <div className="mt-4 flex flex-col gap-3 border-t border-slate-100 pt-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="text-sm text-slate-500">
                Halaman{" "}
                <span className="font-semibold text-slate-800">
                  {meta?.current_page ?? 1}
                </span>{" "}
                dari <span className="font-semibold text-slate-800">{totalPages}</span>
              </div>

              <div className="flex flex-col gap-2 sm:flex-row">
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
          <div className="max-h-[72vh] space-y-6 overflow-y-auto pr-1">
            <div className="rounded-2xl border border-slate-200 bg-white p-4">
              <div className="mb-4">
                <h3 className="text-sm font-semibold text-slate-900">Informasi Produk</h3>
                <p className="mt-1 text-xs text-slate-500">
                  Data utama produk yang tampil di katalog dan POS.
                </p>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">Kategori</label>
                  <select
                    className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm text-slate-800 shadow-sm outline-none transition focus:border-[var(--brand-brick)] focus:ring-2 focus:ring-orange-100"
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
                  <label className="mb-2 block text-sm font-medium text-slate-700">
                    Product Type
                  </label>
                  <select
                    className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm text-slate-800 shadow-sm outline-none transition focus:border-[var(--brand-brick)] focus:ring-2 focus:ring-orange-100"
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
                    className="min-h-[110px] w-full resize-y rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm text-slate-800 shadow-sm outline-none transition placeholder:text-slate-400 focus:border-[var(--brand-brick)] focus:ring-2 focus:ring-orange-100"
                    value={form.description ?? ""}
                    onChange={(e) =>
                      setForm((prev) => ({
                        ...prev,
                        description: e.target.value,
                      }))
                    }
                  />
                </div>

                <div className="md:col-span-2 grid gap-3 rounded-xl border border-slate-200 bg-slate-50 p-4 md:grid-cols-2">
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
            </div>

            <Card title="Harga per Outlet" description="Pengaturan harga penjualan per cabang.">
              <div className="space-y-4">
                {(form.prices ?? []).map((price, index) => (
                  <div
                    key={index}
                    className="rounded-2xl border border-slate-200 bg-slate-50/70 p-4"
                  >
                    <div className="mb-4 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                      <div>
                        <h4 className="text-sm font-semibold text-slate-900">
                          Harga Outlet #{index + 1}
                        </h4>
                        <p className="mt-1 text-xs text-slate-500">
                          Atur harga dasar dan harga per channel.
                        </p>
                      </div>

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

                    <div className="grid gap-3 md:grid-cols-3">
                      <div>
                        <label className="mb-2 block text-sm font-medium text-slate-700">Outlet</label>
                        <select
                          className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm text-slate-800 shadow-sm outline-none transition focus:border-[var(--brand-brick)] focus:ring-2 focus:ring-orange-100"
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
                  <div
                    key={index}
                    className="rounded-2xl border border-slate-200 bg-slate-50/70 p-4"
                  >
                    <div className="mb-4 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                      <div>
                        <h4 className="text-sm font-semibold text-slate-900">
                          Status Outlet #{index + 1}
                        </h4>
                        <p className="mt-1 text-xs text-slate-500">
                          Atur availability, visibility, dan limit harian.
                        </p>
                      </div>

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

                    <div className="grid gap-3 md:grid-cols-3">
                      <div>
                        <label className="mb-2 block text-sm font-medium text-slate-700">Outlet</label>
                        <select
                          className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm text-slate-800 shadow-sm outline-none transition focus:border-[var(--brand-brick)] focus:ring-2 focus:ring-orange-100"
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

                      <div className="grid gap-3 rounded-xl border border-slate-200 bg-white p-3">
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

                      <div className="md:col-span-3">
                        <label className="mb-2 block text-sm font-medium text-slate-700">Notes</label>
                        <textarea
                          className="min-h-[80px] w-full resize-y rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm text-slate-800 shadow-sm outline-none transition placeholder:text-slate-400 focus:border-[var(--brand-brick)] focus:ring-2 focus:ring-orange-100"
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
                  <div
                    key={groupIndex}
                    className="rounded-2xl border border-slate-200 bg-slate-50/70 p-4"
                  >
                    <div className="mb-4 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                      <div>
                        <h4 className="text-sm font-semibold text-slate-900">
                          Variant Group #{groupIndex + 1}
                        </h4>
                        <p className="mt-1 text-xs text-slate-500">
                          Kelompok pilihan varian untuk produk.
                        </p>
                      </div>

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
                          className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm text-slate-800 shadow-sm outline-none transition focus:border-[var(--brand-brick)] focus:ring-2 focus:ring-orange-100"
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

                      <div className="flex items-end rounded-xl border border-slate-200 bg-white p-3">
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
                          className="grid gap-3 rounded-xl border border-slate-200 bg-white p-3 md:grid-cols-4"
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
                  <div
                    key={groupIndex}
                    className="rounded-2xl border border-slate-200 bg-slate-50/70 p-4"
                  >
                    <div className="mb-4 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                      <div>
                        <h4 className="text-sm font-semibold text-slate-900">
                          Modifier Group #{groupIndex + 1}
                        </h4>
                        <p className="mt-1 text-xs text-slate-500">
                          Kelompok tambahan untuk pesanan.
                        </p>
                      </div>

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

                      <div className="flex items-end rounded-xl border border-slate-200 bg-white p-3">
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
                          className="grid gap-3 rounded-xl border border-slate-200 bg-white p-3 md:grid-cols-4"
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
                    <div
                      key={index}
                      className="rounded-2xl border border-slate-200 bg-slate-50/70 p-4"
                    >
                      <div className="mb-4 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                        <div>
                          <h4 className="text-sm font-semibold text-slate-900">
                            Bundle Item #{index + 1}
                          </h4>
                          <p className="mt-1 text-xs text-slate-500">
                            Pilih produk yang menjadi komponen paket.
                          </p>
                        </div>

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

                      <div className="grid gap-3 md:grid-cols-3">
                        <div className="md:col-span-2">
                          <label className="mb-2 block text-sm font-medium text-slate-700">
                            Bundled Product
                          </label>
                          <select
                            className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm text-slate-800 shadow-sm outline-none transition focus:border-[var(--brand-brick)] focus:ring-2 focus:ring-orange-100"
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
- SHA: `ae2769709e28`  
- Ukuran: 3 KB
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
          <div className="space-y-3">
            {product.variant_groups?.map((group) => (
              <div
                key={group.id}
                className="rounded-2xl border border-slate-200 bg-slate-50/70 p-4 transition-colors hover:border-orange-200 hover:bg-orange-50/40"
              >
                <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                  <div className="min-w-0">
                    <div className="truncate text-sm font-semibold text-slate-900">
                      {group.name}
                    </div>
                    <div className="mt-1 text-xs font-medium uppercase tracking-wide text-[var(--brand-brick)]">
                      {group.selection_type}
                    </div>
                  </div>

                  <div className="shrink-0 rounded-full border border-slate-200 bg-white px-2.5 py-1 text-xs font-semibold text-slate-600">
                    {group.options?.length ?? 0} option
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="rounded-2xl border border-dashed border-amber-200 bg-amber-50/60 px-4 py-3 text-sm text-amber-700">
            Produk ini belum memiliki variant group.
          </div>
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

<a id="file-srcmodulesadminpagespromotionspagetsx"></a>
### src\modules\admin\pages\PromotionsPage.tsx
- SHA: `c1f83cab5e6e`  
- Ukuran: 19 KB
<details><summary><strong>Lihat Kode Lengkap</strong></summary>

```tsx
import { useState } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { PageHeader } from "@/components/navigation/PageHeader";
import { PermissionWrapper } from "@/components/navigation/PermissionWrapper";
import { PageEmptyState } from "@/components/feedback/PageEmptyState";
import { PageErrorState } from "@/components/feedback/PageErrorState";
import { Badge, Button, Card, ConfirmDialog, Input, Modal, Pagination } from "@/components/ui";
import { parseApiError } from "@/services/api/error-parser";
import { useToast } from "@/hooks/useToast";
import { customerPromoService } from "@/modules/admin/services/customer-promo.service";
import type {
    Promotion,
    PromotionPayload,
    PromotionRulePayload,
    PromotionRuleType,
    PromotionType,
} from "@/types/promo";

interface PromotionFormState {
    name: string;
    description: string;
    promotion_type: PromotionType;
    starts_at: string;
    ends_at: string;
    priority: string;
    is_active: boolean;
    rules: PromotionRulePayload[];
}

const createEmptyRule = (): PromotionRulePayload => ({
    rule_type: "min_total",
    operator: ">=",
    value: "",
});

const initialForm: PromotionFormState = {
    name: "",
    description: "",
    promotion_type: "discount",
    starts_at: "",
    ends_at: "",
    priority: "0",
    is_active: true,
    rules: [createEmptyRule()],
};

const toPayload = (form: PromotionFormState): PromotionPayload => ({
    name: form.name.trim(),
    description: form.description.trim() || null,
    promotion_type: form.promotion_type,
    starts_at: form.starts_at || null,
    ends_at: form.ends_at || null,
    priority: Number(form.priority || 0),
    is_active: form.is_active,
    rules: form.rules
        .filter((rule) => rule.rule_type && String(rule.value ?? "").trim() !== "")
        .map((rule) => ({
            rule_type: rule.rule_type,
            operator: rule.operator || null,
            value: rule.value || null,
        })),
});

const fromPromotion = (promotion: Promotion): PromotionFormState => ({
    name: promotion.name,
    description: promotion.description ?? "",
    promotion_type: promotion.promotion_type,
    starts_at: promotion.starts_at ?? "",
    ends_at: promotion.ends_at ?? "",
    priority: String(promotion.priority ?? 0),
    is_active: Boolean(promotion.is_active),
    rules:
        promotion.rules?.length
            ? promotion.rules.map((rule) => ({
                rule_type: rule.rule_type,
                operator: rule.operator,
                value: rule.value,
            }))
            : [createEmptyRule()],
});

export default function PromotionsPage() {
    const toast = useToast();
    const queryClient = useQueryClient();

    const [page, setPage] = useState(1);
    const [search, setSearch] = useState("");
    const [isActive, setIsActive] = useState<boolean | "">("");
    const [open, setOpen] = useState(false);
    const [editing, setEditing] = useState<Promotion | null>(null);
    const [deleting, setDeleting] = useState<Promotion | null>(null);
    const [form, setForm] = useState<PromotionFormState>(initialForm);

    const promotionsQuery = useQuery({
        queryKey: ["admin-promotions", page, search, isActive],
        queryFn: () =>
            customerPromoService.getPromotions({
                page,
                per_page: 10,
                search,
                is_active: isActive,
            }),
    });

    const promotions = promotionsQuery.data?.items ?? [];
    const meta = promotionsQuery.data?.meta ?? null;

    const saveMutation = useMutation({
        mutationFn: () => {
            const payload = toPayload(form);

            if (editing) {
                return customerPromoService.updatePromotion(editing.id, payload);
            }

            return customerPromoService.createPromotion(payload);
        },
        onSuccess: (response) => {
            toast.success(response.message);
            setOpen(false);
            setEditing(null);
            setForm(initialForm);
            void queryClient.invalidateQueries({ queryKey: ["admin-promotions"] });
        },
        onError: (error) => {
            toast.error("Gagal menyimpan promotion", parseApiError(error));
        },
    });

    const deleteMutation = useMutation({
        mutationFn: (promotion: Promotion) => customerPromoService.deletePromotion(promotion.id),
        onSuccess: (response) => {
            toast.success(response.message);
            setDeleting(null);
            void queryClient.invalidateQueries({ queryKey: ["admin-promotions"] });
        },
        onError: (error) => {
            toast.error("Gagal menghapus promotion", parseApiError(error));
        },
    });

    const openCreate = () => {
        setEditing(null);
        setForm(initialForm);
        setOpen(true);
    };

    const openEdit = (promotion: Promotion) => {
        setEditing(promotion);
        setForm(fromPromotion(promotion));
        setOpen(true);
    };

    const updateRule = (index: number, next: PromotionRulePayload) => {
        setForm((prev) => {
            const rules = [...prev.rules];
            rules[index] = next;

            return {
                ...prev,
                rules,
            };
        });
    };

    return (
        <PermissionWrapper permission="promotions.view">
            <div className="space-y-4">
                <PageHeader
                    title="Promotions"
                    description="Kelola promo campaign, tipe promo, prioritas, masa aktif, dan rule sederhana."
                    actions={
                        <PermissionWrapper permission="promotions.create" fallback={null}>
                            <Button onClick={openCreate}>Tambah Promo</Button>
                        </PermissionWrapper>
                    }
                />

                <Card>
                    <div className="grid gap-4 md:grid-cols-3">
                        <Input
                            placeholder="Cari nama promo..."
                            value={search}
                            onChange={(event) => {
                                setSearch(event.target.value);
                                setPage(1);
                            }}
                        />

                        <select
                            className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900"
                            value={isActive === "" ? "" : String(isActive)}
                            onChange={(event) => {
                                const value = event.target.value;
                                setIsActive(value === "" ? "" : value === "true");
                                setPage(1);
                            }}
                        >
                            <option value="">Semua Status</option>
                            <option value="true">Aktif</option>
                            <option value="false">Nonaktif</option>
                        </select>
                    </div>
                </Card>

                {promotionsQuery.isLoading ? (
                    <Card>Memuat data promotion...</Card>
                ) : promotionsQuery.isError ? (
                    <PageErrorState onRetry={() => void promotionsQuery.refetch()} />
                ) : !promotions.length ? (
                    <PageEmptyState title="Belum ada promotion" />
                ) : (
                    <div className="grid gap-4 lg:grid-cols-2">
                        {promotions.map((promotion) => (
                            <Card
                                key={promotion.id}
                                title={promotion.name}
                                description={promotion.description ?? "-"}
                                actions={
                                    <Badge variant={promotion.is_active ? "success" : "danger"}>
                                        {promotion.is_active ? "Aktif" : "Nonaktif"}
                                    </Badge>
                                }
                            >
                                <div className="space-y-2 text-sm text-slate-600">
                                    <div>
                                        Tipe: <span className="font-semibold text-slate-900">{promotion.promotion_type}</span>
                                    </div>
                                    <div>Prioritas: {promotion.priority}</div>
                                    <div>
                                        Berlaku: {promotion.starts_at ?? "-"} s/d {promotion.ends_at ?? "-"}
                                    </div>
                                    <div>Rules: {promotion.rules?.length ?? 0}</div>
                                </div>

                                <div className="mt-4 flex flex-wrap gap-2">
                                    <PermissionWrapper permission="promotions.update" fallback={null}>
                                        <Button variant="secondary" onClick={() => openEdit(promotion)}>
                                            Edit
                                        </Button>
                                    </PermissionWrapper>
                                    <PermissionWrapper permission="promotions.delete" fallback={null}>
                                        <Button variant="danger" onClick={() => setDeleting(promotion)}>
                                            Hapus
                                        </Button>
                                    </PermissionWrapper>
                                </div>
                            </Card>
                        ))}
                    </div>
                )}

                {meta ? (
                    <Pagination
                        meta={meta}
                        onPageChange={setPage}
                    />
                ) : null}

                <Modal
                    open={open}
                    title={editing ? "Edit Promotion" : "Tambah Promotion"}
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
                    <div className="space-y-4">
                        <div className="grid gap-4 md:grid-cols-2">
                            <Input
                                label="Nama Promo"
                                value={form.name}
                                onChange={(event) => setForm((prev) => ({ ...prev, name: event.target.value }))}
                            />

                            <div>
                                <label className="mb-2 block text-sm font-medium text-slate-700">Tipe Promo</label>
                                <select
                                    className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm"
                                    value={form.promotion_type}
                                    onChange={(event) =>
                                        setForm((prev) => ({
                                            ...prev,
                                            promotion_type: event.target.value as PromotionType,
                                        }))
                                    }
                                >
                                    <option value="discount">discount</option>
                                    <option value="bundle">bundle</option>
                                    <option value="buy_x_get_y">buy_x_get_y</option>
                                </select>
                            </div>

                            <Input
                                label="Mulai"
                                type="datetime-local"
                                value={form.starts_at}
                                onChange={(event) =>
                                    setForm((prev) => ({ ...prev, starts_at: event.target.value }))
                                }
                            />

                            <Input
                                label="Berakhir"
                                type="datetime-local"
                                value={form.ends_at}
                                onChange={(event) =>
                                    setForm((prev) => ({ ...prev, ends_at: event.target.value }))
                                }
                            />

                            <Input
                                label="Prioritas"
                                type="number"
                                value={form.priority}
                                onChange={(event) =>
                                    setForm((prev) => ({ ...prev, priority: event.target.value }))
                                }
                            />

                            <Input
                                label="Deskripsi"
                                value={form.description}
                                onChange={(event) =>
                                    setForm((prev) => ({ ...prev, description: event.target.value }))
                                }
                            />

                            <label className="flex items-center gap-2 text-sm text-slate-700">
                                <input
                                    type="checkbox"
                                    checked={form.is_active}
                                    onChange={(event) =>
                                        setForm((prev) => ({ ...prev, is_active: event.target.checked }))
                                    }
                                />
                                Promo aktif
                            </label>
                        </div>

                        <Card title="Promotion Rules">
                            <div className="space-y-3">
                                {form.rules.map((rule, index) => (
                                    <div key={index} className="grid gap-3 rounded-xl border border-slate-200 p-3 md:grid-cols-4">
                                        <div>
                                            <label className="mb-2 block text-sm font-medium text-slate-700">Rule Type</label>
                                            <select
                                                className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm"
                                                value={rule.rule_type}
                                                onChange={(event) =>
                                                    updateRule(index, {
                                                        ...rule,
                                                        rule_type: event.target.value as PromotionRuleType,
                                                    })
                                                }
                                            >
                                                <option value="min_total">min_total</option>
                                                <option value="product">product</option>
                                                <option value="category">category</option>
                                                <option value="outlet">outlet</option>
                                                <option value="channel">channel</option>
                                                <option value="time">time</option>
                                            </select>
                                        </div>

                                        <Input
                                            label="Operator"
                                            value={rule.operator ?? ""}
                                            onChange={(event) =>
                                                updateRule(index, {
                                                    ...rule,
                                                    operator: event.target.value,
                                                })
                                            }
                                        />

                                        <Input
                                            label="Value"
                                            value={rule.value ?? ""}
                                            onChange={(event) =>
                                                updateRule(index, {
                                                    ...rule,
                                                    value: event.target.value,
                                                })
                                            }
                                        />

                                        <div className="flex items-end">
                                            <Button
                                                variant="danger"
                                                onClick={() =>
                                                    setForm((prev) => ({
                                                        ...prev,
                                                        rules: prev.rules.filter((_, ruleIndex) => ruleIndex !== index),
                                                    }))
                                                }
                                            >
                                                Hapus
                                            </Button>
                                        </div>
                                    </div>
                                ))}

                                <Button
                                    variant="outline"
                                    onClick={() =>
                                        setForm((prev) => ({
                                            ...prev,
                                            rules: [...prev.rules, createEmptyRule()],
                                        }))
                                    }
                                >
                                    Tambah Rule
                                </Button>
                            </div>
                        </Card>
                    </div>
                </Modal>

                <ConfirmDialog
                    open={Boolean(deleting)}
                    title="Hapus promotion?"
                    description={`Promotion ${deleting?.name ?? ""} akan dihapus.`}
                    confirmText="Hapus"
                    confirmVariant="danger"
                    loading={deleteMutation.isPending}
                    onClose={() => setDeleting(null)}
                    onConfirm={() => {
                        if (deleting) {
                            deleteMutation.mutate(deleting);
                        }
                    }}
                />
            </div>
        </PermissionWrapper>
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
- SHA: `40776bfa929c`  
- Ukuran: 7 KB
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
      <div className="space-y-5">
        <PageHeader
          title="Kategori Bahan Baku"
          description="Kelola kategori bahan baku untuk inventory."
          actions={<Button onClick={openCreate}>Tambah Kategori</Button>}
        />

        <Card>
          <div className="grid gap-3 md:grid-cols-[1fr_auto] md:items-end">
            <Input
              label="Pencarian"
              placeholder="Cari kategori bahan baku..."
              value={search}
              onChange={(event) => setSearch(event.target.value)}
            />

            <div className="rounded-xl border border-[var(--color-border)] bg-[var(--brand-brick-soft)] px-4 py-3 text-sm">
              <div className="text-xs font-medium uppercase tracking-wide text-[var(--brand-brick)]">
                Total Kategori
              </div>
              <div className="mt-1 text-lg font-semibold text-[var(--color-text)]">
                {categories.length}
              </div>
            </div>
          </div>
        </Card>

        {categoriesQuery.isLoading ? (
          <Card>
            <div className="flex min-h-40 items-center justify-center text-sm text-[var(--color-muted)]">
              Memuat kategori bahan baku...
            </div>
          </Card>
        ) : categoriesQuery.isError ? (
          <PageErrorState onRetry={() => void categoriesQuery.refetch()} />
        ) : !categories.length ? (
          <PageEmptyState
            title="Belum ada kategori bahan baku"
            description="Tambahkan kategori agar bahan baku lebih mudah dikelompokkan."
          />
        ) : (
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {categories.map((category) => (
              <Card key={category.id}>
                <div className="flex h-full flex-col justify-between gap-5">
                  <div>
                    <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--brand-brick-soft)] text-sm font-bold text-[var(--brand-brick)]">
                      {category.name.charAt(0).toUpperCase()}
                    </div>

                    <h3 className="line-clamp-2 text-base font-semibold text-[var(--color-text)]">
                      {category.name}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-[var(--color-muted)]">
                      Kategori inventory bahan baku.
                    </p>
                  </div>

                  <div className="flex flex-col gap-2 border-t border-slate-100 pt-4 sm:flex-row sm:items-center">
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
              </Card>
            ))}
          </div>
        )}

        <Modal
          open={openModal}
          title={editingCategory ? "Edit Kategori Bahan Baku" : "Tambah Kategori Bahan Baku"}
          description="Gunakan nama kategori yang singkat, jelas, dan mudah dikenali."
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
            <div className="rounded-2xl border border-slate-200 bg-slate-50/70 p-4">
              <Input
                label="Nama Kategori"
                placeholder="Contoh: Bahan utama, bumbu, kemasan..."
                value={form.name}
                onChange={(event) => setForm((prev) => ({ ...prev, name: event.target.value }))}
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

<a id="file-srcmodulesadminpagesrawmaterialspagetsx"></a>
### src\modules\admin\pages\RawMaterialsPage.tsx
- SHA: `c13838884093`  
- Ukuran: 19 KB
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

const formatCurrency = (value: number | string | null | undefined) =>
  `Rp ${Number(value ?? 0).toLocaleString("id-ID")}`;

const formatNumber = (value: number | string | null | undefined) =>
  Number(value ?? 0).toLocaleString("id-ID");

const selectClassName =
  "w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm text-slate-800 shadow-sm outline-none transition focus:border-[var(--brand-brick)] focus:ring-2 focus:ring-orange-100";

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
      <div className="space-y-5">
        <PageHeader
          title="Bahan Baku"
          description="Kelola bahan baku, minimum stok, harga, dan saldo awal per outlet."
          actions={<Button onClick={openCreate}>Tambah Bahan Baku</Button>}
        />

        <Card>
          <div className="grid gap-4 lg:grid-cols-[1.4fr_1fr_1fr]">
            <Input
              label="Pencarian"
              placeholder="Cari nama, kode, atau SKU..."
              value={search}
              onChange={(event) => setSearch(event.target.value)}
            />

            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">
                Kategori
              </label>
              <select
                className={selectClassName}
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
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">
                Satuan
              </label>
              <select
                className={selectClassName}
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
          </div>
        </Card>

        {rawMaterialsQuery.isLoading ? (
          <Card>
            <div className="flex min-h-40 items-center justify-center text-sm text-[var(--color-muted)]">
              Memuat bahan baku...
            </div>
          </Card>
        ) : rawMaterialsQuery.isError ? (
          <PageErrorState onRetry={() => void rawMaterialsQuery.refetch()} />
        ) : !rawMaterials.length ? (
          <PageEmptyState title="Belum ada bahan baku" />
        ) : (
          <div className="grid gap-4 xl:grid-cols-2">
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
                <div className="grid gap-3 text-sm text-slate-600 sm:grid-cols-2">
                  <div className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-2">
                    <div className="text-xs font-medium uppercase tracking-wide text-slate-500">
                      Kategori
                    </div>
                    <div className="mt-1 font-semibold text-slate-900">
                      {rawMaterial.category?.name ?? "-"}
                    </div>
                  </div>

                  <div className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-2">
                    <div className="text-xs font-medium uppercase tracking-wide text-slate-500">
                      Satuan
                    </div>
                    <div className="mt-1 font-semibold text-slate-900">
                      {rawMaterial.unit?.code ?? "-"}
                    </div>
                  </div>

                  <div className="rounded-xl border border-slate-200 bg-white px-3 py-2">
                    <div className="text-xs font-medium uppercase tracking-wide text-slate-500">
                      Minimum Stok
                    </div>
                    <div className="mt-1 font-semibold text-slate-900">
                      {formatNumber(rawMaterial.minimum_stock)}
                    </div>
                  </div>

                  <div className="rounded-xl border border-slate-200 bg-white px-3 py-2">
                    <div className="text-xs font-medium uppercase tracking-wide text-slate-500">
                      Average Cost
                    </div>
                    <div className="mt-1 font-semibold text-slate-900">
                      {formatCurrency(rawMaterial.average_cost)}
                    </div>
                  </div>

                  <div className="rounded-xl border border-orange-100 bg-[var(--brand-brick-soft)] px-3 py-2 sm:col-span-2">
                    <div className="text-xs font-medium uppercase tracking-wide text-[var(--brand-brick)]">
                      Harga Beli Terakhir
                    </div>
                    <div className="mt-1 font-semibold text-slate-900">
                      {formatCurrency(rawMaterial.last_purchase_price)}
                    </div>
                  </div>
                </div>

                <div className="mt-4 flex flex-col gap-2 border-t border-slate-100 pt-4 sm:flex-row sm:justify-end">
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
          <div className="max-h-[72vh] space-y-5 overflow-y-auto pr-1">
            <div className="rounded-2xl border border-slate-200 bg-white p-4">
              <div className="mb-4">
                <h3 className="text-sm font-semibold text-slate-900">
                  Informasi Bahan Baku
                </h3>
                <p className="mt-1 text-xs text-slate-500">
                  Lengkapi kategori, satuan, kode, nama, dan informasi biaya bahan baku.
                </p>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">
                    Kategori
                  </label>
                  <select
                    className={selectClassName}
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
                    className={selectClassName}
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
                  onChange={(event) =>
                    setForm((prev) => ({ ...prev, code: event.target.value }))
                  }
                />

                <Input
                  label="SKU"
                  value={form.sku ?? ""}
                  onChange={(event) =>
                    setForm((prev) => ({ ...prev, sku: event.target.value }))
                  }
                />

                <Input
                  label="Nama Bahan Baku"
                  value={form.name}
                  onChange={(event) =>
                    setForm((prev) => ({ ...prev, name: event.target.value }))
                  }
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

                <div className="md:col-span-2">
                  <Input
                    label="Deskripsi"
                    value={form.description ?? ""}
                    onChange={(event) =>
                      setForm((prev) => ({ ...prev, description: event.target.value }))
                    }
                  />
                </div>

                <div className="md:col-span-2 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3">
                  <Checkbox
                    label="Bahan baku aktif"
                    checked={Boolean(form.is_active)}
                    onChange={(event) =>
                      setForm((prev) => ({ ...prev, is_active: event.target.checked }))
                    }
                  />
                </div>
              </div>
            </div>

            <Card title="Saldo Awal Per Outlet" description="Atur stok awal bahan baku untuk setiap outlet.">
              <div className="space-y-3">
                {outlets.map((outlet) => (
                  <div
                    key={outlet.id}
                    className="grid gap-3 rounded-2xl border border-slate-200 bg-slate-50/70 p-4 md:grid-cols-[1.2fr_1fr_1fr]"
                  >
                    <div className="flex min-w-0 items-center">
                      <div>
                        <div className="truncate text-sm font-semibold text-slate-900">
                          {outlet.name}
                        </div>
                        <div className="mt-1 text-xs text-slate-500">{outlet.code}</div>
                      </div>
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
- SHA: `b4bdee042497`  
- Ukuran: 9 KB
<details><summary><strong>Lihat Kode Lengkap</strong></summary>

```tsx
import { useMemo, useState } from "react";
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

const initialForm: RolePayload = {
  name: "",
  permissions: [],
};

const getPermissionGroup = (permissionName: string) => {
  const [group] = permissionName.split(".");
  return group || "other";
};

export default function RolesPage() {
  const toast = useToast();
  const queryClient = useQueryClient();

  const [search, setSearch] = useState("");
  const [open, setOpen] = useState(false);
  const [editing, setEditing] = useState<Role | null>(null);
  const [form, setForm] = useState<RolePayload>(initialForm);

  const rolesQuery = useQuery({
    queryKey: ["admin-roles"],
    queryFn: () => masterDataService.getRoles({ per_page: 100 }),
  });

  const permissionsQuery = useQuery({
    queryKey: ["admin-permissions"],
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
      setForm(initialForm);
      void queryClient.invalidateQueries({ queryKey: ["admin-roles"] });
    },
    onError: (error) => toast.error("Gagal menyimpan role", parseApiError(error)),
  });

  const roles = rolesQuery.data?.items ?? [];
  const permissions = permissionsQuery.data?.items ?? [];
  const selectedPermissions = form.permissions ?? [];

  const filteredRoles = useMemo(() => {
    const keyword = search.trim().toLowerCase();

    if (!keyword) {
      return roles;
    }

    return roles.filter((role) => role.name.toLowerCase().includes(keyword));
  }, [roles, search]);

  const groupedPermissions = useMemo(() => {
    const map: Record<string, typeof permissions> = {};

    permissions.forEach((permission) => {
      const group = getPermissionGroup(permission.name);

      if (!map[group]) {
        map[group] = [];
      }

      map[group].push(permission);
    });

    return map;
  }, [permissions]);

  const openCreate = () => {
    setEditing(null);
    setForm(initialForm);
    setOpen(true);
  };

  const openEdit = (role: Role) => {
    setEditing(role);
    setForm({
      name: role.name,
      permissions: role.permissions ?? [],
    });
    setOpen(true);
  };

  return (
    <PermissionWrapper permission="roles.view">
      <div className="space-y-5">
        <PageHeader
          title="Roles"
          description="Kelola role dan hak akses user berdasarkan permission yang tersedia."
          actions={<Button onClick={openCreate}>Tambah Role</Button>}
        />

        <Card>
          <div className="grid gap-3 md:grid-cols-[1fr_auto] md:items-end">
            <Input
              label="Pencarian"
              placeholder="Cari nama role..."
              value={search}
              onChange={(event) => setSearch(event.target.value)}
            />

            <div className="rounded-xl border border-[var(--color-border)] bg-[var(--brand-brick-soft)] px-4 py-3 text-sm">
              <div className="text-xs font-medium uppercase tracking-wide text-[var(--brand-brick)]">
                Total Role
              </div>
              <div className="mt-1 text-lg font-semibold text-[var(--color-text)]">
                {filteredRoles.length}
              </div>
            </div>
          </div>
        </Card>

        {rolesQuery.isLoading ? (
          <Card>
            <div className="flex min-h-40 items-center justify-center text-sm text-[var(--color-muted)]">
              Memuat data role...
            </div>
          </Card>
        ) : rolesQuery.isError ? (
          <PageErrorState onRetry={() => void rolesQuery.refetch()} />
        ) : !filteredRoles.length ? (
          <PageEmptyState title="Belum ada role" />
        ) : (
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {filteredRoles.map((role) => (
              <Card
                key={role.id}
                title={role.name}
                description={`${role.permissions?.length ?? 0} permissions`}
                actions={<Badge variant="info">Role</Badge>}
              >
                <div className="flex min-h-16 flex-wrap content-start gap-2 text-xs text-slate-600">
                  {(role.permissions ?? []).slice(0, 6).map((permission) => (
                    <Badge key={permission} variant="default">
                      {permission}
                    </Badge>
                  ))}

                  {(role.permissions ?? []).length > 6 ? (
                    <Badge variant="warning">
                      +{(role.permissions ?? []).length - 6} lainnya
                    </Badge>
                  ) : null}
                </div>

                <div className="mt-4 flex justify-end border-t border-slate-100 pt-4">
                  <Button variant="outline" onClick={() => openEdit(role)}>
                    Edit
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        )}

        <Modal
          open={open}
          title={editing ? "Edit Role" : "Tambah Role"}
          description="Atur nama role dan permission yang boleh digunakan."
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
          <div className="max-h-[75vh] space-y-6 overflow-y-auto pr-1">
            <div className="rounded-2xl border border-slate-200 bg-white p-4">
              <Input
                label="Nama Role"
                value={form.name}
                onChange={(event) =>
                  setForm((prev) => ({
                    ...prev,
                    name: event.target.value,
                  }))
                }
              />
            </div>

            <div className="space-y-4">
              {Object.entries(groupedPermissions).map(([group, groupPermissions]) => (
                <div
                  key={group}
                  className="rounded-2xl border border-slate-200 bg-slate-50/70 p-4"
                >
                  <div className="mb-3 flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <h3 className="text-sm font-semibold capitalize text-slate-900">
                        {group.replaceAll("_", " ")}
                      </h3>
                      <p className="text-xs text-slate-500">
                        {groupPermissions.length} permission tersedia
                      </p>
                    </div>
                  </div>

                  <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                    {groupPermissions.map((permission) => {
                      const checked = selectedPermissions.includes(permission.name);

                      return (
                        <div
                          key={permission.id}
                          className="rounded-xl border border-slate-200 bg-white px-3 py-2 shadow-sm"
                        >
                          <Checkbox
                            label={permission.name}
                            checked={checked}
                            onChange={(event) => {
                              const nextPermissions = event.target.checked
                                ? [...selectedPermissions, permission.name]
                                : selectedPermissions.filter((item) => item !== permission.name);

                              setForm((prev) => ({
                                ...prev,
                                permissions: nextPermissions,
                              }));
                            }}
                          />
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Modal>
      </div>
    </PermissionWrapper>
  );
}
```
</details>

<a id="file-srcmodulesadminpagesstockmovementspagetsx"></a>
### src\modules\admin\pages\StockMovementsPage.tsx
- SHA: `ed82f44e2cc3`  
- Ukuran: 59 KB
<details><summary><strong>Lihat Kode Lengkap</strong></summary>

```tsx
import { useMemo, useState } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { PageHeader } from "@/components/navigation/PageHeader";
import { PermissionWrapper } from "@/components/navigation/PermissionWrapper";
import { PageEmptyState } from "@/components/feedback/PageEmptyState";
import { PageErrorState } from "@/components/feedback/PageErrorState";
import { Badge, Button, Card, ConfirmDialog, Input, Modal } from "@/components/ui";
import { masterDataService } from "@/modules/admin/services/master-data.service";
import { inventoryService } from "@/modules/admin/services/inventory.service";
import {
  stockMovementService,
  type StockAdjustmentItemPayload,
  type StockAdjustmentPayload,
  type StockOpnameItemPayload,
  type StockOpnamePayload,
  type StockTransferItemPayload,
  type StockTransferPayload,
} from "@/modules/admin/services/stock-movement.service";
import {
  StockFlowItemsEditor,
  createInitialStockItems,
  sanitizeAdjustmentItems,
  sanitizeOpnameItems,
  sanitizeTransferItems,
} from "@/modules/admin/components/stock/StockFlowItemsEditor";
import { parseApiError } from "@/services/api/error-parser";
import { useToast } from "@/hooks/useToast";
import type {
  StockAdjustment,
  StockAdjustmentReason,
  StockMovement,
  StockMovementType,
  StockOpname,
  StockOpnameStatus,
  StockTransfer,
  StockTransferStatus,
} from "@/types/stock-movement";

type ActiveTab = "adjustments" | "transfers" | "opnames" | "movements";

const nowLocalInput = () => {
  const date = new Date();
  date.setMinutes(date.getMinutes() - date.getTimezoneOffset());
  return date.toISOString().slice(0, 16);
};

const todayInput = () => {
  const date = new Date();
  date.setMinutes(date.getMinutes() - date.getTimezoneOffset());
  return date.toISOString().slice(0, 10);
};

const initialAdjustmentForm: StockAdjustmentPayload = {
  outlet_id: 0,
  adjustment_date: nowLocalInput(),
  reason: "correction",
  notes: "",
  items: createInitialStockItems<StockAdjustmentItemPayload>("adjustment"),
};

const initialTransferForm: StockTransferPayload = {
  source_outlet_id: 0,
  target_outlet_id: 0,
  transfer_date: nowLocalInput(),
  notes: "",
  items: createInitialStockItems<StockTransferItemPayload>("transfer"),
};

const initialOpnameForm: StockOpnamePayload = {
  outlet_id: 0,
  opname_date: todayInput(),
  notes: "",
  items: createInitialStockItems<StockOpnameItemPayload>("opname"),
};

const reasonLabel: Record<StockAdjustmentReason, string> = {
  damaged: "Rusak",
  expired: "Expired",
  lost: "Hilang",
  correction: "Koreksi",
  waste: "Waste",
  other: "Lainnya",
};

const adjustmentReasonOptions: StockAdjustmentReason[] = [
  "correction",
  "damaged",
  "expired",
  "lost",
  "waste",
  "other",
];

const transferStatusVariant: Record<
  StockTransferStatus,
  "success" | "warning" | "danger" | "info"
> = {
  draft: "warning",
  sent: "info",
  received: "success",
  cancelled: "danger",
};

const opnameStatusVariant: Record<StockOpnameStatus, "success" | "warning" | "danger"> = {
  draft: "warning",
  posted: "success",
  cancelled: "danger",
};

const movementTypeOptions: StockMovementType[] = [
  "purchase",
  "sale_consumption",
  "adjustment",
  "transfer_out",
  "transfer_in",
  "opname",
  "waste",
];

const selectClassName =
  "w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm text-slate-800 shadow-sm outline-none transition focus:border-[var(--brand-brick)] focus:ring-2 focus:ring-orange-100";

const formatNumber = (value: number | string | null | undefined) =>
  Number(value ?? 0).toLocaleString("id-ID");

const formatCurrency = (value: number | string | null | undefined) =>
  `Rp ${Number(value ?? 0).toLocaleString("id-ID")}`;

const formatDateTime = (value: string | null | undefined) => {
  if (!value) {
    return "-";
  }

  return new Intl.DateTimeFormat("id-ID", {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(new Date(value));
};

const formatDate = (value: string | null | undefined) => {
  if (!value) {
    return "-";
  }

  return new Intl.DateTimeFormat("id-ID", {
    dateStyle: "medium",
  }).format(new Date(value));
};

export default function StockMovementsPage() {
  const toast = useToast();
  const queryClient = useQueryClient();

  const [activeTab, setActiveTab] = useState<ActiveTab>("adjustments");
  const [search, setSearch] = useState("");
  const [outletFilter, setOutletFilter] = useState<number | "">("");
  const [reasonFilter, setReasonFilter] = useState<StockAdjustmentReason | "">("");
  const [transferStatusFilter, setTransferStatusFilter] = useState<StockTransferStatus | "">("");
  const [opnameStatusFilter, setOpnameStatusFilter] = useState<StockOpnameStatus | "">("");
  const [movementTypeFilter, setMovementTypeFilter] = useState<StockMovementType | "">("");

  const [openAdjustmentModal, setOpenAdjustmentModal] = useState(false);
  const [openTransferModal, setOpenTransferModal] = useState(false);
  const [openOpnameModal, setOpenOpnameModal] = useState(false);

  const [editingAdjustment, setEditingAdjustment] = useState<StockAdjustment | null>(null);
  const [editingTransfer, setEditingTransfer] = useState<StockTransfer | null>(null);
  const [editingOpname, setEditingOpname] = useState<StockOpname | null>(null);

  const [detailMovement, setDetailMovement] = useState<StockMovement | null>(null);
  const [detailAdjustment, setDetailAdjustment] = useState<StockAdjustment | null>(null);
  const [detailTransfer, setDetailTransfer] = useState<StockTransfer | null>(null);
  const [detailOpname, setDetailOpname] = useState<StockOpname | null>(null);

  const [deleteAdjustmentTarget, setDeleteAdjustmentTarget] =
    useState<StockAdjustment | null>(null);
  const [deleteTransferTarget, setDeleteTransferTarget] = useState<StockTransfer | null>(null);
  const [deleteOpnameTarget, setDeleteOpnameTarget] = useState<StockOpname | null>(null);

  const [adjustmentForm, setAdjustmentForm] =
    useState<StockAdjustmentPayload>(initialAdjustmentForm);
  const [transferForm, setTransferForm] = useState<StockTransferPayload>(initialTransferForm);
  const [opnameForm, setOpnameForm] = useState<StockOpnamePayload>(initialOpnameForm);

  const outletsQuery = useQuery({
    queryKey: ["stock-flow-outlets"],
    queryFn: () => masterDataService.getOutlets({ per_page: 100 }),
  });

  const rawMaterialsQuery = useQuery({
    queryKey: ["stock-flow-raw-materials"],
    queryFn: () => inventoryService.getRawMaterials({ per_page: 100 }),
  });

  const unitsQuery = useQuery({
    queryKey: ["stock-flow-units"],
    queryFn: () => inventoryService.getUnits({ per_page: 100 }),
  });

  const outletStocksQuery = useQuery({
    queryKey: ["stock-flow-outlet-material-stocks", opnameForm.outlet_id],
    queryFn: () =>
      inventoryService.getOutletMaterialStocks({
        per_page: 500,
        outlet_id: opnameForm.outlet_id || "",
      }),
    enabled: opnameForm.outlet_id > 0,
  });

  const adjustmentsQuery = useQuery({
    queryKey: ["stock-adjustments", search, outletFilter, reasonFilter],
    queryFn: () =>
      stockMovementService.getStockAdjustments({
        per_page: 100,
        search,
        outlet_id: outletFilter,
        reason: reasonFilter,
      }),
  });

  const transfersQuery = useQuery({
    queryKey: ["stock-transfers", search, outletFilter, transferStatusFilter],
    queryFn: () =>
      stockMovementService.getStockTransfers({
        per_page: 100,
        search,
        outlet_id: outletFilter,
        status: transferStatusFilter,
      }),
  });

  const opnamesQuery = useQuery({
    queryKey: ["stock-opnames", search, outletFilter, opnameStatusFilter],
    queryFn: () =>
      stockMovementService.getStockOpnames({
        per_page: 100,
        search,
        outlet_id: outletFilter,
        status: opnameStatusFilter,
      }),
  });

  const movementsQuery = useQuery({
    queryKey: ["stock-movements", search, outletFilter, movementTypeFilter],
    queryFn: () =>
      stockMovementService.getStockMovements({
        per_page: 100,
        search,
        outlet_id: outletFilter,
        movement_type: movementTypeFilter,
      }),
  });

  const outlets = outletsQuery.data?.items ?? [];
  const rawMaterials = rawMaterialsQuery.data?.items ?? [];
  const units = unitsQuery.data?.items ?? [];
  const outletStocks = outletStocksQuery.data?.items ?? [];
  const adjustments = adjustmentsQuery.data?.items ?? [];
  const transfers = transfersQuery.data?.items ?? [];
  const opnames = opnamesQuery.data?.items ?? [];
  const movements = movementsQuery.data?.items ?? [];

  const tabs = useMemo(
    () => [
      {
        key: "adjustments",
        label: "Adjustment",
        count: adjustments.length,
      },
      {
        key: "transfers",
        label: "Transfer",
        count: transfers.length,
      },
      {
        key: "opnames",
        label: "Opname",
        count: opnames.length,
      },
      {
        key: "movements",
        label: "Movement History",
        count: movements.length,
      },
    ],
    [adjustments.length, transfers.length, opnames.length, movements.length]
  );

  const activeTabLabel = tabs.find((tab) => tab.key === activeTab)?.label ?? "Stock Movement";

  const activeQueryIsFetching =
    (activeTab === "adjustments" && adjustmentsQuery.isFetching) ||
    (activeTab === "transfers" && transfersQuery.isFetching) ||
    (activeTab === "opnames" && opnamesQuery.isFetching) ||
    (activeTab === "movements" && movementsQuery.isFetching);

  const invalidateStockQueries = () => {
    void queryClient.invalidateQueries({ queryKey: ["stock-adjustments"] });
    void queryClient.invalidateQueries({ queryKey: ["stock-transfers"] });
    void queryClient.invalidateQueries({ queryKey: ["stock-opnames"] });
    void queryClient.invalidateQueries({ queryKey: ["stock-movements"] });
    void queryClient.invalidateQueries({ queryKey: ["inventory-outlet-material-stocks"] });
  };

  const adjustmentMutation = useMutation({
    mutationFn: (payload: StockAdjustmentPayload) => {
      const cleanPayload = {
        ...payload,
        items: sanitizeAdjustmentItems(payload.items),
      };

      if (editingAdjustment) {
        return stockMovementService.updateStockAdjustment(editingAdjustment.id, cleanPayload);
      }

      return stockMovementService.createStockAdjustment(cleanPayload);
    },
    onSuccess: (response) => {
      toast.success(response.message);
      setOpenAdjustmentModal(false);
      setEditingAdjustment(null);
      setAdjustmentForm(initialAdjustmentForm);
      invalidateStockQueries();
    },
    onError: (error) => {
      toast.error("Gagal menyimpan adjustment", parseApiError(error));
    },
  });

  const transferMutation = useMutation({
    mutationFn: (payload: StockTransferPayload) => {
      const cleanPayload = {
        ...payload,
        items: sanitizeTransferItems(payload.items),
      };

      if (editingTransfer) {
        return stockMovementService.updateStockTransfer(editingTransfer.id, cleanPayload);
      }

      return stockMovementService.createStockTransfer(cleanPayload);
    },
    onSuccess: (response) => {
      toast.success(response.message);
      setOpenTransferModal(false);
      setEditingTransfer(null);
      setTransferForm(initialTransferForm);
      invalidateStockQueries();
    },
    onError: (error) => {
      toast.error("Gagal menyimpan transfer", parseApiError(error));
    },
  });

  const opnameMutation = useMutation({
    mutationFn: (payload: StockOpnamePayload) => {
      const cleanPayload = {
        ...payload,
        items: sanitizeOpnameItems(payload.items),
      };

      if (editingOpname) {
        return stockMovementService.updateStockOpname(editingOpname.id, cleanPayload);
      }

      return stockMovementService.createStockOpname(cleanPayload);
    },
    onSuccess: (response) => {
      toast.success(response.message);
      setOpenOpnameModal(false);
      setEditingOpname(null);
      setOpnameForm(initialOpnameForm);
      invalidateStockQueries();
    },
    onError: (error) => {
      toast.error("Gagal menyimpan opname", parseApiError(error));
    },
  });

  const deleteAdjustmentMutation = useMutation({
    mutationFn: (target: StockAdjustment) => stockMovementService.deleteStockAdjustment(target.id),
    onSuccess: (response) => {
      toast.success(response.message);
      setDeleteAdjustmentTarget(null);
      invalidateStockQueries();
    },
    onError: (error) => {
      toast.error("Gagal menghapus adjustment", parseApiError(error));
    },
  });

  const deleteTransferMutation = useMutation({
    mutationFn: (target: StockTransfer) => stockMovementService.deleteStockTransfer(target.id),
    onSuccess: (response) => {
      toast.success(response.message);
      setDeleteTransferTarget(null);
      invalidateStockQueries();
    },
    onError: (error) => {
      toast.error("Gagal menghapus transfer", parseApiError(error));
    },
  });

  const deleteOpnameMutation = useMutation({
    mutationFn: (target: StockOpname) => stockMovementService.deleteStockOpname(target.id),
    onSuccess: (response) => {
      toast.success(response.message);
      setDeleteOpnameTarget(null);
      invalidateStockQueries();
    },
    onError: (error) => {
      toast.error("Gagal menghapus opname", parseApiError(error));
    },
  });

  const transferActionMutation = useMutation({
    mutationFn: ({ id, action }: { id: number; action: "send" | "receive" | "cancel" }) => {
      if (action === "send") {
        return stockMovementService.sendStockTransfer(id);
      }

      if (action === "receive") {
        return stockMovementService.receiveStockTransfer(id, { received_at: nowLocalInput() });
      }

      return stockMovementService.cancelStockTransfer(id);
    },
    onSuccess: (response) => {
      toast.success(response.message);
      invalidateStockQueries();
    },
    onError: (error) => {
      toast.error("Gagal memproses transfer", parseApiError(error));
    },
  });

  const opnameActionMutation = useMutation({
    mutationFn: ({ id, action }: { id: number; action: "post" | "cancel" }) => {
      if (action === "post") {
        return stockMovementService.postStockOpname(id, { posted_at: nowLocalInput() });
      }

      return stockMovementService.cancelStockOpname(id);
    },
    onSuccess: (response) => {
      toast.success(response.message);
      invalidateStockQueries();
    },
    onError: (error) => {
      toast.error("Gagal memproses opname", parseApiError(error));
    },
  });

  const openCreateAdjustment = () => {
    setEditingAdjustment(null);
    setAdjustmentForm(initialAdjustmentForm);
    setOpenAdjustmentModal(true);
  };

  const openEditAdjustment = (adjustment: StockAdjustment) => {
    setEditingAdjustment(adjustment);
    setAdjustmentForm({
      outlet_id: adjustment.outlet_id,
      adjustment_date: adjustment.adjustment_date?.slice(0, 16) ?? nowLocalInput(),
      reason: adjustment.reason,
      notes: adjustment.notes ?? "",
      items:
        adjustment.items?.map((item) => ({
          raw_material_id: item.raw_material_id,
          qty_difference: Number(item.qty_difference ?? 0),
          unit_id: item.unit_id,
          notes: item.notes ?? "",
        })) ?? createInitialStockItems<StockAdjustmentItemPayload>("adjustment"),
    });
    setOpenAdjustmentModal(true);
  };

  const openCreateTransfer = () => {
    setEditingTransfer(null);
    setTransferForm(initialTransferForm);
    setOpenTransferModal(true);
  };

  const openEditTransfer = (transfer: StockTransfer) => {
    setEditingTransfer(transfer);
    setTransferForm({
      source_outlet_id: transfer.source_outlet_id,
      target_outlet_id: transfer.target_outlet_id,
      transfer_date: transfer.transfer_date?.slice(0, 16) ?? nowLocalInput(),
      notes: transfer.notes ?? "",
      items:
        transfer.items?.map((item) => ({
          raw_material_id: item.raw_material_id,
          qty_sent: Number(item.qty_sent ?? 0),
          qty_received: item.qty_received === null ? null : Number(item.qty_received ?? 0),
          unit_id: item.unit_id,
          notes: item.notes ?? "",
        })) ?? createInitialStockItems<StockTransferItemPayload>("transfer"),
    });
    setOpenTransferModal(true);
  };

  const openCreateOpname = () => {
    setEditingOpname(null);
    setOpnameForm(initialOpnameForm);
    setOpenOpnameModal(true);
  };

  const openEditOpname = (opname: StockOpname) => {
    setEditingOpname(opname);
    setOpnameForm({
      outlet_id: opname.outlet_id,
      opname_date: opname.opname_date?.slice(0, 10) ?? todayInput(),
      notes: opname.notes ?? "",
      items:
        opname.items?.map((item) => ({
          raw_material_id: item.raw_material_id,
          system_qty: Number(item.system_qty ?? 0),
          actual_qty: Number(item.actual_qty ?? 0),
          unit_id: item.unit_id,
          notes: item.notes ?? "",
        })) ?? createInitialStockItems<StockOpnameItemPayload>("opname"),
    });
    setOpenOpnameModal(true);
  };

  return (
    <PermissionWrapper permission="stock_movements.view">
      <div className="space-y-5">
        <PageHeader
          title="Stock Movement"
          description="Kelola adjustment, transfer, opname, dan riwayat movement stok bahan baku."
        />

        <Card>
          <div className="flex flex-col gap-4">
            <div className="flex flex-wrap gap-2">
              {tabs.map((tab) => {
                const active = activeTab === tab.key;

                return (
                  <button
                    key={tab.key}
                    type="button"
                    onClick={() => setActiveTab(tab.key as ActiveTab)}
                    className={[
                      "inline-flex items-center gap-2 rounded-xl border px-4 py-2 text-sm font-semibold shadow-sm transition",
                      active
                        ? "border-[var(--brand-brick)] bg-[var(--brand-brick)] text-white"
                        : "border-slate-200 bg-white text-slate-700 hover:border-orange-200 hover:bg-orange-50 hover:text-[var(--brand-brick)]",
                    ].join(" ")}
                  >
                    <span>{tab.label}</span>
                    <span
                      className={[
                        "rounded-full px-2 py-0.5 text-xs",
                        active ? "bg-white/20 text-white" : "bg-slate-100 text-slate-600",
                      ].join(" ")}
                    >
                      {tab.count}
                    </span>
                  </button>
                );
              })}
            </div>

            <div className="rounded-2xl border border-orange-100 bg-[var(--brand-brick-soft)] px-4 py-3 text-sm text-[var(--brand-brick)]">
              Menampilkan data: <span className="font-semibold">{activeTabLabel}</span>
              {activeQueryIsFetching ? <span className="ml-2 text-xs">(sinkronisasi...)</span> : null}
            </div>
          </div>
        </Card>

        <Card>
          <div className="grid gap-4 lg:grid-cols-[1.4fr_1fr_1fr_auto] lg:items-end">
            <Input
              label="Pencarian"
              placeholder="Cari nomor dokumen atau catatan..."
              value={search}
              onChange={(event) => setSearch(event.target.value)}
            />

            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">Outlet</label>
              <select
                className={selectClassName}
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
            </div>

            {activeTab === "adjustments" ? (
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">Alasan</label>
                <select
                  className={selectClassName}
                  value={reasonFilter}
                  onChange={(event) =>
                    setReasonFilter(event.target.value as StockAdjustmentReason | "")
                  }
                >
                  <option value="">Semua alasan</option>
                  {adjustmentReasonOptions.map((reason) => (
                    <option key={reason} value={reason}>
                      {reasonLabel[reason]}
                    </option>
                  ))}
                </select>
              </div>
            ) : null}

            {activeTab === "transfers" ? (
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">Status</label>
                <select
                  className={selectClassName}
                  value={transferStatusFilter}
                  onChange={(event) =>
                    setTransferStatusFilter(event.target.value as StockTransferStatus | "")
                  }
                >
                  <option value="">Semua status</option>
                  <option value="draft">draft</option>
                  <option value="sent">sent</option>
                  <option value="received">received</option>
                  <option value="cancelled">cancelled</option>
                </select>
              </div>
            ) : null}

            {activeTab === "opnames" ? (
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">Status</label>
                <select
                  className={selectClassName}
                  value={opnameStatusFilter}
                  onChange={(event) =>
                    setOpnameStatusFilter(event.target.value as StockOpnameStatus | "")
                  }
                >
                  <option value="">Semua status</option>
                  <option value="draft">draft</option>
                  <option value="posted">posted</option>
                  <option value="cancelled">cancelled</option>
                </select>
              </div>
            ) : null}

            {activeTab === "movements" ? (
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">Tipe</label>
                <select
                  className={selectClassName}
                  value={movementTypeFilter}
                  onChange={(event) =>
                    setMovementTypeFilter(event.target.value as StockMovementType | "")
                  }
                >
                  <option value="">Semua tipe</option>
                  {movementTypeOptions.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>
            ) : null}

            <div className="flex flex-col gap-2 sm:flex-row lg:justify-end">
              {activeTab === "adjustments" ? (
                <Button onClick={openCreateAdjustment}>Buat Adjustment</Button>
              ) : null}
              {activeTab === "transfers" ? (
                <Button onClick={openCreateTransfer}>Buat Transfer</Button>
              ) : null}
              {activeTab === "opnames" ? <Button onClick={openCreateOpname}>Buat Opname</Button> : null}
            </div>
          </div>
        </Card>

        {activeTab === "adjustments" ? (
          adjustmentsQuery.isLoading ? (
            <Card>
              <div className="flex min-h-40 items-center justify-center text-sm text-[var(--color-muted)]">
                Memuat stock adjustment...
              </div>
            </Card>
          ) : adjustmentsQuery.isError ? (
            <PageErrorState onRetry={() => void adjustmentsQuery.refetch()} />
          ) : !adjustments.length ? (
            <PageEmptyState title="Belum ada stock adjustment" />
          ) : (
            <div className="grid gap-4 xl:grid-cols-2">
              {adjustments.map((adjustment) => (
                <Card key={adjustment.id}>
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                    <div className="min-w-0">
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="truncate text-base font-semibold text-slate-950">
                          {adjustment.adjustment_number}
                        </h3>
                        <Badge variant="info">{reasonLabel[adjustment.reason]}</Badge>
                      </div>
                      <p className="mt-1 text-sm text-slate-500">
                        {adjustment.outlet?.name ?? "-"}
                      </p>
                    </div>
                  </div>

                  <div className="mt-5 grid gap-3 sm:grid-cols-3">
                    <div className="rounded-2xl border border-slate-200 bg-white p-4">
                      <div className="text-xs font-medium uppercase tracking-wide text-slate-500">
                        Tanggal
                      </div>
                      <div className="mt-2 font-semibold text-slate-950">
                        {formatDateTime(adjustment.adjustment_date)}
                      </div>
                    </div>

                    <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                      <div className="text-xs font-medium uppercase tracking-wide text-slate-500">
                        Jumlah Item
                      </div>
                      <div className="mt-2 text-xl font-semibold text-slate-950">
                        {adjustment.items?.length ?? 0}
                      </div>
                    </div>

                    <div className="rounded-2xl border border-orange-100 bg-orange-50 p-4">
                      <div className="text-xs font-medium uppercase tracking-wide text-[var(--brand-brick)]">
                        Alasan
                      </div>
                      <div className="mt-2 font-semibold text-slate-950">
                        {reasonLabel[adjustment.reason]}
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 rounded-2xl border border-slate-200 bg-slate-50/70 p-4 text-sm">
                    <div className="text-xs font-medium text-slate-500">Catatan</div>
                    <div className="mt-1 text-slate-700">{adjustment.notes || "-"}</div>
                  </div>

                  <div className="mt-4 flex flex-col gap-2 sm:flex-row sm:flex-wrap">
                    <Button variant="outline" onClick={() => setDetailAdjustment(adjustment)}>
                      Detail
                    </Button>
                    <Button variant="outline" onClick={() => openEditAdjustment(adjustment)}>
                      Edit
                    </Button>
                    <Button variant="danger" onClick={() => setDeleteAdjustmentTarget(adjustment)}>
                      Hapus
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          )
        ) : null}

        {activeTab === "transfers" ? (
          transfersQuery.isLoading ? (
            <Card>
              <div className="flex min-h-40 items-center justify-center text-sm text-[var(--color-muted)]">
                Memuat stock transfer...
              </div>
            </Card>
          ) : transfersQuery.isError ? (
            <PageErrorState onRetry={() => void transfersQuery.refetch()} />
          ) : !transfers.length ? (
            <PageEmptyState title="Belum ada stock transfer" />
          ) : (
            <div className="grid gap-4 xl:grid-cols-2">
              {transfers.map((transfer) => (
                <Card key={transfer.id}>
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                    <div className="min-w-0">
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="truncate text-base font-semibold text-slate-950">
                          {transfer.transfer_number}
                        </h3>
                        <Badge variant={transferStatusVariant[transfer.status]}>
                          {transfer.status}
                        </Badge>
                      </div>
                      <p className="mt-1 text-sm text-slate-500">
                        {transfer.source_outlet?.name ?? "-"} →{" "}
                        {transfer.target_outlet?.name ?? "-"}
                      </p>
                    </div>
                  </div>

                  <div className="mt-5 grid gap-3 sm:grid-cols-3">
                    <div className="rounded-2xl border border-slate-200 bg-white p-4">
                      <div className="text-xs font-medium uppercase tracking-wide text-slate-500">
                        Tanggal
                      </div>
                      <div className="mt-2 font-semibold text-slate-950">
                        {formatDateTime(transfer.transfer_date)}
                      </div>
                    </div>

                    <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                      <div className="text-xs font-medium uppercase tracking-wide text-slate-500">
                        Jumlah Item
                      </div>
                      <div className="mt-2 text-xl font-semibold text-slate-950">
                        {transfer.items?.length ?? 0}
                      </div>
                    </div>

                    <div className="rounded-2xl border border-orange-100 bg-orange-50 p-4">
                      <div className="text-xs font-medium uppercase tracking-wide text-[var(--brand-brick)]">
                        Status
                      </div>
                      <div className="mt-2 font-semibold text-slate-950">{transfer.status}</div>
                    </div>
                  </div>

                  <div className="mt-4 rounded-2xl border border-slate-200 bg-slate-50/70 p-4 text-sm">
                    <div className="text-xs font-medium text-slate-500">Catatan</div>
                    <div className="mt-1 text-slate-700">{transfer.notes || "-"}</div>
                  </div>

                  <div className="mt-4 flex flex-col gap-2 sm:flex-row sm:flex-wrap">
                    <Button variant="outline" onClick={() => setDetailTransfer(transfer)}>
                      Detail
                    </Button>

                    {transfer.status === "draft" ? (
                      <>
                        <Button variant="outline" onClick={() => openEditTransfer(transfer)}>
                          Edit
                        </Button>
                        <Button
                          loading={transferActionMutation.isPending}
                          onClick={() =>
                            transferActionMutation.mutate({ id: transfer.id, action: "send" })
                          }
                        >
                          Send
                        </Button>
                        <Button variant="danger" onClick={() => setDeleteTransferTarget(transfer)}>
                          Hapus
                        </Button>
                      </>
                    ) : null}

                    {transfer.status === "sent" ? (
                      <>
                        <Button
                          loading={transferActionMutation.isPending}
                          onClick={() =>
                            transferActionMutation.mutate({ id: transfer.id, action: "receive" })
                          }
                        >
                          Receive
                        </Button>
                        <Button
                          variant="danger"
                          loading={transferActionMutation.isPending}
                          onClick={() =>
                            transferActionMutation.mutate({ id: transfer.id, action: "cancel" })
                          }
                        >
                          Cancel
                        </Button>
                      </>
                    ) : null}
                  </div>
                </Card>
              ))}
            </div>
          )
        ) : null}

        {activeTab === "opnames" ? (
          opnamesQuery.isLoading ? (
            <Card>
              <div className="flex min-h-40 items-center justify-center text-sm text-[var(--color-muted)]">
                Memuat stock opname...
              </div>
            </Card>
          ) : opnamesQuery.isError ? (
            <PageErrorState onRetry={() => void opnamesQuery.refetch()} />
          ) : !opnames.length ? (
            <PageEmptyState title="Belum ada stock opname" />
          ) : (
            <div className="grid gap-4 xl:grid-cols-2">
              {opnames.map((opname) => (
                <Card key={opname.id}>
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                    <div className="min-w-0">
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="truncate text-base font-semibold text-slate-950">
                          {opname.opname_number}
                        </h3>
                        <Badge variant={opnameStatusVariant[opname.status]}>
                          {opname.status}
                        </Badge>
                      </div>
                      <p className="mt-1 text-sm text-slate-500">{opname.outlet?.name ?? "-"}</p>
                    </div>
                  </div>

                  <div className="mt-5 grid gap-3 sm:grid-cols-3">
                    <div className="rounded-2xl border border-slate-200 bg-white p-4">
                      <div className="text-xs font-medium uppercase tracking-wide text-slate-500">
                        Tanggal
                      </div>
                      <div className="mt-2 font-semibold text-slate-950">
                        {formatDate(opname.opname_date)}
                      </div>
                    </div>

                    <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                      <div className="text-xs font-medium uppercase tracking-wide text-slate-500">
                        Jumlah Item
                      </div>
                      <div className="mt-2 text-xl font-semibold text-slate-950">
                        {opname.items?.length ?? 0}
                      </div>
                    </div>

                    <div className="rounded-2xl border border-orange-100 bg-orange-50 p-4">
                      <div className="text-xs font-medium uppercase tracking-wide text-[var(--brand-brick)]">
                        Status
                      </div>
                      <div className="mt-2 font-semibold text-slate-950">{opname.status}</div>
                    </div>
                  </div>

                  <div className="mt-4 rounded-2xl border border-slate-200 bg-slate-50/70 p-4 text-sm">
                    <div className="text-xs font-medium text-slate-500">Catatan</div>
                    <div className="mt-1 text-slate-700">{opname.notes || "-"}</div>
                  </div>

                  <div className="mt-4 flex flex-col gap-2 sm:flex-row sm:flex-wrap">
                    <Button variant="outline" onClick={() => setDetailOpname(opname)}>
                      Detail
                    </Button>

                    {opname.status === "draft" ? (
                      <>
                        <Button variant="outline" onClick={() => openEditOpname(opname)}>
                          Edit
                        </Button>
                        <Button
                          loading={opnameActionMutation.isPending}
                          onClick={() =>
                            opnameActionMutation.mutate({ id: opname.id, action: "post" })
                          }
                        >
                          Post
                        </Button>
                        <Button
                          variant="danger"
                          loading={opnameActionMutation.isPending}
                          onClick={() =>
                            opnameActionMutation.mutate({ id: opname.id, action: "cancel" })
                          }
                        >
                          Cancel
                        </Button>
                        <Button variant="danger" onClick={() => setDeleteOpnameTarget(opname)}>
                          Hapus
                        </Button>
                      </>
                    ) : null}
                  </div>
                </Card>
              ))}
            </div>
          )
        ) : null}

        {activeTab === "movements" ? (
          movementsQuery.isLoading ? (
            <Card>
              <div className="flex min-h-40 items-center justify-center text-sm text-[var(--color-muted)]">
                Memuat movement history...
              </div>
            </Card>
          ) : movementsQuery.isError ? (
            <PageErrorState onRetry={() => void movementsQuery.refetch()} />
          ) : !movements.length ? (
            <PageEmptyState title="Belum ada movement history" />
          ) : (
            <div className="grid gap-4 xl:grid-cols-2">
              {movements.map((movement) => (
                <Card key={movement.id}>
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                    <div className="min-w-0">
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="truncate text-base font-semibold text-slate-950">
                          {movement.movement_type}
                        </h3>
                        <Badge variant="info">{movement.items?.length ?? 0} item</Badge>
                      </div>
                      <p className="mt-1 text-sm text-slate-500">{movement.outlet?.name ?? "-"}</p>
                    </div>
                  </div>

                  <div className="mt-5 grid gap-3 sm:grid-cols-3">
                    <div className="rounded-2xl border border-slate-200 bg-white p-4">
                      <div className="text-xs font-medium uppercase tracking-wide text-slate-500">
                        Tanggal
                      </div>
                      <div className="mt-2 font-semibold text-slate-950">
                        {formatDateTime(movement.movement_date)}
                      </div>
                    </div>

                    <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                      <div className="text-xs font-medium uppercase tracking-wide text-slate-500">
                        Reference
                      </div>
                      <div className="mt-2 font-semibold text-slate-950">
                        #{movement.reference_id ?? "-"}
                      </div>
                    </div>

                    <div className="rounded-2xl border border-orange-100 bg-orange-50 p-4">
                      <div className="text-xs font-medium uppercase tracking-wide text-[var(--brand-brick)]">
                        Items
                      </div>
                      <div className="mt-2 text-xl font-semibold text-slate-950">
                        {movement.items?.length ?? 0}
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 rounded-2xl border border-slate-200 bg-slate-50/70 p-4 text-sm">
                    <div className="text-xs font-medium text-slate-500">Catatan</div>
                    <div className="mt-1 text-slate-700">{movement.notes || "-"}</div>
                  </div>

                  <div className="mt-4">
                    <Button variant="outline" onClick={() => setDetailMovement(movement)}>
                      Detail
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          )
        ) : null}

        <Modal
          open={openAdjustmentModal}
          title={editingAdjustment ? "Edit Stock Adjustment" : "Buat Stock Adjustment"}
          description="Isi outlet, tanggal, alasan adjustment, dan daftar bahan yang disesuaikan."
          onClose={() => setOpenAdjustmentModal(false)}
          footer={
            <>
              <Button variant="outline" onClick={() => setOpenAdjustmentModal(false)}>
                Batal
              </Button>
              <Button
                loading={adjustmentMutation.isPending}
                onClick={() => adjustmentMutation.mutate(adjustmentForm)}
              >
                Simpan
              </Button>
            </>
          }
        >
          <div className="max-h-[72vh] space-y-5 overflow-y-auto pr-1">
            <div className="rounded-2xl border border-slate-200 bg-white p-4">
              <div className="mb-4">
                <h3 className="text-sm font-semibold text-slate-900">Informasi Adjustment</h3>
                <p className="mt-1 text-xs text-slate-500">
                  Tentukan outlet, waktu pencatatan, dan alasan perubahan stok.
                </p>
              </div>

              <div className="grid gap-4 md:grid-cols-3">
                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">Outlet</label>
                  <select
                    className={selectClassName}
                    value={adjustmentForm.outlet_id || ""}
                    onChange={(event) =>
                      setAdjustmentForm((prev) => ({
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

                <Input
                  label="Tanggal Adjustment"
                  type="datetime-local"
                  value={adjustmentForm.adjustment_date}
                  onChange={(event) =>
                    setAdjustmentForm((prev) => ({
                      ...prev,
                      adjustment_date: event.target.value,
                    }))
                  }
                />

                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">Alasan</label>
                  <select
                    className={selectClassName}
                    value={adjustmentForm.reason}
                    onChange={(event) =>
                      setAdjustmentForm((prev) => ({
                        ...prev,
                        reason: event.target.value as StockAdjustmentReason,
                      }))
                    }
                  >
                    {adjustmentReasonOptions.map((reason) => (
                      <option key={reason} value={reason}>
                        {reasonLabel[reason]}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="md:col-span-3">
                  <Input
                    label="Catatan"
                    value={adjustmentForm.notes ?? ""}
                    onChange={(event) =>
                      setAdjustmentForm((prev) => ({
                        ...prev,
                        notes: event.target.value,
                      }))
                    }
                  />
                </div>
              </div>
            </div>

            <StockFlowItemsEditor
              mode="adjustment"
              value={adjustmentForm.items}
              onChange={(items) => setAdjustmentForm((prev) => ({ ...prev, items }))}
              rawMaterials={rawMaterials}
              units={units}
            />
          </div>
        </Modal>

        <Modal
          open={openTransferModal}
          title={editingTransfer ? "Edit Stock Transfer" : "Buat Stock Transfer"}
          description="Buat perpindahan stok bahan dari outlet asal ke outlet tujuan."
          onClose={() => setOpenTransferModal(false)}
          footer={
            <>
              <Button variant="outline" onClick={() => setOpenTransferModal(false)}>
                Batal
              </Button>
              <Button
                loading={transferMutation.isPending}
                onClick={() => transferMutation.mutate(transferForm)}
              >
                Simpan
              </Button>
            </>
          }
        >
          <div className="max-h-[72vh] space-y-5 overflow-y-auto pr-1">
            <div className="rounded-2xl border border-slate-200 bg-white p-4">
              <div className="mb-4">
                <h3 className="text-sm font-semibold text-slate-900">Informasi Transfer</h3>
                <p className="mt-1 text-xs text-slate-500">
                  Pilih outlet asal, outlet tujuan, dan tanggal transfer stok.
                </p>
              </div>

              <div className="grid gap-4 md:grid-cols-3">
                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">
                    Outlet Asal
                  </label>
                  <select
                    className={selectClassName}
                    value={transferForm.source_outlet_id || ""}
                    onChange={(event) =>
                      setTransferForm((prev) => ({
                        ...prev,
                        source_outlet_id: Number(event.target.value || 0),
                      }))
                    }
                  >
                    <option value="">Pilih outlet asal</option>
                    {outlets.map((outlet) => (
                      <option key={outlet.id} value={outlet.id}>
                        {outlet.name} ({outlet.code})
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">
                    Outlet Tujuan
                  </label>
                  <select
                    className={selectClassName}
                    value={transferForm.target_outlet_id || ""}
                    onChange={(event) =>
                      setTransferForm((prev) => ({
                        ...prev,
                        target_outlet_id: Number(event.target.value || 0),
                      }))
                    }
                  >
                    <option value="">Pilih outlet tujuan</option>
                    {outlets.map((outlet) => (
                      <option key={outlet.id} value={outlet.id}>
                        {outlet.name} ({outlet.code})
                      </option>
                    ))}
                  </select>
                </div>

                <Input
                  label="Tanggal Transfer"
                  type="datetime-local"
                  value={transferForm.transfer_date}
                  onChange={(event) =>
                    setTransferForm((prev) => ({
                      ...prev,
                      transfer_date: event.target.value,
                    }))
                  }
                />

                <div className="md:col-span-3">
                  <Input
                    label="Catatan"
                    value={transferForm.notes ?? ""}
                    onChange={(event) =>
                      setTransferForm((prev) => ({
                        ...prev,
                        notes: event.target.value,
                      }))
                    }
                  />
                </div>
              </div>
            </div>

            <StockFlowItemsEditor
              mode="transfer"
              value={transferForm.items}
              onChange={(items) => setTransferForm((prev) => ({ ...prev, items }))}
              rawMaterials={rawMaterials}
              units={units}
            />
          </div>
        </Modal>

        <Modal
          open={openOpnameModal}
          title={editingOpname ? "Edit Stock Opname" : "Buat Stock Opname"}
          description="Catat hasil opname fisik bahan baku dan bandingkan dengan stok sistem."
          onClose={() => setOpenOpnameModal(false)}
          footer={
            <>
              <Button variant="outline" onClick={() => setOpenOpnameModal(false)}>
                Batal
              </Button>
              <Button loading={opnameMutation.isPending} onClick={() => opnameMutation.mutate(opnameForm)}>
                Simpan
              </Button>
            </>
          }
        >
          <div className="max-h-[72vh] space-y-5 overflow-y-auto pr-1">
            <div className="rounded-2xl border border-slate-200 bg-white p-4">
              <div className="mb-4">
                <h3 className="text-sm font-semibold text-slate-900">Informasi Opname</h3>
                <p className="mt-1 text-xs text-slate-500">
                  Pilih outlet dan tanggal opname. Item akan mengikuti stok outlet terpilih.
                </p>
              </div>

              <div className="grid gap-4 md:grid-cols-3">
                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">Outlet</label>
                  <select
                    className={selectClassName}
                    value={opnameForm.outlet_id || ""}
                    onChange={(event) =>
                      setOpnameForm((prev) => ({
                        ...prev,
                        outlet_id: Number(event.target.value || 0),
                        items: createInitialStockItems<StockOpnameItemPayload>("opname"),
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

                <Input
                  label="Tanggal Opname"
                  type="date"
                  value={opnameForm.opname_date}
                  onChange={(event) =>
                    setOpnameForm((prev) => ({
                      ...prev,
                      opname_date: event.target.value,
                    }))
                  }
                />

                <Input
                  label="Catatan"
                  value={opnameForm.notes ?? ""}
                  onChange={(event) =>
                    setOpnameForm((prev) => ({
                      ...prev,
                      notes: event.target.value,
                    }))
                  }
                />
              </div>
            </div>

            <StockFlowItemsEditor
              mode="opname"
              value={opnameForm.items}
              onChange={(items) => setOpnameForm((prev) => ({ ...prev, items }))}
              rawMaterials={rawMaterials}
              units={units}
              outletStocks={outletStocks}
            />
          </div>
        </Modal>

        <Modal
          open={Boolean(detailAdjustment)}
          title={detailAdjustment?.adjustment_number ?? "Detail Adjustment"}
          onClose={() => setDetailAdjustment(null)}
        >
          <div className="max-h-[70vh] space-y-3 overflow-y-auto pr-1">
            {detailAdjustment?.items?.map((item) => (
              <div key={item.id} className="rounded-2xl border border-slate-200 bg-white p-4 text-sm shadow-sm">
                <div className="font-semibold text-slate-900">{item.raw_material?.name ?? "-"}</div>
                <div className="mt-2 grid gap-2 sm:grid-cols-2">
                  <div className="rounded-xl bg-slate-50 px-3 py-2 text-slate-600">
                    Selisih:{" "}
                    <span className="font-semibold text-slate-900">
                      {formatNumber(item.qty_difference)} {item.unit?.code ?? ""}
                    </span>
                  </div>
                  <div className="rounded-xl bg-slate-50 px-3 py-2 text-slate-600">
                    Catatan: <span className="text-slate-900">{item.notes ?? "-"}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Modal>

        <Modal
          open={Boolean(detailTransfer)}
          title={detailTransfer?.transfer_number ?? "Detail Transfer"}
          onClose={() => setDetailTransfer(null)}
        >
          <div className="max-h-[70vh] space-y-3 overflow-y-auto pr-1">
            {detailTransfer?.items?.map((item) => (
              <div key={item.id} className="rounded-2xl border border-slate-200 bg-white p-4 text-sm shadow-sm">
                <div className="font-semibold text-slate-900">{item.raw_material?.name ?? "-"}</div>
                <div className="mt-2 grid gap-2 sm:grid-cols-3">
                  <div className="rounded-xl bg-slate-50 px-3 py-2 text-slate-600">
                    Kirim:{" "}
                    <span className="font-semibold text-slate-900">
                      {formatNumber(item.qty_sent)} {item.unit?.code ?? ""}
                    </span>
                  </div>
                  <div className="rounded-xl bg-slate-50 px-3 py-2 text-slate-600">
                    Terima:{" "}
                    <span className="font-semibold text-slate-900">
                      {item.qty_received === null ? "-" : formatNumber(item.qty_received)}{" "}
                      {item.unit?.code ?? ""}
                    </span>
                  </div>
                  <div className="rounded-xl bg-slate-50 px-3 py-2 text-slate-600">
                    Catatan: <span className="text-slate-900">{item.notes ?? "-"}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Modal>

        <Modal
          open={Boolean(detailOpname)}
          title={detailOpname?.opname_number ?? "Detail Opname"}
          onClose={() => setDetailOpname(null)}
        >
          <div className="max-h-[70vh] space-y-3 overflow-y-auto pr-1">
            {detailOpname?.items?.map((item) => (
              <div key={item.id} className="rounded-2xl border border-slate-200 bg-white p-4 text-sm shadow-sm">
                <div className="font-semibold text-slate-900">{item.raw_material?.name ?? "-"}</div>
                <div className="mt-2 grid gap-2 sm:grid-cols-4">
                  <div className="rounded-xl bg-slate-50 px-3 py-2 text-slate-600">
                    Sistem:{" "}
                    <span className="font-semibold text-slate-900">
                      {formatNumber(item.system_qty)} {item.unit?.code ?? ""}
                    </span>
                  </div>
                  <div className="rounded-xl bg-slate-50 px-3 py-2 text-slate-600">
                    Fisik:{" "}
                    <span className="font-semibold text-slate-900">
                      {formatNumber(item.actual_qty)} {item.unit?.code ?? ""}
                    </span>
                  </div>
                  <div className="rounded-xl bg-orange-50 px-3 py-2 text-[var(--brand-brick)]">
                    Selisih:{" "}
                    <span className="font-semibold">
                      {formatNumber(item.difference_qty)} {item.unit?.code ?? ""}
                    </span>
                  </div>
                  <div className="rounded-xl bg-slate-50 px-3 py-2 text-slate-600">
                    Catatan: <span className="text-slate-900">{item.notes ?? "-"}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Modal>

        <Modal open={Boolean(detailMovement)} title="Detail Movement" onClose={() => setDetailMovement(null)}>
          <div className="max-h-[70vh] space-y-3 overflow-y-auto pr-1">
            {detailMovement?.items?.map((item) => (
              <div key={item.id} className="rounded-2xl border border-slate-200 bg-white p-4 text-sm shadow-sm">
                <div className="font-semibold text-slate-900">{item.raw_material?.name ?? "-"}</div>
                <div className="mt-2 grid gap-2 sm:grid-cols-4">
                  <div className="rounded-xl bg-emerald-50 px-3 py-2 text-emerald-700">
                    Masuk: <span className="font-semibold">{formatNumber(item.qty_in)}</span>
                  </div>
                  <div className="rounded-xl bg-red-50 px-3 py-2 text-red-700">
                    Keluar: <span className="font-semibold">{formatNumber(item.qty_out)}</span>
                  </div>
                  <div className="rounded-xl bg-slate-50 px-3 py-2 text-slate-600">
                    Unit Cost:{" "}
                    <span className="font-semibold text-slate-900">
                      {formatCurrency(item.unit_cost)}
                    </span>
                  </div>
                  <div className="rounded-xl bg-slate-50 px-3 py-2 text-slate-600">
                    Catatan: <span className="text-slate-900">{item.notes ?? "-"}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Modal>

        <ConfirmDialog
          open={Boolean(deleteAdjustmentTarget)}
          title="Hapus stock adjustment?"
          description={`Adjustment ${deleteAdjustmentTarget?.adjustment_number ?? ""} akan dihapus.`}
          confirmText="Hapus"
          confirmVariant="danger"
          loading={deleteAdjustmentMutation.isPending}
          onClose={() => setDeleteAdjustmentTarget(null)}
          onConfirm={() => {
            if (deleteAdjustmentTarget) {
              deleteAdjustmentMutation.mutate(deleteAdjustmentTarget);
            }
          }}
        />

        <ConfirmDialog
          open={Boolean(deleteTransferTarget)}
          title="Hapus stock transfer?"
          description={`Transfer ${deleteTransferTarget?.transfer_number ?? ""} akan dihapus.`}
          confirmText="Hapus"
          confirmVariant="danger"
          loading={deleteTransferMutation.isPending}
          onClose={() => setDeleteTransferTarget(null)}
          onConfirm={() => {
            if (deleteTransferTarget) {
              deleteTransferMutation.mutate(deleteTransferTarget);
            }
          }}
        />

        <ConfirmDialog
          open={Boolean(deleteOpnameTarget)}
          title="Hapus stock opname?"
          description={`Opname ${deleteOpnameTarget?.opname_number ?? ""} akan dihapus.`}
          confirmText="Hapus"
          confirmVariant="danger"
          loading={deleteOpnameMutation.isPending}
          onClose={() => setDeleteOpnameTarget(null)}
          onConfirm={() => {
            if (deleteOpnameTarget) {
              deleteOpnameMutation.mutate(deleteOpnameTarget);
            }
          }}
        />
      </div>
    </PermissionWrapper>
  );
}
```
</details>

<a id="file-srcmodulesadminpagessupplierspagetsx"></a>
### src\modules\admin\pages\SuppliersPage.tsx
- SHA: `7c06e0606a2f`  
- Ukuran: 13 KB
<details><summary><strong>Lihat Kode Lengkap</strong></summary>

```tsx
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
      <div className="space-y-5">
        <PageHeader
          title="Supplier"
          description="Kelola data supplier bahan baku dan vendor pembelian."
          actions={<Button onClick={openCreate}>Tambah Supplier</Button>}
        />

        <Card>
          <div className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_220px_140px] lg:items-end">
            <Input
              label="Pencarian"
              placeholder="Cari kode, nama, telepon, email, kota..."
              value={search}
              onChange={(event) => setSearch(event.target.value)}
            />

            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">
                Status
              </label>
              <select
                className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm text-slate-800 shadow-sm outline-none transition focus:border-[var(--brand-brick)] focus:ring-2 focus:ring-orange-100"
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

            <div className="rounded-xl border border-[var(--color-border)] bg-[var(--brand-brick-soft)] px-4 py-3">
              <div className="text-xs font-semibold uppercase tracking-wide text-[var(--brand-brick)]">
                Total
              </div>
              <div className="mt-1 text-lg font-semibold text-[var(--color-text)]">
                {suppliers.length}
              </div>
            </div>
          </div>
        </Card>

        {suppliersQuery.isLoading ? (
          <Card>
            <div className="flex min-h-40 items-center justify-center text-sm text-[var(--color-muted)]">
              Memuat data supplier...
            </div>
          </Card>
        ) : suppliersQuery.isError ? (
          <PageErrorState onRetry={() => void suppliersQuery.refetch()} />
        ) : !suppliers.length ? (
          <PageEmptyState
            title="Belum ada supplier"
            description="Data supplier belum tersedia atau tidak cocok dengan filter."
          />
        ) : (
          <div className="grid gap-4 xl:grid-cols-2">
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
                  <div className="rounded-xl border border-slate-100 bg-slate-50/70 p-3">
                    <div className="text-xs font-medium uppercase tracking-wide text-slate-400">
                      Kontak
                    </div>
                    <div className="mt-1 font-medium text-slate-800">
                      {supplier.contact_person ?? "-"}
                    </div>
                  </div>

                  <div className="rounded-xl border border-slate-100 bg-slate-50/70 p-3">
                    <div className="text-xs font-medium uppercase tracking-wide text-slate-400">
                      Telepon
                    </div>
                    <div className="mt-1 font-medium text-slate-800">
                      {supplier.phone ?? "-"}
                    </div>
                  </div>

                  <div className="rounded-xl border border-slate-100 bg-slate-50/70 p-3">
                    <div className="text-xs font-medium uppercase tracking-wide text-slate-400">
                      Email
                    </div>
                    <div className="mt-1 break-all font-medium text-slate-800">
                      {supplier.email ?? "-"}
                    </div>
                  </div>

                  <div className="rounded-xl border border-slate-100 bg-slate-50/70 p-3">
                    <div className="text-xs font-medium uppercase tracking-wide text-slate-400">
                      Kota
                    </div>
                    <div className="mt-1 font-medium text-slate-800">
                      {supplier.city ?? "-"}
                    </div>
                  </div>

                  <div className="rounded-xl border border-slate-100 bg-slate-50/70 p-3 md:col-span-2">
                    <div className="text-xs font-medium uppercase tracking-wide text-slate-400">
                      Alamat
                    </div>
                    <div className="mt-1 leading-6 text-slate-700">
                      {supplier.address ?? "-"}
                    </div>
                  </div>
                </div>

                <div className="mt-5 flex flex-col gap-2 border-t border-slate-100 pt-4 sm:flex-row sm:justify-end">
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
          description="Lengkapi identitas supplier untuk kebutuhan pembelian bahan baku."
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
          <div className="max-h-[72vh] space-y-5 overflow-y-auto pr-1">
            <div className="rounded-2xl border border-slate-200 bg-white p-4">
              <div className="mb-4">
                <h3 className="text-sm font-semibold text-slate-900">
                  Informasi Supplier
                </h3>
                <p className="mt-1 text-xs text-slate-500">
                  Data utama supplier yang digunakan pada proses purchase order.
                </p>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <Input
                  label="Kode"
                  value={form.code ?? ""}
                  onChange={(event) =>
                    setForm((prev) => ({ ...prev, code: event.target.value }))
                  }
                />

                <Input
                  label="Nama Supplier"
                  value={form.name}
                  onChange={(event) =>
                    setForm((prev) => ({ ...prev, name: event.target.value }))
                  }
                />

                <Input
                  label="Telepon"
                  value={form.phone ?? ""}
                  onChange={(event) =>
                    setForm((prev) => ({ ...prev, phone: event.target.value }))
                  }
                />

                <Input
                  label="Email"
                  type="email"
                  value={form.email ?? ""}
                  onChange={(event) =>
                    setForm((prev) => ({ ...prev, email: event.target.value }))
                  }
                />

                <Input
                  label="Kota"
                  value={form.city ?? ""}
                  onChange={(event) =>
                    setForm((prev) => ({ ...prev, city: event.target.value }))
                  }
                />

                <Input
                  label="Contact Person"
                  value={form.contact_person ?? ""}
                  onChange={(event) =>
                    setForm((prev) => ({
                      ...prev,
                      contact_person: event.target.value,
                    }))
                  }
                />
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-slate-50/70 p-4">
              <Input
                label="Alamat"
                value={form.address ?? ""}
                onChange={(event) =>
                  setForm((prev) => ({ ...prev, address: event.target.value }))
                }
              />
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-4">
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
- SHA: `0d45f513c916`  
- Ukuran: 5 KB
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
    mutationFn: (payload: SystemSettingPayloadItem[]) =>
      masterDataService.upsertSystemSettings(payload),
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
      <div className="space-y-5">
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
          <div className="grid gap-3 md:grid-cols-[1fr_auto] md:items-end">
            <Input
              label="Pencarian"
              placeholder="Cari key setting..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />

            <div className="rounded-xl border border-[var(--color-border)] bg-[var(--brand-brick-soft)] px-4 py-3 text-sm">
              <div className="text-xs font-medium uppercase tracking-wide text-[var(--brand-brick)]">
                Perubahan
              </div>
              <div className="mt-1 text-lg font-semibold text-[var(--color-text)]">
                {changedItems.length}
              </div>
            </div>
          </div>
        </Card>

        {settingsQuery.isLoading ? (
          <Card>
            <div className="flex min-h-40 items-center justify-center text-sm text-[var(--color-muted)]">
              Memuat system settings...
            </div>
          </Card>
        ) : settingsQuery.isError ? (
          <PageErrorState onRetry={() => void settingsQuery.refetch()} />
        ) : !settings.length ? (
          <PageEmptyState title="Belum ada system settings" />
        ) : (
          <div className="space-y-3">
            {settings.map((item) => {
              const isChanged = Object.prototype.hasOwnProperty.call(drafts, item.id);

              return (
                <Card key={item.id}>
                  <div className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_minmax(280px,560px)] lg:items-start">
                    <div className="min-w-0">
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="truncate text-sm font-semibold text-[var(--color-text)]">
                          {item.key}
                        </h3>
                        <Badge variant="info">{item.type}</Badge>
                        {isChanged ? <Badge variant="warning">Diubah</Badge> : null}
                      </div>

                      <p className="mt-2 text-xs leading-5 text-[var(--color-muted)]">
                        Nilai setting dapat disesuaikan lalu disimpan secara batch melalui tombol
                        Simpan Perubahan.
                      </p>
                    </div>

                    <div className="w-full">
                      <Input
                        label="Value"
                        value={drafts[item.id] ?? item.value ?? ""}
                        onChange={(e) => updateDraft(item, e.target.value)}
                      />
                    </div>
                  </div>
                </Card>
              );
            })}
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
- SHA: `0819a5ad3d3d`  
- Ukuran: 16 KB
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
      <div className="space-y-5">
        <PageHeader
          title="Satuan & Konversi"
          description="Kelola satuan bahan baku dan konversi antar satuan."
          actions={
            <div className="flex w-full flex-col gap-2 sm:w-auto sm:flex-row">
              <Button onClick={openCreateUnit}>Tambah Satuan</Button>
              <Button variant="outline" onClick={openCreateConversion}>
                Tambah Konversi
              </Button>
            </div>
          }
        />

        <Card>
          <div className="grid gap-4 lg:grid-cols-[1fr_auto_auto] lg:items-end">
            <Input
              label="Pencarian"
              placeholder="Cari nama atau kode satuan..."
              value={search}
              onChange={(event) => setSearch(event.target.value)}
            />

            <div className="rounded-2xl border border-orange-100 bg-[var(--brand-brick-soft)] px-4 py-3">
              <div className="text-xs font-semibold uppercase tracking-wide text-[var(--brand-brick)]">
                Total Satuan
              </div>
              <div className="mt-1 text-xl font-semibold text-[var(--color-text)]">
                {units.length}
              </div>
            </div>

            <div className="rounded-2xl border border-yellow-200 bg-[var(--brand-yellow-soft)] px-4 py-3">
              <div className="text-xs font-semibold uppercase tracking-wide text-yellow-700">
                Total Konversi
              </div>
              <div className="mt-1 text-xl font-semibold text-[var(--color-text)]">
                {conversions.length}
              </div>
            </div>
          </div>
        </Card>

        <div className="grid gap-5 xl:grid-cols-2">
          <Card title="Daftar Satuan">
            {unitsQuery.isLoading ? (
              <div className="flex min-h-40 items-center justify-center rounded-2xl border border-dashed border-slate-200 bg-slate-50 text-sm text-[var(--color-muted)]">
                Memuat satuan...
              </div>
            ) : unitsQuery.isError ? (
              <PageErrorState onRetry={() => void unitsQuery.refetch()} />
            ) : !units.length ? (
              <PageEmptyState title="Belum ada satuan" />
            ) : (
              <div className="space-y-3">
                {units.map((unit) => (
                  <div
                    key={unit.id}
                    className="group rounded-2xl border border-[var(--color-border)] bg-white p-4 shadow-sm transition hover:border-orange-200 hover:bg-orange-50/30"
                  >
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                      <div className="min-w-0">
                        <div className="truncate text-sm font-semibold text-slate-950">
                          {unit.name}
                        </div>
                        <div className="mt-1 inline-flex rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 text-xs font-semibold uppercase tracking-wide text-slate-600">
                          {unit.code}
                        </div>
                      </div>

                      <div className="flex flex-col gap-2 sm:flex-row sm:justify-end">
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
                  </div>
                ))}
              </div>
            )}
          </Card>

          <Card title="Konversi Satuan">
            {conversionsQuery.isLoading ? (
              <div className="flex min-h-40 items-center justify-center rounded-2xl border border-dashed border-slate-200 bg-slate-50 text-sm text-[var(--color-muted)]">
                Memuat konversi...
              </div>
            ) : conversionsQuery.isError ? (
              <PageErrorState onRetry={() => void conversionsQuery.refetch()} />
            ) : !conversions.length ? (
              <PageEmptyState title="Belum ada konversi satuan" />
            ) : (
              <div className="space-y-3">
                {conversions.map((conversion) => (
                  <div
                    key={conversion.id}
                    className="rounded-2xl border border-[var(--color-border)] bg-white p-4 shadow-sm transition hover:border-yellow-200 hover:bg-yellow-50/40"
                  >
                    <div className="space-y-3">
                      <div className="flex flex-col gap-2 rounded-xl bg-slate-50 p-3 text-sm sm:flex-row sm:items-center sm:justify-between">
                        <div className="font-medium text-slate-700">
                          1 {getUnitName(conversion.from_unit_id)}
                        </div>
                        <div className="hidden h-px flex-1 bg-slate-200 sm:block" />
                        <div className="font-semibold text-slate-950">
                          {Number(conversion.multiplier).toLocaleString("id-ID")}{" "}
                          {getUnitName(conversion.to_unit_id)}
                        </div>
                      </div>

                      <div className="flex flex-col gap-2 sm:flex-row sm:justify-end">
                        <Button
                          variant="outline"
                          onClick={() => openEditConversion(conversion)}
                        >
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
          <div className="space-y-4">
            <div className="rounded-2xl border border-slate-200 bg-slate-50/70 p-4">
              <h3 className="text-sm font-semibold text-slate-900">Informasi Satuan</h3>
              <p className="mt-1 text-xs leading-5 text-slate-500">
                Gunakan nama satuan yang mudah dibaca dan kode singkat yang konsisten.
              </p>
            </div>

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
          <div className="space-y-4">
            <div className="rounded-2xl border border-yellow-200 bg-[var(--brand-yellow-soft)] p-4">
              <h3 className="text-sm font-semibold text-slate-900">Aturan Konversi</h3>
              <p className="mt-1 text-xs leading-5 text-slate-600">
                Format konversi: 1 satuan asal sama dengan nilai multiplier pada satuan tujuan.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">
                  Dari Satuan
                </label>
                <select
                  className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm text-slate-800 shadow-sm outline-none transition focus:border-[var(--brand-brick)] focus:ring-2 focus:ring-orange-100"
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
                  className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm text-slate-800 shadow-sm outline-none transition focus:border-[var(--brand-brick)] focus:ring-2 focus:ring-orange-100"
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
- SHA: `88b270b7c6f4`  
- Ukuran: 18 KB
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
      <div className="space-y-5">
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
          <div className="grid gap-3 md:grid-cols-[1fr_auto] md:items-end">
            <Input
              label="Pencarian"
              placeholder="Cari nama, email, phone, atau username..."
              value={search}
              onChange={(e) => {
                setPage(1);
                setSearch(e.target.value);
              }}
            />

            <div className="rounded-xl border border-[var(--color-border)] bg-[var(--brand-brick-soft)] px-4 py-3 text-sm">
              <div className="text-xs font-medium uppercase tracking-wide text-[var(--brand-brick)]">
                Total User
              </div>
              <div className="mt-1 text-lg font-semibold text-[var(--color-text)]">
                {meta?.total ?? 0}
              </div>
            </div>
          </div>
        </Card>

        {usersQuery.isLoading ? (
          <Card>
            <div className="flex min-h-40 items-center justify-center text-sm text-[var(--color-muted)]">
              Memuat data user...
            </div>
          </Card>
        ) : usersQuery.isError ? (
          <PageErrorState onRetry={() => void usersQuery.refetch()} />
        ) : !users.length ? (
          <PageEmptyState
            title="Belum ada user"
            description="Data user belum tersedia atau tidak cocok dengan filter."
          />
        ) : (
          <Card>
            <div className="overflow-x-auto rounded-xl border border-[var(--color-border)]">
              <table className="min-w-full divide-y divide-slate-200 text-sm">
                <thead className="bg-slate-50">
                  <tr className="text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
                    <th className="px-4 py-3">Nama</th>
                    <th className="px-4 py-3">Login</th>
                    <th className="px-4 py-3">Role</th>
                    <th className="px-4 py-3">Outlet</th>
                    <th className="px-4 py-3">Status</th>
                    <th className="px-4 py-3 text-right">Aksi</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 bg-white">
                  {users.map((user) => (
                    <tr
                      key={user.id}
                      className="align-top transition-colors hover:bg-orange-50/40"
                    >
                      <td className="px-4 py-4">
                        <div className="font-semibold text-slate-900">{user.name}</div>
                        <div className="mt-1 text-xs capitalize text-slate-500">
                          {user.user_type ?? "-"}
                        </div>
                      </td>
                      <td className="px-4 py-4 text-slate-600">
                        <div className="max-w-xs truncate">
                          {user.email ?? user.username ?? user.phone ?? "-"}
                        </div>
                      </td>
                      <td className="px-4 py-4">
                        <div className="flex max-w-xs flex-wrap gap-2">
                          {(user.roles ?? []).length ? (
                            (user.roles ?? []).map((role) => (
                              <Badge key={role} variant="info">
                                {role}
                              </Badge>
                            ))
                          ) : (
                            <span className="text-sm text-slate-400">-</span>
                          )}
                        </div>
                      </td>
                      <td className="px-4 py-4 text-slate-600">
                        <div className="max-w-md leading-6">
                          {(user.outlet_accesses ?? []).length
                            ? user.outlet_accesses
                                ?.map((item) =>
                                  item.is_default
                                    ? `${item.outlet_name ?? item.outlet_code} (default)`
                                    : item.outlet_name ?? item.outlet_code
                                )
                                .join(", ")
                            : "-"}
                        </div>
                      </td>
                      <td className="px-4 py-4">
                        <Badge variant={user.is_active ? "success" : "danger"}>
                          {user.is_active ? "Aktif" : "Nonaktif"}
                        </Badge>
                      </td>
                      <td className="px-4 py-4">
                        <div className="flex flex-col justify-end gap-2 sm:flex-row">
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

            <div className="mt-4 flex flex-col gap-3 border-t border-slate-100 pt-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="text-sm text-slate-500">
                Halaman{" "}
                <span className="font-semibold text-slate-800">
                  {meta?.current_page ?? 1}
                </span>{" "}
                dari{" "}
                <span className="font-semibold text-slate-800">{totalPages}</span>
              </div>

              <div className="flex flex-col gap-2 sm:flex-row">
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
          <div className="max-h-[72vh] space-y-6 overflow-y-auto pr-1">
            <div className="rounded-2xl border border-slate-200 bg-white p-4">
              <div className="mb-4">
                <h3 className="text-sm font-semibold text-slate-900">Informasi Akun</h3>
                <p className="mt-1 text-xs text-slate-500">
                  Data utama untuk identitas dan akses login user.
                </p>
              </div>

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
            </div>

            <div className="rounded-2xl border border-slate-200 bg-slate-50/60 p-4">
              <div className="mb-4">
                <h3 className="text-sm font-semibold text-slate-900">Roles</h3>
                <p className="mt-1 text-xs text-slate-500">
                  Pilih role yang akan diberikan kepada user.
                </p>
              </div>

              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {roleOptions.map((role) => {
                  const checked = form.roles.includes(role.name);

                  return (
                    <div
                      key={role.id}
                      className="rounded-xl border border-slate-200 bg-white px-3 py-2"
                    >
                      <Checkbox
                        label={role.name}
                        checked={checked}
                        onChange={(e) => {
                          const nextRoles = e.target.checked
                            ? [...form.roles, role.name]
                            : form.roles.filter((item) => item !== role.name);

                          setForm((prev) => ({ ...prev, roles: nextRoles }));
                        }}
                      />
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-slate-50/60 p-4">
              <div className="mb-4">
                <h3 className="text-sm font-semibold text-slate-900">Outlet Access</h3>
                <p className="mt-1 text-xs text-slate-500">
                  Tentukan outlet yang dapat diakses oleh user.
                </p>
              </div>

              <div className="grid gap-3 md:grid-cols-2">
                {outletOptions.map((outlet) => {
                  const checked = form.outlet_ids?.includes(outlet.id) ?? false;

                  return (
                    <div
                      key={outlet.id}
                      className="rounded-xl border border-slate-200 bg-white px-3 py-2"
                    >
                      <Checkbox
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
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-4">
              <div className="grid gap-4 md:grid-cols-[1fr_auto] md:items-end">
                <div>
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
                    className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm text-slate-800 shadow-sm outline-none transition focus:border-[var(--brand-brick)] focus:ring-2 focus:ring-orange-100"
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
                  <p className="mt-2 text-xs text-slate-500">
                    Terpilih:{" "}
                    <span className="font-medium text-slate-700">
                      {selectedDefaultOutletName}
                    </span>
                  </p>
                </div>

                <div className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3">
                  <Checkbox
                    label="User aktif"
                    checked={Boolean(form.is_active)}
                    onChange={(e) => setForm((prev) => ({ ...prev, is_active: e.target.checked }))}
                  />
                </div>
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

<a id="file-srcmodulesadminpagesvoucherspagetsx"></a>
### src\modules\admin\pages\VouchersPage.tsx
- SHA: `a41a47dca924`  
- Ukuran: 17 KB
<details><summary><strong>Lihat Kode Lengkap</strong></summary>

```tsx
import { useState } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { PageHeader } from "@/components/navigation/PageHeader";
import { PermissionWrapper } from "@/components/navigation/PermissionWrapper";
import { PageEmptyState } from "@/components/feedback/PageEmptyState";
import { PageErrorState } from "@/components/feedback/PageErrorState";
import { Badge, Button, Card, ConfirmDialog, Input, Modal, Pagination } from "@/components/ui";
import { parseApiError } from "@/services/api/error-parser";
import { useToast } from "@/hooks/useToast";
import { customerPromoService } from "@/modules/admin/services/customer-promo.service";
import type { Voucher, VoucherAppliesTo, VoucherDiscountType, VoucherPayload } from "@/types/promo";

interface VoucherFormState {
    code: string;
    name: string;
    description: string;
    discount_type: VoucherDiscountType;
    discount_value: string;
    max_discount: string;
    min_order_total: string;
    quota: string;
    starts_at: string;
    ends_at: string;
    is_active: boolean;
    applies_to: VoucherAppliesTo;
}

const initialForm: VoucherFormState = {
    code: "",
    name: "",
    description: "",
    discount_type: "fixed",
    discount_value: "0",
    max_discount: "",
    min_order_total: "0",
    quota: "",
    starts_at: "",
    ends_at: "",
    is_active: true,
    applies_to: "all",
};

const toPayload = (form: VoucherFormState): VoucherPayload => ({
    code: form.code.trim().toUpperCase(),
    name: form.name.trim(),
    description: form.description.trim() || null,
    discount_type: form.discount_type,
    discount_value: Number(form.discount_value || 0),
    max_discount: form.max_discount === "" ? null : Number(form.max_discount),
    min_order_total: Number(form.min_order_total || 0),
    quota: form.quota === "" ? null : Number(form.quota),
    starts_at: form.starts_at || null,
    ends_at: form.ends_at || null,
    is_active: form.is_active,
    applies_to: form.applies_to,
});

const fromVoucher = (voucher: Voucher): VoucherFormState => ({
    code: voucher.code,
    name: voucher.name,
    description: voucher.description ?? "",
    discount_type: voucher.discount_type,
    discount_value: String(voucher.discount_value ?? 0),
    max_discount: voucher.max_discount === null ? "" : String(voucher.max_discount),
    min_order_total: String(voucher.min_order_total ?? 0),
    quota: voucher.quota === null ? "" : String(voucher.quota),
    starts_at: voucher.starts_at ?? "",
    ends_at: voucher.ends_at ?? "",
    is_active: Boolean(voucher.is_active),
    applies_to: voucher.applies_to,
});

export default function VouchersPage() {
    const toast = useToast();
    const queryClient = useQueryClient();

    const [page, setPage] = useState(1);
    const [search, setSearch] = useState("");
    const [isActive, setIsActive] = useState<boolean | "">("");
    const [open, setOpen] = useState(false);
    const [editing, setEditing] = useState<Voucher | null>(null);
    const [deleting, setDeleting] = useState<Voucher | null>(null);
    const [form, setForm] = useState<VoucherFormState>(initialForm);

    const vouchersQuery = useQuery({
        queryKey: ["admin-vouchers", page, search, isActive],
        queryFn: () =>
            customerPromoService.getVouchers({
                page,
                per_page: 10,
                search,
                is_active: isActive,
            }),
    });

    const vouchers = vouchersQuery.data?.items ?? [];
    const meta = vouchersQuery.data?.meta ?? null;

    const saveMutation = useMutation({
        mutationFn: () => {
            const payload = toPayload(form);

            if (editing) {
                return customerPromoService.updateVoucher(editing.id, payload);
            }

            return customerPromoService.createVoucher(payload);
        },
        onSuccess: (response) => {
            toast.success(response.message);
            setOpen(false);
            setEditing(null);
            setForm(initialForm);
            void queryClient.invalidateQueries({ queryKey: ["admin-vouchers"] });
        },
        onError: (error) => {
            toast.error("Gagal menyimpan voucher", parseApiError(error));
        },
    });

    const deleteMutation = useMutation({
        mutationFn: (voucher: Voucher) => customerPromoService.deleteVoucher(voucher.id),
        onSuccess: (response) => {
            toast.success(response.message);
            setDeleting(null);
            void queryClient.invalidateQueries({ queryKey: ["admin-vouchers"] });
        },
        onError: (error) => {
            toast.error("Gagal menghapus voucher", parseApiError(error));
        },
    });

    const openCreate = () => {
        setEditing(null);
        setForm(initialForm);
        setOpen(true);
    };

    const openEdit = (voucher: Voucher) => {
        setEditing(voucher);
        setForm(fromVoucher(voucher));
        setOpen(true);
    };

    return (
        <PermissionWrapper permission="vouchers.view">
            <div className="space-y-4">
                <PageHeader
                    title="Vouchers"
                    description="Kelola kode voucher, nominal diskon, masa aktif, kuota, dan status voucher."
                    actions={
                        <PermissionWrapper permission="vouchers.create" fallback={null}>
                            <Button onClick={openCreate}>Tambah Voucher</Button>
                        </PermissionWrapper>
                    }
                />

                <Card>
                    <div className="grid gap-4 md:grid-cols-3">
                        <Input
                            placeholder="Cari kode atau nama voucher..."
                            value={search}
                            onChange={(event) => {
                                setSearch(event.target.value);
                                setPage(1);
                            }}
                        />

                        <select
                            className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900"
                            value={isActive === "" ? "" : String(isActive)}
                            onChange={(event) => {
                                const value = event.target.value;
                                setIsActive(value === "" ? "" : value === "true");
                                setPage(1);
                            }}
                        >
                            <option value="">Semua Status</option>
                            <option value="true">Aktif</option>
                            <option value="false">Nonaktif</option>
                        </select>
                    </div>
                </Card>

                {vouchersQuery.isLoading ? (
                    <Card>Memuat data voucher...</Card>
                ) : vouchersQuery.isError ? (
                    <PageErrorState onRetry={() => void vouchersQuery.refetch()} />
                ) : !vouchers.length ? (
                    <PageEmptyState title="Belum ada voucher" />
                ) : (
                    <div className="grid gap-4 lg:grid-cols-2">
                        {vouchers.map((voucher) => (
                            <Card
                                key={voucher.id}
                                title={voucher.name}
                                description={voucher.code}
                                actions={
                                    <Badge variant={voucher.is_active ? "success" : "danger"}>
                                        {voucher.is_active ? "Aktif" : "Nonaktif"}
                                    </Badge>
                                }
                            >
                                <div className="space-y-2 text-sm text-slate-600">
                                    <div>
                                        Diskon:{" "}
                                        <span className="font-semibold text-slate-900">
                                            {voucher.discount_type === "percent"
                                                ? `${Number(voucher.discount_value).toLocaleString("id-ID")}%`
                                                : `Rp ${Number(voucher.discount_value).toLocaleString("id-ID")}`}
                                        </span>
                                    </div>
                                    <div>
                                        Minimal Order: Rp {Number(voucher.min_order_total ?? 0).toLocaleString("id-ID")}
                                    </div>
                                    <div>
                                        Kuota: {voucher.quota ?? "Tanpa batas"} | Dipakai: {voucher.used_count}
                                    </div>
                                    <div>
                                        Berlaku: {voucher.starts_at ?? "-"} s/d {voucher.ends_at ?? "-"}
                                    </div>
                                    <div>Applies To: {voucher.applies_to}</div>
                                </div>

                                <div className="mt-4 flex flex-wrap gap-2">
                                    <PermissionWrapper permission="vouchers.update" fallback={null}>
                                        <Button variant="secondary" onClick={() => openEdit(voucher)}>
                                            Edit
                                        </Button>
                                    </PermissionWrapper>
                                    <PermissionWrapper permission="vouchers.delete" fallback={null}>
                                        <Button variant="danger" onClick={() => setDeleting(voucher)}>
                                            Hapus
                                        </Button>
                                    </PermissionWrapper>
                                </div>
                            </Card>
                        ))}
                    </div>
                )}

                {meta ? (
                    <Pagination
                        meta={meta}
                        onPageChange={setPage}
                    />
                ) : null}

                <Modal
                    open={open}
                    title={editing ? "Edit Voucher" : "Tambah Voucher"}
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
                    <div className="grid gap-4 md:grid-cols-2">
                        <Input
                            label="Kode Voucher"
                            value={form.code}
                            onChange={(event) => setForm((prev) => ({ ...prev, code: event.target.value }))}
                        />
                        <Input
                            label="Nama Voucher"
                            value={form.name}
                            onChange={(event) => setForm((prev) => ({ ...prev, name: event.target.value }))}
                        />

                        <div>
                            <label className="mb-2 block text-sm font-medium text-slate-700">Tipe Diskon</label>
                            <select
                                className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm"
                                value={form.discount_type}
                                onChange={(event) =>
                                    setForm((prev) => ({
                                        ...prev,
                                        discount_type: event.target.value as VoucherDiscountType,
                                    }))
                                }
                            >
                                <option value="fixed">fixed</option>
                                <option value="percent">percent</option>
                            </select>
                        </div>

                        <Input
                            label="Nilai Diskon"
                            type="number"
                            value={form.discount_value}
                            onChange={(event) =>
                                setForm((prev) => ({ ...prev, discount_value: event.target.value }))
                            }
                        />

                        <Input
                            label="Max Discount"
                            type="number"
                            value={form.max_discount}
                            onChange={(event) =>
                                setForm((prev) => ({ ...prev, max_discount: event.target.value }))
                            }
                        />

                        <Input
                            label="Minimal Order"
                            type="number"
                            value={form.min_order_total}
                            onChange={(event) =>
                                setForm((prev) => ({ ...prev, min_order_total: event.target.value }))
                            }
                        />

                        <Input
                            label="Kuota"
                            type="number"
                            value={form.quota}
                            onChange={(event) => setForm((prev) => ({ ...prev, quota: event.target.value }))}
                        />

                        <div>
                            <label className="mb-2 block text-sm font-medium text-slate-700">Applies To</label>
                            <select
                                className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm"
                                value={form.applies_to}
                                onChange={(event) =>
                                    setForm((prev) => ({
                                        ...prev,
                                        applies_to: event.target.value as VoucherAppliesTo,
                                    }))
                                }
                            >
                                <option value="all">all</option>
                                <option value="specific_products">specific_products</option>
                                <option value="specific_categories">specific_categories</option>
                            </select>
                        </div>

                        <Input
                            label="Mulai"
                            type="datetime-local"
                            value={form.starts_at}
                            onChange={(event) => setForm((prev) => ({ ...prev, starts_at: event.target.value }))}
                        />

                        <Input
                            label="Berakhir"
                            type="datetime-local"
                            value={form.ends_at}
                            onChange={(event) => setForm((prev) => ({ ...prev, ends_at: event.target.value }))}
                        />

                        <Input
                            label="Deskripsi"
                            value={form.description}
                            onChange={(event) =>
                                setForm((prev) => ({ ...prev, description: event.target.value }))
                            }
                        />

                        <label className="flex items-center gap-2 text-sm text-slate-700">
                            <input
                                type="checkbox"
                                checked={form.is_active}
                                onChange={(event) =>
                                    setForm((prev) => ({ ...prev, is_active: event.target.checked }))
                                }
                            />
                            Voucher aktif
                        </label>
                    </div>
                </Modal>

                <ConfirmDialog
                    open={Boolean(deleting)}
                    title="Hapus voucher?"
                    description={`Voucher ${deleting?.code ?? ""} akan dihapus.`}
                    confirmText="Hapus"
                    confirmVariant="danger"
                    loading={deleteMutation.isPending}
                    onClose={() => setDeleting(null)}
                    onConfirm={() => {
                        if (deleting) {
                            deleteMutation.mutate(deleting);
                        }
                    }}
                />
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

<a id="file-srcmodulesadminservicescustomer-promoservicets"></a>
### src\modules\admin\services\customer-promo.service.ts
- SHA: `62a4ea5cdea8`  
- Ukuran: 4 KB
<details><summary><strong>Lihat Kode Lengkap</strong></summary>

```ts
import { apiClient } from "@/services/api/api-client";
import { endpoints } from "@/services/api/endpoints";
import type { ApiMeta, ApiResponse } from "@/types/api";
import type { Customer, CustomerPayload, CustomerQuery } from "@/types/customer";
import type {
  Promotion,
  PromotionPayload,
  PromotionQuery,
  Voucher,
  VoucherPayload,
  VoucherQuery,
} from "@/types/promo";

export interface PaginatedResult<T> {
  items: T[];
  meta: ApiMeta | null;
  message: string;
}

const unwrapPaginated = <T>(response: ApiResponse<T[]>): PaginatedResult<T> => ({
  items: response.data,
  meta: response.meta ?? null,
  message: response.message,
});

export const customerPromoService = {
  async getCustomers(params: CustomerQuery = {}) {
    const response = await apiClient.get<ApiResponse<Customer[]>>(endpoints.customers.index, {
      params,
    });

    return unwrapPaginated(response.data);
  },

  async getCustomer(id: number) {
    const response = await apiClient.get<ApiResponse<Customer>>(endpoints.customers.show(id));

    return response.data;
  },

  async createCustomer(payload: CustomerPayload) {
    const response = await apiClient.post<ApiResponse<Customer>>(
      endpoints.customers.store,
      payload
    );

    return response.data;
  },

  async updateCustomer(id: number, payload: CustomerPayload) {
    const response = await apiClient.put<ApiResponse<Customer>>(
      endpoints.customers.update(id),
      payload
    );

    return response.data;
  },

  async deleteCustomer(id: number) {
    const response = await apiClient.delete<ApiResponse<null>>(endpoints.customers.destroy(id));

    return response.data;
  },

  async getVouchers(params: VoucherQuery = {}) {
    const response = await apiClient.get<ApiResponse<Voucher[]>>(endpoints.vouchers.index, {
      params,
    });

    return unwrapPaginated(response.data);
  },

  async getVoucher(id: number) {
    const response = await apiClient.get<ApiResponse<Voucher>>(endpoints.vouchers.show(id));

    return response.data;
  },

  async createVoucher(payload: VoucherPayload) {
    const response = await apiClient.post<ApiResponse<Voucher>>(
      endpoints.vouchers.store,
      payload
    );

    return response.data;
  },

  async updateVoucher(id: number, payload: VoucherPayload) {
    const response = await apiClient.put<ApiResponse<Voucher>>(
      endpoints.vouchers.update(id),
      payload
    );

    return response.data;
  },

  async deleteVoucher(id: number) {
    const response = await apiClient.delete<ApiResponse<null>>(endpoints.vouchers.destroy(id));

    return response.data;
  },

  async getPromotions(params: PromotionQuery = {}) {
    const response = await apiClient.get<ApiResponse<Promotion[]>>(endpoints.promotions.index, {
      params,
    });

    return unwrapPaginated(response.data);
  },

  async getPromotion(id: number) {
    const response = await apiClient.get<ApiResponse<Promotion>>(endpoints.promotions.show(id));

    return response.data;
  },

  async createPromotion(payload: PromotionPayload) {
    const response = await apiClient.post<ApiResponse<Promotion>>(
      endpoints.promotions.store,
      payload
    );

    return response.data;
  },

  async updatePromotion(id: number, payload: PromotionPayload) {
    const response = await apiClient.put<ApiResponse<Promotion>>(
      endpoints.promotions.update(id),
      payload
    );

    return response.data;
  },

  async deletePromotion(id: number) {
    const response = await apiClient.delete<ApiResponse<null>>(
      endpoints.promotions.destroy(id)
    );

    return response.data;
  },
};
```
</details>

<a id="file-srcmodulesadminservicesexpenseservicets"></a>
### src\modules\admin\services\expense.service.ts
- SHA: `4de86def8f64`  
- Ukuran: 5 KB
<details><summary><strong>Lihat Kode Lengkap</strong></summary>

```ts
import { apiClient } from "@/services/api/api-client";
import { endpoints } from "@/services/api/endpoints";
import type { ApiMeta } from "@/types/api";
import type {
  CashMovement,
  CashMovementListParams,
  CashMovementPayload,
  CashierShift,
  CashierShiftListParams,
  Expense,
  ExpenseCategory,
  ExpenseCategoryListParams,
  ExpenseCategoryPayload,
  ExpenseListParams,
  ExpensePayload,
  PaginatedExpenseResult,
} from "@/types/expense";

interface ApiCollectionResponse<T> {
  message: string;
  data: T[];
  meta?: ApiMeta | null;
}

interface ApiResourceResponse<T> {
  message: string;
  data: T;
}

const normalizeCollection = <T>(
  response: ApiCollectionResponse<T>
): PaginatedExpenseResult<T> => ({
  items: response.data,
  meta: response.meta ?? null,
});

export const expenseService = {
  async getExpenseCategories(
    params: ExpenseCategoryListParams = {}
  ): Promise<PaginatedExpenseResult<ExpenseCategory>> {
    const response = await apiClient.get<ApiCollectionResponse<ExpenseCategory>>(
      endpoints.expenseCategories.index,
      { params }
    );

    return normalizeCollection(response.data);
  },

  async createExpenseCategory(
    payload: ExpenseCategoryPayload
  ): Promise<ApiResourceResponse<ExpenseCategory>> {
    const response = await apiClient.post<ApiResourceResponse<ExpenseCategory>>(
      endpoints.expenseCategories.store,
      payload
    );

    return response.data;
  },

  async updateExpenseCategory(
    id: number,
    payload: ExpenseCategoryPayload
  ): Promise<ApiResourceResponse<ExpenseCategory>> {
    const response = await apiClient.put<ApiResourceResponse<ExpenseCategory>>(
      endpoints.expenseCategories.update(id),
      payload
    );

    return response.data;
  },

  async deleteExpenseCategory(id: number): Promise<{ message: string }> {
    const response = await apiClient.delete<{ message: string }>(
      endpoints.expenseCategories.destroy(id)
    );

    return response.data;
  },

  async getExpenses(params: ExpenseListParams = {}): Promise<PaginatedExpenseResult<Expense>> {
    const response = await apiClient.get<ApiCollectionResponse<Expense>>(endpoints.expenses.index, {
      params,
    });

    return normalizeCollection(response.data);
  },

  async createExpense(payload: ExpensePayload): Promise<ApiResourceResponse<Expense>> {
    const response = await apiClient.post<ApiResourceResponse<Expense>>(
      endpoints.expenses.store,
      payload
    );

    return response.data;
  },

  async updateExpense(id: number, payload: ExpensePayload): Promise<ApiResourceResponse<Expense>> {
    const response = await apiClient.put<ApiResourceResponse<Expense>>(
      endpoints.expenses.update(id),
      payload
    );

    return response.data;
  },

  async submitExpense(id: number): Promise<ApiResourceResponse<Expense>> {
    const response = await apiClient.post<ApiResourceResponse<Expense>>(
      endpoints.expenses.submit(id)
    );

    return response.data;
  },

  async approveExpense(id: number, notes?: string): Promise<ApiResourceResponse<Expense>> {
    const response = await apiClient.post<ApiResourceResponse<Expense>>(
      endpoints.expenses.approve(id),
      { notes: notes ?? null }
    );

    return response.data;
  },

  async rejectExpense(id: number, notes: string): Promise<ApiResourceResponse<Expense>> {
    const response = await apiClient.post<ApiResourceResponse<Expense>>(
      endpoints.expenses.reject(id),
      { notes }
    );

    return response.data;
  },

  async uploadExpenseAttachments(
    id: number,
    files: File[]
  ): Promise<ApiResourceResponse<Expense>> {
    const formData = new FormData();

    files.forEach((file) => {
      formData.append("attachments[]", file);
    });

    const response = await apiClient.post<ApiResourceResponse<Expense>>(
      endpoints.expenses.attachments(id),
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );

    return response.data;
  },

  async deleteExpenseAttachment(id: number): Promise<{ message: string }> {
    const response = await apiClient.delete<{ message: string }>(
      endpoints.expenses.deleteAttachment(id)
    );

    return response.data;
  },

  async deleteExpense(id: number): Promise<{ message: string }> {
    const response = await apiClient.delete<{ message: string }>(endpoints.expenses.destroy(id));

    return response.data;
  },

  async getCashierShifts(
    params: CashierShiftListParams = {}
  ): Promise<PaginatedExpenseResult<CashierShift>> {
    const response = await apiClient.get<ApiCollectionResponse<CashierShift>>(
      endpoints.cashierShifts.index,
      { params }
    );

    return normalizeCollection(response.data);
  },

  async getCashMovements(
    params: CashMovementListParams = {}
  ): Promise<PaginatedExpenseResult<CashMovement>> {
    const response = await apiClient.get<ApiCollectionResponse<CashMovement>>(
      endpoints.cashMovements.index,
      { params }
    );

    return normalizeCollection(response.data);
  },

  async createCashMovement(
    payload: CashMovementPayload
  ): Promise<ApiResourceResponse<CashMovement>> {
    const response = await apiClient.post<ApiResourceResponse<CashMovement>>(
      endpoints.cashMovements.store,
      payload
    );

    return response.data;
  },
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

<a id="file-srcmodulesadminservicesnotificationservicets"></a>
### src\modules\admin\services\notification.service.ts
- SHA: `d7bea35034bf`  
- Ukuran: 4 KB
<details><summary><strong>Lihat Kode Lengkap</strong></summary>

```ts
import { apiClient } from "@/services/api/api-client";
import type { ApiMeta, ApiResponse } from "@/types/api";
import type {
  ActivityLog,
  ActivityLogQuery,
  AlertRule,
  AlertRulePayload,
  AlertRuleQuery,
  Notification,
  NotificationQuery,
  ScanAlertPayload,
  ScanAlertResult,
} from "@/types/notification";

export interface PaginatedResult<T> {
  items: T[];
  meta: ApiMeta | null;
  message: string;
}

const notificationEndpoints = {
  notifications: {
    index: "/notifications",
    show: (id: number | string) => `/notifications/${id}`,
    scan: "/notifications/scan",
    markAllRead: "/notifications/mark-all-read",
    markAsRead: (id: number | string) => `/notifications/${id}/read`,
    resolve: (id: number | string) => `/notifications/${id}/resolve`,
    destroy: (id: number | string) => `/notifications/${id}`,
  },
  alertRules: {
    index: "/alert-rules",
    store: "/alert-rules",
    show: (id: number | string) => `/alert-rules/${id}`,
    update: (id: number | string) => `/alert-rules/${id}`,
    destroy: (id: number | string) => `/alert-rules/${id}`,
  },
  activityLogs: {
    index: "/activity-logs",
    show: (id: number | string) => `/activity-logs/${id}`,
  },
};

const unwrapPaginated = <T>(response: ApiResponse<T[]>): PaginatedResult<T> => ({
  items: response.data,
  meta: response.meta ?? null,
  message: response.message,
});

export const notificationService = {
  async getNotifications(params: NotificationQuery = {}) {
    const response = await apiClient.get<ApiResponse<Notification[]>>(
      notificationEndpoints.notifications.index,
      { params }
    );

    return unwrapPaginated(response.data);
  },

  async getNotification(id: number) {
    const response = await apiClient.get<ApiResponse<Notification>>(
      notificationEndpoints.notifications.show(id)
    );

    return response.data;
  },

  async scanAlerts(payload: ScanAlertPayload = {}) {
    const response = await apiClient.post<ApiResponse<ScanAlertResult>>(
      notificationEndpoints.notifications.scan,
      payload
    );

    return response.data;
  },

  async markAllNotificationsAsRead(outletId?: number | "") {
    const response = await apiClient.post<ApiResponse<{ updated_count: number }>>(
      notificationEndpoints.notifications.markAllRead,
      {},
      {
        params: {
          outlet_id: outletId || undefined,
        },
      }
    );

    return response.data;
  },

  async markNotificationAsRead(id: number) {
    const response = await apiClient.post<ApiResponse<Notification>>(
      notificationEndpoints.notifications.markAsRead(id)
    );

    return response.data;
  },

  async resolveNotification(id: number) {
    const response = await apiClient.post<ApiResponse<Notification>>(
      notificationEndpoints.notifications.resolve(id)
    );

    return response.data;
  },

  async deleteNotification(id: number) {
    const response = await apiClient.delete<ApiResponse<null>>(
      notificationEndpoints.notifications.destroy(id)
    );

    return response.data;
  },

  async getAlertRules(params: AlertRuleQuery = {}) {
    const response = await apiClient.get<ApiResponse<AlertRule[]>>(
      notificationEndpoints.alertRules.index,
      { params }
    );

    return unwrapPaginated(response.data);
  },

  async createAlertRule(payload: AlertRulePayload) {
    const response = await apiClient.post<ApiResponse<AlertRule>>(
      notificationEndpoints.alertRules.store,
      payload
    );

    return response.data;
  },

  async updateAlertRule(id: number, payload: AlertRulePayload) {
    const response = await apiClient.put<ApiResponse<AlertRule>>(
      notificationEndpoints.alertRules.update(id),
      payload
    );

    return response.data;
  },

  async deleteAlertRule(id: number) {
    const response = await apiClient.delete<ApiResponse<null>>(
      notificationEndpoints.alertRules.destroy(id)
    );

    return response.data;
  },

  async getActivityLogs(params: ActivityLogQuery = {}) {
    const response = await apiClient.get<ApiResponse<ActivityLog[]>>(
      notificationEndpoints.activityLogs.index,
      { params }
    );

    return unwrapPaginated(response.data);
  },

  async getActivityLog(id: number) {
    const response = await apiClient.get<ApiResponse<ActivityLog>>(
      notificationEndpoints.activityLogs.show(id)
    );

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

<a id="file-srcmodulesadminservicesstock-movementservicets"></a>
### src\modules\admin\services\stock-movement.service.ts
- SHA: `26b9fc5737c0`  
- Ukuran: 6 KB
<details><summary><strong>Lihat Kode Lengkap</strong></summary>

```ts
import { apiClient } from "@/services/api/api-client";
import type { ApiMeta, ApiResponse } from "@/types/api";
import type {
  StockAdjustment,
  StockAdjustmentReason,
  StockMovement,
  StockMovementType,
  StockOpname,
  StockOpnameStatus,
  StockTransfer,
  StockTransferStatus,
} from "@/types/stock-movement";

export interface PaginatedResult<T> {
  items: T[];
  meta: ApiMeta | null;
  message: string;
}

export interface StockMovementQuery {
  page?: number;
  per_page?: number;
  search?: string;
  outlet_id?: number | "";
  movement_type?: StockMovementType | "";
  status?: string;
  reason?: StockAdjustmentReason | "";
}

export interface StockAdjustmentItemPayload {
  raw_material_id: number;
  qty_difference: number;
  unit_id: number;
  notes?: string | null;
}

export interface StockAdjustmentPayload {
  outlet_id: number;
  adjustment_date: string;
  reason: StockAdjustmentReason;
  notes?: string | null;
  items: StockAdjustmentItemPayload[];
}

export interface StockTransferItemPayload {
  raw_material_id: number;
  qty_sent: number;
  qty_received?: number | null;
  unit_id: number;
  notes?: string | null;
}

export interface StockTransferPayload {
  source_outlet_id: number;
  target_outlet_id: number;
  transfer_date: string;
  notes?: string | null;
  items: StockTransferItemPayload[];
}

export interface ReceiveStockTransferPayload {
  received_at?: string | null;
  notes?: string | null;
  items?: Array<{
    stock_transfer_item_id: number;
    qty_received: number;
  }>;
}

export interface StockOpnameItemPayload {
  raw_material_id: number;
  system_qty?: number;
  actual_qty: number;
  unit_id: number;
  notes?: string | null;
}

export interface StockOpnamePayload {
  outlet_id: number;
  opname_date: string;
  notes?: string | null;
  items: StockOpnameItemPayload[];
}

const unwrapPaginated = <T>(response: ApiResponse<T[]>): PaginatedResult<T> => ({
  items: response.data,
  meta: response.meta ?? null,
  message: response.message,
});

export const stockMovementService = {
  async getStockMovements(params: StockMovementQuery = {}) {
    const response = await apiClient.get<ApiResponse<StockMovement[]>>("/stock-movements", {
      params,
    });

    return unwrapPaginated(response.data);
  },

  async getStockAdjustments(params: StockMovementQuery = {}) {
    const response = await apiClient.get<ApiResponse<StockAdjustment[]>>("/stock-adjustments", {
      params,
    });

    return unwrapPaginated(response.data);
  },

  async createStockAdjustment(payload: StockAdjustmentPayload) {
    const response = await apiClient.post<ApiResponse<StockAdjustment>>(
      "/stock-adjustments",
      payload
    );

    return response.data;
  },

  async updateStockAdjustment(id: number, payload: StockAdjustmentPayload) {
    const response = await apiClient.put<ApiResponse<StockAdjustment>>(
      `/stock-adjustments/${id}`,
      payload
    );

    return response.data;
  },

  async deleteStockAdjustment(id: number) {
    const response = await apiClient.delete<ApiResponse<null>>(`/stock-adjustments/${id}`);
    return response.data;
  },

  async getStockTransfers(params: StockMovementQuery & { status?: StockTransferStatus | "" } = {}) {
    const response = await apiClient.get<ApiResponse<StockTransfer[]>>("/stock-transfers", {
      params,
    });

    return unwrapPaginated(response.data);
  },

  async createStockTransfer(payload: StockTransferPayload) {
    const response = await apiClient.post<ApiResponse<StockTransfer>>("/stock-transfers", payload);
    return response.data;
  },

  async updateStockTransfer(id: number, payload: StockTransferPayload) {
    const response = await apiClient.put<ApiResponse<StockTransfer>>(
      `/stock-transfers/${id}`,
      payload
    );

    return response.data;
  },

  async deleteStockTransfer(id: number) {
    const response = await apiClient.delete<ApiResponse<null>>(`/stock-transfers/${id}`);
    return response.data;
  },

  async sendStockTransfer(id: number) {
    const response = await apiClient.post<ApiResponse<StockTransfer>>(
      `/stock-transfers/${id}/send`
    );

    return response.data;
  },

  async receiveStockTransfer(id: number, payload: ReceiveStockTransferPayload = {}) {
    const response = await apiClient.post<ApiResponse<StockTransfer>>(
      `/stock-transfers/${id}/receive`,
      payload
    );

    return response.data;
  },

  async cancelStockTransfer(id: number) {
    const response = await apiClient.post<ApiResponse<StockTransfer>>(
      `/stock-transfers/${id}/cancel`
    );

    return response.data;
  },

  async getStockOpnames(params: StockMovementQuery & { status?: StockOpnameStatus | "" } = {}) {
    const response = await apiClient.get<ApiResponse<StockOpname[]>>("/stock-opnames", {
      params,
    });

    return unwrapPaginated(response.data);
  },

  async createStockOpname(payload: StockOpnamePayload) {
    const response = await apiClient.post<ApiResponse<StockOpname>>("/stock-opnames", payload);
    return response.data;
  },

  async updateStockOpname(id: number, payload: StockOpnamePayload) {
    const response = await apiClient.put<ApiResponse<StockOpname>>(`/stock-opnames/${id}`, payload);
    return response.data;
  },

  async deleteStockOpname(id: number) {
    const response = await apiClient.delete<ApiResponse<null>>(`/stock-opnames/${id}`);
    return response.data;
  },

  async postStockOpname(id: number, payload: { posted_at?: string | null } = {}) {
    const response = await apiClient.post<ApiResponse<StockOpname>>(
      `/stock-opnames/${id}/post`,
      payload
    );

    return response.data;
  },

  async cancelStockOpname(id: number) {
    const response = await apiClient.post<ApiResponse<StockOpname>>(
      `/stock-opnames/${id}/cancel`
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
- SHA: `492d719a18b6`  
- Ukuran: 5 KB
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
    <div className="space-y-6">
      <div className="space-y-2 text-center sm:text-left">

        <div>
          <h1 className="text-2xl font-bold tracking-tight text-slate-950">
            Login Sistem
          </h1>
          <p className="mt-2 text-sm leading-6 text-slate-500">
            Masuk menggunakan email, username, atau nomor telepon untuk mengakses sistem POS.
          </p>
        </div>
      </div>

      {sessionExpired && (
        <div
          role="alert"
          className="rounded-2xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm leading-6 text-amber-800"
        >
          Sesi Anda telah berakhir. Silakan login kembali.
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        <div className="space-y-1.5">
          <label className="block text-sm font-semibold text-slate-700">
            Login
          </label>
          <input
            {...register("login")}
            className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 shadow-sm outline-none transition placeholder:text-slate-400 focus:border-slate-400 focus:ring-4 focus:ring-slate-100"
            placeholder="Email / Username / Phone"
            autoComplete="username"
            aria-invalid={Boolean(errors.login)}
          />
          {errors.login && (
            <p className="text-xs font-medium text-red-600">{errors.login.message}</p>
          )}
        </div>

        <div className="space-y-1.5">
          <label className="block text-sm font-semibold text-slate-700">
            Password
          </label>
          <input
            type="password"
            {...register("password")}
            className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 shadow-sm outline-none transition placeholder:text-slate-400 focus:border-slate-400 focus:ring-4 focus:ring-slate-100"
            placeholder="Masukkan password"
            autoComplete="current-password"
            aria-invalid={Boolean(errors.password)}
          />
          {errors.password && (
            <p className="text-xs font-medium text-red-600">{errors.password.message}</p>
          )}
        </div>

        {serverError && (
          <div
            role="alert"
            className="rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm leading-6 text-red-700"
          >
            {serverError}
          </div>
        )}

        <button
          type="submit"
          disabled={isSubmitting}
          className="inline-flex w-full items-center justify-center rounded-2xl bg-[var(--brand-brick)] px-4 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-[var(--brand-brick-dark)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--brand-brick)] disabled:pointer-events-none disabled:opacity-60"
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
- SHA: `165d52d6d6c0`  
- Ukuran: 1 KB
<details><summary><strong>Lihat Kode Lengkap</strong></summary>

```tsx
export default function NotFoundPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[var(--color-bg)] px-4">
      <div className="w-full max-w-md rounded-2xl border border-[var(--color-border)] bg-white p-8 text-center shadow-md">
        <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[var(--brand-yellow-soft)] text-[var(--brand-brick)]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M9.172 9.172a4 4 0 015.656 0M9 15h6" />
          </svg>
        </div>

        <h1 className="text-2xl font-semibold text-[var(--color-text)]">
          404
        </h1>

        <p className="mt-2 text-sm text-[var(--color-muted)]">
          Halaman yang Anda cari tidak ditemukan.
        </p>

        <div className="mt-6">
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-lg bg-[var(--brand-brick)] px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-[var(--brand-brick-dark)]"
          >
            Kembali ke Beranda
          </a>
        </div>
      </div>
    </div>
  );
}
```
</details>

<a id="file-srcmodulesauthpagesunauthorizedpagetsx"></a>
### src\modules\auth\pages\UnauthorizedPage.tsx
- SHA: `2daf5f7e9584`  
- Ukuran: 1 KB
<details><summary><strong>Lihat Kode Lengkap</strong></summary>

```tsx
export default function UnauthorizedPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[var(--color-bg)] px-4">
      <div className="w-full max-w-md rounded-2xl border border-[var(--color-border)] bg-white p-8 text-center shadow-md">
        <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[var(--brand-brick-soft)] text-[var(--brand-brick)]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01M5.07 19h13.86c1.54 0 2.5-1.67 1.73-3L13.73 4c-.77-1.33-2.69-1.33-3.46 0L3.34 16c-.77 1.33.19 3 1.73 3z" />
          </svg>
        </div>

        <h1 className="text-xl font-semibold text-[var(--color-text)]">
          Akses Ditolak
        </h1>

        <p className="mt-2 text-sm text-[var(--color-muted)]">
          Anda tidak memiliki izin untuk membuka halaman ini.
        </p>

        <div className="mt-6">
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-lg bg-[var(--brand-brick)] px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-[var(--brand-brick-dark)]"
          >
            Kembali ke Dashboard
          </a>
        </div>
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

<a id="file-srcmodulesdashboardcomponentsdashboardbarlisttsx"></a>
### src\modules\dashboard\components\DashboardBarList.tsx
- SHA: `48d2b6509698`  
- Ukuran: 2 KB
<details><summary><strong>Lihat Kode Lengkap</strong></summary>

```tsx
import { Card } from "@/components/ui";

interface DashboardBarListItem {
  label: string;
  value: number;
  suffix?: string;
}

interface DashboardBarListProps {
  title: string;
  description?: string;
  items: DashboardBarListItem[];
  emptyText: string;
  valueFormatter?: (value: number) => string;
}

export function DashboardBarList({
  title,
  description,
  items,
  emptyText,
  valueFormatter,
}: DashboardBarListProps) {
  const maxValue = Math.max(...items.map((item) => item.value), 0);

  return (
    <Card title={title} description={description}>
      {!items.length ? (
        <p className="text-sm text-slate-500">{emptyText}</p>
      ) : (
        <div className="space-y-4">
          {items.map((item) => {
            const percentage = maxValue > 0 ? Math.max(6, (item.value / maxValue) * 100) : 0;

            return (
              <div key={item.label} className="space-y-2">
                <div className="flex items-center justify-between gap-4 text-sm">
                  <span className="font-medium text-slate-700">{item.label}</span>
                  <span className="text-slate-500">
                    {valueFormatter ? valueFormatter(item.value) : item.value.toLocaleString("id-ID")}
                    {item.suffix ? ` ${item.suffix}` : ""}
                  </span>
                </div>
                <div className="h-2 overflow-hidden rounded-full bg-slate-100">
                  <div
                    className="h-full rounded-full bg-slate-900"
                    style={{ width: `${percentage}%` }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      )}
    </Card>
  );
}
```
</details>

<a id="file-srcmodulesdashboardcomponentsdashboardfilterstsx"></a>
### src\modules\dashboard\components\DashboardFilters.tsx
- SHA: `0a20b0623eb5`  
- Ukuran: 2 KB
<details><summary><strong>Lihat Kode Lengkap</strong></summary>

```tsx
import { Button, Card, Input } from "@/components/ui";
import type { DashboardFilter } from "@/types/dashboard";
import type { Outlet } from "@/types/outlet";

interface DashboardFiltersProps {
  value: DashboardFilter;
  outlets: Outlet[];
  loading?: boolean;
  onChange: (next: DashboardFilter) => void;
  onRefresh: () => void;
  showOutletFilter?: boolean;
}

export function DashboardFilters({
  value,
  outlets,
  loading = false,
  onChange,
  onRefresh,
  showOutletFilter = true,
}: DashboardFiltersProps) {
  return (
    <Card>
      <div className="grid gap-4 md:grid-cols-5">
        {showOutletFilter ? (
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">
              Outlet
            </label>
            <select
              className="w-full rounded-xl border border-slate-300 px-3 py-2 text-sm"
              value={value.outlet_id ?? ""}
              onChange={(event) =>
                onChange({
                  ...value,
                  outlet_id: event.target.value ? Number(event.target.value) : "",
                })
              }
            >
              <option value="">Semua outlet</option>
              {outlets.map((outlet) => (
                <option key={outlet.id} value={outlet.id}>
                  {outlet.name}
                </option>
              ))}
            </select>
          </div>
        ) : null}

        <Input
          label="Tanggal Awal"
          type="date"
          value={value.date_from ?? ""}
          onChange={(event) =>
            onChange({
              ...value,
              date_from: event.target.value,
            })
          }
        />

        <Input
          label="Tanggal Akhir"
          type="date"
          value={value.date_until ?? ""}
          onChange={(event) =>
            onChange({
              ...value,
              date_until: event.target.value,
            })
          }
        />

        <Input
          label="Limit"
          type="number"
          min="1"
          max="20"
          value={String(value.limit ?? 5)}
          onChange={(event) =>
            onChange({
              ...value,
              limit: Number(event.target.value || 5),
            })
          }
        />

        <div className="flex items-end">
          <Button loading={loading} onClick={onRefresh}>
            Refresh
          </Button>
        </div>
      </div>
    </Card>
  );
}
```
</details>

<a id="file-srcmodulesdashboardcomponentsdashboardmetriccardtsx"></a>
### src\modules\dashboard\components\DashboardMetricCard.tsx
- SHA: `36d4a5fe2ce5`  
- Ukuran: 558 B
<details><summary><strong>Lihat Kode Lengkap</strong></summary>

```tsx
import { Card } from "@/components/ui";

interface DashboardMetricCardProps {
  title: string;
  value: string;
  description?: string;
}

export function DashboardMetricCard({
  title,
  value,
  description,
}: DashboardMetricCardProps) {
  return (
    <Card>
      <div className="space-y-1">
        <p className="text-sm font-medium text-slate-500">{title}</p>
        <p className="text-2xl font-semibold text-slate-950">{value}</p>
        {description ? <p className="text-xs text-slate-500">{description}</p> : null}
      </div>
    </Card>
  );
}
```
</details>

<a id="file-srcmodulesdashboardcomponentsdashboardquicktabletsx"></a>
### src\modules\dashboard\components\DashboardQuickTable.tsx
- SHA: `5cf7a9324f23`  
- Ukuran: 2 KB
<details><summary><strong>Lihat Kode Lengkap</strong></summary>

```tsx
import type { ReactNode } from "react";
import { Card } from "@/components/ui";

interface DashboardQuickTableColumn<T> {
  key: string;
  label: string;
  render: (row: T) => ReactNode;
}

interface DashboardQuickTableProps<T> {
  title: string;
  description?: string;
  rows: T[];
  columns: DashboardQuickTableColumn<T>[];
  emptyText: string;
  getRowKey: (row: T, index: number) => string;
}

export function DashboardQuickTable<T>({
  title,
  description,
  rows,
  columns,
  emptyText,
  getRowKey,
}: DashboardQuickTableProps<T>) {
  return (
    <Card title={title} description={description}>
      {!rows.length ? (
        <p className="text-sm text-slate-500">{emptyText}</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full min-w-[680px] text-left text-sm">
            <thead>
              <tr className="border-b border-slate-200 text-xs uppercase tracking-wide text-slate-500">
                {columns.map((column) => (
                  <th key={column.key} className="px-3 py-3 font-semibold">
                    {column.label}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row, index) => (
                <tr key={getRowKey(row, index)} className="border-b border-slate-100">
                  {columns.map((column) => (
                    <td key={column.key} className="px-3 py-3 text-slate-700">
                      {column.render(row)}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </Card>
  );
}
```
</details>

<a id="file-srcmodulesdashboardpagesadmindashboardpagetsx"></a>
### src\modules\dashboard\pages\AdminDashboardPage.tsx
- SHA: `6ef8c006f9a0`  
- Ukuran: 9 KB
<details><summary><strong>Lihat Kode Lengkap</strong></summary>

```tsx
import { useMemo, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { PageHeader } from "@/components/navigation/PageHeader";
import { PermissionWrapper } from "@/components/navigation/PermissionWrapper";
import { PageErrorState } from "@/components/feedback/PageErrorState";
import { Card, Badge } from "@/components/ui";
import { masterDataService } from "@/modules/admin/services/master-data.service";
import { dashboardService } from "@/modules/dashboard/services/dashboard.service";
import { DashboardMetricCard } from "@/modules/dashboard/components/DashboardMetricCard";
import { DashboardFilters } from "@/modules/dashboard/components/DashboardFilters";
import { DashboardBarList } from "@/modules/dashboard/components/DashboardBarList";
import { DashboardQuickTable } from "@/modules/dashboard/components/DashboardQuickTable";
import { useActiveOutlet } from "@/hooks/useActiveOutlet";
import type {
  DashboardCriticalStock,
  DashboardFilter,
  DashboardOrderRow,
} from "@/types/dashboard";

const today = new Date().toISOString().slice(0, 10);

const formatCurrency = (value: number | string | null | undefined) => {
  return `Rp ${Number(value ?? 0).toLocaleString("id-ID")}`;
};

const formatNumber = (value: number | string | null | undefined) => {
  return Number(value ?? 0).toLocaleString("id-ID");
};

const formatDateTime = (value: string | null | undefined) => {
  if (!value) return "-";

  return new Intl.DateTimeFormat("id-ID", {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(new Date(value));
};

export default function AdminDashboardPage() {
  const { activeOutletId } = useActiveOutlet();

  const [filters, setFilters] = useState<DashboardFilter>({
    outlet_id: activeOutletId ?? "",
    date_from: today,
    date_until: today,
    overdue_minutes: 30,
    limit: 5,
  });

  const outletsQuery = useQuery({
    queryKey: ["dashboard-admin-outlets"],
    queryFn: () => masterDataService.getOutlets({ per_page: 100, is_active: true }),
  });

  const overviewQuery = useQuery({
    queryKey: ["dashboard-admin-overview", filters],
    queryFn: () => dashboardService.getOverview(filters),
  });

  const salesTrendQuery = useQuery({
    queryKey: ["dashboard-admin-sales-trend", filters],
    queryFn: () => dashboardService.getSalesTrend(filters),
  });

  const overview = overviewQuery.data?.data;
  const summary = overview?.summary;
  const outlets = outletsQuery.data?.items ?? [];
  const salesTrend = salesTrendQuery.data?.data ?? [];

  const topProducts = useMemo(() => {
    return (overview?.top_products ?? []).map((item) => ({
      label: item.product_name,
      value: Number(item.total_qty ?? 0),
      suffix: "terjual",
    }));
  }, [overview?.top_products]);

  const salesTrendItems = useMemo(() => {
    return salesTrend.map((item) => ({
      label: item.label ?? item.period ?? item.date ?? "-",
      value: Number(item.total_revenue ?? item.revenue ?? item.grand_total ?? 0),
    }));
  }, [salesTrend]);

  const refresh = () => {
    void overviewQuery.refetch();
    void salesTrendQuery.refetch();
  };

  return (
    <PermissionWrapper permission="reports.view">
      <div className="space-y-4">
        <PageHeader
          title="Dashboard Admin"
          description="Ringkasan operasional outlet, penjualan, stok kritis, dan order yang perlu dipantau."
        />

        <DashboardFilters
          value={filters}
          outlets={outlets}
          loading={overviewQuery.isFetching || salesTrendQuery.isFetching}
          onChange={setFilters}
          onRefresh={refresh}
        />

        {overviewQuery.isError ? (
          <PageErrorState onRetry={() => void overviewQuery.refetch()} />
        ) : overviewQuery.isLoading ? (
          <Card>Memuat dashboard admin...</Card>
        ) : (
          <>
            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              <DashboardMetricCard
                title="Omzet Hari Ini"
                value={formatCurrency(summary?.today_sales ?? summary?.today_revenue)}
                description="Order completed dan paid hari ini"
              />
              <DashboardMetricCard
                title="Transaksi Hari Ini"
                value={formatNumber(summary?.today_orders)}
                description="Jumlah order hari ini"
              />
              <DashboardMetricCard
                title="Order Pending"
                value={formatNumber(summary?.pending_orders)}
                description="Pending, confirmed, preparing, atau ready"
              />
              <DashboardMetricCard
                title="Stok Minimum"
                value={formatNumber(summary?.critical_stocks)}
                description="Bahan baku di bawah batas minimum"
              />
            </div>

            <div className="grid gap-4 xl:grid-cols-2">
              <DashboardBarList
                title="Tren Penjualan"
                description="Nilai penjualan berdasarkan filter tanggal"
                items={salesTrendItems}
                emptyText="Belum ada data tren penjualan."
                valueFormatter={formatCurrency}
              />

              <DashboardBarList
                title="Top Menu Outlet"
                description="Produk terlaris berdasarkan jumlah item terjual"
                items={topProducts}
                emptyText="Belum ada data produk terlaris."
              />
            </div>

            <div className="grid gap-4 xl:grid-cols-2">
              <DashboardQuickTable<DashboardOrderRow>
                title="Order Pending"
                description="Order aktif yang masih perlu diproses."
                rows={overview?.pending_orders ?? []}
                emptyText="Tidak ada order pending."
                getRowKey={(row) => `pending-${row.order_id}`}
                columns={[
                  {
                    key: "order",
                    label: "Order",
                    render: (row) => (
                      <div>
                        <div className="font-semibold text-slate-900">{row.order_number}</div>
                        <div className="text-xs text-slate-500">{row.queue_number ?? "-"}</div>
                      </div>
                    ),
                  },
                  {
                    key: "outlet",
                    label: "Outlet",
                    render: (row) => row.outlet_name,
                  },
                  {
                    key: "status",
                    label: "Status",
                    render: (row) => <Badge variant="warning">{row.order_status}</Badge>,
                  },
                  {
                    key: "total",
                    label: "Total",
                    render: (row) => formatCurrency(row.grand_total),
                  },
                  {
                    key: "time",
                    label: "Waktu",
                    render: (row) => formatDateTime(row.ordered_at),
                  },
                ]}
              />

              <DashboardQuickTable<DashboardCriticalStock>
                title="Stok Kritis"
                description="Bahan baku yang mencapai atau melewati batas minimum."
                rows={overview?.critical_stocks ?? []}
                emptyText="Tidak ada stok kritis."
                getRowKey={(row) => `stock-${row.outlet_id}-${row.raw_material_id}`}
                columns={[
                  {
                    key: "material",
                    label: "Bahan",
                    render: (row) => (
                      <div>
                        <div className="font-semibold text-slate-900">
                          {row.raw_material_name}
                        </div>
                        <div className="text-xs text-slate-500">{row.outlet_name}</div>
                      </div>
                    ),
                  },
                  {
                    key: "stock",
                    label: "Stok",
                    render: (row) =>
                      `${formatNumber(row.qty_on_hand)} ${row.unit_code ?? ""}`,
                  },
                  {
                    key: "minimum",
                    label: "Minimum",
                    render: (row) =>
                      `${formatNumber(row.minimum_stock)} ${row.unit_code ?? ""}`,
                  },
                  {
                    key: "reserved",
                    label: "Reserved",
                    render: (row) =>
                      `${formatNumber(row.qty_reserved)} ${row.unit_code ?? ""}`,
                  },
                ]}
              />
            </div>
          </>
        )}
      </div>
    </PermissionWrapper>
  );
}
```
</details>

<a id="file-srcmodulesdashboardpagesownerdashboardpagetsx"></a>
### src\modules\dashboard\pages\OwnerDashboardPage.tsx
- SHA: `1de605f83d80`  
- Ukuran: 9 KB
<details><summary><strong>Lihat Kode Lengkap</strong></summary>

```tsx
import { useMemo, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { PageHeader } from "@/components/navigation/PageHeader";
import { PermissionWrapper } from "@/components/navigation/PermissionWrapper";
import { PageErrorState } from "@/components/feedback/PageErrorState";
import { Badge, Card } from "@/components/ui";
import { masterDataService } from "@/modules/admin/services/master-data.service";
import { dashboardService } from "@/modules/dashboard/services/dashboard.service";
import { DashboardMetricCard } from "@/modules/dashboard/components/DashboardMetricCard";
import { DashboardFilters } from "@/modules/dashboard/components/DashboardFilters";
import { DashboardBarList } from "@/modules/dashboard/components/DashboardBarList";
import { DashboardQuickTable } from "@/modules/dashboard/components/DashboardQuickTable";
import type {
  DashboardCashDiscrepancy,
  DashboardFilter,
  DashboardOrderRow,
} from "@/types/dashboard";

const today = new Date();
const firstDayOfMonth = new Date(today.getFullYear(), today.getMonth(), 1)
  .toISOString()
  .slice(0, 10);
const currentDay = today.toISOString().slice(0, 10);

const formatCurrency = (value: number | string | null | undefined) => {
  return `Rp ${Number(value ?? 0).toLocaleString("id-ID")}`;
};

const formatNumber = (value: number | string | null | undefined) => {
  return Number(value ?? 0).toLocaleString("id-ID");
};

const formatDateTime = (value: string | null | undefined) => {
  if (!value) return "-";

  return new Intl.DateTimeFormat("id-ID", {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(new Date(value));
};

export default function OwnerDashboardPage() {
  const [filters, setFilters] = useState<DashboardFilter>({
    outlet_id: "",
    date_from: firstDayOfMonth,
    date_until: currentDay,
    overdue_minutes: 30,
    limit: 5,
  });

  const outletsQuery = useQuery({
    queryKey: ["dashboard-owner-outlets"],
    queryFn: () => masterDataService.getOutlets({ per_page: 100, is_active: true }),
  });

  const overviewQuery = useQuery({
    queryKey: ["dashboard-owner-overview", filters],
    queryFn: () => dashboardService.getOverview(filters),
  });

  const salesTrendQuery = useQuery({
    queryKey: ["dashboard-owner-sales-trend", filters],
    queryFn: () => dashboardService.getSalesTrend(filters),
  });

  const overview = overviewQuery.data?.data;
  const summary = overview?.summary;
  const outlets = outletsQuery.data?.items ?? [];
  const salesTrend = salesTrendQuery.data?.data ?? [];

  const bestOutlets = useMemo(() => {
    return (overview?.best_outlets ?? []).map((item) => ({
      label: item.outlet_name,
      value: Number(item.total_revenue ?? 0),
    }));
  }, [overview?.best_outlets]);

  const topProducts = useMemo(() => {
    return (overview?.top_products ?? []).map((item) => ({
      label: item.product_name,
      value: Number(item.total_sales ?? 0),
    }));
  }, [overview?.top_products]);

  const salesTrendItems = useMemo(() => {
    return salesTrend.map((item) => ({
      label: item.label ?? item.period ?? item.date ?? "-",
      value: Number(item.total_revenue ?? item.revenue ?? item.grand_total ?? 0),
    }));
  }, [salesTrend]);

  const refresh = () => {
    void overviewQuery.refetch();
    void salesTrendQuery.refetch();
  };

  return (
    <PermissionWrapper permission="reports.view">
      <div className="space-y-4">
        <PageHeader
          title="Dashboard Owner"
          description="Ringkasan performa semua outlet, omzet, produk terlaris, order tertunda, dan selisih kas."
        />

        <DashboardFilters
          value={filters}
          outlets={outlets}
          loading={overviewQuery.isFetching || salesTrendQuery.isFetching}
          onChange={setFilters}
          onRefresh={refresh}
        />

        {overviewQuery.isError ? (
          <PageErrorState onRetry={() => void overviewQuery.refetch()} />
        ) : overviewQuery.isLoading ? (
          <Card>Memuat dashboard owner...</Card>
        ) : (
          <>
            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              <DashboardMetricCard
                title="Omzet Bulan Ini"
                value={formatCurrency(summary?.month_sales ?? summary?.month_revenue)}
                description="Akumulasi order completed dan paid"
              />
              <DashboardMetricCard
                title="Order Bulan Ini"
                value={formatNumber(summary?.month_orders)}
                description="Jumlah transaksi pada bulan berjalan"
              />
              <DashboardMetricCard
                title="Order Terlambat"
                value={formatNumber(summary?.overdue_orders)}
                description="Order yang melewati batas waktu proses"
              />
              <DashboardMetricCard
                title="Selisih Kas"
                value={formatNumber(summary?.cash_discrepancies)}
                description="Shift closed dengan cash difference"
              />
            </div>

            <div className="grid gap-4 xl:grid-cols-3">
              <DashboardBarList
                title="Tren Omzet"
                description="Pergerakan omzet berdasarkan filter tanggal"
                items={salesTrendItems}
                emptyText="Belum ada data tren omzet."
                valueFormatter={formatCurrency}
              />

              <DashboardBarList
                title="Perbandingan Outlet"
                description="Outlet terbaik berdasarkan total revenue"
                items={bestOutlets}
                emptyText="Belum ada data outlet."
                valueFormatter={formatCurrency}
              />

              <DashboardBarList
                title="Top Menu Global"
                description="Produk terlaris berdasarkan revenue"
                items={topProducts}
                emptyText="Belum ada data produk."
                valueFormatter={formatCurrency}
              />
            </div>

            <div className="grid gap-4 xl:grid-cols-2">
              <DashboardQuickTable<DashboardCashDiscrepancy>
                title="Cash Discrepancy"
                description="Shift yang memiliki selisih kas."
                rows={overview?.cash_discrepancies ?? []}
                emptyText="Tidak ada selisih kas."
                getRowKey={(row) => `cash-${row.cashier_shift_id}`}
                columns={[
                  {
                    key: "shift",
                    label: "Shift",
                    render: (row) => (
                      <div>
                        <div className="font-semibold text-slate-900">{row.shift_number}</div>
                        <div className="text-xs text-slate-500">{row.cashier_name}</div>
                      </div>
                    ),
                  },
                  {
                    key: "outlet",
                    label: "Outlet",
                    render: (row) => row.outlet_name,
                  },
                  {
                    key: "expected",
                    label: "Expected",
                    render: (row) => formatCurrency(row.expected_cash),
                  },
                  {
                    key: "closing",
                    label: "Closing",
                    render: (row) => formatCurrency(row.closing_cash),
                  },
                  {
                    key: "diff",
                    label: "Selisih",
                    render: (row) => (
                      <span className={row.cash_difference < 0 ? "text-red-600" : "text-emerald-600"}>
                        {formatCurrency(row.cash_difference)}
                      </span>
                    ),
                  },
                ]}
              />

              <DashboardQuickTable<DashboardOrderRow>
                title="Order Terlambat"
                description="Order yang harus segera ditindaklanjuti."
                rows={overview?.overdue_orders ?? []}
                emptyText="Tidak ada order terlambat."
                getRowKey={(row) => `overdue-${row.order_id}`}
                columns={[
                  {
                    key: "order",
                    label: "Order",
                    render: (row) => (
                      <div>
                        <div className="font-semibold text-slate-900">{row.order_number}</div>
                        <div className="text-xs text-slate-500">{row.queue_number ?? "-"}</div>
                      </div>
                    ),
                  },
                  {
                    key: "outlet",
                    label: "Outlet",
                    render: (row) => row.outlet_name,
                  },
                  {
                    key: "status",
                    label: "Status",
                    render: (row) => <Badge variant="danger">{row.order_status}</Badge>,
                  },
                  {
                    key: "cashier",
                    label: "Kasir",
                    render: (row) => row.cashier_name ?? "-",
                  },
                  {
                    key: "time",
                    label: "Waktu",
                    render: (row) => formatDateTime(row.ordered_at),
                  },
                ]}
              />
            </div>
          </>
        )}
      </div>
    </PermissionWrapper>
  );
}
```
</details>

<a id="file-srcmodulesdashboardservicesdashboardservicets"></a>
### src\modules\dashboard\services\dashboard.service.ts
- SHA: `242b8db22fde`  
- Ukuran: 3 KB
<details><summary><strong>Lihat Kode Lengkap</strong></summary>

```ts
import { apiClient } from "@/services/api/api-client";
import type { ApiResponse } from "@/types/api";
import type {
  DashboardBestOutlet,
  DashboardCashDiscrepancy,
  DashboardCriticalStock,
  DashboardFilter,
  DashboardOrderRow,
  DashboardOverview,
  DashboardSalesTrendItem,
  DashboardSummary,
  DashboardTopProduct,
} from "@/types/dashboard";

const dashboardEndpoints = {
  overview: "/dashboard/overview",
  summary: "/dashboard/summary",
  salesTrend: "/dashboard/sales-trend",
  topProducts: "/dashboard/top-products",
  bestOutlets: "/dashboard/best-outlets",
  criticalStocks: "/dashboard/critical-stocks",
  pendingOrders: "/dashboard/pending-orders",
  overdueOrders: "/dashboard/overdue-orders",
  cashDiscrepancies: "/dashboard/cash-discrepancies",
};

export const dashboardService = {
  async getOverview(params: DashboardFilter = {}) {
    const response = await apiClient.get<ApiResponse<DashboardOverview>>(
      dashboardEndpoints.overview,
      { params }
    );

    return response.data;
  },

  async getSummary(params: DashboardFilter = {}) {
    const response = await apiClient.get<ApiResponse<DashboardSummary>>(
      dashboardEndpoints.summary,
      { params }
    );

    return response.data;
  },

  async getSalesTrend(params: DashboardFilter = {}) {
    const response = await apiClient.get<ApiResponse<DashboardSalesTrendItem[]>>(
      dashboardEndpoints.salesTrend,
      { params }
    );

    return response.data;
  },

  async getTopProducts(params: DashboardFilter = {}) {
    const response = await apiClient.get<ApiResponse<DashboardTopProduct[]>>(
      dashboardEndpoints.topProducts,
      { params }
    );

    return response.data;
  },

  async getBestOutlets(params: DashboardFilter = {}) {
    const response = await apiClient.get<ApiResponse<DashboardBestOutlet[]>>(
      dashboardEndpoints.bestOutlets,
      { params }
    );

    return response.data;
  },

  async getCriticalStocks(params: DashboardFilter = {}) {
    const response = await apiClient.get<ApiResponse<DashboardCriticalStock[]>>(
      dashboardEndpoints.criticalStocks,
      { params }
    );

    return response.data;
  },

  async getPendingOrders(params: DashboardFilter = {}) {
    const response = await apiClient.get<ApiResponse<DashboardOrderRow[]>>(
      dashboardEndpoints.pendingOrders,
      { params }
    );

    return response.data;
  },

  async getOverdueOrders(params: DashboardFilter = {}) {
    const response = await apiClient.get<ApiResponse<DashboardOrderRow[]>>(
      dashboardEndpoints.overdueOrders,
      { params }
    );

    return response.data;
  },

  async getCashDiscrepancies(params: DashboardFilter = {}) {
    const response = await apiClient.get<ApiResponse<DashboardCashDiscrepancy[]>>(
      dashboardEndpoints.cashDiscrepancies,
      { params }
    );

    return response.data;
  },
};
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

<a id="file-srcmodulesposhooksuseposkeyboardshortcutsts"></a>
### src\modules\pos\hooks\usePosKeyboardShortcuts.ts
- SHA: `d38b6b130689`  
- Ukuran: 2 KB
<details><summary><strong>Lihat Kode Lengkap</strong></summary>

```ts
import { useCallback } from "react";
import { useKeyboardShortcut } from "@/hooks/useKeyboardShortcut";

interface UsePosKeyboardShortcutsOptions {
  enabled?: boolean;
  onFocusSearch?: () => void;
  onOpenPayment?: () => void;
  onClearCart?: () => void;
  onPrintReceipt?: () => void;
  onHoldOrder?: () => void;
}

export function usePosKeyboardShortcuts({
  enabled = true,
  onFocusSearch,
  onOpenPayment,
  onClearCart,
  onPrintReceipt,
  onHoldOrder,
}: UsePosKeyboardShortcutsOptions) {
  const focusSearch = useCallback(() => {
    onFocusSearch?.();
  }, [onFocusSearch]);

  const openPayment = useCallback(() => {
    onOpenPayment?.();
  }, [onOpenPayment]);

  const clearCart = useCallback(() => {
    onClearCart?.();
  }, [onClearCart]);

  const printReceipt = useCallback(() => {
    onPrintReceipt?.();
  }, [onPrintReceipt]);

  const holdOrder = useCallback(() => {
    onHoldOrder?.();
  }, [onHoldOrder]);

  useKeyboardShortcut({
    key: "/",
    enabled,
    preventDefault: true,
    onTrigger: focusSearch,
  });

  useKeyboardShortcut({
    key: "Enter",
    ctrlKey: true,
    enabled,
    allowInEditable: true,
    preventDefault: true,
    onTrigger: openPayment,
  });

  useKeyboardShortcut({
    key: "Backspace",
    ctrlKey: true,
    enabled,
    preventDefault: true,
    onTrigger: clearCart,
  });

  useKeyboardShortcut({
    key: "p",
    ctrlKey: true,
    enabled,
    preventDefault: true,
    onTrigger: printReceipt,
  });

  useKeyboardShortcut({
    key: "h",
    ctrlKey: true,
    enabled,
    preventDefault: true,
    onTrigger: holdOrder,
  });
}
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

<a id="file-srcmodulesreportingcomponentsreportdatatabletsx"></a>
### src\modules\reporting\components\ReportDataTable.tsx
- SHA: `4c77486b924f`  
- Ukuran: 2 KB
<details><summary><strong>Lihat Kode Lengkap</strong></summary>

```tsx
import { Card } from "@/components/ui";

type ReportCellValue =
  | string
  | number
  | boolean
  | null
  | undefined
  | Record<string, unknown>
  | unknown[];

interface ReportDataTableProps {
  rows: Record<string, ReportCellValue>[];
}

const formatHeader = (key: string) => {
  return key
    .replaceAll("_", " ")
    .replaceAll("-", " ")
    .replace(/\b\w/g, (letter) => letter.toUpperCase());
};

const formatValue = (value: ReportCellValue): string => {
  if (value === null || value === undefined) {
    return "-";
  }

  if (typeof value === "boolean") {
    return value ? "Ya" : "Tidak";
  }

  if (typeof value === "number") {
    return value.toLocaleString("id-ID");
  }

  if (typeof value === "string") {
    return value;
  }

  if (Array.isArray(value)) {
    return value.length ? JSON.stringify(value) : "-";
  }

  if (typeof value === "object") {
    return JSON.stringify(value);
  }

  return String(value);
};

export function ReportDataTable({ rows }: ReportDataTableProps) {
  const columns = Array.from(
    rows.reduce<Set<string>>((accumulator, row) => {
      Object.keys(row).forEach((key) => accumulator.add(key));
      return accumulator;
    }, new Set<string>())
  );

  if (!rows.length || !columns.length) {
    return (
      <Card>
        <div className="py-8 text-center text-sm text-slate-500">
          Tidak ada data laporan untuk filter ini.
        </div>
      </Card>
    );
  }

  return (
    <Card>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-slate-200 text-sm">
          <thead className="bg-slate-50">
            <tr>
              {columns.map((column) => (
                <th
                  key={column}
                  className="whitespace-nowrap px-4 py-3 text-left font-semibold text-slate-700"
                >
                  {formatHeader(column)}
                </th>
              ))}
            </tr>
          </thead>

          <tbody className="divide-y divide-slate-100 bg-white">
            {rows.map((row, index) => (
              <tr key={index} className="hover:bg-slate-50">
                {columns.map((column) => (
                  <td key={column} className="whitespace-nowrap px-4 py-3 text-slate-700">
                    {formatValue(row[column])}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  );
}
```
</details>

<a id="file-srcmodulesreportingcomponentsreportfilterstsx"></a>
### src\modules\reporting\components\ReportFilters.tsx
- SHA: `3686d70900e3`  
- Ukuran: 4 KB
<details><summary><strong>Lihat Kode Lengkap</strong></summary>

```tsx
import type { ReportExportFormat, ReportFilterParams, ReportGroupBy } from "@/types/report";
import { Button, Card, Input } from "@/components/ui";

interface ReportFiltersProps {
  value: ReportFilterParams;
  exportFormat: ReportExportFormat;
  loading?: boolean;
  exporting?: boolean;
  onChange: (next: ReportFilterParams) => void;
  onExportFormatChange: (format: ReportExportFormat) => void;
  onRefresh: () => void;
  onExport: () => void;
}

const groupByOptions: ReportGroupBy[] = ["day", "week", "month"];
const exportFormatOptions: ReportExportFormat[] = ["csv", "xls", "pdf"];

export function ReportFilters({
  value,
  exportFormat,
  loading = false,
  exporting = false,
  onChange,
  onExportFormatChange,
  onRefresh,
  onExport,
}: ReportFiltersProps) {
  const update = <K extends keyof ReportFilterParams>(key: K, fieldValue: ReportFilterParams[K]) => {
    onChange({
      ...value,
      [key]: fieldValue,
    });
  };

  return (
    <Card>
      <div className="grid gap-4 lg:grid-cols-6">
        <Input
          label="Dari Tanggal"
          type="date"
          value={value.date_from ?? ""}
          onChange={(event) => update("date_from", event.target.value || undefined)}
        />

        <Input
          label="Sampai Tanggal"
          type="date"
          value={value.date_until ?? ""}
          onChange={(event) => update("date_until", event.target.value || undefined)}
        />

        <Input
          label="Outlet ID"
          type="number"
          placeholder="Kosongkan untuk semua"
          value={value.outlet_id ? String(value.outlet_id) : ""}
          onChange={(event) =>
            update("outlet_id", event.target.value ? Number(event.target.value) : undefined)
          }
        />

        <Input
          label="Status"
          placeholder="paid, completed, approved..."
          value={value.status ?? ""}
          onChange={(event) => update("status", event.target.value || undefined)}
        />

        <Input
          label="Search"
          placeholder="Cari keyword"
          value={value.search ?? ""}
          onChange={(event) => update("search", event.target.value || undefined)}
        />

        <div>
          <label className="mb-2 block text-sm font-medium text-slate-700">Group By</label>
          <select
            className="w-full rounded-xl border border-slate-300 px-3 py-2 text-sm"
            value={value.group_by ?? "day"}
            onChange={(event) => update("group_by", event.target.value as ReportGroupBy)}
          >
            {groupByOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>

        <Input
          label="Limit"
          type="number"
          value={String(value.limit ?? 100)}
          onChange={(event) => update("limit", Number(event.target.value || 100))}
        />

        <div>
          <label className="mb-2 block text-sm font-medium text-slate-700">Format Export</label>
          <select
            className="w-full rounded-xl border border-slate-300 px-3 py-2 text-sm"
            value={exportFormat}
            onChange={(event) => onExportFormatChange(event.target.value as ReportExportFormat)}
          >
            {exportFormatOptions.map((option) => (
              <option key={option} value={option}>
                {option.toUpperCase()}
              </option>
            ))}
          </select>
        </div>

        <div className="flex items-end gap-2 lg:col-span-4">
          <Button loading={loading} onClick={onRefresh}>
            Terapkan Filter
          </Button>

          <Button variant="outline" loading={exporting} onClick={onExport}>
            Export
          </Button>
        </div>
      </div>
    </Card>
  );
}
```
</details>

<a id="file-srcmodulesreportingpagesreportspagetsx"></a>
### src\modules\reporting\pages\ReportsPage.tsx
- SHA: `9088a0e0e871`  
- Ukuran: 10 KB
<details><summary><strong>Lihat Kode Lengkap</strong></summary>

```tsx
import { useMemo, useState } from "react";
import { useMutation, useQuery } from "@tanstack/react-query";
import { PageHeader } from "@/components/navigation/PageHeader";
import { PermissionWrapper } from "@/components/navigation/PermissionWrapper";
import { PageErrorState } from "@/components/feedback/PageErrorState";
import { Badge, Button, Card } from "@/components/ui";
import { ReportFilters } from "@/modules/reporting/components/ReportFilters";
import { ReportDataTable } from "@/modules/reporting/components/ReportDataTable";
import { reportDefinitions, reportService } from "@/modules/reporting/services/report.service";
import { parseApiError } from "@/services/api/error-parser";
import { useToast } from "@/hooks/useToast";
import type { ReportExportFormat, ReportFilterParams, ReportKey } from "@/types/report";

const today = new Date().toISOString().slice(0, 10);

const initialFilters: ReportFilterParams = {
    date_from: today,
    date_until: today,
    group_by: "day",
    limit: 100,
    per_page: 100,
};

const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
        maximumFractionDigits: 0,
    }).format(value);
};

interface NumericSummary {
    amount: number;
    count: number;
}

const getNumericSummary = (
    rows: Record<string, string | number | boolean | null>[]
): NumericSummary => {
    return rows.reduce<NumericSummary>(
        (accumulator, row) => {
            Object.entries(row).forEach(([key, value]) => {
                if (typeof value !== "number") {
                    return;
                }

                const normalizedKey = key.toLowerCase();

                if (
                    normalizedKey.includes("total") ||
                    normalizedKey.includes("amount") ||
                    normalizedKey.includes("grand") ||
                    normalizedKey.includes("subtotal") ||
                    normalizedKey.includes("sales") ||
                    normalizedKey.includes("revenue")
                ) {
                    accumulator.amount += value;
                }

                if (
                    normalizedKey.includes("count") ||
                    normalizedKey.includes("qty") ||
                    normalizedKey.includes("quantity") ||
                    normalizedKey.includes("orders")
                ) {
                    accumulator.count += value;
                }
            });

            return accumulator;
        },
        {
            amount: 0,
            count: 0,
        }
    );
};

export default function ReportsPage() {
    const toast = useToast();

    const [selectedReport, setSelectedReport] = useState<ReportKey>("sales-summary");
    const [filters, setFilters] = useState<ReportFilterParams>(initialFilters);
    const [exportFormat, setExportFormat] = useState<ReportExportFormat>("csv");

    const selectedDefinition = useMemo(
        () => reportDefinitions.find((definition) => definition.key === selectedReport),
        [selectedReport]
    );

    const reportQuery = useQuery({
        queryKey: ["reports", selectedReport, filters],
        queryFn: () => reportService.getReport(selectedReport, filters),
    });

    const rows = useMemo(() => {
        const data = reportQuery.data?.data;

        if (!data) {
            return [];
        }

        if (Array.isArray(data)) {
            return data;
        }

        const possibleRows = Object.values(data).find((value) => Array.isArray(value));

        if (Array.isArray(possibleRows)) {
            return possibleRows.filter(
                (item): item is Record<string, string | number | boolean | null> =>
                    typeof item === "object" && item !== null && !Array.isArray(item)
            );
        }

        const metadataKeys = new Set(["filters", "filter", "meta", "metadata"]);

        const cleanRow = Object.entries(data).reduce<Record<string, string | number | boolean | null>>(
            (accumulator, [key, value]) => {
                if (metadataKeys.has(key)) {
                    return accumulator;
                }

                if (
                    typeof value === "string" ||
                    typeof value === "number" ||
                    typeof value === "boolean" ||
                    value === null
                ) {
                    accumulator[key] = value;
                }

                return accumulator;
            },
            {}
        );

        return Object.keys(cleanRow).length ? [cleanRow] : [];
    }, [reportQuery.data?.data]);

    const numericSummary = useMemo(() => getNumericSummary(rows), [rows]);

    const exportMutation = useMutation({
        mutationFn: async () => {
            const blob = await reportService.exportReport(selectedReport, {
                ...filters,
                format: exportFormat,
                limit: filters.limit ?? 1000,
                per_page: filters.per_page ?? 1000,
            });

            reportService.downloadBlob(blob, selectedReport, exportFormat);
        },
        onSuccess: () => {
            toast.success("Export laporan berhasil diproses.");
        },
        onError: (error) => {
            toast.error("Export laporan gagal", parseApiError(error));
        },
    });

    return (
        <PermissionWrapper permission="reports.view">
            <div className="space-y-4">
                <PageHeader
                    title="Reporting"
                    description="Pusat laporan operasional Chicken Alibaba: penjualan, pembayaran, stok, pembelian, shift, promo, dan expense."
                />

                <Card>
                    <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
                        {reportDefinitions.map((definition) => {
                            const active = definition.key === selectedReport;

                            return (
                                <button
                                    key={definition.key}
                                    type="button"
                                    onClick={() => setSelectedReport(definition.key)}
                                    className={[
                                        "rounded-2xl border p-4 text-left transition",
                                        active
                                            ? "border-slate-900 bg-slate-900 text-white"
                                            : "border-slate-200 bg-white text-slate-700 hover:border-slate-400",
                                    ].join(" ")}
                                >
                                    <div className="flex items-start justify-between gap-3">
                                        <div>
                                            <div className="font-semibold">{definition.label}</div>
                                            <div className={["mt-1 text-xs", active ? "text-slate-200" : "text-slate-500"].join(" ")}>
                                                {definition.description}
                                            </div>
                                        </div>

                                        <Badge variant={active ? "info" : "default"}>{definition.category}</Badge>
                                    </div>
                                </button>
                            );
                        })}
                    </div>
                </Card>

                <ReportFilters
                    value={filters}
                    exportFormat={exportFormat}
                    loading={reportQuery.isFetching}
                    exporting={exportMutation.isPending}
                    onChange={setFilters}
                    onExportFormatChange={setExportFormat}
                    onRefresh={() => void reportQuery.refetch()}
                    onExport={() => exportMutation.mutate()}
                />

                <div className="grid gap-4 md:grid-cols-3">
                    <Card title="Report Aktif" description={selectedDefinition?.description ?? "-"}>
                        <div className="text-2xl font-semibold text-slate-900">
                            {selectedDefinition?.label ?? selectedReport}
                        </div>
                    </Card>

                    <Card title="Total Baris" description="Jumlah data yang diterima dari backend">
                        <div className="text-2xl font-semibold text-slate-900">
                            {rows.length.toLocaleString("id-ID")}
                        </div>
                    </Card>

                    <Card title="Akumulasi Nominal" description="Ringkasan nilai numerik utama">
                        <div className="text-2xl font-semibold text-slate-900">
                            {formatCurrency(numericSummary.amount)}
                        </div>
                        <div className="mt-1 text-xs text-slate-500">
                            Qty/Count: {numericSummary.count.toLocaleString("id-ID")}
                        </div>
                    </Card>
                </div>

                {reportQuery.isLoading ? (
                    <Card>
                        <div className="py-8 text-center text-sm text-slate-500">Memuat laporan...</div>
                    </Card>
                ) : reportQuery.isError ? (
                    <PageErrorState onRetry={() => void reportQuery.refetch()} />
                ) : (
                    <ReportDataTable rows={rows} />
                )}

                <div className="flex justify-end">
                    <Button variant="outline" loading={reportQuery.isFetching} onClick={() => void reportQuery.refetch()}>
                        Refresh Data
                    </Button>
                </div>
            </div>
        </PermissionWrapper>
    );
}
```
</details>

<a id="file-srcmodulesreportingservicesreportservicets"></a>
### src\modules\reporting\services\report.service.ts
- SHA: `f9f104b3d8a7`  
- Ukuran: 4 KB
<details><summary><strong>Lihat Kode Lengkap</strong></summary>

```ts
import { apiClient } from "@/services/api/api-client";
import type {
  ReportApiResponse,
  ReportData,
  ReportDefinition,
  ReportExportFormat,
  ReportExportParams,
  ReportFilterParams,
  ReportKey,
} from "@/types/report";

export const reportDefinitions: ReportDefinition[] = [
  {
    key: "sales-summary",
    label: "Ringkasan Penjualan",
    description: "Rekap omzet, transaksi, diskon, pajak, dan total penjualan.",
    category: "sales",
    endpoint: "/reports/sales-summary",
  },
  {
    key: "sales-trend",
    label: "Tren Penjualan",
    description: "Pergerakan penjualan berdasarkan periode.",
    category: "sales",
    endpoint: "/reports/sales-trend",
  },
  {
    key: "sales-by-outlet",
    label: "Penjualan per Outlet",
    description: "Perbandingan performa penjualan antar outlet.",
    category: "sales",
    endpoint: "/reports/sales-by-outlet",
  },
  {
    key: "sales-by-cashier",
    label: "Penjualan per Kasir",
    description: "Ringkasan transaksi berdasarkan kasir.",
    category: "sales",
    endpoint: "/reports/sales-by-cashier",
  },
  {
    key: "top-products",
    label: "Produk Terlaris",
    description: "Daftar produk dengan penjualan tertinggi.",
    category: "sales",
    endpoint: "/reports/top-products",
  },
  {
    key: "payment-summary",
    label: "Ringkasan Pembayaran",
    description: "Rekap metode pembayaran dan nominal transaksi.",
    category: "cash",
    endpoint: "/reports/payment-summary",
  },
  {
    key: "promo-usage",
    label: "Pemakaian Promo",
    description: "Rekap penggunaan promo dan potongan transaksi.",
    category: "sales",
    endpoint: "/reports/promo-usage",
  },
  {
    key: "void-refund",
    label: "Void & Refund",
    description: "Monitoring transaksi batal dan refund.",
    category: "cash",
    endpoint: "/reports/void-refund",
  },
  {
    key: "low-stocks",
    label: "Stok Minimum",
    description: "Daftar bahan baku yang berada di bawah batas minimum.",
    category: "inventory",
    endpoint: "/reports/low-stocks",
  },
  {
    key: "purchase-materials",
    label: "Pembelian Bahan",
    description: "Rekap pembelian bahan baku dan penerimaan barang.",
    category: "purchase",
    endpoint: "/reports/purchase-materials",
  },
  {
    key: "expenses",
    label: "Pengeluaran",
    description: "Rekap pengeluaran operasional outlet.",
    category: "expense",
    endpoint: "/reports/expenses",
  },
  {
    key: "shift-summary",
    label: "Ringkasan Shift",
    description: "Rekap buka tutup shift dan pergerakan kas.",
    category: "cash",
    endpoint: "/reports/shift-summary",
  },
];

const reportEndpointMap = reportDefinitions.reduce<Record<ReportKey, string>>(
  (accumulator, definition) => ({
    ...accumulator,
    [definition.key]: definition.endpoint,
  }),
  {
    "sales-summary": "/reports/sales-summary",
    "sales-trend": "/reports/sales-trend",
    "sales-by-outlet": "/reports/sales-by-outlet",
    "sales-by-cashier": "/reports/sales-by-cashier",
    "top-products": "/reports/top-products",
    "payment-summary": "/reports/payment-summary",
    "promo-usage": "/reports/promo-usage",
    "void-refund": "/reports/void-refund",
    "low-stocks": "/reports/low-stocks",
    "purchase-materials": "/reports/purchase-materials",
    expenses: "/reports/expenses",
    "shift-summary": "/reports/shift-summary",
    "order-details": "/reports/order-details",
  }
);

export const reportService = {
  async getReport(report: ReportKey, params: ReportFilterParams): Promise<ReportApiResponse> {
    const response = await apiClient.get<ReportApiResponse>(reportEndpointMap[report], {
      params,
    });

    return response.data;
  },

  async exportReport(report: ReportKey, params: ReportExportParams): Promise<Blob> {
    const response = await apiClient.get<Blob>(`/reports/${report}/export`, {
      params,
      responseType: "blob",
    });

    return response.data;
  },

  downloadBlob(blob: Blob, report: ReportKey, format: ReportExportFormat) {
    const url = window.URL.createObjectURL(blob);
    const anchor = document.createElement("a");

    anchor.href = url;
    anchor.download = `${report}.${format}`;
    document.body.appendChild(anchor);
    anchor.click();
    anchor.remove();

    window.URL.revokeObjectURL(url);
  },

  normalizeRows(data: ReportData): Record<string, string | number | boolean | null>[] {
    if (Array.isArray(data)) {
      return data;
    }

    return [data];
  },
};
```
</details>


## Components (src/components)

<a id="file-srccomponentsfeedbackapperrorboundarytsx"></a>
### src\components\feedback\AppErrorBoundary.tsx
- SHA: `3a174b89eebf`  
- Ukuran: 2 KB
<details><summary><strong>Lihat Kode Lengkap</strong></summary>

```tsx
import { Component, type ErrorInfo, type ReactNode } from "react";
import { Button } from "@/components/ui";

interface AppErrorBoundaryProps {
  children: ReactNode;
}

interface AppErrorBoundaryState {
  hasError: boolean;
  message: string;
}

export class AppErrorBoundary extends Component<AppErrorBoundaryProps, AppErrorBoundaryState> {
  state: AppErrorBoundaryState = {
    hasError: false,
    message: "",
  };

  static getDerivedStateFromError(error: Error): AppErrorBoundaryState {
    return {
      hasError: true,
      message: error.message,
    };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Application error boundary:", error, errorInfo);
  }

  private reloadPage = () => {
    window.location.reload();
  };

  render() {
    if (!this.state.hasError) {
      return this.props.children;
    }

    return (
      <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-slate-50 via-slate-100 to-slate-200 px-4">
        <div className="w-full max-w-md rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-md">
          <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-red-50 text-lg font-bold text-red-600 shadow-sm">
            !
          </div>

          <h1 className="text-lg font-semibold text-slate-900">
            Terjadi Kesalahan Sistem
          </h1>

          <p className="mt-2 text-sm text-slate-600">
            Aplikasi mengalami gangguan saat memuat halaman. Silakan coba muat ulang untuk melanjutkan.
          </p>

          {this.state.message ? (
            <div className="mt-4 max-h-32 overflow-auto rounded-xl border border-slate-200 bg-slate-50 p-3 text-left text-xs text-slate-600">
              {this.state.message}
            </div>
          ) : null}

          <div className="mt-6 flex justify-center">
            <Button onClick={this.reloadPage}>
              Muat Ulang Halaman
            </Button>
          </div>
        </div>
      </div>
    );
  }
}
```
</details>

<a id="file-srccomponentsfeedbackapploadertsx"></a>
### src\components\feedback\AppLoader.tsx
- SHA: `67a9faa40cbe`  
- Ukuran: 487 B
<details><summary><strong>Lihat Kode Lengkap</strong></summary>

```tsx
export function AppLoader() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4 bg-transparent text-sm text-slate-500">
      <div className="h-8 w-8 animate-spin rounded-full border-2 border-slate-300 border-t-slate-900" />

      <div className="text-center">
        <div className="font-medium text-slate-700">Memuat aplikasi...</div>
        <div className="text-xs text-slate-400">Mohon tunggu sebentar</div>
      </div>
    </div>
  );
}
```
</details>

<a id="file-srccomponentsfeedbackapptoastertsx"></a>
### src\components\feedback\AppToaster.tsx
- SHA: `025e28eed190`  
- Ukuran: 2 KB
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
    <div className="pointer-events-none fixed right-3 top-3 z-[60] flex w-full max-w-sm flex-col gap-3 sm:right-4 sm:top-4">
      {items.map((item) => (
        <div
          key={item.id}
          className={[
            "pointer-events-auto w-full rounded-2xl border px-4 py-3 shadow-lg backdrop-blur",
            "transition-all duration-200 ease-out",
            "animate-in slide-in-from-top-2 fade-in",
            variantClassMap[item.variant],
          ].join(" ")}
        >
          <div className="flex items-start gap-3">
            <div className="flex-1 space-y-1">
              <div className="text-sm font-semibold leading-tight">
                {item.title}
              </div>

              {item.description ? (
                <div className="text-xs leading-relaxed opacity-90">
                  {item.description}
                </div>
              ) : null}
            </div>

            <button
              type="button"
              onClick={() => removeToast(item.id)}
              className="shrink-0 rounded-lg px-2 py-1 text-xs font-medium transition hover:bg-white/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-1"
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

<a id="file-srccomponentsfeedbacknetworkstatusbannertsx"></a>
### src\components\feedback\NetworkStatusBanner.tsx
- SHA: `b5ea2a498aea`  
- Ukuran: 688 B
<details><summary><strong>Lihat Kode Lengkap</strong></summary>

```tsx
import { useOnlineStatus } from "@/hooks/useOnlineStatus";

export function NetworkStatusBanner() {
  const online = useOnlineStatus();

  if (online) {
    return null;
  }

  return (
    <div
      role="status"
      aria-live="polite"
      className="fixed inset-x-0 top-0 z-[70] flex items-center justify-center bg-amber-500/95 px-4 py-2.5 text-sm font-medium text-white shadow-md backdrop-blur"
    >
      <div className="flex items-center gap-2">
        <span className="h-2 w-2 rounded-full bg-white animate-pulse" />
        <span className="truncate">
          Koneksi internet terputus. Beberapa data mungkin belum tersimpan.
        </span>
      </div>
    </div>
  );
}
```
</details>

<a id="file-srccomponentsfeedbackpageemptystatetsx"></a>
### src\components\feedback\PageEmptyState.tsx
- SHA: `57749f7717ab`  
- Ukuran: 752 B
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
    <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-slate-300 bg-white px-6 py-12 text-center">
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-slate-100">
        <span className="text-lg text-slate-400">—</span>
      </div>

      <h3 className="text-sm font-semibold text-slate-900 sm:text-base">{title}</h3>

      <p className="mt-2 max-w-md text-sm text-slate-500">{description}</p>
    </div>
  );
}
```
</details>

<a id="file-srccomponentsfeedbackpageerrorstatetsx"></a>
### src\components\feedback\PageErrorState.tsx
- SHA: `ca7bb72225a1`  
- Ukuran: 1 KB
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
    <div className="flex flex-col items-center justify-center rounded-2xl border border-red-200 bg-white px-6 py-10 text-center shadow-sm">
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-red-100">
        <span className="text-lg font-bold text-red-600">!</span>
      </div>

      <h3 className="text-base font-semibold text-red-700">{title}</h3>

      <p className="mt-2 max-w-md text-sm leading-relaxed text-slate-600">
        {description}
      </p>

      {onRetry && (
        <button
          type="button"
          onClick={onRetry}
          className="mt-6 inline-flex items-center justify-center rounded-xl bg-slate-900 px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-slate-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900 focus-visible:ring-offset-2"
        >
          Coba lagi
        </button>
      )}
    </div>
  );
}
```
</details>

<a id="file-srccomponentsfeedbackpageskeletontsx"></a>
### src\components\feedback\PageSkeleton.tsx
- SHA: `8250731084d3`  
- Ukuran: 1 KB
<details><summary><strong>Lihat Kode Lengkap</strong></summary>

```tsx
import { Skeleton } from "@/components/ui";

interface PageSkeletonProps {
  rows?: number;
  withHeader?: boolean;
  withFilters?: boolean;
}

export function PageSkeleton({
  rows = 6,
  withHeader = true,
  withFilters = true,
}: PageSkeletonProps) {
  return (
    <div className="space-y-4">
      {withHeader ? (
        <div className="space-y-2">
          <Skeleton className="h-7 w-64" />
          <Skeleton className="h-4 w-96 max-w-full" />
        </div>
      ) : null}

      {withFilters ? (
        <div className="rounded-2xl border border-slate-200 bg-white p-4">
          <div className="grid gap-3 md:grid-cols-4">
            <Skeleton className="h-10 w-full" />
            <Skeleton className="h-10 w-full" />
            <Skeleton className="h-10 w-full" />
            <Skeleton className="h-10 w-full" />
          </div>
        </div>
      ) : null}

      <div className="rounded-2xl border border-slate-200 bg-white p-4">
        <div className="space-y-3">
          {Array.from({ length: rows }).map((_, index) => (
            <div key={index} className="grid gap-3 md:grid-cols-5">
              <Skeleton className="h-5 w-full" />
              <Skeleton className="h-5 w-full" />
              <Skeleton className="h-5 w-full" />
              <Skeleton className="h-5 w-full" />
              <Skeleton className="h-5 w-full" />
            </div>
          ))}
        </div>
      </div>
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
- SHA: `42a474f32184`  
- Ukuran: 2 KB
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
    <nav
      aria-label="Breadcrumb"
      className={[
        "flex min-w-0 flex-wrap items-center gap-1.5 text-xs sm:text-sm",
        dark ? "text-slate-400" : "text-slate-500",
      ].join(" ")}
    >
      <Link
        to="/"
        className={[
          "rounded-md px-1.5 py-1 font-medium transition",
          dark
            ? "hover:bg-slate-900 hover:text-white"
            : "hover:bg-slate-100 hover:text-slate-900",
        ].join(" ")}
      >
        Home
      </Link>

      {crumbs.map((item) => (
        <span key={item.href} className="flex min-w-0 items-center gap-1.5">
          <span aria-hidden="true" className={dark ? "text-slate-600" : "text-slate-300"}>
            /
          </span>

          {item.isLast ? (
            <span
              aria-current="page"
              className={[
                "max-w-[180px] truncate rounded-md px-1.5 py-1 font-semibold sm:max-w-none",
                dark ? "text-white" : "text-slate-900",
              ].join(" ")}
              title={item.label}
            >
              {item.label}
            </span>
          ) : (
            <Link
              to={item.href}
              className={[
                "max-w-[160px] truncate rounded-md px-1.5 py-1 font-medium transition sm:max-w-none",
                dark
                  ? "hover:bg-slate-900 hover:text-white"
                  : "hover:bg-slate-100 hover:text-slate-900",
              ].join(" ")}
              title={item.label}
            >
              {item.label}
            </Link>
          )}
        </span>
      ))}
    </nav>
  );
}
```
</details>

<a id="file-srccomponentsnavigationappoutletswitchertsx"></a>
### src\components\navigation\AppOutletSwitcher.tsx
- SHA: `df14c7e60fcb`  
- Ukuran: 2 KB
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
    <div className="w-full min-w-0 sm:w-auto sm:min-w-[240px]">
      <label
        className={[
          "mb-1.5 block text-xs font-semibold uppercase tracking-wide",
          dark ? "text-slate-400" : "text-slate-500",
        ].join(" ")}
      >
        Outlet Aktif
      </label>

      <div className="relative">
        <select
          value={activeOutletId ?? ""}
          onChange={(event) => {
            const value = event.target.value ? Number(event.target.value) : null;
            setActiveOutletId(value);
          }}
          className={[
            "h-10 w-full appearance-none rounded-xl border px-3 pr-9 text-sm font-medium shadow-sm outline-none transition",
            "focus:border-slate-900 focus:ring-2 focus:ring-slate-900/10",
            dark
              ? "border-slate-700 bg-slate-900 text-white shadow-none focus:border-slate-500 focus:ring-slate-500/20"
              : "border-slate-200 bg-white text-slate-900 hover:border-slate-300",
          ].join(" ")}
        >
          {outlets.map((item) => (
            <option key={item.outlet_id} value={item.outlet_id}>
              {item.outlet_name ?? `Outlet #${item.outlet_id}`}{" "}
              {item.outlet_code ? `(${item.outlet_code})` : ""}
            </option>
          ))}
        </select>

        <span
          className={[
            "pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-xs",
            dark ? "text-slate-400" : "text-slate-500",
          ].join(" ")}
        >
          ▾
        </span>
      </div>
    </div>
  );
}
```
</details>

<a id="file-srccomponentsnavigationappprofilemenutsx"></a>
### src\components\navigation\AppProfileMenu.tsx
- SHA: `65d10f22a6bd`  
- Ukuran: 5 KB
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

  const userInitial = useMemo(() => {
    return (user?.name?.trim()?.charAt(0) || "U").toUpperCase();
  }, [user?.name]);

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
        aria-haspopup="menu"
        aria-expanded={open}
        className={[
          "flex max-w-[240px] items-center gap-3 rounded-2xl border px-3 py-2 text-left transition",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
          dark
            ? "border-slate-700 bg-slate-900 text-white hover:bg-slate-800 focus-visible:ring-slate-600"
            : "border-slate-200 bg-white text-slate-900 shadow-sm hover:border-slate-300 hover:bg-slate-50 focus-visible:ring-slate-900",
        ].join(" ")}
      >
        <span
          className={[
            "flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-sm font-bold",
            dark ? "bg-slate-800 text-slate-100" : "bg-slate-900 text-white",
          ].join(" ")}
        >
          {userInitial}
        </span>

        <span className="min-w-0">
          <span className="block truncate text-sm font-semibold">
            {user?.name ?? "Unknown User"}
          </span>
          <span
            className={[
              "block truncate text-xs",
              dark ? "text-slate-400" : "text-slate-500",
            ].join(" ")}
          >
            {userRoleLabel}
          </span>
        </span>
      </button>

      {open && (
        <div
          role="menu"
          className={[
            "absolute right-0 z-20 mt-2 w-72 overflow-hidden rounded-2xl border shadow-xl",
            dark
              ? "border-slate-800 bg-slate-950 text-white"
              : "border-slate-200 bg-white text-slate-900",
          ].join(" ")}
        >
          <div
            className={[
              "flex items-start gap-3 border-b p-4",
              dark ? "border-slate-800" : "border-slate-100",
            ].join(" ")}
          >
            <span
              className={[
                "flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-sm font-bold",
                dark ? "bg-slate-800 text-slate-100" : "bg-slate-900 text-white",
              ].join(" ")}
            >
              {userInitial}
            </span>

            <div className="min-w-0">
              <div className="truncate text-sm font-semibold">{user?.name ?? "-"}</div>
              <div
                className={[
                  "mt-1 truncate text-xs",
                  dark ? "text-slate-400" : "text-slate-500",
                ].join(" ")}
              >
                {user?.email || user?.username || user?.phone || "-"}
              </div>
              <div
                className={[
                  "mt-2 inline-flex max-w-full rounded-full px-2.5 py-1 text-xs font-medium",
                  dark ? "bg-slate-900 text-slate-300" : "bg-slate-100 text-slate-700",
                ].join(" ")}
              >
                <span className="truncate">{userRoleLabel}</span>
              </div>
            </div>
          </div>

          <div className="p-3">
            <button
              type="button"
              onClick={handleLogout}
              disabled={loading}
              role="menuitem"
              className={[
                "w-full rounded-xl px-3 py-2.5 text-sm font-semibold text-white transition",
                "bg-red-600 hover:bg-red-700 disabled:cursor-not-allowed disabled:opacity-60",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2",
              ].join(" ")}
            >
              {loading ? "Memproses..." : "Logout"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
```
</details>

<a id="file-srccomponentsnavigationappshelltsx"></a>
### src\components\navigation\AppShell.tsx
- SHA: `25613423b902`  
- Ukuran: 2 KB
<details><summary><strong>Lihat Kode Lengkap</strong></summary>

```tsx
import { useState } from "react";
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
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div
      className={[
        "min-h-screen",
        "transition-colors duration-200",
        dark
          ? "bg-slate-950 text-slate-100"
          : "bg-[var(--color-bg)] text-[var(--color-text)]",
      ].join(" ")}
    >
      <AppSidebar
        title={appTitle}
        items={navItems}
        dark={dark}
        open={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />

      <div className="flex min-h-screen min-w-0 flex-1 flex-col lg:pl-72">
        <AppTopbar
          dark={dark}
          showOutletSwitcher={showOutletSwitcher}
          onMenuClick={() => setSidebarOpen(true)}
        />

        <main
          className={[
            "min-w-0 flex-1",
            "px-4 py-5 sm:px-6 sm:py-6 lg:px-8 lg:py-7",
            dark ? "bg-slate-950" : "bg-transparent",
          ].join(" ")}
        >
          <div className="mx-auto w-full max-w-[1600px]">
            <div className="space-y-5">
              <Outlet />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
```
</details>

<a id="file-srccomponentsnavigationappsidebartsx"></a>
### src\components\navigation\AppSidebar.tsx
- SHA: `3ca607cd9f18`  
- Ukuran: 4 KB
<details><summary><strong>Lihat Kode Lengkap</strong></summary>

```tsx
import { NavLink } from "react-router-dom";
import type { NavigationItem } from "./navigation.config";
import { usePermission } from "@/hooks/usePermission";

interface AppSidebarProps {
  title: string;
  items: NavigationItem[];
  dark?: boolean;
  open?: boolean;
  onClose?: () => void;
}

function SidebarLink({
  item,
  dark = false,
  onClick,
}: {
  item: NavigationItem;
  dark?: boolean;
  onClick?: () => void;
}) {
  const allowed = item.permission ? usePermission(item.permission) : true;

  if (!allowed) {
    return null;
  }

  return (
    <NavLink
      to={item.to}
      end={item.to.split("/").length <= 3}
      onClick={onClick}
      className={({ isActive }) =>
        [
          "group flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-all",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
          dark ? "focus-visible:ring-slate-600" : "focus-visible:ring-[var(--brand-brick)]",

          dark
            ? isActive
              ? "bg-slate-800 text-white shadow-sm ring-1 ring-slate-700"
              : "text-slate-300 hover:bg-slate-900 hover:text-white"
            : isActive
              ? "bg-[var(--brand-brick)] text-white shadow-sm ring-1 ring-[var(--brand-brick-dark)]"
              : "text-white/90 hover:bg-[var(--brand-brick-soft)] hover:text-[var(--brand-brick)]",
        ].join(" ")
      }
    >
      <span className="truncate">{item.label}</span>
    </NavLink>
  );
}

export function AppSidebar({
  title,
  items,
  dark = false,
  open = false,
  onClose,
}: AppSidebarProps) {
  return (
    <>
      <div
        aria-hidden="true"
        onClick={onClose}
        className={[
          "fixed inset-0 z-40 transition-opacity lg:hidden",
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0",
          dark ? "bg-slate-950/70" : "bg-slate-950/40 backdrop-blur-sm",
        ].join(" ")}
      />

      <aside
        className={[
          "fixed inset-y-0 left-0 z-50 flex w-72 max-w-[85vw] shrink-0 flex-col border-r shadow-xl transition-transform duration-300 lg:translate-x-0",
          open ? "translate-x-0" : "-translate-x-full",
          dark ? "border-slate-800 bg-slate-950" : "border-[var(--color-border)] bg-white",
        ].join(" ")}
      >
        <div
          className={[
            "flex h-16 items-center justify-between gap-3 px-5",
            dark ? "border-b border-slate-800" : "border-b border-[var(--color-border)]",
          ].join(" ")}
        >
          <span
            className={[
              "truncate text-base font-semibold tracking-tight",
              dark ? "text-white" : "text-[var(--color-text)]",
            ].join(" ")}
          >
            {title}
          </span>

          <button
            type="button"
            onClick={onClose}
            className={[
              "inline-flex h-9 w-9 items-center justify-center rounded-xl text-lg transition lg:hidden",
              dark
                ? "text-slate-300 hover:bg-slate-900 hover:text-white"
                : "text-slate-600 hover:bg-slate-100 hover:text-slate-900",
            ].join(" ")}
            aria-label="Tutup menu navigasi"
          >
            ×
          </button>
        </div>

        <nav className="flex-1 space-y-1 overflow-y-auto px-3 py-4">
          {items.map((item) => (
            <SidebarLink
              key={item.to}
              item={item}
              dark={dark}
              onClick={onClose}
            />
          ))}
        </nav>
      </aside>
    </>
  );
}
```
</details>

<a id="file-srccomponentsnavigationapptopbartsx"></a>
### src\components\navigation\AppTopbar.tsx
- SHA: `65d392a3298c`  
- Ukuran: 2 KB
<details><summary><strong>Lihat Kode Lengkap</strong></summary>

```tsx
import { AppBreadcrumbs } from "./AppBreadcrumbs";
import { AppOutletSwitcher } from "./AppOutletSwitcher";
import { AppProfileMenu } from "./AppProfileMenu";

interface AppTopbarProps {
  dark?: boolean;
  showOutletSwitcher?: boolean;
  onMenuClick?: () => void;
}

export function AppTopbar({
  dark = false,
  showOutletSwitcher = true,
  onMenuClick,
}: AppTopbarProps) {
  return (
    <header
      className={[
        "sticky top-0 z-30 border-b px-4 py-3 backdrop-blur supports-[backdrop-filter]:bg-opacity-80 lg:px-6",
        dark
          ? "border-slate-800 bg-slate-950/90"
          : "border-[var(--color-border)] bg-white/90 shadow-sm",
      ].join(" ")}
    >
      <div className="mx-auto flex w-full max-w-[1600px] flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex min-w-0 items-center gap-3">
          <button
            type="button"
            onClick={onMenuClick}
            className={[
              "inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border text-lg transition focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-brick)] lg:hidden",
              dark
                ? "border-slate-800 bg-slate-900 text-slate-100 hover:bg-slate-800"
                : "border-[var(--color-border)] bg-white text-white hover:bg-slate-100 hover:text-white",
            ].join(" ")}
            aria-label="Buka menu navigasi"
          >
            ☰
          </button>

          <div className="min-w-0">
            <AppBreadcrumbs dark={dark} />
          </div>
        </div>

        <div className="flex min-w-0 flex-col gap-2 sm:flex-row sm:items-center sm:justify-end lg:gap-3">
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
- SHA: `a91604d0f235`  
- Ukuran: 3 KB
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

  { label: "Product Categories", to: "/admin/product-categories", permission: "product_categories.view" },
  { label: "Products", to: "/admin/products", permission: "products.view" },
  { label: "Product Variants", to: "/admin/product-variants", permission: "products.view" },
  { label: "Product Modifiers", to: "/admin/product-modifiers", permission: "products.view" },
  { label: "Product Bundles", to: "/admin/product-bundles", permission: "products.view" },

  { label: "Units", to: "/admin/units", permission: "units.view" },
  { label: "Raw Material Categories", to: "/admin/raw-material-categories", permission: "raw_material_categories.view" },
  { label: "Raw Materials", to: "/admin/raw-materials", permission: "raw_materials.view" },
  { label: "Outlet Material Stocks", to: "/admin/outlet-material-stocks", permission: "outlet_material_stocks.view" },
  { label: "Product BOM", to: "/admin/product-boms", permission: "product_boms.view" },

  { label: "Suppliers", to: "/admin/suppliers", permission: "suppliers.view" },
  { label: "Purchase Orders", to: "/admin/purchase-orders", permission: "purchase_orders.view" },
  { label: "Goods Receipts", to: "/admin/goods-receipts", permission: "goods_receipts.view" },
  { label: "Stock Movements", to: "/admin/stock-movements", permission: "stock_movements.view" },

  { label: "Customers", to: "/admin/customers", permission: "customers.view" },
  { label: "Vouchers", to: "/admin/vouchers", permission: "vouchers.view" },
  { label: "Promotions", to: "/admin/promotions", permission: "promotions.view" },

  { label: "Expense Categories", to: "/admin/expense-categories", permission: "expense_categories.view" },
  { label: "Expenses", to: "/admin/expenses", permission: "expenses.view" },
  { label: "Cash Movements", to: "/admin/cash-movements", permission: "cash_movements.view" },

  { label: "Notifications", to: "/admin/notifications", permission: "notifications.view" },
  { label: "Critical Alerts", to: "/admin/critical-alerts", permission: "notifications.view" },
  { label: "Activity Logs", to: "/admin/activity-logs", permission: "activity_logs.view" },

  { label: "Reports", to: "/admin/reports", permission: "reports.view" },
];

export const posNavigation: NavigationItem[] = [
  { label: "POS Home", to: "/pos" },
  { label: "Orders", to: "/pos/orders", permission: "orders.view" },
  { label: "Shifts", to: "/pos/shifts", permission: "cashier_shifts.view" },
];

export const kitchenNavigation: NavigationItem[] = [
  { label: "Kitchen Tickets", to: "/kitchen/tickets", permission: "kitchen_tickets.view" },
  { label: "Ready Queue", to: "/kitchen/ready", permission: "kitchen_tickets.view" },
];

export const ownerNavigation: NavigationItem[] = [
  { label: "Overview", to: "/owner/overview", permission: "reports.view" },
  { label: "Reports", to: "/owner/reports", permission: "reports.view" },
];
```
</details>

<a id="file-srccomponentsnavigationpageheadertsx"></a>
### src\components\navigation\PageHeader.tsx
- SHA: `4204134775d0`  
- Ukuran: 1 KB
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
    <div
      className={[
        "rounded-2xl border p-5 shadow-sm sm:p-6",
        dark
          ? "border-slate-700 bg-slate-900"
          : "border-[var(--color-border)] bg-white",
      ].join(" ")}
    >
      <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
        <div className="min-w-0 space-y-1">
          <h1
            className={[
              "truncate text-xl font-semibold tracking-tight sm:text-2xl",
              dark ? "text-white" : "text-[var(--color-text)]",
            ].join(" ")}
          >
            {title}
          </h1>

          {description ? (
            <p
              className={[
                "max-w-2xl text-sm leading-relaxed",
                dark ? "text-slate-300" : "text-[var(--color-muted)]",
              ].join(" ")}
            >
              {description}
            </p>
          ) : null}
        </div>

        {actions ? (
          <div className="flex w-full flex-col gap-2 sm:w-auto sm:flex-row sm:flex-wrap sm:items-center sm:justify-end">
            {actions}
          </div>
        ) : null}
      </div>
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
- SHA: `3ef33ec03d78`  
- Ukuran: 1 KB
<details><summary><strong>Lihat Kode Lengkap</strong></summary>

```tsx
import type { PropsWithChildren } from "react";
import { cn } from "./utils";

type BadgeVariant = "default" | "success" | "warning" | "danger" | "info";

const variantClassMap: Record<BadgeVariant, string> = {
  default: "border-slate-200 bg-white text-slate-700 ring-slate-100",
  success: "border-emerald-200 bg-emerald-50 text-emerald-700 ring-emerald-100",
  warning: "border-amber-200 bg-amber-50 text-amber-700 ring-amber-100",
  danger: "border-red-200 bg-red-50 text-red-700 ring-red-100",
  info: "border-orange-200 bg-orange-50 text-orange-700 ring-orange-100",
};

interface BadgeProps extends PropsWithChildren {
  variant?: BadgeVariant;
  className?: string;
}

export function Badge({ children, variant = "default", className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex max-w-full items-center gap-1 rounded-full border px-2.5 py-1 text-xs font-semibold leading-none shadow-sm ring-1 ring-inset transition-colors",
        variantClassMap[variant],
        className
      )}
    >
      <span className="truncate">{children}</span>
    </span>
  );
}
```
</details>

<a id="file-srccomponentsuibuttontsx"></a>
### src\components\ui\Button.tsx
- SHA: `0154f814db74`  
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
  primary:
    "bg-[var(--brand-brick)] text-white shadow-sm hover:bg-[var(--brand-brick-dark)] active:bg-[var(--brand-brick-dark)]",
  secondary:
    "bg-[var(--brand-yellow-soft)] text-slate-900 hover:bg-[var(--brand-yellow)] active:bg-yellow-500",
  outline:
    "border border-slate-300 bg-white text-slate-900 shadow-sm hover:bg-slate-50 active:bg-slate-100",
  danger:
    "bg-red-600 text-white shadow-sm hover:bg-red-700 active:bg-red-800",
  ghost:
    "bg-transparent text-slate-700 hover:bg-slate-100 active:bg-slate-200",
};

const sizeClassMap: Record<ButtonSize, string> = {
  sm: "min-h-9 px-3 py-1.5 text-xs",
  md: "min-h-10 px-4 py-2 text-sm",
  lg: "min-h-12 px-5 py-2.5 text-base",
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
        "inline-flex items-center justify-center gap-2 rounded-xl font-semibold leading-none outline-none transition-all duration-150 focus-visible:ring-2 focus-visible:ring-[var(--brand-brick)] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-60",
        variantClassMap[variant],
        sizeClassMap[size],
        fullWidth && "w-full",
        className
      )}
      disabled={disabled || loading}
      aria-busy={loading}
      {...props}
    >
      {loading ? (
        <span className="flex items-center gap-2">
          <span className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
          Memproses...
        </span>
      ) : (
        children
      )}
    </button>
  );
}
```
</details>

<a id="file-srccomponentsuicardtsx"></a>
### src\components\ui\Card.tsx
- SHA: `d6c91218770a`  
- Ukuran: 1 KB
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
    <div
      className={cn(
        "group relative rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-200 hover:shadow-md",
        className
      )}
    >
      {(title || actions) && (
        <div className="mb-5 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div className="min-w-0 space-y-1">
            {title ? (
              <h3 className="truncate text-base font-semibold leading-tight text-slate-900">
                {title}
              </h3>
            ) : null}
            {description ? (
              <p className="line-clamp-2 text-sm leading-relaxed text-slate-500">
                {description}
              </p>
            ) : null}
          </div>

          {actions ? (
            <div className="flex shrink-0 flex-wrap items-center gap-2">
              {actions}
            </div>
          ) : null}
        </div>
      )}

      <div className="space-y-4">{children}</div>
    </div>
  );
}
```
</details>

<a id="file-srccomponentsuicheckboxtsx"></a>
### src\components\ui\Checkbox.tsx
- SHA: `0a4e8742eea8`  
- Ukuran: 1017 B
<details><summary><strong>Lihat Kode Lengkap</strong></summary>

```tsx
import type { InputHTMLAttributes } from "react";
import { cn } from "./utils";

interface CheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "type"> {
  label: string;
  hint?: string;
}

export function Checkbox({ label, hint, id, className, ...props }: CheckboxProps) {
  const inputId = id ?? props.name;

  return (
    <label
      htmlFor={inputId}
      className="flex cursor-pointer items-start gap-3 rounded-lg p-2 transition hover:bg-slate-50"
    >
      <input
        id={inputId}
        type="checkbox"
        className={cn(
          "mt-1 h-4 w-4 rounded border-slate-300 text-slate-900 shadow-sm transition focus-visible:ring-2 focus-visible:ring-slate-400 focus-visible:ring-offset-1",
          className
        )}
        {...props}
      />
      <div className="flex flex-col">
        <span className="text-sm font-medium leading-5 text-slate-800">{label}</span>
        {hint ? <span className="text-xs text-slate-500">{hint}</span> : null}
      </div>
    </label>
  );
}
```
</details>

<a id="file-srccomponentsuiconfirmdialogtsx"></a>
### src\components\ui\ConfirmDialog.tsx
- SHA: `b838b85a6c89`  
- Ukuran: 2 KB
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
        <div className="flex w-full flex-col-reverse gap-2 border-t border-slate-200 pt-4 sm:flex-row sm:justify-end">
          <Button
            variant="outline"
            fullWidth
            className="sm:w-auto"
            onClick={onClose}
          >
            {cancelText}
          </Button>
          <Button
            variant={confirmVariant}
            loading={loading}
            fullWidth
            className="sm:w-auto"
            onClick={onConfirm}
          >
            {confirmText}
          </Button>
        </div>
      }
    >
      <div className="flex items-start gap-3 rounded-2xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm leading-6 text-amber-800">
        <div className="mt-0.5 h-2 w-2 flex-shrink-0 rounded-full bg-amber-500" />
        <p className="text-sm">
          Tindakan ini sebaiknya hanya dilakukan jika Anda sudah yakin terhadap data yang dipilih.
        </p>
      </div>
    </Modal>
  );
}
```
</details>

<a id="file-srccomponentsuidatagridtsx"></a>
### src\components\ui\DataGrid.tsx
- SHA: `82eb7ea23fec`  
- Ukuran: 1013 B
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
    <div className="space-y-6">
      {(title || description || actions) && (
        <Card
          title={title}
          description={description}
          actions={<div className="flex flex-wrap items-center gap-2">{actions}</div>}
        />
      )}

      {filters ? (
        <Card>
          <div className="flex flex-col gap-4 md:flex-row md:flex-wrap md:items-end">
            {filters}
          </div>
        </Card>
      ) : null}

      <Card>
        <div className="overflow-x-auto">{table}</div>
      </Card>

      {pagination ? (
        <div className="flex justify-end">{pagination}</div>
      ) : null}
    </div>
  );
}
```
</details>

<a id="file-srccomponentsuidrawertsx"></a>
### src\components\ui\Drawer.tsx
- SHA: `3f82450de5a3`  
- Ukuran: 2 KB
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
    <div className="fixed inset-0 z-50 bg-slate-950/60 backdrop-blur-sm">
      <div
        className={[
          "absolute top-0 h-full w-full overflow-hidden bg-white shadow-2xl ring-1 ring-slate-950/10 sm:w-[520px]",
          widthClassName,
          side === "right" ? "right-0" : "left-0",
        ].join(" ")}
        role="dialog"
        aria-modal="true"
        aria-labelledby="drawer-title"
      >
        <div className="flex h-full flex-col">
          <div className="flex items-start justify-between gap-4 border-b border-slate-200 px-5 py-4 sm:px-6">
            <div className="min-w-0">
              <h2 id="drawer-title" className="text-base font-semibold text-slate-950 sm:text-lg">
                {title}
              </h2>
              {description ? (
                <p className="mt-1 max-w-prose text-sm leading-6 text-slate-500">
                  {description}
                </p>
              ) : null}
            </div>

            <Button variant="ghost" size="sm" onClick={onClose}>
              Tutup
            </Button>
          </div>

          <div className="flex-1 overflow-y-auto px-5 py-5 sm:px-6">{children}</div>

          {footer ? (
            <div className="border-t border-slate-200 bg-white px-5 py-4 sm:px-6">{footer}</div>
          ) : null}
        </div>
      </div>
    </div>
  );
}
```
</details>

<a id="file-srccomponentsuifileuploadfieldtsx"></a>
### src\components\ui\FileUploadField.tsx
- SHA: `6db36a8be324`  
- Ukuran: 3 KB
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
      <div className="space-y-1">
        <div className="text-sm font-semibold text-slate-800">{label}</div>
        {hint ? <div className="text-xs leading-5 text-slate-500">{hint}</div> : null}
      </div>

      <div className="rounded-2xl border border-dashed border-slate-300 bg-white p-4 shadow-sm transition hover:border-slate-400 hover:bg-slate-50/60">
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

        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="space-y-1">
            <div className="text-sm font-medium text-slate-800">
              {files?.length ? `${files.length} file dipilih` : "Belum ada file dipilih"}
            </div>
            <div className="text-xs text-slate-500">
              Klik tombol untuk memilih {multiple ? "satu atau beberapa file" : "file"} dari perangkat.
            </div>
          </div>

          <Button type="button" variant="outline" onClick={() => inputRef.current?.click()}>
            Pilih File
          </Button>
        </div>

        {files?.length ? (
          <ul className="mt-4 max-h-44 space-y-2 overflow-auto pr-1 text-sm text-slate-700">
            {files.map((file) => (
              <li
                key={`${file.name}-${file.size}`}
                className="flex items-center justify-between gap-3 rounded-xl border border-slate-200 bg-slate-50 px-3 py-2"
              >
                <span className="min-w-0 truncate font-medium text-slate-700">{file.name}</span>
                <span className="shrink-0 text-xs text-slate-500">
                  {(file.size / 1024).toFixed(1)} KB
                </span>
              </li>
            ))}
          </ul>
        ) : null}
      </div>

      {error ? <p className="text-xs font-medium text-red-600">{error}</p> : null}
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
- SHA: `1e77fc6f46a7`  
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
        <label
          htmlFor={inputId}
          className="block text-sm font-medium text-slate-700"
        >
          {label}
        </label>
      ) : null}

      <input
        id={inputId}
        className={cn(
          "w-full rounded-xl border px-3 py-2 text-sm shadow-sm outline-none transition duration-150 placeholder:text-slate-400 focus:ring-2 focus:ring-slate-300 focus:ring-offset-0",
          error
            ? "border-red-300 bg-red-50 text-slate-900 focus:border-red-400 focus:ring-red-200"
            : "border-slate-300 bg-white text-slate-900 focus:border-slate-400",
          className
        )}
        aria-invalid={Boolean(error)}
        {...props}
      />

      {error ? (
        <p className="text-xs font-medium text-red-600">{error}</p>
      ) : hint ? (
        <p className="text-xs text-slate-500">{hint}</p>
      ) : null}
    </div>
  );
}
```
</details>

<a id="file-srccomponentsuimodaltsx"></a>
### src\components\ui\Modal.tsx
- SHA: `2101cab7a090`  
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
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/50 backdrop-blur-sm p-4">
      <div className="w-full max-w-xl rounded-2xl border border-slate-200 bg-white shadow-xl">
        <div className="flex items-start justify-between gap-4 border-b border-slate-100 px-6 py-4">
          <div className="space-y-1">
            <h2 className="text-lg font-semibold text-slate-900">{title}</h2>
            {description ? (
              <p className="text-sm text-slate-500">{description}</p>
            ) : null}
          </div>

          <Button variant="ghost" size="sm" onClick={onClose}>
            Tutup
          </Button>
        </div>

        <div className="max-h-[70vh] overflow-y-auto px-6 py-5">
          {children}
        </div>

        {footer ? (
          <div className="flex items-center justify-end gap-3 border-t border-slate-100 px-6 py-4">
            {footer}
          </div>
        ) : null}
      </div>
    </div>
  );
}
```
</details>

<a id="file-srccomponentsuipaginationtsx"></a>
### src\components\ui\Pagination.tsx
- SHA: `4b69e13c55e0`  
- Ukuran: 2 KB
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
    <div className="flex flex-col gap-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:flex-row sm:items-center sm:justify-between">
      <div className="text-sm text-slate-500">
        Halaman{" "}
        <span className="font-semibold text-slate-900">{currentPage}</span>{" "}
        dari{" "}
        <span className="font-semibold text-slate-900">{lastPage}</span>
      </div>

      <div className="flex flex-wrap items-center gap-2 sm:justify-end">
        <Button
          variant="outline"
          size="sm"
          disabled={currentPage <= 1}
          onClick={() => onPageChange(currentPage - 1)}
        >
          Sebelumnya
        </Button>

        <div className="hidden items-center gap-1 sm:flex">
          <span className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-600">
            {currentPage}
          </span>
          <span className="text-xs text-slate-400">/</span>
          <span className="text-xs text-slate-500">{lastPage}</span>
        </div>

        <Button
          variant="outline"
          size="sm"
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
- SHA: `4972e2b3160e`  
- Ukuran: 1 KB
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
    <label
      htmlFor={inputId}
      className="group flex cursor-pointer items-start gap-3 rounded-xl border border-slate-200 bg-white px-4 py-3 text-left transition hover:border-slate-300 hover:bg-slate-50 has-[:checked]:border-slate-900 has-[:checked]:bg-slate-50 has-[:disabled]:cursor-not-allowed has-[:disabled]:opacity-60"
    >
      <input
        id={inputId}
        type="radio"
        className="mt-0.5 h-4 w-4 shrink-0 border-slate-300 text-slate-900 accent-slate-900 focus:ring-2 focus:ring-slate-900 focus:ring-offset-2 disabled:cursor-not-allowed"
        {...props}
      />
      <span className="min-w-0">
        <span className="block text-sm font-semibold leading-5 text-slate-900">
          {label}
        </span>
        {hint ? (
          <span className="mt-0.5 block text-xs leading-5 text-slate-500">
            {hint}
          </span>
        ) : null}
      </span>
    </label>
  );
}
```
</details>

<a id="file-srccomponentsuisearchfieldtsx"></a>
### src\components\ui\SearchField.tsx
- SHA: `45794bcd7926`  
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
    <div className="relative w-full">
      <input
        type="search"
        value={value}
        className={cn(
          "w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 pr-14 text-sm leading-5 text-slate-900 shadow-sm outline-none transition placeholder:text-slate-400 focus:border-slate-900 focus:ring-2 focus:ring-slate-900/10 disabled:cursor-not-allowed disabled:bg-slate-100",
          className
        )}
        placeholder="Cari data..."
        {...props}
      />

      {hasValue && onClear ? (
        <button
          type="button"
          onClick={onClear}
          className="absolute right-2 top-1/2 inline-flex h-8 items-center justify-center rounded-lg px-3 text-xs font-medium text-slate-500 transition hover:bg-slate-100 hover:text-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-900/20 -translate-y-1/2"
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
- SHA: `12f8792f5023`  
- Ukuran: 2 KB
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

      <div className="relative">
        <select
          id={selectId}
          name={name}
          className={cn(
            "w-full appearance-none rounded-xl border px-3 py-2.5 pr-10 text-sm leading-5 outline-none transition duration-150",
            "focus-visible:ring-2 focus-visible:ring-slate-400 focus-visible:ring-offset-2",
            error
              ? "border-red-300 bg-red-50 text-slate-900 focus:border-red-400"
              : "border-slate-300 bg-white text-slate-900 hover:border-slate-400 focus:border-slate-500",
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

        <span className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-slate-400">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.25a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z"
              clipRule="evenodd"
            />
          </svg>
        </span>
      </div>

      {error ? <p className="text-xs text-red-600">{error}</p> : null}
      {!error && hint ? <p className="text-xs text-slate-500">{hint}</p> : null}
    </div>
  );
}
```
</details>

<a id="file-srccomponentsuiskeletontsx"></a>
### src\components\ui\Skeleton.tsx
- SHA: `cc96076c28a5`  
- Ukuran: 737 B
<details><summary><strong>Lihat Kode Lengkap</strong></summary>

```tsx
interface SkeletonProps {
  className?: string;
}

export function Skeleton({ className = "h-4 w-full" }: SkeletonProps) {
  return (
    <div
      className={`relative overflow-hidden rounded-xl bg-slate-200 ${className}`}
    >
      <div className="absolute inset-0 -translate-x-full animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/60 to-transparent" />
    </div>
  );
}

export function SkeletonCard() {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <Skeleton className="h-5 w-32" />
      <Skeleton className="mt-4 h-4 w-full" />
      <Skeleton className="mt-2 h-4 w-4/5" />
      <Skeleton className="mt-6 h-10 w-28 rounded-lg" />
    </div>
  );
}
```
</details>

<a id="file-srccomponentsuiswitchtsx"></a>
### src\components\ui\Switch.tsx
- SHA: `4b81b4948579`  
- Ukuran: 2 KB
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
    <div
      className={[
        "flex items-center justify-between gap-4 rounded-2xl border bg-white px-4 py-3 transition",
        "border-slate-200",
        disabled ? "opacity-60" : "hover:border-slate-300",
      ].join(" ")}
    >
      <div className="min-w-0">
        {label ? (
          <div className="text-sm font-semibold leading-5 text-slate-900">
            {label}
          </div>
        ) : null}
        {description ? (
          <div className="mt-0.5 text-xs leading-5 text-slate-500">
            {description}
          </div>
        ) : null}
      </div>

      <button
        type="button"
        role="switch"
        aria-checked={checked}
        disabled={disabled}
        onClick={() => onChange(!checked)}
        className={[
          "relative inline-flex h-7 w-12 shrink-0 items-center rounded-full transition-colors duration-200",
          "focus:outline-none focus:ring-2 focus:ring-slate-900 focus:ring-offset-2",
          checked ? "bg-slate-900" : "bg-slate-300",
          disabled ? "cursor-not-allowed" : "cursor-pointer",
        ].join(" ")}
      >
        <span
          className={[
            "inline-block h-5 w-5 transform rounded-full bg-white shadow-sm ring-0 transition duration-200",
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
- SHA: `52f17f592fcf`  
- Ukuran: 2 KB
<details><summary><strong>Lihat Kode Lengkap</strong></summary>

```tsx
import type { ReactNode } from "react";
import { cn } from "./utils";

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
    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-slate-200 text-sm">
          <thead className="bg-slate-50">
            <tr>
              {columns.map((column) => (
                <th
                  key={column.key}
                  scope="col"
                  className={cn(
                    "whitespace-nowrap px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-slate-500",
                    column.className
                  )}
                >
                  {column.title}
                </th>
              ))}
            </tr>
          </thead>

          <tbody className="divide-y divide-slate-100 bg-white">
            {data.length > 0 ? (
              data.map((row, index) => (
                <tr
                  key={rowKey(row, index)}
                  className="transition-colors hover:bg-slate-50/80"
                >
                  {columns.map((column) => (
                    <td
                      key={column.key}
                      className={cn(
                        "px-4 py-3 align-middle text-sm text-slate-700",
                        column.className
                      )}
                    >
                      {column.render(row, index)}
                    </td>
                  ))}
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan={columns.length}
                  className="px-4 py-12 text-center text-sm text-slate-500"
                >
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
- SHA: `324190f19a4c`  
- Ukuran: 2 KB
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
      <div className="flex flex-wrap items-center gap-2 border-b border-slate-200 pb-1">
        {items.map((item) => {
          const active = item.key === current?.key;

          return (
            <button
              key={item.key}
              type="button"
              onClick={() => setActiveTab(item.key)}
              className={cn(
                "relative inline-flex items-center rounded-lg px-3 py-1.5 text-sm font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 focus-visible:ring-offset-2",
                active
                  ? "bg-slate-900 text-white shadow-sm"
                  : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
              )}
            >
              {item.label}
              {active && (
                <span className="absolute inset-x-2 -bottom-[6px] h-[2px] rounded-full bg-slate-900" />
              )}
            </button>
          );
        })}
      </div>

      <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
        {current?.content}
      </div>
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
- SHA: `e4de188641fb`  
- Ukuran: 8 KB
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
    upsert: "/system-settings/upsert",
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

  customers: {
    index: "/customers",
    store: "/customers",
    show: (id: number | string) => `/customers/${id}`,
    update: (id: number | string) => `/customers/${id}`,
    destroy: (id: number | string) => `/customers/${id}`,
  },

  vouchers: {
    index: "/vouchers",
    store: "/vouchers",
    show: (id: number | string) => `/vouchers/${id}`,
    update: (id: number | string) => `/vouchers/${id}`,
    destroy: (id: number | string) => `/vouchers/${id}`,
  },

  promotions: {
    index: "/promotions",
    store: "/promotions",
    show: (id: number | string) => `/promotions/${id}`,
    update: (id: number | string) => `/promotions/${id}`,
    destroy: (id: number | string) => `/promotions/${id}`,
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

  expenseCategories: {
    index: "/expense-categories",
    store: "/expense-categories",
    show: (id: number | string) => `/expense-categories/${id}`,
    update: (id: number | string) => `/expense-categories/${id}`,
    destroy: (id: number | string) => `/expense-categories/${id}`,
  },

  expenses: {
    index: "/expenses",
    store: "/expenses",
    show: (id: number | string) => `/expenses/${id}`,
    update: (id: number | string) => `/expenses/${id}`,
    destroy: (id: number | string) => `/expenses/${id}`,
    submit: (id: number | string) => `/expenses/${id}/submit`,
    approve: (id: number | string) => `/expenses/${id}/approve`,
    reject: (id: number | string) => `/expenses/${id}/reject`,
    attachments: (id: number | string) => `/expenses/${id}/attachments`,
    deleteAttachment: (id: number | string) => `/expense-attachments/${id}`,
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
- SHA: `c1a43d5954b0`  
- Ukuran: 2 KB
<details><summary><strong>Lihat Kode Lengkap</strong></summary>

```ts
import axios from "axios";
import type { ApiErrorResponse } from "@/types/api";

const DEFAULT_MESSAGE = "Terjadi kesalahan. Silakan coba lagi.";

const STATUS_MESSAGE_MAP: Record<number, string> = {
  400: "Permintaan tidak valid.",
  401: "Sesi login sudah berakhir. Silakan login ulang.",
  403: "Anda tidak memiliki akses untuk aksi ini.",
  404: "Data tidak ditemukan.",
  408: "Permintaan timeout. Silakan coba lagi.",
  409: "Terjadi konflik data.",
  422: "Validasi data gagal.",
  429: "Terlalu banyak request. Coba lagi nanti.",
  500: "Server mengalami kendala.",
  502: "Gateway server bermasalah.",
  503: "Layanan sedang tidak tersedia.",
};

const getFirstValidationError = (errors?: ApiErrorResponse["errors"]) => {
  if (!errors) return null;

  const firstEntry = Object.values(errors)[0];

  if (Array.isArray(firstEntry)) {
    return firstEntry[0] ?? null;
  }

  if (typeof firstEntry === "string") {
    return firstEntry;
  }

  return null;
};

export const parseApiError = (error: unknown): string => {
  if (axios.isAxiosError<ApiErrorResponse>(error)) {
    const response = error.response;
    const data = response?.data;

    const validationError = getFirstValidationError(data?.errors);
    if (validationError) return validationError;

    if (data?.message) return data.message;

    if (response?.status && STATUS_MESSAGE_MAP[response.status]) {
      return STATUS_MESSAGE_MAP[response.status];
    }

    if (error.code === "ERR_NETWORK") {
      return "Tidak dapat terhubung ke server. Periksa koneksi internet.";
    }

    return error.message || DEFAULT_MESSAGE;
  }

  if (error instanceof Error) {
    return error.message || DEFAULT_MESSAGE;
  }

  if (typeof error === "string") {
    return error;
  }

  return DEFAULT_MESSAGE;
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

<a id="file-srchooksusedebouncedvaluets"></a>
### src\hooks\useDebouncedValue.ts
- SHA: `cb695d7d9f00`  
- Ukuran: 427 B
<details><summary><strong>Lihat Kode Lengkap</strong></summary>

```ts
import { useEffect, useState } from "react";

export function useDebouncedValue<TValue>(value: TValue, delay = 350): TValue {
  const [debouncedValue, setDebouncedValue] = useState<TValue>(value);

  useEffect(() => {
    const timeoutId = window.setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      window.clearTimeout(timeoutId);
    };
  }, [value, delay]);

  return debouncedValue;
}
```
</details>

<a id="file-srchooksusekeyboardshortcutts"></a>
### src\hooks\useKeyboardShortcut.ts
- SHA: `54fb9be2c56e`  
- Ukuran: 2 KB
<details><summary><strong>Lihat Kode Lengkap</strong></summary>

```ts
import { useEffect } from "react";

type ShortcutKey = string;

interface KeyboardShortcutOptions {
  key: ShortcutKey;
  ctrlKey?: boolean;
  altKey?: boolean;
  shiftKey?: boolean;
  metaKey?: boolean;
  enabled?: boolean;
  allowInEditable?: boolean;
  preventDefault?: boolean;
  onTrigger: () => void;
}

const isEditableElement = (target: EventTarget | null) => {
  if (!(target instanceof HTMLElement)) {
    return false;
  }

  const tagName = target.tagName.toLowerCase();

  return (
    tagName === "input" ||
    tagName === "textarea" ||
    tagName === "select" ||
    target.isContentEditable
  );
};

export function useKeyboardShortcut({
  key,
  ctrlKey = false,
  altKey = false,
  shiftKey = false,
  metaKey = false,
  enabled = true,
  allowInEditable = false,
  preventDefault = true,
  onTrigger,
}: KeyboardShortcutOptions) {
  useEffect(() => {
    if (!enabled) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      const isSameKey = event.key.toLowerCase() === key.toLowerCase();
      const isSameCtrl = event.ctrlKey === ctrlKey;
      const isSameAlt = event.altKey === altKey;
      const isSameShift = event.shiftKey === shiftKey;
      const isSameMeta = event.metaKey === metaKey;

      if (!isSameKey || !isSameCtrl || !isSameAlt || !isSameShift || !isSameMeta) {
        return;
      }

      if (!allowInEditable && isEditableElement(event.target)) {
        return;
      }

      if (preventDefault) {
        event.preventDefault();
      }

      onTrigger();
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [
    key,
    ctrlKey,
    altKey,
    shiftKey,
    metaKey,
    enabled,
    allowInEditable,
    preventDefault,
    onTrigger,
  ]);
}
```
</details>

<a id="file-srchooksuseonlinestatusts"></a>
### src\hooks\useOnlineStatus.ts
- SHA: `2551900c3d84`  
- Ukuran: 682 B
<details><summary><strong>Lihat Kode Lengkap</strong></summary>

```ts
import { useEffect, useState } from "react";

const getInitialOnlineStatus = () => {
  if (typeof navigator === "undefined") {
    return true;
  }

  return navigator.onLine;
};

export function useOnlineStatus() {
  const [online, setOnline] = useState(getInitialOnlineStatus);

  useEffect(() => {
    const handleOnline = () => setOnline(true);
    const handleOffline = () => setOnline(false);

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  return online;
}
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
- SHA: `5795793b6b87`  
- Ukuran: 1 KB
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

export interface CustomerQuery {
  page?: number;
  per_page?: number;
  search?: string;
  is_member?: boolean | "";
}

export interface CustomerPayload {
  code?: string | null;
  name: string;
  phone?: string | null;
  email?: string | null;
  gender?: string | null;
  birth_date?: string | null;
  points?: number;
  total_spent?: number;
  is_member?: boolean;
  notes?: string | null;
  addresses?: CustomerAddressPayload[];
}

export interface CustomerAddressPayload {
  label?: string | null;
  recipient_name?: string | null;
  recipient_phone?: string | null;
  address: string;
  city?: string | null;
  province?: string | null;
  postal_code?: string | null;
  latitude?: string | null;
  longitude?: string | null;
  is_default?: boolean;
}
```
</details>

<a id="file-srctypesdashboardts"></a>
### src\types\dashboard.ts
- SHA: `534d2f20dd18`  
- Ukuran: 2 KB
<details><summary><strong>Lihat Kode Lengkap</strong></summary>

```ts
export interface DashboardFilter {
  outlet_id?: number | "";
  date_from?: string;
  date_until?: string;
  overdue_minutes?: number;
  limit?: number;
}

export interface DashboardSummary {
  today_sales?: number;
  today_revenue?: number;
  month_sales?: number;
  month_revenue?: number;
  today_orders?: number;
  month_orders?: number;
  pending_orders?: number;
  overdue_orders?: number;
  critical_stocks?: number;
  active_cashiers?: number;
  cash_discrepancies?: number;
}

export interface DashboardTopProduct {
  product_id: number | null;
  product_name: string;
  total_qty: number;
  total_sales: number;
}

export interface DashboardBestOutlet {
  outlet_id: number;
  outlet_code: string;
  outlet_name: string;
  total_orders: number;
  total_revenue: number;
}

export interface DashboardCriticalStock {
  outlet_id: number;
  outlet_code: string;
  outlet_name: string;
  raw_material_id: number;
  raw_material_name: string;
  qty_on_hand: number;
  qty_reserved: number;
  minimum_stock: number;
  unit_code: string | null;
}

export interface DashboardOrderRow {
  order_id: number;
  order_number: string;
  queue_number: string | null;
  order_channel: string;
  order_status: string;
  payment_status: string;
  grand_total: number;
  ordered_at: string;
  outlet_id: number;
  outlet_code: string;
  outlet_name: string;
  cashier_name: string | null;
}

export interface DashboardCashDiscrepancy {
  cashier_shift_id: number;
  shift_number: string;
  outlet_id: number;
  outlet_code: string;
  outlet_name: string;
  cashier_name: string;
  opened_at: string;
  closed_at: string | null;
  expected_cash: number;
  closing_cash: number;
  cash_difference: number;
}

export interface DashboardSalesTrendItem {
  date?: string;
  period?: string;
  label?: string;
  total_orders?: number;
  total_revenue?: number;
  revenue?: number;
  grand_total?: number;
}

export interface DashboardOverviewMeta {
  filters: DashboardFilter;
  generated_at: string;
}

export interface DashboardOverview {
  summary: DashboardSummary;
  top_products: DashboardTopProduct[];
  best_outlets: DashboardBestOutlet[];
  critical_stocks: DashboardCriticalStock[];
  pending_orders: DashboardOrderRow[];
  overdue_orders: DashboardOrderRow[];
  cash_discrepancies: DashboardCashDiscrepancy[];
  meta?: DashboardOverviewMeta;
}
```
</details>

<a id="file-srctypesexpensets"></a>
### src\types\expense.ts
- SHA: `82c23c19c422`  
- Ukuran: 3 KB
<details><summary><strong>Lihat Kode Lengkap</strong></summary>

```ts
import type { ApiMeta } from "@/types/api";

export type ExpenseStatus = "draft" | "submitted" | "approved" | "rejected";

export type CashMovementType = "cash_in" | "cash_out" | "opening" | "closing_adjustment";

export interface ExpenseOutlet {
  id: number;
  code?: string | null;
  name: string;
}

export interface ExpenseUser {
  id: number;
  name: string;
  email?: string | null;
  username?: string | null;
}

export interface ExpenseCategory {
  id: number;
  name: string;
  is_active: boolean;
  expenses_count?: number;
  created_at?: string | null;
  updated_at?: string | null;
}

export interface ExpenseAttachment {
  id: number;
  expense_id: number;
  file_path: string;
  file_name?: string | null;
  mime_type?: string | null;
  created_at?: string | null;
  updated_at?: string | null;
}

export interface Expense {
  id: number;
  outlet_id: number;
  expense_category_id: number;
  expense_date: string;
  amount: number | string;
  description?: string | null;
  status: ExpenseStatus;
  created_by?: number | null;
  approved_by?: number | null;
  approved_at?: string | null;
  created_at?: string | null;
  updated_at?: string | null;
  outlet?: ExpenseOutlet | null;
  category?: ExpenseCategory | null;
  creator?: ExpenseUser | null;
  approver?: ExpenseUser | null;
  attachments?: ExpenseAttachment[];
  attachments_count?: number;
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
  status: "open" | "closed";
  notes?: string | null;
  outlet?: ExpenseOutlet | null;
  user?: ExpenseUser | null;
  orders_count?: number;
}

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
  cashier_shift?: CashierShift | null;
  cashierShift?: CashierShift | null;
  creator?: ExpenseUser | null;
}

export interface ExpenseListParams {
  page?: number;
  per_page?: number;
  search?: string;
  outlet_id?: number | "";
  expense_category_id?: number | "";
  status?: ExpenseStatus | "";
  expense_from?: string;
  expense_until?: string;
}

export interface ExpenseCategoryListParams {
  page?: number;
  per_page?: number;
  search?: string;
  is_active?: boolean | "";
}

export interface CashMovementListParams {
  page?: number;
  per_page?: number;
  cashier_shift_id?: number | "";
  outlet_id?: number | "";
  movement_type?: CashMovementType | "";
}

export interface CashierShiftListParams {
  page?: number;
  per_page?: number;
  outlet_id?: number | "";
  user_id?: number | "";
  status?: "open" | "closed" | "";
}

export interface ExpensePayload {
  outlet_id: number;
  expense_category_id: number;
  expense_date: string;
  amount: number;
  description?: string | null;
  status?: ExpenseStatus;
}

export interface ExpenseCategoryPayload {
  name: string;
  is_active: boolean;
}

export interface CashMovementPayload {
  cashier_shift_id: number;
  movement_type: CashMovementType;
  amount: number;
  reason?: string | null;
  notes?: string | null;
}

export interface PaginatedExpenseResult<T> {
  items: T[];
  meta: ApiMeta | null;
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

<a id="file-srctypesnotificationts"></a>
### src\types\notification.ts
- SHA: `741664023f26`  
- Ukuran: 4 KB
<details><summary><strong>Lihat Kode Lengkap</strong></summary>

```ts
import type { Outlet } from "@/types/outlet";
import type { User } from "@/types/user";

export type NotificationType =
  | "low_stock"
  | "shift_not_closed"
  | "promo_expiring"
  | "order_overdue";

export type NotificationSeverity = "info" | "warning" | "danger";

export type NotificationStatus = "unread" | "read" | "resolved";

export type NotificationLogAction =
  | "generated"
  | "skipped"
  | "read"
  | "resolved"
  | "deleted";

export type NotificationLogStatus = "success" | "failed" | "skipped";

export type AlertRuleSeverity = "low" | "medium" | "high" | "critical";

export type AlertRuleThresholdUnit = "qty" | "minutes" | "days";

export interface NotificationData {
  alert_rule_id?: number;
  raw_material_id?: number;
  raw_material_name?: string;
  qty_on_hand?: number | string;
  threshold?: number | string;
  unit?: string;
  order_number?: string;
  queue_number?: string | null;
  order_status?: string;
  ordered_at?: string;
  threshold_minutes?: number;
  voucher_code?: string;
  voucher_name?: string;
  ends_at?: string;
  [key: string]: unknown;
}

export interface NotificationLog {
  id: number;
  notification_id?: number | null;
  alert_rule_id?: number | null;
  outlet_id?: number | null;
  user_id?: number | null;
  action: NotificationLogAction;
  status: NotificationLogStatus;
  channel?: string | null;
  message?: string | null;
  payload?: Record<string, unknown> | null;
  logged_at?: string | null;
  created_at?: string | null;
  updated_at?: string | null;
  alert_rule?: AlertRule | null;
  outlet?: Outlet | null;
  user?: User | null;
}

export interface Notification {
  id: number;
  outlet_id?: number | null;
  user_id?: number | null;
  type: NotificationType;
  severity: NotificationSeverity;
  status: NotificationStatus;
  title: string;
  message: string;
  source_type?: string | null;
  source_id?: number | null;
  data?: NotificationData | null;
  read_at?: string | null;
  resolved_at?: string | null;
  created_at?: string | null;
  updated_at?: string | null;
  logs_count?: number;
  outlet?: Outlet | null;
  user?: User | null;
  logs?: NotificationLog[];
}

export interface NotificationQuery {
  page?: number;
  per_page?: number;
  outlet_id?: number | "";
  user_id?: number | "";
  type?: NotificationType | "";
  severity?: NotificationSeverity | "";
  status?: NotificationStatus | "";
}

export interface ScanAlertPayload {
  outlet_id?: number | null;
  alert_type?: NotificationType | null;
}

export interface ScanAlertResult {
  generated_count?: number;
  skipped_count?: number;
  failed_count?: number;
  notifications?: Notification[];
  logs?: NotificationLog[];
  [key: string]: unknown;
}

export interface AlertRule {
  id: number;
  outlet_id?: number | null;
  name: string;
  alert_type: NotificationType;
  severity: AlertRuleSeverity;
  threshold_minutes?: number | null;
  days_before?: number | null;
  threshold_value?: number | string | null;
  threshold_unit?: AlertRuleThresholdUnit | null;
  recipient_roles?: string[] | null;
  channels?: string[] | null;
  metadata?: Record<string, unknown> | null;
  is_active: boolean;
  created_at?: string | null;
  updated_at?: string | null;
  outlet?: Outlet | null;
}

export interface AlertRuleQuery {
  page?: number;
  per_page?: number;
  outlet_id?: number | "";
  alert_type?: NotificationType | "";
  severity?: AlertRuleSeverity | "";
  is_active?: boolean | "";
}

export interface AlertRulePayload {
  outlet_id?: number | null;
  name: string;
  alert_type: NotificationType;
  severity: AlertRuleSeverity;
  threshold_minutes?: number | null;
  days_before?: number | null;
  threshold_value?: number | null;
  threshold_unit?: AlertRuleThresholdUnit | null;
  recipient_roles?: string[];
  channels?: string[];
  metadata?: Record<string, unknown> | null;
  is_active?: boolean;
}

export interface ActivityLog {
  id: number;
  user_id?: number | null;
  outlet_id?: number | null;
  action: string;
  module: string;
  reference_type?: string | null;
  reference_id?: number | null;
  description?: string | null;
  ip_address?: string | null;
  user_agent?: string | null;
  metadata?: Record<string, unknown> | null;
  created_at?: string | null;
  updated_at?: string | null;
  user?: User | null;
  outlet?: Outlet | null;
}

export interface ActivityLogQuery {
  page?: number;
  per_page?: number;
  search?: string;
  user_id?: number | "";
  outlet_id?: number | "";
  action?: string;
  module?: string;
  reference_type?: string;
  reference_id?: number | "";
  created_from?: string;
  created_until?: string;
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

<a id="file-srctypespromots"></a>
### src\types\promo.ts
- SHA: `9ca701801d74`  
- Ukuran: 2 KB
<details><summary><strong>Lihat Kode Lengkap</strong></summary>

```ts
export type VoucherDiscountType = "percent" | "fixed";
export type VoucherAppliesTo = "all" | "specific_products" | "specific_categories";
export type PromotionType = "discount" | "bundle" | "buy_x_get_y";
export type PromotionRuleType = "min_total" | "product" | "category" | "outlet" | "channel" | "time";

export interface Voucher {
  id: number;
  code: string;
  name: string;
  description: string | null;
  discount_type: VoucherDiscountType;
  discount_value: number | string;
  max_discount: number | string | null;
  min_order_total: number | string;
  quota: number | null;
  used_count: number;
  starts_at: string | null;
  ends_at: string | null;
  is_active: boolean;
  applies_to: VoucherAppliesTo;
  created_at?: string | null;
  updated_at?: string | null;
}

export interface VoucherQuery {
  page?: number;
  per_page?: number;
  search?: string;
  discount_type?: VoucherDiscountType | "";
  applies_to?: VoucherAppliesTo | "";
  is_active?: boolean | "";
}

export interface VoucherPayload {
  code: string;
  name: string;
  description?: string | null;
  discount_type: VoucherDiscountType;
  discount_value: number;
  max_discount?: number | null;
  min_order_total?: number;
  quota?: number | null;
  used_count?: number;
  starts_at?: string | null;
  ends_at?: string | null;
  is_active?: boolean;
  applies_to: VoucherAppliesTo;
}

export interface PromotionRule {
  id: number;
  promotion_id: number;
  rule_type: PromotionRuleType;
  operator: string | null;
  value: string | null;
  created_at?: string | null;
  updated_at?: string | null;
}

export interface Promotion {
  id: number;
  name: string;
  description: string | null;
  promotion_type: PromotionType;
  starts_at: string | null;
  ends_at: string | null;
  priority: number;
  is_active: boolean;
  rules?: PromotionRule[];
  created_at?: string | null;
  updated_at?: string | null;
}

export interface PromotionQuery {
  page?: number;
  per_page?: number;
  search?: string;
  promotion_type?: PromotionType | "";
  is_active?: boolean | "";
}

export interface PromotionPayload {
  name: string;
  description?: string | null;
  promotion_type: PromotionType;
  starts_at?: string | null;
  ends_at?: string | null;
  priority?: number;
  is_active?: boolean;
  rules?: PromotionRulePayload[];
}

export interface PromotionRulePayload {
  rule_type: PromotionRuleType;
  operator?: string | null;
  value?: string | null;
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

<a id="file-srctypesreportts"></a>
### src\types\report.ts
- SHA: `d834978a7220`  
- Ukuran: 1 KB
<details><summary><strong>Lihat Kode Lengkap</strong></summary>

```ts
export type ReportKey =
  | "sales-summary"
  | "sales-trend"
  | "sales-by-outlet"
  | "sales-by-cashier"
  | "top-products"
  | "payment-summary"
  | "promo-usage"
  | "void-refund"
  | "low-stocks"
  | "purchase-materials"
  | "expenses"
  | "shift-summary"
  | "order-details";

export type ReportExportFormat = "csv" | "xls" | "pdf";

export type ReportGroupBy = "day" | "week" | "month";

export interface ReportFilterParams {
  date_from?: string;
  date_until?: string;
  outlet_id?: number;
  status?: string;
  search?: string;
  group_by?: ReportGroupBy;
  limit?: number;
  per_page?: number;
}

export interface ReportExportParams extends ReportFilterParams {
  format: ReportExportFormat;
}

export type ReportPrimitiveValue = string | number | boolean | null;

export type ReportRow = Record<string, ReportPrimitiveValue>;

export type ReportData = ReportRow[] | ReportRow;

export interface ReportApiResponse {
  message: string;
  data: ReportData;
}

export interface ReportDefinition {
  key: ReportKey;
  label: string;
  description: string;
  category: "sales" | "cash" | "inventory" | "purchase" | "expense";
  endpoint: string;
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

<a id="file-srctypesstock-movementts"></a>
### src\types\stock-movement.ts
- SHA: `ca171cf3ebc2`  
- Ukuran: 3 KB
<details><summary><strong>Lihat Kode Lengkap</strong></summary>

```ts
import type { Outlet } from "@/types/outlet";
import type { RawMaterial, Unit } from "@/types/inventory";
import type { User } from "@/types/user";

export type StockAdjustmentReason =
  | "damaged"
  | "expired"
  | "lost"
  | "correction"
  | "waste"
  | "other";

export type StockTransferStatus = "draft" | "sent" | "received" | "cancelled";

export type StockOpnameStatus = "draft" | "posted" | "cancelled";

export type StockMovementType =
  | "purchase"
  | "sale_consumption"
  | "adjustment"
  | "transfer_out"
  | "transfer_in"
  | "opname"
  | "waste";

export interface StockAdjustmentItem {
  id: number;
  stock_adjustment_id: number;
  raw_material_id: number;
  qty_difference: number | string;
  unit_id: number;
  notes?: string | null;
  raw_material?: RawMaterial | null;
  unit?: Unit | null;
}

export interface StockAdjustment {
  id: number;
  outlet_id: number;
  adjustment_number: string;
  adjustment_date: string;
  reason: StockAdjustmentReason;
  notes?: string | null;
  created_by?: number | null;
  approved_by?: number | null;
  approved_at?: string | null;
  outlet?: Outlet | null;
  creator?: User | null;
  approver?: User | null;
  items?: StockAdjustmentItem[];
}

export interface StockTransferItem {
  id: number;
  stock_transfer_id: number;
  raw_material_id: number;
  qty_sent: number | string;
  qty_received?: number | string | null;
  unit_id: number;
  notes?: string | null;
  raw_material?: RawMaterial | null;
  unit?: Unit | null;
}

export interface StockTransfer {
  id: number;
  source_outlet_id: number;
  target_outlet_id: number;
  transfer_number: string;
  status: StockTransferStatus;
  transfer_date: string;
  sent_at?: string | null;
  received_at?: string | null;
  notes?: string | null;
  created_by?: number | null;
  received_by?: number | null;
  source_outlet?: Outlet | null;
  target_outlet?: Outlet | null;
  creator?: User | null;
  receiver?: User | null;
  items?: StockTransferItem[];
}

export interface StockOpnameItem {
  id: number;
  stock_opname_id: number;
  raw_material_id: number;
  system_qty: number | string;
  actual_qty: number | string;
  difference_qty: number | string;
  unit_id: number;
  notes?: string | null;
  raw_material?: RawMaterial | null;
  unit?: Unit | null;
}

export interface StockOpname {
  id: number;
  outlet_id: number;
  opname_number: string;
  opname_date: string;
  status: StockOpnameStatus;
  notes?: string | null;
  created_by?: number | null;
  posted_by?: number | null;
  posted_at?: string | null;
  outlet?: Outlet | null;
  creator?: User | null;
  poster?: User | null;
  items?: StockOpnameItem[];
}

export interface StockMovementItem {
  id: number;
  stock_movement_id: number;
  raw_material_id: number;
  qty_in: number | string;
  qty_out: number | string;
  unit_cost: number | string;
  notes?: string | null;
  raw_material?: RawMaterial | null;
}

export interface StockMovement {
  id: number;
  outlet_id: number;
  movement_type: StockMovementType;
  reference_type?: string | null;
  reference_id?: number | null;
  movement_date: string;
  notes?: string | null;
  created_by?: number | null;
  outlet?: Outlet | null;
  creator?: User | null;
  items?: StockMovementItem[];
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

<a id="file-srcutilserror-messagets"></a>
### src\utils\error-message.ts
- SHA: `afcae99c85d5`  
- Ukuran: 2 KB
<details><summary><strong>Lihat Kode Lengkap</strong></summary>

```ts
import axios from "axios";
import type { ApiErrorResponse } from "@/types/api";

const defaultMessage = "Terjadi kesalahan. Silakan coba lagi.";

const statusMessageMap: Record<number, string> = {
  400: "Permintaan tidak valid.",
  401: "Sesi login sudah berakhir. Silakan login ulang.",
  403: "Anda tidak memiliki akses untuk menjalankan aksi ini.",
  404: "Data tidak ditemukan.",
  408: "Request terlalu lama diproses. Silakan coba lagi.",
  409: "Data konflik dengan kondisi terbaru.",
  422: "Validasi data gagal.",
  429: "Terlalu banyak request. Silakan coba beberapa saat lagi.",
  500: "Server mengalami kendala.",
  502: "Gateway server bermasalah.",
  503: "Layanan sedang tidak tersedia.",
};

const getFirstValidationError = (errors: ApiErrorResponse["errors"]) => {
  if (!errors) {
    return null;
  }

  const firstEntry = Object.values(errors)[0];

  if (Array.isArray(firstEntry)) {
    return firstEntry[0] ?? null;
  }

  if (typeof firstEntry === "string") {
    return firstEntry;
  }

  return null;
};

export function getAppErrorMessage(error: unknown): string {
  if (axios.isAxiosError<ApiErrorResponse>(error)) {
    const response = error.response;
    const data = response?.data;

    const validationError = getFirstValidationError(data?.errors);

    if (validationError) {
      return validationError;
    }

    if (data?.message) {
      return data.message;
    }

    if (response?.status && statusMessageMap[response.status]) {
      return statusMessageMap[response.status];
    }

    if (error.code === "ERR_NETWORK") {
      return "Tidak dapat terhubung ke server. Periksa koneksi atau konfigurasi API.";
    }

    return error.message || defaultMessage;
  }

  if (error instanceof Error) {
    return error.message || defaultMessage;
  }

  if (typeof error === "string") {
    return error;
  }

  return defaultMessage;
}
```
</details>

<a id="file-srcutilsperformancets"></a>
### src\utils\performance.ts
- SHA: `8b05904086ef`  
- Ukuran: 1 KB
<details><summary><strong>Lihat Kode Lengkap</strong></summary>

```ts
export interface FrontendPerformanceSnapshot {
  url: string;
  userAgent: string;
  navigationType: string;
  domContentLoadedMs: number;
  loadCompleteMs: number;
  transferSizeKb: number;
  recordedAt: string;
}

const roundNumber = (value: number) => Math.round(value * 100) / 100;

export function getFrontendPerformanceSnapshot(): FrontendPerformanceSnapshot | null {
  if (typeof performance === "undefined") {
    return null;
  }

  const navigationEntry = performance.getEntriesByType("navigation")[0];

  if (!(navigationEntry instanceof PerformanceNavigationTiming)) {
    return null;
  }

  return {
    url: window.location.href,
    userAgent: window.navigator.userAgent,
    navigationType: navigationEntry.type,
    domContentLoadedMs: roundNumber(
      navigationEntry.domContentLoadedEventEnd - navigationEntry.startTime
    ),
    loadCompleteMs: roundNumber(navigationEntry.loadEventEnd - navigationEntry.startTime),
    transferSizeKb: roundNumber(navigationEntry.transferSize / 1024),
    recordedAt: new Date().toISOString(),
  };
}

export function logFrontendPerformanceSnapshot() {
  const snapshot = getFrontendPerformanceSnapshot();

  if (!snapshot) {
    return;
  }

  console.table(snapshot);
}
```
</details>

<a id="file-srcutilsprintts"></a>
### src\utils\print.ts
- SHA: `073a21bd0b75`  
- Ukuran: 2 KB
<details><summary><strong>Lihat Kode Lengkap</strong></summary>

```ts
export interface PrintHtmlOptions {
  title?: string;
  html: string;
  width?: number;
  height?: number;
}

const buildPrintableDocument = (title: string, html: string) => {
  return `
<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${title}</title>
</head>
<body>
  ${html}
</body>
</html>
`;
};

export function printHtml({ title = "Print", html, width = 420, height = 640 }: PrintHtmlOptions) {
  const popup = window.open("", title, `width=${width},height=${height}`);

  if (!popup) {
    const iframe = document.createElement("iframe");

    iframe.style.position = "fixed";
    iframe.style.right = "0";
    iframe.style.bottom = "0";
    iframe.style.width = "0";
    iframe.style.height = "0";
    iframe.style.border = "0";

    document.body.appendChild(iframe);

    const iframeDocument = iframe.contentWindow?.document;

    if (!iframeDocument) {
      iframe.remove();
      return;
    }

    iframeDocument.open();
    iframeDocument.write(buildPrintableDocument(title, html));
    iframeDocument.close();

    iframe.onload = () => {
      iframe.contentWindow?.focus();
      iframe.contentWindow?.print();
      window.setTimeout(() => iframe.remove(), 500);
    };

    return;
  }

  popup.document.open();
  popup.document.write(buildPrintableDocument(title, html));
  popup.document.close();

  popup.onload = () => {
    popup.focus();
    popup.print();
  };
}

export function printCurrentPage() {
  window.print();
}
```
</details>

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
- SHA: `388f3993ac0f`  
- Ukuran: 2 KB
<details><summary><strong>Lihat Kode Lengkap</strong></summary>

```css
@import "tailwindcss";

:root {
  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  --color-bg: #f8fafc;
  --color-bg-white: #ffffff;
  --color-text: #0f172a;
  --color-border: #e2e8f0;
  --color-muted: #64748b;

  --brand-brick: #c2410c;
  --brand-brick-dark: #9a3412;
  --brand-brick-soft: #fff7ed;
  --brand-yellow: #facc15;
  --brand-yellow-soft: #fef9c3;

  --radius-sm: 0.375rem;
  --radius-md: 0.5rem;
  --radius-lg: 0.75rem;

  --shadow-sm: 0 1px 2px 0 rgb(0 0 0 / 0.05);
  --shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.1);
}

html {
  scroll-behavior: smooth;
}

body {
  min-width: 320px;
  background: var(--color-bg);
  color: var(--color-text);
  font-size: 0.875rem;
  line-height: 1.5;
}

* {
  border-color: var(--color-border);
}

button,
input,
select,
textarea {
  font: inherit;
}

button {
  cursor: pointer;
}

button:disabled {
  cursor: not-allowed;
  opacity: 0.6;
}

a {
  text-decoration: none;
  color: inherit;
}

img,
svg {
  display: block;
  max-width: 100%;
}

button:focus-visible,
a:focus-visible,
input:focus-visible,
select:focus-visible,
textarea:focus-visible {
  outline: 2px solid var(--color-text);
  outline-offset: 2px;
}

::selection {
  background: #0f172a;
  color: #ffffff;
}

::-webkit-scrollbar {
  width: 6px;
  height: 6px;
}

::-webkit-scrollbar-thumb {
  background-color: #cbd5f5;
  border-radius: 9999px;
}

::-webkit-scrollbar-track {
  background: transparent;
}

@media (prefers-reduced-motion: reduce) {

  *,
  *::before,
  *::after {
    scroll-behavior: auto !important;
    transition-duration: 0.01ms !important;
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
  }
}

@media print {
  body {
    background: var(--color-bg-white);
  }

  .no-print {
    display: none !important;
  }

  .print-only {
    display: block !important;
  }

  .print-page {
    page-break-after: always;
  }
}
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
