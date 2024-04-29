import { Roles } from "./Roles";

export interface IUser {
  id: number;
  login: string;
  password: string;
  role: Roles;
}
