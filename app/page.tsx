import { Icons } from '@/components/icons';
import { BrandLogoSlider } from '@/components/brand-logo-slider';

export default function Page() {
  return (
    <main>
      <section className="bg-gradient-to-b from-white to-neutral-50 pt-16">
        <h1 className="text-center text-3xl font-extrabold">Find your ride</h1>
        <div className="mx-auto mt-8 hidden h-16 w-[90%] max-w-4xl items-center justify-between gap-x-4 rounded-full border border-black/10 bg-white px-2 py-2 text-black md:flex">
          <div className="flex flex-col items-start justify-center gap-1 px-4">
            <span className="text-sm font-medium">From</span>
            <span className="text-sm text-neutral-500">
              Add pick-up location
            </span>
          </div>
          <span className="text-neutral-200">|</span>
          <div className="flex flex-col items-start justify-center gap-1 px-4">
            <span className="text-sm font-medium">To</span>
            <span className="text-sm text-neutral-500">
              Add drop-off location
            </span>
          </div>
          <span className="text-neutral-200">|</span>
          <div className="flex flex-col items-start justify-center gap-1 px-4">
            <span className="text-sm font-medium">Check in</span>
            <span className="text-sm text-neutral-500">Add dates</span>
          </div>
          <span className="text-neutral-200">|</span>
          <div className="flex flex-col items-start justify-center gap-1 px-4">
            <span className="text-sm font-medium">Check out</span>
            <span className="text-sm text-neutral-500">Add dates</span>
          </div>
          <div className="flex items-center justify-center rounded-full bg-black p-3 text-white">
            <Icons.search className="h-4 w-4" />
          </div>
        </div>
        <BrandLogoSlider />
      </section>
      <section className="my-16">
        <h2 className="text-center text-2xl font-extrabold">Stuff</h2>
      </section>
      <section className="my-16">
        <h2 className="text-center text-2xl font-extrabold">FAQS</h2>
      </section>
    </main>
  );
}
