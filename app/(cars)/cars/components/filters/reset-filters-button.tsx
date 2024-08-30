import { Button } from "@/app/components/ui/button"

export function ResetFiltersButton({ onReset }: { onReset: () => void }) {
  return (
    <Button
      variant="ghost"
      size={"lg"}
      className="-ml-4 text-[15px]"
      onClick={onReset}
    >
      Clear all
    </Button>
  )
}
