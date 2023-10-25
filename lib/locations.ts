import { locationsData } from '@/data/locations-data';
import { ILocation } from '@/types/location';

export function getAllLocations(): ReadonlyArray<ILocation> {
  return locationsData;
}

export function getLocationByValue(
  value: string,
): Readonly<ILocation> | undefined {
  return locationsData.find((city) => city.value === value);
}
