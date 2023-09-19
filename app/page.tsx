import { Hero } from '@/components/hero';
import { PopularCarTypes } from '@/components/popular-car-types';
import { TrendingDestinations } from '@/components/trending-destinations';
import { Features } from '@/components/features';
import { Testimonials } from '@/components/testimonials';
import { CallToAction } from '@/components/call-to-action';

export default function HomePage() {
  return (
    <main>
      <Hero />
      <PopularCarTypes />
      <TrendingDestinations />
      <Features />
      <Testimonials />
      <CallToAction />
    </main>
  );
}
