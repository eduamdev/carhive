import { Button } from '@/app/components/ui/button';

export function ApplyFiltersButton({ onApply }: { onApply: () => void }) {
  return (
    <Button size="lg" className="text-[15px]" onClick={onApply}>
      Show cars
    </Button>
  );
}
