'use client';

import { useCallback, useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { CarCard } from '@/components/cars/car-card';
import { FiltersButton } from '@/components/cars/filters-button';
import { convertToKebabCase } from '@/lib/utils';
import { Car } from '@/lib/definitions';
import { ESearchParams } from '@/types/filters';

interface CarsViewProps {
  cars: Car[];
}

export function CarsView({ cars }: CarsViewProps) {
  const searchParams = useSearchParams();

  const getNewFilteredCars = useCallback(() => {
    let newFilteredCars = cars;

    if (searchParams.has(ESearchParams.MIN_PRICE)) {
      newFilteredCars = newFilteredCars.filter((car) => {
        const currentPrice =
          car.discount_price_amount || car.retail_price_amount;
        return (
          currentPrice >= Number(searchParams.get(ESearchParams.MIN_PRICE))
        );
      });
    }

    if (searchParams.has(ESearchParams.MAX_PRICE)) {
      newFilteredCars = newFilteredCars.filter((car) => {
        const currentPrice =
          car.discount_price_amount || car.retail_price_amount;
        return (
          currentPrice <= Number(searchParams.get(ESearchParams.MAX_PRICE))
        );
      });
    }

    if (searchParams.has(ESearchParams.BODY_STYLE)) {
      newFilteredCars = newFilteredCars.filter((car) =>
        searchParams
          .getAll(ESearchParams.BODY_STYLE)
          .includes(convertToKebabCase(car.body_style)),
      );
    }

    if (searchParams.has(ESearchParams.TRANSMISSION)) {
      newFilteredCars = newFilteredCars.filter((car) =>
        searchParams
          .getAll(ESearchParams.TRANSMISSION)
          .includes(convertToKebabCase(car.transmission)),
      );
    }

    if (searchParams.has(ESearchParams.ENGINE_TYPE)) {
      newFilteredCars = newFilteredCars.filter((car) =>
        searchParams
          .getAll(ESearchParams.ENGINE_TYPE)
          .includes(convertToKebabCase(car.engine_type)),
      );
    }

    if (searchParams.has(ESearchParams.MIN_SEATS)) {
      newFilteredCars = newFilteredCars.filter(
        (car) =>
          Number(car.seats) >=
          Number(searchParams.get(ESearchParams.MIN_SEATS)),
      );
    }

    return newFilteredCars;
  }, [cars, searchParams]);

  const [filteredCars, setFilteredCars] = useState(getNewFilteredCars());

  useEffect(() => {
    setFilteredCars(getNewFilteredCars());
  }, [getNewFilteredCars, searchParams]);

  const carPrices = cars.map((car) => {
    return Number(car.discount_price_amount || car.retail_price_amount);
  });

  const minPrice = Math.min(...carPrices);
  const maxPrice = Math.max(...carPrices);

  return (
    <>
      <div className="mx-5 my-4 flex items-center justify-between sm:mx-6">
        <p className="text-[13px] font-semibold text-neutral-800">
          {filteredCars.length > 0 &&
            (filteredCars.length > 1
              ? `${filteredCars.length} cars`
              : `${filteredCars.length} car`)}
        </p>
        <FiltersButton minPrice={minPrice} maxPrice={maxPrice} />
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
