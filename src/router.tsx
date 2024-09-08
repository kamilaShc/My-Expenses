import { createBrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import PrivateRoutes from "./components/PrivateRoutes";
import Homepage from "./pages/Homepage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <LoginPage />,
      },
      {
        path: "register",
        element: <RegisterPage />,
      },
      // {
      //   element: <PrivateRoutes />,
      //   children: [
      //     {
      //       path: "homepage",
      //       element: <Homepage />,
      //     },
      //   ],
      // },
      {
        path: "homepage",
        element: <Homepage />,
      },
    ],
  },
]);

export default router;
