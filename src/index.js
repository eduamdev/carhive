import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/Root";
import Vehicles from "./routes/Vehicles";
import Vehicle from "./routes/Vehicle";
import NotFound from "./routes/NotFound";
import "./main.css";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
  {
    path: "/vehicles",
    element: <Vehicles />,
  },
  {
    path: "/vehicles/:slug",
    element: <Vehicle />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
