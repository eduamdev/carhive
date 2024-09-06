import { getSession } from "@/lib/stripe"
import { SiteHeader } from "@/components/site-header"

export default async function ConfirmationPage({
  params,
}: {
  params: { session_id: string }
}) {
  const session = await getSession(params.session_id)

  if (!session) {
    return <p>Reservation not found.</p>
  }

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
                Your reservation is confirmed!
              </h1>

              <div className="py-12">
                <div className="grid grid-cols-[minmax(400px,560px)_minmax(285px,465px)] items-start justify-between gap-x-14">
                  <div>
                    <p>
                      Your reservation has been confirmed. Thank you for your
                      payment!
                    </p>
                    <p>Reservation ID: {session.id}</p>
                  </div>
                  <aside className="sticky top-[var(--site-header-height)] rounded-xl border">
                    <div className="p-6">aside</div>
                  </aside>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  )
}
