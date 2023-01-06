import { vehicles } from "../vehicles";

export const getVehicleBySlug = (slug) =>
  vehicles.find((vehicle) => vehicle.slug === slug);

export const getFeaturedVehicles = () =>
  vehicles.filter((vehicle) => vehicle.featured);

export const getVehicleBrands = () => vehicles.map((vehicle) => vehicle.brand);

export const getVehicleColors = () =>
  vehicles.map((vehicle) => vehicle.color.short);

export const getVehiclesMaxPricePerDay = () => {
  const retailPrices = vehicles
    .map((vehicle) => vehicle.price.perDay.retailPrice)
    .filter((price) => price !== undefined || null || 0);
  const discountPrices = vehicles
    .map((vehicle) => vehicle.price.perDay.discountPrice)
    .filter((price) => price !== undefined || null || 0);

  const allPrices = retailPrices.concat(discountPrices);

  return Math.max(...allPrices);
};

export const getVehiclesMinPricePerDay = () => {
  const retailPrices = vehicles
    .map((vehicle) => vehicle.price.perDay.retailPrice)
    .filter((price) => price !== undefined || null || 0);
  const discountPrices = vehicles
    .map((vehicle) => vehicle.price.perDay.discountPrice)
    .filter((price) => price !== undefined || null || 0);

  const allPrices = retailPrices.concat(discountPrices);

  return Math.min(...allPrices);
};
