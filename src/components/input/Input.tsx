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
> & { children: ReactNode };

const Input = ({ children, ...attributes }: ButtonPropsType) => {
  return <button {...attributes}>{children || 'Button'}</button>;
};

export default Input;
