import { Outlet, createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect } from "react";

export const Route = createFileRoute("/_auth")({
  loader: () => {
    const isAuth = localStorage.getItem("userId");

    return { isAuth };
  },
  component: () => <Layout />,
});

const Layout = () => {
  const data = Route.useLoaderData();
  const navigate = useNavigate();

  useEffect(() => {
    if (data.isAuth) navigate({ to: "/" });
  }, [data.isAuth, navigate]);

  return <Outlet />;
};
