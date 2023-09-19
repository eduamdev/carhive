import { BrandLogoSlider } from '@/components/brand-logo-slider';
import { MainSearchForm } from '@/components/main-search-form';
import { Icons } from '@/components/icons';

export function Hero() {
  return (
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
          <span className="text-[13px] text-neutral-900">No hidden fees.</span>
        </div>
        <div className="flex items-center justify-center gap-2">
          <Icons.checkCircle className="h-5 w-5 text-green-600" />
          <span className="text-[13px] text-neutral-900">
            Lorem ipsum dolor sit amet.
          </span>
        </div>
      </div>
      <MainSearchForm />
      <BrandLogoSlider />
    </section>
  );
}
