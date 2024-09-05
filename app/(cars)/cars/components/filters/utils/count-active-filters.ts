import { SearchParams } from "@/app/lib/types"

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
