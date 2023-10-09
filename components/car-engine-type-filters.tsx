import { Filter } from '@/components/filter';
import { carEngines } from '@/data/car-specs';
import { IFilters } from '@/types/filters';

interface CarEngineTypeFiltersProps {
  selectedFilters: IFilters;
  onClick: Function;
}

export function CarEngineTypeFilters({
  selectedFilters,
  onClick,
}: CarEngineTypeFiltersProps) {
  return (
    <div className="relative px-6 py-8 after:absolute after:bottom-0 after:left-6 after:right-6 after:h-px after:bg-neutral-100 after:content-['']">
      <section>
        <h3 className="pb-6 text-xl font-semibold">Engine type</h3>
        <div className="grid grid-cols-3 items-center gap-4">
          {carEngines.map(({ id, slug, value, icon }) => (
            <Filter
              key={id}
              area
              selected={selectedFilters.engineTypes === slug}
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
