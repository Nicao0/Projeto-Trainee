// src/Login.jsx

import React from 'react';
import './Login.css'; // Importa o CSS que acabamos de colar

function Login() {
  return (
    <div className="login-container">
      
      <h1 className="app-title">Gerenciador de Tarefas</h1>

      <div className="login-form">
        <h2 className="form-title">Login</h2>
        <p className="form-subtitle">Use seu email ou CPF para entrar</p>

        <input type="text" className="input-field" placeholder="Email ou CPF" />
        <input type="password" className="input-field" placeholder="Senha" />

        <button className="btn btn-primary">Continue</button>

        <div className="separator">or</div>

        <button className="btn btn-secondary">Criar nova conta</button>
      </div>

      <div className="social-login">
        <button className="btn btn-social">
          G Continue with Google
        </button>
        <button className="btn btn-social">
          A Continue with Apple
        </button>
      </div>

      <p className="terms-text">
        By clicking continue, you agree to our <strong>Terms of Service</strong> and <strong>Privacy Policy</strong>
      </p>
    </div>
  );
}

export default Login;