'use client';

import { ReactNode } from 'react';

type SectionHomePropsType = { children?: ReactNode };

const SectionHome = ({ children }: SectionHomePropsType) => {
  return <section className='section'>{children}</section>;
};

export default SectionHome;
