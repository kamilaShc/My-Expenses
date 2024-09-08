import useAuth from "../hooks/useAuth";
import { Outlet } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import ExpensesProvider from "../context/ExpensesProvider";

function PrivateRoutes() {
  const { auth } = useAuth();

  if (!auth.username) return <LoginPage />;

  return <Outlet />;
}

export default PrivateRoutes;
