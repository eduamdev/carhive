import { locationsData } from '@/data/locations-data';
import { ILocation } from '@/types/location';

export function getAllLocations(): ReadonlyArray<ILocation> {
  return locationsData;
}

export function getFeaturedLocations(): ReadonlyArray<ILocation> {
  return locationsData.filter((city) => city.featured).slice(0, 4);
}

export function getLocationByValue(value: string): Readonly<ILocation> {
  return locationsData.find((city) => city.value === value);
}
