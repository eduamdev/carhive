import {
  CarOverviewSkeleton,
  ReservationSidebarSkeleton,
} from '@/app/components/skeletons';

export default function Loading() {
  return (
    <div className="py-[var(--car-page-main-content-padding-y)]">
      <div className="mx-auto w-full max-w-none px-5 sm:max-w-[90%] sm:px-0 xl:max-w-6xl">
        <div className="grid w-full grid-cols-1 gap-24 md:grid-cols-[1fr_var(--card-reserve-width)]">
          <CarOverviewSkeleton />
          <ReservationSidebarSkeleton />
        </div>
      </div>
    </div>
  );
}
