import { Icons } from '@/components/icons';

export default function CarsPage() {
  return (
    <div>
      <section className="hidden md:block">
        <div className="mx-auto w-full max-w-none px-5 sm:max-w-[90%] sm:px-0 2xl:max-w-8xl">
          <div className="flex items-center justify-center">
            <div className="mx-auto my-3 flex w-[90%] max-w-xl items-center justify-between gap-x-4 rounded-full border border-black/10 bg-white px-2 py-2 text-black">
              <div className="flex flex-col items-start justify-center gap-2 px-3">
                <span className="text-xs font-semibold leading-none">
                  Pick-up
                </span>
                <span className="text-[13px] leading-none text-neutral-500">
                  New York
                </span>
              </div>
              <span className="text-neutral-200">|</span>
              <div className="flex flex-col items-start justify-center gap-2 px-3">
                <span className="text-xs font-semibold leading-none">
                  Drop-off
                </span>
                <span className="text-[13px] leading-none text-neutral-500">
                  New York
                </span>
              </div>
              <span className="text-neutral-200">|</span>
              <div className="flex flex-col items-start justify-center gap-2 px-3">
                <span className="text-xs font-semibold leading-none">
                  Check in
                </span>
                <span className="text-[13px] leading-none text-neutral-500">
                  01/01/2000
                </span>
              </div>
              <span className="text-neutral-200">|</span>
              <div className="flex flex-col items-start justify-center gap-2 px-3">
                <span className="text-xs font-semibold leading-none">
                  Check out
                </span>
                <span className="text-[13px] leading-none text-neutral-500">
                  07/01/2000
                </span>
              </div>
              <div className="flex items-center justify-center rounded-full bg-black p-2 text-white">
                <Icons.search className="h-4 w-4" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="border-t">
        <div className="mx-auto w-full max-w-none px-5 sm:max-w-[90%] sm:px-0 2xl:max-w-8xl">
          <div className="flex h-screen">
            {/* filters */}
            <div className="hidden w-full max-w-[200px] pr-4 pt-8 md:block">
              <div className="sticky h-fit w-full overflow-y-auto overflow-x-hidden">
                <div className="flex flex-col">
                  <p className="text-xs">42 cars</p>
                  <hr className="my-4" />
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold">Car Type</span>
                    <Icons.chevronUp className="h-4 w-4 text-neutral-600" />
                  </div>
                  <div className="mt-4 grid grid-cols-1 gap-2 text-xs">
                    <div className="flex items-center justify-start gap-2">
                      <input type="checkbox" />
                      <span>SUV</span>
                    </div>
                    <div className="flex items-center justify-start gap-2">
                      <input type="checkbox" />
                      <span>Minivan</span>
                    </div>
                    <div className="flex items-center justify-start gap-2">
                      <input type="checkbox" />
                      <span>Pick-up</span>
                    </div>
                    <div className="flex items-center justify-start gap-2">
                      <input type="checkbox" />
                      <span>Sedan</span>
                    </div>
                    <div className="flex items-center justify-start gap-2">
                      <input type="checkbox" />
                      <span>Premium</span>
                    </div>
                    <div className="flex items-center justify-start gap-2">
                      <input type="checkbox" />
                      <span>Convertible</span>
                    </div>
                  </div>
                  <hr className="my-4" />
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold">Price</span>
                    <Icons.chevronDown className="h-4 w-4 text-neutral-600" />
                  </div>
                  <hr className="my-4" />
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold">Transmission</span>
                    <Icons.chevronUp className="h-4 w-4 text-neutral-600" />
                  </div>
                  <div className="mt-3 grid grid-cols-2 gap-1 text-xs">
                    <span className="flex h-10 items-center justify-center rounded-sm bg-neutral-100 p-4">
                      Automatic
                    </span>
                    <span className="flex h-10 items-center justify-center rounded-sm bg-neutral-100 p-4">
                      Manual
                    </span>
                  </div>
                  <hr className="my-4" />
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold">Capacity</span>
                    <Icons.chevronUp className="h-4 w-4 text-neutral-600" />
                  </div>
                  <p className="mt-3 text-sm font-medium">Seats</p>
                  <div className="mt-1.5 grid grid-cols-4 gap-1 text-xs">
                    <span className="flex h-10 items-center justify-center rounded-sm bg-neutral-100 p-4">
                      2
                    </span>
                    <span className="flex h-10 items-center justify-center rounded-sm bg-neutral-100 p-4">
                      3
                    </span>
                    <span className="flex h-10 items-center justify-center rounded-sm bg-neutral-100 p-4">
                      4
                    </span>
                    <span className="flex h-10 items-center justify-center rounded-sm bg-neutral-100 p-4">
                      5
                    </span>
                    <span className="flex h-10 items-center justify-center rounded-sm bg-neutral-100 p-4">
                      6
                    </span>
                    <span className="flex h-10 items-center justify-center rounded-sm bg-neutral-100 p-4">
                      7
                    </span>
                  </div>
                  <p className="mt-5 text-sm font-medium">Bags</p>
                  <div className="mt-1.5 grid grid-cols-4 gap-1 text-xs">
                    <span className="flex h-10 items-center justify-center rounded-sm bg-neutral-100 p-4">
                      1
                    </span>
                    <span className="flex h-10 items-center justify-center rounded-sm bg-neutral-100 p-4">
                      2
                    </span>
                    <span className="flex h-10 items-center justify-center rounded-sm bg-neutral-100 p-4">
                      3
                    </span>
                    <span className="flex h-10 items-center justify-center rounded-sm bg-neutral-100 p-4">
                      4
                    </span>
                    <span className="flex h-10 items-center justify-center rounded-sm bg-neutral-100 p-4">
                      5+
                    </span>
                  </div>
                  <hr className="my-4" />
                </div>
              </div>
            </div>
            <div className="flex w-full">
              <main className="flex basis-full flex-col gap-4 overflow-y-auto py-5 md:px-4 xl:basis-2/3">
                <div className="mb-2 flex items-center justify-between text-[13px]">
                  <div>
                    <span className="mr-2">Sort by</span>
                    <select name="" id="" className="rounded-md px-3 py-2">
                      <option value="">Lowest Price</option>
                    </select>
                  </div>
                  <button className="hidden items-center rounded-md border p-2 xl:flex">
                    <Icons.mapTrifold className="h-5 w-5" />
                    <span className="ml-2 text-[13px]">Hide map</span>
                  </button>
                </div>
                {/* card */}
                <div className="grid w-full grid-cols-[11rem_1fr] rounded-xl border sm:grid-cols-[11rem_1.5fr_1fr]">
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
                          <span className="text-[13px] text-neutral-600">
                            2 bags
                          </span>
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
                        <span className="text-lg font-bold leading-none">
                          $138
                        </span>
                        <span className="text-[13px] font-normal leading-none">
                          day
                        </span>
                      </p>
                      <button className="w-full rounded-md bg-black py-2.5 text-sm text-white">
                        View deal
                      </button>
                    </div>
                  </div>
                </div>
              </main>
              {/* map */}
              <div className="hidden h-full bg-neutral-50 xl:block xl:basis-1/3"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
