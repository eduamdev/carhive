import Link from 'next/link';
import Image from 'next/image';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import { convertPascalCaseToWords, getEnumKeyByEnumValue } from '@/lib/utils';
import { ECarType } from '@/types/car-specs';

export function PopularCarTypes() {
  return (
    <section className="border-t pt-10">
      <div className="mx-auto w-full max-w-none px-5 sm:max-w-[90%] sm:px-0 2xl:max-w-8xl">
        <h2 className="text-2xl font-extrabold">Popular Rental Car Choices</h2>
        <div className="relative mt-8 before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-[5%] before:bg-gradient-to-r before:from-white before:content-[''] after:absolute after:right-0 after:top-0 after:z-10 after:h-full after:w-[5%] after:bg-gradient-to-l after:from-white after:content-['']">
          <ScrollArea>
            <div className="mb-3 whitespace-nowrap">
              <div className="relative mr-1.5 inline-block h-36 w-[250px]">
                <Link
                  href={{
                    pathname: '/cars',
                    query: { 'car-type': ECarType.Hatchback },
                  }}
                  className="absolute inset-0 z-20 rounded-2xl border"
                />
                <div className="absolute left-3.5 top-3 z-10 flex items-center justify-center leading-none">
                  <span className="rounded-md border bg-white px-2.5 py-1.5 text-[15px] font-semibold text-neutral-800">
                    {getEnumKeyByEnumValue(ECarType, ECarType.Hatchback)}
                  </span>
                </div>
                <Image
                  width={250}
                  height={144}
                  priority
                  src="/car-types/hatchback.avif"
                  alt="hatchback"
                  className="h-full w-full rounded-2xl bg-gradient-to-r from-[#f9f9f9] to-[#e9e9e9] object-cover object-center"
                />
              </div>
              <div className="relative mx-1.5 inline-block h-36 w-[250px]">
                <Link
                  href={{
                    pathname: '/cars',
                    query: { 'car-type': ECarType.Minivan },
                  }}
                  className="absolute inset-0 z-20 rounded-2xl border"
                />
                <div className="absolute left-3.5 top-3 z-10 flex items-center justify-center leading-none">
                  <span className="rounded-md border bg-white px-2.5 py-1.5 text-[15px] font-semibold text-neutral-800">
                    {getEnumKeyByEnumValue(ECarType, ECarType.Minivan)}
                  </span>
                </div>
                <Image
                  width={250}
                  height={144}
                  priority
                  src="/car-types/minivan.avif"
                  alt="minivan"
                  className="h-full w-full rounded-2xl bg-gradient-to-r from-[#f9f9f9] to-[#e9e9e9] object-cover object-center"
                />
              </div>
              <div className="relative mx-1.5 inline-block h-36 w-[250px]">
                <Link
                  href={{
                    pathname: '/cars',
                    query: { 'car-type': ECarType.PickupTruck },
                  }}
                  className="absolute inset-0 z-20 rounded-2xl border"
                />
                <div className="absolute left-3.5 top-3 z-10 flex items-center justify-center leading-none">
                  <span className="rounded-md border bg-white px-2.5 py-1.5 text-[15px] font-semibold text-neutral-800">
                    {convertPascalCaseToWords(
                      getEnumKeyByEnumValue(ECarType, ECarType.PickupTruck),
                    )}
                  </span>
                </div>
                <Image
                  width={250}
                  height={144}
                  priority
                  src="/car-types/pickup-truck.avif"
                  alt="pickup truck"
                  className="h-full w-full rounded-2xl bg-gradient-to-r from-[#f9f9f9] to-[#e9e9e9] object-cover object-center"
                />
              </div>
              <div className="relative mx-1.5 inline-block h-36 w-[250px]">
                <Link
                  href={{
                    pathname: '/cars',
                    query: { 'car-type': ECarType.SportsCar },
                  }}
                  className="absolute inset-0 z-20 rounded-2xl border"
                />
                <div className="absolute left-3.5 top-3 z-10 flex items-center justify-center leading-none">
                  <span className="rounded-md border bg-white px-2.5 py-1.5 text-[15px] font-semibold text-neutral-800">
                    {convertPascalCaseToWords(
                      getEnumKeyByEnumValue(ECarType, ECarType.SportsCar),
                    )}
                  </span>
                </div>
                <Image
                  width={250}
                  height={144}
                  priority
                  src="/car-types/sports-car.avif"
                  alt="sports car"
                  className="h-full w-full rounded-2xl bg-gradient-to-r from-[#f9f9f9] to-[#e9e9e9] object-cover object-center"
                />
              </div>
              <div className="relative ml-1.5 inline-block h-36 w-[250px]">
                <Link
                  href={{
                    pathname: '/cars',
                    query: { 'car-type': ECarType.SUV },
                  }}
                  className="absolute inset-0 z-20 rounded-2xl border"
                />
                <div className="absolute left-3.5 top-3 z-10 flex items-center justify-center leading-none">
                  <span className="rounded-md border bg-white px-2.5 py-1.5 text-[15px] font-semibold text-neutral-800">
                    {getEnumKeyByEnumValue(ECarType, ECarType.SUV)}
                  </span>
                </div>
                <Image
                  width={250}
                  height={144}
                  priority
                  src="/car-types/suv.avif"
                  alt="suv"
                  className="h-full w-full rounded-2xl bg-gradient-to-r from-[#f9f9f9] to-[#e9e9e9] object-cover object-center"
                />
              </div>
              <div className="relative mx-1.5 inline-block h-36 w-[250px]">
                <Link
                  href={{
                    pathname: '/cars',
                    query: { 'car-type': ECarType.Sedan },
                  }}
                  className="absolute inset-0 z-20 rounded-2xl border"
                />
                <div className="absolute left-3.5 top-3 z-10 flex items-center justify-center leading-none">
                  <span className="rounded-md border bg-white px-2.5 py-1.5 text-[15px] font-semibold text-neutral-800">
                    {getEnumKeyByEnumValue(ECarType, ECarType.Sedan)}
                  </span>
                </div>
                <Image
                  width={250}
                  height={144}
                  priority
                  src="/car-types/sedan.avif"
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
