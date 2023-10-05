import { Icons } from '@/components/icons';
import { Filter } from '@/components/filter';
import { CarType, IFilters } from '@/types/filters';

const carTypes = [
  {
    id: 'c_type_suv',
    slug: CarType.SUV,
    text: 'SUV',
    icon: <Icons.suv className="h-8 w-8" />,
  },
  {
    id: 'c_type_minivan',
    slug: CarType.Minivan,
    text: 'Minivan',
    icon: <Icons.minivan className="h-8 w-8" />,
  },
  {
    id: 'c_type_pick-up',
    slug: CarType.PickUp,
    text: 'Pick-up',
    icon: <Icons.pickUp className="h-8 w-8" />,
  },
  {
    id: 'c_type_sport',
    slug: CarType.Sport,
    text: 'Sport',
    icon: <Icons.sportCar className="h-8 w-8" />,
  },
  {
    id: 'c_type_off-road',
    slug: CarType.OffRoad,
    text: 'Off-road',
    icon: <Icons.offRoad className="h-8 w-8" />,
  },
  {
    id: 'c_type_sedan',
    slug: CarType.Sedan,
    text: 'Sedan',
    icon: <Icons.sedan className="h-8 w-8" />,
  },
];

interface CarTypeFiltersProps {
  selectedFilters: IFilters;
  onClick: Function;
}

export function CarTypeFilters({
  selectedFilters,
  onClick,
}: CarTypeFiltersProps) {
  return (
    <div className="relative px-6 py-8 after:absolute after:bottom-0 after:left-6 after:right-6 after:h-px after:bg-black/10 after:content-['']">
      <section>
        <h3 className="pb-6 text-xl font-semibold">Car type</h3>
        <div className="grid grid-cols-2 items-center gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {carTypes.map(({ id, slug, text, icon }) => (
            <Filter
              key={id}
              area
              selected={selectedFilters.carTypes.includes(slug)}
              onClick={() => onClick(slug)}
            >
              <div className="flex h-32 min-h-full w-full flex-col items-start justify-between p-4">
                {icon}
                <span className="text-base font-medium">{text}</span>
              </div>
            </Filter>
          ))}
        </div>
      </section>
    </div>
  );
}
