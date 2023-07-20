'use client';

export type SidebarItemPropsType = {
  name: string;
  callback?: () => void;
};

const SidebarItem = ({ name, callback }: SidebarItemPropsType) => {
  return (
    <div
      className='sidebar__item'
      onClick={callback}
    >
      <p>{name}</p>
      <div className='sidebar__item--expand'>
        <p>{name}</p>
      </div>
    </div>
  );
};

export default SidebarItem;
