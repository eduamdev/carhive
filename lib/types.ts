export enum BodyStyle {
  SUV = 'suv',
  MINIVAN = 'minivan',
  PICKUP_TRUCK = 'pickup-truck',
  SPORTS_CAR = 'sports-car',
  HATCHBACK = 'hatchback',
  SEDAN = 'sedan',
}

export enum Transmission {
  AUTOMATIC = 'automatic',
  MANUAL = 'manual',
}

export enum EngineType {
  GAS = 'gas',
  HYBRID = 'hybrid',
  ELECTRIC = 'electric',
}

export type SelectedFilters = {
  minPrice: number;
  maxPrice: number;
  seats: number | undefined;
  bodyStyles: BodyStyle[];
  engineTypes: EngineType[];
  transmissions: Transmission[];
};

export enum SearchParams {
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
