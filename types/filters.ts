import { EBodyStyles, EEngineTypes, ETransmissions } from '@/types/car';

export interface ISelectedFilters {
  priceRange: number[];
  bodyStyles: EBodyStyles[];
  minSeats: number;
  engineTypes: EEngineTypes[];
  transmissions: ETransmissions[];
}

export enum ESearchParams {
  LOCATION = 'location',
  CHECKIN = 'checkin',
  CHECKOUT = 'checkout',
  MIN_PRICE = 'min-price',
  MAX_PRICE = 'max-price',
  BODY_STYLE = 'body-style',
  ENGINE_TYPE = 'engine-type',
  MIN_SEATS = 'min-seats',
  TRANSMISSION = 'transmission',
}
