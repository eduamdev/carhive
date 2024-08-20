import { Skeleton } from '@/app/components/ui/skeleton';
import { Separator } from '@/app/components/ui/separator';

export function CarOverviewSkeleton() {
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
          <Skeleton className="h-[48px] w-[85px]" />
        </div>
      </div>
      <Separator decorative orientation="horizontal" className="my-6" />
      <div className="flex flex-col gap-6">
        <div className="flex flex-row gap-8">
          <Skeleton className="size-6 shrink-0" />
          <div className="flex flex-col">
            <Skeleton className="h-5 w-14" />
            <Skeleton className="mt-2 h-3 w-40" />
          </div>
        </div>
        <div className="flex flex-row gap-8">
          <Skeleton className="size-6 shrink-0" />
          <div className="flex flex-col">
            <Skeleton className="h-5 w-20" />
            <Skeleton className="mt-2 h-3 w-40" />
          </div>
        </div>
        <div className="flex flex-row gap-8">
          <Skeleton className="size-6 shrink-0" />
          <Skeleton className="h-5 w-56" />
        </div>
      </div>
      <Separator decorative orientation="horizontal" className="my-6" />
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
      <Separator decorative orientation="horizontal" className="my-12" />
      <div className="mb-6">
        <Skeleton className="h-6 w-48" />
        <div className="mt-6 grid grid-cols-2 gap-4">
          <div className="flex flex-row gap-4">
            <Skeleton className="size-5 shrink-0" />
            <Skeleton className="h-5 w-2/3" />
          </div>
          <div className="flex flex-row gap-4">
            <Skeleton className="size-5 shrink-0" />
            <Skeleton className="h-5 w-2/3" />
          </div>
          <div className="flex flex-row gap-4">
            <Skeleton className="size-5 shrink-0" />
            <Skeleton className="h-5 w-2/3" />
          </div>
          <div className="flex flex-row gap-4">
            <Skeleton className="size-5 shrink-0" />
            <Skeleton className="h-5 w-2/3" />
          </div>
          <div className="flex flex-row gap-4">
            <Skeleton className="size-5 shrink-0" />
            <Skeleton className="h-5 w-2/3" />
          </div>
          <div className="flex flex-row gap-4">
            <Skeleton className="size-5 shrink-0" />
            <Skeleton className="h-5 w-2/3" />
          </div>
        </div>
      </div>
    </div>
  );
}

export function ReservationSidebarSkeleton() {
  return (
    <div className="hidden normal-nums md:block">
      <div className="sticky top-[calc(var(--site-header-height)+24px)] rounded-xl border p-6 shadow-[0_6px_16px_rgba(0,0,0,0.12)]">
        <div className="grid grid-cols-1 items-baseline gap-4 leading-none lg:grid-cols-2">
          <div className="flex items-baseline gap-1.5 ">
            <Skeleton className="h-5 w-36 shrink-0" />
          </div>
          <div className="flex flex-row items-baseline justify-start gap-1 tracking-tight lg:justify-end">
            <Skeleton className="size-4" />
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
          <Separator decorative orientation="horizontal" className="my-6" />
          <div className="flex items-center justify-between">
            <Skeleton className="h-5 w-36" />
            <Skeleton className="h-5 w-28" />
          </div>
        </div>
      </div>
    </div>
  );
}
