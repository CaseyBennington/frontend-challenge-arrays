import { render, screen } from '@testing-library/react';
import App from './App';

test('renders', () => {
  render(<App />);
  const titleElement = screen.getByText('The Pointless App');
  expect(titleElement).toBeInTheDocument();
});