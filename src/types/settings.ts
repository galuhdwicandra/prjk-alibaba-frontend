export interface SystemSetting {
  id: number;
  key: string;
  value: string | null;
  type: "string" | "number" | "boolean" | "json";
  created_at: string;
  updated_at: string;
}