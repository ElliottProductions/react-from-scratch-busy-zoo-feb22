import React from 'react';

export default function AnimalEmoji({ animal }) {
  return (
    <div className="emojiarea">
      {animal === 'lion' && <span>🐈</span>}
      {animal === 'hippo' && <span>🦛</span>}
      {animal === 'rhino' && <span>🦏</span>}
      {animal === 'lizard' && <span>🦎</span>}
      
    </div>
  );
}
