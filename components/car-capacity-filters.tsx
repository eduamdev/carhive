import { Filter } from '@/components/filter';

const minCarSeats = [
  { id: 'c_seats_any', slug: null, text: 'Any' },
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
  { id: 'c_bags_any', slug: null, text: 'Any' },
  { id: 'c_bags_1', slug: '1', text: '1' },
  { id: 'c_bags_2', slug: '2', text: '2' },
  { id: 'c_bags_3', slug: '3', text: '3' },
  { id: 'c_bags_4', slug: '4', text: '4' },
  { id: 'c_bags_5', slug: '5', text: '5' },
  { id: 'c_bags_6', slug: '6', text: '6' },
  { id: 'c_bags_7', slug: '7', text: '7' },
  { id: 'c_bags_8', slug: '8', text: '8+' },
];

export function CarCapacityFilters({
  selectedFilters,
  onMinCarSeatsClick,
  onMinCarBagsClick,
}) {
  return (
    <div className="relative px-6 py-8 after:absolute after:bottom-0 after:left-6 after:right-6 after:h-px after:bg-black/10 after:content-['']">
      <section>
        <h3 className="pb-6 text-lg font-semibold">Capacity</h3>
        <div className="flex flex-col gap-6">
          <div>
            <h4 className="pb-5 pt-1">Seats</h4>
            <div className="flex flex-row flex-wrap items-center gap-3">
              {minCarSeats.map(({ id: key, slug, text }) => (
                <Filter
                  key={key}
                  selected={
                    slug
                      ? selectedFilters.minSeats === slug
                      : !selectedFilters.minSeats
                  }
                  onClick={() => onMinCarSeatsClick(slug ? slug : '')}
                >
                  {text}
                </Filter>
              ))}
            </div>
          </div>
          <div>
            <h4 className="pb-5 pt-1">Bags</h4>
            <div className="flex flex-row flex-wrap items-center gap-3">
              {minCarBags.map(({ id: key, slug, text }) => (
                <Filter
                  key={key}
                  selected={
                    slug
                      ? selectedFilters.minBags === slug
                      : !selectedFilters.minBags
                  }
                  onClick={() => onMinCarBagsClick(slug ? slug : '')}
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
