import {
  ChangeEvent,
  Dispatch,
  SetStateAction,
  useEffect,
  useState,
} from "react"

import { useDebounce } from "@/hooks/use-debounce"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"

import { SelectedFilters } from "../types"

interface PriceRangeFiltersProps {
  minPrice: number
  maxPrice: number
  selectedFilters: SelectedFilters
  setSelectedFilters: Dispatch<SetStateAction<SelectedFilters>>
}

export function PriceRangeFilters({
  minPrice: MIN_PRICE,
  maxPrice: MAX_PRICE,
  selectedFilters,
  setSelectedFilters,
}: PriceRangeFiltersProps) {
  const [tempMinPrice, setTempMinPrice] = useState(
    selectedFilters.minPrice || MIN_PRICE
  )
  const [tempMaxPrice, setTempMaxPrice] = useState(
    selectedFilters.maxPrice || MAX_PRICE
  )

  const debouncedMinPrice = useDebounce(tempMinPrice, 500)
  const debouncedMaxPrice = useDebounce(tempMaxPrice, 500)

  useEffect(() => {
    setTempMinPrice(selectedFilters.minPrice || MIN_PRICE)
    setTempMaxPrice(selectedFilters.maxPrice || MAX_PRICE)
  }, [selectedFilters, MIN_PRICE, MAX_PRICE])

  // Validate the debounced values and update the selected filters
  useEffect(() => {
    let validatedMinPrice = debouncedMinPrice
    let validatedMaxPrice = debouncedMaxPrice

    // Validation: debounced min price should not be higher than max prices
    if (
      debouncedMinPrice > MAX_PRICE ||
      debouncedMinPrice > tempMaxPrice ||
      debouncedMinPrice > debouncedMaxPrice
    ) {
      validatedMinPrice =
        selectedFilters.minPrice <= MAX_PRICE
          ? selectedFilters.minPrice
          : MIN_PRICE
    }

    // Validation: debounced max price should not be lower than min prices
    if (
      debouncedMaxPrice < MIN_PRICE ||
      debouncedMaxPrice < tempMinPrice ||
      debouncedMaxPrice < debouncedMinPrice
    ) {
      validatedMaxPrice =
        selectedFilters.maxPrice >= MIN_PRICE
          ? selectedFilters.maxPrice
          : MAX_PRICE
    }

    if (validatedMinPrice < MIN_PRICE) {
      validatedMinPrice = MIN_PRICE
    }

    if (validatedMaxPrice > MAX_PRICE) {
      validatedMaxPrice = MAX_PRICE
    }

    setSelectedFilters({
      ...selectedFilters,
      minPrice: validatedMinPrice,
      maxPrice: validatedMaxPrice,
    })
    setTempMinPrice(validatedMinPrice)
    setTempMaxPrice(validatedMaxPrice)
  }, [debouncedMinPrice, debouncedMaxPrice])

  const handleMinPriceChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTempMinPrice(parseInt(e.target.value, 10) || MIN_PRICE)
  }

  const handleMaxPriceChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTempMaxPrice(parseInt(e.target.value, 10) || MAX_PRICE)
  }

  const handleSliderChange = (priceRange: number[]) => {
    setTempMinPrice(priceRange[0])
    setTempMaxPrice(priceRange[1])
  }

  return (
    <section>
      <h3 className="text-lg font-semibold">Price range</h3>
      <div className="pt-0.5">
        <p className="text-[15px] text-neutral-700">
          Daily prices before fees and taxes
        </p>
      </div>
      <div className="pt-10">
        <Slider
          defaultValue={[MIN_PRICE, MAX_PRICE]}
          value={[tempMinPrice, tempMaxPrice]}
          onValueChange={handleSliderChange}
          min={MIN_PRICE}
          max={MAX_PRICE}
          step={1}
          minStepsBetweenThumbs={1}
        />
        <div className="pt-7">
          <div className="flex items-center justify-between">
            <div className="flex flex-col items-center gap-2.5">
              <Label htmlFor="price_filter_min" className="text-neutral-600">
                Minimum
              </Label>
              <Input
                id="price_filter_min"
                type="text"
                inputMode="numeric"
                className="h-12 w-24 rounded-full text-center tabular-nums"
                value={tempMinPrice}
                onChange={handleMinPriceChange}
              />
            </div>
            <div className="flex flex-col items-center gap-2.5">
              <Label htmlFor="price_filter_max" className="text-neutral-600">
                Maximum
              </Label>
              <Input
                id="price_filter_max"
                type="text"
                inputMode="numeric"
                className="h-12 w-24 rounded-full text-center tabular-nums"
                value={tempMaxPrice}
                onChange={handleMaxPriceChange}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
