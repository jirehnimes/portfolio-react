'use client';

import { ReactNode } from 'react';

type HeroPropsType = {
  title?: string | ReactNode;
  subtitle?: string | ReactNode;
  className?: string;
  children?: ReactNode;
};

// prettier-ignore
const Hero = ({
  title,
  subtitle,
  className,
  children,
}: HeroPropsType) => {
  const classes = `hero ${className}`;

  return (
    <section className={classes}>
      <div className='hero-body'>
        {!!title === true && <p className='title'>{title}</p>}
        {!!subtitle === true && <p className='subtitle'>{subtitle}</p>}
        {children}
      </div>
    </section>
  );
};

export default Hero;
