import { getCarBySlug } from "@/db/queries"

import { CloudinaryImage } from "@/app/components/cloudinary-image"
import { AutomaticGearboxIcon } from "@/app/components/icons/automatic-gearbox"
import { ChargingPileIcon } from "@/app/components/icons/charging-pile"
import { FilledStarIcon } from "@/app/components/icons/filled-star"
import { GasStationIcon } from "@/app/components/icons/gas-station"
import { ManualGearboxIcon } from "@/app/components/icons/manual-gearbox"
import { formatCurrency } from "@/app/lib/utils"

import { CarDetailsButton } from "./car-details-button"

interface CarCardProps {
  index: number
  slug: string
}

export async function CarCard({ index, slug }: CarCardProps) {
  const car = await getCarBySlug(slug)

  if (!car) {
    return null
  }

  const {
    name,
    image_url,
    transmission,
    powertrain,
    price_per_day,
    currency,
    rating,
    review_count,
  } = car

  return (
    <article className="overflow-hidden rounded-[10px] border border-black/[0.08] bg-white text-sm shadow-sm">
      <div className="relative aspect-video h-40 w-full">
        <CloudinaryImage
          src={image_url}
          alt=""
          fill
          className="object-cover"
          sizes="(max-width: 569px) 100vw, (max-width: 840px) 50vw, (max-width: 949px) 33vw, (max-width: 1036px) 60vw, (max-width: 1336px) 30vw, 300px"
          priority
        />
      </div>
      <div className="flex flex-col gap-1.5 p-5">
        <div className="flex items-center justify-between gap-1">
          <span className="truncate font-semibold">{name}</span>
          <div className="inline-flex shrink-0 items-center justify-center gap-x-1">
            <FilledStarIcon className="inline size-3 shrink-0 " />
            <span className="leading-none">
              <span className="font-medium">{rating}</span>{" "}
              <span className="text-neutral-600">
                {review_count > 0 && `(${review_count})`}
              </span>
            </span>
          </div>
        </div>
        <div className="capitalize text-neutral-600">
          <div className="flex items-center">
            {powertrain.toLowerCase() === "gasoline" ? (
              <GasStationIcon className="mr-1.5 inline size-[14px] shrink-0" />
            ) : (
              <ChargingPileIcon className="mr-1.5 inline size-[14px] shrink-0" />
            )}
            <span>{powertrain}</span>
          </div>
          <div className="flex items-center">
            {transmission.toLowerCase() === "automatic" ? (
              <AutomaticGearboxIcon className="mr-1.5 inline size-[14px] shrink-0" />
            ) : (
              <ManualGearboxIcon className="mr-1.5 inline size-[14px] shrink-0" />
            )}
            <span>{transmission}</span>
          </div>
        </div>
        <div className="pt-1">
          <span className="text-[15px] font-semibold tabular-nums leading-none">
            {formatCurrency(price_per_day, currency)}
          </span>
          <span className="ml-1 leading-none text-neutral-900">day</span>
        </div>
        <div className="pt-4">
          <CarDetailsButton slug={slug} />
        </div>
      </div>
    </article>
  )
}
