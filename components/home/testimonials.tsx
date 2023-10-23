import Image from 'next/image';

export function Testimonials() {
  return (
    <section className="border-t py-12">
      <div className="mx-auto max-w-none px-5 sm:max-w-[90%] sm:px-0 2xl:max-w-8xl">
        <h2 className="text-center text-2xl font-bold">Driven by Feedback</h2>
        <div className="mt-4 columns-1 sm:columns-2 lg:columns-4">
          <div className="pt-4">
            <figure className="rounded-2xl bg-neutral-50 p-8">
              <blockquote className="text-sm leading-6 text-neutral-700">
                “Best Car Rental Experience! The website&apos;s interface is
                intuitive, making it easy to find the ideal car. The reviews
                from other users were incredibly helpful, and the entire
                process, from booking to return, was a breeze. Highly
                recommended!”
              </blockquote>
              <figcaption className="mt-6 flex items-center justify-start gap-5">
                <Image
                  src="/avatars/oliviaparker.avif"
                  alt=""
                  height={40}
                  width={40}
                  className="h-10 w-10 rounded-full border bg-white"
                />
                <div>
                  <p className="text-sm font-semibold">Olivia Parker</p>
                  <p className="mt-1 text-sm text-neutral-600">@oliviaparker</p>
                </div>
              </figcaption>
            </figure>
          </div>
          <div className="pt-4">
            <figure className="rounded-2xl bg-neutral-50 p-8">
              <blockquote className="text-sm leading-6 text-neutral-700">
                “A Seamless Experience! This website made renting a car
                hassle-free. The search filters helped me find the perfect car
                for my trip, and the customer support was responsive and
                friendly. 5-star service all the way!”
              </blockquote>
              <figcaption className="mt-6 flex items-center justify-start gap-5">
                <Image
                  src="/avatars/emmathompson.avif"
                  alt=""
                  height={40}
                  width={40}
                  className="h-10 w-10 rounded-full border bg-white"
                />
                <div>
                  <p className="text-sm font-semibold">Emma Thompson</p>
                  <p className="mt-1 text-sm text-neutral-600">@emmathompson</p>
                </div>
              </figcaption>
            </figure>
          </div>
          <div className="pt-4">
            <figure className="rounded-2xl bg-neutral-50 p-8">
              <blockquote className="text-sm leading-6 text-neutral-700">
                “Reliable and Affordable! I&apos;ve used several car rental
                websites before, but this one stands out. The prices are
                transparent, no hidden fees, and the cars are well-maintained.
                I&apos;ll be coming back for all my future trips.”
              </blockquote>
              <figcaption className="mt-6 flex items-center justify-start gap-5">
                <Image
                  src="/avatars/sophiarodriguez.avif"
                  alt=""
                  height={40}
                  width={40}
                  className="h-10 w-10 rounded-full border bg-white"
                />
                <div>
                  <p className="text-sm font-semibold">Sophia Rodriguez</p>
                  <p className="mt-1 text-sm text-neutral-600">
                    @sophiarodriguez
                  </p>
                </div>
              </figcaption>
            </figure>
          </div>
          <div className="pt-4">
            <figure className="rounded-2xl bg-neutral-50 p-8">
              <blockquote className="text-sm leading-6 text-neutral-700">
                “Exceptional Service! From booking to drop-off, everything was
                smooth and easy. The selection of cars was impressive, and the
                prices were unbeatable. Will definitely recommend to friends!”
              </blockquote>
              <figcaption className="mt-6 flex items-center justify-start gap-5">
                <Image
                  src="/avatars/danjohnson.avif"
                  alt=""
                  height={40}
                  width={40}
                  className="h-10 w-10 rounded-full border bg-white"
                />
                <div>
                  <p className="text-sm font-semibold">Daniel Johnson</p>
                  <p className="mt-1 text-sm text-neutral-600">@danjohnson</p>
                </div>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}
