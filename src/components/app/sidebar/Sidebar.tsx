'use client';

import ButtonToTop from '../button-to-top';
import ButtonToggleTheme from '../button-toggle-theme';
import Logo from '../logo';
import SidebarItem from './sidebar-item';

const Sidebar = () => {
  return (
    <aside className='sidebar'>
      <Logo />

      <div className='sidebar__list'>
        <SidebarItem
          name='EXPERIENCES'
          callback={() => console.log('HAHAHAHA')}
        />
        <SidebarItem name='PORTFOLIO' />
      </div>

      <div className='sidebar__end'>
        <ButtonToggleTheme />
        <ButtonToTop />
      </div>
    </aside>
  );
};

export default Sidebar;
