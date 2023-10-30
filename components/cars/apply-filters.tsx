import { Dispatch, SetStateAction } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { convertToKebabCase, createUrl } from '@/lib/utils';
import { ESearchParams, ISelectedFilters } from '@/types/filters';

interface ApplyFiltersProps {
  minPrice: number;
  maxPrice: number;
  selectedFilters: ISelectedFilters;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

export function ApplyFilters({
  minPrice,
  maxPrice,
  selectedFilters,
  setOpen,
}: ApplyFiltersProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  function onClick(
    selectedFilters: ISelectedFilters,
    setOpen: Dispatch<SetStateAction<boolean>>,
  ) {
    const newParams = new URLSearchParams(searchParams.toString());

    newParams.delete(ESearchParams.MIN_PRICE);
    newParams.delete(ESearchParams.MAX_PRICE);
    newParams.delete(ESearchParams.BODY_STYLE);
    newParams.delete(ESearchParams.MIN_SEATS);
    newParams.delete(ESearchParams.TRANSMISSION);
    newParams.delete(ESearchParams.ENGINE_TYPE);

    if (selectedFilters.priceRange[0] !== minPrice)
      newParams.set(
        ESearchParams.MIN_PRICE,
        selectedFilters.priceRange[0].toString(),
      );

    if (selectedFilters.priceRange[1] !== maxPrice)
      newParams.set(
        ESearchParams.MAX_PRICE,
        selectedFilters.priceRange[1].toString(),
      );

    if (selectedFilters.minSeats)
      newParams.set(
        ESearchParams.MIN_SEATS,
        selectedFilters.minSeats.toString(),
      );

    if (selectedFilters.bodyStyles.length) {
      selectedFilters.bodyStyles.forEach((value) => {
        newParams.append(ESearchParams.BODY_STYLE, convertToKebabCase(value));
      });
    }

    if (selectedFilters.engineTypes.length) {
      selectedFilters.engineTypes.forEach((value) => {
        newParams.append(ESearchParams.ENGINE_TYPE, convertToKebabCase(value));
      });
    }

    if (selectedFilters.transmissions.length) {
      selectedFilters.transmissions.forEach((value) => {
        newParams.append(ESearchParams.TRANSMISSION, convertToKebabCase(value));
      });
    }

    router.push(createUrl('/cars', newParams));
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
