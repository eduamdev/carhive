import { CarCard } from '@/components/cars/card';
import { FiltersModal } from '@/components/cars/modal';
import { fetchCars } from '@/db/queries';
import { slugify } from '@/lib/utils';
import { SearchParams } from '@/lib/types';

interface CarCatalogProps {
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

export async function CarCatalog({ searchParams }: CarCatalogProps) {
  const cars = await fetchCars();
  const carPrices = cars.map((car) => {
    return Number(car.discounted_price_per_day || car.retail_price_per_day);
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
      <div className="mx-5 my-4 flex items-center justify-between sm:mx-6">
        <p className="text-[13px] font-semibold text-neutral-800">
          {filteredCars.length > 0 &&
            (filteredCars.length > 1
              ? `${filteredCars.length} cars`
              : `${filteredCars.length} car`)}
        </p>
        <FiltersModal minPrice={MIN_PRICE} maxPrice={MAX_PRICE} />
      </div>
      <div className="mx-5 mb-12 sm:mx-6">
        {!filteredCars.length ? (
          <div>
            <h1 className="text-xl font-semibold">No exact matches</h1>
            <p className="mt-3 text-slate-700">
              Try changing or removing some of your filters.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] items-stretch justify-center gap-6">
            {filteredCars.map((car, index) => (
              <CarCard key={car.id} index={index} car={car} />
            ))}
          </div>
        )}
      </div>
    </>
  );
}
