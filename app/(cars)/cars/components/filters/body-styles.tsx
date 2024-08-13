import { Dispatch, SetStateAction } from 'react';
import { SelectedFilters } from '../filters';
import { Button } from '@/app/components/ui/button';
import { SUVIcon } from '@/app/components/icons/suv';
import { MinivanIcon } from '@/app/components/icons/minivan';
import { TruckIcon } from '@/app/components/icons/truck';
import { HatchbackIcon } from '@/app/components/icons/hatchback';
import { CarIcon } from '@/app/components/icons/car';
import { RoadsterIcon } from '@/app/components/icons/roadster';
import { cn } from '@/app/lib/utils';

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

const toggleBodyStyle = (
  bodyStyle: BodyStyle,
  selectedFilters: SelectedFilters,
  setSelectedFilters: Dispatch<SetStateAction<SelectedFilters>>,
) => {
  const bodyStylesSelected = selectedFilters.bodyStyles.includes(bodyStyle)
    ? selectedFilters.bodyStyles.filter((selected) => selected !== bodyStyle)
    : [...selectedFilters.bodyStyles, bodyStyle];

  setSelectedFilters({
    ...selectedFilters,
    bodyStyles: bodyStylesSelected,
  });
};

export function BodyStyleFilters({
  selectedFilters,
  setSelectedFilters,
}: BodyStyleFiltersProps) {
  const renderBodyStyleButtons = () => {
    return bodyStyles.map(({ icon: Icon, slug, name }) => {
      const isSelected = selectedFilters.bodyStyles.includes(slug);
      const buttonClassName = cn(
        isSelected &&
          'bg-neutral-50 after:absolute after:-left-px after:-top-px after:size-[calc(100%_+_2px)] after:border-2 after:border-black after:content-[""] after:[border-radius:inherit]',
      );

      return (
        <Button
          key={slug}
          variant="filter"
          size="full-size"
          className={buttonClassName}
          onClick={() =>
            toggleBodyStyle(slug, selectedFilters, setSelectedFilters)
          }
        >
          <div className="flex h-32 min-h-full w-full flex-col items-start justify-between p-4">
            {Icon && <Icon className="size-8" />}
            <span className="text-base font-medium">{name}</span>
          </div>
        </Button>
      );
    });
  };

  return (
    <div className="relative px-6 py-8 after:absolute after:inset-x-6 after:bottom-0 after:h-px after:bg-neutral-100 after:content-['']">
      <section>
        <h3 className="pb-6 text-xl font-semibold">Body Style</h3>
        <div className="grid grid-cols-2 items-center gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {renderBodyStyleButtons()}
        </div>
      </section>
    </div>
  );
}
