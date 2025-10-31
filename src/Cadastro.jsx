import React from 'react';
import './Cadastro.css';
import './Login.css'; 

function Cadastro() {
  return (
    // Usamos 'login-container' e 'app-title' do CSS global/Login
    // para manter o mesmo visual de fundo e título
    <div className="login-container">
      <h1 className="app-title">Gerenciador de Tarefas</h1>

      <div className="login-form">
        <h2 className="form-title">Criar Conta</h2>
        
        {/* Link para voltar ao Login */}
        <p className="form-subtitle-link">
          Já tem conta? <strong>Faça login</strong>
        </p>

        {/* Campos do formulário de cadastro */}
        <input type="text" className="input-field" placeholder="Nome" />
        <input type="text" className="input-field" placeholder="Data de nascimento" />
        
        {/* Separando os campos como discutimos */}
        <input type="email" className="input-field" placeholder="Email" />
        <input type="text" className="input-field" placeholder="CPF" />

        <input type="password" className="input-field" placeholder="Senha" />
        <input type="password" className="input-field" placeholder="Confirmar senha" />

        <button className="btn btn-primary">Cadastrar</button>
      </div>

      {/* Texto de termos de serviço, pode ser útil manter */}
      <p className="terms-text">
        By clicking continue, you agree to our <strong>Terms of Service</strong> and <strong>Privacy Policy</strong>
      </p>
    </div>
  );
}

export default Cadastro;