import { Suspense } from 'react';
import { LogoSlider } from '@/components/home';
import { SearchForm } from '@/components/search-form';
import { SearchFormSkeleton } from '@/components/skeletons';
import { Icons } from '@/components/icons';

export function Hero() {
  return (
    <section className="bg-gradient-to-b from-white via-neutral-50 to-neutral-50 pt-12">
      <h1 className="text-center text-3xl font-extrabold">Find your car</h1>
      <div className="mx-auto mt-6 grid max-w-4xl grid-cols-1 items-center justify-center gap-4 md:flex md:flex-row md:gap-12">
        <div className="flex items-center justify-center gap-1.5">
          <Icons.checkCircle className="h-5 w-5 shrink-0 text-green-600" />
          <span className="text-sm text-neutral-900">No hidden fees.</span>
        </div>
        <div className="flex items-center justify-center gap-1.5">
          <Icons.checkCircle className="h-5 w-5 shrink-0 text-green-600" />
          <span className="text-sm text-neutral-900">Transparent pricing.</span>
        </div>
        <div className="flex items-center justify-center gap-1.5">
          <Icons.checkCircle className="h-5 w-5 shrink-0 text-green-600" />
          <span className="text-sm text-neutral-900">
            Flexible cancellations.
          </span>
        </div>
      </div>
      <div className="mt-5 hidden md:block">
        <Suspense fallback={<SearchFormSkeleton />}>
          <SearchForm />
        </Suspense>
      </div>
      <LogoSlider />
    </section>
  );
}
