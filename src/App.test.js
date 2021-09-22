import { render, screen } from '@testing-library/react';
import App from './App';

test('renders heading', () => {
  render(<App />);
  const heading = screen.getByText(/Make your choice/i);
  expect(heading).toBeInTheDocument();
});

test('renders options', () => {
  render(<App />);
  const options = screen.getByText('true');
  expect(options).toBeInTheDocument();
});
