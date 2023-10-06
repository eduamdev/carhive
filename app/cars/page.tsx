import { Suspense } from 'react';
import dynamic from 'next/dynamic';
import { LoadingDots } from '@/components/loading-dots';
import { FiltersView } from '@/components/filters-view';
import { CarsView } from '@/components/cars-view';
import { CarsViewFallback } from '@/components/cars-view-fallback';

const MapView = dynamic(
  async () => {
    const { MapView: DynamicMap } = await import('@/components/map-view');
    return { default: DynamicMap };
  },
  {
    loading: () => (
      <div className="flex h-[var(--map-container-height)] items-center justify-center gap-x-2.5 bg-neutral-200">
        <LoadingDots />
      </div>
    ),
    ssr: false,
  },
);

export default function CarsPage() {
  return (
    <section>
      <div className="mx-auto w-full max-w-none">
        <main className="flex">
          <div className="w-full max-w-[1184px] shrink-0 grow-0 flex-col overflow-y-auto md:min-h-[var(--cars-page-main-content-height)] md:w-[55%] xl:w-[63%]">
            <div className="mx-5 my-4 flex items-center justify-between sm:mx-6">
              <p className="text-[13px] font-semibold text-neutral-800">
                Over 45 cars
              </p>
              <Suspense>
                <FiltersView />
              </Suspense>
            </div>
            <div className="mx-5 mb-12 sm:mx-6">
              <Suspense fallback={<CarsViewFallback />}>
                <CarsView />
              </Suspense>
            </div>
          </div>
          <div className="hidden flex-auto md:block">
            <div className="sticky top-[var(--header-gap)] z-10 basis-auto">
              <MapView />
            </div>
          </div>
        </main>
      </div>
    </section>
  );
}
