import { Skeleton } from "@/components/ui/skeleton"

export function CarCardSkeleton() {
  return (
    <article className="overflow-hidden rounded-[10px] border border-black/[0.08] bg-white text-sm shadow-sm">
      <div className="relative aspect-video h-40 w-full">
        <Skeleton className="size-full rounded-none" />
      </div>
      <div className="p-5">
        <div>
          <Skeleton className="h-5 w-4/5" />
        </div>
        <div className="pt-3">
          <Skeleton className="h-5 w-2/5" />
        </div>
        <div className="pt-1">
          <Skeleton className="h-5 w-1/3" />
        </div>
        <div className="pt-1">
          <Skeleton className="h-5 w-1/3" />
        </div>
        <div className="pt-[18px]">
          <Skeleton className="h-9 w-full" />
        </div>
      </div>
    </article>
  )
}
