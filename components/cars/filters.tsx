import { Dispatch, ReactNode, SetStateAction } from 'react';
import { Icons } from '@/components/icons';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Slider } from '@/components/ui/slider';
import { Checkbox } from '@/components/ui/checkbox';
import { CheckedState } from '@radix-ui/react-checkbox';
import {
  BodyStyle,
  EngineType,
  SelectedFilters,
  Transmission,
} from '@/lib/types';
import { cn } from '@/lib/utils';

interface FiltersProps {
  minPrice: number;
  maxPrice: number;
  selectedFilters: SelectedFilters;
  setSelectedFilters: Dispatch<SetStateAction<SelectedFilters>>;
}

export function Filters({
  minPrice,
  maxPrice,
  selectedFilters,
  setSelectedFilters,
}: FiltersProps) {
  return (
    <>
      <PriceRangeFilters
        minPrice={minPrice}
        maxPrice={maxPrice}
        selectedFilters={selectedFilters}
        setSelectedFilters={setSelectedFilters}
      />
      <BodyStyleFilters
        selectedFilters={selectedFilters}
        setSelectedFilters={setSelectedFilters}
      />
      <EngineTypeFilters
        selectedFilters={selectedFilters}
        setSelectedFilters={setSelectedFilters}
      />
      <SeatingCapacityFilters
        selectedFilters={selectedFilters}
        setSelectedFilters={setSelectedFilters}
      />
      <TransmissionFilters
        selectedFilters={selectedFilters}
        setSelectedFilters={setSelectedFilters}
      />
    </>
  );
}

interface FilterProps {
  children: ReactNode;
  selected: boolean;
  onClick: () => void;
  size?: 'area' | 'pill';
  className?: string;
}

export function Filter({
  children,
  selected,
  onClick,
  size = 'pill',
  className = '',
}: FilterProps) {
  const selectedClassNames =
    size === 'area'
      ? 'bg-neutral-50 after:absolute after:-left-px after:-top-px after:h-[calc(100%_+_2px)] after:w-[calc(100%_+_2px)] after:border-2 after:border-black after:content-[""] after:[border-radius:inherit]'
      : 'border-black bg-black text-white after:absolute after:-left-px after:-top-px after:h-[calc(100%_+_2px)] after:w-[calc(100%_+_2px)] after:border-2 after:border-black after:content-[""] after:[border-radius:inherit]';

  return (
    <Button
      variant="filter"
      size={size}
      className={cn(className, selected && selectedClassNames)}
      onClick={onClick}
    >
      {children}
    </Button>
  );
}

// ------------ PRICE RANGE FILTERS -----------------

interface PriceRangeFiltersProps {
  minPrice: number;
  maxPrice: number;
  selectedFilters: SelectedFilters;
  setSelectedFilters: Dispatch<SetStateAction<SelectedFilters>>;
}

export function PriceRangeFilters({
  minPrice: MIN_PRICE,
  maxPrice: MAX_PRICE,
  selectedFilters,
  setSelectedFilters,
}: PriceRangeFiltersProps) {
  function handleSliderChange(
    priceRange: number[],
    selectedFilters: SelectedFilters,
    setSelectedFilters: Dispatch<SetStateAction<SelectedFilters>>,
  ) {
    setSelectedFilters({
      ...selectedFilters,
      minPrice: priceRange[0],
      maxPrice: priceRange[1],
    });
  }

  return (
    <div className="relative px-6 py-8 after:absolute after:inset-x-6 after:bottom-0 after:h-px after:bg-neutral-100 after:content-['']">
      <section>
        <h3 className="pb-6 text-xl font-semibold">Price range</h3>
        <div className="mx-auto flex max-w-[600px] flex-col items-start justify-between gap-12 pt-2">
          <Slider
            defaultValue={[MIN_PRICE, MAX_PRICE]}
            value={[selectedFilters.minPrice, selectedFilters.maxPrice]}
            onValueChange={(values) =>
              handleSliderChange(values, selectedFilters, setSelectedFilters)
            }
            min={MIN_PRICE}
            max={MAX_PRICE}
            step={1}
            minStepsBetweenThumbs={1}
          />

          <div className="flex w-full items-center justify-between gap-6">
            <div className="relative h-14 w-full">
              <Label
                htmlFor="price_filter_min"
                className="absolute left-3 top-2.5 w-full max-w-full truncate pr-6 text-xs font-normal leading-none text-neutral-500"
              >
                Minimum
              </Label>
              <div className="absolute bottom-3 left-3 leading-none">$</div>
              <Input
                id="price_filter_min"
                type="text"
                className="absolute inset-0 h-full rounded-lg border border-neutral-400 bg-transparent pl-7 pr-4 pt-4 tabular-nums leading-none"
                value={selectedFilters.minPrice}
                readOnly
              />
            </div>
            <div className="h-px shrink-0 basis-4 bg-neutral-400"></div>
            <div className="relative h-14 w-full">
              <Label
                htmlFor="price_filter_max"
                className="absolute left-3 top-2.5 w-full max-w-full truncate pr-6 text-xs font-normal leading-none text-neutral-500"
              >
                Maximum
              </Label>
              <div className="absolute bottom-3 left-3 leading-none">$</div>
              <Input
                id="price_filter_max"
                type="text"
                className="absolute inset-0 h-full rounded-lg border border-neutral-400 bg-transparent pl-7 pr-4 pt-4 tabular-nums leading-none"
                value={selectedFilters.maxPrice}
                readOnly
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

// ------------ BODY STYLE FILTERS -----------------

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
                size="area"
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

// ------------ ENGINE TYPES FILTERS -----------------

const engineTypes = [
  {
    slug: EngineType.GAS,
    name: 'Gas',
  },
  { slug: EngineType.HYBRID, name: 'Hybrid' },
  {
    slug: EngineType.ELECTRIC,
    name: 'Electric',
  },
];

interface EngineTypeFiltersProps {
  selectedFilters: SelectedFilters;
  setSelectedFilters: Dispatch<SetStateAction<SelectedFilters>>;
}

export function EngineTypeFilters({
  selectedFilters,
  setSelectedFilters,
}: EngineTypeFiltersProps) {
  function handleCheckedChange(
    checked: CheckedState,
    engineType: EngineType,
    selectedFilters: SelectedFilters,
    setSelectedFilters: Dispatch<SetStateAction<SelectedFilters>>,
  ) {
    let engineTypesSelected: EngineType[] = [];

    if (!checked || checked === 'indeterminate') {
      engineTypesSelected = selectedFilters.engineTypes.filter(
        (selected) => selected !== engineType,
      );
    } else {
      engineTypesSelected = [...selectedFilters.engineTypes, engineType];
    }

    setSelectedFilters({
      ...selectedFilters,
      engineTypes: engineTypesSelected,
    });
  }

  return (
    <div className="relative px-6 py-8 after:absolute after:inset-x-6 after:bottom-0 after:h-px after:bg-neutral-100 after:content-['']">
      <section>
        <h3 className="pb-6 text-xl font-semibold">Engine type</h3>
        <div className="grid grid-cols-2 items-center">
          {engineTypes.map(({ slug, name }) => (
            <div key={slug} className="flex items-center py-3">
              <Checkbox
                id={slug}
                onCheckedChange={(checked) =>
                  handleCheckedChange(
                    checked,
                    slug,
                    selectedFilters,
                    setSelectedFilters,
                  )
                }
                checked={selectedFilters.engineTypes.includes(slug)}
              />
              <div className="w-full">
                <Label
                  htmlFor={slug}
                  className="block cursor-pointer pl-4 text-base font-normal"
                >
                  {name}
                </Label>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

// ------------ SEATING CAPACITY FILTERS -----------------

interface SeatingCapacityFiltersProps {
  selectedFilters: SelectedFilters;
  setSelectedFilters: Dispatch<SetStateAction<SelectedFilters>>;
}

export function SeatingCapacityFilters({
  selectedFilters,
  setSelectedFilters,
}: SeatingCapacityFiltersProps) {
  function handleClick(
    seats: number | undefined,
    selectedFilters: SelectedFilters,
    setSelectedFilters: Dispatch<SetStateAction<SelectedFilters>>,
  ) {
    setSelectedFilters({
      ...selectedFilters,
      seats: selectedFilters.seats === seats ? undefined : seats,
    });
  }

  const seatingCapacity: ReadonlyArray<number> = [2, 3, 4, 5, 6, 7];

  return (
    <div className="relative px-6 py-8 after:absolute after:inset-x-6 after:bottom-0 after:h-px after:bg-neutral-100 after:content-['']">
      <section>
        <h3 className="pb-6 text-xl font-semibold">Seating capacity</h3>
        <div className="mb-2 flex flex-row flex-wrap items-center gap-3">
          <Filter
            className="font-normal"
            selected={!selectedFilters.seats}
            onClick={() =>
              handleClick(undefined, selectedFilters, setSelectedFilters)
            }
          >
            Any
          </Filter>
          {seatingCapacity.map((seats, index, array) => (
            <Filter
              key={seats}
              className="font-normal"
              selected={selectedFilters.seats === seats}
              onClick={() =>
                handleClick(seats, selectedFilters, setSelectedFilters)
              }
            >
              {index === array.length - 1 ? `${seats}+` : seats}
            </Filter>
          ))}
        </div>
      </section>
    </div>
  );
}

// ------------ TRANSMISSION FILTERS -----------------

const transmissions = [
  {
    slug: Transmission.AUTOMATIC,
    name: 'Automatic',
  },
  { slug: Transmission.MANUAL, name: 'Manual' },
];

interface TransmissionFiltersProps {
  selectedFilters: SelectedFilters;
  setSelectedFilters: Dispatch<SetStateAction<SelectedFilters>>;
}

export function TransmissionFilters({
  selectedFilters,
  setSelectedFilters,
}: TransmissionFiltersProps) {
  function handleCheckedChange(
    checked: CheckedState,
    transmission: Transmission,
    selectedFilters: SelectedFilters,
    setSelectedFilters: Dispatch<SetStateAction<SelectedFilters>>,
  ) {
    let transmissionsSelected: Transmission[] = [];

    if (!checked || checked === 'indeterminate') {
      transmissionsSelected = selectedFilters.transmissions.filter(
        (selected) => selected !== transmission,
      );
    } else {
      transmissionsSelected = [...selectedFilters.transmissions, transmission];
    }

    setSelectedFilters({
      ...selectedFilters,
      transmissions: transmissionsSelected,
    });
  }

  return (
    <div className="mb-2 px-6 py-8">
      <section>
        <h3 className="pb-6 text-xl font-semibold">Transmission</h3>
        <div className="grid grid-cols-2 items-center">
          {transmissions.map(({ slug, name }) => (
            <div key={slug} className="flex items-center py-3">
              <Checkbox
                id={slug}
                onCheckedChange={(checked) =>
                  handleCheckedChange(
                    checked,
                    slug,
                    selectedFilters,
                    setSelectedFilters,
                  )
                }
                checked={selectedFilters.transmissions.includes(slug)}
              />
              <div className="w-full">
                <Label
                  htmlFor={slug}
                  className="block cursor-pointer pl-4 text-base font-normal"
                >
                  {name}
                </Label>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
