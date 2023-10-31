export enum EBodyStyles {
  SUV = 'SUV',
  MINIVAN = 'Minivan',
  PICKUP_TRUCK = 'Pickup Truck',
  SPORTS_CAR = 'Sports Car',
  HATCHBACK = 'Hatchback',
  SEDAN = 'Sedan',
}

export enum ETransmissions {
  AUTOMATIC = 'Automatic',
  MANUAL = 'Manual',
}

export enum EEngineTypes {
  GAS = 'Gas',
  HYBRID = 'Hybrid',
  ELECTRIC = 'Electric',
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

export interface SelectedFilters {
  minPrice: number;
  maxPrice: number;
  bodyStyles: EBodyStyles[];
  engineTypes: EEngineTypes[];
  transmissions: ETransmissions[];
  seats: number | undefined;
}
