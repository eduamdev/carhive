import { Dispatch, SetStateAction } from "react"

import { Toggle } from "@/components/ui/toggle"
import { CarIcon } from "@/components/icons/car"
import { HatchbackIcon } from "@/components/icons/hatchback"
import { MinivanIcon } from "@/components/icons/minivan"
import { RoadsterIcon } from "@/components/icons/roadster"
import { SUVIcon } from "@/components/icons/suv"
import { TruckIcon } from "@/components/icons/truck"

import { BodyStyle, SelectedFilters } from "../types"

export const bodyStyles: {
  slug: BodyStyle
  name: string
  icon: (props: React.HTMLAttributes<SVGElement>) => JSX.Element
}[] = [
  {
    slug: "hatchback",
    name: "Hatchback",
    icon: HatchbackIcon,
  },
  { slug: "minivan", name: "Minivan", icon: MinivanIcon },
  {
    slug: "pickup-truck",
    name: "Pickup Truck",
    icon: TruckIcon,
  },
  {
    slug: "sports-car",
    name: "Sports Car",
    icon: RoadsterIcon,
  },
  { slug: "suv", name: "SUV", icon: SUVIcon },
  { slug: "sedan", name: "Sedan", icon: CarIcon },
]

interface BodyStyleFiltersProps {
  selectedFilters: SelectedFilters
  setSelectedFilters: Dispatch<SetStateAction<SelectedFilters>>
}

export function BodyStyleFilters({
  selectedFilters,
  setSelectedFilters,
}: BodyStyleFiltersProps) {
  const handleBodyStyleToggle = (bodyStyle: BodyStyle) => {
    setSelectedFilters((prevFilters) => {
      const bodyStylesSelected = prevFilters.bodyStyles.includes(bodyStyle)
        ? prevFilters.bodyStyles.filter((selected) => selected !== bodyStyle)
        : [...prevFilters.bodyStyles, bodyStyle]

      return { ...prevFilters, bodyStyles: bodyStylesSelected }
    })
  }

  return (
    <section>
      <h3 className="text-lg font-semibold">Body Style</h3>
      <div className="pt-6">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-3.5">
          {bodyStyles.map(({ slug, name, icon: Icon }) => (
            <Toggle
              key={slug}
              variant={"outline"}
              className="h-[50px] rounded-full px-4"
              pressed={selectedFilters.bodyStyles.includes(slug)}
              onPressedChange={() => handleBodyStyleToggle(slug)}
            >
              <Icon className="mr-2.5 size-7" />
              <span className="text-sm font-normal text-neutral-950">
                {name}
              </span>
            </Toggle>
          ))}
        </div>
      </div>
    </section>
  )
}
