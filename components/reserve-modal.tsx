import { ICar } from '@/types/car';
import { Button } from '@/components/ui/button';
import { Icons } from '@/components/icons';

interface ReserveModalProps {
  car: ICar;
}

export function ReserveModal({ car }: ReserveModalProps) {
  const currentPrice = car.price.perDay.discount.amount
    ? car.price.perDay.discount.amount
    : car.price.perDay.retail.amount;

  const numDays = 5;
  const taxes = 500;
  const currency = car.price.perDay.retail.currency;

  return (
    <div className="hidden normal-nums md:block">
      <div className="sticky top-[calc(var(--site-header-height)+24px)] rounded-xl border p-6 shadow-[0_6px_16px_rgba(0,0,0,0.12)]">
        <div className="grid grid-cols-1 items-baseline gap-4 leading-none lg:grid-cols-2">
          <div className="flex items-baseline gap-1.5 ">
            <span className="shrink-0 text-xl font-semibold leading-none tracking-tight">
              ${currentPrice} {currency}
            </span>
            <span className="font-normal leading-none text-neutral-600">
              day
            </span>
          </div>
          <div className="flex flex-row items-baseline justify-start gap-1 tracking-tight lg:justify-end">
            <Icons.star className="h-[13px] w-[13px]" />
            <span className="text-sm font-medium leading-none">
              {car.rating}
            </span>
            <span>·</span>
            <span className="text-sm leading-none text-neutral-600">
              {car.reviews} reviews
            </span>
          </div>
        </div>
        <div className="mt-6 w-full rounded-xl border border-neutral-300">
          <div className="flex flex-col border-b border-neutral-300">
            <div className="flex flex-col gap-1.5 p-2.5">
              <div className="text-xs font-medium leading-none">
                Pick-up / Drop-off
              </div>
              <div className="text-sm leading-none text-neutral-600">
                New York
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2">
            <div>
              <div className="flex flex-col gap-1.5 p-2.5">
                <div className="text-xs font-medium leading-none">Check-in</div>
                <div className="text-sm leading-none text-neutral-600">
                  2/12/2024
                </div>
              </div>
            </div>
            <div className="border-l border-neutral-300">
              <div className="flex flex-col gap-1.5 p-2.5">
                <div className="text-xs font-medium leading-none">Checkout</div>
                <div className="text-sm leading-none text-neutral-600">
                  10/12/2024
                </div>
              </div>
            </div>
          </div>
        </div>
        <Button size="xl" className="mt-4 w-full text-base">
          Reserve
        </Button>
        <p className="mt-4 text-center text-sm text-neutral-600">
          You won't be charged yet
        </p>
        <div className="mt-5">
          <div className="flex items-center justify-between">
            <div className="text-neutral-600 underline">
              ${currentPrice} {currency} x {numDays} days
            </div>
            <div className="text-neutral-600">
              ${currentPrice * numDays} {currency}
            </div>
          </div>
          <div className="mt-3 flex items-center justify-between">
            <div className="text-neutral-600 underline">Taxes and fees</div>
            <div className="text-neutral-600">
              ${taxes} {currency}
            </div>
          </div>
          <hr className="my-6" />
          <div className="flex items-center justify-between">
            <div className="font-semibold">Total before taxes</div>
            <div className="font-semibold">
              ${currentPrice * numDays + taxes} {currency}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
