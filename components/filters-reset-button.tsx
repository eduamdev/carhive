import { Button } from '@/components/ui/button';

export function FiltersResetButton({ onClick }) {
  return (
    <Button
      variant="ghost"
      className="-ml-2 px-2 text-base font-semibold underline"
      onClick={onClick}
    >
      Clear all
    </Button>
  );
}
