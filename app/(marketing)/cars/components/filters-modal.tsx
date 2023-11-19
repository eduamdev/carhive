'use client';

import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/app/components/ui/dialog';
import { Button } from '@/app/components/ui/button';
import { Icons } from '@/app/components/icons';
import { CounterBadge } from '@/app/components/counter-badge';
import { PriceRangeFilters } from './filters/price-range';
import { BodyStyle, BodyStyleFilters } from './filters/body-styles';
import { EngineType, EngineTypeFilters } from './filters/engine-types';
import { SeatingCapacityFilters } from './filters/seating-capacity';
import {
  Transmission,
  TransmissionFilters,
} from './filters/transmission-types';
import { createUrl } from '@/app/lib/utils';
import { SearchParams } from '@/app/lib/types';

export type SelectedFilters = {
  minPrice: number;
  maxPrice: number;
  seats: number | undefined;
  bodyStyles: BodyStyle[];
  engineTypes: EngineType[];
  transmissions: Transmission[];
};

interface FiltersModalProps {
  minPrice: number;
  maxPrice: number;
}

export function FiltersModal({ minPrice, maxPrice }: FiltersModalProps) {
  const searchParams = useSearchParams();
  const [open, setOpen] = useState<boolean>(false);
  const [selectedFilters, setSelectedFilters] = useState<SelectedFilters>(
    fetchSelectedFilters(),
  );
  const [totalSelectedFilters, setTotalSelectedFilters] = useState<number>(0);

  function handleOpenChange() {
    if (!open) {
      setSelectedFilters(fetchSelectedFilters());
    }
    setOpen(!open);
  }

  function fetchSelectedFilters() {
    const selectedMinPrice =
      Number(searchParams.get(SearchParams.MIN_PRICE)) || minPrice;
    const selectedMaxPrice =
      Number(searchParams.get(SearchParams.MAX_PRICE)) || maxPrice;
    const seats = Number(searchParams.get(SearchParams.MIN_SEATS)) || undefined;
    const bodyStyles = searchParams.getAll(
      SearchParams.BODY_STYLE,
    ) as BodyStyle[];
    const engineTypes = searchParams.getAll(
      SearchParams.ENGINE_TYPE,
    ) as EngineType[];
    const transmissions = searchParams.getAll(
      SearchParams.TRANSMISSION,
    ) as Transmission[];

    return {
      minPrice: selectedMinPrice,
      maxPrice: selectedMaxPrice,
      seats,
      bodyStyles: bodyStyles.length > 0 ? bodyStyles : [],
      engineTypes: engineTypes.length > 0 ? engineTypes : [],
      transmissions: transmissions.length > 0 ? transmissions : [],
    };
  }

  useEffect(() => {
    const filterParams = Object.values(SearchParams);
    let count = 0;

    filterParams.forEach((param) => {
      const paramValue = searchParams.getAll(param);
      if (
        param === SearchParams.MIN_SEATS ||
        param === SearchParams.MIN_PRICE ||
        param === SearchParams.MAX_PRICE
      ) {
        count += paramValue.length > 0 ? 1 : 0;
      } else {
        count += paramValue.length;
      }
    });

    setTotalSelectedFilters(count);

    return () => {
      setTotalSelectedFilters(0);
    };
  }, [searchParams]);

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          className="relative flex items-center justify-center gap-x-2.5"
        >
          <Icons.filters className="h-[22px] w-[22px]" />
          <span>Filters</span>
          <CounterBadge count={totalSelectedFilters} />
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-[var(--modal-filters-max-width)] gap-0 !rounded-xl p-0">
        <DialogHeader className="flex min-h-[var(--modal-filters-header-height)] items-center justify-center px-6">
          <DialogTitle className="text-center text-base tracking-normal">
            Filters
          </DialogTitle>
        </DialogHeader>
        <div className="h-full max-h-[var(--modal-filters-content-max-height)] overflow-y-auto border-y">
          <Filters
            minPrice={minPrice}
            maxPrice={maxPrice}
            selectedFilters={selectedFilters}
            setSelectedFilters={setSelectedFilters}
          />
        </div>
        <DialogFooter className="flex min-h-[var(--modal-filters-footer-height)] items-center justify-center px-6">
          <div className="flex w-full items-center justify-between gap-x-2">
            <ResetFilters
              minPrice={minPrice}
              maxPrice={maxPrice}
              setSelectedFilters={setSelectedFilters}
            />
            <ApplyFilters
              minPrice={minPrice}
              maxPrice={maxPrice}
              selectedFilters={selectedFilters}
              setOpen={setOpen}
            />
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

interface FiltersProps {
  minPrice: number;
  maxPrice: number;
  selectedFilters: SelectedFilters;
  setSelectedFilters: Dispatch<SetStateAction<SelectedFilters>>;
}

function Filters({
  minPrice,
  maxPrice,
  selectedFilters,
  setSelectedFilters,
}: FiltersProps) {
  return (
    <>
      <PriceRangeFilters
        minPrice={minPrice}
        maxPrice={maxPrice}
        selectedFilters={selectedFilters}
        setSelectedFilters={setSelectedFilters}
      />
      <BodyStyleFilters
        selectedFilters={selectedFilters}
        setSelectedFilters={setSelectedFilters}
      />
      <EngineTypeFilters
        selectedFilters={selectedFilters}
        setSelectedFilters={setSelectedFilters}
      />
      <SeatingCapacityFilters
        selectedFilters={selectedFilters}
        setSelectedFilters={setSelectedFilters}
      />
      <TransmissionFilters
        selectedFilters={selectedFilters}
        setSelectedFilters={setSelectedFilters}
      />
    </>
  );
}

interface ResetFiltersProps {
  minPrice: number;
  maxPrice: number;
  setSelectedFilters: Dispatch<SetStateAction<SelectedFilters>>;
}

function ResetFilters({
  minPrice,
  maxPrice,
  setSelectedFilters,
}: ResetFiltersProps) {
  function handleClick() {
    setSelectedFilters({
      minPrice,
      maxPrice,
      bodyStyles: [],
      engineTypes: [],
      seats: undefined,
      transmissions: [],
    });
  }

  return (
    <Button
      variant="ghost"
      className="-ml-2 px-2.5 text-[15px] font-semibold underline"
      onClick={handleClick}
    >
      Clear all
    </Button>
  );
}

interface ApplyFiltersProps {
  minPrice: number;
  maxPrice: number;
  selectedFilters: SelectedFilters;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

function ApplyFilters({
  minPrice,
  maxPrice,
  selectedFilters,
  setOpen,
}: ApplyFiltersProps) {
  const { push } = useRouter();
  const searchParams = useSearchParams();

  function handleClick() {
    const newParams = new URLSearchParams(searchParams.toString());

    newParams.delete(SearchParams.MIN_PRICE);
    newParams.delete(SearchParams.MAX_PRICE);
    newParams.delete(SearchParams.BODY_STYLE);
    newParams.delete(SearchParams.MIN_SEATS);
    newParams.delete(SearchParams.TRANSMISSION);
    newParams.delete(SearchParams.ENGINE_TYPE);

    if (selectedFilters.minPrice !== minPrice)
      newParams.set(
        SearchParams.MIN_PRICE,
        selectedFilters.minPrice.toString(),
      );

    if (selectedFilters.maxPrice !== maxPrice)
      newParams.set(
        SearchParams.MAX_PRICE,
        selectedFilters.maxPrice.toString(),
      );

    if (selectedFilters.seats)
      newParams.set(SearchParams.MIN_SEATS, selectedFilters.seats.toString());

    if (selectedFilters.bodyStyles.length) {
      selectedFilters.bodyStyles.forEach((bodyStyle) => {
        newParams.append(SearchParams.BODY_STYLE, bodyStyle);
      });
    }

    if (selectedFilters.engineTypes.length) {
      selectedFilters.engineTypes.forEach((engineType) => {
        newParams.append(SearchParams.ENGINE_TYPE, engineType);
      });
    }

    if (selectedFilters.transmissions.length) {
      selectedFilters.transmissions.forEach((transmission) => {
        newParams.append(SearchParams.TRANSMISSION, transmission);
      });
    }

    push(createUrl('/cars', newParams));
    setOpen(false);
  }

  return (
    <Button
      size="xl"
      className="text-[15px] font-semibold"
      onClick={handleClick}
    >
      Show cars
    </Button>
  );
}
