import { Metadata } from "next"
import { notFound } from "next/navigation"
import { getCarBySlug, getCars } from "@/db/queries/car-repository"
import { getCldImageUrl } from "next-cloudinary"

import { convertImageUrlToDataUrl } from "@/lib/utils"
import { Separator } from "@/components/ui/separator"
import CldImage from "@/components/cld-image"
import { CheckIcon } from "@/components/icons/check"
import { FilledStarIcon } from "@/components/icons/filled-star"
import { HeadsetIcon } from "@/components/icons/headset"
import { KidIcon } from "@/components/icons/kid"
import { NavigationIcon } from "@/components/icons/navigation"
import { WifiIcon } from "@/components/icons/wifi"

import { ReserveCard } from "./components/reserve-card"

export async function generateMetadata({
  params,
}: CarDetailsPageProps): Promise<Metadata> {
  const car = await getCarBySlug(params.slug)

  if (!car) return {}

  return {
    title: car.name,
    description: car.description,
  }
}

export async function generateStaticParams() {
  const cars = await getCars()
  return cars.map((car) => ({ slug: car.slug }))
}

interface CarDetailsPageProps {
  params: { slug: string }
}

export default async function CarDetailsPage({ params }: CarDetailsPageProps) {
  const car = await getCarBySlug(params.slug)

  if (!car) {
    notFound()
  }

  const carInteriorUrl = getCldImageUrl({
    src: "carhive/cars/car-interior_d6nmyn",
    width: 100, // Resize the original file to a smaller size
  })
  const carDoorPanelUrl = getCldImageUrl({
    src: "carhive/cars/car-door-panel_puxkbc",
    width: 50,
  })
  const carSeatUrl = getCldImageUrl({
    src: "carhive/cars/car-seat_rnzgv6",
    width: 50,
  })

  const [carInteriorDataUrl, carDoorPanelDataUrl, carSeatDataUrl] =
    await Promise.all([
      convertImageUrlToDataUrl(carInteriorUrl),
      convertImageUrlToDataUrl(carDoorPanelUrl),
      convertImageUrlToDataUrl(carSeatUrl),
    ])

  return (
    <main
      className="[--content-padding-y:32px] [--reserve-card-width:370px] md:[--content-padding-y:56px]"
      style={
        {
          "--reserve-card-top-offset":
            "calc(var(--site-header-height) + var(--content-padding-y)",
        } as React.CSSProperties
      }
    >
      <div className="mx-auto w-full max-w-none p-0 md:max-w-[90%] xl:max-w-6xl">
        <div className="hidden md:block md:pt-8">
          <h1 className="text-balance text-2xl font-semibold">{car.name}</h1>
        </div>
        <div className="md:pt-4">
          <div className="grid h-80 grid-cols-1 grid-rows-1 gap-3 md:h-[34rem] md:grid-cols-4 md:grid-rows-2">
            <div className="relative overflow-hidden md:col-span-3 md:row-span-2 md:rounded-l-2xl">
              {carInteriorDataUrl ? (
                <CldImage
                  src={`carhive/cars/car-interior_d6nmyn`}
                  alt="car interior"
                  priority
                  fill
                  sizes="66vw"
                  className="object-cover"
                  placeholder="blur"
                  blurDataURL={carInteriorDataUrl}
                />
              ) : (
                <CldImage
                  src={`carhive/cars/car-interior_d6nmyn`}
                  alt="car interior"
                  priority
                  fill
                  sizes="66vw"
                  className="object-cover"
                />
              )}
            </div>
            <div className="relative col-span-1 row-span-1 hidden overflow-hidden rounded-tr-2xl md:block">
              {carDoorPanelDataUrl ? (
                <CldImage
                  src={`carhive/cars/car-door-panel_puxkbc`}
                  alt="car door panel"
                  priority
                  fill
                  sizes="33vw"
                  className="object-cover"
                  placeholder="blur"
                  blurDataURL={carDoorPanelDataUrl}
                />
              ) : (
                <CldImage
                  src={`carhive/cars/car-door-panel_puxkbc`}
                  alt="car door panel"
                  priority
                  fill
                  sizes="33vw"
                  className="object-cover"
                />
              )}
            </div>
            <div className="relative col-span-1 row-span-1 hidden overflow-hidden rounded-br-2xl md:block">
              {carSeatDataUrl ? (
                <CldImage
                  src={`carhive/cars/car-seat_rnzgv6`}
                  alt="car seat"
                  priority
                  fill
                  sizes="33vw"
                  className="object-cover"
                  placeholder="blur"
                  blurDataURL={carSeatDataUrl}
                />
              ) : (
                <CldImage
                  src={`carhive/cars/car-seat_rnzgv6`}
                  alt="car seat"
                  priority
                  fill
                  sizes="33vw"
                  className="object-cover"
                />
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="py-[var(--content-padding-y)]">
        <div className="mx-auto w-full max-w-none px-5 sm:max-w-[90%] sm:px-0 xl:max-w-6xl">
          <div className="grid w-full grid-cols-1 gap-24 md:grid-cols-[1fr_auto]">
            <div className="text-balance">
              <h1 className="text-2xl font-semibold md:hidden">{car.name}</h1>
              <div className="flex flex-wrap items-center gap-1 text-[13px] capitalize text-neutral-800 lg:text-[15px]">
                <span>{car.seats} seats</span>
                <span className="text-xl">·</span>
                <span>{car.powertrain}</span>
                <span className="text-xl">·</span>
                <span>{car.transmission}</span>
                {car.unlimitedMileage && (
                  <>
                    <span className="text-xl">·</span>
                    <span>Unlimited mileage</span>
                  </>
                )}
              </div>
              <div className="pt-1">
                <div className="flex items-center gap-1 text-[15px] font-medium lg:text-[16px]">
                  <div className="flex items-center gap-1 ">
                    <FilledStarIcon className="inline-flex size-[15px] shrink-0" />
                    <span className=" tabular-nums">{car.rating}</span>
                  </div>
                  <span className="text-xl">·</span>
                  {Number(car.reviewCount) > 0 && (
                    <span className="text-neutral-800">
                      {car.reviewCount} reviews
                    </span>
                  )}
                </div>
              </div>

              <Separator className="my-8" />

              <div className="flex flex-col gap-6">
                <div className="flex flex-row gap-8">
                  <NavigationIcon className="size-6 shrink-0" />
                  <div className="flex flex-col">
                    <p className="font-semibold">Onboard Navigation System</p>
                    <p className="mt-0.5 text-[14px] leading-5 text-neutral-600">
                      A car equipped with a GPS navigation system to help you
                      find your way with ease.
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
                    <p className="font-semibold">
                      Child Safety Seats Available
                    </p>
                    <p className="mt-0.5 text-[14px] leading-5 text-neutral-600">
                      Optional child safety seats are available to ensure the
                      safety of your little ones.
                    </p>
                  </div>
                </div>
              </div>

              <Separator className="my-10" />

              <div className="mt-10 space-y-6">
                <p className="text-neutral-800">{car.description}</p>
              </div>

              <Separator className="my-12" />

              <h2 className="text-lg font-semibold lg:text-xl">
                What this car offers
              </h2>
              <div className="pt-8">
                <div className="grid grid-cols-2 gap-4">
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
            <div className="hidden w-[var(--reserve-card-width)] md:block">
              <div className="sticky top-[var(--reserve-card-top-offset)]">
                <ReserveCard car={car} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
