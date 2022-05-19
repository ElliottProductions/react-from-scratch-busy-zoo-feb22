import React from 'react';
import { Button } from '@mui/material';

export default function CustomButton({ onClick, children }) {
  return (
    <div>
      <Button onClick={onClick}>{ children }</Button>
    </div>
  );
}
