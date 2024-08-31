import { Suspense } from "react"
import type { Metadata } from "next"
import dynamic from "next/dynamic"

import { LogoLink } from "@/app/components/logoLink"
import { SearchPanelWrapper } from "@/app/components/search-panel-wrapper"
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
    <>
      <header className="sticky top-0 z-30 flex h-[var(--cars-header-height)] w-full flex-col bg-white shadow-[inset_0_-1px_0_0_#eaeaea]">
        <div className="h-[80px] border-b border-black/[0.07]">
          <div className="mx-auto size-full max-w-none px-5 sm:max-w-none sm:px-6">
            <div className="flex h-full items-center justify-between gap-x-4">
              <LogoLink />
              <div className="hidden md:block">
                <Suspense fallback={<CompactSearchPanelSkeleton />}>
                  <SearchPanelWrapper compact />
                </Suspense>
              </div>
              <div className="inline-flex">
                <UserMenuButton />
              </div>
            </div>
          </div>
        </div>
        <div className="hidden h-[calc(var(--cars-header-height)_-_80px)] lg:block">
          <Filters searchParams={searchParams} />
        </div>
      </header>
      <main>
        <div className="flex flex-row">
          <div className="w-full shrink-0 grow-0 flex-col overflow-y-auto bg-neutral-50 md:w-[55%] xl:w-[63%]">
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
            <div className="sticky top-[var(--cars-header-height)] z-10 basis-auto">
              <DynamicMap />
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
