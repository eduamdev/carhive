import { ReservationForm } from '../components/reservation-form';
import { Icons } from '@/app/components/icons';
import { formatCurrency } from '@/app/lib/utils';
import { fetchCarBySlug, fetchLocations } from '@/db/queries';

interface ReservationSidebarProps {
  slug: string;
}

export async function ReservationSidebar({ slug }: ReservationSidebarProps) {
  const [car, locations] = await Promise.all([
    fetchCarBySlug(slug),
    fetchLocations(),
  ]);

  if (!car) {
    return null;
  }

  const pricePerDay = car.discounted_price_per_day || car.retail_price_per_day;
  const currency = car.discounted_price_currency || car.retail_price_currency;

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
