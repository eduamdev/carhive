import { Filter } from '@/components/filter';
import { IFilters } from '@/types/filters';
import { carTypes } from '@/data/car-specs';

interface CarTypeFiltersProps {
  selectedFilters: IFilters;
  onClick: Function;
}

export function CarTypeFilters({
  selectedFilters,
  onClick,
}: CarTypeFiltersProps) {
  return (
    <div className="relative px-6 py-8 after:absolute after:bottom-0 after:left-6 after:right-6 after:h-px after:bg-neutral-100 after:content-['']">
      <section>
        <h3 className="pb-6 text-xl font-semibold">Car type</h3>
        <div className="grid grid-cols-2 items-center gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {carTypes.map(({ id, slug, value, icon }) => (
            <Filter
              key={id}
              area
              selected={selectedFilters.carTypes.includes(slug)}
              onClick={() => onClick(slug)}
            >
              <div className="flex h-32 min-h-full w-full flex-col items-start justify-between p-4">
                {icon}
                <span className="text-base font-medium">{value}</span>
              </div>
            </Filter>
          ))}
        </div>
      </section>
    </div>
  );
}
