import { SelectCar } from "@/db/schema"

import CldImage from "@/components/cld-image"
import { FilledStarIcon } from "@/components/icons/filled-star"

export function CarDetails({ car }: { car: SelectCar }) {
  return (
    <div className="grid grid-cols-1 gap-5 min-[360px]:flex">
      <div className="relative aspect-square w-[100px] shrink-0">
        <CldImage
          src={car.imageUrl}
          alt={car.name}
          className="rounded-xl object-cover"
          fill
          sizes="200px"
          priority
        />
      </div>
      <div className="flex flex-col gap-1 text-balance capitalize">
        <strong className="font-medium leading-5">{car.name}</strong>
        <span className="text-[14px] leading-5">{car.transmission}</span>
        <span className="text-[14px] leading-5">{car.powertrain}</span>
        <div className="flex flex-row items-center gap-0.5 text-[15px]">
          <FilledStarIcon className="size-3 shrink-0" />
          <strong className="font-medium">{car.rating}</strong>
          <span className="text-[14px]">({car.reviewCount} reviews)</span>
        </div>
      </div>
    </div>
  )
}
