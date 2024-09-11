import { ReactNode } from "react"
import { getCars } from "@/db/queries/car-repository"

import { FiltersButton } from "./filters-button"

interface FiltersProps {
  trigger?: ReactNode
}

export default async function Filters({ trigger }: FiltersProps) {
  const cars = await getCars()

  const { MIN_PRICE, MAX_PRICE } = cars.reduce(
    (acc, car) => {
      acc.MIN_PRICE = Math.min(acc.MIN_PRICE, Number(car.pricePerDay))
      acc.MAX_PRICE = Math.max(acc.MAX_PRICE, Number(car.pricePerDay))
      return acc
    },
    { MIN_PRICE: Infinity, MAX_PRICE: -Infinity }
  )

  return (
    <FiltersButton
      initialMinPrice={Math.round(MIN_PRICE)}
      initialMaxPrice={Math.round(MAX_PRICE)}
      trigger={trigger}
    />
  )
}
