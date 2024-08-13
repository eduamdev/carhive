import { ReservationForm } from '../components/reservation-form';
import { FilledStarIcon } from '@/app/components/icons/filled-star';
import { formatCurrency } from '@/app/lib/utils';
import { Location } from '@/db/definitions';

interface ReservationSidebarProps {
  carSlug: string;
  pricePerDay: number;
  currency: string;
  rating: number;
  reviews: number;
  locations: Location[];
}

export function ReservationSidebar({
  carSlug,
  pricePerDay,
  currency,
  rating,
  reviews,
  locations,
}: ReservationSidebarProps) {
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
            <FilledStarIcon className="size-[14px] self-center" />
            <span className="text-sm font-medium leading-none">{rating}</span>
            {reviews > 0 && (
              <>
                <span>·</span>
                <span className="text-sm leading-none text-neutral-600">
                  {reviews} reviews
                </span>
              </>
            )}
          </div>
        </div>
        <ReservationForm
          carSlug={carSlug}
          locations={locations}
          pricePerDay={pricePerDay}
          currency={currency}
        />
      </div>
    </div>
  );
}
