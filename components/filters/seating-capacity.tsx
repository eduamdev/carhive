import { Item } from '@/components/filters/item';
import { seats } from '@/data/car-specs';
import { IFilters } from '@/types/filters';

interface SeatingCapacityProps {
  selectedFilters: IFilters;
  onMinCarSeatsClick: Function;
}

export function SeatingCapacity({
  selectedFilters,
  onMinCarSeatsClick,
}: SeatingCapacityProps) {
  return (
    <div className="relative px-6 py-8 after:absolute after:bottom-0 after:left-6 after:right-6 after:h-px after:bg-neutral-100 after:content-['']">
      <section>
        <h3 className="pb-6 text-xl font-semibold">Seating capacity</h3>
        <div className="mb-2 flex flex-row flex-wrap items-center gap-3">
          <Item
            className="font-normal"
            selected={!selectedFilters.minSeats}
            onClick={() => onMinCarSeatsClick('')}
          >
            Any
          </Item>
          {seats.map(({ id, slug, value }) => (
            <Item
              key={id}
              className="font-normal"
              selected={selectedFilters.minSeats === slug}
              onClick={() => onMinCarSeatsClick(slug)}
            >
              {value}
            </Item>
          ))}
        </div>
      </section>
    </div>
  );
}
