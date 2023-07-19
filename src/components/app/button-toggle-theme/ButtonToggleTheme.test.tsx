import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import ButtonToTop from './ButtonToggleTheme';

describe('ButtonToTop', () => {
  it('renders default', () => {
    const { container } = render(<ButtonToTop />);

    const buttonToTop = container.querySelector('button');

    expect(buttonToTop).toBeInTheDocument();
  });
});
