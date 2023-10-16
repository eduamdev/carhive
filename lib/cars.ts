import { carsData } from '@/data/cars-data';
import { ICar } from '@/types/car';

export function getAllCars(): ReadonlyArray<ICar> {
  return carsData;
}

export function getCarBySlug(slug: string): ICar {
  return getAllCars().find((car) => car.slug === slug);
}

export function getMinPrice(): number {
  const carPrices = carsData.map((car) => {
    return car.price.perDay.discount?.amount
      ? Number(car.price.perDay.discount?.amount)
      : Number(car.price.perDay.retail.amount);
  });

  return Math.min(...carPrices);
}

export function getMaxPrice(): number {
  const carPrices = carsData.map((car) => {
    return car.price.perDay.discount?.amount
      ? Number(car.price.perDay.discount?.amount)
      : Number(car.price.perDay.retail.amount);
  });

  return Math.max(...carPrices);
}
