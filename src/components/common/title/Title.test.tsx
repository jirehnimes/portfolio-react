import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import Title from './Title';

const TITLE_CLASS = 'title';
const DEFAULT_CHILDREN = 'Hello World!';

describe('Title', () => {
  it('renders default', () => {
    const { container } = render(<Title>{DEFAULT_CHILDREN}</Title>);

    const title = container.querySelector('h3');

    expect(title).toBeInTheDocument();
    expect(title).toHaveClass(TITLE_CLASS);
    expect(title).toHaveClass('is-3');
  });

  it('renders size 1', () => {
    const { container } = render(<Title size={1}>{DEFAULT_CHILDREN}</Title>);

    const title = container.querySelector('h1');

    expect(title).toBeInTheDocument();
    expect(title).toHaveClass(TITLE_CLASS);
    expect(title).toHaveClass('is-1');
  });

  it('renders size 2', () => {
    const { container } = render(<Title size={2}>{DEFAULT_CHILDREN}</Title>);

    const title = container.querySelector('h2');

    expect(title).toBeInTheDocument();
    expect(title).toHaveClass(TITLE_CLASS);
    expect(title).toHaveClass('is-2');
  });

  it('renders size 3', () => {
    const { container } = render(<Title size={3}>{DEFAULT_CHILDREN}</Title>);

    const title = container.querySelector('h3');

    expect(title).toBeInTheDocument();
    expect(title).toHaveClass(TITLE_CLASS);
    expect(title).toHaveClass('is-3');
  });

  it('renders size 4', () => {
    const { container } = render(<Title size={4}>{DEFAULT_CHILDREN}</Title>);

    const title = container.querySelector('h4');

    expect(title).toBeInTheDocument();
    expect(title).toHaveClass(TITLE_CLASS);
    expect(title).toHaveClass('is-4');
  });

  it('renders size 5', () => {
    const { container } = render(<Title size={5}>{DEFAULT_CHILDREN}</Title>);

    const title = container.querySelector('h5');

    expect(title).toBeInTheDocument();
    expect(title).toHaveClass(TITLE_CLASS);
    expect(title).toHaveClass('is-5');
  });

  it('renders size 6', () => {
    const { container } = render(<Title size={6}>{DEFAULT_CHILDREN}</Title>);

    const title = container.querySelector('h6');

    expect(title).toBeInTheDocument();
    expect(title).toHaveClass(TITLE_CLASS);
    expect(title).toHaveClass('is-6');
  });
});
