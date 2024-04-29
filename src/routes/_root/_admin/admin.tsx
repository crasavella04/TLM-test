import { createFileRoute, useNavigate } from "@tanstack/react-router";
import Button from "../../../UI/Button/Button";
import { useSignOut } from "../../../hooks/useSignOut";

export const Route = createFileRoute("/_root/_admin/admin")({
  component: () => <Page />,
});

const Page = () => {
  const navigate = useNavigate();
  const signOut = useSignOut();

  return (
    <div className="main">
      <h1>Админ-панель</h1>
      <Button onClick={() => navigate({ to: "/" })}>Главная</Button>
      <Button color="error" onClick={signOut}>
        Выйти
      </Button>
    </div>
  );
};
