import { Suspense } from 'react';
import { CarCatalog } from '@/components/cars/catalog';
import { MapContainer } from '@/components/cars/map-container';
import { CarCatalogSkeleton } from '@/components/skeletons';
import { SearchParams } from '@/lib/types';

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
        <Suspense fallback={<CarCatalogSkeleton />}>
          <CarCatalog searchParams={searchParams} />
        </Suspense>
      </div>
      <div className="hidden flex-auto md:block">
        <MapContainer />
      </div>
    </div>
  );
}
