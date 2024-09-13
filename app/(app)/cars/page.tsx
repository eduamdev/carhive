import { Suspense } from "react"
import type { Metadata } from "next"
import dynamic from "next/dynamic"

import { Button } from "@/components/ui/button"
import { Skeleton } from "@/components/ui/skeleton"
import { FiltersIcon } from "@/components/icons/filters"
import { LogoLink } from "@/components/logoLink"
import { SearchPanelWrapper } from "@/components/search-panel-wrapper"
import { SearchPanelSkeleton } from "@/components/skeletons/search-panel"
import { UserMenuButton } from "@/components/user-menu-button"

import CarCatalog from "./components/car-catalog"
import Filters from "./components/filters/filters-wrapper"
import { CarCatalogSkeleton } from "./components/skeletons/car-catalog"
import { MapSkeleton } from "./components/skeletons/map"

const DynamicMap = dynamic(() => import("./components/map"), {
  loading: () => <MapSkeleton />,
  ssr: false,
})

export const metadata: Metadata = {
  title: "Cars",
}

export default async function CarsPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined }
}) {
  return (
    <div className="[--site-header-height:100px] md:[--site-header-height:170px]">
      <header className="sticky top-0 z-40 h-[var(--site-header-height)] border-b border-black/10 bg-white">
        {/* Phone and Tablets */}
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

        {/* Desktop */}
        <div className="hidden h-full md:block">
          <div className="mx-auto size-full px-6">
            <div className="flex h-[45px] items-end justify-between">
              <LogoLink />
              <UserMenuButton />
            </div>
            <div className="flex h-[calc(var(--site-header-height)_-_45px)] items-center justify-between gap-x-6 lg:grid lg:grid-cols-[auto_minmax(800px,860px)_auto]">
              <div className="hidden w-[110px] lg:block"></div>
              <div className="flex w-full items-center justify-center [--search-panel-height:64px] xl:[--search-panel-height:68px]">
                <Suspense fallback={<SearchPanelSkeleton />}>
                  <SearchPanelWrapper />
                </Suspense>
              </div>
              <div className="flex w-[110px] shrink-0 grow-0 justify-end justify-self-end">
                <Suspense
                  fallback={
                    <Skeleton className="h-11 w-[100px] rounded-[10px]" />
                  }
                >
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
                <Suspense fallback={<CarCatalogSkeleton />}>
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
