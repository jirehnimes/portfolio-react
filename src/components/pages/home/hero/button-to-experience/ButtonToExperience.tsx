'use client';

import { Button, Icon } from '@/components/common';
import { scrollTo } from '@/utils/common.util';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

const goToExperience = () => {
  scrollTo(document.querySelector('.home__experiences'));
};

const ButtonToExperience = () => {
  return (
    <Button
      className='button--to-experience is-ghost'
      onClick={goToExperience}
    >
      <div className='container'>
        <p>Know More</p>
        <Icon icon={faChevronDown} />
      </div>
    </Button>
  );
};

export default ButtonToExperience;
