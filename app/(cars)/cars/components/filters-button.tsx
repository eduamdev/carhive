'use client';

import { useCallback, useEffect, useState } from 'react';
import { FiltersIcon } from '@/app/components/icons/filters';
import { Button } from '@/app/components/ui/button';
import { FiltersModal } from './filters-modal';
import { useRouter, useSearchParams } from 'next/navigation';
import { SearchParams } from '@/app/lib/types';
import { EngineType, EngineTypeFilters } from './filters/engine-types';
import {
  Transmission,
  TransmissionFilters,
} from './filters/transmission-types';
import { BodyStyle, BodyStyleFilters } from './filters/body-styles';
import { PriceRangeFilters } from './filters/price-range';
import { SeatingCapacityFilters } from './filters/seating-capacity';
import { createUrl } from '@/app/lib/utils';
import { Badge } from '@/app/components/ui/badge';
import { Separator } from '@/app/components/ui/separator';

export type SelectedFilters = {
  minPrice: number;
  maxPrice: number;
  seats: number | undefined;
  bodyStyles: BodyStyle[];
  engineTypes: EngineType[];
  transmissions: Transmission[];
};

interface FiltersButtonProps {
  initialMinPrice: number;
  initialMaxPrice: number;
}

export function FiltersButton({
  initialMinPrice,
  initialMaxPrice,
}: FiltersButtonProps) {
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
    <FiltersModal
      open={isModalOpen}
      onOpenChange={setIsModalOpen}
      title="Filters"
      trigger={
        <Button
          variant="outline"
          className="flex items-center justify-center gap-x-2.5"
        >
          <FiltersIcon className="size-[18px]" />
          <span>Filters</span>
          {totalSelectedFilters > 0 && (
            <Badge variant={'counter'} className="absolute -right-2 -top-2">
              {totalSelectedFilters}
            </Badge>
          )}
        </Button>
      }
      footer={
        <div className="flex w-full items-center justify-between gap-x-2">
          <ResetFiltersButton onReset={handleFiltersReset} />
          <ApplyFiltersButton onApply={handleFiltersApply} />
        </div>
      }
    >
      <div className="px-6">
        <div className="pb-8 pt-6">
          <EngineTypeFilters
            selectedFilters={selectedFilters}
            setSelectedFilters={setSelectedFilters}
          />
        </div>
        <Separator className="bg-neutral-100" />
        <div className="pb-8 pt-6">
          <PriceRangeFilters
            minPrice={initialMinPrice}
            maxPrice={initialMaxPrice}
            selectedFilters={selectedFilters}
            setSelectedFilters={setSelectedFilters}
          />
        </div>
        <Separator className="bg-neutral-100" />
        <div className="pb-8 pt-6">
          <BodyStyleFilters
            selectedFilters={selectedFilters}
            setSelectedFilters={setSelectedFilters}
          />
        </div>
        <Separator className="bg-neutral-100" />
        <div className="pb-8 pt-6">
          <SeatingCapacityFilters
            selectedFilters={selectedFilters}
            setSelectedFilters={setSelectedFilters}
          />
        </div>
        <Separator className="bg-neutral-100" />
        <div className="pb-8 pt-6">
          <TransmissionFilters
            selectedFilters={selectedFilters}
            setSelectedFilters={setSelectedFilters}
          />
        </div>
      </div>
    </FiltersModal>
  );
}

interface ResetFiltersButtonProps {
  onReset: () => void;
}

function ResetFiltersButton({ onReset }: ResetFiltersButtonProps) {
  return (
    <Button
      variant="ghost"
      size={'lg'}
      className="-ml-4 text-[15px]"
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
    <Button size="lg" className="text-[15px]" onClick={onApply}>
      Show cars
    </Button>
  );
}
