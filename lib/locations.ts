import { citiesData } from '@/data/locations-data';
import { ILocation } from '@/types/location';

export function getAllLocations(): ReadonlyArray<ILocation> {
  return citiesData;
}

export function getFeaturedLocations(): ReadonlyArray<ILocation> {
  return citiesData.filter((city) => city.featured).slice(0, 4);
}

export function getLocationByValue(value: string): Readonly<ILocation> {
  return citiesData.find((city) => city.value === value);
}
