'use client';

import { ReactNode } from 'react';

type TitlePropsType = {
  children: ReactNode;
  size?: number;
};

const Title = ({ size = 3, children }: TitlePropsType) => {
  if (size === 6) return <h6 className='title is-6'>{children}</h6>;
  if (size === 5) return <h5 className='title is-5'>{children}</h5>;
  if (size === 4) return <h4 className='title is-4'>{children}</h4>;
  if (size === 3) return <h3 className='title is-3'>{children}</h3>;
  if (size === 2) return <h2 className='title is-2'>{children}</h2>;

  return <h1 className='title is-1'>{children}</h1>;
};

export default Title;
