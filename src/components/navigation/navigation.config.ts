export interface NavigationItem {
  label: string;
  to: string;
  permission?: string;
  section?: string;
}

export const adminNavigation: NavigationItem[] = [
  { label: "Dashboard", to: "/admin", section: "Utama" },
  { label: "POS", to: "/pos", section: "Utama" },
  { label: "Reports", to: "/admin/reports", permission: "reports.view", section: "Utama" },

  { label: "Products", to: "/admin/products", permission: "products.view", section: "Katalog" },
  { label: "Product Categories", to: "/admin/product-categories", permission: "product_categories.view", section: "Katalog" },
  { label: "Product Variants", to: "/admin/product-variants", permission: "products.view", section: "Katalog" },
  { label: "Product Modifiers", to: "/admin/product-modifiers", permission: "products.view", section: "Katalog" },
  { label: "Product Bundles", to: "/admin/product-bundles", permission: "products.view", section: "Katalog" },

  { label: "Customers", to: "/admin/customers", permission: "customers.view", section: "Penjualan" },
  { label: "Vouchers", to: "/admin/vouchers", permission: "vouchers.view", section: "Penjualan" },
  { label: "Promotions", to: "/admin/promotions", permission: "promotions.view", section: "Penjualan" },
  { label: "Cash Movements", to: "/admin/cash-movements", permission: "cash_movements.view", section: "Penjualan" },

  { label: "Units", to: "/admin/units", permission: "units.view", section: "Inventori" },
  { label: "Raw Material Categories", to: "/admin/raw-material-categories", permission: "raw_material_categories.view", section: "Inventori" },
  { label: "Raw Materials", to: "/admin/raw-materials", permission: "raw_materials.view", section: "Inventori" },
  { label: "Outlet Material Stocks", to: "/admin/outlet-material-stocks", permission: "outlet_material_stocks.view", section: "Inventori" },
  { label: "Product BOM", to: "/admin/product-boms", permission: "product_boms.view", section: "Inventori" },
  { label: "Stock Movements", to: "/admin/stock-movements", permission: "stock_movements.view", section: "Inventori" },

  { label: "Suppliers", to: "/admin/suppliers", permission: "suppliers.view", section: "Pembelian" },
  { label: "Purchase Orders", to: "/admin/purchase-orders", permission: "purchase_orders.view", section: "Pembelian" },
  { label: "Goods Receipts", to: "/admin/goods-receipts", permission: "goods_receipts.view", section: "Pembelian" },

  { label: "Expense Categories", to: "/admin/expense-categories", permission: "expense_categories.view", section: "Operasional" },
  { label: "Expenses", to: "/admin/expenses", permission: "expenses.view", section: "Operasional" },
  { label: "Notifications", to: "/admin/notifications", permission: "notifications.view", section: "Operasional" },
  { label: "Critical Alerts", to: "/admin/critical-alerts", permission: "notifications.view", section: "Operasional" },
  { label: "Activity Logs", to: "/admin/activity-logs", permission: "activity_logs.view", section: "Operasional" },

  { label: "Outlets", to: "/admin/outlets", permission: "outlets.view", section: "Pengaturan" },
  { label: "Users", to: "/admin/users", permission: "users.view", section: "Pengaturan" },
  { label: "Roles", to: "/admin/roles", permission: "roles.view", section: "Pengaturan" },
  { label: "Permissions", to: "/admin/permissions", permission: "permissions.view", section: "Pengaturan" },
  { label: "System Settings", to: "/admin/system-settings", permission: "system_settings.view", section: "Pengaturan" },
];

export const posNavigation: NavigationItem[] = [
  { label: "POS Home", to: "/pos", section: "Kasir" },
  { label: "Checkout", to: "/pos/orders", permission: "orders.create", section: "Kasir" },
  { label: "Riwayat Pesanan", to: "/pos/order-history", permission: "orders.view", section: "Kasir" },
  { label: "Shifts", to: "/pos/shifts", permission: "cashier_shifts.view", section: "Kasir" },
];

export const kitchenNavigation: NavigationItem[] = [
  { label: "Kitchen Tickets", to: "/kitchen/tickets", permission: "kitchen_tickets.view", section: "Dapur" },
  { label: "Ready Queue", to: "/kitchen/ready", permission: "kitchen_tickets.view", section: "Dapur" },
];

export const ownerNavigation: NavigationItem[] = [
  { label: "Overview", to: "/owner/overview", permission: "reports.view", section: "Owner" },
  { label: "Reports", to: "/owner/reports", permission: "reports.view", section: "Owner" },
];