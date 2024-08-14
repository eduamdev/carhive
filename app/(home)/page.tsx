import { SiteHeader } from '@/app/components/site-header';
import { SiteFooter } from '@/app/components/site-footer';

import { PopularCarTypes } from './sections/popular-car-types';
import { PopularPlaces } from './sections/popular-places';
import { Features } from './sections/features';
import { Testimonials } from './sections/testimonials';
import { CallToAction } from './sections/call-to-action';
import { CarSearchHero } from './sections/car-search-hero';

export default function HomePage() {
  return (
    <>
      <div className="sticky top-0 z-30 bg-[hsla(0,0%,100%,.8)] shadow-[inset_0_-1px_0_0_#eaeaea] backdrop-blur-[5px] backdrop-saturate-[1.8]">
        <div className="mx-auto h-[var(--site-header-height)] w-full max-w-none px-5 sm:max-w-[90%] sm:px-0 2xl:max-w-8xl">
          <SiteHeader />
        </div>
      </div>
      <main>
        <CarSearchHero />
        <PopularCarTypes />
        <PopularPlaces />
        <Features />
        <Testimonials />
        <CallToAction />
      </main>
      <SiteFooter />
    </>
  );
}