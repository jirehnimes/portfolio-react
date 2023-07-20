'use client';

// eslint-disable-next-line object-curly-newline
import Image from 'next/image';

// import experiences from '../experiences';
import { ExperienceType } from '../experiences.types';
import { getUniqueCompanies } from '../experiences.utils';

const HomeExperiencesListCompanies = () => {
  return (
    <div>
      {getUniqueCompanies().map((experience: ExperienceType) => {
        return (
          <Image
            key={experience.company}
            src={experience.image}
            alt={experience.company}
            width={200}
            height={200}
          />
        );
      })}
    </div>
  );
};

export default HomeExperiencesListCompanies;
