import useAuth from "../hooks/useAuth";
import { Outlet } from "react-router-dom";
import LoginPage from "../pages/LoginPage";

function PrivateRoutes() {
  const { auth } = useAuth();

  if (!auth.username) return <LoginPage />;

  return (
    <div>
      <Outlet />
    </div>
  );
}

export default PrivateRoutes;
