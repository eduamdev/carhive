import Link from 'next/link';
import Image from 'next/image';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import { Skeleton } from '@/components/ui/skeleton';

import hatchback from '/public/cars/body-styles/hatchback.avif';
import minivan from '/public/cars/body-styles/minivan.avif';
import pickupTruck from '/public/cars/body-styles/pickup-truck.avif';
import sportsCar from '/public/cars/body-styles/sports-car.avif';
import suv from '/public/cars/body-styles/suv.avif';
import sedan from '/public/cars/body-styles/sedan.avif';

import { bodyStyles } from '@/components/cars/body-style-filters';
import { SearchParams } from '@/lib/definitions';

const imageMap = {
  hatchback: hatchback,
  minivan: minivan,
  'pickup-truck': pickupTruck,
  'sports-car': sportsCar,
  suv: suv,
  sedan: sedan,
};

export function PopularCarBodyStyles() {
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
