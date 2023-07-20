import experiences from './experiences';
import {
  ExperienceCompleteType,
  ExperienceRoleType,
  ExperienceType,
} from './experiences.types';

export const flattenExperiences = () =>
  experiences.reduce(
    (accumulated: any, current: ExperienceType): ExperienceCompleteType[] => {
      return [
        ...accumulated,
        ...current.roles.map((role: ExperienceRoleType) => ({
          company: current.company,
          image: current.image,
          ...role,
        })),
      ];
    },
    [],
  );

export const getUniqueCompanies = () => {
  const checker: string[] = [];

  return experiences.reduce(
    (accumulator: any[], experience: ExperienceType) => {
      if (checker.includes(experience.id) === false) {
        checker.push(experience.id);

        return [...accumulator, experience];
      }

      return accumulator;
    },
    [],
  );
};
