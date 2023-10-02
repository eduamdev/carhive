'use client';

import { useSearchParams, useRouter } from 'next/navigation';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Icons } from '@/components/icons';
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Slider } from '@/components/ui/slider';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { createUrl } from '@/lib/utils';
import { FiltersResetButton } from '@/components/filters-reset-button';
import { FiltersSaveButton } from '@/components/filters-save-button';
import { FiltersBadge } from '@/components/filters-badge';
import { FiltersItemButton } from '@/components/filters-item-button';
import { FiltersAreaButton } from '@/components/filters-area-button';

export function FiltersView() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const MIN_PRICE = 0;
  const MAX_PRICE = 100;
  const [priceRange, setPriceRange] = useState([MIN_PRICE, MAX_PRICE]);
  const [carTypes, setCarTypes] = useState<string[]>(
    searchParams.getAll('car-type') || [],
  );
  const [minSeats, setMinSeats] = useState(searchParams.get('min-seats') || '');
  const [minBags, setMinBags] = useState(searchParams.get('min-bags') || '');
  const [transmission, setTransmission] = useState(
    searchParams.get('transmission') || '',
  );

  function handleCarTypeClick(type: string) {
    let newTypes = [];

    if (carTypes.includes(type)) {
      newTypes = carTypes.filter((currentType) => currentType !== type);
    } else {
      newTypes = [...carTypes, type];
    }

    setCarTypes(newTypes);
  }

  function handleSeatsClick(seats: string) {
    setMinSeats(minSeats === seats ? '' : seats);
  }

  function handleBagsClick(bags: string) {
    setMinBags(minBags === bags ? '' : bags);
  }

  function handleTransmissionClick(value: string) {
    setTransmission(transmission === value ? '' : value);
  }

  function resetFilters() {
    setPriceRange([MIN_PRICE, MAX_PRICE]);
    setCarTypes([]);
    setMinBags('');
    setMinSeats('');
    setTransmission('');
  }

  function saveFilters() {
    const newParams = new URLSearchParams(searchParams.toString());

    newParams.delete('min-price');
    newParams.delete('max-price');
    newParams.delete('car-type');
    newParams.delete('min-seats');
    newParams.delete('min-bags');
    newParams.delete('transmission');

    if (priceRange[0] !== MIN_PRICE) {
      newParams.set('min-price', priceRange[0].toString());
    }

    if (priceRange[1] !== MAX_PRICE) {
      newParams.set('max-price', priceRange[1].toString());
    }

    if (carTypes.length) {
      carTypes.forEach((type) => {
        newParams.append('car-type', type);
      });
    }
    if (minSeats) {
      newParams.set('min-seats', minSeats.toString());
    }
    if (minBags) {
      newParams.set('min-bags', minBags.toString());
    }
    if (transmission) {
      newParams.set('transmission', transmission);
    }

    router.push(createUrl('/cars', newParams));
  }

  function getFiltersCount() {
    let count = 0;
    if (searchParams.has('min-price') || searchParams.has('max-price')) {
      count++;
    }

    if (searchParams.has('car-type')) {
      const cartypes = searchParams.getAll('car-type');
      count += cartypes.length;
    }

    if (searchParams.has('min-seats')) {
      count++;
    }

    if (searchParams.has('min-bags')) {
      count++;
    }

    if (searchParams.has('transmission')) {
      count++;
    }

    return count;
  }

  function FiltersCarTypes() {
    return (
      <div className="relative px-6 py-8 after:absolute after:bottom-0 after:left-6 after:right-6 after:h-px after:bg-black/10 after:content-['']">
        <section>
          <h3 className="pb-6 text-xl font-semibold">Car type</h3>
          <div className="grid grid-cols-2 items-center gap-4 sm:grid-cols-3 lg:grid-cols-4">
            <FiltersAreaButton
              selected={carTypes.includes('suv')}
              onClick={() => handleCarTypeClick('suv')}
            >
              <div className="flex h-32 min-h-full w-full flex-col items-start justify-between p-4">
                <Icons.suv className="h-8 w-8" />
                <span className="text-base font-medium">SUV</span>
              </div>
            </FiltersAreaButton>
            <FiltersAreaButton
              selected={carTypes.includes('minivan')}
              onClick={() => handleCarTypeClick('minivan')}
            >
              <div className="flex h-32 min-h-full w-full flex-col items-start justify-between p-4">
                <Icons.minivan className="h-8 w-8" />
                <span className="text-base font-medium">Minivan</span>
              </div>
            </FiltersAreaButton>
            <FiltersAreaButton
              selected={carTypes.includes('pick-up')}
              onClick={() => handleCarTypeClick('pick-up')}
            >
              <div className="flex h-32 min-h-full w-full flex-col items-start justify-between p-4">
                <Icons.pickUp className="h-8 w-8" />
                <span className="text-base font-medium">Pick-up</span>
              </div>
            </FiltersAreaButton>
            <FiltersAreaButton
              selected={carTypes.includes('sport')}
              onClick={() => handleCarTypeClick('sport')}
            >
              <div className="flex h-32 min-h-full w-full flex-col items-start justify-between p-4">
                <Icons.sportCar className="h-8 w-8" />
                <span className="text-base font-medium">Sport</span>
              </div>
            </FiltersAreaButton>
            <FiltersAreaButton
              selected={carTypes.includes('off-road')}
              onClick={() => handleCarTypeClick('off-road')}
            >
              <div className="flex h-32 min-h-full w-full flex-col items-start justify-between p-4">
                <Icons.offRoad className="h-8 w-8" />
                <span className="text-base font-medium">Off-road</span>
              </div>
            </FiltersAreaButton>
            <FiltersAreaButton
              selected={carTypes.includes('sedan')}
              onClick={() => handleCarTypeClick('sedan')}
            >
              <div className="flex h-32 min-h-full w-full flex-col items-start justify-between p-4">
                <Icons.sedan className="h-8 w-8" />
                <span className="text-base font-medium">Sedan</span>
              </div>
            </FiltersAreaButton>
          </div>
        </section>
      </div>
    );
  }

  function FiltersCarCapacity() {
    return (
      <div className="relative px-6 py-8 after:absolute after:bottom-0 after:left-6 after:right-6 after:h-px after:bg-black/10 after:content-['']">
        <section>
          <h3 className="pb-6 text-lg font-semibold">Capacity</h3>
          <div className="flex flex-col gap-6">
            <div>
              <h4 className="pb-5 pt-1">Seats</h4>
              <div className="flex flex-row flex-wrap items-center gap-3">
                <FiltersItemButton
                  selected={!minSeats}
                  onClick={() => handleSeatsClick('')}
                >
                  Any
                </FiltersItemButton>
                <FiltersItemButton
                  selected={minSeats === '1'}
                  onClick={() => handleSeatsClick('1')}
                >
                  1
                </FiltersItemButton>
                <FiltersItemButton
                  selected={minSeats === '2'}
                  onClick={() => handleSeatsClick('2')}
                >
                  2
                </FiltersItemButton>
                <FiltersItemButton
                  selected={minSeats === '3'}
                  onClick={() => handleSeatsClick('3')}
                >
                  3
                </FiltersItemButton>
                <FiltersItemButton
                  selected={minSeats === '4'}
                  onClick={() => handleSeatsClick('4')}
                >
                  4
                </FiltersItemButton>
                <FiltersItemButton
                  selected={minSeats === '5'}
                  onClick={() => handleSeatsClick('5')}
                >
                  5
                </FiltersItemButton>
                <FiltersItemButton
                  selected={minSeats === '6'}
                  onClick={() => handleSeatsClick('6')}
                >
                  6
                </FiltersItemButton>
                <FiltersItemButton
                  selected={minSeats === '7'}
                  onClick={() => handleSeatsClick('7')}
                >
                  7
                </FiltersItemButton>
                <FiltersItemButton
                  selected={minSeats === '8'}
                  onClick={() => handleSeatsClick('8')}
                >
                  8+
                </FiltersItemButton>
              </div>
            </div>
            <div>
              <h4 className="pb-5 pt-1">Bags</h4>
              <div className="flex flex-row flex-wrap items-center gap-3">
                <FiltersItemButton
                  selected={!minBags}
                  onClick={() => handleBagsClick('')}
                >
                  Any
                </FiltersItemButton>
                <FiltersItemButton
                  selected={minBags === '1'}
                  onClick={() => handleBagsClick('1')}
                >
                  1
                </FiltersItemButton>
                <FiltersItemButton
                  selected={minBags === '2'}
                  onClick={() => handleBagsClick('2')}
                >
                  2
                </FiltersItemButton>
                <FiltersItemButton
                  selected={minBags === '3'}
                  onClick={() => handleBagsClick('3')}
                >
                  3
                </FiltersItemButton>
                <FiltersItemButton
                  selected={minBags === '4'}
                  onClick={() => handleBagsClick('4')}
                >
                  4
                </FiltersItemButton>
                <FiltersItemButton
                  selected={minBags === '5'}
                  onClick={() => handleBagsClick('5')}
                >
                  5
                </FiltersItemButton>
                <FiltersItemButton
                  selected={minBags === '6'}
                  onClick={() => handleBagsClick('6')}
                >
                  6
                </FiltersItemButton>
                <FiltersItemButton
                  selected={minBags === '7'}
                  onClick={() => handleBagsClick('7')}
                >
                  7
                </FiltersItemButton>
                <FiltersItemButton
                  selected={minBags === '8'}
                  onClick={() => handleBagsClick('8')}
                >
                  8+
                </FiltersItemButton>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }

  function FiltersCarTransmissions() {
    return (
      <div className="px-6 py-8">
        <section>
          <h3 className="pb-6 text-xl font-semibold">Transmission</h3>
          <div className="grid grid-cols-2 items-center gap-4">
            <FiltersAreaButton
              selected={transmission === 'auto'}
              onClick={() => handleTransmissionClick('auto')}
            >
              <div className="flex h-32 min-h-full w-full flex-col items-start justify-between p-4">
                <Icons.automaticTransmission className="h-7 w-7" />
                <span className="text-base font-medium">Automatic</span>
              </div>
            </FiltersAreaButton>
            <FiltersAreaButton
              selected={transmission === 'manual'}
              onClick={() => handleTransmissionClick('manual')}
            >
              <div className="flex h-32 min-h-full w-full flex-col items-start justify-between p-4">
                <Icons.manualTransmission className="h-7 w-7" />
                <span className="text-base font-medium">Manual</span>
              </div>
            </FiltersAreaButton>
          </div>
        </section>
      </div>
    );
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="relative">
          <Icons.filters className="mr-2 h-[14px] w-[14px]" />
          Filters
          {getFiltersCount() > 0 && (
            <FiltersBadge>{getFiltersCount()}</FiltersBadge>
          )}
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-3xl gap-0 !rounded-xl p-0">
        <DialogHeader className="flex min-h-[var(--filters-header-height)] items-center justify-center px-6">
          <DialogTitle className="text-center text-base tracking-normal">
            Filters
          </DialogTitle>
        </DialogHeader>
        <div className="h-full max-h-[var(--filters-content-height)] overflow-y-auto border-b border-t">
          <div className="relative px-6 py-8 after:absolute after:bottom-0 after:left-6 after:right-6 after:h-px after:bg-black/10 after:content-['']">
            <section>
              <h3 className="pb-6 text-xl font-semibold">Price range</h3>
              <div className="mx-auto flex max-w-[600px] flex-col items-start justify-between gap-12 pt-2">
                <Slider
                  defaultValue={priceRange}
                  value={priceRange}
                  onValueChange={setPriceRange}
                  onValueCommit={(values) => setPriceRange(values)}
                  min={MIN_PRICE}
                  max={MAX_PRICE}
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
                    <div className="absolute bottom-3 left-3 leading-none">
                      $
                    </div>
                    <Input
                      id="i-minimum"
                      className="absolute inset-0 h-full rounded-lg border bg-transparent pl-7 pr-4 pt-4 leading-none"
                      value={priceRange[0]}
                      onChange={(e) =>
                        setPriceRange([Number(e.target.value), priceRange[1]])
                      }
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
                    <div className="absolute bottom-3 left-3 leading-none">
                      $
                    </div>
                    <Input
                      id="i-maximum"
                      className="absolute inset-0 h-full rounded-lg border bg-transparent pl-7 pr-4 pt-4 leading-none"
                      value={priceRange[1]}
                      onChange={(e) =>
                        setPriceRange([priceRange[0], Number(e.target.value)])
                      }
                    />
                  </div>
                </div>
              </div>
            </section>
          </div>
          <FiltersCarTypes />
          <FiltersCarCapacity />
          <FiltersCarTransmissions />
        </div>
        <DialogFooter className="flex min-h-[var(--filters-footer-height)] items-center justify-center px-6">
          <div className="flex w-full items-center justify-between gap-x-2">
            <FiltersResetButton onClick={resetFilters} />
            <FiltersSaveButton onClick={saveFilters} />
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
