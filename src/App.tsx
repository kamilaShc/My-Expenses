import { useState } from "react";
import { RouterProvider } from "react-router-dom";
import router from "./router";
import "./scss/main.scss";

export const App = () => {
  return (
    <main>
      <RouterProvider router={router} />
    </main>
  );
};
