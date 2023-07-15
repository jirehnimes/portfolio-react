import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import BackgroundOverlay from './BackgroundOverlay';

describe('BackgroundOverlay', () => {
  it('renders default', () => {
    const { container } = render(<BackgroundOverlay />);

    const backgroundOverlay = container.querySelector('div');

    expect(backgroundOverlay).toBeInTheDocument();
    expect(backgroundOverlay).toHaveClass('background-overlay');
  });
});
