import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import Footer from './Footer';

const FOOTER_TAG = 'footer';
const FOOTER_CLASS = 'footer';
const CONTAINER_TAG = 'div';
const CONTAINER_CLASS = 'container';

describe('Footer', () => {
  it('renders default', () => {
    const { container } = render(<Footer />);

    const footer = container.querySelector(FOOTER_TAG);

    expect(footer).toBeInTheDocument();
    expect(footer).toHaveClass(FOOTER_CLASS);

    const divContainer = footer!.querySelector(CONTAINER_TAG);

    expect(divContainer).toBeInTheDocument();
    expect(divContainer).toHaveClass(CONTAINER_CLASS);
  });
});
