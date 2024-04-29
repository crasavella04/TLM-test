import { createFileRoute } from "@tanstack/react-router";
import LoginForm from "../../components/LoginForm";

export const Route = createFileRoute("/_auth/login")({
  component: () => <Page />,
});

const Page = () => {
  return (
    <div className="login">
      <LoginForm />
    </div>
  );
};
