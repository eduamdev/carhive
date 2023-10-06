import { Filter } from '@/components/filter';
import { IFilters } from '@/types/filters';

const minCarSeats = [
  { id: 'c_seats_1', slug: '1', text: '1' },
  { id: 'c_seats_2', slug: '2', text: '2' },
  { id: 'c_seats_3', slug: '3', text: '3' },
  { id: 'c_seats_4', slug: '4', text: '4' },
  { id: 'c_seats_5', slug: '5', text: '5' },
  { id: 'c_seats_6', slug: '6', text: '6' },
  { id: 'c_seats_7', slug: '7', text: '7' },
  { id: 'c_seats_8', slug: '8', text: '8+' },
];

const minCarBags = [
  { id: 'c_bags_1', slug: '1', text: '1' },
  { id: 'c_bags_2', slug: '2', text: '2' },
  { id: 'c_bags_3', slug: '3', text: '3' },
  { id: 'c_bags_4', slug: '4', text: '4' },
  { id: 'c_bags_5', slug: '5', text: '5' },
  { id: 'c_bags_6', slug: '6', text: '6' },
  { id: 'c_bags_7', slug: '7', text: '7' },
  { id: 'c_bags_8', slug: '8', text: '8+' },
];

interface CarCapacityFiltersProps {
  selectedFilters: IFilters;
  onMinCarSeatsClick: Function;
  onMinCarBagsClick: Function;
}

export function CarCapacityFilters({
  selectedFilters,
  onMinCarSeatsClick,
  onMinCarBagsClick,
}: CarCapacityFiltersProps) {
  return (
    <div className="relative px-6 py-8 after:absolute after:bottom-0 after:left-6 after:right-6 after:h-px after:bg-black/10 after:content-['']">
      <section>
        <h3 className="pb-6 text-lg font-semibold">Capacity</h3>
        <div className="flex flex-col gap-6">
          <div>
            <h4 className="pb-5 pt-1">Seats</h4>
            <div className="flex flex-row flex-wrap items-center gap-3">
              <Filter
                selected={!selectedFilters.minSeats}
                onClick={() => onMinCarSeatsClick('')}
              >
                Any
              </Filter>
              {minCarSeats.map(({ id, slug, text }) => (
                <Filter
                  key={id}
                  selected={selectedFilters.minSeats === slug}
                  onClick={() => onMinCarSeatsClick(slug)}
                >
                  {text}
                </Filter>
              ))}
            </div>
          </div>
          <div>
            <h4 className="pb-5 pt-1">Bags</h4>
            <div className="flex flex-row flex-wrap items-center gap-3">
              <Filter
                selected={!selectedFilters.minBags}
                onClick={() => onMinCarBagsClick('')}
              >
                Any
              </Filter>
              {minCarBags.map(({ id, slug, text }) => (
                <Filter
                  key={id}
                  selected={selectedFilters.minBags === slug}
                  onClick={() => onMinCarBagsClick(slug)}
                >
                  {text}
                </Filter>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
