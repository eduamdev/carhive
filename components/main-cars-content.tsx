import { Icons } from '@/components/icons';

export function MainCarsContent() {
  return (
    <main className="flex">
      <div className="min-h-[calc(100vh-var(--header-filters-and-search-offset))] w-[55%] max-w-[1184px] shrink-0 grow-0 flex-col overflow-y-auto xl:w-[63%]">
        <div className="mx-5 my-6 sm:mx-6">
          <p className="text-[13px] font-semibold text-neutral-800">
            Over 45 cars
          </p>
        </div>
        <div className="mx-5 my-6 sm:mx-6">
          {/* card */}
          <article className="grid w-full grid-cols-[11rem_1fr] rounded-xl border sm:grid-cols-[11rem_1.5fr_1fr]">
            <div className="relative border-r">
              <div className="flex h-full items-center justify-center">
                <img
                  src="https://mediaim.expedia.com/cars/42/24e24b9a-0dc5-4630-8893-41decc62b2b9.jpg?impolicy=resizecrop&ra=fit&rh=165&rw=165"
                  alt=""
                  className="h-auto w-2/3 bg-gradient-to-r from-[#f9f9f9] to-[#e9e9e9] object-cover object-center"
                />
              </div>
              <Icons.heart className="absolute right-4 top-3 h-5 w-5" />
            </div>
            <div className="p-5">
              <div className="flex flex-col items-baseline justify-between gap-4">
                <div className="flex w-full items-baseline justify-between gap-4">
                  <span className="shrink-0 text-[15px] font-semibold">
                    Premium SUV
                  </span>
                  <div className="flex items-baseline gap-1.5">
                    <Icons.star className="h-[13px] w-[13px]" />
                    <span className="text-sm leading-none text-neutral-600">
                      4.1
                    </span>
                  </div>
                </div>
                <div className="grid w-full grid-cols-[repeat(auto-fill,minmax(120px,1fr))] gap-3">
                  <div className="flex shrink-0 gap-3">
                    <Icons.people className="h-[18px] w-[18px] shrink-0" />
                    <span className="text-[13px] text-neutral-600">
                      4 seats
                    </span>
                  </div>
                  <div className="flex shrink-0 gap-3">
                    <Icons.suitcase className="h-[18px] w-[18px] shrink-0" />
                    <span className="text-[13px] text-neutral-600">2 bags</span>
                  </div>
                  <div className="flex shrink-0 gap-3">
                    <Icons.automaticTransmission className="h-[18px] w-[18px] shrink-0" />
                    <span className="text-[13px] text-neutral-600">
                      Automatic
                    </span>
                  </div>
                  <div className="flex shrink-0 gap-3">
                    <Icons.speedometer className="h-[18px] w-[18px] shrink-0" />
                    <span className="text-[13px] text-neutral-600">
                      Unlimited mileage
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="hidden p-5 sm:block">
              <div className="flex h-full flex-col items-center justify-between">
                <p className="flex items-baseline gap-1.5">
                  <span className="text-lg leading-none text-neutral-500 line-through">
                    $150
                  </span>
                  <span className="text-lg font-bold leading-none">$138</span>
                  <span className="text-[13px] font-normal leading-none">
                    day
                  </span>
                </p>
                <button className="w-full rounded-md bg-black py-2.5 text-sm text-white">
                  View deal
                </button>
              </div>
            </div>
          </article>
        </div>
      </div>
      {/* map */}
      <div className="block flex-auto">
        <div className="sticky top-[var(--header-filters-and-search-offset)] z-10 basis-auto">
          <div className="h-[calc(100vh-var(--header-filters-and-search-offset))] bg-neutral-50"></div>
        </div>
      </div>
    </main>
  );
}
