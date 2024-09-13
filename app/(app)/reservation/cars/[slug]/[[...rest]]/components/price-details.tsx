import { formatAmountForDisplay } from "@/lib/utils"
import { Separator } from "@/components/ui/separator"

export function PriceDetails({
  days,
  currency,
  subtotal,
  taxes,
}: {
  days: number
  currency: string
  subtotal: number
  taxes: number
}) {
  return (
    <>
      <h2 className="text-xl font-semibold">Your total</h2>
      <div className="pt-5">
        <div className="grid grid-cols-1 gap-3">
          <div className="flex flex-row items-center justify-between text-[15px]">
            <span>
              {days} {days === 1 ? "day" : "days"}
            </span>
            <span>{formatAmountForDisplay(subtotal, currency)}</span>
          </div>
          <div className="flex flex-row items-center justify-between text-[15px]">
            <span>Taxes</span>
            <span>{formatAmountForDisplay(taxes, currency)}</span>
          </div>
          <Separator className="my-3" />
          <div className="flex flex-row items-center justify-between">
            <strong>Total ({currency.toUpperCase()})</strong>
            <strong>
              {formatAmountForDisplay(subtotal + taxes, currency)}
            </strong>
          </div>
        </div>
      </div>
    </>
  )
}
