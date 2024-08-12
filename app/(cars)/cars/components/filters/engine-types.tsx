import { Dispatch, SetStateAction } from 'react';
import { Checkbox } from '@/app/components/ui/checkbox';
import { Label } from '@/app/components/ui/label';
import { CheckedState } from '@radix-ui/react-checkbox';
import { SelectedFilters } from '../filters';

export enum EngineType {
  GAS = 'gas',
  HYBRID = 'hybrid',
  ELECTRIC = 'electric',
}

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

export const toggleEngineType = (
  engineType: EngineType,
  checked: CheckedState,
  selectedFilters: SelectedFilters,
  setSelectedFilters: Dispatch<SetStateAction<SelectedFilters>>,
) => {
  const engineTypesSelected =
    !checked || checked === 'indeterminate'
      ? selectedFilters.engineTypes.filter(
          (selected) => selected !== engineType,
        )
      : [...selectedFilters.engineTypes, engineType];

  setSelectedFilters({
    ...selectedFilters,
    engineTypes: engineTypesSelected,
  });
};

export function EngineTypeFilters({
  selectedFilters,
  setSelectedFilters,
}: EngineTypeFiltersProps) {
  const renderEngineTypeCheckboxes = () => {
    return engineTypes.map(({ slug, name }) => (
      <div key={slug} className="flex items-center py-3">
        <Checkbox
          id={slug}
          onCheckedChange={(checked) =>
            toggleEngineType(slug, checked, selectedFilters, setSelectedFilters)
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
    ));
  };

  return (
    <div className="relative px-6 py-8 after:absolute after:inset-x-6 after:bottom-0 after:h-px after:bg-neutral-100 after:content-['']">
      <section>
        <h3 className="pb-6 text-xl font-semibold">Engine type</h3>
        <div className="grid grid-cols-2 items-center">
          {renderEngineTypeCheckboxes()}
        </div>
      </section>
    </div>
  );
}
