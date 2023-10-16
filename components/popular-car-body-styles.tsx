import Link from 'next/link';
import Image from 'next/image';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import { convertToKebabCase } from '@/lib/utils';
import { EBodyStyles } from '@/types/car';
import { ESearchParams } from '@/types/filters';

export function PopularCarBodyStyles() {
  return (
    <section className="border-t pt-10">
      <div className="mx-auto w-full max-w-none px-5 sm:max-w-[90%] sm:px-0 2xl:max-w-8xl">
        <h2 className="text-2xl font-bold">Popular Rental Car Choices</h2>
        <div className="relative mt-8 before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-[5%] before:bg-gradient-to-r before:from-white before:content-[''] after:absolute after:right-0 after:top-0 after:z-10 after:h-full after:w-[5%] after:bg-gradient-to-l after:from-white after:content-['']">
          <ScrollArea>
            <div className="mb-3 whitespace-nowrap">
              <div className="relative mr-1.5 inline-block h-36 w-[250px]">
                <Link
                  href={{
                    pathname: '/cars',
                    query: {
                      [ESearchParams.BODY_STYLE]: convertToKebabCase(
                        EBodyStyles.HATCHBACK,
                      ),
                    },
                  }}
                  className="absolute inset-0 z-20 rounded-2xl border"
                />
                <div className="absolute left-3.5 top-3 z-10 flex items-center justify-center leading-none">
                  <span className="rounded-md border bg-white px-2.5 py-1.5 text-[15px] font-semibold text-neutral-800">
                    {EBodyStyles.HATCHBACK}
                  </span>
                </div>
                <Image
                  width={250}
                  height={144}
                  priority
                  src="/cars/body-styles/hatchback.avif"
                  alt="hatchback"
                  className="h-full w-full rounded-2xl bg-gradient-to-r from-[#f9f9f9] to-[#e9e9e9] object-cover object-center"
                />
              </div>
              <div className="relative mx-1.5 inline-block h-36 w-[250px]">
                <Link
                  href={{
                    pathname: '/cars',
                    query: {
                      [ESearchParams.BODY_STYLE]: convertToKebabCase(
                        EBodyStyles.MINIVAN,
                      ),
                    },
                  }}
                  className="absolute inset-0 z-20 rounded-2xl border"
                />
                <div className="absolute left-3.5 top-3 z-10 flex items-center justify-center leading-none">
                  <span className="rounded-md border bg-white px-2.5 py-1.5 text-[15px] font-semibold text-neutral-800">
                    {EBodyStyles.MINIVAN}
                  </span>
                </div>
                <Image
                  width={250}
                  height={144}
                  priority
                  src="/cars/body-styles/minivan.avif"
                  alt="minivan"
                  className="h-full w-full rounded-2xl bg-gradient-to-r from-[#f9f9f9] to-[#e9e9e9] object-cover object-center"
                />
              </div>
              <div className="relative mx-1.5 inline-block h-36 w-[250px]">
                <Link
                  href={{
                    pathname: '/cars',
                    query: {
                      [ESearchParams.BODY_STYLE]: convertToKebabCase(
                        EBodyStyles.PICKUP_TRUCK,
                      ),
                    },
                  }}
                  className="absolute inset-0 z-20 rounded-2xl border"
                />
                <div className="absolute left-3.5 top-3 z-10 flex items-center justify-center leading-none">
                  <span className="rounded-md border bg-white px-2.5 py-1.5 text-[15px] font-semibold text-neutral-800">
                    {EBodyStyles.PICKUP_TRUCK}
                  </span>
                </div>
                <Image
                  width={250}
                  height={144}
                  priority
                  src="/cars/body-styles/pickup-truck.avif"
                  alt="pickup truck"
                  className="h-full w-full rounded-2xl bg-gradient-to-r from-[#f9f9f9] to-[#e9e9e9] object-cover object-center"
                />
              </div>
              <div className="relative mx-1.5 inline-block h-36 w-[250px]">
                <Link
                  href={{
                    pathname: '/cars',
                    query: {
                      [ESearchParams.BODY_STYLE]: convertToKebabCase(
                        EBodyStyles.SPORTS_CAR,
                      ),
                    },
                  }}
                  className="absolute inset-0 z-20 rounded-2xl border"
                />
                <div className="absolute left-3.5 top-3 z-10 flex items-center justify-center leading-none">
                  <span className="rounded-md border bg-white px-2.5 py-1.5 text-[15px] font-semibold text-neutral-800">
                    {EBodyStyles.SPORTS_CAR}
                  </span>
                </div>
                <Image
                  width={250}
                  height={144}
                  priority
                  src="/cars/body-styles/sports-car.avif"
                  alt="sports car"
                  className="h-full w-full rounded-2xl bg-gradient-to-r from-[#f9f9f9] to-[#e9e9e9] object-cover object-center"
                />
              </div>
              <div className="relative ml-1.5 inline-block h-36 w-[250px]">
                <Link
                  href={{
                    pathname: '/cars',
                    query: {
                      [ESearchParams.BODY_STYLE]: convertToKebabCase(
                        EBodyStyles.SUV,
                      ),
                    },
                  }}
                  className="absolute inset-0 z-20 rounded-2xl border"
                />
                <div className="absolute left-3.5 top-3 z-10 flex items-center justify-center leading-none">
                  <span className="rounded-md border bg-white px-2.5 py-1.5 text-[15px] font-semibold text-neutral-800">
                    {EBodyStyles.SUV}
                  </span>
                </div>
                <Image
                  width={250}
                  height={144}
                  priority
                  src="/cars/body-styles/suv.avif"
                  alt="suv"
                  className="h-full w-full rounded-2xl bg-gradient-to-r from-[#f9f9f9] to-[#e9e9e9] object-cover object-center"
                />
              </div>
              <div className="relative mx-1.5 inline-block h-36 w-[250px]">
                <Link
                  href={{
                    pathname: '/cars',
                    query: {
                      [ESearchParams.BODY_STYLE]: convertToKebabCase(
                        EBodyStyles.SEDAN,
                      ),
                    },
                  }}
                  className="absolute inset-0 z-20 rounded-2xl border"
                />
                <div className="absolute left-3.5 top-3 z-10 flex items-center justify-center leading-none">
                  <span className="rounded-md border bg-white px-2.5 py-1.5 text-[15px] font-semibold text-neutral-800">
                    {EBodyStyles.SEDAN}
                  </span>
                </div>
                <Image
                  width={250}
                  height={144}
                  priority
                  src="/cars/body-styles/sedan.avif"
                  alt="sedan"
                  className="h-full w-full rounded-2xl bg-gradient-to-r from-[#f9f9f9] to-[#e9e9e9] object-cover object-center"
                />
              </div>
              <ScrollBar orientation="horizontal" />
            </div>
          </ScrollArea>
        </div>
      </div>
    </section>
  );
}
