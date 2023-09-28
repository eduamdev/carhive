import Image from 'next/image';

export function Testimonials() {
  return (
    <section className="border-t py-12">
      <div className="mx-auto max-w-none px-5 sm:max-w-[90%] sm:px-0 2xl:max-w-8xl">
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
                  <Image
                    src="/faces/face1.avif"
                    alt=""
                    height={40}
                    width={40}
                    className="h-10 w-10 rounded-full border bg-white"
                  />
                  <div>
                    <p className="text-[15px] font-semibold">Michael Foster</p>
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
                  “Laborum quis quam. Dolorum et ut quod quia. Voluptas numquam
                  delectus nihil. Aut enim doloremque et ipsam.”
                </blockquote>
                <figcaption className="mt-6 flex items-center justify-start gap-5">
                  <Image
                    src="/faces/face2.avif"
                    alt=""
                    height={40}
                    width={40}
                    className="h-10 w-10 rounded-full border bg-white"
                  />
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
                  <Image
                    src="/faces/face3.avif"
                    alt=""
                    height={40}
                    width={40}
                    className="h-10 w-10 rounded-full border bg-white"
                  />
                  <div>
                    <p className="text-[15px] font-semibold">Whitney Francis</p>
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
                  <Image
                    src="/faces/face4.avif"
                    alt=""
                    height={40}
                    width={40}
                    className="h-10 w-10 rounded-full border bg-white"
                  />
                  <div>
                    <p className="text-[15px] font-semibold">Lindsay Walton</p>
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
  );
}
