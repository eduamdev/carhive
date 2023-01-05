import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/Root";
import Home from "./routes/Home";
import VehicleGrid from "./routes/VehicleGrid";
import VehicleView from "./routes/VehicleView";
import NotFound from "./routes/NotFound";
import "./main.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/vehicles",
        element: <VehicleGrid />,
      },
      {
        path: "/vehicles/:slug",
        element: <VehicleView />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
