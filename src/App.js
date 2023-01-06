import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/Root";
import Home from "./routes/Home";
import VehicleGrid from "./routes/VehicleGrid";
import VehicleView from "./routes/VehicleView";
import NotFound from "./routes/NotFound";
import "./main.css";

const router = createBrowserRouter([
  {
    path: "/car-rental-react",
    element: <Root />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/car-rental-react/vehicles",
        element: <VehicleGrid />,
      },
      {
        path: "/car-rental-react/vehicles/:slug",
        element: <VehicleView />,
      },
      {
        path: "/car-rental-react/*",
        element: <NotFound />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
