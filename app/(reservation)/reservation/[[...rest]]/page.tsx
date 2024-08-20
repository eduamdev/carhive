import Link from 'next/link';
import { CloudinaryImage } from '@/app/components/cloudinary-image';
import { Button } from '@/app/components/ui/button';
import { Separator } from '@/app/components/ui/separator';
import { siteConfig } from '@/config/site';
import { formatCurrency } from '@/app/lib/utils';
import { NavigateBack } from '../components/navigate-back';
import { SearchParams } from '@/app/lib/types';
import { getCarBySlug, getLocationBySlug } from '@/db/queries';
import { formatDates } from '../lib/dates';
import { differenceInDays } from 'date-fns';
import { SignIn, SignedIn, SignedOut } from '@clerk/nextjs';
import { CarhiveLogo } from '@/app/components/icons/carhive-logo';
import { FilledStarIcon } from '@/app/components/icons/filled-star';

interface ReservationPageProps {
  searchParams: {
    [SearchParams.CAR_SLUG]: string;
    [SearchParams.LOCATION]: string;
    [SearchParams.CHECKIN]: string;
    [SearchParams.CHECKOUT]: string;
  };
}

export default async function ReservationPage({
  searchParams,
}: ReservationPageProps) {
  const {
    [SearchParams.CAR_SLUG]: carSlug,
    location: locationSlug,
    checkin,
    checkout,
  } = searchParams;

  const [car, location] = await Promise.all([
    getCarBySlug(carSlug),
    getLocationBySlug(locationSlug),
  ]);

  if (!car) {
    throw new Error('Car is required to make a reservation.');
  }

  if (!location) {
    throw new Error('Location is required to make a reservation.');
  }

  const bodyStyle = car.body_style;
  const carName = car.name;
  const rating = car.rating;
  const reviews = car.reviews;
  const pricePerDay = car.discounted_price_per_day || car.retail_price_per_day;
  const currency = car.discounted_price_currency || car.retail_price_currency;

  const days = differenceInDays(new Date(checkout), new Date(checkin));
  const subtotal = pricePerDay * days;
  const taxesAndFees = subtotal * 0.16;

  return (
    <>
      <div className="hidden h-[var(--site-header-height)] w-full pl-6 shadow-[inset_0_-1px_0_0_#eaeaea] md:block">
        <header className="flex h-full items-center">
          <Link href="/" className="z-20">
            <CarhiveLogo className="h-[18px] shrink-0" />
          </Link>
        </header>
      </div>
      <div className="sticky top-0 z-30 bg-white p-5 shadow-[inset_0_-1px_0_0_#eaeaea] md:hidden">
        <div className="relative h-full">
          <div className="flex items-center justify-center">
            <SignedOut>
              <h1 className="text-base font-semibold">Request to book</h1>
            </SignedOut>
            <SignedIn>
              <h1 className="text-base font-semibold">Confirm and pay</h1>
            </SignedIn>
            <div className="absolute inset-y-auto -left-2.5">
              <NavigateBack />
            </div>
          </div>
        </div>
      </div>
      <main>
        <div className="mx-auto w-full max-w-none px-5 sm:max-w-[90%] sm:px-0 xl:max-w-6xl">
          <div className="hidden h-[160px] pb-8 md:block">
            <div className="flex h-32 items-center pb-6 pt-20">
              <div className="relative">
                <SignedOut>
                  <h1 className="text-3xl font-semibold">Request to book</h1>
                </SignedOut>
                <SignedIn>
                  <h1 className="text-3xl font-semibold">Confirm and pay</h1>
                </SignedIn>
                <div className="absolute -left-11 top-0">
                  <NavigateBack />
                </div>
              </div>
            </div>
          </div>
          <div className="flex w-full flex-col-reverse md:grid md:grid-cols-[1fr_0.85fr] md:gap-x-24">
            <div className="mb-16 md:hidden">
              <Separator orientation="horizontal" decorative className="my-8" />
              <SignedOut>
                <SignIn />
              </SignedOut>
              <SignedIn>
                <Button size="lg" className="w-full text-lg">
                  Pay
                </Button>
              </SignedIn>
            </div>
            <div className="md:hidden">
              <div>
                <h2 className="text-xl font-semibold">Price details</h2>
                <div className="flex flex-col gap-y-3 pt-6 text-neutral-600">
                  <div className="flex items-center justify-between">
                    <span className="underline">
                      {formatCurrency(pricePerDay, currency)} x {days} days
                    </span>
                    <span>{formatCurrency(subtotal, currency)}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="underline">Taxes and fees</span>
                    <span>{formatCurrency(taxesAndFees, currency)}</span>
                  </div>
                </div>
              </div>
              <Separator decorative orientation="horizontal" className="my-6" />
              <div className="flex items-center justify-between font-semibold">
                <span>Total ({currency})</span>
                <span>{formatCurrency(subtotal + taxesAndFees, currency)}</span>
              </div>
            </div>
            <div className="md:mb-16">
              <h2 className="text-xl font-semibold">Your reservation</h2>
              <div className="mt-5">
                <div className="space-y-1">
                  <h3 className="text-base">
                    <strong>Dates</strong>
                  </h3>
                  <p className="text-neutral-600">
                    {formatDates(checkin, checkout)}
                  </p>
                </div>
                <div className="mt-5 space-y-1">
                  <h3 className="text-base">
                    <strong>Place</strong>
                  </h3>
                  <p className="text-neutral-600">{location.name}</p>
                </div>
              </div>
              <Separator orientation="horizontal" decorative className="my-8" />
              <div className="hidden pt-4 md:block">
                <SignedOut>
                  <SignIn />
                </SignedOut>
                <SignedIn>
                  <Button size="lg" className="w-full text-lg">
                    Pay
                  </Button>
                </SignedIn>
              </div>
            </div>
            <div className="mb-10 mt-4 normal-nums md:mb-20 md:mt-0">
              <div className="sticky top-[calc(var(--site-header-height)_+_160px)] rounded-xl md:border md:p-6">
                <div className="flex flex-row gap-x-5">
                  <CloudinaryImage
                    src={car.image_url}
                    alt={car.name}
                    className="h-[36px] w-[64px] shrink-0 grow-0"
                    height={36}
                    width={64}
                    priority
                  />
                  <div className="grid grid-cols-1 grid-rows-1 items-start justify-between">
                    <div>
                      <span className="text-[13px] text-neutral-600">
                        {bodyStyle}
                      </span>
                      <p className="text-sm">{carName}</p>
                    </div>
                    <div className="flex items-baseline space-x-1 text-xs">
                      <FilledStarIcon className="size-3 shrink-0" />
                      <span className="font-semibold">{rating}</span>
                      <span className="mt-5 text-neutral-600">
                        ({reviews} reviews)
                      </span>
                    </div>
                  </div>
                </div>
                <Separator
                  decorative
                  orientation="horizontal"
                  className="my-6"
                />
                <div className="hidden md:block">
                  <div>
                    <h2 className="text-xl font-semibold">Price details</h2>
                    <div className="flex flex-col gap-y-3 pt-6 text-neutral-600">
                      <div className="flex items-center justify-between">
                        <span className="underline">
                          {formatCurrency(pricePerDay, currency)} x {days} days
                        </span>
                        <span>{formatCurrency(subtotal, currency)}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="underline">Taxes and fees</span>
                        <span>{formatCurrency(taxesAndFees, currency)}</span>
                      </div>
                    </div>
                  </div>
                  <Separator
                    decorative
                    orientation="horizontal"
                    className="my-6"
                  />
                  <div className="flex items-center justify-between font-semibold">
                    <span>Total ({currency})</span>
                    <span>
                      {formatCurrency(subtotal + taxesAndFees, currency)}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <div className="mx-auto w-full max-w-none">
        <div className="border-t py-10">
          <footer className="mx-auto w-full max-w-none px-5 sm:max-w-[90%] sm:px-0 xl:max-w-8xl">
            <div>
              <p className="text-sm text-neutral-600">
                Built by{' '}
                <a
                  href={siteConfig.author.url}
                  target="_blank"
                  rel="noreferrer"
                >
                  <strong>eduamdev</strong>
                </a>
                . The source code is available on{' '}
                <a
                  href={`${siteConfig.links.github}/carhive`}
                  target="_blank"
                  rel="noreferrer"
                >
                  <strong>GitHub</strong>
                </a>
                .
              </p>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
}
