import { Dispatch, ReactNode, SetStateAction } from "react"

import { Separator } from "@/app/components/ui/separator"

import { BodyStyleSection } from "./sections/body-style"
import { PowertrainSection } from "./sections/powertrain"
import { PriceRangeSection } from "./sections/price-range"
import { SeatingCapacitySection } from "./sections/seating-capacity"
import { TransmissionTypeSection } from "./sections/transmission-type"
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
        <PowertrainSection
          selectedFilters={selectedFilters}
          setSelectedFilters={setSelectedFilters}
        />
      </FilterSection>
      <FilterSeparator />
      <FilterSection>
        <PriceRangeSection
          minPrice={initialMinPrice}
          maxPrice={initialMaxPrice}
          selectedFilters={selectedFilters}
          setSelectedFilters={setSelectedFilters}
        />
      </FilterSection>
      <FilterSeparator />
      <FilterSection>
        <BodyStyleSection
          selectedFilters={selectedFilters}
          setSelectedFilters={setSelectedFilters}
        />
      </FilterSection>
      <FilterSeparator />
      <FilterSection>
        <SeatingCapacitySection
          selectedFilters={selectedFilters}
          setSelectedFilters={setSelectedFilters}
        />
      </FilterSection>
      <FilterSeparator />
      <FilterSection>
        <TransmissionTypeSection
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
  return <Separator className="bg-neutral-100" />
}
