import { Slider } from '@/components/ui/slider';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { IFilters } from '@/types/filters';

interface CarPriceRangeFiltersProps {
  selectedFilters: IFilters;
  minPrice: number;
  maxPrice: number;
  onSliderChange: Function;
  onMinPriceInputChange: Function;
  onMaxPriceInputChange: Function;
}

export function CarPriceRangeFilters({
  selectedFilters,
  minPrice,
  maxPrice,
  onSliderChange,
  onMinPriceInputChange,
  onMaxPriceInputChange,
}: CarPriceRangeFiltersProps) {
  return (
    <div className="relative px-6 py-8 after:absolute after:bottom-0 after:left-6 after:right-6 after:h-px after:bg-black/10 after:content-['']">
      <section>
        <h3 className="pb-6 text-xl font-semibold">Price range</h3>
        <div className="mx-auto flex max-w-[600px] flex-col items-start justify-between gap-12 pt-2">
          <Slider
            defaultValue={[minPrice, maxPrice]}
            value={selectedFilters.priceRange}
            onValueChange={(values) => onSliderChange(values)}
            onValueCommit={(values) => onSliderChange(values)}
            min={minPrice}
            max={maxPrice}
            step={1}
            minStepsBetweenThumbs={1}
          />

          <div className="flex w-full items-center justify-between gap-6">
            <div className="relative h-14 w-full">
              <Label
                htmlFor="i-minimum"
                className="absolute left-3 top-2.5 w-full max-w-full overflow-hidden text-ellipsis whitespace-nowrap pr-6 text-xs font-normal leading-none text-neutral-500"
              >
                Minimum
              </Label>
              <div className="absolute bottom-3 left-3 leading-none">$</div>
              <Input
                id="i-minimum"
                className="absolute inset-0 h-full rounded-lg border bg-transparent pl-7 pr-4 pt-4 leading-none"
                value={selectedFilters.priceRange[0]}
                onChange={(e) => onMinPriceInputChange(e)}
              />
            </div>
            <div className="h-px shrink-0 basis-4 bg-neutral-400"></div>
            <div className="relative h-14 w-full">
              <Label
                htmlFor="i-maximum"
                className="absolute left-3 top-2.5 w-full max-w-full overflow-hidden text-ellipsis whitespace-nowrap pr-6 text-xs font-normal leading-none text-neutral-500"
              >
                Maximum
              </Label>
              <div className="absolute bottom-3 left-3 leading-none">$</div>
              <Input
                id="i-maximum"
                className="absolute inset-0 h-full rounded-lg border bg-transparent pl-7 pr-4 pt-4 leading-none"
                value={selectedFilters.priceRange[1]}
                onChange={(e) => onMaxPriceInputChange(e)}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
