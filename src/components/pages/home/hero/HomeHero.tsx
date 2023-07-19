'use client';

import { Hero } from '@/components/common';
import ButtonToExperience from './button-to-experience';

const HERO_SUBTITLE = `A Computer Engineer and an experienced web developer from the Philippines who is passionate
on continuous learning, sharing of knowledge, delivering valuable outputs, and
collaborative environment in order to provide innovative solutions.`;

const HomeHero = () => {
  return (
    <Hero className='home__hero is-fullheight'>
      <div className='container'>
        <p className='title'>Jireh Nimes</p>
        <p className='subtitle'>{HERO_SUBTITLE}</p>
      </div>
      <ButtonToExperience />
    </Hero>
  );
};

export default HomeHero;
