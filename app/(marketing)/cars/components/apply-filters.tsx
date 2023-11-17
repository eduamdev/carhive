import { Dispatch, SetStateAction } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { Button } from '@/app/components/ui/button';
import { createUrl } from '@/app/lib/utils';
import { SelectedFilters, SearchParams } from '@/app/lib/types';

interface ApplyFiltersProps {
  minPrice: number;
  maxPrice: number;
  selectedFilters: SelectedFilters;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

export function ApplyFilters({
  minPrice,
  maxPrice,
  selectedFilters,
  setOpen,
}: ApplyFiltersProps) {
  const { push } = useRouter();
  const searchParams = useSearchParams();

  function onClick(
    selectedFilters: SelectedFilters,
    setOpen: Dispatch<SetStateAction<boolean>>,
  ) {
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
      onClick={() => onClick(selectedFilters, setOpen)}
    >
      Show cars
    </Button>
  );
}
