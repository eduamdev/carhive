'use client';

import React, { useCallback, useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { Button } from '@/app/components/ui/button';
import { FiltersIcon } from '@/app/components/icons/filters';
import { CounterBadge } from '@/app/components/counter-badge';
import { Modal } from '@/app/components/modal';
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

interface FiltersProps {
  initialMinPrice: number;
  initialMaxPrice: number;
}

export function Filters({ initialMinPrice, initialMaxPrice }: FiltersProps) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [totalSelectedFilters, setTotalSelectedFilters] = useState(0);

  const fetchSelectedFilters = useCallback(() => {
    const selectedFilters: SelectedFilters = {
      minPrice:
        Number(searchParams.get(SearchParams.MIN_PRICE)) || initialMinPrice,
      maxPrice:
        Number(searchParams.get(SearchParams.MAX_PRICE)) || initialMaxPrice,
      seats: Number(searchParams.get(SearchParams.MIN_SEATS)) || undefined,
      bodyStyles: searchParams.getAll(SearchParams.BODY_STYLE) as BodyStyle[],
      engineTypes: searchParams.getAll(
        SearchParams.ENGINE_TYPE,
      ) as EngineType[],
      transmissions: searchParams.getAll(
        SearchParams.TRANSMISSION,
      ) as Transmission[],
    };

    const paramToPropertyMap: Partial<
      Record<SearchParams, keyof SelectedFilters>
    > = {
      [SearchParams.MIN_PRICE]: 'minPrice',
      [SearchParams.MAX_PRICE]: 'maxPrice',
      [SearchParams.MIN_SEATS]: 'seats',
      [SearchParams.BODY_STYLE]: 'bodyStyles',
      [SearchParams.ENGINE_TYPE]: 'engineTypes',
      [SearchParams.TRANSMISSION]: 'transmissions',
    };

    let totalCount = 0;
    Object.values(SearchParams).forEach((param) => {
      if (
        ![
          SearchParams.LOCATION,
          SearchParams.CHECKIN,
          SearchParams.CHECKOUT,
        ].includes(param)
      ) {
        const property = paramToPropertyMap[param];

        if (property) {
          const paramValue = selectedFilters[property];
          if (Array.isArray(paramValue)) {
            totalCount += paramValue.length;
          } else if (
            typeof paramValue === 'number' &&
            !isNaN(paramValue) &&
            property !== 'minPrice' && // Exclude 'minPrice' from adding 1 to totalCount
            property !== 'maxPrice' // Exclude 'maxPrice' from adding 1 to totalCount
          ) {
            totalCount += 1;
          }
        }
      }
    });

    if (selectedFilters?.minPrice !== initialMinPrice) {
      totalCount += 1; // Increment totalCount only if minPrice is different
    }

    if (selectedFilters?.maxPrice !== initialMaxPrice) {
      totalCount += 1; // Increment totalCount only if maxPrice is different
    }

    setTotalSelectedFilters(totalCount);
    return selectedFilters;
  }, [searchParams, initialMinPrice, initialMaxPrice]);

  const [selectedFilters, setSelectedFilters] =
    useState<SelectedFilters>(fetchSelectedFilters);

  const handleModalToggle = useCallback(() => {
    setIsModalOpen((prevState) => !prevState);
  }, []);

  useEffect(() => {
    setSelectedFilters(fetchSelectedFilters());
  }, [fetchSelectedFilters]);

  const handleFiltersReset = useCallback(() => {
    setSelectedFilters({
      minPrice: initialMinPrice,
      maxPrice: initialMaxPrice,
      bodyStyles: [],
      engineTypes: [],
      seats: undefined,
      transmissions: [],
    });
  }, [initialMinPrice, initialMaxPrice]);

  const handleFiltersApply = useCallback(() => {
    const newParams = new URLSearchParams(searchParams.toString());

    const {
      minPrice,
      maxPrice,
      seats,
      bodyStyles,
      engineTypes,
      transmissions,
    } = selectedFilters;

    newParams.delete(SearchParams.MIN_PRICE);
    newParams.delete(SearchParams.MAX_PRICE);
    newParams.delete(SearchParams.BODY_STYLE);
    newParams.delete(SearchParams.MIN_SEATS);
    newParams.delete(SearchParams.TRANSMISSION);
    newParams.delete(SearchParams.ENGINE_TYPE);

    if (minPrice !== initialMinPrice)
      newParams.set(SearchParams.MIN_PRICE, minPrice.toString());

    if (maxPrice !== initialMaxPrice)
      newParams.set(SearchParams.MAX_PRICE, maxPrice.toString());

    if (seats) newParams.set(SearchParams.MIN_SEATS, seats.toString());

    bodyStyles.forEach((bodyStyle) => {
      newParams.append(SearchParams.BODY_STYLE, bodyStyle);
    });

    engineTypes.forEach((engineType) => {
      newParams.append(SearchParams.ENGINE_TYPE, engineType);
    });

    transmissions.forEach((transmission) => {
      newParams.append(SearchParams.TRANSMISSION, transmission);
    });

    // Update URL and close modal
    router.push(createUrl('/cars', newParams));
    setIsModalOpen(false);
  }, [searchParams, selectedFilters, initialMinPrice, initialMaxPrice, router]);

  return (
    <Modal
      open={isModalOpen}
      onOpenChange={handleModalToggle}
      trigger={
        <Button
          variant="outline"
          className="relative flex items-center justify-center gap-x-2.5"
        >
          <FiltersIcon className="size-[18px]" />
          <span>Filters</span>
          <CounterBadge count={totalSelectedFilters} />
        </Button>
      }
      title="Filters"
      footer={
        <div className="flex w-full items-center justify-between gap-x-2">
          <ResetFiltersButton onReset={handleFiltersReset} />
          <ApplyFiltersButton onApply={handleFiltersApply} />
        </div>
      }
    >
      <>
        <PriceRangeFilters
          minPrice={initialMinPrice}
          maxPrice={initialMaxPrice}
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
    </Modal>
  );
}

interface ResetFiltersButtonProps {
  onReset: () => void;
}

function ResetFiltersButton({ onReset }: ResetFiltersButtonProps) {
  return (
    <Button
      variant="ghost"
      className="-ml-2 px-2.5 text-[15px] font-semibold underline"
      onClick={onReset}
    >
      Clear all
    </Button>
  );
}

interface ApplyFiltersButtonProps {
  onApply: () => void;
}

function ApplyFiltersButton({ onApply }: ApplyFiltersButtonProps) {
  return (
    <Button size="lg" className="text-[15px] font-semibold" onClick={onApply}>
      Show cars
    </Button>
  );
}
