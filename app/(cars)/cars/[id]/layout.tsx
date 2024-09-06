import { ReactNode } from "react"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { ChevronLeftIcon } from "@/components/icons/chevron-left"
import { SiteHeader } from "@/components/site-header"

export default function CarLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col">
      <div className="sticky top-0 z-40 border-b border-black/10">
        <div className="md:hidden">
          <div className="bg-white">
            <div className="mx-auto w-full max-w-none px-5 sm:max-w-[90%] sm:px-0 xl:max-w-6xl">
              <header className="flex h-[var(--site-header-height)] items-center">
                <Button
                  variant={"link"}
                  type="button"
                  className="-ml-2 rounded-full pl-2 text-neutral-800 hover:underline"
                  asChild
                >
                  <Link href="/cars">
                    <ChevronLeftIcon className="size-5 shrink-0" />
                    <span className="ml-1 text-center text-base font-semibold">
                      Cars
                    </span>
                  </Link>
                </Button>
              </header>
            </div>
          </div>
        </div>
        <div className="hidden md:block">
          <div className="bg-[hsla(0,0%,100%,.8)] backdrop-blur-[5px] backdrop-saturate-[1.8]">
            <div className="mx-auto h-[var(--site-header-height)] w-full max-w-none px-5 sm:max-w-[90%] sm:px-0 xl:max-w-6xl">
              <SiteHeader />
            </div>
          </div>
        </div>
      </div>
      {children}
    </div>
  )
}
