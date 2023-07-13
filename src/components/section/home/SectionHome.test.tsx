import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import SectionHome from './SectionHome';

describe('SectionHome', () => {
  it('renders default', () => {
    const { container } = render(<SectionHome />);

    const section = container.querySelector('section');

    expect(section).toBeInTheDocument();
  });

  it('renders default with text', () => {
    const { container } = render(<SectionHome />);

    const section = container.querySelector('section');

    expect(section).toBeInTheDocument();

    section!.innerHTML += 'Hello World!';

    expect(section!.innerHTML).toStrictEqual('Hello World!');
  });
});
