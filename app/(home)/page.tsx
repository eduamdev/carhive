import { SiteHeader } from '@/app/components/site-header';
import { Hero } from './sections/hero';
import { BrowseCarTypes } from './sections/browse-car-types';
import { PopularDestinations } from './sections/popular-destinations';
import { Features } from './sections/features';
import { Testimonials } from './sections/testimonials';
import { CallToAction } from './sections/call-to-action';

export default function HomePage() {
  return (
    <>
      <div className="sticky top-0 z-40 bg-[hsla(0,0%,100%,.8)] shadow-[inset_0_-1px_0_0_#eaeaea] backdrop-blur-[5px] backdrop-saturate-[1.8]">
        <div className="mx-auto h-[var(--site-header-height)] w-full max-w-none px-5 sm:max-w-[90%] sm:px-0 2xl:max-w-8xl">
          <SiteHeader />
        </div>
      </div>
      <main>
        <Hero />
        <div className="pt-12 lg:pt-14">
          <BrowseCarTypes />
        </div>
        <div className="py-12 lg:py-16">
          <PopularDestinations />
        </div>
        <div className="border-y border-neutral-900/5">
          <div className="py-12 md:py-16">
            <Features />
          </div>
        </div>
        <div className="pt-12 lg:pt-14">
          <Testimonials />
        </div>
        <div className="pb-12 pt-24 sm:pb-20 sm:pt-36">
          <CallToAction />
        </div>
      </main>
    </>
  );
}
