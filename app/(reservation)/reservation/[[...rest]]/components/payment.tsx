import { Button } from "@/app/components/ui/button"
import { formatCurrency } from "@/app/lib/utils"

export function Payment({
  total,
  currency,
}: {
  total: number
  currency: string
}) {
  return (
    <div className="pt-6">
      <Button size="lg" className="w-full text-lg">
        Pay {formatCurrency(total, currency)}
      </Button>
    </div>
  )
}
