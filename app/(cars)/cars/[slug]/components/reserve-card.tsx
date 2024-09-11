"use client"

import { useEffect, useState } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { SelectCar } from "@/db/schema"
import { addDays, differenceInDays, format, isBefore, parseISO } from "date-fns"
import { DateRange } from "react-day-picker"

import { SearchParams } from "@/lib/types"
import { cn, constructUrlWithParams, formatAmountForDisplay } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

interface ReserveCardProps {
  car: SelectCar
}

export function ReserveCard({ car }: ReserveCardProps) {
  const { push } = useRouter()
  const searchParams = useSearchParams()
  const [date, setDate] = useState<DateRange | undefined>(undefined)

  useEffect(() => {
    const checkinParam = searchParams.get(SearchParams.CHECKIN)
    const checkoutParam = searchParams.get(SearchParams.CHECKOUT)

    const checkinDate = checkinParam ? parseISO(checkinParam) : undefined
    const checkoutDate = checkoutParam ? parseISO(checkoutParam) : undefined

    if (checkinDate && checkoutDate) {
      // Ensure check-in date is before the check-out date
      if (isBefore(checkinDate, checkoutDate)) {
        setDate({ from: checkinDate, to: checkoutDate })
      } else {
        setDate(undefined)
      }
    } else if (checkinDate || checkoutDate) {
      // Set date if only one is provided
      setDate({
        from: checkinDate,
        to: checkoutDate,
      })
    } else {
      setDate(undefined) // No valid dates provided, reset date
    }

    return () => {
      setDate(undefined)
    }
  }, [searchParams])

  const handleClick = () => {
    const newParams = new URLSearchParams(searchParams.toString())

    if (date?.from) {
      newParams.set(SearchParams.CHECKIN, date?.from.toISOString())
    }
    if (date?.to) {
      newParams.set(SearchParams.CHECKOUT, date?.to.toISOString())
    }

    push(constructUrlWithParams(`/reservation/cars/${car.slug}`, newParams))
  }

  return (
    <div className="rounded-xl border shadow-[0_6px_16px_rgba(0,0,0,0.12)]">
      <div className="p-6">
        {date?.from !== undefined && date?.to !== undefined ? (
          <>
            <span className="block text-xl font-semibold tabular-nums">
              {differenceInDays(date.to, date.from) > 0
                ? formatAmountForDisplay(
                    Number(car.pricePerDay) *
                      differenceInDays(date.to, date.from),
                    car.currency
                  )
                : formatAmountForDisplay(Number(car.pricePerDay), car.currency)}
            </span>
            <span className="text-[14px] text-neutral-800">
              Total before taxes
            </span>
          </>
        ) : (
          <span className="text-xl font-medium">Add dates for prices</span>
        )}
        <div className="pt-6">
          <div className={"grid gap-2"}>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  id="date"
                  variant={"outline"}
                  className={cn(
                    "h-auto w-full justify-start border-neutral-400 p-0 text-left font-normal",
                    !date && "text-muted-foreground"
                  )}
                >
                  <div className="grid w-full grid-cols-2">
                    <div className="flex flex-col border-r border-neutral-400 px-3 py-2">
                      <span className="text-[13px] font-medium text-black">
                        Check in
                      </span>
                      {date?.from ? (
                        <span>{format(date.from, "dd/MM/yyyy")}</span>
                      ) : (
                        <span className="text-neutral-600">Add date</span>
                      )}
                    </div>
                    <div className="flex flex-col px-3 py-2">
                      <span className="text-[13px] font-medium text-black">
                        Check out
                      </span>
                      {date?.to ? (
                        <span>{format(date.to, "dd/MM/yyyy")}</span>
                      ) : (
                        <span className="text-neutral-600">Add date</span>
                      )}
                    </div>
                  </div>
                </Button>
              </PopoverTrigger>
              <PopoverContent
                collisionPadding={20}
                className="w-auto p-0"
                align="start"
              >
                <Calendar
                  initialFocus
                  mode="range"
                  defaultMonth={date?.from}
                  selected={date}
                  onSelect={setDate}
                  numberOfMonths={2}
                  disabled={(date) => date <= addDays(new Date(), 1)}
                />
              </PopoverContent>
            </Popover>
          </div>
        </div>
        <div className="pt-6">
          <Button
            size={"lg"}
            className="w-full text-[15px]"
            disabled={date?.from === undefined || date?.to === undefined}
            onClick={handleClick}
          >
            Reserve
          </Button>
        </div>
        {date?.from !== undefined && date?.to !== undefined && (
          <div className="pt-4">
            <p className="text-center text-sm text-neutral-600">
              You won&apos;t be charged yet
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
