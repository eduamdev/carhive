export function CallToAction() {
  return (
    <section className="border-t bg-neutral-50 py-16">
      <div className="2xl:max-w-8xl mx-auto max-w-none px-5 sm:max-w-[90%] sm:px-0">
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
  );
}
