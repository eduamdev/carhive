import { Suspense } from 'react';
import { CarsView } from '@/components/cars/cars-view';
import { MapContainer } from '@/components/cars/map-container';
import { CarsViewSkeleton } from '@/components/skeletons';
import { SearchParams } from '@/lib/definitions';

interface CarsPageProps {
  searchParams: {
    [SearchParams.LOCATION]?: string;
    [SearchParams.CHECKIN]?: string;
    [SearchParams.CHECKOUT]?: string;
    [SearchParams.MIN_PRICE]?: string;
    [SearchParams.MAX_PRICE]?: string;
    [SearchParams.BODY_STYLE]?: string[];
    [SearchParams.ENGINE_TYPE]?: string[];
    [SearchParams.MIN_SEATS]?: string;
    [SearchParams.TRANSMISSION]?: string[];
  };
}

export default async function CarsPage({ searchParams }: CarsPageProps) {
  return (
    <div className="flex">
      <div className="w-full max-w-[var(--cars-page-main-content-max-width)] shrink-0 grow-0 flex-col overflow-y-auto md:min-h-[var(--cars-page-main-content-height)] md:w-[55%] xl:w-[63%]">
        <Suspense fallback={<CarsViewSkeleton />}>
          <CarsView searchParams={searchParams} />
        </Suspense>
      </div>
      <div className="hidden flex-auto md:block">
        <MapContainer />
      </div>
    </div>
  );
}
