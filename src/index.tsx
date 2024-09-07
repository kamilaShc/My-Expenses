import ReactDOM from "react-dom/client";
import React from "react";
import { App } from "./App";
import { AuthProvider } from "./context/AuthProvider";

const rootElement = document.getElementById("root");
if (!rootElement) throw new Error("Failed to find the root element");
const root = ReactDOM.createRoot(rootElement);

const PUBLISHABLE_KEY =
  "pk_test_d2VsY29tZWQtcXVhaWwtNzkuY2xlcmsuYWNjb3VudHMuZGV2JA";

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}

root.render(
  <React.StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </React.StrictMode>
);
