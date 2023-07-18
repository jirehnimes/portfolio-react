'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { icon } from '@fortawesome/fontawesome-svg-core/import.macro';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';

export type IconPropsType = {
  icon: IconDefinition;
};

const Icon = ({ icon }: IconPropsType) => {
  return (
    <span className='icon'>
      <FontAwesomeIcon icon={icon} />
    </span>
  );
};

export default Icon;
