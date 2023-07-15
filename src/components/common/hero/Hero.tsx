'use client';

import { ReactNode } from 'react';

type HeroPropsType = {
  title?: string | ReactNode;
  subtitle?: string | ReactNode;
  children?: ReactNode;
};

// prettier-ignore
const Hero = ({
  title,
  subtitle,
  children,
}: HeroPropsType) => {
  return (
    <section className='hero'>
      <div className='hero-body'>
        {!!title === true && <p className='title'>{title}</p>}
        {!!subtitle === true && <p className='subtitle'>{subtitle}</p>}
        {children}
      </div>
    </section>
  );
};

export default Hero;
