import type { UserOutletAccess } from "./outlet";

export interface User {
  id: number;
  name: string;
  email: string | null;
  phone: string | null;
  username: string | null;
  is_active: boolean;
  user_type: "superadmin" | "staff" | "owner_viewer" | null;
  last_login_at: string | null;
  created_at: string;
  updated_at: string;
  roles?: string[];
  permissions?: string[];
  user_outlet_accesses?: UserOutletAccess[];
}