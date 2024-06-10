//Tela de login
// Não precisa ter conexão com a API
// Input para email e senha
// Validar se ambos os campos estão preenchidos e a senha possui ao menos 8 caracteres
// Liberar o botão de acesso ao sistema apenas se as validações forem satisfeitas

//estilize o formulário de login
import React, { useState } from "react";
import "./Login.css";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email:", email, "Password:", password);
  };

  return (
    <div className="login">
      <h2>Acessar</h2>
      <form onSubmit={handleSubmit}>
        <div className="column">
          <label htmlFor="email">Email</label>
          <input
            className="input"
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
          />
        </div>
        <div className="column">
          <label htmlFor="password">Senha</label>
          <input
            className="input"
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <button
          className="button"
          type="submit"
          disabled={email === "" || password.length < 8}
        >
          Login
        </button>
      </form>
    </div>
  );
};
