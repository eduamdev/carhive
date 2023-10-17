import { Suspense } from 'react';
import type { Metadata } from 'next';

import { SiteHeader } from '@/components/site-header';
import { SearchForm } from '@/components/search-form';
import { SiteFooter } from '@/components/site-footer';

export const metadata: Metadata = {
  title: 'Cars',
};

interface CarsLayoutProps {
  children: React.ReactNode;
}

export default function CarsLayout({ children }: CarsLayoutProps) {
  return (
    <>
      <div className="sticky top-0 z-30 h-[var(--header-gap)] w-full bg-white shadow-[inset_0_-1px_0_0_#eaeaea]">
        <div className="shadow-[inset_0_-1px_0_0_#eaeaea]">
          <div className="mx-auto h-[var(--site-header-height)] w-full max-w-none px-5 sm:max-w-none sm:px-6">
            <SiteHeader />
          </div>
        </div>
        <div className="h-[var(--search-bar-height)]">
          <div className="-mt-2 hidden h-full items-center justify-center lg:flex">
            <Suspense>
              <SearchForm compact />
            </Suspense>
          </div>
        </div>
      </div>
      <div className="mx-auto w-full max-w-none">
        <main>{children}</main>
      </div>
      <SiteFooter />
    </>
  );
}
