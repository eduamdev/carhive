import { Icons } from '@/components/icons';

export default function CarPage() {
  return (
    <div className="py-6">
      <div className="mx-auto w-full max-w-none px-5 sm:max-w-[90%] sm:px-0 xl:max-w-6xl">
        <div className="grid w-full grid-cols-1 gap-24 md:grid-cols-[2fr_1fr]">
          <div className="p-6 px-0 pb-0 md:pb-0 md:pr-6">
            <div className="grid grid-cols-[1fr_auto] justify-between">
              <div className="flex flex-col">
                <h1 className="text-xl font-extrabold">Premium SUV</h1>
                <div className="mt-2 flex items-center gap-1.5 text-[13px] text-neutral-800 md:text-base">
                  <span>4 seats</span>
                  <span>·</span>
                  <span>2 bags</span>
                  <span>·</span>
                  <span>Automatic</span>
                  <span>·</span>
                  <span>Unlimited mileage</span>
                </div>
              </div>
              <div className="flex flex-col justify-self-end">
                <div className="w-20 md:w-24">
                  <img
                    src="https://mediaim.expedia.com/cars/42/24e24b9a-0dc5-4630-8893-41decc62b2b9.jpg?impolicy=resizecrop&ra=fit&rh=165&rw=165"
                    alt=""
                    className="h-auto w-full object-cover object-center"
                  />
                </div>
              </div>
            </div>
            <hr className="my-6" />
            <div className="flex flex-col gap-6">
              <div className="flex flex-row gap-8">
                <Icons.navigate className="h-6 w-6 shrink-0" />
                <div className="flex flex-col">
                  <p className="font-medium">GPS</p>
                  <p className="mt-0.5 text-[13px] leading-5 text-neutral-500">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Exercitationem, distinctio.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-8">
                <Icons.door className="h-6 w-6 shrink-0" />
                <div className="flex flex-col">
                  <p className="font-medium">Self check-in</p>
                  <p className="mt-0.5 text-[13px] leading-5 text-neutral-500">
                    You can check in with the building staff.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-8">
                <Icons.calendar className="h-6 w-6 shrink-0" />
                <div className="flex flex-col">
                  <p className="font-medium">Free cancellation before Oct 4.</p>
                </div>
              </div>
            </div>
            <hr className="my-6" />
            <p className="mt-10 text-neutral-600">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Consequatur libero iste nihil, minus laboriosam at numquam quis
              odit repellat? Dignissimos, harum.
            </p>
            <p className="mt-6 text-neutral-600">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo
              provident ducimus sint explicabo magnam maiores quam rerum.
              Obcaecati.
            </p>
            <hr className="my-12" />
            <h2 className="text-lg font-bold">Stuff</h2>
            <div className="mt-6 grid grid-cols-2 gap-4">
              <div className="flex flex-row gap-4">
                <Icons.checkCircle className="h-5 w-5 shrink-0" />
                <p className="text-neutral-600">Some cool stuff</p>
              </div>
              <div className="flex flex-row gap-4">
                <Icons.checkCircle className="h-5 w-5 shrink-0" />
                <p className="text-neutral-600">Some cool stuff</p>
              </div>
              <div className="flex flex-row gap-4">
                <Icons.checkCircle className="h-5 w-5 shrink-0" />
                <p className="text-neutral-600">Some cool stuff</p>
              </div>
              <div className="flex flex-row gap-4">
                <Icons.checkCircle className="h-5 w-5 shrink-0" />
                <p className="text-neutral-600">Some cool stuff</p>
              </div>
              <div className="flex flex-row gap-4">
                <Icons.checkCircle className="h-5 w-5 shrink-0" />
                <p className="text-neutral-600">Some cool stuff</p>
              </div>
              <div className="flex flex-row gap-4">
                <Icons.checkCircle className="h-5 w-5 shrink-0" />
                <p className="text-neutral-600">Some cool stuff</p>
              </div>
            </div>
            <hr className="my-12" />
          </div>
          <div className="hidden md:block">
            <div className="rounded-xl border p-6 shadow-[0_6px_16px_rgba(0,0,0,0.12)] ">
              <div className="grid grid-cols-1 items-baseline gap-4 lg:grid-cols-2">
                <div className="flex items-baseline gap-1">
                  <span className="text-2xl font-semibold leading-none">
                    $138
                  </span>
                  <span className="text-sm font-normal leading-none text-neutral-600">
                    day
                  </span>
                </div>
                <div className="flex flex-row items-baseline justify-start gap-1 lg:justify-end">
                  <Icons.star className="h-[13px] w-[13px]" />
                  <span className="text-sm font-medium leading-none">4.1</span>
                  <span>·</span>
                  <span className="text-sm leading-none text-neutral-600">
                    20 reviews
                  </span>
                </div>
              </div>
              <div className="mt-6 w-full rounded-xl border border-neutral-300">
                <div className="flex flex-col border-b border-neutral-300">
                  <div className="flex flex-col gap-1.5 p-2.5">
                    <div className="text-xs font-medium leading-none">
                      Pick-up
                    </div>
                    <div className="text-sm leading-none text-neutral-600">
                      New York
                    </div>
                  </div>
                </div>
                <div className="flex flex-col border-b border-neutral-300">
                  <div className="flex flex-col gap-1.5 p-2.5">
                    <div className="text-xs font-medium leading-none">
                      Drop-off
                    </div>
                    <div className="text-sm leading-none text-neutral-600">
                      New York
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-2">
                  <div>
                    <div className="flex flex-col gap-1.5 p-2.5">
                      <div className="text-xs font-medium leading-none">
                        Check-in
                      </div>
                      <div className="text-sm leading-none text-neutral-600">
                        2/12/2024
                      </div>
                    </div>
                  </div>
                  <div className="border-l border-neutral-300">
                    <div className="flex flex-col gap-1.5 p-2.5">
                      <div className="text-xs font-medium leading-none">
                        Checkout
                      </div>
                      <div className="text-sm leading-none text-neutral-600">
                        10/12/2024
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <button className="mt-4 w-full rounded-md bg-black py-2 text-white">
                Reserve
              </button>
              <p className="mt-4 text-center text-sm text-neutral-600">
                You won't be charged yet
              </p>
              <div className="mt-5">
                <div className="flex items-center justify-between">
                  <div className="text-neutral-600 underline">
                    $138 x 5 days
                  </div>
                  <div className="text-neutral-600">$690</div>
                </div>
                <div className="mt-3 flex items-center justify-between">
                  <div className="text-neutral-600 underline">
                    Taxes and fees
                  </div>
                  <div className="text-neutral-600">$110.4</div>
                </div>
                <hr className="my-2" />
                <div className="mt-4 flex items-center justify-between">
                  <div className="font-semibold">Total before taxes</div>
                  <div className="text-neutral-600">$800.4</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full">
          <h2 className="text-lg font-bold">Things to know</h2>
          <div className="my-6 grid grid-cols-3">
            <div>Some things to know</div>
            <div>Some things to know</div>
            <div>Some things to know</div>
          </div>
        </div>
      </div>
    </div>
  );
}
