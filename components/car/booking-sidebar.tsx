import { Icons } from '@/components/icons';
import { addDays, differenceInDays, format } from 'date-fns';
import { formatCurrency } from '@/lib/utils';
import { Car } from '@/lib/definitions';
import { Button } from '@/components/ui/button';
import { fetchLocationByValue } from '@/lib/data';
import { locations } from '@/lib/placeholder-data';

interface BookingSidebarProps {
  car: Car;
  location?: string;
  checkin?: string;
  checkout?: string;
}

export async function BookingSidebar({
  car,
  location,
  checkin,
  checkout,
}: BookingSidebarProps) {
  const defaults = {
    LOCATION_NAME: locations[6].name,
    CHECKIN: addDays(new Date(), 7),
    CHECKOUT: addDays(new Date(), 14),
  };

  const locationName =
    (location && (await fetchLocationByValue(location))?.name) ||
    defaults.LOCATION_NAME;

  const checkIn = (checkin && new Date(checkin)) || defaults.CHECKIN;
  const checkOut = (checkout && new Date(checkout)) || defaults.CHECKOUT;

  const currentPrice: number =
    car.discount_price_amount || car.retail_price_amount;
  const currency: string =
    car.discount_price_currency || car.retail_price_currency;

  const numberOfDays: number = differenceInDays(checkOut, checkIn);
  const taxesAndFees: number = currentPrice * numberOfDays * 0.16;

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
            {car.reviews > 0 && (
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
                {locationName}
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2">
            <div>
              <div className="flex h-full flex-col items-start justify-center gap-1 p-2">
                <div className="text-xs font-medium leading-none">Check-in</div>
                <div className="text-sm leading-none text-neutral-600">
                  {format(checkIn, 'dd/MM/yyyy')}
                </div>
              </div>
            </div>
            <div className="border-l border-neutral-300">
              <div className="flex flex-col gap-1.5 p-2.5">
                <div className="text-xs font-medium leading-none">Checkout</div>
                <div className="text-sm leading-none text-neutral-600">
                  {format(checkOut, 'dd/MM/yyyy')}
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
              {formatCurrency(currentPrice, currency)} x {numberOfDays}{' '}
              {numberOfDays > 1 ? 'days' : 'day'}
            </div>
            <div className="text-neutral-600">
              {formatCurrency(currentPrice * numberOfDays, currency)}
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
            <div className="font-semibold">Total (taxes included)</div>
            <div className="font-semibold">
              {formatCurrency(
                currentPrice * numberOfDays + taxesAndFees,
                currency,
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
