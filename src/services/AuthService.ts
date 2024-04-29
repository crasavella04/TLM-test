import { users } from "../globals/users";

interface ILogin {
  login: string;
  password: string;
}

export class AuthService {
  static async login(data: ILogin): Promise<number> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const user = users.find((el) => el.login === data.login);
        if (!user) return reject(new Error("Пользователь не найден"));

        if (user.password !== data.password)
          return reject(new Error("Неверный пароль"));

        resolve(user.id);
      }, 500);
    });
  }
}
