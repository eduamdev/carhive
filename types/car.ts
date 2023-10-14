import { ECarTypes, EEngineTypes, ETransmissions } from './car-specs';

export interface ICar {
  id: string;
  slug: string;
  title: string;
  price: {
    perDay: {
      retail: {
        amount: number;
        currency: string;
      };
      discount?: {
        amount: number;
        currency: string;
      };
    };
  };
  image: {
    src: string;
    alt: string;
  };
  specs: {
    carType: ECarTypes;
    engineType: EEngineTypes;
    transmission: ETransmissions;
    capacity: {
      seats: string;
    };
  };
  description: string[];
  features: string[];
  rating: string;
  reviews?: string;
  unlimitedMileage?: boolean;
}
