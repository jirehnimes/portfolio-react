'use client';

import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { FC, useState } from 'react';
import { Button, Icon } from '@/components/common';
import { THEME } from '@/consts/common.const';

const ButtonToggleTheme: FC = () => {
  const [isDark, setIsDark] = useState<boolean>(false);

  const changeTheme = () => {
    const domBody: HTMLBodyElement | null = document.querySelector('body');

    domBody?.classList.remove(THEME.DARK);

    if (!isDark === true) domBody?.classList.add(THEME.DARK);

    setIsDark(!isDark);
  };

  return (
    <Button
      className={`button--toggle-theme is-ghost`}
      onClick={changeTheme}
    >
      <div className='button--toggle-theme__light'>
        <Icon icon={faSun} />
      </div>
      <div className='button--toggle-theme__dark'>
        <Icon icon={faMoon} />
      </div>
      <span className='button--toggle-theme__slider' />
    </Button>
  );
};

export default ButtonToggleTheme;
