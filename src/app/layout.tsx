import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';
import { Inter } from 'next/font/google';
import { ReactNode } from 'react';
import { Footer, Sidebar } from '@/components/app';
import '../styles/app.sass';

config.autoAddCss = false;

type LayoutPropsType = {
  children: ReactNode;
};

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Jireh Nimes',
  description: 'My portfolio website using NextJS and React 18',
};

export default function RootLayout({ children }: LayoutPropsType) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        {children}
        <Sidebar />
        <Footer />
      </body>
    </html>
  );
}
