import React from 'react';

export default function OpenSign({ sign }) {
  return (
    <h2>The Zoo is {sign ? 'Open' : 'Closed'}</h2>
  );
}
