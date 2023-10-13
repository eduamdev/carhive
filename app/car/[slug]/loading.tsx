import { CarViewFallback } from '@/components/car-view-fallback';
import { ReserveModalFallback } from '@/components/reserve-modal-fallback';

export default function Loading() {
  return (
    <div className="py-8">
      <div className="mx-auto w-full max-w-none px-5 sm:max-w-[90%] sm:px-0 xl:max-w-6xl">
        <div className="grid w-full grid-cols-1 gap-24 md:grid-cols-[1fr_370px]">
          <CarViewFallback />
          <ReserveModalFallback />
        </div>
      </div>
    </div>
  );
}
