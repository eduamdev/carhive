'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';

import { Button } from '@/components/ui/button';
import { Icons } from '@/components/icons';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';

import { reverseMapToEnum } from '@/lib/utils';
import {
  ESearchParams,
  SelectedFilters,
  EEngineTypes,
  ETransmissions,
  EBodyStyles,
} from '@/types/filters';
import { FiltersModal } from './filters-modal';

function Badge({ count }: { count?: number }) {
  if (!count) return null;

  return (
    <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-black p-2 text-[10px] font-extrabold leading-none text-white">
      {count}
    </span>
  );
}

interface FiltersButtonProps {
  minPrice: number;
  maxPrice: number;
}

export function FiltersButton({ minPrice, maxPrice }: FiltersButtonProps) {
  const searchParams = useSearchParams();
  const [open, setOpen] = useState<boolean>(false);
  const [selectedFilters, setSelectedFilters] = useState<SelectedFilters>(
    fetchSelectedFilters(),
  );
  const [count, setCount] = useState<number>(0);

  function handleOpenChange() {
    if (!open) {
      setSelectedFilters(fetchSelectedFilters());
    }
    setOpen(!open);
  }

  function fetchSelectedFilters() {
    const selectedMinPrice =
      Number(searchParams.get(ESearchParams.MIN_PRICE)) || minPrice;
    const selectedMaxPrice =
      Number(searchParams.get(ESearchParams.MAX_PRICE)) || maxPrice;

    const seats =
      Number(searchParams.get(ESearchParams.MIN_SEATS)) || undefined;

    const bodyStyles: EBodyStyles[] = searchParams
      .getAll(ESearchParams.BODY_STYLE)
      .map((value) => reverseMapToEnum(value)) as EBodyStyles[];

    const engineTypes: EEngineTypes[] = searchParams
      .getAll(ESearchParams.ENGINE_TYPE)
      .map((value) => reverseMapToEnum(value)) as EEngineTypes[];

    const transmissions: ETransmissions[] = searchParams
      .getAll(ESearchParams.TRANSMISSION)
      .map((value) => reverseMapToEnum(value)) as ETransmissions[];

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
    function getSelectedFiltersCount() {
      let count = 0;

      if (searchParams.has(ESearchParams.MIN_SEATS)) count++;
      if (
        searchParams.has(ESearchParams.MIN_PRICE) ||
        searchParams.has(ESearchParams.MAX_PRICE)
      )
        count++;
      if (searchParams.has(ESearchParams.BODY_STYLE)) {
        count += searchParams.getAll(ESearchParams.BODY_STYLE).length;
      }
      if (searchParams.has(ESearchParams.TRANSMISSION)) {
        count += searchParams.getAll(ESearchParams.TRANSMISSION).length;
      }
      if (searchParams.has(ESearchParams.ENGINE_TYPE)) {
        count += searchParams.getAll(ESearchParams.ENGINE_TYPE).length;
      }

      return count;
    }

    setCount(getSelectedFiltersCount());

    return () => {
      setCount(0);
    };
  }, [searchParams]);

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          className="relative flex items-center justify-center"
        >
          <Icons.filters className="mr-2.5 h-[22px] w-[22px]" />
          <span>Filters</span>
          <Badge count={count} />
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-[var(--modal-filters-max-width)] gap-0 !rounded-xl p-0">
        <FiltersModal
          selectedFilters={selectedFilters}
          setSelectedFilters={setSelectedFilters}
          setOpen={setOpen}
          minPrice={minPrice}
          maxPrice={maxPrice}
        />
      </DialogContent>
    </Dialog>
  );
}
