import { AppShell } from "@/components/navigation/AppShell";
import { adminNavigation } from "@/components/navigation/navigation.config";

export function AdminLayout() {
  return (
    <AppShell
      appTitle="Admin Panel"
      navItems={adminNavigation}
      showOutletSwitcher
    />
  );
}