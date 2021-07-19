import '@testing-library/jest-dom';

import { describe, it, expect } from '@jest/globals';
import { render, screen } from '@testing-library/react';
import App from '../pages/index.js';

describe('App', () => {
  it('renders without crashing', () => {
    render(<App />);
    expect(
      screen.getByRole('heading', { name: 'Welcome to Next.js!' }),
    ).toBeInTheDocument();
  });
});
