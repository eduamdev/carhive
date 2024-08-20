import { Skeleton } from '@/app/components/ui/skeleton';
import { LogoLink } from '@/app/components/logoLink';
import { UserMenuButton } from '@/app/components/user-menu-button';
import { CompactSearchPanelSkeleton } from '@/app/components/skeletons/compact-search-panel';
import { MapSkeleton } from '@/app/components/skeletons/map';
import { CarCardSkeleton } from '@/app/components/skeletons/car-card';

export default function Loading() {
  return (
    <>
      <div className="sticky top-0 z-30 flex h-[var(--cars-header-height)] w-full flex-col bg-white shadow-[inset_0_-1px_0_0_#eaeaea]">
        <div className="h-[80px] border-b border-black/[0.07]">
          <div className="mx-auto size-full max-w-none px-5 sm:max-w-none sm:px-6">
            <header className="flex h-full items-center justify-between gap-x-4">
              <LogoLink />
              <div className="hidden md:block">
                <CompactSearchPanelSkeleton />
              </div>
              <div className="inline-flex">
                <UserMenuButton />
              </div>
            </header>
          </div>
        </div>
        <div className="hidden h-[calc(var(--cars-header-height)_-_80px)] lg:block">
          <div className="mx-auto size-full max-w-none px-5 sm:max-w-none sm:px-6">
            <div className="flex h-full items-center justify-between">
              <Skeleton className="h-4 w-12 rounded-lg" />
              <Skeleton className="h-9 w-24 rounded-lg" />
            </div>
          </div>
        </div>
      </div>
      <main>
        <div className="flex flex-row">
          <div className="w-full shrink-0 grow-0 flex-col overflow-y-auto bg-neutral-50 md:w-[55%] xl:w-[63%]">
            <div className="px-5 pb-10 pt-8 sm:px-6 sm:pb-10 sm:pt-8">
              <div className="grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] items-stretch justify-center gap-6">
                <CarCardSkeleton />
                <CarCardSkeleton />
                <CarCardSkeleton />
                <CarCardSkeleton />
                <CarCardSkeleton />
                <CarCardSkeleton />
                <CarCardSkeleton />
                <CarCardSkeleton />
              </div>
            </div>
          </div>
          <div className="hidden flex-auto md:block">
            <MapSkeleton />
          </div>
        </div>
      </main>
    </>
  );
}
