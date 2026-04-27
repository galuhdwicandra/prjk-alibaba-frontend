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