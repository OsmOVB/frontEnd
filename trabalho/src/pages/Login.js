import React from 'react';
import { useNavigate } from 'react-router-dom';
import LoginForm from '../components/LoginForm';
import '../styles/login.css';
import '../styles/global.css';

const Login = ({ onLogin, isLoggedIn }) => {
  const navigate = useNavigate();

  const handleLogin = (status) => {
    if (status) {
      onLogin(true);
      navigate('/items');
    }
  };

  return (
    <div className="container">
      <header className="cx-header">
        <div className="align-header">
          <div className="logo">Pokémon API</div>
          {isLoggedIn && (
            <></>
          )}
        </div>
      </header>
      <div className="login-content">
        <div className="character-container">
          <a href="https://www.freeiconspng.com/img/17343" title="Image from freeiconspng.com">
            <img src="https://www.freeiconspng.com/uploads/pikachu-png-icon-1.png" width="250" alt="Download Icon Png Pikachu" />
          </a>
        </div>
        <div className="login-container">
          <h2 className="login-title">Login</h2>
          <p className="login-subtitle">Pokémons e seus detalhes!</p>
          <LoginForm onLogin={handleLogin} />
        </div>
      </div>
    </div>
  );
};

export default Login;
