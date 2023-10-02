import { Button } from '@/components/ui/button';

export function FiltersItemButton({ children, selected, onClick }) {
  return (
    <Button
      variant="filter"
      size="item"
      className={
        selected &&
        'border-black bg-black text-white after:absolute after:-left-px after:-top-px after:h-[calc(100%_+_2px)] after:w-[calc(100%_+_2px)] after:border-2 after:border-black after:content-[""] after:[border-radius:inherit]'
      }
      onClick={onClick}
    >
      {children}
    </Button>
  );
}
