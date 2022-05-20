import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('tests zoo sign button', () => {
  render(<App />);

  const zooSignButton = screen.getByText(/CLOSE THE ZOO/i);

  fireEvent.click(zooSignButton);

  const zooSignAfter = screen.queryByText(/The Zoo is Closed/i);

  expect(zooSignAfter).toBeInTheDocument();
});

test('tests add rhino button', () => {
  render(<App />);

  const rhinoEmojis = screen.queryAllByText(/🦏/i);
  const startingNumOfRhinos = rhinoEmojis.length; 

  const addRhinoButton = screen.getByText(/ADD RHINO/i);
  fireEvent.click(addRhinoButton);

  const rhinoEmojis2 = screen.queryAllByText(/🦏/i);

  expect(rhinoEmojis2.length).toBe(startingNumOfRhinos + 1);
});