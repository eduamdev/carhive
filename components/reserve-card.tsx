'use client';

import { useSearchParams } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Icons } from '@/components/icons';
import { format } from 'date-fns';
import { addDaysToDate, formatCurrency, getDaysDifference } from '@/lib/utils';
import { getLocationByValue } from '@/lib/locations';
import { ICar } from '@/types/car';
import { ESearchParams } from '@/types/filters';

type Props = {
  car: ICar;
};

export function ReserveCard({ car }: Props) {
  const searchParams = useSearchParams();

  const pickupDropoff: string = searchParams.has(ESearchParams.LOCATION)
    ? getLocationByValue(searchParams.get(ESearchParams.LOCATION))?.name
    : getLocationByValue('amsterdam')?.name;

  const checkinDate: Date = searchParams.has(ESearchParams.CHECKIN)
    ? new Date(searchParams.get(ESearchParams.CHECKIN))
    : new Date();
  const checkoutDate: Date = searchParams.has(ESearchParams.CHECKOUT)
    ? new Date(searchParams.get(ESearchParams.CHECKOUT))
    : addDaysToDate(new Date(), 5);

  const checkin: string = format(checkinDate, 'dd/MM/yyyy');
  const checkout: string = format(checkoutDate, 'dd/MM/yyyy');

  const currentPrice: number = car.price.perDay.discount?.amount
    ? car.price.perDay.discount.amount
    : car.price.perDay.retail.amount;

  const numDays: number = getDaysDifference(checkinDate, checkoutDate);
  const taxesAndFees: number = currentPrice * 0.16 * numDays;
  const currency: string = car.price.perDay.retail.currency;

  return (
    <div className="hidden normal-nums md:block">
      <div className="sticky top-[var(--card-reserve-top-offset)] rounded-xl border p-6 shadow-[0_6px_16px_rgba(0,0,0,0.12)]">
        <div className="grid grid-cols-1 items-baseline gap-4 leading-none lg:grid-cols-2">
          <div className="flex items-baseline gap-1.5 ">
            <span className="shrink-0 text-xl font-semibold leading-none tracking-tight">
              {formatCurrency(currentPrice, currency)}
            </span>
            <span className="font-normal leading-none text-neutral-600">
              day
            </span>
          </div>
          <div className="flex flex-row items-baseline justify-start gap-1 tracking-tight lg:justify-end">
            <Icons.star className="h-[15px] w-[15px] self-center" />
            <span className="text-sm font-medium leading-none">
              {car.rating}
            </span>
            {car.reviews && (
              <>
                <span>·</span>
                <span className="text-sm leading-none text-neutral-600">
                  {car.reviews} reviews
                </span>
              </>
            )}
          </div>
        </div>
        <div className="mt-6 w-full rounded-xl border border-neutral-300">
          <div className="flex flex-col border-b border-neutral-300">
            <div className="flex flex-col gap-1.5 p-2.5">
              <div className="text-xs font-medium leading-none">
                Pick-up / Drop-off
              </div>
              <div className="text-sm leading-none text-neutral-600">
                {pickupDropoff}
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2">
            <div>
              <div className="flex flex-col gap-1.5 p-2.5">
                <div className="text-xs font-medium leading-none">Check-in</div>
                <div className="text-sm leading-none text-neutral-600">
                  {checkin}
                </div>
              </div>
            </div>
            <div className="border-l border-neutral-300">
              <div className="flex flex-col gap-1.5 p-2.5">
                <div className="text-xs font-medium leading-none">Checkout</div>
                <div className="text-sm leading-none text-neutral-600">
                  {checkout}
                </div>
              </div>
            </div>
          </div>
        </div>
        <Button size="xl" className="mt-4 w-full text-base">
          Reserve
        </Button>
        <p className="mt-4 text-center text-sm text-neutral-600">
          You won&apos;t be charged yet
        </p>
        <div className="mt-5">
          <div className="flex items-center justify-between">
            <div className="text-neutral-600 underline">
              {formatCurrency(currentPrice, currency)} x {numDays}{' '}
              {numDays > 1 ? 'days' : 'day'}
            </div>
            <div className="text-neutral-600">
              {formatCurrency(currentPrice * numDays, currency)}
            </div>
          </div>
          <div className="mt-3 flex items-center justify-between">
            <div className="text-neutral-600 underline">Taxes and fees</div>
            <div className="text-neutral-600">
              {formatCurrency(taxesAndFees, currency)}
            </div>
          </div>
          <hr className="my-6" />
          <div className="flex items-center justify-between">
            <div className="font-semibold">Total after taxes</div>
            <div className="font-semibold">
              {formatCurrency(currentPrice * numDays + taxesAndFees, currency)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
