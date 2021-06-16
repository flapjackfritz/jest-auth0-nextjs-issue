import Home from '../pages';
import { render, screen } from '@testing-library/react';
import { UserProvider } from '@auth0/nextjs-auth0';
import '@testing-library/jest-dom';

describe('Home Page', () => {
  beforeEach(() => {
    render(
      <UserProvider>
        <Home />
      </UserProvider>
    );
  });

  it('Renders the home page', async () => {
    const page = await screen.findByRole('main')
    expect(page).toBeInTheDocument();
  });
});
