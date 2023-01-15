import { vehicles } from "../data/vehicles";
import { getUniqueValuesFromArrayOfObjectsByKey } from "./utils";

export const getVehicles = () => vehicles;

export const getVehicleBySlug = (slug) =>
  getVehicles().find((vehicle) => vehicle.slug === slug);

export const getFeaturedVehicles = () =>
  getVehicles().filter((vehicle) => vehicle.featured);

export function getBrands() {
  const tempArray = getVehicles()
    .map((vehicle) => vehicle.brand)
    .filter(Boolean);

  return getUniqueValuesFromArrayOfObjectsByKey(tempArray, "name");
}

export function getColors() {
  const tempArray = getVehicles()
    .map((vehicle) => vehicle.color)
    .filter(Boolean);

  return getUniqueValuesFromArrayOfObjectsByKey(tempArray, "name");
}

export const getBrandById = (brandId) =>
  getBrands().find((brand) => brand.id === brandId);

export const getColorById = (colorId) =>
  getColors().find((color) => color.id === colorId);

function getAllPrices() {
  const retailPrices = getVehicles()
    .map((vehicle) => vehicle.price.perDay.retailPrice)
    .filter(Boolean);

  const discountPrices = getVehicles()
    .map((vehicle) => vehicle.price.perDay.discountPrice)
    .filter(Boolean);

  return retailPrices.concat(discountPrices);
}

export const getVehiclesMaxPricePerDay = () => Math.max(...getAllPrices());

export const getVehiclesMinPricePerDay = () => Math.min(...getAllPrices());

export const getCountSelectedBrands = (selectedBrands) =>
  selectedBrands.length ? `(${selectedBrands.length})` : "";

export const getCountSelectedColors = (selectedColors) =>
  selectedColors.length ? `(${selectedColors.length})` : "";

export function getCountAllSelectedFilters(
  price,
  maxPrice,
  selectedBrands,
  selectedColors
) {
  let counter = 0;
  const selectedBrandsCount = selectedBrands.length;
  const selectedColorsCount = selectedColors.length;

  if (price !== maxPrice) counter++;
  counter = selectedBrandsCount ? counter + selectedBrandsCount : counter;
  counter = selectedColorsCount ? counter + selectedColorsCount : counter;

  return counter ? `Filters (${counter})` : "Filters";
}
