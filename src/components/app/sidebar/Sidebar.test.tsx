import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import Sidebar from './Sidebar';

const SIDEBAR_TAG = 'aside';
const SIDEBAR_CLASS = 'sidebar';

describe('Sidebar', () => {
  it('renders default', () => {
    const { container } = render(<Sidebar />);

    const sidebar = container.querySelector(SIDEBAR_TAG);

    expect(sidebar).toBeInTheDocument();
    expect(sidebar).toHaveClass(SIDEBAR_CLASS);
  });
});
