import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
  return (
    <div
      className="h-dvh [--content-padding-y:32px] [--reserve-card-width:370px] md:[--content-padding-y:56px]"
      style={
        {
          "--reserve-card-top-offset":
            "calc(var(--site-header-height) + var(--content-padding-y)",
        } as React.CSSProperties
      }
    >
      <div className="mx-auto w-full max-w-none px-5 sm:max-w-[90%] sm:px-0 xl:max-w-6xl">
        <div className="hidden pt-8 md:block">
          <Skeleton className="h-9 w-1/3" />
        </div>
        <div className="hidden pt-4 md:block">
          <div className="grid h-[34rem] grid-cols-4 grid-rows-2 gap-3">
            <div className="relative col-span-3 row-span-2 overflow-hidden rounded-l-2xl">
              <Skeleton className="size-full" />
            </div>
            <div className="relative col-span-1 row-span-1 overflow-hidden rounded-tr-2xl">
              <Skeleton className="size-full" />
            </div>
            <div className="relative col-span-1 row-span-1 overflow-hidden rounded-br-2xl">
              <Skeleton className="size-full" />
            </div>
          </div>
        </div>
      </div>
      <div className="md:hidden">
        <div className="relative h-80">
          <Skeleton className="size-full" />
        </div>
      </div>
      <div className="h-full py-[var(--content-padding-y)]">
        <div className="mx-auto w-full max-w-none px-5 sm:max-w-[90%] sm:px-0 xl:max-w-6xl">
          <div className="pt-2">
            <div className="grid w-full grid-cols-1 gap-24 md:grid-cols-[1fr_auto]">
              <div>
                <Skeleton className="h-8 w-3/5" />
                <div className="pt-1">
                  <Skeleton className="h-6 w-2/5" />
                </div>
              </div>
              <div className="hidden w-[var(--reserve-card-width)] md:block">
                <Skeleton className="h-7 w-2/5" />
                <div className="pt-4">
                  <Skeleton className="h-9 w-full" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
