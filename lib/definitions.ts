export type Testimonial = {
  id: string;
  name: string;
  comment: string;
  username: string;
  image_url: string;
};

export type Location = {
  id: string;
  name: string;
  value: string;
  latitude: number;
  longitude: number;
  featured: boolean;
};

export type Car = {
  id: string;
  slug: string;
  name: string;
  body_style: string;
  engine_type: string;
  transmission: string;
  seats: number;
  descriptions: string[];
  features: string[];
  rating: number;
  reviews: number;
  unlimited_mileage: boolean;
  image_url: string;
  retail_price_amount: number;
  retail_price_currency: string;
  discount_price_amount?: number;
  discount_price_currency?: string;
};

export type Newsletter = {
  id: string;
  email: string;
  created_at: string;
};

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
