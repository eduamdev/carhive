import { NavigationIcon } from '@/app/components/icons/navigation';
import { ShieldCheckIcon } from '@/app/components/icons/shield-check';
import { SparklesIcon } from '@/app/components/icons/sparkles';

export function Features() {
  return (
    <section className="border-y border-neutral-900/5 bg-neutral-50">
      <div className="py-12 md:py-16">
        <div className="mx-auto max-w-none px-5 sm:max-w-[90%] sm:px-0 lg:max-w-4xl">
          <h2 className="text-balance text-lg font-bold md:text-center md:text-xl lg:text-[22px]">
            Discover What Sets Us Apart
          </h2>
          <div className="pt-5 md:pt-8">
            <div className="flex flex-col items-center justify-center gap-8 sm:grid sm:grid-cols-2 md:grid-cols-3">
              <div className="flex flex-col items-start justify-center text-left">
                <div className="flex size-9 items-center justify-center rounded-full border border-blue-200 bg-white md:size-10">
                  <SparklesIcon className="size-[18px] shrink-0 text-blue-600 md:size-5" />
                </div>
                <div className="pt-3 sm:pt-4">
                  <p className="text-balance text-[15px] font-semibold md:text-base">
                    Hassle-Free Booking
                  </p>
                </div>
                <div className="pt-0.5 sm:pt-1.5">
                  <p className="text-balance text-[13px] leading-6 text-neutral-600 sm:text-sm sm:leading-6 lg:text-[15px] lg:leading-[1.6rem]">
                    Book your perfect car in just a few clicks. Enjoy easy
                    reservations and great deals.
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-start justify-center text-left">
                <div className="flex size-9 items-center justify-center rounded-full border border-blue-200 bg-white md:size-10">
                  <ShieldCheckIcon className="size-[18px] shrink-0 text-blue-600 md:size-5" />
                </div>
                <div className="pt-3 sm:pt-4">
                  <p className="text-balance text-[15px] font-semibold md:text-base">
                    Secure & Reliable Rentals
                  </p>
                </div>
                <div className="pt-0.5 sm:pt-1.5">
                  <p className="text-balance text-[13px] leading-6 text-neutral-600 sm:text-sm sm:leading-6 lg:text-[15px] lg:leading-[1.6rem]">
                    Drive with confidence. Our vehicles are rigorously inspected
                    and fully insured for your peace of mind.
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-start justify-center text-left ">
                <div className="flex size-9 items-center justify-center rounded-full border border-blue-200 bg-white md:size-10">
                  <NavigationIcon className="size-[18px] shrink-0 text-blue-600 md:size-5" />
                </div>
                <div className="pt-3 sm:pt-4">
                  <p className="text-balance text-[15px] font-semibold md:text-base">
                    Simple Navigation
                  </p>
                </div>
                <div className="pt-0.5 sm:pt-1.5">
                  <p className="text-balance text-[13px] leading-6 text-neutral-600 sm:text-sm sm:leading-6 lg:text-[15px] lg:leading-[1.6rem]">
                    Explore effortlessly with our user-friendly tools, making
                    every journey smooth and enjoyable.
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
