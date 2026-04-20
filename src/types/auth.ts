import type { User } from "./user";

export interface LoginPayload {
  login: string;
  password: string;
  device_name?: string;
}

export type LoginResult = User;
export type MeResult = User;