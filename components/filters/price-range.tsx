import { ChangeEvent, Dispatch, SetStateAction } from 'react';
import { Slider } from '@/components/ui/slider';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { ISelectedFilters } from '@/types/filters';

interface FiltersPriceRangeProps {
  MIN_PRICE: number;
  MAX_PRICE: number;
  selectedFilters: ISelectedFilters;
  setSelectedFilters: Dispatch<SetStateAction<ISelectedFilters>>;
}

export function FiltersPriceRange({
  MIN_PRICE,
  MAX_PRICE,
  selectedFilters,
  setSelectedFilters,
}: FiltersPriceRangeProps) {
  function handleSliderChange(
    priceRange: number[],
    setSelectedFilters: Dispatch<SetStateAction<ISelectedFilters>>,
  ) {
    setSelectedFilters({
      ...selectedFilters,
      priceRange,
    });
  }

  function handleMinPriceInputChange(
    event: ChangeEvent<HTMLInputElement>,
    selectedFilters: ISelectedFilters,
    setSelectedFilters: Dispatch<SetStateAction<ISelectedFilters>>,
  ): void {
    const inputValue = event.target.value;
    // Remove non-numeric characters using regular expression
    let numericValue = Number(inputValue.replace(/[^0-9]/g, ''));

    // Ensure numeric value is a valid number, else default to MIN_PRICE
    if (isNaN(numericValue)) numericValue = MIN_PRICE;

    let newMinPrice: number;
    const currentMaxPrice = selectedFilters.priceRange[1];

    // Ensure the value does not exceed the current maximum price
    newMinPrice = Math.min(numericValue, currentMaxPrice - 1);

    // Ensure the value does not exceed the MIN_PRICE
    newMinPrice = Math.max(newMinPrice, MIN_PRICE);

    setSelectedFilters({
      ...selectedFilters,
      priceRange: [newMinPrice, currentMaxPrice],
    });
  }

  function handleMaxPriceInputChange(
    event: ChangeEvent<HTMLInputElement>,
    selectedFilters: ISelectedFilters,
    setSelectedFilters: Dispatch<SetStateAction<ISelectedFilters>>,
  ): void {
    const inputValue = event.target.value;
    // Remove non-numeric characters using regular expression
    let numericValue = Number(inputValue.replace(/[^0-9]/g, ''));

    // Ensure numeric value is a valid number, else default to MAX_PRICE
    if (isNaN(numericValue)) numericValue = MAX_PRICE;

    let newMaxPrice: number;
    const currentMinPrice = selectedFilters.priceRange[0];

    // Ensure the value does not exceed the current minimum price
    newMaxPrice = Math.max(numericValue, currentMinPrice + 1);

    // Ensure the value does not exceed the MAX_PRICE
    newMaxPrice = Math.min(numericValue, MAX_PRICE);

    setSelectedFilters({
      ...selectedFilters,
      priceRange: [currentMinPrice, newMaxPrice],
    });
  }

  return (
    <div className="relative px-6 py-8 after:absolute after:bottom-0 after:left-6 after:right-6 after:h-px after:bg-neutral-100 after:content-['']">
      <section>
        <h3 className="pb-6 text-xl font-semibold">Price range</h3>
        <div className="mx-auto flex max-w-[600px] flex-col items-start justify-between gap-12 pt-2">
          <Slider
            defaultValue={[MIN_PRICE, MAX_PRICE]}
            value={selectedFilters.priceRange}
            onValueChange={(values) =>
              handleSliderChange(values, setSelectedFilters)
            }
            onValueCommit={(values) =>
              handleSliderChange(values, setSelectedFilters)
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
                className="absolute left-3 top-2.5 w-full max-w-full overflow-hidden text-ellipsis whitespace-nowrap pr-6 text-xs font-normal leading-none text-neutral-500"
              >
                Minimum
              </Label>
              <div className="absolute bottom-3 left-3 leading-none">$</div>
              <Input
                id="price_filter_min"
                type="text"
                className="absolute inset-0 h-full rounded-lg border border-neutral-400 bg-transparent pl-7 pr-4 pt-4 tabular-nums leading-none"
                value={selectedFilters.priceRange[0]}
                autoComplete="off"
                onChange={(event) =>
                  handleMinPriceInputChange(
                    event,
                    selectedFilters,
                    setSelectedFilters,
                  )
                }
              />
            </div>
            <div className="h-px shrink-0 basis-4 bg-neutral-400"></div>
            <div className="relative h-14 w-full">
              <Label
                htmlFor="price_filter_max"
                className="absolute left-3 top-2.5 w-full max-w-full overflow-hidden text-ellipsis whitespace-nowrap pr-6 text-xs font-normal leading-none text-neutral-500"
              >
                Maximum
              </Label>
              <div className="absolute bottom-3 left-3 leading-none">$</div>
              <Input
                id="price_filter_max"
                type="text"
                className="absolute inset-0 h-full rounded-lg border border-neutral-400 bg-transparent pl-7 pr-4 pt-4 tabular-nums leading-none"
                value={selectedFilters.priceRange[1]}
                autoComplete="off"
                onChange={(event) =>
                  handleMaxPriceInputChange(
                    event,
                    selectedFilters,
                    setSelectedFilters,
                  )
                }
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
