import { SiteHeader } from '@/app/components/site-header';
import { Skeleton } from '@/app/components/ui/skeleton';
import {
  CarCatalogSkeleton,
  MapSkeleton,
  SearchFormSkeleton,
} from '@/app/components/skeletons';

export default function Loading() {
  return (
    <>
      <div className="sticky top-0 z-30 flex h-[var(--height-gap)] w-full flex-col bg-white shadow-[inset_0_-1px_0_0_#eaeaea]">
        <div className="shadow-[inset_0_-1px_0_0_#eaeaea]">
          <div className="mx-auto h-[var(--site-header-height)] w-full max-w-none px-5 sm:max-w-none sm:px-6">
            <SiteHeader />
          </div>
        </div>
        <div className="hidden h-[var(--search-bar-height)] items-center justify-start lg:flex">
          <div className="mx-auto w-full max-w-none px-5 sm:max-w-none sm:px-6">
            <div className="flex items-center justify-between">
              <Skeleton className="h-4 w-12" />
              <Skeleton className="h-9 w-24" />
            </div>
          </div>
        </div>
        <div className="absolute top-[calc(var(--site-header-height)_/_2)] hidden w-full lg:flex">
          <SearchFormSkeleton compact />
        </div>
      </div>
      <div className="flex">
        <div className="w-full max-w-[var(--cars-page-main-content-max-width)] shrink-0 grow-0 flex-col overflow-y-auto bg-neutral-50 md:min-h-[var(--cars-page-main-content-height)] md:w-[55%] xl:w-[63%]">
          <CarCatalogSkeleton />
        </div>
        <div className="hidden flex-auto md:block">
          <div className="sticky top-[var(--header-gap)] z-10 basis-auto">
            <MapSkeleton />
          </div>
        </div>
      </div>
    </>
  );
}
