import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import Logo from './Logo';

const LOGO_CONTAINER_ELEMENT = 'div';
const LOGO_CONTAINER_CLASS = 'logo-container';
const LOGO_ELEMENT = 'div';
const LOGO_CLASS = 'logo';

describe('Logo', () => {
  it('renders default', () => {
    const { container } = render(<Logo />);

    const logoContainer = container.querySelector(LOGO_CONTAINER_ELEMENT);

    expect(logoContainer).toBeInTheDocument();
    expect(logoContainer).toHaveClass(LOGO_CONTAINER_CLASS);

    const logo = logoContainer!.querySelector(LOGO_ELEMENT);

    expect(logo).toBeInTheDocument();
    expect(logo).toHaveClass(LOGO_CLASS);
  });
});
