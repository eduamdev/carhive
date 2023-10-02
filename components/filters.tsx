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

export function Filters() {
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

  function handleCarTypes(type: string) {
    let newTypes = [];

    if (carTypes.includes(type)) {
      newTypes = carTypes.filter((currentType) => currentType !== type);
    } else {
      newTypes = [...carTypes, type];
    }

    setCarTypes(newTypes);
  }

  function handleSeats(seats: string) {
    setMinSeats(minSeats === seats ? '' : seats);
  }

  function handleBags(bags: string) {
    setMinBags(minBags === bags ? '' : bags);
  }

  function handleTransmission(value: string) {
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

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">
          <Icons.filters className="mr-2 h-[14px] w-[14px]" />
          Filters
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
          <div className="relative px-6 py-8 after:absolute after:bottom-0 after:left-6 after:right-6 after:h-px after:bg-black/10 after:content-['']">
            <section>
              <h3 className="pb-6 text-xl font-semibold">Car type</h3>
              <div className="grid grid-cols-2 items-center gap-4 sm:grid-cols-3 lg:grid-cols-4">
                <Button
                  variant="filter"
                  size="area"
                  className={carTypes.includes('suv') && 'filter-area-selected'}
                  onClick={() => handleCarTypes('suv')}
                >
                  <div className="flex h-32 min-h-full w-full flex-col items-start justify-between p-4">
                    <Icons.suv className="h-8 w-8" />
                    <span className="text-base font-medium">SUV</span>
                  </div>
                </Button>
                <Button
                  variant="filter"
                  size="area"
                  className={
                    carTypes.includes('minivan') && 'filter-area-selected'
                  }
                  onClick={() => handleCarTypes('minivan')}
                >
                  <div className="flex h-32 min-h-full w-full flex-col items-start justify-between p-4">
                    <Icons.minivan className="h-8 w-8" />
                    <span className="text-base font-medium">Minivan</span>
                  </div>
                </Button>
                <Button
                  variant="filter"
                  size="area"
                  className={
                    carTypes.includes('pick-up') && 'filter-area-selected'
                  }
                  onClick={() => handleCarTypes('pick-up')}
                >
                  <div className="flex h-32 min-h-full w-full flex-col items-start justify-between p-4">
                    <Icons.pickUp className="h-8 w-8" />
                    <span className="text-base font-medium">Pick-up</span>
                  </div>
                </Button>
                <Button
                  variant="filter"
                  size="area"
                  className={
                    carTypes.includes('sport') && 'filter-area-selected'
                  }
                  onClick={() => handleCarTypes('sport')}
                >
                  <div className="flex h-32 min-h-full w-full flex-col items-start justify-between p-4">
                    <Icons.sportCar className="h-8 w-8" />
                    <span className="text-base font-medium">Sport</span>
                  </div>
                </Button>
                <Button
                  variant="filter"
                  size="area"
                  className={
                    carTypes.includes('off-road') && 'filter-area-selected'
                  }
                  onClick={() => handleCarTypes('off-road')}
                >
                  <div className="flex h-32 min-h-full w-full flex-col items-start justify-between p-4">
                    <Icons.offRoad className="h-8 w-8" />
                    <span className="text-base font-medium">Off-road</span>
                  </div>
                </Button>
                <Button
                  variant="filter"
                  size="area"
                  className={
                    carTypes.includes('sedan') && 'filter-area-selected'
                  }
                  onClick={() => handleCarTypes('sedan')}
                >
                  <div className="flex h-32 min-h-full w-full flex-col items-start justify-between p-4">
                    <Icons.sedan className="h-8 w-8" />
                    <span className="text-base font-medium">Sedan</span>
                  </div>
                </Button>
              </div>
            </section>
          </div>
          <div className="relative px-6 py-8 after:absolute after:bottom-0 after:left-6 after:right-6 after:h-px after:bg-black/10 after:content-['']">
            <section>
              <h3 className="pb-6 text-lg font-semibold">Capacity</h3>
              <div className="flex flex-col gap-6">
                <div>
                  <h4 className="pb-5 pt-1">Seats</h4>
                  <div className="flex flex-row flex-wrap items-center gap-3">
                    <Button
                      variant="filter"
                      size="item"
                      className={!minSeats && 'filter-item-selected'}
                      onClick={() => handleSeats('')}
                    >
                      Any
                    </Button>
                    <Button
                      variant="filter"
                      size="item"
                      className={minSeats === '1' && 'filter-item-selected'}
                      onClick={() => handleSeats('1')}
                    >
                      1
                    </Button>
                    <Button
                      variant="filter"
                      size="item"
                      className={minSeats === '2' && 'filter-item-selected'}
                      onClick={() => handleSeats('2')}
                    >
                      2
                    </Button>
                    <Button
                      variant="filter"
                      size="item"
                      className={minSeats === '3' && 'filter-item-selected'}
                      onClick={() => handleSeats('3')}
                    >
                      3
                    </Button>
                    <Button
                      variant="filter"
                      size="item"
                      className={minSeats === '4' && 'filter-item-selected'}
                      onClick={() => handleSeats('4')}
                    >
                      4
                    </Button>
                    <Button
                      variant="filter"
                      size="item"
                      className={minSeats === '5' && 'filter-item-selected'}
                      onClick={() => handleSeats('5')}
                    >
                      5
                    </Button>
                    <Button
                      variant="filter"
                      size="item"
                      className={minSeats === '6' && 'filter-item-selected'}
                      onClick={() => handleSeats('6')}
                    >
                      6
                    </Button>
                    <Button
                      variant="filter"
                      size="item"
                      className={minSeats === '7' && 'filter-item-selected'}
                      onClick={() => handleSeats('7')}
                    >
                      7
                    </Button>
                    <Button
                      variant="filter"
                      size="item"
                      className={minSeats === '8' && 'filter-item-selected'}
                      onClick={() => handleSeats('8')}
                    >
                      8+
                    </Button>
                  </div>
                </div>
                <div>
                  <h4 className="pb-5 pt-1">Bags</h4>
                  <div className="flex flex-row flex-wrap items-center gap-3">
                    <Button
                      variant="filter"
                      size="item"
                      className={!minBags && 'filter-item-selected'}
                      onClick={() => handleBags('')}
                    >
                      Any
                    </Button>
                    <Button
                      variant="filter"
                      size="item"
                      className={minBags === '1' && 'filter-item-selected'}
                      onClick={() => handleBags('1')}
                    >
                      1
                    </Button>
                    <Button
                      variant="filter"
                      size="item"
                      className={minBags === '2' && 'filter-item-selected'}
                      onClick={() => handleBags('2')}
                    >
                      2
                    </Button>
                    <Button
                      variant="filter"
                      size="item"
                      className={minBags === '3' && 'filter-item-selected'}
                      onClick={() => handleBags('3')}
                    >
                      3
                    </Button>
                    <Button
                      variant="filter"
                      size="item"
                      className={minBags === '4' && 'filter-item-selected'}
                      onClick={() => handleBags('4')}
                    >
                      4
                    </Button>
                    <Button
                      variant="filter"
                      size="item"
                      className={minBags === '5' && 'filter-item-selected'}
                      onClick={() => handleBags('5')}
                    >
                      5
                    </Button>
                    <Button
                      variant="filter"
                      size="item"
                      className={minBags === '6' && 'filter-item-selected'}
                      onClick={() => handleBags('6')}
                    >
                      6
                    </Button>
                    <Button
                      variant="filter"
                      size="item"
                      className={minBags === '7' && 'filter-item-selected'}
                      onClick={() => handleBags('7')}
                    >
                      7
                    </Button>
                    <Button
                      variant="filter"
                      size="item"
                      className={minBags === '8' && 'filter-item-selected'}
                      onClick={() => handleBags('8')}
                    >
                      8+
                    </Button>
                  </div>
                </div>
              </div>
            </section>
          </div>
          <div className="px-6 py-8">
            <section>
              <h3 className="pb-6 text-xl font-semibold">Transmission</h3>
              <div className="grid grid-cols-2 items-center gap-4">
                <Button
                  variant="filter"
                  size="area"
                  className={transmission === 'auto' && 'filter-area-selected'}
                  onClick={() => handleTransmission('auto')}
                >
                  <div className="flex h-32 min-h-full w-full flex-col items-start justify-between p-4">
                    <Icons.automaticTransmission className="h-7 w-7" />
                    <span className="text-base font-medium">Automatic</span>
                  </div>
                </Button>
                <Button
                  variant="filter"
                  size="area"
                  className={
                    transmission === 'manual' && 'filter-area-selected'
                  }
                  onClick={() => handleTransmission('manual')}
                >
                  <div className="flex h-32 min-h-full w-full flex-col items-start justify-between p-4">
                    <Icons.manualTransmission className="h-7 w-7" />
                    <span className="text-base font-medium">Manual</span>
                  </div>
                </Button>
              </div>
            </section>
          </div>
        </div>
        <DialogFooter className="flex min-h-[var(--filters-footer-height)] items-center justify-center px-6">
          <div className="flex w-full items-center justify-between gap-x-2">
            <Button
              variant="ghost"
              className="-ml-2 px-2 text-base underline"
              onClick={resetFilters}
            >
              Clear all
            </Button>
            <Button size="lg" onClick={saveFilters}>
              Show cars
            </Button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
