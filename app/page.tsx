import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';
import { Hero } from '@/components/hero';
import { PopularCarTypes } from '@/components/popular-car-types';
import { TrendingDestinations } from '@/components/trending-destinations';
import { Features } from '@/components/features';
import { Testimonials } from '@/components/testimonials';
import { CallToAction } from '@/components/call-to-action';

export default function HomePage() {
  return (
    <>
      <div className="sticky top-0 z-30 bg-white shadow-[inset_0_-1px_0_0_#eaeaea]">
        <div className="mx-auto h-[var(--site-header-height)] w-full max-w-none px-5 sm:max-w-[90%] sm:px-0 2xl:max-w-8xl">
          <SiteHeader />
        </div>
      </div>
      <main>
        <Hero />
        <PopularCarTypes />
        <TrendingDestinations />
        <Features />
        <Testimonials />
        <CallToAction />
      </main>
      <SiteFooter />
    </>
  );
}
