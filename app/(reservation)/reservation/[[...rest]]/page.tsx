import { Metadata } from "next"
import { getCarBySlug } from "@/db/queries"
import { SignedIn, SignedOut, SignIn } from "@clerk/nextjs"
import { differenceInDays } from "date-fns"

import { BackButton } from "@/app/components/back-button"
import { ChevronLeftIcon } from "@/app/components/icons/chevron-left"
import { LogoLink } from "@/app/components/logoLink"
import { Button } from "@/app/components/ui/button"
import { Separator } from "@/app/components/ui/separator"
import { SearchParams } from "@/app/lib/types"

import { BookDetails } from "./components/book-details"
import { CarDetails } from "./components/car-details"
import { PriceDetails } from "./components/price-details"

export const metadata: Metadata = {
  title: "Confirm and pay",
}

interface ReservationPageProps {
  searchParams: {
    [SearchParams.CAR]: string
    [SearchParams.CHECKIN]: string
    [SearchParams.CHECKOUT]: string
  }
}

export default async function ReservationPage({
  searchParams,
}: ReservationPageProps) {
  const { [SearchParams.CAR]: slug, checkin, checkout } = searchParams

  const car = await getCarBySlug(slug)

  if (!car) {
    return null
  }

  const checkinDate = new Date(checkin)
  const checkoutDate = new Date(checkout)

  const days = differenceInDays(checkoutDate, checkinDate)
  const subtotal = car.price_per_day * days
  const taxes = subtotal * 0.16

  return (
    <>
      {/* Phone and Tablets */}
      <div className="md:hidden">
        <div className="flex size-full flex-col">
          {/* header */}
          <header className="sticky top-0 z-40 border-b border-black/10 bg-white">
            <div className="px-5">
              <div className="relative flex h-[var(--site-header-height)] items-center">
                <BackButton className="-ml-2">
                  <ChevronLeftIcon className="size-5 shrink-0" />
                </BackButton>
                <div className="absolute inset-0 flex items-center justify-center self-center ">
                  <h1 className="text-center text-base font-semibold">
                    Confirm and pay
                  </h1>
                </div>
              </div>
            </div>
          </header>
          {/* main */}
          <main>
            <div className="pb-10 pt-2">
              <div className="px-5 py-3">
                <CarDetails car={car} />
              </div>
              <Separator className="my-3 h-[6px]" />
              <div className="px-5 py-3">
                <BookDetails
                  checkinDate={checkinDate}
                  checkoutDate={checkoutDate}
                />
              </div>
              <Separator className="my-3 h-[6px]" />
              <div className="px-5 py-3">
                <PriceDetails
                  days={days}
                  currency={car.currency}
                  subtotal={subtotal}
                  taxes={taxes}
                />
              </div>
              <Separator className="my-3 h-[6px]" />
              <div className="px-5 py-3">
                <SignedOut>
                  <h2 className="text-[22px] font-semibold">
                    Log in or sign up to book
                  </h2>
                  <div className="pt-10">
                    <div className="flex items-center justify-center">
                      <SignIn />
                    </div>
                  </div>
                </SignedOut>
                <SignedIn>
                  <Button size="lg" className="w-full text-lg">
                    Pay
                  </Button>
                </SignedIn>
              </div>
            </div>
          </main>
        </div>
      </div>

      {/* Desktop */}
      <div className="hidden md:block">
        <header className="h-[var(--site-header-height)] w-full border-b border-black/10">
          <div className="flex h-full items-center px-5">
            <LogoLink />
          </div>
        </header>
        <main>
          <div className="px-5 py-16">
            <div className="mx-auto sm:max-w-[90%] sm:px-0 xl:max-w-6xl">
              <div className="flex items-center">
                <BackButton className="-ml-12 mr-2">
                  <ChevronLeftIcon className="size-5 shrink-0" />
                </BackButton>
                <h1 className="text-balance text-3xl font-semibold">
                  Confirm and pay
                </h1>
              </div>
              <div className="py-12">
                <div className="grid grid-cols-[minmax(400px,1fr)_minmax(285px,465px)] items-start gap-x-24">
                  <div>
                    <section>
                      <BookDetails
                        checkinDate={checkinDate}
                        checkoutDate={checkoutDate}
                      />
                    </section>
                    <Separator className="my-6" />
                    <section>
                      <SignedOut>
                        <h2 className="text-[22px] font-semibold">
                          Log in or sign up to book
                        </h2>
                        <div className="pt-10">
                          <div className="flex items-center justify-center">
                            <SignIn />
                          </div>
                        </div>
                      </SignedOut>
                      <SignedIn>
                        <Button size="lg" className="w-full text-lg">
                          Pay
                        </Button>
                      </SignedIn>
                    </section>
                  </div>
                  <aside className="sticky top-[var(--site-header-height)] rounded-xl border">
                    <div className="p-6">
                      <CarDetails car={car} />
                      <Separator className="my-6" />
                      <div className="hidden md:block">
                        <PriceDetails
                          days={days}
                          currency={car.currency}
                          subtotal={subtotal}
                          taxes={taxes}
                        />
                      </div>
                    </div>
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
