import { Button } from '@/components/ui/button';

export function FiltersAreaButton({ children, selected, onClick }) {
  return (
    <Button
      variant="filter"
      size="area"
      className={
        selected &&
        'bg-neutral-50 after:absolute after:-left-px after:-top-px after:h-[calc(100%_+_2px)] after:w-[calc(100%_+_2px)] after:border-2 after:border-black after:content-[""] after:[border-radius:inherit]'
      }
      onClick={onClick}
    >
      {children}
    </Button>
  );
}
