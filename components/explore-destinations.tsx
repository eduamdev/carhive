import Link from 'next/link';
import Image, { StaticImageData } from 'next/image';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Skeleton } from '@/components/ui/skeleton';

import paris from '/public/locations/paris.avif';
import dubai from '/public/locations/dubai.avif';
import cancun from '/public/locations/cancun.avif';
import rome from '/public/locations/rome.avif';

import { fetchFeaturedLocations, getMinPriceFromCars } from '@/db/queries';
import { formatCurrency } from '@/lib/utils';
import { SearchParams } from '@/lib/types';

const imageMap: { [key: string]: StaticImageData } = {
  paris: paris,
  dubai: dubai,
  cancun: cancun,
  rome: rome,
};

export async function ExploreDestinations() {
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
