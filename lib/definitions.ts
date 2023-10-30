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
