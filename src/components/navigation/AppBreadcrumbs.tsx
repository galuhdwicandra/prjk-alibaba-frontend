import { Link, useLocation } from "react-router-dom";

const LABEL_MAP: Record<string, string> = {
  admin: "Admin",
  users: "Users",
  roles: "Roles",
  permissions: "Permissions",
  outlets: "Outlets",
  "system-settings": "System Settings",
  pos: "POS",
  orders: "Orders",
  shifts: "Shifts",
  kitchen: "Kitchen",
  tickets: "Tickets",
  ready: "Ready Queue",
  owner: "Owner",
  overview: "Overview",
  reports: "Reports",
};

export function AppBreadcrumbs({ dark = false }: { dark?: boolean }) {
  const location = useLocation();

  const segments = location.pathname.split("/").filter(Boolean);
  const crumbs = segments.map((segment, index) => {
    const href = `/${segments.slice(0, index + 1).join("/")}`;

    return {
      href,
      label: LABEL_MAP[segment] ?? segment,
      isLast: index === segments.length - 1,
    };
  });

  return (
    <nav
      aria-label="Breadcrumb"
      className={[
        "flex min-w-0 flex-wrap items-center gap-1.5 text-xs sm:text-sm",
        dark ? "text-slate-400" : "text-slate-500",
      ].join(" ")}
    >
      <Link
        to="/"
        className={[
          "rounded-md px-1.5 py-1 font-medium transition",
          dark
            ? "hover:bg-slate-900 hover:text-white"
            : "hover:bg-slate-100 hover:text-slate-900",
        ].join(" ")}
      >
        Home
      </Link>

      {crumbs.map((item) => (
        <span key={item.href} className="flex min-w-0 items-center gap-1.5">
          <span aria-hidden="true" className={dark ? "text-slate-600" : "text-slate-300"}>
            /
          </span>

          {item.isLast ? (
            <span
              aria-current="page"
              className={[
                "max-w-[180px] truncate rounded-md px-1.5 py-1 font-semibold sm:max-w-none",
                dark ? "text-white" : "text-slate-900",
              ].join(" ")}
              title={item.label}
            >
              {item.label}
            </span>
          ) : (
            <Link
              to={item.href}
              className={[
                "max-w-[160px] truncate rounded-md px-1.5 py-1 font-medium transition sm:max-w-none",
                dark
                  ? "hover:bg-slate-900 hover:text-white"
                  : "hover:bg-slate-100 hover:text-slate-900",
              ].join(" ")}
              title={item.label}
            >
              {item.label}
            </Link>
          )}
        </span>
      ))}
    </nav>
  );
}