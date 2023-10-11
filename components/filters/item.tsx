import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export function FiltersItem({
  children,
  className = '',
  selected,
  onClick,
  area = false,
}) {
  const selectedClassNames = area
    ? 'bg-neutral-50 after:absolute after:-left-px after:-top-px after:h-[calc(100%_+_2px)] after:w-[calc(100%_+_2px)] after:border-2 after:border-black after:content-[""] after:[border-radius:inherit]'
    : 'border-black bg-black text-white after:absolute after:-left-px after:-top-px after:h-[calc(100%_+_2px)] after:w-[calc(100%_+_2px)] after:border-2 after:border-black after:content-[""] after:[border-radius:inherit]';

  return (
    <Button
      variant="filter"
      size={area ? 'area' : 'item'}
      className={cn(className, selected && selectedClassNames)}
      onClick={onClick}
    >
      {children}
    </Button>
  );
}
