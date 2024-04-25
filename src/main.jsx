import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AuthConfiguration from "./assets/Components/Authconfiguration/Authconfiguration.jsx";
import { HelmetProvider } from "react-helmet-async";
import Login from "./assets/Components/Login/Login.jsx";
import Register from "./assets/Components/Register/Register.jsx";
import Home from "./assets/Components/Home/Home.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/register",
    element: <Register></Register>,
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>
      <AuthConfiguration>
        <RouterProvider router={router} />
      </AuthConfiguration>
    </HelmetProvider>
  </React.StrictMode>
);
