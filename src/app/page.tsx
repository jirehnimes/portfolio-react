'use client';

import { BackgroundOverlay } from '@/components/common';
import {
  HomeBackgroundVideo,
  HomeExperiences,
  HomeHero,
  HomePortfolio,
} from '@/components/pages/home';

export default function Index() {
  return (
    <div className='home'>
      <BackgroundOverlay />
      <HomeBackgroundVideo />
      <HomeHero />
      <HomeExperiences />
      <HomePortfolio />
    </div>
  );
}
