'use client';

import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { Button, Icon } from '@/components/common';
import { THEME } from '@/consts/common.const';

const ButtonToggleTheme = () => {
  const [isDark, setIsDark] = useState<boolean>(false);

  const changeTheme = () => {
    const domBody: HTMLBodyElement | null = document.querySelector('body');

    domBody?.classList.remove(THEME.DARK);

    if (!isDark === true) domBody?.classList.add(THEME.DARK);

    setIsDark(!isDark);
  };

  const buttonIcon = () => (isDark === true ? faSun : faMoon);

  return (
    <Button
      className={`button--toggle-theme is-ghost`}
      onClick={changeTheme}
    >
      <Icon icon={buttonIcon()} />
    </Button>
  );
};

export default ButtonToggleTheme;
