import { Suspense } from "react"
import type { Metadata } from "next"
import { getCars, getLocations } from "@/db/queries"

import { SearchPanel } from "@/app/(home)/components/search-panel"
import { LogoLink } from "@/app/components/logoLink"
import { UserMenuButton } from "@/app/components/user-menu-button"
import { SearchParams } from "@/app/lib/types"
import { slugify } from "@/app/lib/utils"

import { CarCard } from "./components/car-card"
import { FiltersButton } from "./components/filters/filters-button"
import { MapContainer } from "./components/map-container"

export const metadata: Metadata = {
  title: "Cars",
}

interface CarCatalogPageProps {
  searchParams: {
    [SearchParams.MIN_PRICE]?: string
    [SearchParams.MAX_PRICE]?: string
    [SearchParams.BODY_STYLE]?: string[]
    [SearchParams.POWERTRAIN]?: string
    [SearchParams.TRANSMISSION]?: string[]
    [SearchParams.MIN_SEATS]?: string
  }
}

export default async function CarCatalogPage({
  searchParams,
}: CarCatalogPageProps) {
  const [cars, locations] = await Promise.all([getCars(), getLocations()])

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
    <>
      <header className="sticky top-0 z-30 flex h-[var(--cars-header-height)] w-full flex-col bg-white shadow-[inset_0_-1px_0_0_#eaeaea]">
        <div className="h-[80px] border-b border-black/[0.07]">
          <div className="mx-auto size-full max-w-none px-5 sm:max-w-none sm:px-6">
            <div className="flex h-full items-center justify-between gap-x-4">
              <LogoLink />
              <div className="hidden md:block">
                <Suspense>
                  <SearchPanel locations={locations} compact />
                </Suspense>
              </div>
              <div className="inline-flex">
                <UserMenuButton />
              </div>
            </div>
          </div>
        </div>
        <div className="hidden h-[calc(var(--cars-header-height)_-_80px)] lg:block">
          <div className="mx-auto size-full max-w-none px-5 sm:max-w-none sm:px-6">
            <div className="flex h-full items-center justify-between">
              <p className="text-sm font-medium text-neutral-800">
                {filteredCars.length > 0 &&
                  (filteredCars.length > 1
                    ? `${filteredCars.length} cars`
                    : `${filteredCars.length} car`)}
              </p>
              <FiltersButton
                initialMinPrice={MIN_PRICE}
                initialMaxPrice={MAX_PRICE}
              />
            </div>
          </div>
        </div>
      </header>
      <main>
        <div className="flex flex-row">
          <div className="w-full shrink-0 grow-0 flex-col overflow-y-auto bg-neutral-50 md:w-[55%] xl:w-[63%]">
            <Suspense>
              <div className="px-5 pb-10 pt-8 sm:px-6 sm:pb-10 sm:pt-8">
                {!filteredCars.length ? (
                  <div>
                    <h1 className="text-xl font-semibold">No exact matches</h1>
                    <p className="mt-3 text-slate-700">
                      Try changing or removing some of your filters.
                    </p>
                  </div>
                ) : (
                  <div className="grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] items-stretch justify-center gap-[22px]">
                    {filteredCars.map(({ id, slug }, index) => (
                      <CarCard key={id} index={index} slug={slug} />
                    ))}
                  </div>
                )}
              </div>
            </Suspense>
          </div>
          <div className="hidden flex-auto md:block">
            <MapContainer />
          </div>
        </div>
      </main>
    </>
  )
}
