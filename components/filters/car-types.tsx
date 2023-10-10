import { Icons } from '@/components/icons';
import { Item } from '@/components/filters/item';
import { IFilters } from '@/types/filters';
import { carTypes } from '@/data/car-specs';

const carTypeIcons = {
  hatchback: <Icons.hatchback className="h-8 w-8" />,
  minivan: <Icons.minivan className="h-8 w-8" />,
  pickuptruck: <Icons.pickupTruck className="h-8 w-8" />,
  sportscar: <Icons.sportsCar className="h-8 w-8" />,
  suv: <Icons.suv className="h-8 w-8" />,
  sedan: <Icons.sedan className="h-8 w-8" />,
};

interface CarTypesProps {
  selectedFilters: IFilters;
  onClick: Function;
}

export function CarTypes({ selectedFilters, onClick }: CarTypesProps) {
  return (
    <div className="relative px-6 py-8 after:absolute after:bottom-0 after:left-6 after:right-6 after:h-px after:bg-neutral-100 after:content-['']">
      <section>
        <h3 className="pb-6 text-xl font-semibold">Car type</h3>
        <div className="grid grid-cols-2 items-center gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {carTypes.map(({ id, slug, value }) => (
            <Item
              key={id}
              area
              selected={selectedFilters.carTypes.includes(slug)}
              onClick={() => onClick(slug)}
            >
              <div className="flex h-32 min-h-full w-full flex-col items-start justify-between p-4">
                {carTypeIcons[value.toLowerCase().replace(/\s/g, '')]}
                <span className="text-base font-medium">{value}</span>
              </div>
            </Item>
          ))}
        </div>
      </section>
    </div>
  );
}
