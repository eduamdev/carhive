import { Button } from '@/components/ui/button';

export function FiltersSaveButton({ onClick }) {
  return (
    <Button size="lg" onClick={onClick}>
      Show cars
    </Button>
  );
}
