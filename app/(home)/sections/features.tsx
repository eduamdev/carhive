import { NavigationIcon } from '@/app/components/icons/navigation';
import { ShieldCheckIcon } from '@/app/components/icons/shield-check';
import { SparklesIcon } from '@/app/components/icons/sparkles';

export function Features() {
  return (
    <section className="mt-10 border-t bg-neutral-50">
      <div className="mx-auto max-w-none px-5 py-14 sm:max-w-[90%] sm:px-0 lg:max-w-4xl">
        <h2 className="text-center text-2xl font-bold">
          Discover Why We Stand Out
        </h2>
        <div className="mt-12 grid grid-cols-1 items-center justify-center gap-8 md:grid-cols-3">
          <div className="flex flex-col items-center justify-center text-center md:items-start md:text-left">
            <div className="flex size-12 items-center justify-center rounded-full border bg-white">
              <SparklesIcon className="size-6 shrink-0 text-blue-500" />
            </div>
            <p className="mt-6 font-semibold">Hassle-Free Booking</p>
            <p className="mt-2 max-w-sm text-sm leading-6 text-neutral-600">
              Effortless booking process. Your perfect car, just a click away.
              Enjoy seamless reservations and unlock great deals instantly.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center text-center md:items-start md:text-left">
            <div className="flex size-12 items-center justify-center rounded-full border bg-white">
              <ShieldCheckIcon className="size-6 shrink-0 text-blue-500" />
            </div>
            <p className="mt-6 font-semibold">Secure Rentals</p>
            <p className="mt-2 max-w-sm text-sm leading-6 text-neutral-600">
              Your safety assured. Rigorous checks, transparent policies, and
              comprehensive insurance. Travel worry-free with well-maintained
              vehicles and reliable, secure rental services.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center text-center md:items-start md:text-left">
            <div className="flex size-12 items-center justify-center rounded-full border bg-white">
              <NavigationIcon className="size-6 shrink-0 text-blue-500" />
            </div>
            <p className="mt-6 font-semibold">Easy Navigation</p>
            <p className="mt-2 max-w-sm text-sm leading-6 text-neutral-600">
              Explore with confidence. User-friendly navigation tools to find
              your way, making your travels smooth and enjoyable, wherever your
              destination may be.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
