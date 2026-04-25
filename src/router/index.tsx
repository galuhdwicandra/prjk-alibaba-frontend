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