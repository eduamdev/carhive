import { Skeleton } from '@/app/components/ui/skeleton';

export function CarCardSkeleton() {
  return (
    <article className="rounded-[10px] border border-black/[0.08] bg-white text-sm shadow-sm">
      <div className="p-5">
        <div className="flex items-center justify-between">
          <Skeleton className="h-[18px] w-full" />
        </div>
      </div>

      <div className="relative aspect-video h-40 w-full">
        <Skeleton className="size-full rounded-none" />
      </div>

      <div className="p-5">
        <div className="pt-1.5">
          <div className="flex flex-row items-center justify-between gap-2">
            <Skeleton className="h-4 w-2/3" />
          </div>
        </div>
        <div className="pt-4">
          <Skeleton className="h-4 w-1/3" />
        </div>
        <div className="pt-5">
          <Skeleton className="h-9 w-full" />
        </div>
      </div>
    </article>
  );
}
