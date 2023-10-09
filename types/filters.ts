import { ECarEngineType, ECarTransmission, ECarType } from '@/types/car-specs';

export interface IFilters {
  priceRange: number[];
  carTypes: ECarType[];
  minSeats: string;
  engineTypes: ECarEngineType | '';
  transmission: ECarTransmission | '';
}
