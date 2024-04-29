import { useNavigate } from "@tanstack/react-router";

export const useSignOut = () => {
  const navigate = useNavigate();

  const signOut = () => {
    localStorage.removeItem("userId");
    navigate({ to: "/login" });
  };

  return signOut;
};
