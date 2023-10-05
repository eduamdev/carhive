'use client';

import { useSearchParams, useRouter } from 'next/navigation';
import { useState } from 'react';

import { Button } from '@/components/ui/button';
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
import { Icons } from '@/components/icons';
import { Badge } from '@/components/badge';
import { CarTypeFilters } from '@/components/car-type-filters';
import { CarCapacityFilters } from '@/components/car-capacity-filters';
import { CarTransmissionFilters } from '@/components/car-transmission-filters';

import { createUrl } from '@/lib/utils';

export function FiltersView() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [open, setOpen] = useState(false);
  const MIN_PRICE = 0;
  const MAX_PRICE = 100;
  const [selectedFilters, setSelectedFilters] = useState(getInitFilters());

  function handleOpenChange() {
    if (!open) {
      setSelectedFilters(getInitFilters());
    }
    setOpen(!open);
  }

  function getInitFilters() {
    return {
      priceRange: [
        Number(searchParams.get('min-price') || MIN_PRICE),
        Number(searchParams.get('max-price') || MAX_PRICE),
      ],
      carTypes: searchParams.getAll('car-type') || [],
      minSeats: searchParams.get('min-seats') || '',
      minBags: searchParams.get('min-bags') || '',
      transmission: searchParams.get('transmission') || '',
    };
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

  function handleCarTypeClick(slug: string) {
    let newCarTypesSelected = [];

    if (selectedFilters.carTypes.includes(slug)) {
      newCarTypesSelected = selectedFilters.carTypes.filter(
        (selected) => selected !== slug,
      );
    } else {
      newCarTypesSelected = [...selectedFilters.carTypes, slug];
    }

    setSelectedFilters({ ...selectedFilters, carTypes: newCarTypesSelected });
  }

  function handleMinCarSeatsClick(slug: string) {
    setSelectedFilters({
      ...selectedFilters,
      minSeats: selectedFilters.minSeats === slug ? '' : slug,
    });
  }

  function handleMinCarBagsClick(slug: string) {
    setSelectedFilters({
      ...selectedFilters,
      minBags: selectedFilters.minBags === slug ? '' : slug,
    });
  }

  function handleCarTransmissionClick(slug: string) {
    setSelectedFilters({
      ...selectedFilters,
      transmission: selectedFilters.transmission === slug ? '' : slug,
    });
  }

  function resetFilters() {
    setSelectedFilters({
      priceRange: [MIN_PRICE, MAX_PRICE],
      carTypes: [],
      minSeats: '',
      minBags: '',
      transmission: '',
    });
  }

  function applyFilters() {
    const newParams = new URLSearchParams(searchParams.toString());

    newParams.delete('min-price');
    newParams.delete('max-price');
    newParams.delete('car-type');
    newParams.delete('min-seats');
    newParams.delete('min-bags');
    newParams.delete('transmission');

    if (selectedFilters.priceRange[0] !== MIN_PRICE) {
      newParams.set('min-price', selectedFilters.priceRange[0].toString());
    }

    if (selectedFilters.priceRange[1] !== MAX_PRICE) {
      newParams.set('max-price', selectedFilters.priceRange[1].toString());
    }

    if (selectedFilters.carTypes.length) {
      selectedFilters.carTypes.forEach((type) => {
        newParams.append('car-type', type);
      });
    }
    if (selectedFilters.minSeats) {
      newParams.set('min-seats', selectedFilters.minSeats.toString());
    }
    if (selectedFilters.minBags) {
      newParams.set('min-bags', selectedFilters.minBags.toString());
    }
    if (selectedFilters.transmission) {
      newParams.set('transmission', selectedFilters.transmission);
    }

    router.push(createUrl('/cars', newParams));
  }

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>
        <Button variant="outline" className="relative">
          <Icons.filters className="mr-2 h-[14px] w-[14px]" />
          Filters
          {getFiltersCount() > 0 && <Badge>{getFiltersCount()}</Badge>}
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
                  defaultValue={[MIN_PRICE, MAX_PRICE]}
                  value={selectedFilters.priceRange}
                  onValueChange={(values) =>
                    setSelectedFilters({
                      ...selectedFilters,
                      priceRange: values,
                    })
                  }
                  onValueCommit={(values) =>
                    setSelectedFilters({
                      ...selectedFilters,
                      priceRange: values,
                    })
                  }
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
                      value={selectedFilters.priceRange[0]}
                      onChange={(e) =>
                        setSelectedFilters({
                          ...selectedFilters,
                          priceRange: [
                            Number(e.target.value),
                            selectedFilters.priceRange[1],
                          ],
                        })
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
                      value={selectedFilters.priceRange[1]}
                      onChange={(e) =>
                        setSelectedFilters({
                          ...selectedFilters,
                          priceRange: [
                            selectedFilters.priceRange[0],
                            Number(e.target.value),
                          ],
                        })
                      }
                    />
                  </div>
                </div>
              </div>
            </section>
          </div>
          <CarTypeFilters
            selectedFilters={selectedFilters}
            onClick={handleCarTypeClick}
          />
          <CarCapacityFilters
            selectedFilters={selectedFilters}
            onMinCarSeatsClick={handleMinCarSeatsClick}
            onMinCarBagsClick={handleMinCarBagsClick}
          />
          <CarTransmissionFilters
            selectedFilters={selectedFilters}
            onClick={handleCarTransmissionClick}
          />
        </div>
        <DialogFooter className="flex min-h-[var(--filters-footer-height)] items-center justify-center px-6">
          <div className="flex w-full items-center justify-between gap-x-2">
            <Button
              variant="ghost"
              className="-ml-2 px-2 text-base font-semibold underline"
              onClick={resetFilters}
            >
              Clear all
            </Button>
            <Button size="lg" onClick={applyFilters}>
              Show cars
            </Button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
