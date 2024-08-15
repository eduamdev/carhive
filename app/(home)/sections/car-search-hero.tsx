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
      <div className="pt-10 md:pt-16">
        <div className="mx-auto flex max-w-4xl flex-col items-center justify-center">
          <h1 className="text-center text-[22px] font-extrabold md:text-2xl lg:text-[26px]">
            Find your car
          </h1>
          <div className="pt-5 md:pt-8">
            <div className="flex flex-col gap-3 sm:grid sm:grid-cols-2 sm:grid-rows-2 md:flex md:flex-row md:items-center md:justify-center md:gap-x-9">
              <span className="inline-flex items-center justify-center justify-self-start text-[13px] text-neutral-600 md:text-sm">
                <CircleCheckIcon className="mr-2 inline size-[18px] shrink-0 text-green-600 md:size-5" />
                No hidden fees, ever
              </span>
              <span className="inline-flex items-center justify-center justify-self-end text-[13px] text-neutral-600 md:text-sm">
                <CircleCheckIcon className="mr-2 inline size-[18px] shrink-0 text-green-600 md:size-5" />
                24/7 roadside assistance
              </span>
              <span className="col-span-2 inline-flex items-center justify-center justify-self-center text-[13px] text-neutral-600 md:text-sm">
                <CircleCheckIcon className="mr-2 inline size-[18px] shrink-0 text-green-600 md:size-5" />
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
          <div className="invisible overflow-x-hidden md:visible">
            <div className="pt-14">
              <div className="relative flex h-28 min-h-28 w-screen items-center overflow-hidden whitespace-nowrap before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-40 before:bg-gradient-to-r before:from-neutral-50 before:content-[''] after:absolute after:right-0 after:top-0 after:z-10 after:h-full after:w-40 after:bg-gradient-to-l after:from-neutral-50 after:content-[''] md:before:w-64 md:after:w-64">
                <LogoSlider />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
