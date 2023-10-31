import { Dispatch, SetStateAction } from 'react';
import { Icons } from '@/components/icons';
import { Filter } from '@/components/cars/filter';
import { BodyStyle, SelectedFilters } from '@/lib/definitions';

export const bodyStyles = [
  {
    slug: BodyStyle.HATCHBACK,
    name: 'Hatchback',
    icon: Icons.hatchback,
  },
  { slug: BodyStyle.MINIVAN, name: 'Minivan', icon: Icons.minivan },
  {
    slug: BodyStyle.PICKUP_TRUCK,
    name: 'Pickup Truck',
    icon: Icons.pickupTruck,
  },
  {
    slug: BodyStyle.SPORTS_CAR,
    name: 'Sports Car',
    icon: Icons.sportsCar,
  },
  { slug: BodyStyle.SUV, name: 'SUV', icon: Icons.suv },
  { slug: BodyStyle.SEDAN, name: 'Sedan', icon: Icons.sedan },
];

interface BodyStyleFiltersProps {
  selectedFilters: SelectedFilters;
  setSelectedFilters: Dispatch<SetStateAction<SelectedFilters>>;
}

export function BodyStyleFilters({
  selectedFilters,
  setSelectedFilters,
}: BodyStyleFiltersProps) {
  function handleClick(
    bodyStyle: BodyStyle,
    selectedFilters: SelectedFilters,
    setSelectedFilters: Dispatch<SetStateAction<SelectedFilters>>,
  ) {
    let bodyStylesSelected: BodyStyle[] = [];

    if (selectedFilters.bodyStyles.includes(bodyStyle)) {
      bodyStylesSelected = selectedFilters.bodyStyles.filter(
        (selected) => selected !== bodyStyle,
      );
    } else {
      bodyStylesSelected = [...selectedFilters.bodyStyles, bodyStyle];
    }

    setSelectedFilters({ ...selectedFilters, bodyStyles: bodyStylesSelected });
  }

  return (
    <div className="relative px-6 py-8 after:absolute after:inset-x-6 after:bottom-0 after:h-px after:bg-neutral-100 after:content-['']">
      <section>
        <h3 className="pb-6 text-xl font-semibold">Body Style</h3>
        <div className="grid grid-cols-2 items-center gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {bodyStyles.map(({ icon, slug, name }) => {
            const Icon = icon;

            return (
              <Filter
                key={slug}
                area
                selected={selectedFilters.bodyStyles.includes(slug)}
                onClick={() =>
                  handleClick(slug, selectedFilters, setSelectedFilters)
                }
              >
                <div className="flex h-32 min-h-full w-full flex-col items-start justify-between p-4">
                  {Icon ? <Icon className="h-8 w-8" /> : null}
                  <span className="text-base font-medium">{name}</span>
                </div>
              </Filter>
            );
          })}
        </div>
      </section>
    </div>
  );
}
