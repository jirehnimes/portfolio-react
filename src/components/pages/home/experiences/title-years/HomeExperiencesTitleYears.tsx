'use client';

// eslint-disable-next-line object-curly-newline
import { useCallback, useEffect, useRef, useState } from 'react';

import { Title } from '@/components/common';
import { getYearsFromMonths, subtractMonths } from '@/utils/date.util';

import { flattenExperiences } from '../experiences.utils';

type HomeExperiencesTitleYearsPropsType = {
  inView: boolean;
};

const HomeExperiencesTitleYears = ({
  inView,
}: HomeExperiencesTitleYearsPropsType) => {
  const yearsInterval = useRef<any>();

  const [years, setYears] = useState<number>(0);
  const [yearsRunning, setYearsRunning] = useState<boolean>(true);

  const flattenedExperiences = flattenExperiences();
  const firstCompany = flattenedExperiences[0];
  const lastCompany = flattenedExperiences[flattenedExperiences.length - 1];
  const totalYears = getYearsFromMonths(
    subtractMonths(
      new Date(firstCompany.year_started, firstCompany.month_started, 1),
      new Date(lastCompany.year_started, lastCompany.month_started, 1),
    ),
  );

  const resetYearCounter = () => {
    setYearsRunning(true);
    setYears(0);
  };

  const stopYearCounter = useCallback(() => {
    setYearsRunning(false);
    clearInterval(yearsInterval.current);
    yearsInterval.current = null;
    setYears(totalYears);
  }, [totalYears, setYears, setYearsRunning]);

  useEffect(() => {
    return () => clearInterval(yearsInterval.current);
  }, []);

  useEffect(() => {
    if (yearsRunning === true) {
      yearsInterval.current = setInterval(() => {
        setYears((_years) => _years + 1);
      }, 100);
    } else {
      stopYearCounter();
    }
  }, [yearsRunning, stopYearCounter]);

  useEffect(() => {
    if (years >= totalYears) stopYearCounter();
  }, [totalYears, years, stopYearCounter]);

  useEffect(() => {
    if (inView === true && yearsRunning === true) {
      resetYearCounter();
    }
  }, [inView, yearsRunning]);

  return <Title size={1}>{years} YEARS</Title>;
};

export default HomeExperiencesTitleYears;
