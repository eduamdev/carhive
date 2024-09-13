import { Suspense } from "react"

import { SearchPanelWrapper } from "@/components/search-panel-wrapper"
import { SearchPanelSkeleton } from "@/components/skeletons/search-panel"

import { LogoSlider } from "./logo-slider"

export async function Hero() {
  return (
    <section className="bg-gradient-to-b from-white to-neutral-50">
      <div className="mx-auto w-full max-w-none px-5 sm:max-w-[90%] sm:px-0 2xl:max-w-8xl">
        <div className="pt-10 sm:pt-14 md:pt-20">
          <h1 className="text-center text-xl font-bold sm:text-2xl lg:text-3xl">
            Your Road Trip Starts Here
          </h1>
          <div className="hidden md:block">
            <div className="pt-10">
              <div className="flex items-center justify-center">
                <div className="w-[860px]">
                  <Suspense fallback={<SearchPanelSkeleton />}>
                    <SearchPanelWrapper />
                  </Suspense>
                </div>
              </div>
            </div>
          </div>
          <div className="py-20 lg:px-4">
            <div className="relative h-10 min-h-10 overflow-x-hidden">
              <div className="before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-[30%] before:bg-gradient-to-r before:from-neutral-50 before:content-['']"></div>
              <div className="after:absolute after:right-0 after:top-0 after:z-10 after:h-full after:w-[30%] after:bg-gradient-to-l after:from-neutral-50 after:content-['']"></div>
              <div className="flex h-full items-center justify-center">
                <LogoSlider />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
