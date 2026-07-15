import "./index.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router/dom";
import { createBrowserRouter } from "react-router";
import MainLayout from "./Components/Layout/MainLayout.tsx";
import Home from "./pages/Home.tsx";
import Cars from "./pages/Cars.tsx";
import MyBookings from "./pages/MyBookings.tsx";
import ListCars from "./pages/ListCars.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      { index: true, Component: Home },
      { path: "cars", Component: Cars },
      { path: "my-bookings", Component: MyBookings },
      { path: "list-cars", Component: ListCars },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
