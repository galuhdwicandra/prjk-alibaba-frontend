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