import Link from 'next/link';

export function TrendingDestinations() {
  return (
    <section className="pt-10">
      <div className="mx-auto w-full max-w-none px-5 sm:max-w-[90%] sm:px-0 2xl:max-w-8xl">
        <h2 className="text-2xl font-extrabold">
          Trending Rent a Car Destinations
        </h2>
        <div className="mt-8 grid grid-cols-1 items-center justify-between gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <Link
            href="/cars?pickupDropoff=Paris,France"
            className="group rounded-t-2xl"
          >
            <div className="h-72 w-full">
              <img
                src="https://images.unsplash.com/photo-1605701877331-645ad05dcb97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHBhcmlzfGVufDB8MHwwfHx8Mg%3D%3D&auto=format&fit=crop&w=600&q=60"
                alt="Paris, France"
                className="h-full w-full rounded-2xl border bg-neutral-50 object-cover object-center grayscale transition-all group-hover:grayscale-0"
              ></img>
            </div>
            <div className="mt-3">
              <h3 className="text-[15px] font-semibold">Paris, France</h3>
              <p className="mt-1 text-sm text-neutral-600">Cars from $12+</p>
            </div>
          </Link>
          <Link
            href="/cars?pickupDropoff=Dubai,UnitedArabEmirates"
            className="group rounded-t-2xl"
          >
            <div className="h-72 w-full">
              <img
                src="https://images.unsplash.com/photo-1523816572-a1a23d1a67b8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80"
                alt="Dubai, United Arab Emirates"
                className="h-full w-full rounded-2xl border bg-neutral-50 object-cover object-center grayscale transition-all group-hover:grayscale-0"
              />
            </div>
            <div className="mt-3">
              <h3 className="text-[15px] font-semibold">
                Dubai, United Arab Emirates
              </h3>
              <p className="mt-1 text-sm text-neutral-600">Cars from $12+</p>
            </div>
          </Link>
          <Link
            href="/cars?pickupDropoff=Cancun,Mexico"
            className="group rounded-t-2xl"
          >
            <div className="h-72 w-full">
              <img
                src="https://images.unsplash.com/photo-1616423841125-8307665a0469?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
                alt="Cancún, México"
                className="h-full w-full rounded-2xl border bg-neutral-50 object-cover object-center grayscale transition-all group-hover:grayscale-0"
              />
            </div>
            <div className="mt-3">
              <h3 className="text-[15px] font-semibold">Cancún, México</h3>
              <p className="mt-1 text-sm text-neutral-600">Cars from $12+</p>
            </div>
          </Link>
          <Link
            href="/cars?pickupDropoff=Rome,Italy"
            className="group rounded-t-2xl"
          >
            <div className="h-72 w-full">
              <img
                src="https://images.unsplash.com/photo-1531572753322-ad063cecc140?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cm9tZXxlbnwwfDB8MHx8fDI%3D&auto=format&fit=crop&w=600&q=60"
                alt="Rome, Italy"
                className="h-full w-full rounded-2xl border bg-neutral-50 object-cover object-center grayscale transition-all group-hover:grayscale-0"
              />
            </div>
            <div className="mt-3">
              <h3 className="text-[15px] font-semibold">Rome, Italy</h3>
              <p className="mt-1 text-sm text-neutral-600">Cars from $12+</p>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
