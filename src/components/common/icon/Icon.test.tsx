import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import Icon from './Icon';

const ICON_CONTAINER_ELEMENT = 'span';
const ICON_CONTAINER_CLASS = 'icon';
const ICON_ELEMENT = 'svg';
const ICON_SAMPLE = faChevronUp;

describe('Icon', () => {
  it('renders default', () => {
    const { container } = render(<Icon icon={ICON_SAMPLE} />);

    const iconContainer = container.querySelector(ICON_CONTAINER_ELEMENT);

    expect(iconContainer).toBeInTheDocument();
    expect(iconContainer).toHaveClass(ICON_CONTAINER_CLASS);

    const icon = iconContainer!.querySelector(ICON_ELEMENT);

    expect(icon).toBeInTheDocument();
  });
});
