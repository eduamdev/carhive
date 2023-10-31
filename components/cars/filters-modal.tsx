import { Dispatch, SetStateAction } from 'react';
import {
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { PriceRangeFilters } from '@/components/cars/price-range-filters';
import { BodyStyleFilters } from '@/components/cars/body-style-filters';
import { EngineTypeFilters } from '@/components/cars/engine-type-filters';
import { SeatingCapacityFilters } from '@/components/cars/seating-capacity-filters';
import { TransmissionFilters } from '@/components/cars/transmission-filters';
import { ResetFilters } from '@/components/cars/reset-filters';
import { ApplyFilters } from '@/components/cars/apply-filters';
import { SelectedFilters } from '@/lib/definitions';

interface FiltersModalProps {
  selectedFilters: SelectedFilters;
  setSelectedFilters: Dispatch<SetStateAction<SelectedFilters>>;
  setOpen: Dispatch<SetStateAction<boolean>>;
  minPrice: number;
  maxPrice: number;
}

export function FiltersModal({
  selectedFilters,
  setSelectedFilters,
  setOpen,
  minPrice,
  maxPrice,
}: FiltersModalProps) {
  return (
    <>
      <DialogHeader className="flex min-h-[var(--modal-filters-header-height)] items-center justify-center px-6">
        <DialogTitle className="text-center text-base tracking-normal">
          Filters
        </DialogTitle>
      </DialogHeader>
      <div className="h-full max-h-[var(--modal-filters-content-max-height)] overflow-y-auto border-y">
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
    </>
  );
}
