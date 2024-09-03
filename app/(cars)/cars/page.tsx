import { Suspense } from "react"
import type { Metadata } from "next"
import dynamic from "next/dynamic"

import { FiltersIcon } from "@/app/components/icons/filters"
import { LogoLink } from "@/app/components/logoLink"
import { SearchPanelWrapper } from "@/app/components/search-panel-wrapper"
import { Button } from "@/app/components/ui/button"
import { Skeleton } from "@/app/components/ui/skeleton"
import { UserMenuButton } from "@/app/components/user-menu-button"

import CarCatalog from "./components/car-catalog"
import Filters from "./components/filters/filters-wrapper"
import { CarCardSkeleton } from "./components/skeletons/car-card"
import { CompactSearchPanelSkeleton } from "./components/skeletons/compact-search-panel"
import { MapSkeleton } from "./components/skeletons/map"

const DynamicMap = dynamic(
  async () => {
    const { Map } = await import("./components/map")
    return { default: Map }
  },
  {
    loading: () => <MapSkeleton />,
    ssr: false,
  }
)

export const metadata: Metadata = {
  title: "Cars",
}

export default function CarsPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined }
}) {
  return (
    <div className="[--site-header-height:100px] md:[--site-header-height:160px]">
      <header className="sticky top-0 z-40 h-[var(--site-header-height)] border-b border-black/10 bg-white">
        {/* Small devices */}
        <div className="h-full md:hidden">
          <div className="h-full px-5 sm:px-6">
            <div className="grid h-full grid-cols-[1fr_40px] items-center justify-center gap-x-3">
              <div className="h-14 w-full rounded-full border shadow-lg"></div>
              <Suspense
                fallback={<Skeleton className="size-10 rounded-full" />}
              >
                <Filters
                  trigger={
                    <Button
                      variant="outline"
                      size="icon"
                      className="rounded-full"
                    >
                      <FiltersIcon className="size-5 shrink-0" />
                    </Button>
                  }
                />
              </Suspense>
            </div>
          </div>
        </div>

        {/* Tablet and desktop devices */}
        <div className="hidden h-full md:block">
          <div className="mx-auto size-full px-6">
            <div className="flex h-[60px] items-center justify-between">
              <LogoLink />
              <UserMenuButton />
            </div>
            <div className="grid h-[calc(var(--site-header-height)_-_60px)] grid-cols-[minmax(100px,auto)_1fr_minmax(100px,auto)] items-center justify-center gap-x-6">
              <div></div>
              <div className="flex items-center justify-center self-start">
                <Suspense fallback={<CompactSearchPanelSkeleton />}>
                  <SearchPanelWrapper compact />
                </Suspense>
              </div>
              <div className="justify-self-end">
                <Suspense fallback={<Skeleton className="h-10 w-20" />}>
                  <Filters />
                </Suspense>
              </div>
            </div>
          </div>
        </div>
      </header>
      <main>
        <div className="flex flex-row">
          <div className="w-full shrink-0 grow-0 flex-col overflow-y-auto bg-white md:w-[55%] xl:w-[63%]">
            <div className="px-5 pb-10 pt-8 sm:px-6 sm:pb-10 sm:pt-8">
              <div className="grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] items-stretch justify-center gap-[22px]">
                <Suspense
                  fallback={
                    <>
                      <CarCardSkeleton />
                      <CarCardSkeleton />
                      <CarCardSkeleton />
                      <CarCardSkeleton />
                      <CarCardSkeleton />
                      <CarCardSkeleton />
                      <CarCardSkeleton />
                      <CarCardSkeleton />
                    </>
                  }
                >
                  <CarCatalog searchParams={searchParams} />
                </Suspense>
              </div>
            </div>
          </div>
          <div className="hidden flex-auto md:block">
            <div className="sticky top-[var(--site-header-height)] z-10 basis-auto">
              <DynamicMap />
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
