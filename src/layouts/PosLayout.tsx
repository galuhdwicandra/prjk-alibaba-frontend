import { AppShell } from "@/components/navigation/AppShell";
import { posNavigation } from "@/components/navigation/navigation.config";

export function PosLayout() {
  return <AppShell appTitle="POS App" navItems={posNavigation} />;
}