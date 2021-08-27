import { render, screen } from '@testing-library/react';
import App from './App';

it('renders an AboutModal as a basic package usage example', () => {
  render(<App />);
  screen.getByText(/Show AboutModal/i);
});
