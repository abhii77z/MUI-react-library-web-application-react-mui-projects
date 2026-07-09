import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

test('renders welcome heading', () => {
  render(
    <MemoryRouter initialEntries={['/']}>
      <App />
    </MemoryRouter>
  );
  const headingElement = screen.getByText(/Welcome to Home Page/i);
  expect(headingElement).toBeInTheDocument();
});

