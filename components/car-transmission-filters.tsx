import { Icons } from '@/components/icons';
import { Filter } from '@/components/filter';
import { CarTransmission, IFilters } from '@/types/filters';

const carTransmissions = [
  {
    id: 'c_transmission_auto',
    slug: CarTransmission.Auto,
    text: 'Automatic',
    icon: <Icons.automaticTransmission className="h-7 w-7" />,
  },
  {
    id: 'c_transmission_manual',
    slug: CarTransmission.Manual,
    text: 'Manual',
    icon: <Icons.manualTransmission className="h-7 w-7" />,
  },
];

interface CarTransmissionFiltersProps {
  selectedFilters: IFilters;
  onClick: Function;
}

export function CarTransmissionFilters({
  selectedFilters,
  onClick,
}: CarTransmissionFiltersProps) {
  return (
    <div className="px-6 py-8">
      <section>
        <h3 className="pb-6 text-xl font-semibold">Transmission</h3>
        <div className="grid grid-cols-2 items-center gap-4">
          {carTransmissions.map(({ id, slug, text, icon }) => (
            <Filter
              key={id}
              area
              selected={selectedFilters.transmission === slug}
              onClick={() => onClick(slug)}
            >
              <div className="flex h-32 min-h-full w-full flex-col items-start justify-between p-4">
                {icon}
                <span className="text-base font-medium">{text}</span>
              </div>
            </Filter>
          ))}
        </div>
      </section>
    </div>
  );
}
