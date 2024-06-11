///user - deverá poder voltar para a home. Deve receber o ID do usuário via parâmetro de query e exibir o ID na tela
//No objeto de navegação, criar uma página padrão para erro
import { useNavigate } from "react-router-dom";

export const User = () => {
    const navigate = useNavigate();
    const id = new URLSearchParams(window.location.search).get("id");
    return (
        <div>
            <h1>Usuário</h1>
            <h2>Id: {id}</h2>
            <button onClick={() => navigate("/")}>Home</button>
        </div>
    );
};
