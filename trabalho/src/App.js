
import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Login } from './pages/Login';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
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