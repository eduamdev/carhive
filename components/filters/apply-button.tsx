import { Dispatch, SetStateAction } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { convertToKebabCase, createUrl } from '@/lib/utils';
import { ESearchParams, ISelectedFilters } from '@/types/filters';

interface FiltersApplyButtonProps {
  MIN_PRICE: number;
  MAX_PRICE: number;
  selectedFilters: ISelectedFilters;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

export function FiltersApplyButton({
  MIN_PRICE,
  MAX_PRICE,
  selectedFilters,
  setOpen,
}: FiltersApplyButtonProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  function onClick(
    selectedFilters: ISelectedFilters,
    setOpen: Dispatch<SetStateAction<boolean>>,
  ) {
    const newParams = new URLSearchParams(searchParams.toString());

    newParams.delete(ESearchParams.MIN_PRICE);
    newParams.delete(ESearchParams.MAX_PRICE);
    newParams.delete(ESearchParams.CAR_TYPE);
    newParams.delete(ESearchParams.MIN_SEATS);
    newParams.delete(ESearchParams.TRANSMISSION);
    newParams.delete(ESearchParams.ENGINE_TYPE);

    if (selectedFilters.priceRange[0] !== MIN_PRICE)
      newParams.set(
        ESearchParams.MIN_PRICE,
        selectedFilters.priceRange[0].toString(),
      );

    if (selectedFilters.priceRange[1] !== MAX_PRICE)
      newParams.set(
        ESearchParams.MAX_PRICE,
        selectedFilters.priceRange[1].toString(),
      );

    if (selectedFilters.minSeats)
      newParams.set(
        ESearchParams.MIN_SEATS,
        selectedFilters.minSeats.toString(),
      );

    if (selectedFilters.carTypes.length) {
      selectedFilters.carTypes.forEach((value) => {
        newParams.append(ESearchParams.CAR_TYPE, convertToKebabCase(value));
      });
    }

    if (selectedFilters.engineTypes.length) {
      selectedFilters.engineTypes.forEach((value) => {
        newParams.append(ESearchParams.ENGINE_TYPE, convertToKebabCase(value));
      });
    }

    if (selectedFilters.transmission.length) {
      selectedFilters.transmission.forEach((value) => {
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
