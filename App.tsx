import Home from './paginas/home/Home';
import './App.css';
import React, { useState } from 'react';

function App() {
  const [valor, setValor] = useState(0);

  function handleClick() {
    window.open('https://www.youtube.com/watch?v=XoYu7K6Ywkg');
    setValor(valor + 1);
  }
  return (
     <Home  title="Bem-Vindo(a)"
            description="That’s what you get when you let your heart win."/>
    //<div>
      //<p>Escute essa música: {valor}</p>
     // <button onClick={handleClick}>Ouvir</button>
   // </div>
  );
}

export default App;