import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { transmissions } from '@/data/car-specs';
import { IFilters } from '@/types/filters';
import { ECarTransmission } from '@/types/car-specs';

interface CarTransmissionsProps {
  selectedFilters: IFilters;
  onCheckedChange: (
    checked: boolean | 'indeterminate',
    slug: ECarTransmission,
  ) => void;
}

export function CarTransmissions({
  selectedFilters,
  onCheckedChange,
}: CarTransmissionsProps) {
  return (
    <div className="mb-2 px-6 py-8">
      <section>
        <h3 className="pb-6 text-xl font-semibold">Transmission</h3>
        <div className="grid grid-cols-2 items-center">
          {transmissions.map(({ id, slug, value }) => (
            <div className="flex items-center py-3" key={id}>
              <Checkbox
                id={id}
                onCheckedChange={(checked) => onCheckedChange(checked, slug)}
                checked={selectedFilters.transmission.includes(slug)}
              />
              <div className="w-full">
                <Label
                  htmlFor={id}
                  className="block cursor-pointer pl-4 text-base font-normal"
                >
                  {value}
                </Label>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
