'use client';

import { Button, Hero } from '@/components/common';

const HERO_SUBTITLE = `I'm a full-stack developer from the Philippines who is passionate
on delivering valuable outputs, learning new technologies, and
collaborative in order to provide software applications and innovative solutions.`;

const HomeHero = () => {
  return (
    <Hero className='home-hero is-fullheight'>
      <div className='container'>
        <p className='title'>Jireh Nimes</p>
        <p className='subtitle'>{HERO_SUBTITLE}</p>
      </div>
      <Button>About Me</Button>
    </Hero>
  );
};

export default HomeHero;
