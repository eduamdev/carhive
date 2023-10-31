import { Dispatch, SetStateAction } from 'react';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { CheckedState } from '@radix-ui/react-checkbox';
import { EngineType, SelectedFilters } from '@/lib/definitions';

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
