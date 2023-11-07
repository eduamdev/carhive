import { SiteHeader } from '@/components/layout/site-header';
import { SiteFooter } from '@/components/layout/site-footer';
import { Hero } from '@/components/hero';
import { CarBodyStyles } from '@/components/car-body-styles';
import { ExploreDestinations } from '@/components/explore-destinations';
import { Features } from '@/components/features';
import { Testimonials } from '@/components/testimonials';
import { ExploreCars } from '@/components/explore-cars';

export default function HomePage() {
  return (
    <>
      <div className="sticky top-0 z-30 bg-[hsla(0,0%,100%,.8)] shadow-[inset_0_-1px_0_0_#eaeaea] backdrop-blur-[5px] backdrop-saturate-[1.8]">
        <div className="mx-auto h-[var(--site-header-height)] w-full max-w-none px-5 sm:max-w-[90%] sm:px-0 2xl:max-w-8xl">
          <SiteHeader />
        </div>
      </div>
      <main>
        <Hero />
        <CarBodyStyles />
        <ExploreDestinations />
        <Features />
        <Testimonials />
        <ExploreCars />
      </main>
      <SiteFooter />
    </>
  );
}
