///about - deverá poder voltar para a home
import { useNavigate } from "react-router-dom";

export const About = () => {
    const navigate = useNavigate();
  return (
    <div>
      <h1>Sobre</h1>
      <button onClick={() => navigate("/")}>Home</button>
    </div>
  );
};
