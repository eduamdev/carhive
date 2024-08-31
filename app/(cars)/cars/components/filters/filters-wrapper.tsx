import { getCars } from "@/db/queries"

import { SearchParams } from "@/app/lib/types"
import { slugify } from "@/app/lib/utils"

import { FiltersButton } from "./filters-button"

interface FiltersProps {
  searchParams: {
    [SearchParams.MIN_PRICE]?: string
    [SearchParams.MAX_PRICE]?: string
    [SearchParams.BODY_STYLE]?: string[]
    [SearchParams.POWERTRAIN]?: string
    [SearchParams.TRANSMISSION]?: string[]
    [SearchParams.MIN_SEATS]?: string
  }
}

export default async function Filters({ searchParams }: FiltersProps) {
  const cars = await getCars()

  const { MIN_PRICE, MAX_PRICE } = cars.reduce(
    (acc, car) => {
      acc.MIN_PRICE = Math.min(acc.MIN_PRICE, car.price_per_day)
      acc.MAX_PRICE = Math.max(acc.MAX_PRICE, car.price_per_day)
      return acc
    },
    { MIN_PRICE: Infinity, MAX_PRICE: -Infinity }
  )

  const {
    [SearchParams.MIN_PRICE]: minPrice,
    [SearchParams.MAX_PRICE]: maxPrice,
    [SearchParams.BODY_STYLE]: bodyStyles,
    [SearchParams.POWERTRAIN]: powertrain,
    [SearchParams.TRANSMISSION]: transmissions,
    [SearchParams.MIN_SEATS]: minSeats,
  } = searchParams

  const filteredCars = cars.filter((car) => {
    return (
      (!minPrice || car.price_per_day >= Number(minPrice)) &&
      (!maxPrice || car.price_per_day <= Number(maxPrice)) &&
      (!bodyStyles || bodyStyles.includes(slugify(car.body_style))) &&
      (!powertrain || powertrain === car.powertrain) &&
      (!transmissions || transmissions.includes(slugify(car.transmission))) &&
      (!minSeats || car.seats >= Number(minSeats))
    )
  })

  return (
    <div className="mx-auto size-full max-w-none px-5 sm:max-w-none sm:px-6">
      <div className="flex h-full items-center justify-between">
        <p className="text-sm font-medium text-neutral-800">
          {filteredCars.length > 0 &&
            (filteredCars.length > 1
              ? `${filteredCars.length} cars`
              : `${filteredCars.length} car`)}
        </p>
        <FiltersButton
          initialMinPrice={Math.round(MIN_PRICE)}
          initialMaxPrice={Math.round(MAX_PRICE)}
        />
      </div>
    </div>
  )
}
