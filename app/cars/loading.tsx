import { CarsViewFallback } from '@/components/cars-view-fallback';
import { MapViewFallback } from '@/components/map-view-fallback';

export default function Loading() {
  return (
    <div className="flex">
      <div className="w-full max-w-[var(--cars-page-main-content-max-width)] shrink-0 grow-0 flex-col overflow-y-auto md:min-h-[var(--cars-page-main-content-height)] md:w-[55%] xl:w-[63%]">
        <CarsViewFallback />
      </div>
      <div className="hidden flex-auto md:block">
        <div className="sticky top-[var(--header-gap)] z-10 basis-auto">
          <MapViewFallback />
        </div>
      </div>
    </div>
  );
}
