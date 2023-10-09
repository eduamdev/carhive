'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { CarCard } from '@/components/car-card';
import { FiltersView } from '@/components/filters-view';
import { allCars } from '@/data/all-cars';

function getAllCars() {
  return allCars;
}

export function CarsView() {
  const searchParams = useSearchParams();
  const [filteredCars, setFilteredCars] = useState(getNewFilteredCars());

  useEffect(() => {
    setFilteredCars(getNewFilteredCars());
  }, [searchParams]);

  function getNewFilteredCars() {
    let newFilteredCars = getAllCars();

    if (searchParams.has('min-price')) {
      newFilteredCars = newFilteredCars.filter((car) => {
        const currentPrice =
          car.price.perDay.discount.amount || car.price.perDay.retail.amount;
        return currentPrice >= Number(searchParams.get('min-price'));
      });
    }

    if (searchParams.has('max-price')) {
      newFilteredCars = newFilteredCars.filter((car) => {
        const currentPrice =
          car.price.perDay.discount.amount || car.price.perDay.retail.amount;
        return currentPrice <= Number(searchParams.get('max-price'));
      });
    }

    if (searchParams.has('car-type')) {
      newFilteredCars = newFilteredCars.filter((car) =>
        searchParams.getAll('car-type').includes(car.specs.carType),
      );
    }

    if (searchParams.has('transmission')) {
      newFilteredCars = newFilteredCars.filter((car) =>
        searchParams.getAll('transmission').includes(car.specs.transmission),
      );
    }

    if (searchParams.has('engine-type')) {
      newFilteredCars = newFilteredCars.filter((car) =>
        searchParams.getAll('engine-type').includes(car.specs.engineType),
      );
    }

    if (searchParams.has('min-seats')) {
      newFilteredCars = newFilteredCars.filter(
        (car) =>
          Number(car.specs.capacity.seats) >=
          Number(searchParams.get('min-seats')),
      );
    }

    return newFilteredCars;
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
        <FiltersView />
      </div>
      <div className="mx-5 mb-12 sm:mx-6">
        <div className="grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] items-center justify-center gap-6">
          {filteredCars.map((car) => (
            <CarCard
              key={car.id}
              slug={car.slug}
              title={car.title}
              image={car.image}
              specs={car.specs}
              price={car.price}
              rating={Number(car.rating)}
              reviews={Number(car.reviews)}
              unlimitedMileage
            />
          ))}
        </div>
      </div>
    </>
  );
}
