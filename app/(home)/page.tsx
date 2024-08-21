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
        <BrowseCarTypes />
        <PopularDestinations />
        <Features />
        <Testimonials />
        <CallToAction />
      </main>
    </>
  );
}
