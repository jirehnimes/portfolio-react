import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import Section from './Section';

const SECTION_ELEMENT = 'section';
const CONTAINER_ELEMENT = 'div';
const CONTAINER_CLASS = 'container';
const DEFAULT_CHILDREN = 'Hello World!';

describe('Section', () => {
  it('renders default', () => {
    const { container } = render(<Section>{DEFAULT_CHILDREN}</Section>);

    const section = container.querySelector(SECTION_ELEMENT);

    expect(section).toBeInTheDocument();

    const divContainer = section!.querySelector(CONTAINER_ELEMENT);

    expect(divContainer).toBeInTheDocument();
    expect(divContainer).toHaveClass(CONTAINER_CLASS);
    expect(divContainer!.innerHTML).toStrictEqual(DEFAULT_CHILDREN);
  });

  it('renders above', () => {
    const { container } = render(<Section above>{DEFAULT_CHILDREN}</Section>);

    const section = container.querySelector(SECTION_ELEMENT);

    expect(section).toBeInTheDocument();

    const divContainer = section!.querySelector(CONTAINER_ELEMENT);

    expect(divContainer).toBeInTheDocument();
    expect(divContainer).toHaveClass(CONTAINER_CLASS);
    expect(divContainer!.innerHTML).toStrictEqual(DEFAULT_CHILDREN);
  });
});
