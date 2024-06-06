import { useNavigate } from "react-router-dom";

const info = {
  name: "Fulano",
  age: 25,
  email: "fulano@gamil.com",
};
export const Profile = () => {
    const navigate = useNavigate();
  return (
    <div>
      <h1>Profile</h1>
        <p>Nome: {info.name}</p>
        <p>Idade: {info.age}</p>
        <p>Email: {info.email}</p>
      <button onClick={() => navigate(-1)}>Voltar</button>
      <button onClick={() => navigate("/list")}>Lista de Hobs</button>
    </div>
  );
}