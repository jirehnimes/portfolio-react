import { config as FontAwesomeConfig } from '@fortawesome/fontawesome-svg-core';
import { Inter } from 'next/font/google';
// prettier-ignore
import { ReactNode } from 'react';

import { Footer, Sidebar } from '@/components/app';

import '@fortawesome/fontawesome-svg-core/styles.css';
import '../styles/app.sass';

FontAwesomeConfig.autoAddCss = false;

type LayoutPropsType = {
  children: ReactNode;
};

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata = {
  title: 'Jireh Nimes',
  description: 'My portfolio website using NextJS and React 18',
};

export default function RootLayout({ children }: LayoutPropsType) {
  return (
    <html lang='en'>
      <body className={inter.variable}>
        {children}
        <Sidebar />
        <Footer />
      </body>
    </html>
  );
}
