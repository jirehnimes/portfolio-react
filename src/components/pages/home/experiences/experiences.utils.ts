import experiences from './experiences';
import {
  ExperienceType,
  ExperienceRoleType,
  ExperienceCompleteType,
} from './experiences.types';

const foo = experiences.reduce(
  (accumulated: any, current: ExperienceType): ExperienceCompleteType[] => {
    return [
      ...accumulated,
      ...current.roles.map((role: ExperienceRoleType) => ({
        company: current.company,
        ...role,
      })),
    ];
  },
  [],
);

// foo;

// const monthYearString = (month: number, year: number, isStart = true) => `${String(month).padStart(2, '0')

const getLastDayOfMonthYear = (year: number, month: number) =>
  new Date(year, month, 0);

// const getTimeOfMonthYear = (month: number, year: number, isStart = true) => {
//   return new Date(y, m, isStart === true ? 1 : ).getTime();
// };

foo.sort((previous: ExperienceCompleteType, next: ExperienceCompleteType) => {
  return previous.year_started - next.year_started;
});

foo;

const y = 2021;
const m = 2;
// const z = new Date(y, m, 1).getTime();
const z = getLastDayOfMonthYear(y, m);
z;
