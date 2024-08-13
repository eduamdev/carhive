import { Suspense } from 'react';
import { getLocations } from '@/db/queries';
import { CircleCheckIcon } from '@/app/components/icons/circle-check';
import { SearchFormSkeleton } from '@/app/components/skeletons';
import { SearchForm } from '@/app/components/search-form';
import { LogoSlider } from '@/app/components/logo-slider';

export async function CarSearchHero() {
  const locations = await getLocations();

  return (
    <section className="bg-neutral-50 pt-12">
      <h1 className="text-center text-3xl font-extrabold">Find your car</h1>
      <div className="mx-auto mt-6 grid max-w-4xl grid-cols-1 items-center justify-center gap-4 md:flex md:flex-row md:gap-12">
        <div className="flex items-center justify-center gap-1.5">
          <CircleCheckIcon className="size-5 shrink-0 text-green-600" />
          <span className="text-sm text-neutral-900">No hidden fees.</span>
        </div>
        <div className="flex items-center justify-center gap-1.5">
          <CircleCheckIcon className="size-5 shrink-0 text-green-600" />
          <span className="text-sm text-neutral-900">Transparent pricing.</span>
        </div>
        <div className="flex items-center justify-center gap-1.5">
          <CircleCheckIcon className="size-5 shrink-0 text-green-600" />
          <span className="text-sm text-neutral-900">
            Flexible cancellations.
          </span>
        </div>
      </div>
      <div className="mt-5 hidden md:block">
        <Suspense fallback={<SearchFormSkeleton />}>
          <SearchForm locations={locations} />
        </Suspense>
      </div>
      <div className="mt-14 overflow-x-hidden">
        <LogoSlider />
      </div>
    </section>
  );
}
