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
  image_url: string;
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
