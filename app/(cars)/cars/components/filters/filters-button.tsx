'use client';

import { useCallback, useState, useMemo } from 'react';
import { FiltersIcon } from '@/app/components/icons/filters';
import { Button } from '@/app/components/ui/button';
import { ResponsiveModal } from '@/app/components/responsive-modal';
import { useRouter, useSearchParams } from 'next/navigation';
import { createUrl } from '@/app/lib/utils';
import { Badge } from '@/app/components/ui/badge';
import { ResetFiltersButton } from './reset-filters-button';
import { ApplyFiltersButton } from './apply-filters-button';
import { FiltersContent } from './filters-content';
import { SelectedFilters } from './types/filter-types';
import {
  calculateTotalFiltersFromParams,
  getInitialFilters,
  updateSearchParams,
} from './lib/utils';

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

  const initialFilters = useMemo(
    () => getInitialFilters(searchParams, initialMinPrice, initialMaxPrice),
    [searchParams, initialMinPrice, initialMaxPrice],
  );

  const [selectedFilters, setSelectedFilters] =
    useState<SelectedFilters>(initialFilters);

  const totalSelectedFilters = useMemo(
    () =>
      calculateTotalFiltersFromParams(
        searchParams,
        initialMinPrice,
        initialMaxPrice,
      ),
    [searchParams, initialMinPrice, initialMaxPrice],
  );

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
    updateSearchParams(
      newParams,
      selectedFilters,
      initialMinPrice,
      initialMaxPrice,
    );
    router.push(createUrl('/cars', newParams));
    setIsModalOpen(false);
  }, [searchParams, selectedFilters, initialMinPrice, initialMaxPrice, router]);

  return (
    <ResponsiveModal
      open={isModalOpen}
      onOpenChange={setIsModalOpen}
      title="Filters"
      description="Refine your search by adjusting the filters below to find your perfect match."
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
      <FiltersContent
        selectedFilters={selectedFilters}
        setSelectedFilters={setSelectedFilters}
        initialMinPrice={initialMinPrice}
        initialMaxPrice={initialMaxPrice}
      />
    </ResponsiveModal>
  );
}
