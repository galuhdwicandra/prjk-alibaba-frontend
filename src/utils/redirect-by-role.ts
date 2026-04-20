export const redirectByRole = (roles: string[] = []): string => {
  if (
    roles.includes("superadmin") ||
    roles.includes("admin_pusat") ||
    roles.includes("admin_outlet")
  ) {
    return "/admin";
  }

  if (roles.includes("kasir")) {
    return "/pos";
  }

  if (roles.includes("dapur")) {
    return "/kitchen";
  }

  if (roles.includes("owner")) {
    return "/owner";
  }

  return "/unauthorized";
};