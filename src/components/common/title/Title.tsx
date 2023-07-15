'use client';

import { ReactNode } from 'react';

type TitlePropsType = {
  children: ReactNode;
  size?: number;
  subtitle?: boolean;
};

const Title = ({
  // prettier-ignore
  children,
  size,
  subtitle,
}: TitlePropsType) => {
  const type = !!subtitle === true ? 'subtitle' : 'title';
  const _size = !!size === true ? size : !!subtitle === true ? 5 : 3;

  let component = <h1 className={`${type} is-1`}>{children}</h1>;
  if (_size === 6) component = <h6 className={`${type} is-6`}>{children}</h6>;
  if (_size === 5) component = <h5 className={`${type} is-5`}>{children}</h5>;
  if (_size === 4) component = <h4 className={`${type} is-4`}>{children}</h4>;
  if (_size === 3) component = <h3 className={`${type} is-3`}>{children}</h3>;
  if (_size === 2) component = <h2 className={`${type} is-2`}>{children}</h2>;

  return <div className='title-container'>{component}</div>;
};

export default Title;
