import { render, screen } from '@testing-library/react';
import App from './../App';

test('renders home', () => {
  render(<App />);
  const homeText = screen.getByText(/Home/i);
  expect(homeText).toBeInTheDocument();
});
