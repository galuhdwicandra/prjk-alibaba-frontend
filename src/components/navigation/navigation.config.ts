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
  { label: "New Order", to: "/pos/orders", permission: "products.view" },
  { label: "Shift", to: "/pos/shifts" },
];

export const kitchenNavigation: NavigationItem[] = [
  { label: "Kitchen Home", to: "/kitchen", permission: "kitchen_tickets.view" },
  { label: "Tickets", to: "/kitchen/tickets", permission: "kitchen_tickets.view" },
  { label: "Ready Queue", to: "/kitchen/ready", permission: "kitchen_tickets.view" },
];

export const ownerNavigation: NavigationItem[] = [
  { label: "Owner Home", to: "/owner" },
  { label: "Overview", to: "/owner/overview" },
  { label: "Reports", to: "/owner/reports" },
];