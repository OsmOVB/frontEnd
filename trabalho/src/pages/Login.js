// src/pages/Login.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import LoginForm from '../components/LoginForm';
import '../styles/login.css';

const Login = ({ onLogin }) => {
  const navigate = useNavigate();

  const handleLogin = (status) => {
    if (status) {
      onLogin(true);
      navigate('/items');
    }
  };

  return (
    <div className="container">
      <div className="login">
        <h2>Login</h2>
        <LoginForm onLogin={handleLogin} />
      </div>
    </div>
  );
};

export default Login;
