import Image from 'next/image';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';

export function PopularCarTypes() {
  return (
    <section className="border-t pt-10">
      <div className="2xl:max-w-8xl mx-auto w-full max-w-none px-5 sm:max-w-[90%] sm:px-0">
        <h2 className="text-2xl font-extrabold">Popular Rental Car Choices</h2>
      </div>
      <div className="relative mt-8 w-full before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-[5%] before:bg-gradient-to-r before:from-white before:content-[''] after:absolute after:right-0 after:top-0 after:z-10 after:h-full after:w-[5%] after:bg-gradient-to-l after:from-white after:content-['']">
        <ScrollArea>
          <div className="mb-3 flex gap-x-3 whitespace-nowrap px-0">
            <div className="ml-[calc(100vw*.05)] inline-block h-36 w-[250px] transition-all hover:grayscale">
              <Image
                width={250}
                height={144}
                priority
                src="/suv.jpg"
                alt="suv"
                className="h-full w-full rounded-2xl border bg-gradient-to-r from-[#f9f9f9] to-[#e9e9e9] object-cover object-center"
              />
            </div>
            <div className="inline-block h-36 w-[250px] transition-all hover:grayscale">
              <Image
                width={250}
                height={144}
                priority
                src="/minivan.jpg"
                alt="minivan"
                className="h-full w-full rounded-2xl border bg-gradient-to-r from-[#f9f9f9] to-[#e9e9e9] object-cover object-center"
              />
            </div>
            <div className="inline-block h-36 w-[250px] transition-all hover:grayscale">
              <Image
                width={250}
                height={144}
                priority
                src="/pick-up.jpg"
                alt="pick-up"
                className="h-full w-full rounded-2xl border bg-gradient-to-r from-[#f9f9f9] to-[#e9e9e9] object-cover object-center"
              />
            </div>
            <div className="inline-block h-36 w-[250px] transition-all hover:grayscale">
              <Image
                width={250}
                height={144}
                priority
                src="/sedan.jpg"
                alt="sedan"
                className="h-full w-full rounded-2xl border bg-gradient-to-r from-[#f9f9f9] to-[#e9e9e9] object-cover object-center"
              />
            </div>
            <div className="inline-block h-36 w-[250px] transition-all hover:grayscale">
              <Image
                width={250}
                height={144}
                priority
                src="/convertible.jpg"
                alt="convertible"
                className="h-full w-full rounded-2xl border bg-gradient-to-r from-[#f9f9f9] to-[#e9e9e9] object-cover object-center"
              />
            </div>
            <div className="mr-[calc(100vw*.05)] inline-block h-36 w-[250px] transition-all hover:grayscale">
              <Image
                width={250}
                height={144}
                priority
                src="/off-road.jpg"
                alt="off-road"
                className="h-full w-full rounded-2xl border bg-gradient-to-r from-[#f9f9f9] to-[#e9e9e9] object-cover object-center"
              />
            </div>
            <ScrollBar orientation="horizontal" />
          </div>
        </ScrollArea>
      </div>
    </section>
  );
}
