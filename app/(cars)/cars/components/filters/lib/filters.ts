import { SearchParams } from "@/lib/types"

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

export function countActiveFilters(
  searchParams: URLSearchParams,
  initialMinPrice: number,
  initialMaxPrice: number
): number {
  let totalCount = 0

  const minPrice = Number(searchParams.get(SearchParams.MIN_PRICE))
  const maxPrice = Number(searchParams.get(SearchParams.MAX_PRICE))
  const seats = Number(searchParams.get(SearchParams.MIN_SEATS))
  const bodyStyles = searchParams.getAll(SearchParams.BODY_STYLE)
  const powertrain = searchParams.get(SearchParams.POWERTRAIN)
  const transmissions = searchParams.getAll(SearchParams.TRANSMISSION)

  if (minPrice && minPrice !== initialMinPrice) totalCount += 1
  if (maxPrice && maxPrice !== initialMaxPrice) totalCount += 1
  if (seats) totalCount += 1
  if (powertrain) totalCount += 1

  totalCount += bodyStyles.length
  totalCount += transmissions.length

  return totalCount
}
