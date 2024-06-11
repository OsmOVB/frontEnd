import "./App.css";
import { SimulateApi } from "./pages/SimulateApi";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import { Profile } from "./pages/Profile";
import { List } from "./pages/List";
import { Home } from "./pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  
  {
    path: "/profile",
    element: <Profile />,
  },
  {
    path: "/list",
    element: <List />,
  },

  {
    path: "/about",
    element: <SimulateApi />,
  },
  {
    path: "/user",
    element: <SimulateApi />,
  },

  
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
