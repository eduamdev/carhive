import { getCarBySlug } from "@/db/queries"
import { SignedIn, SignedOut, SignIn } from "@clerk/nextjs"
import { differenceInDays } from "date-fns"

import { BackButton } from "@/app/components/back-button"
import CldImage from "@/app/components/cld-image"
import { ChevronLeftIcon } from "@/app/components/icons/chevron-left"
import { FilledStarIcon } from "@/app/components/icons/filled-star"
import { LogoLink } from "@/app/components/logoLink"
import { Button } from "@/app/components/ui/button"
import { Separator } from "@/app/components/ui/separator"
import { SearchParams } from "@/app/lib/types"
import { formatCurrency, formatDateRange } from "@/app/lib/utils"

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
  const { [SearchParams.CAR]: carSlug, checkin, checkout } = searchParams

  const car = await getCarBySlug(carSlug)

  if (!car) {
    throw new Error("Car is required to make a reservation.")
  }

  const days = differenceInDays(new Date(checkout), new Date(checkin))
  const subtotal = car.price_per_day * days
  const taxesAndFees = subtotal * 0.16

  return (
    <>
      <header>
        <div className="hidden h-[var(--site-header-height)] w-full pl-6 shadow-[inset_0_-1px_0_0_#eaeaea] md:block">
          <div className="flex h-full items-center">
            <LogoLink />
          </div>
        </div>
        <div className="sticky top-0 z-30 bg-white p-5 shadow-[inset_0_-1px_0_0_#eaeaea] md:hidden">
          <div className="relative h-full">
            <div className="flex items-center justify-center">
              <h1 className="text-base font-semibold">Confirm and pay</h1>
              <div className="absolute inset-y-auto -left-2.5">
                <BackButton className="rounded-full">
                  <ChevronLeftIcon className="size-5 shrink-0" />
                </BackButton>
              </div>
            </div>
          </div>
        </div>
      </header>
      <main>
        <div className="md:py-20">
          <div className="mx-auto w-full max-w-none px-5 sm:max-w-[90%] sm:px-0 xl:max-w-6xl">
            <div className="hidden md:block">
              <div className="flex items-center">
                <BackButton className="-ml-12 mr-3 inline-flex rounded-full">
                  <ChevronLeftIcon className="size-5 shrink-0" />
                </BackButton>
                <h1 className="text-balance text-3xl font-semibold">
                  Confirm and pay
                </h1>
              </div>
            </div>
            <div className="md:pt-12">
              <div className="flex w-full flex-col-reverse md:grid md:grid-cols-[1fr_0.85fr] md:gap-x-24">
                <div className="mb-16 md:hidden">
                  <Separator className="my-8" />
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
                <div className="md:hidden">
                  <div>
                    <h2 className="text-xl font-semibold">Price details</h2>
                    <div className="flex flex-col gap-y-3 pt-6 text-neutral-600">
                      <div className="flex items-center justify-between">
                        <span className="underline">
                          {formatCurrency(car.price_per_day, car.currency)} x{" "}
                          {days} days
                        </span>
                        <span>{formatCurrency(subtotal, car.currency)}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="underline">Taxes and fees</span>
                        <span>
                          {formatCurrency(taxesAndFees, car.currency)}
                        </span>
                      </div>
                    </div>
                  </div>
                  <Separator className="my-6" />
                  <div className="flex items-center justify-between font-semibold">
                    <span>Total ({car.currency})</span>
                    <span>
                      {formatCurrency(subtotal + taxesAndFees, car.currency)}
                    </span>
                  </div>
                </div>
                <div>
                  <h2 className="text-[22px] font-semibold">Your trip</h2>
                  <div className="pt-5">
                    <div className="space-y-1">
                      <h3 className="text-base">
                        <strong>Dates</strong>
                      </h3>
                      <p>{formatDateRange(checkin, checkout)}</p>
                    </div>
                  </div>
                  <Separator className="my-8" />
                  <div className="hidden md:block">
                    <SignedOut>
                      <h2 className="text-[22px] font-semibold">
                        Log in or sign up to book
                      </h2>
                      <div className="pt-6">
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
                <div>
                  <div className="sticky top-[calc(var(--site-header-height)_+_160px)] rounded-xl md:border md:p-6">
                    <div className="grid grid-cols-[100px_1fr] gap-x-5">
                      <div className="relative aspect-square w-[100px] shrink-0">
                        <CldImage
                          src={car.image_url}
                          alt={car.name}
                          className="shrink-0 rounded-xl object-cover"
                          fill
                          sizes="200px"
                          priority
                        />
                      </div>
                      <div className="flex flex-col gap-1 text-balance capitalize">
                        <strong className="font-medium leading-6">
                          {car.name}
                        </strong>
                        <span className="text-[14px] leading-5">
                          {car.transmission}
                        </span>
                        <span className="text-[14px] leading-5">
                          {car.powertrain}
                        </span>
                        <div className="flex flex-row items-center gap-0.5 text-[15px]">
                          <FilledStarIcon className="size-3 shrink-0" />
                          <strong className="font-medium tabular-nums">
                            {car.rating}
                          </strong>
                          <span className="text-[14px]">
                            ({car.review_count} reviews)
                          </span>
                        </div>
                      </div>
                    </div>
                    <Separator className="my-6" />
                    <div className="hidden md:block">
                      <h2 className="text-xl font-semibold">Your total</h2>
                      <div className="pt-5">
                        <div className="grid grid-cols-1 gap-3">
                          <div className="flex flex-row items-center justify-between text-[15px]">
                            <span>{days} days</span>
                            <span>
                              {formatCurrency(subtotal, car.currency)}
                            </span>
                          </div>
                          <div className="flex flex-row items-center justify-between text-[15px]">
                            <span>Taxes</span>
                            <span>
                              {formatCurrency(taxesAndFees, car.currency)}
                            </span>
                          </div>
                          <Separator className="my-4" />
                          <div className="flex flex-row items-center justify-between">
                            <strong>Total ({car.currency})</strong>
                            <strong>
                              {formatCurrency(
                                subtotal + taxesAndFees,
                                car.currency
                              )}
                            </strong>
                          </div>
                        </div>
                      </div>
                      {/* <div>
                        <h2 className="text-xl font-semibold">Your total</h2>
                        <div className="flex flex-col gap-y-3 pt-6 text-neutral-700">
                          <div className="flex items-center justify-between">
                            <span>{days} days</span>
                            <span>
                              {formatCurrency(subtotal, car.currency)}
                            </span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span>Taxes</span>
                            <span>
                              {formatCurrency(taxesAndFees, car.currency)}
                            </span>
                          </div>
                        </div>
                      </div>
                      <Separator className="my-6" />
                      <div className="flex items-center justify-between font-semibold">
                        <span>Total ({car.currency})</span>
                        <span>
                          {formatCurrency(
                            subtotal + taxesAndFees,
                            car.currency
                          )}
                        </span>
                      </div> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
