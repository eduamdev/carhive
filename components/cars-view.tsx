'use client';

import { useCallback, useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { CarCard } from '@/components/car-card';
import { FiltersModal } from '@/components/filters/modal';
import { convertToKebabCase } from '@/lib/utils';
import { allCars } from '@/data/all-cars';
import { ESearchParams } from '@/types/filters';
import { ICar } from '@/types/car';

function getAllCars() {
  return allCars;
}

export function CarsView() {
  const searchParams = useSearchParams();

  const getNewFilteredCars = useCallback(() => {
    let newFilteredCars: ICar[] = getAllCars();

    if (searchParams.has(ESearchParams.MIN_PRICE)) {
      newFilteredCars = newFilteredCars.filter((car) => {
        const currentPrice =
          car.price.perDay.discount?.amount || car.price.perDay.retail.amount;
        return (
          currentPrice >= Number(searchParams.get(ESearchParams.MIN_PRICE))
        );
      });
    }

    if (searchParams.has(ESearchParams.MAX_PRICE)) {
      newFilteredCars = newFilteredCars.filter((car) => {
        const currentPrice =
          car.price.perDay.discount?.amount || car.price.perDay.retail.amount;
        return (
          currentPrice <= Number(searchParams.get(ESearchParams.MAX_PRICE))
        );
      });
    }

    if (searchParams.has(ESearchParams.CAR_TYPE)) {
      newFilteredCars = newFilteredCars.filter((car) =>
        searchParams
          .getAll(ESearchParams.CAR_TYPE)
          .includes(convertToKebabCase(car.specs.carType)),
      );
    }

    if (searchParams.has(ESearchParams.TRANSMISSION)) {
      newFilteredCars = newFilteredCars.filter((car) =>
        searchParams
          .getAll(ESearchParams.TRANSMISSION)
          .includes(convertToKebabCase(car.specs.transmission)),
      );
    }

    if (searchParams.has(ESearchParams.ENGINE_TYPE)) {
      newFilteredCars = newFilteredCars.filter((car) =>
        searchParams
          .getAll(ESearchParams.ENGINE_TYPE)
          .includes(convertToKebabCase(car.specs.engineType)),
      );
    }

    if (searchParams.has(ESearchParams.MIN_SEATS)) {
      newFilteredCars = newFilteredCars.filter(
        (car) =>
          Number(car.specs.capacity.seats) >=
          Number(searchParams.get(ESearchParams.MIN_SEATS)),
      );
    }

    return newFilteredCars;
  }, [searchParams]);

  const [filteredCars, setFilteredCars] = useState(getNewFilteredCars());

  useEffect(() => {
    setFilteredCars(getNewFilteredCars());
  }, [getNewFilteredCars, searchParams]);

  return (
    <>
      <div className="mx-5 my-4 flex items-center justify-between sm:mx-6">
        <p className="text-[13px] font-semibold text-neutral-800">
          {filteredCars.length > 0 &&
            (filteredCars.length > 1
              ? `${filteredCars.length} cars`
              : `${filteredCars.length} car`)}
        </p>
        <FiltersModal />
      </div>
      <div className="mx-5 mb-12 sm:mx-6">
        {!filteredCars.length ? (
          <div>
            <h1 className="text-xl font-semibold">No exact matches</h1>
            <p className="mt-3 text-slate-700">
              Try changing or removing some of your filters or adjusting your
              search area.
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
