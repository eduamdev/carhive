import Image from 'next/image';

export function PopularCarTypes() {
  return (
    <section className="border-t pt-10">
      <div className="2xl:max-w-8xl mx-auto w-full max-w-none px-5 sm:max-w-[90%] sm:px-0">
        <h2 className="text-2xl font-extrabold">Popular Rental Car Choices</h2>
        <div className="mt-8 inline-flex items-center justify-between gap-4 overflow-hidden whitespace-nowrap">
          <div className="h-40 w-[262px] transition-all hover:grayscale">
            <Image
              width={262}
              height={160}
              priority
              src="/suv.jpg"
              alt="suv"
              className="h-full w-full rounded-2xl border bg-gradient-to-r from-[#f9f9f9] to-[#e9e9e9] object-cover object-center"
            />
          </div>
          <div className="h-40 w-[262px] transition-all hover:grayscale">
            <Image
              width={262}
              height={160}
              priority
              src="/minivan.jpg"
              alt="minivan"
              className="h-full w-full rounded-2xl border bg-gradient-to-r from-[#f9f9f9] to-[#e9e9e9] object-cover object-center"
            />
          </div>
          <div className="h-40 w-[262px] transition-all hover:grayscale">
            <Image
              width={262}
              height={160}
              priority
              src="/pick-up.jpg"
              alt="pick-up"
              className="h-full w-full rounded-2xl border bg-gradient-to-r from-[#f9f9f9] to-[#e9e9e9] object-cover object-center"
            />
          </div>
          <div className="h-40 w-[262px] transition-all hover:grayscale">
            <Image
              width={262}
              height={160}
              priority
              src="/sedan.jpg"
              alt="sedan"
              className="h-full w-full rounded-2xl border bg-gradient-to-r from-[#f9f9f9] to-[#e9e9e9] object-cover object-center"
            />
          </div>
          <div className="h-40 w-[262px] transition-all hover:grayscale">
            <Image
              width={262}
              height={160}
              priority
              src="/convertible.jpg"
              alt="convertible"
              className="h-full w-full rounded-2xl border bg-gradient-to-r from-[#f9f9f9] to-[#e9e9e9] object-cover object-center"
            />
          </div>
          <div className="h-40 w-[262px] transition-all hover:grayscale">
            <Image
              width={262}
              height={160}
              priority
              src="/off-road.jpg"
              alt="off-road"
              className="h-full w-full rounded-2xl border bg-gradient-to-r from-[#f9f9f9] to-[#e9e9e9] object-cover object-center"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
