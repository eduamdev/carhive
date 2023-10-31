import { Dispatch, SetStateAction } from 'react';
import { Filter } from '@/components/cars/filter';
import { SelectedFilters } from '@/lib/definitions';

interface SeatingCapacityFiltersProps {
  selectedFilters: SelectedFilters;
  setSelectedFilters: Dispatch<SetStateAction<SelectedFilters>>;
}

export function SeatingCapacityFilters({
  selectedFilters,
  setSelectedFilters,
}: SeatingCapacityFiltersProps) {
  function handleClick(
    seats: number | undefined,
    selectedFilters: SelectedFilters,
    setSelectedFilters: Dispatch<SetStateAction<SelectedFilters>>,
  ) {
    setSelectedFilters({
      ...selectedFilters,
      seats: selectedFilters.seats === seats ? undefined : seats,
    });
  }

  const seatingCapacity: ReadonlyArray<number> = [2, 3, 4, 5, 6, 7];

  return (
    <div className="relative px-6 py-8 after:absolute after:inset-x-6 after:bottom-0 after:h-px after:bg-neutral-100 after:content-['']">
      <section>
        <h3 className="pb-6 text-xl font-semibold">Seating capacity</h3>
        <div className="mb-2 flex flex-row flex-wrap items-center gap-3">
          <Filter
            className="font-normal"
            selected={!selectedFilters.seats}
            onClick={() =>
              handleClick(undefined, selectedFilters, setSelectedFilters)
            }
          >
            Any
          </Filter>
          {seatingCapacity.map((seats, index, array) => (
            <Filter
              key={seats}
              className="font-normal"
              selected={selectedFilters.seats === seats}
              onClick={() =>
                handleClick(seats, selectedFilters, setSelectedFilters)
              }
            >
              {index === array.length - 1 ? `${seats}+` : seats}
            </Filter>
          ))}
        </div>
      </section>
    </div>
  );
}
