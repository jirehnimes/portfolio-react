'use client';

import ButtonToTop from '../button-to-top';
import ButtonToggleTheme from '../button-toggle-theme';
import Logo from '../logo/Logo';

const Sidebar = () => {
  return (
    <aside className='sidebar'>
      <Logo />
      <ButtonToggleTheme />
      <ButtonToTop />
    </aside>
  );
};

export default Sidebar;
