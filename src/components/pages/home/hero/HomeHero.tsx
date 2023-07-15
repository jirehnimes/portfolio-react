'use client';

import { Hero } from '@/components/common';

const HERO_SUBTITLE = `I'm a full-stack developer from the Philippines who is passionate
on delivering valuable outputs, learning new technologies, and
collaborative in order to provide software applications and innovative solutions.`;

const HomeHero = () => {
  return (
    <div className='home-hero'>
      <Hero
        title='Jireh Nimes'
        subtitle={HERO_SUBTITLE}
      />
    </div>
  );
};

export default HomeHero;
