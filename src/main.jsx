import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import AuthProvider from "./provider/AuthProvider";
import ActiveOrderPage from "./pages/ActiveOrderPage/ActiveOrderPage";
import CompletedOrderPage from "./pages/CompletedOrderPage/CompletedOrderPage";
import LoginPage from "./pages/LoginPage/LoginPage";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    children: [
      {
        path: "/",
        element: <LoginPage />,
      },
      {
        path: "/active-order",
        element: <ActiveOrderPage />,
      },
      {
        path: "/completed-order",
        element: <CompletedOrderPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={routes} />
    </AuthProvider>
  </React.StrictMode>
);
