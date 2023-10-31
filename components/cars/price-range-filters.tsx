import { ChangeEvent, Dispatch, SetStateAction } from 'react';
import { Slider } from '@/components/ui/slider';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { SelectedFilters } from '@/types/filters';

interface PriceRangeFiltersProps {
  minPrice: number;
  maxPrice: number;
  selectedFilters: SelectedFilters;
  setSelectedFilters: Dispatch<SetStateAction<SelectedFilters>>;
}

export function PriceRangeFilters({
  minPrice: MIN_PRICE,
  maxPrice: MAX_PRICE,
  selectedFilters,
  setSelectedFilters,
}: PriceRangeFiltersProps) {
  function handleSliderChange(
    priceRange: number[],
    selectedFilters: SelectedFilters,
    setSelectedFilters: Dispatch<SetStateAction<SelectedFilters>>,
  ) {
    setSelectedFilters({
      ...selectedFilters,
      minPrice: priceRange[0],
      maxPrice: priceRange[1],
    });
  }

  return (
    <div className="relative px-6 py-8 after:absolute after:inset-x-6 after:bottom-0 after:h-px after:bg-neutral-100 after:content-['']">
      <section>
        <h3 className="pb-6 text-xl font-semibold">Price range</h3>
        <div className="mx-auto flex max-w-[600px] flex-col items-start justify-between gap-12 pt-2">
          <Slider
            defaultValue={[MIN_PRICE, MAX_PRICE]}
            value={[selectedFilters.minPrice, selectedFilters.maxPrice]}
            onValueChange={(values) =>
              handleSliderChange(values, selectedFilters, setSelectedFilters)
            }
            min={MIN_PRICE}
            max={MAX_PRICE}
            step={1}
            minStepsBetweenThumbs={1}
          />

          <div className="flex w-full items-center justify-between gap-6">
            <div className="relative h-14 w-full">
              <Label
                htmlFor="price_filter_min"
                className="absolute left-3 top-2.5 w-full max-w-full truncate pr-6 text-xs font-normal leading-none text-neutral-500"
              >
                Minimum
              </Label>
              <div className="absolute bottom-3 left-3 leading-none">$</div>
              <Input
                id="price_filter_min"
                type="text"
                className="absolute inset-0 h-full rounded-lg border border-neutral-400 bg-transparent pl-7 pr-4 pt-4 tabular-nums leading-none"
                value={selectedFilters.minPrice}
                readOnly
              />
            </div>
            <div className="h-px shrink-0 basis-4 bg-neutral-400"></div>
            <div className="relative h-14 w-full">
              <Label
                htmlFor="price_filter_max"
                className="absolute left-3 top-2.5 w-full max-w-full truncate pr-6 text-xs font-normal leading-none text-neutral-500"
              >
                Maximum
              </Label>
              <div className="absolute bottom-3 left-3 leading-none">$</div>
              <Input
                id="price_filter_max"
                type="text"
                className="absolute inset-0 h-full rounded-lg border border-neutral-400 bg-transparent pl-7 pr-4 pt-4 tabular-nums leading-none"
                value={selectedFilters.maxPrice}
                readOnly
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
