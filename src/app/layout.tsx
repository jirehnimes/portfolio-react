import { config as FontAwesomeConfig } from '@fortawesome/fontawesome-svg-core';
// prettier-ignore
import { ReactNode } from 'react';

import { Footer, Sidebar } from '@/components/app';
import { fontInter } from '@/consts/fonts.const';

import '@fortawesome/fontawesome-svg-core/styles.css';
import '../styles/app.sass';

FontAwesomeConfig.autoAddCss = false;

type LayoutPropsType = {
  children: ReactNode;
};

export const metadata = {
  title: 'Jireh Nimes',
  description: 'My portfolio website using NextJS and React 18',
};

export default function RootLayout({ children }: LayoutPropsType) {
  return (
    <html lang='en'>
      <body className={fontInter.className}>
        {children}
        <Sidebar />
        <Footer />
      </body>
    </html>
  );
}
