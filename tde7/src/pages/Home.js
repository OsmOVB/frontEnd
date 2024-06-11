/*
Criar uma aplicação simples de React com três páginas:

/home - Deverá exibir uma lista de usuários fictícios com nome e id. Deverá possibilitar o acesso a página /about e a página /user, passando o ID do usuário que deseja visualizar via rota
/about - deverá poder voltar para a home
/user - deverá poder voltar para a home. Deve receber o ID do usuário via parâmetro de query e exibir o ID na tela
No objeto de navegação, criar uma página padrão para erro


Material para consulta para a passagem de parâmetro de query:

https://reactrouter.com/en/main/hooks/use-params

https://reactrouter.com/en/main/start/tutorial#the-contact-route-ui



Página padrão para erro

https://reactrouter.com/en/main/route/error-element

https://reactrouter.com/en/main/start/tutorial#handling-not-found-errors
*/
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
