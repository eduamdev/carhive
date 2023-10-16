export interface ILocation {
  id: string;
  name: string;
  value: string;
  image: {
    src: string;
    alt: string;
  };
  latitude: number;
  longitude: number;
  zoomLevel: number;
  featured: boolean;
}
