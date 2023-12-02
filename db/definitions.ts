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
  slug: string;
  latitude: number;
  longitude: number;
  featured: boolean;
  image_url: string;
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
  retail_price_per_day: number;
  retail_price_currency: string;
  discounted_price_per_day?: number;
  discounted_price_currency?: string;
};
