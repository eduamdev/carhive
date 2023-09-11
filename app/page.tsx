import Image from 'next/image';
import { Icons } from '@/components/icons';
import { BrandLogoSlider } from '@/components/brand-logo-slider';

export default function Page() {
  return (
    <main>
      <section className="bg-gradient-to-b from-white to-neutral-50 pt-12">
        <h1 className="text-center text-3xl font-extrabold">Find your ride</h1>
        <div className="mx-auto mt-10 grid max-w-4xl grid-cols-1 items-center justify-center gap-4 md:flex md:flex-row md:gap-8">
          <div className="flex items-center justify-center gap-2">
            <Icons.checkCircle className="h-5 w-5 text-green-600" />
            <span className="text-[13px] text-neutral-900">
              Free cancellation on most bookings.
            </span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <Icons.checkCircle className="h-5 w-5 text-green-600" />
            <span className="text-[13px] text-neutral-900">
              No hidden fees.
            </span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <Icons.checkCircle className="h-5 w-5 text-green-600" />
            <span className="text-[13px] text-neutral-900">
              Lorem ipsum dolor sit amet.
            </span>
          </div>
        </div>
        <div className="mx-auto mt-5 hidden h-16 w-[90%] max-w-4xl items-center justify-between gap-x-4 rounded-full border border-black/10 bg-white px-2 py-2 text-black md:flex">
          <div className="flex flex-col items-start justify-center gap-1 px-4">
            <span className="text-sm font-semibold">Pick-up</span>
            <span className="text-sm text-neutral-500">Add location</span>
          </div>
          <span className="text-neutral-200">|</span>
          <div className="flex flex-col items-start justify-center gap-1 px-4">
            <span className="text-sm font-semibold">Drop-off</span>
            <span className="text-sm text-neutral-500">Add location</span>
          </div>
          <span className="text-neutral-200">|</span>
          <div className="flex flex-col items-start justify-center gap-1 px-4">
            <span className="text-sm font-semibold">Check in</span>
            <span className="text-sm text-neutral-500">Add dates</span>
          </div>
          <span className="text-neutral-200">|</span>
          <div className="flex flex-col items-start justify-center gap-1 px-4">
            <span className="text-sm font-semibold">Check out</span>
            <span className="text-sm text-neutral-500">Add dates</span>
          </div>
          <div className="flex items-center justify-center rounded-full bg-black p-3 text-white">
            <Icons.search className="h-4 w-4" />
          </div>
        </div>

        <BrandLogoSlider />
      </section>
      <section className="border-t py-10">
        <div className="xl:max-w-8xl mx-auto w-full max-w-none px-5 sm:max-w-[90%] sm:px-0">
          <h2 className="text-2xl font-extrabold">
            Popular Rental Car Choices
          </h2>
          <div className="mt-8 inline-flex items-center justify-between gap-4 overflow-hidden whitespace-nowrap">
            <div className="h-40 w-[262px] transition-all hover:grayscale">
              <Image
                width={262}
                height={160}
                priority
                src="/suv.jpg"
                alt="suv"
                className="h-full w-full rounded-2xl border bg-neutral-50 object-cover object-center"
              />
            </div>
            <div className="h-40 w-[262px] transition-all hover:grayscale">
              <Image
                width={262}
                height={160}
                priority
                src="/minivan.jpg"
                alt="minivan"
                className="h-full w-full rounded-2xl border bg-neutral-50 object-cover object-center"
              />
            </div>
            <div className="h-40 w-[262px] transition-all hover:grayscale">
              <Image
                width={262}
                height={160}
                priority
                src="/pick-up.jpg"
                alt="pick-up"
                className="h-full w-full rounded-2xl border bg-neutral-50 object-cover object-center"
              />
            </div>
            <div className="h-40 w-[262px] transition-all hover:grayscale">
              <Image
                width={262}
                height={160}
                priority
                src="/sedan.jpg"
                alt="sedan"
                className="h-full w-full rounded-2xl border bg-neutral-50 object-cover object-center"
              />
            </div>
            <div className="h-40 w-[262px] transition-all hover:grayscale">
              <Image
                width={262}
                height={160}
                priority
                src="/convertible.jpg"
                alt="convertible"
                className="h-full w-full rounded-2xl border bg-neutral-50 object-cover object-center"
              />
            </div>
            <div className="h-40 w-[262px] transition-all hover:grayscale">
              <Image
                width={262}
                height={160}
                priority
                src="/off-road.jpg"
                alt="off-road"
                className="h-full w-full rounded-2xl border bg-neutral-50 object-cover object-center"
              />
            </div>
          </div>
        </div>
        <div className="xl:max-w-8xl mx-auto w-full max-w-none px-5 sm:max-w-[90%] sm:px-0">
          <h2 className="mt-8 text-2xl font-extrabold">
            Trending Rent a Car Destinations
          </h2>
          <div className="mt-8 grid grid-cols-1 items-center justify-between gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            <div className="h-72 w-full rounded-2xl border bg-neutral-50"></div>
            <div className="h-72 w-full rounded-2xl border bg-neutral-50"></div>
            <div className="h-72 w-full rounded-2xl border bg-neutral-50"></div>
            <div className="h-72 w-full rounded-2xl border bg-neutral-50"></div>
          </div>
        </div>
      </section>
      <section className="border-t bg-neutral-50">
        <div className="mx-auto w-[90%] max-w-4xl items-center justify-between gap-x-4 py-16 text-black">
          <h2 className="text-center text-2xl font-bold">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta.
          </h2>
          <div className="mx-auto mt-12 grid max-w-5xl grid-cols-1 items-center justify-center gap-8 md:grid-cols-3">
            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-full border bg-white">
                <Icons.receipt className="h-6 w-6 text-neutral-500" />
              </div>
              <p className="mt-6 font-semibold">Lorem, ipsum dolor.</p>
              <p className="mt-2 text-sm leading-6 text-neutral-600">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
                odit quos vel excepturi iusto.
              </p>
            </div>
            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-full border bg-white">
                <Icons.shield className="h-6 w-6 text-neutral-500" />
              </div>
              <p className="mt-6 font-semibold">Lorem, ipsum dolor.</p>
              <p className="mt-2 text-sm leading-6 text-neutral-600">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
                odit quos vel excepturi iusto.
              </p>
            </div>
            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-full border bg-white">
                <Icons.navigate className="h-6 w-6 text-neutral-500" />
              </div>
              <p className="mt-6 font-semibold">Lorem, ipsum dolor.</p>
              <p className="mt-2 text-sm leading-6 text-neutral-600">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
                odit quos vel excepturi iusto.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="border-t py-16">
        <h2 className="text-center text-2xl font-extrabold">Stuff</h2>
      </section>
      <section className="bg-neutral-900 py-16">
        <h2 className="text-center text-2xl font-extrabold text-white">
          Stuff
        </h2>
      </section>
      <section className="my-16">
        <h2 className="text-center text-2xl font-extrabold">FAQS</h2>
      </section>
    </main>
  );
}
