import { Suspense } from 'react';
import { getLocations } from '@/db/queries';
import { CircleCheckIcon } from '@/app/components/icons/circle-check';
import { SearchFormSkeleton } from '@/app/components/skeletons';
import { SearchForm } from '@/app/components/search-form';
import { LogoSlider } from '../components/logo-slider';

export async function CarSearchHero() {
  const locations = await getLocations();

  return (
    <section className="bg-neutral-50">
      <div className="mx-auto w-full max-w-none px-5 sm:max-w-[90%] sm:px-0 2xl:max-w-8xl">
        <div className="pt-10 md:pt-16">
          <h1 className="text-center text-[22px] font-extrabold md:text-2xl lg:text-[26px]">
            Find your car
          </h1>
          <div className="pt-8">
            <div className="flex flex-col gap-2.5 md:flex-row md:items-center md:justify-center md:gap-x-9">
              <span className="inline-flex items-center justify-center text-xs text-neutral-600 md:text-sm">
                <CircleCheckIcon className="mr-2 inline size-4 shrink-0 text-green-600 md:size-[18px]" />
                No hidden fees, ever
              </span>
              <span className="inline-flex items-center justify-center text-xs text-neutral-600 md:text-sm">
                <CircleCheckIcon className="mr-2 inline size-4 shrink-0 text-green-600 md:size-[18px]" />
                24/7 roadside assistance
              </span>
              <span className="col-span-2 inline-flex items-center justify-center text-xs text-neutral-600 md:text-sm">
                <CircleCheckIcon className="mr-2 inline size-4 shrink-0 text-green-600 md:size-[18px]" />
                Unlimited mileage included
              </span>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="pt-5">
              <Suspense fallback={<SearchFormSkeleton />}>
                <SearchForm locations={locations} />
              </Suspense>
            </div>
          </div>
          <div className="pt-14">
            <div className="invisible relative h-28 min-h-28 overflow-x-hidden md:visible">
              <div className="before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-40 before:bg-gradient-to-r before:from-neutral-50 before:content-['']"></div>
              <div className="after:absolute after:right-0 after:top-0 after:z-10 after:h-full after:w-40 after:bg-gradient-to-l after:from-neutral-50 after:content-[''] md:before:w-64 md:after:w-64"></div>
              <div className="flex h-full items-center justify-center">
                <LogoSlider />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
