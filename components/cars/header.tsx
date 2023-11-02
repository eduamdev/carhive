import { Suspense } from 'react';
import { SiteHeader } from '@/components/layout/site-header';
import { SearchForm } from '@/components/search-form';
import { SearchFormSkeleton } from '@/components/skeletons';
import { fetchLocations } from '@/lib/data';

export async function CarsHeader() {
  const locations = await fetchLocations();

  return (
    <div className="sticky top-0 z-30 flex h-[var(--height-gap)] w-full flex-col bg-white shadow-[inset_0_-1px_0_0_#eaeaea]">
      <div className="shadow-[inset_0_-1px_0_0_#eaeaea]">
        <div className="mx-auto h-[var(--site-header-height)] w-full max-w-none px-5 sm:max-w-none sm:px-6">
          <SiteHeader />
        </div>
      </div>
      <div className="h-[var(--search-bar-height)]">
        <div className="-mt-9 hidden h-full items-center justify-center lg:flex">
          <Suspense fallback={<SearchFormSkeleton compact />}>
            <SearchForm locations={locations} compact />
          </Suspense>
        </div>
      </div>
    </div>
  );
}
