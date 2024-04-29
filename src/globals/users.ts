import { IUser } from "../types/IUser";
import { Roles } from "../types/Roles";

export const users: IUser[] = [
  {
    id: 1,
    login: "a@mail.ru",
    password: "Password1!",
    role: Roles.USER,
  },
  {
    id: 2,
    login: "b@mail.ru",
    password: "Password1!",
    role: Roles.USER,
  },
  {
    id: 3,
    login: "c@mail.ru",
    password: "Password1!",
    role: Roles.ADMIN,
  },
];
