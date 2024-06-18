import React, { useState } from 'react';

const LoginForm = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(true);
  };

  const isFormValid = email && password.length >= 8;

  return (
    <form onSubmit={handleSubmit} className="login-form">
      <label htmlFor="email" className="login-label">E-mail</label>
      <input
        type="email"
        id="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="login-input"
      />

      <label htmlFor="password" className="login-label">Senha</label>
      <input
        type="password"
        id="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="login-input"
      />

      <button type="submit" disabled={!isFormValid} className="login-btn">Entrar</button>
      <a href="#" className="forgot-password">Esqueceu a senha?</a>
    </form>
  );
};

export default LoginForm;
