import { SearchParams } from "@/app/lib/types"

import { BodyStyle, Powertrain, SelectedFilters, Transmission } from "../types"

export function initializeFiltersFromParams(
  searchParams: URLSearchParams,
  initialMinPrice: number,
  initialMaxPrice: number
): SelectedFilters {
  return {
    minPrice:
      Number(searchParams.get(SearchParams.MIN_PRICE)) || initialMinPrice,
    maxPrice:
      Number(searchParams.get(SearchParams.MAX_PRICE)) || initialMaxPrice,
    seats: Number(searchParams.get(SearchParams.MIN_SEATS)) || undefined,
    bodyStyles: searchParams.getAll(SearchParams.BODY_STYLE) as BodyStyle[],
    powertrain: searchParams.get(SearchParams.POWERTRAIN) as Powertrain,
    transmissions: searchParams.getAll(
      SearchParams.TRANSMISSION
    ) as Transmission[],
  }
}
