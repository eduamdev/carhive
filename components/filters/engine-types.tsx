import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { carEngines } from '@/data/car-specs';
import { IFilters } from '@/types/filters';
import { ECarEngineType } from '@/types/car-specs';

interface EngineTypesProps {
  selectedFilters: IFilters;
  onCheckedChange: (
    checked: boolean | 'indeterminate',
    slug: ECarEngineType,
  ) => void;
}

export function EngineTypes({
  selectedFilters,
  onCheckedChange,
}: EngineTypesProps) {
  return (
    <div className="relative px-6 py-8 after:absolute after:bottom-0 after:left-6 after:right-6 after:h-px after:bg-neutral-100 after:content-['']">
      <section>
        <h3 className="pb-6 text-xl font-semibold">Engine type</h3>
        <div className="grid grid-cols-2 items-center">
          {carEngines.map(({ id, slug, value }) => (
            <div className="flex items-center py-3" key={id}>
              <Checkbox
                id={id}
                onCheckedChange={(checked) => onCheckedChange(checked, slug)}
                checked={selectedFilters.engineTypes.includes(slug)}
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
