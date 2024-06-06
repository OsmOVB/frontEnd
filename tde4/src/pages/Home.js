import { Link, useNavigate } from "react-router-dom";

export const Home = () => {
    const navigate = useNavigate();
  return (
    <div>
      <h1>Home</h1>
      <button onClick={() => navigate("/list")}>Lista de Hobs</button>
      <button onClick={() => navigate("/profile")}>Perfil</button>
      <Link to="/list">Lista</Link>
      <Link to="/profile">Perfil</Link>

    </div>
  );
};
