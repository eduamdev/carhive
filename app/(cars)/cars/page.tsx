import { Suspense } from 'react';
import type { Metadata } from 'next';
import { Filters } from './components/filters';
import { CarCard } from './components/car-card';
import { MapContainer } from './components/map-container';
import { getCars, getLocations } from '@/db/queries';
import { slugify } from '@/app/lib/utils';
import { SearchParams } from '@/app/lib/types';
import { LogoLink } from '@/app/components/logoLink';
import { UserMenuButton } from '@/app/components/user-menu-button';
import { SearchPanel } from '@/app/(home)/components/search-panel';

export const metadata: Metadata = {
  title: 'Cars',
};

interface CarCatalogPageProps {
  searchParams: {
    [SearchParams.MIN_PRICE]?: string;
    [SearchParams.MAX_PRICE]?: string;
    [SearchParams.BODY_STYLE]?: string[];
    [SearchParams.ENGINE_TYPE]?: string[];
    [SearchParams.TRANSMISSION]?: string[];
    [SearchParams.MIN_SEATS]?: string;
  };
}

export default async function CarCatalogPage({
  searchParams,
}: CarCatalogPageProps) {
  const [cars, locations] = await Promise.all([getCars(), getLocations()]);

  const carPrices = cars.map((car) => {
    return car.discounted_price_per_day || car.retail_price_per_day;
  });

  const MIN_PRICE = Math.min(...carPrices);
  const MAX_PRICE = Math.max(...carPrices);

  let filteredCars = cars;

  const {
    [SearchParams.MIN_PRICE]: minPrice,
    [SearchParams.MAX_PRICE]: maxPrice,
    [SearchParams.BODY_STYLE]: bodyStyles,
    [SearchParams.ENGINE_TYPE]: engineTypes,
    [SearchParams.TRANSMISSION]: transmissions,
    [SearchParams.MIN_SEATS]: minSeats,
  } = searchParams;

  if (minPrice) {
    filteredCars = filteredCars.filter((car) => {
      const currentPrice =
        car.discounted_price_per_day || car.retail_price_per_day;
      return currentPrice >= Number(minPrice);
    });
  }
  if (maxPrice) {
    filteredCars = filteredCars.filter((car) => {
      const currentPrice =
        car.discounted_price_per_day || car.retail_price_per_day;
      return currentPrice <= Number(maxPrice);
    });
  }
  if (bodyStyles) {
    filteredCars = filteredCars.filter((car) =>
      bodyStyles.includes(slugify(car.body_style)),
    );
  }
  if (engineTypes) {
    filteredCars = filteredCars.filter((car) =>
      engineTypes.includes(slugify(car.engine_type)),
    );
  }
  if (transmissions) {
    filteredCars = filteredCars.filter((car) =>
      transmissions.includes(slugify(car.transmission)),
    );
  }
  if (minSeats) {
    filteredCars = filteredCars.filter((car) => car.seats >= Number(minSeats));
  }

  return (
    <>
      <header className="sticky top-0 z-30 flex h-[var(--cars-header-height)] w-full flex-col bg-white shadow-[inset_0_-1px_0_0_#eaeaea]">
        <div className="h-[80px] border-b border-black/[0.07]">
          <div className="mx-auto size-full max-w-none px-5 sm:max-w-none sm:px-6">
            <div className="flex h-full items-center justify-between gap-x-4">
              <LogoLink />
              <div className="hidden md:block">
                <Suspense>
                  <SearchPanel locations={locations} compact />
                </Suspense>
              </div>
              <div className="inline-flex">
                <UserMenuButton />
              </div>
            </div>
          </div>
        </div>
        <div className="hidden h-[calc(var(--cars-header-height)_-_80px)] lg:block">
          <div className="mx-auto size-full max-w-none px-5 sm:max-w-none sm:px-6">
            <div className="flex h-full items-center justify-between">
              <p className="text-sm font-medium text-neutral-600">
                {filteredCars.length > 0 &&
                  (filteredCars.length > 1
                    ? `${filteredCars.length} cars`
                    : `${filteredCars.length} car`)}
              </p>
              <Filters
                initialMinPrice={MIN_PRICE}
                initialMaxPrice={MAX_PRICE}
              />
            </div>
          </div>
        </div>
      </header>
      <main>
        <div className="flex flex-row">
          <div className="w-full shrink-0 grow-0 flex-col overflow-y-auto bg-neutral-50 md:w-[55%] xl:w-[63%]">
            <Suspense>
              <div className="px-5 pb-10 pt-8 sm:px-6 sm:pb-10 sm:pt-8">
                {!filteredCars.length ? (
                  <div>
                    <h1 className="text-xl font-semibold">No exact matches</h1>
                    <p className="mt-3 text-slate-700">
                      Try changing or removing some of your filters.
                    </p>
                  </div>
                ) : (
                  <div className="grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] items-stretch justify-center gap-6">
                    {filteredCars.map(({ id, slug }, index) => (
                      <CarCard key={id} index={index} slug={slug} />
                    ))}
                  </div>
                )}
              </div>
            </Suspense>
          </div>
          <div className="hidden flex-auto md:block">
            <MapContainer />
          </div>
        </div>
      </main>
    </>
  );
}
