import { Dispatch, SetStateAction } from 'react';
import { Checkbox } from '@/app/components/ui/checkbox';
import { Label } from '@/app/components/ui/label';
import { CheckedState } from '@radix-ui/react-checkbox';
import { SelectedFilters } from '../filters';

export enum Transmission {
  AUTOMATIC = 'automatic',
  MANUAL = 'manual',
}

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
  const handleCheckedChange = (
    checked: CheckedState,
    transmission: Transmission,
  ) => {
    const transmissionsSelected = checked
      ? [...selectedFilters.transmissions, transmission]
      : selectedFilters.transmissions.filter(
          (selected) => selected !== transmission,
        );

    setSelectedFilters({
      ...selectedFilters,
      transmissions: transmissionsSelected,
    });
  };

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
                  handleCheckedChange(checked, slug)
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
