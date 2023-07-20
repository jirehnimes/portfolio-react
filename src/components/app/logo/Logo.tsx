'use client';

import Image, { ImageProps } from 'next/image';

type LogoPropsType = Partial<ImageProps>;

const Logo = ({ ...props }: LogoPropsType) => {
  return (
    <div className='logo-container'>
      <Image
        className='logo'
        {...props}
        src='/assets/images/logo.png'
        alt='Jireh Nimes'
        width={200}
        height={200}
      />
    </div>
  );
};

export default Logo;
