export interface CustomerAddress {
  id: number;
  label: string | null;
  recipient_name: string | null;
  recipient_phone: string | null;
  address: string;
  city: string | null;
  province: string | null;
  postal_code: string | null;
  latitude: string | null;
  longitude: string | null;
  is_default: boolean;
  created_at: string;
  updated_at: string;
}

export interface Customer {
  id: number;
  code: string | null;
  name: string;
  phone: string | null;
  email: string | null;
  gender: string | null;
  birth_date: string | null;
  points: number;
  total_spent: string | number;
  is_member: boolean;
  notes: string | null;
  addresses?: CustomerAddress[];
  created_at: string;
  updated_at: string;
  deleted_at?: string | null;
}