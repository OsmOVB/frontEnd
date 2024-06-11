import "./App.css";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import { Profile } from "./pages/Profile";
import { List } from "./pages/List";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { User } from "./pages/User";
import { Poke } from "./pages/Poke";

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
    element: <About />,
  },
  {
    path: "/user",
    element: <User />,
  },
  {
    path: "/pokemon",
    element: <Poke />,

  }

  
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
