// src/services/api/endpoints.ts
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
} as const;