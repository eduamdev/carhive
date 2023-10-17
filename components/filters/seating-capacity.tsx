import { Dispatch, SetStateAction } from 'react';
import { FiltersItem } from '@/components/filters/item';
import { ISelectedFilters } from '@/types/filters';

interface FiltersSeatingCapacityProps {
  selectedFilters: ISelectedFilters;
  setSelectedFilters: Dispatch<SetStateAction<ISelectedFilters>>;
}

export function FiltersSeatingCapacity({
  selectedFilters,
  setSelectedFilters,
}: FiltersSeatingCapacityProps) {
  function handleClick(
    numSeat: number | undefined,
    selectedFilters: ISelectedFilters,
    setSelectedFilters: Dispatch<SetStateAction<ISelectedFilters>>,
  ) {
    setSelectedFilters({
      ...selectedFilters,
      minSeats: selectedFilters.minSeats === numSeat ? undefined : numSeat,
    });
  }

  const seatingCapacity: ReadonlyArray<number> = [2, 3, 4, 5, 6, 7];

  return (
    <div className="relative px-6 py-8 after:absolute after:inset-x-6 after:bottom-0 after:h-px after:bg-neutral-100 after:content-['']">
      <section>
        <h3 className="pb-6 text-xl font-semibold">Seating capacity</h3>
        <div className="mb-2 flex flex-row flex-wrap items-center gap-3">
          <FiltersItem
            className="font-normal"
            selected={!selectedFilters.minSeats}
            onClick={() =>
              handleClick(undefined, selectedFilters, setSelectedFilters)
            }
          >
            Any
          </FiltersItem>
          {seatingCapacity.map((numSeat, index, array) => (
            <FiltersItem
              key={numSeat}
              className="font-normal"
              selected={selectedFilters.minSeats === numSeat}
              onClick={() =>
                handleClick(numSeat, selectedFilters, setSelectedFilters)
              }
            >
              {index === array.length - 1 ? `${numSeat}+` : numSeat}
            </FiltersItem>
          ))}
        </div>
      </section>
    </div>
  );
}
