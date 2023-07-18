import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import Hero from './Timeline';

const QUERY_SELECTOR = 'section';
const QUERY_SELECTOR_CLASS = 'hero';

describe('Hero', () => {
  it('renders default', () => {
    const { container } = render(<Hero />);

    const section = container.querySelector(QUERY_SELECTOR);

    expect(section).toBeInTheDocument();
    expect(section).toHaveClass(QUERY_SELECTOR_CLASS);
  });

  it('renders default with title text', () => {
    const { container } = render(<Hero title='Hello World!' />);

    const section = container.querySelector(QUERY_SELECTOR);

    expect(section).toBeInTheDocument();
    expect(section).toHaveClass(QUERY_SELECTOR_CLASS);
  });
});
