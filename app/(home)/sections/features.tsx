import { ClickIcon } from '@/app/components/icons/click';
import { FilterIcon } from '@/app/components/icons/filter';
import { MapIcon } from '@/app/components/icons/map';
import { ShieldCheckIcon } from '@/app/components/icons/shield-check';

export function Features() {
  return (
    <section className="border-y border-neutral-900/5 bg-neutral-50">
      <div className="py-12 md:py-16">
        <div className="mx-auto max-w-none px-5 sm:max-w-[90%] sm:px-0 lg:max-w-5xl">
          <h2 className="text-balance text-lg font-bold md:text-center md:text-xl lg:text-[22px]">
            Discover What Sets Us Apart
          </h2>
          <div className="pt-5 md:pt-8">
            <div className="flex flex-col items-start justify-center gap-8 sm:grid sm:grid-cols-2 md:grid-cols-4">
              <div className="flex flex-col items-start justify-center text-left">
                <div className="flex size-8 items-center justify-center rounded-full bg-white md:size-10">
                  <ClickIcon className="size-4 shrink-0 text-blue-700 md:size-5" />
                </div>
                <div className="pt-2.5 md:pt-[18px]">
                  <p className="text-balance text-[15px] font-semibold md:text-base">
                    Hassle-Free Booking
                  </p>
                </div>
                <div className="pt-0.5 sm:pt-1.5">
                  <p className="text-balance text-[13px] leading-6 text-neutral-600 sm:text-sm sm:leading-6 lg:text-[15px] lg:leading-[1.6rem]">
                    Book your perfect car in just a few clicks. Enjoy seamless
                    reservations and fantastic deals.
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-start justify-center text-left">
                <div className="flex size-8 items-center justify-center rounded-full bg-white md:size-10">
                  <ShieldCheckIcon className="size-4 shrink-0 text-blue-700 md:size-5" />
                </div>
                <div className="pt-2.5 md:pt-[18px]">
                  <p className="text-balance text-[15px] font-semibold md:text-base">
                    Secure & Reliable Rentals
                  </p>
                </div>
                <div className="pt-0.5 sm:pt-1.5">
                  <p className="text-balance text-[13px] leading-6 text-neutral-600 sm:text-sm sm:leading-6 lg:text-[15px] lg:leading-[1.6rem]">
                    Drive with confidence. Our vehicles are thoroughly inspected
                    and fully insured for your peace of mind.
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-start justify-center text-left ">
                <div className="flex size-8 items-center justify-center rounded-full bg-white md:size-10">
                  <MapIcon className="size-4 shrink-0 text-blue-700 [stroke-width:1.8] md:size-5" />
                </div>
                <div className="pt-2.5 md:pt-[18px]">
                  <p className="text-balance text-[15px] font-semibold md:text-base">
                    Simple Navigation
                  </p>
                </div>
                <div className="pt-0.5 sm:pt-1.5">
                  <p className="text-balance text-[13px] leading-6 text-neutral-600 sm:text-sm sm:leading-6 lg:text-[15px] lg:leading-[1.6rem]">
                    Navigate with ease. Our user-friendly tools make every
                    journey smooth and enjoyable.
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-start justify-center text-left ">
                <div className="flex size-8 items-center justify-center rounded-full bg-white md:size-10">
                  <FilterIcon className="size-4 shrink-0 text-blue-700 [stroke-width:1.8] md:size-5" />
                </div>
                <div className="pt-2.5 md:pt-[18px]">
                  <p className="text-balance text-[15px] font-semibold md:text-base">
                    Customizable Search Filters
                  </p>
                </div>
                <div className="pt-0.5 sm:pt-1.5">
                  <p className="text-balance text-[13px] leading-6 text-neutral-600 sm:text-sm sm:leading-6 lg:text-[15px] lg:leading-[1.6rem]">
                    Find exactly what you need. Apply filters to tailor your
                    search, ensuring you get the best match for your
                    preferences.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
