import React, { useState } from 'react';
import './Login.css'; 
import './Tarefas.css'; 

function Tarefas() {
  
  // 2. Criamos um "estado" para saber qual aba está ativa
  const [abaAtiva, setAbaAtiva] = useState('Em andamento');

  // 3. Criamos dados de exemplo separados para cada aba
  const todasTarefas = {
    'Em andamento': [
      { id: 1, nome: 'Tarefa para fazer A', prazo: '25/10 - 20:00' },
      { id: 2, nome: 'Tarefa para fazer B', prazo: '12/08 - 08:00' },
      { id: 3, nome: 'Tarefa para fazer C', prazo: '14/03 - 10:00' },
      { id: 4, nome: 'Tarefa para fazer D', prazo: '07/09 - 19:00' },
    ],
    'Concluídas': [ // Baseado no seu PDF
      { id: 5, nome: 'Tarefa para fazer F', prazo: '22/10 - 20:00', concluida: true },
      { id: 6, nome: 'Tarefa para fazer G', prazo: '28/10 - 08:00', concluida: true },
    ],
    'Atrasadas': [ // Baseado no seu PDF
      { id: 7, nome: 'Tarefa para fazer F (Atrasada)', prazo: '22/10 - 20:00', atrasada: true },
      { id: 8, nome: 'Tarefa para fazer G (Atrasada)', prazo: '28/10 - 08:00', atrasada: true }
    ]
  };

  // 4. Pegamos a lista correta baseada na aba ativa
  const tarefasParaMostrar = todasTarefas[abaAtiva];

  return (
    <div className="login-container">
      
      <div className="tarefas-header">
        <div className="menu-icon">☰</div>
        <h1 className="tarefas-title">Minhas Tarefas</h1>
        <div className="perfil-icon"></div>
      </div>

      <div className="tarefas-filtros">
        {/* 5. Botões agora mudam o estado 'abaAtiva' ao clicar (onClick)
             e a classe 'active' é aplicada dinamicamente
        */}
        <button 
          className={abaAtiva === 'Em andamento' ? 'filtro-btn active' : 'filtro-btn'}
          onClick={() => setAbaAtiva('Em andamento')}
        >
          Em andamento
        </button>
        <button 
          className={abaAtiva === 'Concluídas' ? 'filtro-btn active' : 'filtro-btn'}
          onClick={() => setAbaAtiva('Concluídas')}
        >
          Concluídas
        </button>
        <button 
          className={abaAtiva === 'Atrasadas' ? 'filtro-btn active' : 'filtro-btn'}
          onClick={() => setAbaAtiva('Atrasadas')}
        >
          Atrasadas
        </button>
      </div>

      <div className="tarefas-lista">
        {/* 6. A lista agora mostra apenas as tarefas da aba selecionada */}
        {tarefasParaMostrar.map((tarefa) => (
          <div className="tarefa-card" key={tarefa.id}>
            <div 
              className="tarefa-checkbox" 
              // Estilo de exemplo para mostrar concluídas
              style={{ 
                backgroundColor: tarefa.concluida ? '#888' : 'transparent',
                borderColor: tarefa.atrasada ? '#E53E3E' : '#AAA' // Borda vermelha se atrasada
              }}
            >
              {tarefa.concluida ? '✓' : ''}
            </div>
            <div className="tarefa-info">
              <p className="tarefa-nome" style={{ color: tarefa.atrasada ? '#E53E3E' : '#333' }}>
                {tarefa.nome}
              </p>
              <p className="tarefa-prazo" style={{ color: tarefa.atrasada ? '#E53E3E' : '#666' }}>
                Prazo: {tarefa.prazo}
              </p>
            </div>
          </div>
        ))}
      </div>

      <button className="fab-btn">+</button>

    </div>
  );
}

export default Tarefas;