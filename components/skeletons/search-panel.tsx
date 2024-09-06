import { Separator } from "@/components/ui/separator"
import { Skeleton } from "@/components/ui/skeleton"

export function SearchPanelSkeleton() {
  return (
    <div className="w-full whitespace-nowrap rounded-full border border-black/10 bg-white shadow-lg shadow-neutral-900/5">
      <div className="relative grid h-[var(--search-panel-height)] w-full grid-cols-1 items-center">
        <div className="grid h-full grid-cols-[33.333333%_33.333333%_33.333333%] items-center justify-center">
          <div className="relative h-full">
            <Separator
              orientation="vertical"
              className="absolute inset-y-0 right-0 m-auto h-7 shrink-0"
            />
            <div className="flex size-full items-center justify-center px-0">
              <div className="inline-flex size-full flex-col items-center justify-center overflow-hidden whitespace-nowrap border-none px-5 py-0">
                <div className="flex size-full flex-col items-start justify-center gap-y-1">
                  <Skeleton className="h-3.5 w-12 shrink-0" />
                  <Skeleton className="h-3.5 w-20 shrink-0" />
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
                <div className="flex size-full flex-col items-start justify-center gap-y-1">
                  <Skeleton className="h-3.5 w-12 shrink-0" />
                  <Skeleton className="h-3.5 w-20 shrink-0" />
                </div>
              </div>
            </div>
          </div>
          <div className="h-full">
            <div className="flex size-full items-center justify-center px-0">
              <div className="inline-flex size-full flex-col items-center justify-center overflow-hidden whitespace-nowrap border-none px-5 py-0">
                <div className="flex size-full flex-col items-start justify-center gap-y-1">
                  <Skeleton className="h-3.5 w-12 shrink-0" />
                  <Skeleton className="h-3.5 w-20 shrink-0" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute right-2">
          <Skeleton className="size-[calc(var(--search-panel-height)_-_1.25rem)] rounded-full before:shrink-0" />
        </div>
      </div>
    </div>
  )
}
