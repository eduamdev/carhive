import type { Metadata } from 'next';

import { CarsHeader } from '@/components/cars/header';
import { SiteFooter } from '@/components/layout/site-footer';

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
