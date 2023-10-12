import { Dispatch, SetStateAction } from 'react';
import { FiltersItem } from '@/components/filters/item';
import { ESeats } from '@/types/car-specs';
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
    value: string,
    selectedFilters: ISelectedFilters,
    setSelectedFilters: Dispatch<SetStateAction<ISelectedFilters>>,
  ) {
    setSelectedFilters({
      ...selectedFilters,
      minSeats: selectedFilters.minSeats === value ? '' : value,
    });
  }

  return (
    <div className="relative px-6 py-8 after:absolute after:bottom-0 after:left-6 after:right-6 after:h-px after:bg-neutral-100 after:content-['']">
      <section>
        <h3 className="pb-6 text-xl font-semibold">Seating capacity</h3>
        <div className="mb-2 flex flex-row flex-wrap items-center gap-3">
          <FiltersItem
            className="font-normal"
            selected={!selectedFilters.minSeats}
            onClick={() => handleClick('', selectedFilters, setSelectedFilters)}
          >
            Any
          </FiltersItem>
          {Object.keys(ESeats).map((key, index, array) => {
            const value = ESeats[key];

            return (
              <FiltersItem
                key={key}
                className="font-normal"
                selected={selectedFilters.minSeats === value}
                onClick={() =>
                  handleClick(value, selectedFilters, setSelectedFilters)
                }
              >
                {index === array.length - 1 ? `${value}+` : value}
              </FiltersItem>
            );
          })}
        </div>
      </section>
    </div>
  );
}
