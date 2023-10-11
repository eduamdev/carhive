import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { ISelectedFilters } from '@/types/filters';
import { ETransmissions } from '@/types/car-specs';

interface FiltersTransmissionsProps {
  selectedFilters: ISelectedFilters;
  onCheckedChange: (
    checked: boolean | 'indeterminate',
    value: ETransmissions,
  ) => void;
}

export function FiltersTransmissions({
  selectedFilters,
  onCheckedChange,
}: FiltersTransmissionsProps) {
  return (
    <div className="mb-2 px-6 py-8">
      <section>
        <h3 className="pb-6 text-xl font-semibold">Transmission</h3>
        <div className="grid grid-cols-2 items-center">
          {Object.keys(ETransmissions).map((key) => {
            const value: ETransmissions = ETransmissions[key];

            return (
              <div key={key} className="flex items-center py-3">
                <Checkbox
                  id={key}
                  onCheckedChange={(checked) => onCheckedChange(checked, value)}
                  checked={selectedFilters.transmission.includes(value)}
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
