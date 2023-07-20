export type ExperienceRoleType = {
  title: string;
  month_started: number;
  year_started: number;
  month_ended?: number;
  year_ended?: number;
};

export type ExperienceRolesType = ExperienceRoleType[];

export type ExperienceType = {
  id: string;
  company: string;
  image: string;
  roles: ExperienceRolesType;
};

export type ExperiencesType = ExperienceType[];

export type ExperienceCompleteType = ExperienceRoleType & {
  company: string;
  image: string;
};
