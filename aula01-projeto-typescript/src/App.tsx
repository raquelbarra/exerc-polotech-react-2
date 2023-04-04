import React from 'react';
import './App.css';
import ButtonCounter from './components/ButtonCounter';
import DecisionLoop from './components/DecisionLoop';

function App() {
  return (
    <div>
      <ButtonCounter title="clique em mim" active/>
      <DecisionLoop/>
    </div>
  );
}

export default App;
