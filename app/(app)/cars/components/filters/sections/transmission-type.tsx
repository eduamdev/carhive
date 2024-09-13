import { Dispatch, SetStateAction } from "react"

import { Toggle } from "@/components/ui/toggle"
import { AutomaticGearboxIcon } from "@/components/icons/automatic-gearbox"
import { ManualGearboxIcon } from "@/components/icons/manual-gearbox"

import { SelectedFilters, Transmission } from "../types"

const transmissions: {
  slug: Transmission
  name: string
  icon: (props: React.HTMLAttributes<SVGElement>) => JSX.Element
}[] = [
  {
    slug: "automatic",
    name: "Automatic",
    icon: AutomaticGearboxIcon,
  },
  { slug: "manual", name: "Manual", icon: ManualGearboxIcon },
]

interface TransmissionTypeFiltersProps {
  selectedFilters: SelectedFilters
  setSelectedFilters: Dispatch<SetStateAction<SelectedFilters>>
}

export function TransmissionTypeFilters({
  selectedFilters,
  setSelectedFilters,
}: TransmissionTypeFiltersProps) {
  const handleTransmissionToggle = (transmission: Transmission) => {
    setSelectedFilters((prevFilters) => {
      const transmissionsSelected = prevFilters.transmissions.includes(
        transmission
      )
        ? prevFilters.transmissions.filter(
            (selected) => selected !== transmission
          )
        : [...prevFilters.transmissions, transmission]

      return { ...prevFilters, transmissions: transmissionsSelected }
    })
  }

  return (
    <section>
      <h3 className="text-lg font-semibold">Transmission</h3>
      <div className="pt-6">
        <div className="flex flex-wrap items-center gap-x-2.5 gap-y-3">
          {transmissions.map(({ slug, name, icon: Icon }) => (
            <Toggle
              key={slug}
              variant={"outline"}
              className="h-[50px] rounded-full px-4"
              pressed={selectedFilters.transmissions.includes(slug)}
              onPressedChange={() => handleTransmissionToggle(slug)}
            >
              <Icon className="mr-2.5 size-7 [stroke-width:1.5]" />
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
