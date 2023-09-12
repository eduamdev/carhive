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
        <div className="mx-auto w-full max-w-none px-5 sm:max-w-[90%] sm:px-0 2xl:max-w-8xl">
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
        <div className="mx-auto w-full max-w-none px-5 sm:max-w-[90%] sm:px-0 2xl:max-w-8xl">
          <h2 className="mt-8 text-2xl font-extrabold">
            Trending Rent a Car Destinations
          </h2>
          <div className="mt-8 grid grid-cols-1 items-center justify-between gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            <div>
              <div className="h-72 w-full">
                <img
                  src="https://images.unsplash.com/photo-1605701877331-645ad05dcb97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHBhcmlzfGVufDB8MHwwfHx8Mg%3D%3D&auto=format&fit=crop&w=600&q=60"
                  alt="Paris, France"
                  className="h-full w-full rounded-2xl border bg-neutral-50 object-cover object-center"
                ></img>
              </div>
              <div className="mt-3">
                <h3 className="text-[15px] font-semibold">Paris, France</h3>
                <p className="mt-1 text-sm text-neutral-600">Cars from $12+</p>
              </div>
            </div>
            <div>
              <div className="h-72 w-full">
                <img
                  src="https://images.unsplash.com/photo-1523816572-a1a23d1a67b8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80"
                  alt="Dubai, United Arab Emirates"
                  className="h-full w-full rounded-2xl border bg-neutral-50 object-cover object-center"
                />
              </div>
              <div className="mt-3">
                <h3 className="text-[15px] font-semibold">
                  Dubai, United Arab Emirates
                </h3>
                <p className="mt-1 text-sm text-neutral-600">Cars from $12+</p>
              </div>
            </div>
            <div>
              <div className="h-72 w-full">
                <img
                  src="https://images.unsplash.com/photo-1616423841125-8307665a0469?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
                  alt="Cancún, México"
                  className="h-full w-full rounded-2xl border bg-neutral-50 object-cover object-center"
                />
              </div>
              <div className="mt-3">
                <h3 className="text-[15px] font-semibold">Cancún, México</h3>
                <p className="mt-1 text-sm text-neutral-600">Cars from $12+</p>
              </div>
            </div>
            <div>
              <div className="h-72 w-full">
                <img
                  src="https://images.unsplash.com/photo-1531572753322-ad063cecc140?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cm9tZXxlbnwwfDB8MHx8fDI%3D&auto=format&fit=crop&w=600&q=60"
                  alt="Rome, Italy"
                  className="h-full w-full rounded-2xl border bg-neutral-50 object-cover object-center"
                />
              </div>
              <div className="mt-3">
                <h3 className="text-[15px] font-semibold">Rome, Italy</h3>
                <p className="mt-1 text-sm text-neutral-600">Cars from $12+</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="border-t bg-neutral-50">
        <div className="mx-auto max-w-[90%] px-5 py-16 sm:px-0 lg:max-w-4xl">
          <h2 className="text-center text-2xl font-bold">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta.
          </h2>
          <div className="mt-12 grid grid-cols-1 items-center justify-center gap-8 md:grid-cols-3">
            <div className="flex flex-col items-center justify-center text-center md:items-start md:text-left">
              <div className="flex h-12 w-12 items-center justify-center rounded-full border bg-white">
                <Icons.receipt className="h-6 w-6 text-neutral-500" />
              </div>
              <p className="mt-6 font-semibold">Lorem, ipsum dolor.</p>
              <p className="mt-2 max-w-sm text-sm leading-6 text-neutral-600">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
                odit quos vel excepturi iusto.
              </p>
            </div>
            <div className="flex flex-col items-center justify-center text-center md:items-start md:text-left">
              <div className="flex h-12 w-12 items-center justify-center rounded-full border bg-white">
                <Icons.shield className="h-6 w-6 text-neutral-500" />
              </div>
              <p className="mt-6 font-semibold">Lorem, ipsum dolor.</p>
              <p className="mt-2 max-w-sm text-sm leading-6 text-neutral-600">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
                odit quos vel excepturi iusto.
              </p>
            </div>
            <div className="flex flex-col items-center justify-center text-center md:items-start md:text-left">
              <div className="flex h-12 w-12 items-center justify-center rounded-full border bg-white">
                <Icons.navigate className="h-6 w-6 text-neutral-500" />
              </div>
              <p className="mt-6 font-semibold">Lorem, ipsum dolor.</p>
              <p className="mt-2 max-w-sm text-sm leading-6 text-neutral-600">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
                odit quos vel excepturi iusto.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="border-t">
        <div className="mx-auto max-w-[90%] px-5 py-12 sm:px-0 xl:max-w-8xl">
          <h2 className="text-center text-2xl font-extrabold">
            Lorem ipsum dolor sit amet.
          </h2>
          <div className="mt-4 columns-1 sm:columns-2 lg:columns-4">
            <div className="-mx-4">
              <div className="inline-block px-4 pt-4">
                <figure className="rounded-2xl bg-neutral-50 p-8">
                  <blockquote className="text-sm leading-6 text-neutral-700">
                    “Anim sit consequat culpa commodo eu do nisi commodo ut aute
                    aliqua. Laborum esse duis tempor consectetur officia mollit
                    fugiat. Exercitation qui elit minim minim quis fugiat ex.”
                  </blockquote>
                  <figcaption className="mt-6 flex items-center justify-start gap-5">
                    <span className="h-10 w-10 rounded-full border bg-white"></span>
                    <div>
                      <p className="text-[15px] font-semibold">
                        Michael Foster
                      </p>
                      <p className="mt-1 text-sm text-neutral-600">
                        @michaelfoster
                      </p>
                    </div>
                  </figcaption>
                </figure>
              </div>
              <div className="inline-block px-4 pt-4">
                <figure className="rounded-2xl bg-neutral-50 p-8">
                  <blockquote className="text-sm leading-6 text-neutral-700">
                    “Laborum quis quam. Dolorum et ut quod quia. Voluptas
                    numquam delectus nihil. Aut enim doloremque et ipsam.”
                  </blockquote>
                  <figcaption className="mt-6 flex items-center justify-start gap-5">
                    <span className="h-10 w-10 rounded-full border bg-white"></span>
                    <div>
                      <p className="text-[15px] font-semibold">
                        Leslie Alexander
                      </p>
                      <p className="mt-1 text-sm text-neutral-600">
                        @lesliealexander
                      </p>
                    </div>
                  </figcaption>
                </figure>
              </div>
              <div className="inline-block px-4 pt-4">
                <figure className="rounded-2xl bg-neutral-50 p-8">
                  <blockquote className="text-sm leading-6 text-neutral-700">
                    “Voluptas quos itaque ipsam in voluptatem est. Iste eos
                    blanditiis repudiandae. Earum deserunt enim molestiae ipsum
                    perferendis.”
                  </blockquote>
                  <figcaption className="mt-6 flex items-center justify-start gap-5">
                    <span className="h-10 w-10 rounded-full border bg-white"></span>
                    <div>
                      <p className="text-[15px] font-semibold">
                        Whitney Francis
                      </p>
                      <p className="mt-1 text-sm text-neutral-600">
                        @whitneyfrancis
                      </p>
                    </div>
                  </figcaption>
                </figure>
              </div>
              <div className="inline-block px-4 pt-4">
                <figure className="rounded-2xl bg-neutral-50 p-8">
                  <blockquote className="text-sm leading-6 text-neutral-700">
                    “Excepteur consectetur deserunt id incididunt veniam mollit
                    officia sint qui aute duis sit cillum. Reprehenderit fugiat
                    amet aliqua in commodo minim sunt laborum.”
                  </blockquote>
                  <figcaption className="mt-6 flex items-center justify-start gap-5">
                    <span className="h-10 w-10 rounded-full border bg-white"></span>
                    <div>
                      <p className="text-[15px] font-semibold">
                        Lindsay Walton
                      </p>
                      <p className="mt-1 text-sm text-neutral-600">
                        @lindsaywalton
                      </p>
                    </div>
                  </figcaption>
                </figure>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="border-t bg-neutral-50">
        <div className="mx-auto max-w-[90%] px-5 py-16 sm:px-0 xl:max-w-8xl">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <h2 className="text-2xl font-extrabold">
              <p>Lorem ipsum dolor sit.</p>
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </h2>
            <div>
              <button className="rounded-md bg-black px-3 py-2 text-white">
                Get started
              </button>
              <button className="ml-4 rounded-md px-3 py-2">Learn more</button>
            </div>
          </div>
        </div>
      </section>
      <section className="border-t">
        <div className="mx-auto max-w-[90%] px-5 py-16 sm:px-0 md:max-w-4xl">
          <h2 className="text-center text-2xl font-extrabold">FAQS</h2>
        </div>
      </section>
    </main>
  );
}
