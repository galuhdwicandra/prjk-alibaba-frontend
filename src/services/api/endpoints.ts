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
    upsert: "/system-settings",
  },
} as const;