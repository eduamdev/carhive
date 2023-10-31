import { Dispatch, SetStateAction } from 'react';
import { Button } from '@/components/ui/button';
import { SelectedFilters } from '@/types/filters';

interface ResetFiltersProps {
  minPrice: number;
  maxPrice: number;
  setSelectedFilters: Dispatch<SetStateAction<SelectedFilters>>;
}

export function ResetFilters({
  minPrice,
  maxPrice,
  setSelectedFilters,
}: ResetFiltersProps) {
  function handleClick(
    setSelectedFilters: Dispatch<SetStateAction<SelectedFilters>>,
  ) {
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
      onClick={() => handleClick(setSelectedFilters)}
    >
      Clear all
    </Button>
  );
}
