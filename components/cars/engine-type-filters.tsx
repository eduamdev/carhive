import { Dispatch, SetStateAction } from 'react';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { CheckedState } from '@radix-ui/react-checkbox';
import { SelectedFilters, EEngineTypes } from '@/types/filters';

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
    value: EEngineTypes,
    selectedFilters: SelectedFilters,
    setSelectedFilters: Dispatch<SetStateAction<SelectedFilters>>,
  ) {
    let engineTypesSelected: EEngineTypes[] = [];

    if (!checked || checked === 'indeterminate') {
      engineTypesSelected = selectedFilters.engineTypes.filter(
        (selected) => selected !== value,
      );
    } else {
      engineTypesSelected = [...selectedFilters.engineTypes, value];
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
          {Object.keys(EEngineTypes).map((key) => {
            const value = EEngineTypes[key as keyof typeof EEngineTypes];

            return (
              <div key={key} className="flex items-center py-3">
                <Checkbox
                  id={key}
                  onCheckedChange={(checked) =>
                    handleCheckedChange(
                      checked,
                      value,
                      selectedFilters,
                      setSelectedFilters,
                    )
                  }
                  checked={selectedFilters.engineTypes.includes(value)}
                />
                <div className="w-full">
                  <Label
                    htmlFor={key}
                    className="block cursor-pointer pl-4 text-base font-normal"
                  >
                    {value}
                  </Label>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
