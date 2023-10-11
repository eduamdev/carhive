'use client';

import { ChangeEvent, useState } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';

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
} from '@/components/filters';

import { createUrl, convertToKebabCase, reverseMapToEnum } from '@/lib/utils';
import { ESearchParams, ISelectedFilters } from '@/types/filters';
import { EEngineTypes, ETransmissions, ECarTypes } from '@/types/car-specs';

export function FiltersModal() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const MIN_PRICE = 0;
  const MAX_PRICE = 5000;
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

  function getCountSelectedFilters() {
    let count = 0;

    if (searchParams.has(ESearchParams.MIN_SEATS)) count++;
    if (
      searchParams.has(ESearchParams.MIN_PRICE) ||
      searchParams.has(ESearchParams.MAX_PRICE)
    )
      count++;
    if (searchParams.has(ESearchParams.CAR_TYPE)) {
      count += searchParams.getAll(ESearchParams.CAR_TYPE).length;
    }
    if (searchParams.has(ESearchParams.TRANSMISSION)) {
      count += searchParams.getAll(ESearchParams.TRANSMISSION).length;
    }
    if (searchParams.has(ESearchParams.ENGINE_TYPE)) {
      count += searchParams.getAll(ESearchParams.ENGINE_TYPE).length;
    }

    return count;
  }

  function handleSliderChange(priceRange: number[]) {
    setSelectedFilters({
      ...selectedFilters,
      priceRange: priceRange,
    });
  }

  function handleMinPriceInputChange(
    event: ChangeEvent<HTMLInputElement>,
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
  ): void {
    alert('changing');
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

  function handlECarTypesClick(value: ECarTypes) {
    let carTypesSelected: ECarTypes[] = [];

    if (selectedFilters.carTypes.includes(value)) {
      carTypesSelected = selectedFilters.carTypes.filter(
        (selected) => selected !== value,
      );
    } else {
      carTypesSelected = [...selectedFilters.carTypes, value];
    }

    setSelectedFilters({ ...selectedFilters, carTypes: carTypesSelected });
  }

  function handleMinCarSeatsClick(value: string) {
    setSelectedFilters({
      ...selectedFilters,
      minSeats: selectedFilters.minSeats === value ? '' : value,
    });
  }

  function handlETransmissionsCheckedChange(
    checked: boolean | 'indeterminate',
    value: ETransmissions,
  ) {
    let transmissionsSelected: ETransmissions[] = [];

    if (!checked || checked === 'indeterminate') {
      transmissionsSelected = selectedFilters.transmission.filter(
        (selected) => selected !== value,
      );
    } else {
      transmissionsSelected = [...selectedFilters.transmission, value];
    }

    setSelectedFilters({
      ...selectedFilters,
      transmission: transmissionsSelected,
    });
  }

  function handleEngineTypeCheckedChange(
    checked: boolean | 'indeterminate',
    value: EEngineTypes,
  ) {
    let engineTypesSelected: EEngineTypes[] = [];

    if (!checked || checked === 'indeterminate') {
      engineTypesSelected = selectedFilters.engineTypes.filter(
        (selected) => selected !== value,
      );
    } else {
      engineTypesSelected = [...selectedFilters.engineTypes, value];
    }

    setSelectedFilters({
      ...selectedFilters,
      engineTypes: engineTypesSelected,
    });
  }

  function resetFilters() {
    setSelectedFilters({
      priceRange: [MIN_PRICE, MAX_PRICE],
      carTypes: [],
      engineTypes: [],
      minSeats: '',
      transmission: [],
    });
  }

  function applyFilters() {
    const newParams = new URLSearchParams(searchParams.toString());

    newParams.delete(ESearchParams.MIN_PRICE);
    newParams.delete(ESearchParams.MAX_PRICE);
    newParams.delete(ESearchParams.CAR_TYPE);
    newParams.delete(ESearchParams.MIN_SEATS);
    newParams.delete(ESearchParams.TRANSMISSION);
    newParams.delete(ESearchParams.ENGINE_TYPE);

    if (selectedFilters.priceRange[0] !== MIN_PRICE)
      newParams.set(
        ESearchParams.MIN_PRICE,
        selectedFilters.priceRange[0].toString(),
      );

    if (selectedFilters.priceRange[1] !== MAX_PRICE)
      newParams.set(
        ESearchParams.MAX_PRICE,
        selectedFilters.priceRange[1].toString(),
      );

    if (selectedFilters.minSeats)
      newParams.set(
        ESearchParams.MIN_SEATS,
        selectedFilters.minSeats.toString(),
      );

    if (selectedFilters.carTypes.length) {
      selectedFilters.carTypes.forEach((value) => {
        newParams.append(ESearchParams.CAR_TYPE, convertToKebabCase(value));
      });
    }

    if (selectedFilters.engineTypes.length) {
      selectedFilters.engineTypes.forEach((value) => {
        newParams.append(ESearchParams.ENGINE_TYPE, convertToKebabCase(value));
      });
    }

    if (selectedFilters.transmission.length) {
      selectedFilters.transmission.forEach((value) => {
        newParams.append(ESearchParams.TRANSMISSION, convertToKebabCase(value));
      });
    }

    router.push(createUrl('/cars', newParams));
    setOpen(false);
  }

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>
        <Button variant="outline" className="relative">
          <Icons.filters className="mr-2 h-[14px] w-[14px]" />
          Filters
          <FiltersBadge count={getCountSelectedFilters()} />
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-[var(--modal-filters-max-width)] gap-0 !rounded-xl p-0">
        <DialogHeader className="flex min-h-[var(--modal-filters-header-height)] items-center justify-center px-6">
          <DialogTitle className="text-center text-base tracking-normal">
            Filters
          </DialogTitle>
        </DialogHeader>
        <div className="h-full max-h-[var(--modal-filters-content-max-height)] overflow-y-auto border-b border-t">
          <FiltersPriceRange
            minPrice={MIN_PRICE}
            maxPrice={MAX_PRICE}
            selectedFilters={selectedFilters}
            onSliderChange={handleSliderChange}
            onMinPriceInputChange={handleMinPriceInputChange}
            onMaxPriceInputChange={handleMaxPriceInputChange}
          />
          <FiltersCarTypes
            selectedFilters={selectedFilters}
            onClick={handlECarTypesClick}
          />
          <FiltersEngineTypes
            selectedFilters={selectedFilters}
            onCheckedChange={handleEngineTypeCheckedChange}
          />
          <FiltersSeatingCapacity
            selectedFilters={selectedFilters}
            onMinCarSeatsClick={handleMinCarSeatsClick}
          />
          <FiltersTransmissions
            selectedFilters={selectedFilters}
            onCheckedChange={handlETransmissionsCheckedChange}
          />
        </div>
        <DialogFooter className="flex min-h-[var(--modal-filters-footer-height)] items-center justify-center px-6">
          <div className="flex w-full items-center justify-between gap-x-2">
            <Button
              variant="ghost"
              className="-ml-2 px-2.5 text-[15px] font-semibold underline"
              onClick={resetFilters}
            >
              Clear all
            </Button>
            <Button
              size="xl"
              className="text-[15px] font-semibold"
              onClick={applyFilters}
            >
              Show cars
            </Button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
