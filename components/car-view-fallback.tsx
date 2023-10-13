import { Skeleton } from '@/components/ui/skeleton';

export function CarViewFallback() {
  return (
    <div className="p-6 px-0 pb-0 md:pb-0 md:pr-6">
      <div className="grid grid-cols-[1fr_auto] justify-between">
        <div className="flex flex-col">
          <Skeleton className="h-7 w-44" />
          <div className="mt-2 flex items-center gap-1.5 text-[13px] text-neutral-800 md:text-base">
            <Skeleton className="h-4 w-12" />
            <span>·</span>
            <Skeleton className="h-4 w-12" />
            <span>·</span>
            <Skeleton className="h-4 w-12" />
            <span>·</span>
            <Skeleton className="h-4 w-16" />
          </div>
        </div>
        <div className="flex flex-col justify-self-end">
          <Skeleton className="h-14 w-20 md:w-24" />
        </div>
      </div>
      <hr className="my-6" />
      <div className="flex flex-col gap-6">
        <div className="flex flex-row gap-8">
          <Skeleton className="h-6 w-6 shrink-0" />
          <div className="flex flex-col">
            <Skeleton className="h-5 w-14" />
            <Skeleton className="mt-2 h-3 w-40" />
          </div>
        </div>
        <div className="flex flex-row gap-8">
          <Skeleton className="h-6 w-6 shrink-0" />
          <div className="flex flex-col">
            <Skeleton className="h-5 w-20" />
            <Skeleton className="mt-2 h-3 w-40" />
          </div>
        </div>
        <div className="flex flex-row gap-8">
          <Skeleton className="h-6 w-6 shrink-0" />
          <Skeleton className="h-5 w-56" />
        </div>
      </div>
      <hr className="my-6" />
      <div className="mt-10 space-y-6">
        <div className="space-y-2">
          <Skeleton className="h-5 w-full" />
          <Skeleton className="h-5 w-2/3" />
        </div>
        <div className="space-y-2">
          <Skeleton className="h-5 w-full" />
          <Skeleton className="h-5 w-2/3" />
        </div>
      </div>
      <hr className="my-12" />
      <div className="mb-6">
        <Skeleton className="h-6 w-48" />
        <div className="mt-6 grid grid-cols-2 gap-4">
          <div className="flex flex-row gap-4">
            <Skeleton className="h-5 w-5 shrink-0" />
            <Skeleton className="h-5 w-2/3" />
          </div>
          <div className="flex flex-row gap-4">
            <Skeleton className="h-5 w-5 shrink-0" />
            <Skeleton className="h-5 w-2/3" />
          </div>
          <div className="flex flex-row gap-4">
            <Skeleton className="h-5 w-5 shrink-0" />
            <Skeleton className="h-5 w-2/3" />
          </div>
          <div className="flex flex-row gap-4">
            <Skeleton className="h-5 w-5 shrink-0" />
            <Skeleton className="h-5 w-2/3" />
          </div>
          <div className="flex flex-row gap-4">
            <Skeleton className="h-5 w-5 shrink-0" />
            <Skeleton className="h-5 w-2/3" />
          </div>
          <div className="flex flex-row gap-4">
            <Skeleton className="h-5 w-5 shrink-0" />
            <Skeleton className="h-5 w-2/3" />
          </div>
        </div>
      </div>
    </div>
  );
}
