import { Dispatch, SetStateAction } from 'react';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { CheckedState } from '@radix-ui/react-checkbox';
import { SelectedFilters, ETransmissions } from '@/types/filters';

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
    value: ETransmissions,
    selectedFilters: SelectedFilters,
    setSelectedFilters: Dispatch<SetStateAction<SelectedFilters>>,
  ) {
    let transmissionsSelected: ETransmissions[] = [];

    if (!checked || checked === 'indeterminate') {
      transmissionsSelected = selectedFilters.transmissions.filter(
        (selected) => selected !== value,
      );
    } else {
      transmissionsSelected = [...selectedFilters.transmissions, value];
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
          {Object.keys(ETransmissions).map((key) => {
            const value = ETransmissions[key as keyof typeof ETransmissions];

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
                  checked={selectedFilters.transmissions.includes(value)}
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
