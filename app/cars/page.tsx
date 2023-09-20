import { MainSearchForm } from '@/components/main-search-form';
import { Filters } from '@/components/filters';
import { MainCarsContent } from '@/components/main-cars-content';

export default function CarsPage() {
  return (
    <>
      <section className="hidden md:block">
        <div className="mx-auto w-full max-w-none px-5 sm:max-w-[90%] sm:px-0 2xl:max-w-8xl">
          <div className="flex items-center justify-center pb-8 pt-3">
            <MainSearchForm compact />
          </div>
        </div>
      </section>
      <section className="border-t">
        <div className="mx-auto w-full max-w-none px-5 sm:max-w-[90%] sm:px-0 2xl:max-w-8xl">
          <div className="flex">
            <div className="hidden w-full max-w-[200px] pb-4 pr-4 pt-8 md:block">
              <aside className="sticky h-fit w-full overflow-y-auto overflow-x-hidden">
                <Filters />
              </aside>
            </div>
            <MainCarsContent />
          </div>
        </div>
      </section>
    </>
  );
}
