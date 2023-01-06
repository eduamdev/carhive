import { vehicles } from "../vehicles";

export const getVehicleBySlug = (slug) =>
  vehicles.find((vehicle) => vehicle.slug === slug);

export const getFeaturedVehicles = () =>
  vehicles.filter((vehicle) => vehicle.featured);

export function getVehicleBrands() {
  const arrBrands = vehicles.map((vehicle) => vehicle.brand).filter(Boolean);

  const key = "id";
  const uniqueBrandsByKey = [
    ...new Map(arrBrands.map((item) => [item[key], item])).values(),
  ];

  return uniqueBrandsByKey;
}

export function getVehicleColors() {
  const arrColors = vehicles.map((vehicle) => vehicle.color).filter(Boolean);

  const key = "id";
  const uniqueColorsByKey = [
    ...new Map(arrColors.map((item) => [item[key], item])).values(),
  ];

  return uniqueColorsByKey;
}

export function getBrandById(brandId) {
  const brands = getVehicleBrands();
  return brands.find((brand) => brand.id === brandId);
}

export function getColorById(colorId) {
  const colors = getVehicleColors();
  return colors.find((color) => color.id === colorId);
}

function getAllPrices() {
  const retailPrices = vehicles
    .map((vehicle) => vehicle.price.perDay.retailPrice)
    .filter((price) => price !== undefined || null || 0);

  const discountPrices = vehicles
    .map((vehicle) => vehicle.price.perDay.discountPrice)
    .filter((price) => price !== undefined || null || 0);

  return retailPrices.concat(discountPrices);
}

export const getVehiclesMaxPricePerDay = () => Math.max(...getAllPrices());

export const getVehiclesMinPricePerDay = () => Math.min(...getAllPrices());
