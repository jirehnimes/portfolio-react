import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import Button from './Button';

describe('Button', () => {
  it('renders default', () => {
    const { container } = render(<Button />);

    const button = container.querySelector('button');

    expect(button).toBeInTheDocument();
    expect(button!.innerHTML).toStrictEqual('Button');
  });
});
