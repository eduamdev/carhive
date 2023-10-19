import type { Metadata } from 'next';

import { SiteFooter } from '@/components/site-footer';
import { CarsHeader } from './header';

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
