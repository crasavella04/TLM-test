import { useNavigate } from "@tanstack/react-router";
import { MouseEvent, useState } from "react";
import Button from "../UI/Button/Button";
import Input from "../UI/Input/Input";
import { checkEmail } from "../helpers/checkEmail";
import { checkPassword } from "../helpers/checkPassword";
import { AuthService } from "../services/AuthService";

interface IError {
  field: "login" | "password" | null;
  message: string;
}

const LoginForm = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<IError | null>(null);
  const [isLoading, setLoading] = useState(false);
  const router = useNavigate();

  const auth = async (e: MouseEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);
    try {
      if (!checkEmail(login))
        return setError({ field: "login", message: "Неккоректнный логин" });

      const isValidPassword = checkPassword(password);
      if (isValidPassword !== true)
        return setError({ field: "password", message: isValidPassword });

      const res = await AuthService.login({ login, password });

      localStorage.setItem("userId", res.toString());
      router({ to: "/" });
    } catch (e) {
      if (e instanceof Error)
        return setError({ field: null, message: e.message });

      setError({ field: null, message: "Неизвестная ошибка" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className="loginForm">
      <h2>Вход</h2>
      <Input
        label="Логин"
        value={login}
        onChange={(e) => setLogin(e.target.value)}
        errorMessage={error?.field === "login" ? error.message : ""}
        color={error?.field === "login" ? "error" : "main"}
        style={{ width: "250px", maxWidth: "min-content" }}
      />
      <Input
        label="Пароль"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        errorMessage={error?.field !== "login" ? error?.message : ""}
        color={error?.field === "password" ? "error" : "main"}
        style={{ width: "250px", maxWidth: "min-content" }}
      />
      <Button isLoading={isLoading} onClick={auth}>
        Войти
      </Button>
    </form>
  );
};

export default LoginForm;
