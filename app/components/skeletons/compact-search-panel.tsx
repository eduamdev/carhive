import { Skeleton } from '@/app/components/ui/skeleton';
import { Separator } from '@/app/components/ui/separator';

export function CompactSearchPanelSkeleton() {
  return (
    <div className="whitespace-nowrap rounded-full border border-black/10 bg-white">
      <div className="relative grid h-[--compact-search-panel-height] w-[--compact-search-panel-width] grid-cols-1 items-center">
        <div className="grid h-full grid-cols-[33.333333%_33.333333%_33.333333%] items-center justify-center">
          <div className="relative h-full">
            <Separator
              orientation="vertical"
              className="absolute inset-y-0 right-0 m-auto h-7 shrink-0"
            />
            <div className="flex size-full items-center justify-center px-0">
              <div className="mr-1 inline-flex size-full flex-col items-center justify-center overflow-hidden whitespace-nowrap border-none px-5 py-0">
                <div className="flex size-full flex-col items-start justify-center gap-y-1.5">
                  <Skeleton className="h-2.5 w-12 shrink-0 rounded-lg" />
                  <div className="pt-1">
                    <Skeleton className="h-3 w-20 shrink-0 rounded-lg" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="relative h-full">
            <Separator
              orientation="vertical"
              className="absolute inset-y-0 right-0 m-auto h-7 shrink-0"
            />
            <div className="flex size-full items-center justify-center px-0">
              <div className="inline-flex size-full flex-col items-center justify-center overflow-hidden whitespace-nowrap border-none px-5 py-0">
                <div className="flex size-full flex-col items-start justify-center gap-y-1.5">
                  <Skeleton className="h-2.5 w-12 shrink-0 rounded-lg" />
                  <div className="pt-1">
                    <Skeleton className="h-3 w-20 shrink-0 rounded-lg" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="h-full">
            <div className="flex size-full items-center justify-center px-0">
              <div className="ml-1 inline-flex size-full flex-col items-center justify-center overflow-hidden whitespace-nowrap border-none px-5 py-0">
                <div className="flex size-full flex-col items-start justify-center gap-y-1.5">
                  <Skeleton className="h-2.5 w-12 shrink-0 rounded-lg" />
                  <div className="pt-1">
                    <Skeleton className="h-3 w-20 shrink-0 rounded-lg" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute right-2">
          <Skeleton className="size-[2.3rem] shrink-0 rounded-full" />
        </div>
      </div>
    </div>
  );
}
