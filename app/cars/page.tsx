import dynamic from 'next/dynamic';
import { FiltersView } from '@/components/filters-view';
import { CarsView } from '@/components/cars-view';
import { MapViewFallback } from '@/components/map-view-fallback';

const MapView = dynamic(
  async () => {
    const { MapView: DynamicMap } = await import('@/components/map-view');
    return { default: DynamicMap };
  },
  {
    loading: () => <MapViewFallback />,
    ssr: false,
  },
);

export default async function CarsPage() {
  return (
    <div className="flex">
      <div className="w-full max-w-[var(--cars-page-main-content-max-width)] shrink-0 grow-0 flex-col overflow-y-auto md:min-h-[var(--cars-page-main-content-height)] md:w-[55%] xl:w-[63%]">
        <div className="mx-5 my-4 flex items-center justify-between sm:mx-6">
          <p className="text-[13px] font-semibold text-neutral-800">
            Over 45 cars
          </p>
          <FiltersView />
        </div>
        <div className="mx-5 mb-12 sm:mx-6">
          <CarsView />
        </div>
      </div>
      <div className="hidden flex-auto md:block">
        <div className="sticky top-[var(--header-gap)] z-10 basis-auto">
          <MapView />
        </div>
      </div>
    </div>
  );
}
