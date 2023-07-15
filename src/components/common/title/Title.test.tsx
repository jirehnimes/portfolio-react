import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import Title from './Title';

const TITLE_CONTAINER_CLASS = 'title-container';
const TITLE_CLASS = 'title';
const SUBTITLE_CLASS = 'subtitle';
const DEFAULT_CHILDREN = 'Hello World!';

const assertTitleContainer = (
  container: HTMLElement,
): HTMLDivElement | null => {
  const titleContainer = container.querySelector('div');

  expect(titleContainer).toBeInTheDocument();
  expect(titleContainer).toHaveClass(TITLE_CONTAINER_CLASS);

  return titleContainer;
};

describe('Title', () => {
  it('renders title default', () => {
    const { container } = render(<Title>{DEFAULT_CHILDREN}</Title>);

    const titleContainer = assertTitleContainer(container);

    const title = titleContainer!.querySelector('h3');

    expect(title).toBeInTheDocument();
    expect(title).toHaveClass(TITLE_CLASS);
    expect(title).toHaveClass('is-3');
  });

  it('renders title size 1', () => {
    const { container } = render(<Title size={1}>{DEFAULT_CHILDREN}</Title>);

    const titleContainer = assertTitleContainer(container);

    const title = titleContainer!.querySelector('h1');

    expect(title).toBeInTheDocument();
    expect(title).toHaveClass(TITLE_CLASS);
    expect(title).toHaveClass('is-1');
  });

  it('renders title size 2', () => {
    const { container } = render(<Title size={2}>{DEFAULT_CHILDREN}</Title>);

    const titleContainer = assertTitleContainer(container);

    const title = titleContainer!.querySelector('h2');

    expect(title).toBeInTheDocument();
    expect(title).toHaveClass(TITLE_CLASS);
    expect(title).toHaveClass('is-2');
  });

  it('renders title size 3', () => {
    const { container } = render(<Title size={3}>{DEFAULT_CHILDREN}</Title>);

    const titleContainer = assertTitleContainer(container);

    const title = titleContainer!.querySelector('h3');

    expect(title).toBeInTheDocument();
    expect(title).toHaveClass(TITLE_CLASS);
    expect(title).toHaveClass('is-3');
  });

  it('renders title size 4', () => {
    const { container } = render(<Title size={4}>{DEFAULT_CHILDREN}</Title>);

    const titleContainer = assertTitleContainer(container);

    const title = titleContainer!.querySelector('h4');

    expect(title).toBeInTheDocument();
    expect(title).toHaveClass(TITLE_CLASS);
    expect(title).toHaveClass('is-4');
  });

  it('renders title size 5', () => {
    const { container } = render(<Title size={5}>{DEFAULT_CHILDREN}</Title>);

    const titleContainer = assertTitleContainer(container);

    const title = titleContainer!.querySelector('h5');

    expect(title).toBeInTheDocument();
    expect(title).toHaveClass(TITLE_CLASS);
    expect(title).toHaveClass('is-5');
  });

  it('renders title size 6', () => {
    const { container } = render(<Title size={6}>{DEFAULT_CHILDREN}</Title>);

    const titleContainer = assertTitleContainer(container);

    const title = titleContainer!.querySelector('h6');

    expect(title).toBeInTheDocument();
    expect(title).toHaveClass(TITLE_CLASS);
    expect(title).toHaveClass('is-6');
  });

  // SUBTITLE

  it('renders subtitle default', () => {
    const { container } = render(<Title subtitle>{DEFAULT_CHILDREN}</Title>);

    const titleContainer = assertTitleContainer(container);

    const title = titleContainer!.querySelector('h5');

    expect(title).toBeInTheDocument();
    expect(title).toHaveClass(SUBTITLE_CLASS);
    expect(title).toHaveClass('is-5');
  });

  it('renders subtitle size 1', () => {
    const { container } = render(
      <Title
        size={1}
        subtitle
      >
        {DEFAULT_CHILDREN}
      </Title>,
    );

    const titleContainer = assertTitleContainer(container);

    const title = titleContainer!.querySelector('h1');

    expect(title).toBeInTheDocument();
    expect(title).toHaveClass(SUBTITLE_CLASS);
    expect(title).toHaveClass('is-1');
  });

  it('renders subtitle size 2', () => {
    const { container } = render(
      <Title
        size={2}
        subtitle
      >
        {DEFAULT_CHILDREN}
      </Title>,
    );

    const titleContainer = assertTitleContainer(container);

    const title = titleContainer!.querySelector('h2');

    expect(title).toBeInTheDocument();
    expect(title).toHaveClass(SUBTITLE_CLASS);
    expect(title).toHaveClass('is-2');
  });

  it('renders subtitle size 3', () => {
    const { container } = render(
      <Title
        size={3}
        subtitle
      >
        {DEFAULT_CHILDREN}
      </Title>,
    );

    const titleContainer = assertTitleContainer(container);

    const title = titleContainer!.querySelector('h3');

    expect(title).toBeInTheDocument();
    expect(title).toHaveClass(SUBTITLE_CLASS);
    expect(title).toHaveClass('is-3');
  });

  it('renders subtitle size 4', () => {
    const { container } = render(
      <Title
        size={4}
        subtitle
      >
        {DEFAULT_CHILDREN}
      </Title>,
    );

    const titleContainer = assertTitleContainer(container);

    const title = titleContainer!.querySelector('h4');

    expect(title).toBeInTheDocument();
    expect(title).toHaveClass(SUBTITLE_CLASS);
    expect(title).toHaveClass('is-4');
  });

  it('renders subtitle size 5', () => {
    const { container } = render(
      <Title
        size={5}
        subtitle
      >
        {DEFAULT_CHILDREN}
      </Title>,
    );

    const titleContainer = assertTitleContainer(container);

    const title = titleContainer!.querySelector('h5');

    expect(title).toBeInTheDocument();
    expect(title).toHaveClass(SUBTITLE_CLASS);
    expect(title).toHaveClass('is-5');
  });

  it('renders subtitle size 6', () => {
    const { container } = render(
      <Title
        size={6}
        subtitle
      >
        {DEFAULT_CHILDREN}
      </Title>,
    );

    const titleContainer = assertTitleContainer(container);

    const title = titleContainer!.querySelector('h6');

    expect(title).toBeInTheDocument();
    expect(title).toHaveClass(SUBTITLE_CLASS);
    expect(title).toHaveClass('is-6');
  });
});
