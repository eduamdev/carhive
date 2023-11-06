import { ReservationForm } from '@/components/car/reservation-form';
import { Icons } from '@/components/icons';
import { formatCurrency } from '@/lib/utils';
import { Car } from '@/db/definitions';
import { fetchLocations } from '@/db/queries';

interface ReservationSidebarProps {
  car: Car;
}

export async function ReservationSidebar({ car }: ReservationSidebarProps) {
  const locations = await fetchLocations();

  const pricePerDay: number =
    car.discounted_price_per_day || car.retail_price_per_day;
  const currency: string =
    car.discounted_price_currency || car.retail_price_currency;

  return (
    <div className="hidden normal-nums md:block">
      <div className="sticky top-[var(--card-reserve-top-offset)] rounded-xl border p-6 shadow-[0_6px_16px_rgba(0,0,0,0.12)]">
        <div className="grid grid-cols-1 items-baseline gap-4 leading-none lg:grid-cols-2">
          <div className="flex items-baseline gap-1.5 ">
            <span className="shrink-0 text-xl font-semibold leading-none tracking-tight">
              {formatCurrency(pricePerDay, currency)}
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
        <ReservationForm
          locations={locations}
          pricePerDay={pricePerDay}
          currency={currency}
        />
      </div>
    </div>
  );
}
