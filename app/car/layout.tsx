import React from 'react';
import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';

interface CarLayoutProps {
  children: React.ReactNode;
}

export default function CarLayout({ children }: CarLayoutProps) {
  return (
    <>
      <div className="sticky top-0 z-20 border-b border-black/10 bg-white">
        <div className="mx-auto h-[var(--header-height)] w-full max-w-none px-5 sm:max-w-[90%] sm:px-0 xl:max-w-6xl">
          <SiteHeader />
        </div>
      </div>
      <main>{children}</main>
      <SiteFooter />
    </>
  );
}
