'use client';

import { fontRubik } from '@/consts/fonts.const';

import { Logo } from '@/components/app';
import { Hero } from '@/components/common';

import ButtonToExperience from './button-to-experience';

const HERO_SUBTITLE = `I'm a web developer from the Philippines who is passionate
on continuous learning, sharing of knowledge, delivering valuable outputs, and in
collaborative environment in order to provide innovative solutions.`;

const HomeHero = () => {
  return (
    <Hero className='home__hero is-fullheight'>
      <div className='container'>
        <div className='brand'>
          <Logo />
          <p className={`title ${fontRubik.className}`}>Jireh Nimes</p>
        </div>
        <p className='subtitle'>{HERO_SUBTITLE}</p>
      </div>
      <ButtonToExperience />
    </Hero>
  );
};

export default HomeHero;
