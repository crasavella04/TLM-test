import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import Button from "../../UI/Button/Button";
import { useSignOut } from "../../hooks/useSignOut";
import { UserService } from "../../services/UserService";
import { IUser } from "../../types/IUser";
import { Roles } from "../../types/Roles";

export const Route = createFileRoute("/_root/")({
  component: () => <Page />,
});

const Page = () => {
  const [data, setData] = useState<IUser | null>(null);
  const navigate = useNavigate();
  const signOut = useSignOut();

  useEffect(() => {
    const isAuth = () => {
      const id = localStorage.getItem("userId");
      const user = UserService.getUserById(Number(id));

      if (!user) return navigate({ to: "/login" });

      setData(user);
    };

    isAuth();
  }, [navigate]);

  if (!data) return <div>Loading...</div>;

  return (
    <div className="main">
      <h1>Профиль</h1>
      <div>Логин: {data.login}</div>
      <div>Роль: {data.role}</div>
      {data.role === Roles.ADMIN && (
        <Button onClick={() => navigate({ to: "/admin" })}>Админ-панель</Button>
      )}
      <Button color="error" onClick={signOut}>
        Выйти
      </Button>
    </div>
  );
};
