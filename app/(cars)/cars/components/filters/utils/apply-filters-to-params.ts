import { SearchParams } from "@/app/lib/types"

import { SelectedFilters } from "../types"

export function applyFiltersToParams(
  newParams: URLSearchParams,
  selectedFilters: SelectedFilters,
  initialMinPrice: number,
  initialMaxPrice: number
) {
  const { minPrice, maxPrice, seats, bodyStyles, powertrain, transmissions } =
    selectedFilters

  if (minPrice !== initialMinPrice)
    newParams.set(SearchParams.MIN_PRICE, minPrice.toString())
  else newParams.delete(SearchParams.MIN_PRICE)

  if (maxPrice !== initialMaxPrice)
    newParams.set(SearchParams.MAX_PRICE, maxPrice.toString())
  else newParams.delete(SearchParams.MAX_PRICE)

  if (seats) newParams.set(SearchParams.MIN_SEATS, seats.toString())
  else newParams.delete(SearchParams.MIN_SEATS)

  if (powertrain) newParams.set(SearchParams.POWERTRAIN, powertrain)
  else newParams.delete(SearchParams.POWERTRAIN)

  newParams.delete(SearchParams.BODY_STYLE)
  bodyStyles.forEach((bodyStyle) =>
    newParams.append(SearchParams.BODY_STYLE, bodyStyle)
  )

  newParams.delete(SearchParams.TRANSMISSION)
  transmissions.forEach((transmission) =>
    newParams.append(SearchParams.TRANSMISSION, transmission)
  )
}
