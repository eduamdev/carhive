import { SiteHeader } from "@/components/site-header"

export default function CancelledPage() {
  return (
    <>
      {/* Desktop */}
      <div className="hidden md:block">
        <header className="sticky top-0 z-40 border-b border-black/10">
          <div className="bg-[hsla(0,0%,100%,.8)] backdrop-blur-[5px] backdrop-saturate-[1.8]">
            <div className="mx-auto h-[var(--site-header-height)] w-full max-w-none px-5 sm:max-w-[90%] sm:px-0 xl:max-w-6xl">
              <SiteHeader />
            </div>
          </div>
        </header>
        <main>
          <div className="px-5 py-16">
            <div className="mx-auto sm:max-w-[90%] sm:px-0 xl:max-w-6xl">
              <h1 className="text-balance text-3xl font-semibold">
                Reservation Cancelled
              </h1>
            </div>
          </div>
        </main>
      </div>
    </>
  )
}
