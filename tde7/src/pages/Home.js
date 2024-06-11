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
  // let { userId } = useParams();
  return (
    <div>
      <h1>Home</h1>
      <ul>
        <li>
          <Link to="/user?id=1">Usuário 1</Link>
        </li>
        <li>
          <Link to="/user?id=2">Usuário 2</Link>
        </li>
        <li>
          <Link to="/user?id=3">Usuário 3</Link>
        </li>
      </ul>
      <button onClick={() => navigate("/about")}>Sobre</button>
      <button onClick={() => navigate("/user")}>Usuário</button>
      <button onClick={() => navigate("/pokemon")}>Pokemon</button>
    </div>
  );
};
