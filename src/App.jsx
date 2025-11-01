// src/App.jsx
import React from 'react';
import Cadastro from './Cadastro'; // <--- Alternar de tela enquanto não tem rotas
import Login from './Login';
import Tarefas from './Tarefas';

function App() {
  return (
    //<Cadastro /> // <--- Mudar aqui também
    //<Login />
    <Tarefas />
  );
}

export default App;