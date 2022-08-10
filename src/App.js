import React from 'react';
import './App.css';
import Counter from './Counter';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Aplikacja Licznika w ReactJS
        </p>
      </header>
      <Counter initValue={1000}/>
    </div>
  );
}

export default App;
