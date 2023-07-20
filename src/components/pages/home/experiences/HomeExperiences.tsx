'use client';

import { useInView } from 'react-intersection-observer';

import { Section, Title } from '@/components/common';
import { getMonthName } from '@/utils/date.util';

import { flattenExperiences } from './experiences.utils';
import HomeExperiencesListCompanies from './list-companies';
import HomeExperiencesTimeline from './timeline';
import HomeExperiencesTitleYears from './title-years';

const HomeExperiences = () => {
  const { ref, inView } = useInView({ threshold: 0.6 });

  const firstMonthYear = () => {
    const firstCompany = flattenExperiences()[0];
    const firstCompanyDate = new Date(
      firstCompany.year_started,
      firstCompany.month_started - 1,
    );
    const firstCompanyMonth = getMonthName(firstCompanyDate).toUpperCase();

    return `${firstCompanyMonth} ${firstCompany.year_started}`;
  };

  return (
    <div
      ref={ref}
      className='home__experiences'
    >
      <Section above>
        <div>
          <HomeExperiencesTitleYears inView={inView} />
          <Title size={6}>WORKING PROFESSIONALLY</Title>
          <Title size={6}>SINCE {firstMonthYear()}</Title>
        </div>
        <HomeExperiencesListCompanies />
      </Section>
      <HomeExperiencesTimeline />
    </div>
  );
};

export default HomeExperiences;
