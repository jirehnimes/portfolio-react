'use client';

import { Section, Title } from '@/components/common';
import HomeExperiencesTimeline from './timeline';
// import experiences from './experiences';

const HomeExperiences = () => {
  return (
    <div className='home__experiences'>
      <Section above>
        <Title size={1}>6 YEARS</Title>
        <Title size={6}>WORKING PROFESSIONALLY</Title>
        <Title size={6}>SINCE JUNE 2016</Title>
      </Section>
      <HomeExperiencesTimeline />
    </div>
  );
};

export default HomeExperiences;
