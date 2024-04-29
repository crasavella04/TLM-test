import { Outlet, createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect } from "react";
import { UserService } from "../../services/UserService";
import { Roles } from "../../types/Roles";

export const Route = createFileRoute("/_root/_admin")({
  loader: () => {
    const id = localStorage.getItem("userId");
    const user = UserService.getUserById(Number(id));

    const isAdmin = user?.role === Roles.ADMIN;
    return { isAdmin };
  },
  component: () => <Layout />,
});

const Layout = () => {
  const data = Route.useLoaderData();
  const navigate = useNavigate();

  useEffect(() => {
    if (!data.isAdmin) navigate({ to: "/" });
  }, [data.isAdmin, navigate]);

  return <Outlet />;
};
