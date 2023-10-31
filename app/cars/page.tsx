import { Suspense } from 'react';
import dynamic from 'next/dynamic';
import { CarsView } from '@/components/cars/cars-view';
import { CarsViewSkeleton, MapSkeleton } from '@/components/skeletons';
import { fetchCars, fetchLocations } from '@/lib/data';

const MapView = dynamic(
  async () => {
    const { MapView: DynamicMap } = await import('@/components/cars/map-view');
    return { default: DynamicMap };
  },
  {
    loading: () => <MapSkeleton />,
    ssr: false,
  },
);

export default async function CarsPage() {
  const locations = await fetchLocations();
  const cars = await fetchCars();

  return (
    <div className="flex">
      <div className="w-full max-w-[var(--cars-page-main-content-max-width)] shrink-0 grow-0 flex-col overflow-y-auto md:min-h-[var(--cars-page-main-content-height)] md:w-[55%] xl:w-[63%]">
        <Suspense fallback={<CarsViewSkeleton />}>
          <CarsView cars={cars} />
        </Suspense>
      </div>
      <div className="hidden flex-auto md:block">
        <div className="sticky top-[var(--header-gap)] z-10 basis-auto">
          <MapView locations={locations} />
        </div>
      </div>
    </div>
  );
}
