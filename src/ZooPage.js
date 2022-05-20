import './App.css';

import React, { useState } from 'react';
import OpenSign from './OpenSign';
import Parade from './Parade';
import CustomButton from './CustomButton';

export default function ZooPage() {

  const [unicornSize, setUnicornSize] = useState(10);
  const [lionSize, setLionSize] = useState(10);
  const [isOpen, setIsOpen] = useState(true);
  const [animals, setAnimals] = useState(['rhino', 'hippo', 'lizard']);

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
            <CustomButton onClick={handleUnicornEat}>Feed the Unicorn</CustomButton>
            <CustomButton onClick={handleUnicornFight}>Unicorn, I Choose You!</CustomButton>
          </div>
        </div>
        <div className="fighter">
          <p className="emoji" style={{ fontSize: `${lionSize * 5}px` }}>🐈</p>
          <div className="buttons">
            <CustomButton onClick={handleLionEat}>Feed the Lion</CustomButton>
            <CustomButton onClick={handleLionFight}>Lion, I Choose You!</CustomButton>
          </div>
        </div>
      </div>
      <div className="zoosign">
        <br/>
        <OpenSign sign={isOpen}/>
        <div className="buttons">
          <CustomButton onClick={handleIsOpen}>Open/Close the Zoo</CustomButton>
        </div>
        
      </div>
      <div className="parade">
        <Parade animals={animals}/>
        <div className="buttons">
          <CustomButton onClick={()=>handleAnimals('lion')}>Add Lion</CustomButton>
          <CustomButton onClick={()=>handleAnimals('rhino')}>Add Rhino</CustomButton>
          <CustomButton onClick={()=>handleAnimals('hippo')}>Add Hippo</CustomButton>
          <CustomButton onClick={()=>handleAnimals('lizard')}>Add Lizard</CustomButton>

        </div>
        

      </div>
      
    </div>
  );
}
