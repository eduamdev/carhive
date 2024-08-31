import { Metadata } from "next"
import { notFound } from "next/navigation"
import { getCarBySlug, getCars, getLocations } from "@/db/queries"

import { CheckIcon } from "@/app/components/icons/check"
import { HeadsetIcon } from "@/app/components/icons/headset"
import { KidIcon } from "@/app/components/icons/kid"
import { NavigationIcon } from "@/app/components/icons/navigation"
import { WifiIcon } from "@/app/components/icons/wifi"
import { Separator } from "@/app/components/ui/separator"

import { ReservationSidebar } from "./components/reservation-sidebar"

interface CarDetailsPageProps {
  params: { slug: string }
}

export async function generateMetadata({
  params,
}: CarDetailsPageProps): Promise<Metadata> {
  // read route params
  const slug = params.slug

  // fetch data
  const car = await getCarBySlug(slug)

  if (!car) {
    return {}
  }

  return {
    title: car.name,
    description: car.description,
  }
}

export async function generateStaticParams() {
  const cars = await getCars()
  return cars.map((car) => ({ slug: car.slug }))
}

export default async function CarDetailsPage({ params }: CarDetailsPageProps) {
  const [car, locations] = await Promise.all([
    getCarBySlug(params.slug),
    getLocations(),
  ])

  if (!car) {
    notFound()
  }

  return (
    <div className="py-[var(--car-page-main-content-padding-y)]">
      <div className="mx-auto w-full max-w-none px-5 sm:max-w-[90%] sm:px-0 xl:max-w-6xl">
        <div className="grid w-full grid-cols-1 gap-24 md:grid-cols-[1fr_var(--card-reserve-width)]">
          <div className="p-6 px-0 pb-0 md:pb-0 md:pr-6">
            <div className="flex flex-col">
              <h1 className="text-xl font-semibold">{car.name}</h1>
              <div className="mt-2 flex flex-wrap items-center gap-1.5 text-[13px] capitalize text-neutral-800 lg:text-base">
                <span>{car.seats} seats</span>
                <span>·</span>
                <span>{car.powertrain}</span>
                <span>·</span>
                <span>{car.transmission}</span>
                {car.unlimited_mileage && (
                  <>
                    <span>·</span>
                    <span>Unlimited mileage</span>
                  </>
                )}
              </div>
            </div>

            <Separator decorative orientation="horizontal" className="my-6" />
            <div className="flex flex-col gap-6">
              <div className="flex flex-row gap-8">
                <NavigationIcon className="size-6 shrink-0" />
                <div className="flex flex-col">
                  <p className="font-semibold">Onboard Navigation System</p>
                  <p className="mt-0.5 text-[14px] leading-5 text-neutral-600">
                    A car equipped with a GPS navigation system to help you find
                    your way with ease.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-8">
                <HeadsetIcon className="size-6 shrink-0" />
                <div className="flex flex-col">
                  <p className="font-semibold">24/7 Roadside Assistance</p>
                  <p className="mt-0.5 text-[14px] leading-5 text-neutral-600">
                    Access to round-the-clock roadside support for any
                    emergencies or breakdowns.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-8">
                <WifiIcon className="size-6 shrink-0" />
                <div className="flex flex-col">
                  <p className="font-semibold">Free Wi-Fi in the Car</p>
                  <p className="mt-0.5 text-[14px] leading-5 text-neutral-600">
                    Enjoy complimentary Wi-Fi access during your drive to stay
                    connected on the go.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-8">
                <KidIcon className="size-6 shrink-0" />
                <div className="flex flex-col">
                  <p className="font-semibold">Child Safety Seats Available</p>
                  <p className="mt-0.5 text-[14px] leading-5 text-neutral-600">
                    Optional child safety seats are available to ensure the
                    safety of your little ones.
                  </p>
                </div>
              </div>
            </div>
            <Separator decorative orientation="horizontal" className="my-6" />
            <div className="mt-10 space-y-6">
              <p className="text-neutral-800">{car.description}</p>
            </div>
            <Separator decorative orientation="horizontal" className="my-12" />
            <div className="mb-6">
              <h2 className="text-lg font-semibold">Features</h2>
              <div className="mt-6 grid grid-cols-2 gap-4">
                {car.features.map((feature) => (
                  <div
                    key={feature}
                    className="flex flex-row items-center gap-4"
                  >
                    <CheckIcon className="size-4 shrink-0 [stroke-width:2.5px]" />
                    <p className="text-neutral-700">{feature}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <ReservationSidebar
            carSlug={params.slug}
            pricePerDay={car.price_per_day}
            currency={car.currency}
            rating={car.rating}
            reviews={car.review_count}
            locations={locations}
          />
        </div>
      </div>
    </div>
  )
}
