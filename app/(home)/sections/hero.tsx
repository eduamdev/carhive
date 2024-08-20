import { Suspense } from 'react';
import { getLocations } from '@/db/queries';
import { LogoSlider } from '../components/logo-slider';
import { SearchPanel } from '../components/search-panel';

export async function Hero() {
  const locations = await getLocations();

  return (
    <section className="bg-neutral-50">
      <div className="mx-auto w-full max-w-none px-5 sm:max-w-[90%] sm:px-0 2xl:max-w-8xl">
        <div className="pt-10 sm:pt-14 md:pt-16">
          <h1 className="text-center text-xl font-extrabold sm:text-2xl lg:text-[26px]">
            Find your car
          </h1>
          <div className="hidden md:block">
            <div className="pt-6">
              <div className="flex items-center justify-center">
                <Suspense>
                  <SearchPanel locations={locations} />
                </Suspense>
              </div>
            </div>
          </div>
          <div className="pt-14">
            <div className="invisible relative h-28 min-h-28 overflow-x-hidden md:visible">
              <div className="before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-60 before:bg-gradient-to-r before:from-neutral-50 before:content-['']"></div>
              <div className="after:absolute after:right-0 after:top-0 after:z-10 after:h-full after:w-60 after:bg-gradient-to-l after:from-neutral-50 after:content-['']"></div>
              <div className="flex h-full items-center justify-center">
                <LogoSlider />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
