import { FiltersItem } from '@/components/filters/item';
import { ESeats } from '@/types/car-specs';
import { ISelectedFilters } from '@/types/filters';

interface FiltersSeatingCapacityProps {
  selectedFilters: ISelectedFilters;
  onMinCarSeatsClick: Function;
}

export function FiltersSeatingCapacity({
  selectedFilters,
  onMinCarSeatsClick,
}: FiltersSeatingCapacityProps) {
  return (
    <div className="relative px-6 py-8 after:absolute after:bottom-0 after:left-6 after:right-6 after:h-px after:bg-neutral-100 after:content-['']">
      <section>
        <h3 className="pb-6 text-xl font-semibold">Seating capacity</h3>
        <div className="mb-2 flex flex-row flex-wrap items-center gap-3">
          <FiltersItem
            className="font-normal"
            selected={!selectedFilters.minSeats}
            onClick={() => onMinCarSeatsClick('')}
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
                onClick={() => onMinCarSeatsClick(value)}
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
