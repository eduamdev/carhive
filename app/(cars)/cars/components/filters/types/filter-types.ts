export type SelectedFilters = {
  minPrice: number;
  maxPrice: number;
  seats: number | undefined;
  bodyStyles: BodyStyle[];
  engineTypes: EngineType[];
  transmissions: Transmission[];
};

export enum BodyStyle {
  SUV = 'suv',
  MINIVAN = 'minivan',
  PICKUP_TRUCK = 'pickup-truck',
  SPORTS_CAR = 'sports-car',
  HATCHBACK = 'hatchback',
  SEDAN = 'sedan',
}

export enum EngineType {
  GAS = 'gas',
  HYBRID = 'hybrid',
  ELECTRIC = 'electric',
}

export enum Transmission {
  AUTOMATIC = 'automatic',
  MANUAL = 'manual',
}
