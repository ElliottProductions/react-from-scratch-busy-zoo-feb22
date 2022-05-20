import React from 'react';
import AnimalEmoji from './AnimalEmoji';

export default function Parade({ animals }) {
  return (
    <div className="emojiarea">
      {animals.map(animal => <AnimalEmoji key={animal.index + Math.floor(Math.random() * 10000)} animal={animal}/>)}
    </div>
  );
}
