import { ReservationForm } from "../components/reservation-form"

interface ReservationSidebarProps {
  carSlug: string
  pricePerDay: number
  currency: string
}

export function ReservationSidebar({
  carSlug,
  pricePerDay,
  currency,
}: ReservationSidebarProps) {
  return (
    <div className="hidden normal-nums md:block">
      <div className="sticky top-[var(--reserve-card-top-offset)] rounded-xl border p-6 shadow-[0_6px_16px_rgba(0,0,0,0.12)]">
        <span className="text-lg font-medium">Add dates for prices</span>
        <ReservationForm
          carSlug={carSlug}
          pricePerDay={pricePerDay}
          currency={currency}
        />
      </div>
    </div>
  )
}
