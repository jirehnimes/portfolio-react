'use client';

import { ReactNode } from 'react';

type SectionPropsType = {
  title?: string;
  subTitle?: string;
  above?: boolean;
  children?: ReactNode;
};

const Section = ({
  // prettier-ignore
  title,
  subTitle,
  above,
  children,
}: SectionPropsType) => {
  const classAbove = !!above === true ? 'above' : '';

  return (
    <section className={`section ${classAbove}`}>
      <div className='container'>{children}</div>
    </section>
  );
};

export default Section;
