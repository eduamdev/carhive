import { LoadingDots } from '@/app/components/loading-dots';

export function MapSkeleton() {
  return (
    <div className="flex h-[var(--cars-main-content-height)] items-center justify-center gap-x-2.5 bg-[#ddd]">
      <LoadingDots />
    </div>
  );
}
