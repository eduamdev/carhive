import { Dispatch, SetStateAction } from 'react';
import { SelectedFilters } from '../filters-button';
import { SUVIcon } from '@/app/components/icons/suv';
import { MinivanIcon } from '@/app/components/icons/minivan';
import { TruckIcon } from '@/app/components/icons/truck';
import { HatchbackIcon } from '@/app/components/icons/hatchback';
import { CarIcon } from '@/app/components/icons/car';
import { RoadsterIcon } from '@/app/components/icons/roadster';
import { Toggle } from '@/app/components/ui/toggle';

export enum BodyStyle {
  SUV = 'suv',
  MINIVAN = 'minivan',
  PICKUP_TRUCK = 'pickup-truck',
  SPORTS_CAR = 'sports-car',
  HATCHBACK = 'hatchback',
  SEDAN = 'sedan',
}

export const bodyStyles = [
  {
    slug: BodyStyle.HATCHBACK,
    name: 'Hatchback',
    icon: HatchbackIcon,
  },
  { slug: BodyStyle.MINIVAN, name: 'Minivan', icon: MinivanIcon },
  {
    slug: BodyStyle.PICKUP_TRUCK,
    name: 'Pickup Truck',
    icon: TruckIcon,
  },
  {
    slug: BodyStyle.SPORTS_CAR,
    name: 'Sports Car',
    icon: RoadsterIcon,
  },
  { slug: BodyStyle.SUV, name: 'SUV', icon: SUVIcon },
  { slug: BodyStyle.SEDAN, name: 'Sedan', icon: CarIcon },
];

interface BodyStyleFiltersProps {
  selectedFilters: SelectedFilters;
  setSelectedFilters: Dispatch<SetStateAction<SelectedFilters>>;
}

export function BodyStyleFilters({
  selectedFilters,
  setSelectedFilters,
}: BodyStyleFiltersProps) {
  const handleBodyStyleToggle = (bodyStyle: BodyStyle) => {
    setSelectedFilters((prevFilters) => {
      const bodyStylesSelected = prevFilters.bodyStyles.includes(bodyStyle)
        ? prevFilters.bodyStyles.filter((selected) => selected !== bodyStyle)
        : [...prevFilters.bodyStyles, bodyStyle];

      return { ...prevFilters, bodyStyles: bodyStylesSelected };
    });
  };

  return (
    <section>
      <h3 className="text-lg font-semibold">Body Style</h3>
      <div className="pt-6">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-3.5">
          {bodyStyles.map(({ slug, name, icon: Icon }) => (
            <Toggle
              key={slug}
              variant={'outline'}
              className="h-[50px] rounded-full px-4"
              pressed={selectedFilters.bodyStyles.includes(slug)}
              onPressedChange={() => handleBodyStyleToggle(slug)}
            >
              <Icon className="mr-2.5 size-7" />
              <span className="text-sm font-normal text-neutral-950">
                {name}
              </span>
            </Toggle>
          ))}
        </div>
      </div>
    </section>
  );
}
