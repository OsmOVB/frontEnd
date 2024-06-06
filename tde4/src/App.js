import "./App.css";
import { SimulateApi } from "./pages/SimulateApi";
import { ToDoList } from "./pages/ToDoList";
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
    path: "/todolist",
    element: <ToDoList pageTitle="Lista de Tarefas" />,
  },
  {
    path: "/simulateapi",
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
