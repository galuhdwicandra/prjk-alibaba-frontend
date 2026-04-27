import { AppShell } from "@/components/navigation/AppShell";
import { kitchenNavigation } from "@/components/navigation/navigation.config";

export function KitchenLayout() {
  return (
    <AppShell
      appTitle="Kitchen Screen"
      navItems={kitchenNavigation}
      dark
      showOutletSwitcher={false}
    />
  );
}