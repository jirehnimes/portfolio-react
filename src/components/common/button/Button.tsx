'use client';

// prettier-ignore
import {
  ButtonHTMLAttributes,
  DetailedHTMLProps,
  ReactNode,
} from 'react';

type ButtonPropsType = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & { children?: ReactNode };

const Button = ({ children, ...attributes }: ButtonPropsType) => {
  const classes = `button ${attributes?.className}`;

  return (
    <button
      {...attributes}
      className={classes}
    >
      {children || 'Button'}
    </button>
  );
};

export default Button;
