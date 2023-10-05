import { FiltersItemButton } from '@/components/filters-item-button';

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
              <FiltersItemButton
                selected={!selectedFilters.minSeats}
                onClick={() => onMinCarSeatsClick('')}
              >
                Any
              </FiltersItemButton>
              <FiltersItemButton
                selected={selectedFilters.minSeats === '1'}
                onClick={() => onMinCarSeatsClick('1')}
              >
                1
              </FiltersItemButton>
              <FiltersItemButton
                selected={selectedFilters.minSeats === '2'}
                onClick={() => onMinCarSeatsClick('2')}
              >
                2
              </FiltersItemButton>
              <FiltersItemButton
                selected={selectedFilters.minSeats === '3'}
                onClick={() => onMinCarSeatsClick('3')}
              >
                3
              </FiltersItemButton>
              <FiltersItemButton
                selected={selectedFilters.minSeats === '4'}
                onClick={() => onMinCarSeatsClick('4')}
              >
                4
              </FiltersItemButton>
              <FiltersItemButton
                selected={selectedFilters.minSeats === '5'}
                onClick={() => onMinCarSeatsClick('5')}
              >
                5
              </FiltersItemButton>
              <FiltersItemButton
                selected={selectedFilters.minSeats === '6'}
                onClick={() => onMinCarSeatsClick('6')}
              >
                6
              </FiltersItemButton>
              <FiltersItemButton
                selected={selectedFilters.minSeats === '7'}
                onClick={() => onMinCarSeatsClick('7')}
              >
                7
              </FiltersItemButton>
              <FiltersItemButton
                selected={selectedFilters.minSeats === '8'}
                onClick={() => onMinCarSeatsClick('8')}
              >
                8+
              </FiltersItemButton>
            </div>
          </div>
          <div>
            <h4 className="pb-5 pt-1">Bags</h4>
            <div className="flex flex-row flex-wrap items-center gap-3">
              <FiltersItemButton
                selected={!selectedFilters.minBags}
                onClick={() => onMinCarBagsClick('')}
              >
                Any
              </FiltersItemButton>
              <FiltersItemButton
                selected={selectedFilters.minBags === '1'}
                onClick={() => onMinCarBagsClick('1')}
              >
                1
              </FiltersItemButton>
              <FiltersItemButton
                selected={selectedFilters.minBags === '2'}
                onClick={() => onMinCarBagsClick('2')}
              >
                2
              </FiltersItemButton>
              <FiltersItemButton
                selected={selectedFilters.minBags === '3'}
                onClick={() => onMinCarBagsClick('3')}
              >
                3
              </FiltersItemButton>
              <FiltersItemButton
                selected={selectedFilters.minBags === '4'}
                onClick={() => onMinCarBagsClick('4')}
              >
                4
              </FiltersItemButton>
              <FiltersItemButton
                selected={selectedFilters.minBags === '5'}
                onClick={() => onMinCarBagsClick('5')}
              >
                5
              </FiltersItemButton>
              <FiltersItemButton
                selected={selectedFilters.minBags === '6'}
                onClick={() => onMinCarBagsClick('6')}
              >
                6
              </FiltersItemButton>
              <FiltersItemButton
                selected={selectedFilters.minBags === '7'}
                onClick={() => onMinCarBagsClick('7')}
              >
                7
              </FiltersItemButton>
              <FiltersItemButton
                selected={selectedFilters.minBags === '8'}
                onClick={() => onMinCarBagsClick('8')}
              >
                8+
              </FiltersItemButton>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
