import { getCars } from "@/db/queries"

import { SearchParams } from "@/lib/types"
import { slugify } from "@/lib/utils"

import { CarCard } from "./car-card"

interface CarCatalogProps {
  searchParams: {
    [SearchParams.MIN_PRICE]?: string
    [SearchParams.MAX_PRICE]?: string
    [SearchParams.BODY_STYLE]?: string[]
    [SearchParams.POWERTRAIN]?: string
    [SearchParams.TRANSMISSION]?: string[]
    [SearchParams.MIN_SEATS]?: string
  }
}

export default async function CarCatalog({ searchParams }: CarCatalogProps) {
  const cars = await getCars()

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

  if (!filteredCars.length)
    return (
      <div className="col-span-full text-balance">
        <h1 className="text-xl font-semibold">No exact matches</h1>
        <p className="mt-3 text-slate-700">
          Try changing or removing some of your filters.
        </p>
      </div>
    )

  return (
    <>
      {filteredCars.map((car) => (
        <CarCard key={car.id} car={car} />
      ))}
    </>
  )
}
