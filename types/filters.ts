import { EEngineTypes, ETransmissions, ECarTypes } from '@/types/car-specs';

export interface ISelectedFilters {
  priceRange: number[];
  carTypes: ECarTypes[];
  minSeats: string;
  engineTypes: EEngineTypes[];
  transmission: ETransmissions[];
}

export enum ESearchParams {
  LAT = 'lat',
  LNG = 'lng',
  ZOOM = 'zoom',
  MIN_PRICE = 'min-price',
  MAX_PRICE = 'max-price',
  MIN_SEATS = 'min-seats',
  CAR_TYPE = 'car-type',
  ENGINE_TYPE = 'engine-type',
  TRANSMISSION = 'transmission',
}
