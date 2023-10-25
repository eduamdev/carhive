import Link from 'next/link';
import Image from 'next/image';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { getMinPrice } from '@/lib/cars';
import { formatCurrency } from '@/lib/utils';
import { ESearchParams } from '@/types/filters';

import paris from '/public/locations/paris.avif';
import dubai from '/public/locations/dubai.avif';
import cancun from '/public/locations/cancun.avif';
import rome from '/public/locations/rome.avif';

export function TrendingPlaces() {
  const MIN_PRICE: number = getMinPrice();

  return (
    <section className="pt-10">
      <div className="mx-auto w-full max-w-none px-5 sm:max-w-[90%] sm:px-0 2xl:max-w-8xl">
        <h2 className="text-2xl font-bold">
          Renting Trends: Must-Visit Places
        </h2>
        <div className="group -mx-2 mt-8 grid grid-cols-1 items-center justify-between sm:grid-cols-2 lg:grid-cols-4 [&_a:hover_img]:!opacity-100">
          {/* Paris */}
          <Link
            href={{
              pathname: '/cars',
              query: {
                [ESearchParams.LOCATION]: 'paris',
              },
            }}
            className="px-2 pb-4 pt-1 lg:pb-1"
          >
            <div className="h-full w-full group-hover:[&_img]:opacity-50">
              <AspectRatio ratio={1 / 1}>
                <Image
                  src={paris}
                  alt="Effiel Tower at Sunset"
                  fill
                  sizes="(max-width: 549px) 100vw, (max-width: 1127px) 50vw, 25vw"
                  className="h-full w-full rounded-2xl border object-cover object-center transition-opacity duration-150"
                  placeholder="blur"
                />
              </AspectRatio>
            </div>
            <div className="mt-3">
              <h3 className="text-[15px] font-semibold">Paris, France</h3>
              <p className="mt-1 text-sm text-neutral-600">
                Cars from {formatCurrency(MIN_PRICE, 'MXN')}+
              </p>
            </div>
          </Link>
          {/* Dubai */}
          <Link
            href={{
              pathname: '/cars',
              query: {
                [ESearchParams.LOCATION]: 'dubai',
              },
            }}
            className="px-2 pb-4 pt-1 lg:pb-1"
          >
            <div className="h-full w-full group-hover:[&_img]:opacity-50">
              <AspectRatio ratio={1 / 1}>
                <Image
                  src={dubai}
                  alt="an aerial view of the burj al arab in the middle of the ocean"
                  fill
                  sizes="(max-width: 549px) 100vw, (max-width: 1127px) 50vw, 25vw"
                  className="h-full w-full rounded-2xl border object-cover object-center transition-opacity duration-150"
                  placeholder="blur"
                />
              </AspectRatio>
            </div>
            <div className="mt-3">
              <h3 className="text-[15px] font-semibold">
                Dubai, United Arab Emirates
              </h3>
              <p className="mt-1 text-sm text-neutral-600">
                Cars from {formatCurrency(MIN_PRICE, 'MXN')}+
              </p>
            </div>
          </Link>
          {/* Cancun */}
          <Link
            href={{
              pathname: '/cars',
              query: {
                [ESearchParams.LOCATION]: 'cancun',
              },
            }}
            className="px-2 pb-4 pt-1 lg:pb-1"
          >
            <div className="h-full w-full group-hover:[&_img]:opacity-50">
              <AspectRatio ratio={1 / 1}>
                <Image
                  src={cancun}
                  alt="green palm trees near body of water during daytime in Cancun, Mexico"
                  fill
                  sizes="(max-width: 549px) 100vw, (max-width: 1127px) 50vw, 25vw"
                  className="h-full w-full rounded-2xl border object-cover object-center transition-opacity duration-150"
                  placeholder="blur"
                />
              </AspectRatio>
            </div>
            <div className="mt-3">
              <h3 className="text-[15px] font-semibold">Cancún, México</h3>
              <p className="mt-1 text-sm text-neutral-600">
                Cars from {formatCurrency(MIN_PRICE, 'MXN')}+
              </p>
            </div>
          </Link>
          {/* Rome */}
          <Link
            href={{
              pathname: '/cars',
              query: {
                [ESearchParams.LOCATION]: 'rome',
              },
            }}
            className="px-2 pb-4 pt-1 lg:pb-1"
          >
            <div className="h-full w-full group-hover:[&_img]:opacity-50">
              <AspectRatio ratio={1 / 1}>
                <Image
                  src={rome}
                  alt="an aerial view from the top of the Vatican in Rome"
                  fill
                  sizes="(max-width: 549px) 100vw, (max-width: 1127px) 50vw, 25vw"
                  className="h-full w-full rounded-2xl border object-cover object-center transition-opacity duration-150"
                  placeholder="blur"
                />
              </AspectRatio>
            </div>
            <div className="mt-3">
              <h3 className="text-[15px] font-semibold">Rome, Italy</h3>
              <p className="mt-1 text-sm text-neutral-600">
                Cars from {formatCurrency(MIN_PRICE, 'MXN')}+
              </p>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
