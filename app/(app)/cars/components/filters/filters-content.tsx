import { Dispatch, ReactNode, SetStateAction } from "react"

import { Separator } from "@/components/ui/separator"

import { BodyStyleFilters } from "./sections/body-style"
import { PowertrainFilters } from "./sections/powertrain"
import { PriceRangeFilters } from "./sections/price-range"
import { SeatingCapacityFilters } from "./sections/seating-capacity"
import { TransmissionTypeFilters } from "./sections/transmission-type"
import { SelectedFilters } from "./types"

interface FiltersContentProps {
  selectedFilters: SelectedFilters
  setSelectedFilters: Dispatch<SetStateAction<SelectedFilters>>
  initialMinPrice: number
  initialMaxPrice: number
}

export function FiltersContent({
  selectedFilters,
  setSelectedFilters,
  initialMinPrice,
  initialMaxPrice,
}: FiltersContentProps) {
  return (
    <div className="px-6">
      <FilterSection>
        <PowertrainFilters
          selectedFilters={selectedFilters}
          setSelectedFilters={setSelectedFilters}
        />
      </FilterSection>
      <FilterSeparator />
      <FilterSection>
        <PriceRangeFilters
          minPrice={initialMinPrice}
          maxPrice={initialMaxPrice}
          selectedFilters={selectedFilters}
          setSelectedFilters={setSelectedFilters}
        />
      </FilterSection>
      <FilterSeparator />
      <FilterSection>
        <BodyStyleFilters
          selectedFilters={selectedFilters}
          setSelectedFilters={setSelectedFilters}
        />
      </FilterSection>
      <FilterSeparator />
      <FilterSection>
        <SeatingCapacityFilters
          selectedFilters={selectedFilters}
          setSelectedFilters={setSelectedFilters}
        />
      </FilterSection>
      <FilterSeparator />
      <FilterSection>
        <TransmissionTypeFilters
          selectedFilters={selectedFilters}
          setSelectedFilters={setSelectedFilters}
        />
      </FilterSection>
    </div>
  )
}

function FilterSection({ children }: { children: ReactNode }) {
  return <div className="pb-8 pt-6">{children}</div>
}

function FilterSeparator() {
  return <Separator className="bg-black/[0.08]" />
}
