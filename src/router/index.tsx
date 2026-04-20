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