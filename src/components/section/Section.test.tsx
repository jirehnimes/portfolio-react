import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import Section from './Section';

describe('Section', () => {
  it('renders default', () => {
    const { container } = render(<Section />);

    const section = container.querySelector('section');

    expect(section).toBeInTheDocument();
  });

  it('renders default with text', () => {
    const { container } = render(<Section />);

    const section = container.querySelector('section');

    expect(section).toBeInTheDocument();

    section!.innerHTML += 'Hello World!';

    expect(section!.innerHTML).toStrictEqual('Hello World!');
  });

  it('renders above', () => {
    const { container } = render(<Section above />);

    const section = container.querySelector('section');

    expect(section).toBeInTheDocument();
    expect(section).toHaveClass('above');
  });
});
