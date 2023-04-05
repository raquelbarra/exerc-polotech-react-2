import React from 'react';
import './App.css';
import ButtonCounter from './components/ButtonCounter';
import DecisionLoop from './components/DecisionLoop';
import routerCount from "./assets/imgs/router_count.jpg"
import routerDecision from "./assets/imgs/rounter_decision.jpg"
import Header from './components/Header';

function App() {
  return (
    <div>
      <Header/>
      <div className='c_router_count'>
        <div className='title_router'>
          <img src={routerCount} alt="Astronauta" width="80px" />
          <h2>Rota de Contagem</h2>
        </div>
        <div className='content_router'>
          <h3>Missão:</h3>
          <p>Nossa frota espacial possui o objetivo de realizar a contagem exata. Realize a missão clicando no botão abaixo. <em>Para o alto e avante!</em></p>
        </div>
        <ButtonCounter title="Clique aqui" active/>
      </div>
      <div className='c_router_decision'>
        <div className='title_router'>
          <img src={routerDecision} alt="Astronauta" width="80px" />
          <h2>Rota de Decisão: ímpar</h2>
        </div>
        <div className='content_router'>
          <h3>Missão:</h3>
          <p>As decisões aleatórias não são páreas para a nossa frota. A missão é cadastrar via código os números para serem identificados os ímpares. <em>Ao infinito e além!</em></p>
        </div>
        <DecisionLoop numbers={[0,2,4]}/>
        <DecisionLoop numbers={[1,3,6,7,2,4]}/>
      </div>
    </div>
  );
}

export default App;
