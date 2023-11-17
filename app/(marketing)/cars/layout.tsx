import type { Metadata } from 'next';

import { CarsHeader } from './components/header';
import { SiteFooter } from '@/app/components/site-footer';

export const metadata: Metadata = {
  title: 'Cars',
};

interface CarsLayoutProps {
  children: React.ReactNode;
}

export default function CarsLayout({ children }: CarsLayoutProps) {
  return (
    <>
      <CarsHeader />
      <div className="mx-auto w-full max-w-none">
        <main>{children}</main>
      </div>
      <SiteFooter />
    </>
  );
}
