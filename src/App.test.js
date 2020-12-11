import { render, screen } from '@testing-library/react';
import App from './App';

test('renders robot head', () => {
  render(<App />);
  const head = screen.getByRole('list');
  expect(head).toBeInTheDocument();
});
