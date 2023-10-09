import { Filter } from '@/components/filter';
import { seats } from '@/data/car-specs';
import { IFilters } from '@/types/filters';

interface CarCapacityFiltersProps {
  selectedFilters: IFilters;
  onMinCarSeatsClick: Function;
}

export function CarSeatingCapacityFilters({
  selectedFilters,
  onMinCarSeatsClick,
}: CarCapacityFiltersProps) {
  return (
    <div className="relative px-6 py-8 after:absolute after:bottom-0 after:left-6 after:right-6 after:h-px after:bg-neutral-100 after:content-['']">
      <section>
        <h3 className="pb-6 text-xl font-semibold">Seating capacity</h3>
        <div className="flex flex-row flex-wrap items-center gap-3">
          <Filter
            selected={!selectedFilters.minSeats}
            onClick={() => onMinCarSeatsClick('')}
          >
            Any
          </Filter>
          {seats.map(({ id, slug, value }) => (
            <Filter
              key={id}
              selected={selectedFilters.minSeats === slug}
              onClick={() => onMinCarSeatsClick(slug)}
            >
              {value}
            </Filter>
          ))}
        </div>
      </section>
    </div>
  );
}
