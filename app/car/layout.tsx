import React from 'react';

import { SiteHeader } from '@/components/layout/site-header';
import { SiteFooter } from '@/components/layout/site-footer';

interface CarLayoutProps {
  children: React.ReactNode;
}

export default function CarLayout({ children }: CarLayoutProps) {
  return (
    <>
      <div className="sticky top-0 z-30 bg-[hsla(0,0%,100%,.8)] shadow-[inset_0_-1px_0_0_#eaeaea] backdrop-blur-[5px] backdrop-saturate-[1.8]">
        <div className="mx-auto h-[var(--site-header-height)] w-full max-w-none px-5 sm:max-w-[90%] sm:px-0 xl:max-w-6xl">
          <SiteHeader />
        </div>
      </div>
      <main>{children}</main>
      <div className="mx-auto w-full max-w-none xl:max-w-6xl">
        <SiteFooter />
      </div>
    </>
  );
}
