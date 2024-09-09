import { Dispatch, SetStateAction } from "react"

import { Separator } from "@/components/ui/separator"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"

import { Powertrain, SelectedFilters } from "../types"

const powertrains: {
  slug: Powertrain
  name: string
}[] = [
  {
    slug: "gasoline",
    name: "Gasoline",
  },
  { slug: "diesel", name: "Diesel" },
  { slug: "hybrid", name: "Hybrid" },
  {
    slug: "electric",
    name: "Electric",
  },
]

interface PowertrainFiltersProps {
  selectedFilters: SelectedFilters
  setSelectedFilters: Dispatch<SetStateAction<SelectedFilters>>
}

export function PowertrainFilters({
  selectedFilters,
  setSelectedFilters,
}: PowertrainFiltersProps) {
  const handlePowertrainChange = (powertrain: Powertrain | undefined) => {
    setSelectedFilters((prevFilters) => ({
      ...prevFilters,
      powertrain: powertrain ?? undefined,
    }))
  }

  return (
    <section>
      <h3 className="text-lg font-semibold">Powertrain</h3>
      <div className="pt-5">
        <ToggleGroup
          type="single"
          value={selectedFilters.powertrain ?? ""}
          onValueChange={(value) =>
            handlePowertrainChange(value as Powertrain | undefined)
          }
          className="grid min-h-14 w-full auto-cols-fr grid-flow-col gap-0 rounded-2xl border border-neutral-300 p-1"
        >
          {powertrains.map(({ slug, name }) => (
            <ToggleGroupItem
              key={slug}
              value={slug}
              className="group relative m-0 size-full rounded-none p-0 first:rounded-l-xl last:rounded-r-xl hover:bg-none [&>span]:data-[state=off]:border-transparent [&>span]:data-[state=on]:border-black [&>span]:data-[state=off]:bg-transparent [&>span]:data-[state=on]:bg-neutral-50"
            >
              <span className="text-medium flex size-full items-center justify-center rounded-xl border-2 border-transparent text-[15px] group-hover:bg-neutral-50">
                {name}
              </span>
              <Separator
                orientation="vertical"
                className="h-1/2 group-last:hidden"
              />
            </ToggleGroupItem>
          ))}
        </ToggleGroup>
      </div>
    </section>
  )
}
