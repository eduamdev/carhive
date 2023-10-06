import { Skeleton } from '@/components/ui/skeleton';
import { Separator } from '@/components/ui/separator';

function SkeletonCard() {
  return (
    <div className="h-full w-full rounded-xl shadow-sm">
      <div className="mb-6 flex justify-between p-6">
        <Skeleton className="h-5 w-1/2" />
        <div className="flex w-1/3 gap-1.5">
          <Skeleton className="h-5 w-5 shrink-0 rounded-full" />
          <Skeleton className="h-5 w-full" />
        </div>
      </div>
      <div className="p-6 pt-0">
        <Skeleton className="h-20 w-full" />
        <div className="mt-6 flex items-center justify-between gap-2">
          <Skeleton className=" h-4 w-1/4" />
          <Separator
            orientation="vertical"
            decorative
            className="h-4 bg-neutral-100"
          />
          <Skeleton className=" h-4 w-1/4" />
          <Separator
            orientation="vertical"
            decorative
            className="h-4 bg-neutral-100"
          />
          <Skeleton className=" h-4 w-1/4" />
        </div>
        <Skeleton className="mt-5 h-5 w-1/2" />
      </div>
      <div className="p-6 pt-0">
        <Skeleton className="h-10 w-full" />
      </div>
    </div>
  );
}

export function CarsViewFallback() {
  return (
    <div className="grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] items-center justify-center gap-6">
      <SkeletonCard />
      <SkeletonCard />
      <SkeletonCard />
      <SkeletonCard />
      <SkeletonCard />
      <SkeletonCard />
      <SkeletonCard />
      <SkeletonCard />
    </div>
  );
}
