import type { User } from "./user";

export interface LoginPayload {
  login: string;
  password: string;
}

export interface LoginResult {
  token?: string;
  user: User;
}

export interface MeResult {
  user: User;
}