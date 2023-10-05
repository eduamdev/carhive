export enum CarType {
  SUV = 'suv',
  Minivan = 'minivan',
  PickUp = 'pick-up',
  Sport = 'sport',
  OffRoad = 'off-road',
  Sedan = 'sedan',
}

export enum CarTransmission {
  Auto = 'auto',
  Manual = 'manual',
}

export interface IFilters {
  priceRange: number[];
  carTypes: CarType[];
  minSeats: string;
  minBags: string;
  transmission: CarTransmission | '';
}
