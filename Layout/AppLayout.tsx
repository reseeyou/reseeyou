import { ReactNode } from 'react';
import { Footer } from '../components/Footer';

import { Header } from '../components/Header';

interface AppLayoutProps {
  children: ReactNode;
}

export const AppLayout = ({ children }: AppLayoutProps) => {
  return (
    <>
    <Header/>
    {children}
    <Footer/>
    </>
  );
};
