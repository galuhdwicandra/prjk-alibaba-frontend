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
    print: (orderId: number | string) => `/orders/${orderId}/receipt/print`,
    pdf: (orderId: number | string) => `/orders/${orderId}/receipt/pdf`,
    reprint: (orderId: number | string) => `/orders/${orderId}/receipt/reprint`,
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