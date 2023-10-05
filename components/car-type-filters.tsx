import { FiltersAreaButton } from '@/components/filters-area-button';
import { Icons } from '@/components/icons';

const carTypes = [
  { id: 'suv', name: 'SUV', icon: <Icons.suv className="h-8 w-8" /> },
  {
    id: 'minivan',
    name: 'Minivan',
    icon: <Icons.minivan className="h-8 w-8" />,
  },
  {
    id: 'pick-up',
    name: 'Pick-up',
    icon: <Icons.pickUp className="h-8 w-8" />,
  },
  { id: 'sport', name: 'Sport', icon: <Icons.sportCar className="h-8 w-8" /> },
  {
    id: 'off-road',
    name: 'Off-road',
    icon: <Icons.offRoad className="h-8 w-8" />,
  },
  { id: 'sedan', name: 'Sedan', icon: <Icons.sedan className="h-8 w-8" /> },
];

export function CarTypeFilters({ selectedFilters, onClick }) {
  return (
    <div className="relative px-6 py-8 after:absolute after:bottom-0 after:left-6 after:right-6 after:h-px after:bg-black/10 after:content-['']">
      <section>
        <h3 className="pb-6 text-xl font-semibold">Car type</h3>
        <div className="grid grid-cols-2 items-center gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {carTypes.map(({ id: slug, name, icon }) => (
            <FiltersAreaButton
              key={slug}
              selected={selectedFilters.carTypes.includes(slug)}
              onClick={() => onClick(slug)}
            >
              <div className="flex h-32 min-h-full w-full flex-col items-start justify-between p-4">
                {icon}
                <span className="text-base font-medium">{name}</span>
              </div>
            </FiltersAreaButton>
          ))}
        </div>
      </section>
    </div>
  );
}
