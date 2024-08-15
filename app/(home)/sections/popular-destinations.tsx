import Link from 'next/link';
import Image from 'next/image';
import { SearchParams } from '@/app/lib/types';
import { AspectRatio } from '@/app/components/ui/aspect-ratio';
import { formatCurrency } from '@/app/lib/utils';

import Cancun from '../../../public/assets/destinations/cancun.jpg';
import Dubai from '../../../public/assets/destinations/dubai.jpg';
import Paris from '../../../public/assets/destinations/paris.jpg';
import Rome from '../../../public/assets/destinations/rome.jpg';

export function PopularDestinations() {
  const currency = 'MXN';

  const trendingPlaces = [
    {
      id: 'cancun',
      slug: 'cancun',
      name: 'Cancún, México',
      image_url: Cancun,
      starting_price: 499,
    },
    {
      id: 'dubai',
      slug: 'dubai',
      name: 'Dubai, United Arab Emirates',
      image_url: Dubai,
      starting_price: 1199,
    },
    {
      id: 'italy',
      slug: 'italy',
      name: 'Rome, Italy',
      image_url: Rome,
      starting_price: 999,
    },
    {
      id: 'paris',
      slug: 'paris',
      name: 'Paris, France',
      image_url: Paris,
      starting_price: 699,
    },
  ];

  return (
    <section className="pb-7 pt-16">
      <div className="mx-auto w-full max-w-none px-5 sm:max-w-[90%] sm:px-0 2xl:max-w-8xl">
        <h2 className="text-balance text-lg font-bold md:text-xl lg:text-[22px]">
          Top Rental Destinations
        </h2>
        <div className="pt-4 md:pt-5">
          <div className="group -mx-2 grid grid-cols-2 items-center justify-between sm:-mx-3 sm:grid-cols-4 [&_a:hover_img]:!opacity-100">
            {trendingPlaces.map(
              ({ id, slug, image_url, name, starting_price }) => (
                <div key={id} className="mb-4 px-2 pt-1 md:px-3">
                  <Link
                    href={{
                      pathname: '/cars',
                      query: {
                        [SearchParams.LOCATION]: slug,
                      },
                    }}
                  >
                    <div className="size-full group-hover:[&_img]:opacity-50">
                      <AspectRatio ratio={1 / 1}>
                        <Image
                          priority
                          src={image_url}
                          alt={name}
                          fill
                          sizes="(max-width: 549px) 100vw, (max-width: 1127px) 50vw, 25vw"
                          className="size-full rounded-2xl border object-cover object-center transition-opacity duration-150"
                        />
                      </AspectRatio>
                    </div>
                    <div className="pt-3">
                      <h3 className="truncate text-[15px] font-semibold">
                        {name}
                      </h3>
                    </div>
                    <div className="pt-1">
                      <p className="truncate text-[13px] text-neutral-600 md:text-sm">
                        Cars from {formatCurrency(starting_price, currency)}+
                      </p>
                    </div>
                  </Link>
                </div>
              ),
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
