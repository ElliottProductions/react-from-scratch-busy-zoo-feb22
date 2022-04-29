import React from 'react';
import AnimalEmoji from './AnimalEmoji';

export default function Parade({ animals }) {
  return (
    <div className="emojiarea">
      {animals.map(animal => <AnimalEmoji key={animal.index} animal={animal}/>)}
    </div>
  );
}
