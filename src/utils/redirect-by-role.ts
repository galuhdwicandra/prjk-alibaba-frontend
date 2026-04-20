import type { Role } from "@/types/role";

export const redirectByRole = (roles: Role[] = []): string => {
  const roleNames = roles.map((role) => role.name);

  if (roleNames.includes("superadmin") || roleNames.includes("admin_pusat") || roleNames.includes("admin_outlet")) {
    return "/admin";
  }

  if (roleNames.includes("kasir")) {
    return "/pos";
  }

  if (roleNames.includes("dapur")) {
    return "/kitchen";
  }

  if (roleNames.includes("owner")) {
    return "/owner";
  }

  return "/unauthorized";
};