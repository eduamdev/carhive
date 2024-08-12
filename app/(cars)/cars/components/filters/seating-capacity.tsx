import { Dispatch, SetStateAction } from 'react';
import { cn } from '@/app/lib/utils';
import { Button } from '@/app/components/ui/button';
import { SelectedFilters } from '../filters';

interface SeatingCapacityFiltersProps {
  selectedFilters: SelectedFilters;
  setSelectedFilters: Dispatch<SetStateAction<SelectedFilters>>;
}

export function SeatingCapacityFilters({
  selectedFilters,
  setSelectedFilters,
}: SeatingCapacityFiltersProps) {
  const handleClick = (seats: number | undefined) => {
    setSelectedFilters({
      ...selectedFilters,
      seats: selectedFilters.seats === seats ? undefined : seats,
    });
  };

  const seatingCapacity: ReadonlyArray<number | undefined> = [
    undefined,
    2,
    3,
    4,
    5,
    6,
    7,
  ];

  return (
    <div className="relative px-6 py-8 after:absolute after:inset-x-6 after:bottom-0 after:h-px after:bg-neutral-100 after:content-['']">
      <section>
        <h3 className="pb-6 text-xl font-semibold">Seating capacity</h3>
        <div className="mb-2 flex flex-row flex-wrap items-center gap-3">
          {seatingCapacity.map((seats, index, array) => {
            const isSelected = selectedFilters.seats === seats;
            const buttonClassName = cn(
              'font-normal',
              isSelected &&
                'border-black bg-black text-white after:absolute after:-left-px after:-top-px after:size-[calc(100%_+_2px)] after:border-2 after:border-black after:content-[""] after:[border-radius:inherit]',
            );

            return (
              <Button
                key={seats ?? 'any'}
                variant="filter"
                size="pill"
                className={buttonClassName}
                onClick={() => handleClick(seats)}
              >
                {seats === undefined
                  ? 'Any'
                  : index === array.length - 1
                  ? `${seats}+`
                  : seats}
              </Button>
            );
          })}
        </div>
      </section>
    </div>
  );
}
