'use client';

import { ReactNode } from 'react';

import styles from './Section.module.sass';

type SectionPropsType = {
  above?: boolean;
  children?: ReactNode;
};

const Section = ({ above, children }: SectionPropsType) => {
  const classAbove = !!above === true ? 'above' : '';

  return (
    <section className={`section ${styles.section} ${classAbove}`}>
      {children}
    </section>
  );
};

export default Section;
