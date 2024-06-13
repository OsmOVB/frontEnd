// src/components/LoginForm.js
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
    <form onSubmit={handleSubmit}>
      <label htmlFor="email">Email</label>
      <input
        type="email"
        id="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <label htmlFor="password">Senha</label>
      <input
        type="password"
        id="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      {/* passa link no label */}      
      <label htmlFor="forget" >Esqueceu a senha?</label>
      <button type="submit" disabled={!isFormValid}>Entrar</button>
    </form>
  );
};

export default LoginForm;
