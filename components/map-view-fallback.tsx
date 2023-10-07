import { LoadingDots } from '@/components/loading-dots';

export function MapViewFallback() {
  return (
    <div className="flex h-[var(--map-container-height)] items-center justify-center gap-x-2.5 bg-neutral-200">
      <LoadingDots />
    </div>
  );
}
