import { useNavigate } from "react-router-dom";

export const User = () => {
    const navigate = useNavigate();
    const hobbies = ["Ler", "Assistir séries", "Jogar", "Programar", "Dormir"];
    return (
        <div>
            <h1>List</h1>
            <ul>
                {hobbies.map((hobby, index) => (
                    <li key={index}>{hobby}</li>
                ))}
            </ul>
            <button onClick={() => navigate("/")}>Voltar</button>
            <button onClick={() => navigate('/profile')}>Perfil</button>

        </div>
    );
};
