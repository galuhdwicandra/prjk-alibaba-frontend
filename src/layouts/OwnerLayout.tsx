import { AppShell } from "@/components/navigation/AppShell";
import { ownerNavigation } from "@/components/navigation/navigation.config";

export function OwnerLayout() {
  return <AppShell appTitle="Owner Dashboard" navItems={ownerNavigation} />;
}