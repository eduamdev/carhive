import { ReadonlyURLSearchParams } from "next/navigation"

export const constructUrlWithParams = (
  pathname: string,
  params: URLSearchParams | ReadonlyURLSearchParams
): string => {
  const queryString = params.toString()
  return queryString ? `${pathname}?${queryString}` : pathname
}
