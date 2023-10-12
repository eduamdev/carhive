import { Dispatch, SetStateAction } from 'react';
import { Button } from '@/components/ui/button';
import { ISelectedFilters } from '@/types/filters';

interface FiltersResetButtonProps {
  MIN_PRICE: number;
  MAX_PRICE: number;
  setSelectedFilters: Dispatch<SetStateAction<ISelectedFilters>>;
}

export function FiltersResetButton({
  MIN_PRICE,
  MAX_PRICE,
  setSelectedFilters,
}: FiltersResetButtonProps) {
  function handleClick(
    setSelectedFilters: Dispatch<SetStateAction<ISelectedFilters>>,
  ) {
    setSelectedFilters({
      priceRange: [MIN_PRICE, MAX_PRICE],
      carTypes: [],
      engineTypes: [],
      minSeats: '',
      transmission: [],
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
