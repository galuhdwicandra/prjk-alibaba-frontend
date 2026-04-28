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
import PosHomePage from "@/modules/pos/pages/PosHomePage";
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
import PosOrderHistoryPage from "@/modules/pos/pages/PosOrderHistoryPage";

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
          { index: true, element: <PosHomePage /> },
          { path: "orders", element: <PosOrdersPage /> },
          { path: "order-history", element: <PosOrderHistoryPage /> },
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