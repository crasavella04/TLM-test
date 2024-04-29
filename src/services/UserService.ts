import { users } from "../globals/users";

export class UserService {
  static getUserById(id: number) {
    const user = users.find((el) => el.id === id);

    return user;
  }
}
