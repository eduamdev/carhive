import { SearchParams } from '@/app/lib/types';
import {
  BodyStyle,
  EngineType,
  SelectedFilters,
  Transmission,
} from '../types/filter-types';

export function getInitialFilters(
  searchParams: URLSearchParams,
  initialMinPrice: number,
  initialMaxPrice: number,
): SelectedFilters {
  return {
    minPrice:
      Number(searchParams.get(SearchParams.MIN_PRICE)) || initialMinPrice,
    maxPrice:
      Number(searchParams.get(SearchParams.MAX_PRICE)) || initialMaxPrice,
    seats: Number(searchParams.get(SearchParams.MIN_SEATS)) || undefined,
    bodyStyles: searchParams.getAll(SearchParams.BODY_STYLE) as BodyStyle[],
    engineTypes: searchParams.getAll(SearchParams.ENGINE_TYPE) as EngineType[],
    transmissions: searchParams.getAll(
      SearchParams.TRANSMISSION,
    ) as Transmission[],
  };
}

export function calculateTotalFiltersFromParams(
  searchParams: URLSearchParams,
  initialMinPrice: number,
  initialMaxPrice: number,
): number {
  let totalCount = 0;

  const minPrice = Number(searchParams.get(SearchParams.MIN_PRICE));
  const maxPrice = Number(searchParams.get(SearchParams.MAX_PRICE));
  const seats = Number(searchParams.get(SearchParams.MIN_SEATS));
  const bodyStyles = searchParams.getAll(SearchParams.BODY_STYLE);
  const engineTypes = searchParams.getAll(SearchParams.ENGINE_TYPE);
  const transmissions = searchParams.getAll(SearchParams.TRANSMISSION);

  if (minPrice && minPrice !== initialMinPrice) totalCount += 1;
  if (maxPrice && maxPrice !== initialMaxPrice) totalCount += 1;
  if (seats) totalCount += 1;

  totalCount += bodyStyles.length;
  totalCount += engineTypes.length;
  totalCount += transmissions.length;

  return totalCount;
}

export function updateSearchParams(
  newParams: URLSearchParams,
  selectedFilters: SelectedFilters,
  initialMinPrice: number,
  initialMaxPrice: number,
) {
  const { minPrice, maxPrice, seats, bodyStyles, engineTypes, transmissions } =
    selectedFilters;

  if (minPrice !== initialMinPrice)
    newParams.set(SearchParams.MIN_PRICE, minPrice.toString());
  else newParams.delete(SearchParams.MIN_PRICE);

  if (maxPrice !== initialMaxPrice)
    newParams.set(SearchParams.MAX_PRICE, maxPrice.toString());
  else newParams.delete(SearchParams.MAX_PRICE);

  if (seats) newParams.set(SearchParams.MIN_SEATS, seats.toString());
  else newParams.delete(SearchParams.MIN_SEATS);

  newParams.delete(SearchParams.BODY_STYLE);
  bodyStyles.forEach((bodyStyle) =>
    newParams.append(SearchParams.BODY_STYLE, bodyStyle),
  );

  newParams.delete(SearchParams.ENGINE_TYPE);
  engineTypes.forEach((engineType) =>
    newParams.append(SearchParams.ENGINE_TYPE, engineType),
  );

  newParams.delete(SearchParams.TRANSMISSION);
  transmissions.forEach((transmission) =>
    newParams.append(SearchParams.TRANSMISSION, transmission),
  );
}
