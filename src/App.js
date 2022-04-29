import './App.css';

import React, { useState } from 'react';
import OpenSign from './OpenSign';
import Parade from './Parade';



function App() {

  const [unicornSize, setUnicornSize] = useState(10);
  const [lionSize, setLionSize] = useState(10);
  const [isOpen, setIsOpen] = useState(true);
  const [animals, setAnimals] = useState(['rhino', 'hippo']);

  function handleUnicornEat() {
    setUnicornSize(unicornSize + 1);
  }

  function handleLionEat() {
    setLionSize(lionSize + 1);
  }

  function handleUnicornFight() {
    setLionSize(lionSize - 1);
  }

  function handleLionFight() {
    setUnicornSize(unicornSize - 1);
  }

  function handleIsOpen() {
    setIsOpen(!isOpen);
  }

  function handleAnimals(animal) {
    animals.push(animal);

    setAnimals([...animals]);
  }


  return (
    <div className="App">
      <div className="fight">
        <div className="fighter">
          <p className="emoji" style={{ fontSize: `${unicornSize * 5}px` }}>🦄</p>
          <div className="buttons">
            <button onClick={handleUnicornEat}>(Do) Feed the Unicorn</button>
            <button onClick={handleUnicornFight}>Unicorn, I Choose You!</button>
          </div>
        </div>
        <div className="fighter">
          <p className="emoji" style={{ fontSize: `${lionSize * 5}px` }}>🐈</p>
          <div className="buttons">
            <button onClick={handleLionEat}>(Do) Feed the Lion</button>
            <button onClick={handleLionFight}>Lion, I Choose You!</button>
          </div>
        </div>
      </div>
      <div className="zoosign">
        <br/>
        <OpenSign sign={isOpen}/>
        <button onClick={handleIsOpen}>Open/Close the Zoo</button>
      </div>
      <div className="parade">
        <Parade animals={animals}/>

      </div>
      
    </div>
  );
}

export default App;
