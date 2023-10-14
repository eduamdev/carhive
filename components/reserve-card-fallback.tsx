import { Skeleton } from '@/components/ui/skeleton';

export function ReserveCardFallback() {
  return (
    <div className="hidden normal-nums md:block">
      <div className="sticky top-[calc(var(--site-header-height)+24px)] rounded-xl border p-6 shadow-[0_6px_16px_rgba(0,0,0,0.12)]">
        <div className="grid grid-cols-1 items-baseline gap-4 leading-none lg:grid-cols-2">
          <div className="flex items-baseline gap-1.5 ">
            <Skeleton className="h-5 w-36 shrink-0" />
          </div>
          <div className="flex flex-row items-baseline justify-start gap-1 tracking-tight lg:justify-end">
            <Skeleton className="h-4 w-4" />
            <Skeleton className="h-4 w-28 shrink-0" />
          </div>
        </div>
        <div className="mt-6 w-full rounded-xl border border-neutral-300">
          <div className="flex flex-col border-b border-neutral-300">
            <div className="flex flex-col gap-1.5 p-2.5">
              <Skeleton className="h-[10px] w-24" />
              <Skeleton className="h-[14px] w-36" />
            </div>
          </div>
          <div className="grid grid-cols-2">
            <div>
              <div className="flex flex-col gap-1.5 p-2.5">
                <Skeleton className="h-[10px] w-14" />
                <Skeleton className="h-[14px] w-24" />
              </div>
            </div>
            <div className="border-l border-neutral-300">
              <div className="flex flex-col gap-1.5 p-2.5">
                <Skeleton className="h-[10px] w-14" />
                <Skeleton className="h-[14px] w-24" />
              </div>
            </div>
          </div>
        </div>
        <Skeleton className="mt-4 h-12 w-full" />
        <Skeleton className="mx-auto mt-4 h-4 w-60" />
        <div className="mt-5">
          <div className="flex items-center justify-between">
            <Skeleton className="h-5 w-36" />
            <Skeleton className="h-5 w-28" />
          </div>
          <div className="mt-3 flex items-center justify-between">
            <Skeleton className="h-5 w-28" />
            <Skeleton className="h-5 w-20" />
          </div>
          <hr className="my-6" />
          <div className="flex items-center justify-between">
            <Skeleton className="h-5 w-36" />
            <Skeleton className="h-5 w-28" />
          </div>
        </div>
      </div>
    </div>
  );
}
