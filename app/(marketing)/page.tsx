import { Suspense } from 'react';
import Link from 'next/link';
import Image, { StaticImageData } from 'next/image';

import { ScrollArea, ScrollBar } from '@/app/components/ui/scroll-area';
import { Skeleton } from '@/app/components/ui/skeleton';
import { AspectRatio } from '@/app/components/ui/aspect-ratio';
import { Button } from '@/app/components/ui/button';
import { SiteHeader } from '@/app/components/site-header';
import { SiteFooter } from '@/app/components/site-footer';
import { HeroSkeleton } from '@/app/components/skeletons';
import { LogoSlider } from '@/app/components/logo-slider';
import { Icons } from '@/app/components/icons';
import { SearchForm } from '@/app/components/search-form';
import { bodyStyles } from '@/app/(marketing)/cars/components/filters';

import hatchback from '/public/images/cars/body-styles/hatchback.avif';
import minivan from '/public/images/cars/body-styles/minivan.avif';
import pickupTruck from '/public/images/cars/body-styles/pickup-truck.avif';
import sportsCar from '/public/images/cars/body-styles/sports-car.avif';
import suv from '/public/images/cars/body-styles/suv.avif';
import sedan from '/public/images/cars/body-styles/sedan.avif';

import paris from '/public/images/locations/paris.avif';
import dubai from '/public/images/locations/dubai.avif';
import cancun from '/public/images/locations/cancun.avif';
import rome from '/public/images/locations/rome.avif';

import {
  fetchLocations,
  fetchFeaturedLocations,
  getMinPriceFromCars,
  fetchTestimonials,
} from '@/db/queries';
import { formatCurrency } from '@/app/lib/utils';
import { SearchParams } from '@/app/lib/types';

export default function HomePage() {
  return (
    <>
      <div className="sticky top-0 z-30 bg-[hsla(0,0%,100%,.8)] shadow-[inset_0_-1px_0_0_#eaeaea] backdrop-blur-[5px] backdrop-saturate-[1.8]">
        <div className="mx-auto h-[var(--site-header-height)] w-full max-w-none px-5 sm:max-w-[90%] sm:px-0 2xl:max-w-8xl">
          <SiteHeader />
        </div>
      </div>
      <main>
        <Suspense fallback={<HeroSkeleton />}>
          <Hero />
        </Suspense>
        <BodyStyleCarExplorer />
        <DestinationCarExplorer />
        <Features />
        <Testimonials />
        <CarExplorer />
      </main>
      <SiteFooter />
    </>
  );
}

async function Hero() {
  const locations = await fetchLocations();

  return (
    <section className="bg-gradient-to-b from-white via-neutral-50 to-neutral-50 pt-12">
      <h1 className="text-center text-3xl font-extrabold">Find your car</h1>
      <div className="mx-auto mt-6 grid max-w-4xl grid-cols-1 items-center justify-center gap-4 md:flex md:flex-row md:gap-12">
        <div className="flex items-center justify-center gap-1.5">
          <Icons.checkCircle className="h-5 w-5 shrink-0 text-green-600" />
          <span className="text-sm text-neutral-900">No hidden fees.</span>
        </div>
        <div className="flex items-center justify-center gap-1.5">
          <Icons.checkCircle className="h-5 w-5 shrink-0 text-green-600" />
          <span className="text-sm text-neutral-900">Transparent pricing.</span>
        </div>
        <div className="flex items-center justify-center gap-1.5">
          <Icons.checkCircle className="h-5 w-5 shrink-0 text-green-600" />
          <span className="text-sm text-neutral-900">
            Flexible cancellations.
          </span>
        </div>
      </div>
      <div className="mt-5 hidden md:block">
        <SearchForm locations={locations} />
      </div>
      <LogoSlider />
    </section>
  );
}

function BodyStyleCarExplorer() {
  const imageMap = {
    hatchback: hatchback,
    minivan: minivan,
    'pickup-truck': pickupTruck,
    'sports-car': sportsCar,
    suv: suv,
    sedan: sedan,
  };

  return (
    <section className="border-t pt-10">
      <div className="mx-auto w-full max-w-none px-5 sm:max-w-[90%] sm:px-0 2xl:max-w-8xl">
        <h2 className="text-2xl font-bold">Popular Rental Car Choices</h2>
        <div className="relative mt-8 before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-[5%] before:bg-gradient-to-r before:from-white before:content-[''] after:absolute after:right-0 after:top-0 after:z-10 after:h-full after:w-[5%] after:bg-gradient-to-l after:from-white after:content-['']">
          <ScrollArea>
            <div className="mb-3 whitespace-nowrap">
              {bodyStyles.map(({ slug, name }) => {
                const imageUrl = imageMap[slug];

                return (
                  <div
                    key={slug}
                    className="relative mr-1.5 inline-block h-36 w-[250px]"
                  >
                    <Link
                      href={{
                        pathname: '/cars',
                        query: {
                          [SearchParams.BODY_STYLE]: slug,
                        },
                      }}
                      className="absolute inset-0 z-20 rounded-2xl border"
                    >
                      <span className="sr-only">{name}</span>
                    </Link>
                    <div className="absolute left-3.5 top-3 z-10 flex items-center justify-center leading-none">
                      <span className="rounded-md border bg-white px-2.5 py-1.5 text-[15px] font-semibold text-neutral-800">
                        {name}
                      </span>
                    </div>
                    {imageUrl ? (
                      <Image
                        priority
                        src={imageUrl}
                        alt={name}
                        width={250}
                        height={144}
                        className="h-full w-full rounded-2xl bg-gradient-to-r from-[#f9f9f9] to-[#e9e9e9] object-cover object-center"
                        placeholder="blur"
                      />
                    ) : (
                      <Skeleton className="h-full w-full rounded-2xl" />
                    )}
                  </div>
                );
              })}
              <ScrollBar orientation="horizontal" />
            </div>
          </ScrollArea>
        </div>
      </div>
    </section>
  );
}

async function DestinationCarExplorer() {
  const imageMap: { [key: string]: StaticImageData } = {
    paris: paris,
    dubai: dubai,
    cancun: cancun,
    rome: rome,
  };

  const currency = 'MXN';
  const [featuredLocations, minPrice] = await Promise.all([
    fetchFeaturedLocations(),
    getMinPriceFromCars(),
  ]);

  return (
    <section className="pt-10">
      <div className="mx-auto w-full max-w-none px-5 sm:max-w-[90%] sm:px-0 2xl:max-w-8xl">
        <h2 className="text-2xl font-bold">
          Renting Trends: Must-Visit Places
        </h2>
        <div className="group -mx-2 mt-8 grid grid-cols-1 items-center justify-between sm:grid-cols-2 lg:grid-cols-4 [&_a:hover_img]:!opacity-100">
          {featuredLocations.map(({ id, value, name }) => {
            const imageUrl = imageMap[value];

            return (
              <Link
                key={id}
                href={{
                  pathname: '/cars',
                  query: {
                    [SearchParams.LOCATION]: value,
                  },
                }}
                className="px-2 pb-4 pt-1 lg:pb-1"
              >
                <div className="h-full w-full group-hover:[&_img]:opacity-50">
                  <AspectRatio ratio={1 / 1}>
                    {imageUrl ? (
                      <Image
                        src={imageUrl}
                        alt={name}
                        fill
                        sizes="(max-width: 549px) 100vw, (max-width: 1127px) 50vw, 25vw"
                        className="h-full w-full rounded-2xl border object-cover object-center transition-opacity duration-150"
                        placeholder="blur"
                      />
                    ) : (
                      <Skeleton className="h-full w-full rounded-2xl" />
                    )}
                  </AspectRatio>
                </div>
                <div className="mt-3">
                  <h3 className="text-[15px] font-semibold">{name}</h3>
                  {minPrice && (
                    <p className="mt-1 text-sm text-neutral-600">
                      Cars from {formatCurrency(minPrice, currency)}+
                    </p>
                  )}
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Features() {
  return (
    <section className="mt-10 border-t bg-neutral-50">
      <div className="mx-auto max-w-none px-5 py-14 sm:max-w-[90%] sm:px-0 lg:max-w-4xl">
        <h2 className="text-center text-2xl font-bold">
          Discover Why We Stand Out
        </h2>
        <div className="mt-12 grid grid-cols-1 items-center justify-center gap-8 md:grid-cols-3">
          <div className="flex flex-col items-center justify-center text-center md:items-start md:text-left">
            <div className="flex h-12 w-12 items-center justify-center rounded-full border bg-white">
              <Icons.sparkle className="h-6 w-6 text-neutral-500" />
            </div>
            <p className="mt-6 font-semibold">Hassle-Free Booking</p>
            <p className="mt-2 max-w-sm text-sm leading-6 text-neutral-600">
              Effortless booking process. Your perfect car, just a click away.
              Enjoy seamless reservations and unlock great deals instantly.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center text-center md:items-start md:text-left">
            <div className="flex h-12 w-12 items-center justify-center rounded-full border bg-white">
              <Icons.shieldCheck className="h-6 w-6 text-neutral-500" />
            </div>
            <p className="mt-6 font-semibold">Secure Rentals</p>
            <p className="mt-2 max-w-sm text-sm leading-6 text-neutral-600">
              Your safety assured. Rigorous checks, transparent policies, and
              comprehensive insurance. Travel worry-free with well-maintained
              vehicles and reliable, secure rental services.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center text-center md:items-start md:text-left">
            <div className="flex h-12 w-12 items-center justify-center rounded-full border bg-white">
              <Icons.navigationArrow className="h-6 w-6 text-neutral-500" />
            </div>
            <p className="mt-6 font-semibold">Easy Navigation</p>
            <p className="mt-2 max-w-sm text-sm leading-6 text-neutral-600">
              Explore with confidence. User-friendly navigation tools to find
              your way, making your travels smooth and enjoyable, wherever your
              destination may be.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

async function Testimonials() {
  const testimonials = await fetchTestimonials();

  return (
    <section className="border-t py-12">
      <div className="mx-auto max-w-none px-5 sm:max-w-[90%] sm:px-0 2xl:max-w-8xl">
        <h2 className="text-center text-2xl font-bold">Driven by Feedback</h2>
        <div className="mt-4 columns-1 sm:columns-2 lg:columns-4">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="pt-4">
              <figure className="rounded-2xl bg-neutral-50 p-8">
                <blockquote className="text-sm leading-6 text-neutral-700">
                  “{testimonial.comment}”
                </blockquote>
                <figcaption className="mt-6 flex items-center justify-start gap-5">
                  <Image
                    src={testimonial.image_url}
                    alt={testimonial.name}
                    height={40}
                    width={40}
                    className="h-10 w-10 rounded-full border bg-white"
                  />
                  <div>
                    <p className="text-sm font-semibold">{testimonial.name}</p>
                    <p className="mt-1 text-sm text-neutral-600">
                      @{testimonial.username}
                    </p>
                  </div>
                </figcaption>
              </figure>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CarExplorer() {
  return (
    <section className="border-t bg-white py-16">
      <div className="mx-auto max-w-none px-5 sm:max-w-[90%] sm:px-0 2xl:max-w-8xl">
        <div className="flex flex-col items-start justify-between gap-x-6 gap-y-9 md:flex-row md:items-center">
          <h2 className="text-2xl font-bold leading-9">
            <p>Your Journey Begins Here.</p>
            <p>Dive into Endless Possibilities!</p>
          </h2>
          <Button className="text-[15px] xl:hidden" asChild>
            <Link
              href="/cars"
              className="flex items-center justify-center gap-x-2.5"
            >
              Explore Cars <Icons.chevronForward className="h-3 w-3" />
            </Link>
          </Button>
          <Button size="xl" className="hidden text-[15px] xl:flex" asChild>
            <Link
              href="/cars"
              className="flex items-center justify-center gap-x-3"
            >
              Explore Cars{' '}
              <Icons.chevronForward className="h-[14px] w-[14px]" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
