'use client';

import { useState } from 'react';
import { useSearchParams } from 'next/navigation';

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
import {
  FiltersBadge,
  FiltersPriceRange,
  FiltersCarTypes,
  FiltersSeatingCapacity,
  FiltersTransmissions,
  FiltersEngineTypes,
  FiltersResetButton,
  FiltersApplyButton,
} from '@/components/filters';

import { reverseMapToEnum } from '@/lib/utils';
import { ESearchParams, ISelectedFilters } from '@/types/filters';
import { EEngineTypes, ETransmissions, ECarTypes } from '@/types/car-specs';

export function FiltersModal() {
  const searchParams = useSearchParams();
  const MIN_PRICE: number = 0;
  const MAX_PRICE: number = 5000;
  const [open, setOpen] = useState<boolean>(false);
  const [selectedFilters, setSelectedFilters] = useState<ISelectedFilters>(
    getSelectedFilters(),
  );

  function handleOpenChange() {
    if (!open) {
      setSelectedFilters(getSelectedFilters());
    }
    setOpen(!open);
  }

  function getSelectedFilters(): ISelectedFilters {
    const minPrice =
      Number(searchParams.get(ESearchParams.MIN_PRICE)) || MIN_PRICE;
    const maxPrice =
      Number(searchParams.get(ESearchParams.MAX_PRICE)) || MAX_PRICE;
    const priceRange: number[] = [minPrice, maxPrice];

    const minSeats = searchParams.get(ESearchParams.MIN_SEATS) || '';

    const carTypes: ECarTypes[] = searchParams
      .getAll(ESearchParams.CAR_TYPE)
      .map((value) => reverseMapToEnum(value)) as ECarTypes[];

    const engineTypes: EEngineTypes[] = searchParams
      .getAll(ESearchParams.ENGINE_TYPE)
      .map((value) => reverseMapToEnum(value)) as EEngineTypes[];

    const transmissions: ETransmissions[] = searchParams
      .getAll(ESearchParams.TRANSMISSION)
      .map((value) => reverseMapToEnum(value)) as ETransmissions[];

    return {
      priceRange,
      minSeats,
      carTypes: carTypes.length > 0 ? carTypes : [],
      engineTypes: engineTypes.length > 0 ? engineTypes : [],
      transmission: transmissions.length > 0 ? transmissions : [],
    };
  }

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          className="relative flex items-center justify-center"
        >
          <Icons.filters className="mr-2.5 h-5 w-5" />
          <span>Filters</span>
          <FiltersBadge />
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-[var(--modal-filters-max-width)] gap-0 !rounded-xl p-0">
        <DialogHeader className="flex min-h-[var(--modal-filters-header-height)] items-center justify-center px-6">
          <DialogTitle className="text-center text-base tracking-normal">
            Filters
          </DialogTitle>
        </DialogHeader>
        <div className="h-full max-h-[var(--modal-filters-content-max-height)] overflow-y-auto border-y">
          <FiltersPriceRange
            MIN_PRICE={MIN_PRICE}
            MAX_PRICE={MAX_PRICE}
            selectedFilters={selectedFilters}
            setSelectedFilters={setSelectedFilters}
          />
          <FiltersCarTypes
            selectedFilters={selectedFilters}
            setSelectedFilters={setSelectedFilters}
          />
          <FiltersEngineTypes
            selectedFilters={selectedFilters}
            setSelectedFilters={setSelectedFilters}
          />
          <FiltersSeatingCapacity
            selectedFilters={selectedFilters}
            setSelectedFilters={setSelectedFilters}
          />
          <FiltersTransmissions
            selectedFilters={selectedFilters}
            setSelectedFilters={setSelectedFilters}
          />
        </div>
        <DialogFooter className="flex min-h-[var(--modal-filters-footer-height)] items-center justify-center px-6">
          <div className="flex w-full items-center justify-between gap-x-2">
            <FiltersResetButton
              MIN_PRICE={MIN_PRICE}
              MAX_PRICE={MAX_PRICE}
              setSelectedFilters={setSelectedFilters}
            />
            <FiltersApplyButton
              MIN_PRICE={MIN_PRICE}
              MAX_PRICE={MAX_PRICE}
              selectedFilters={selectedFilters}
              setOpen={setOpen}
            />
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
