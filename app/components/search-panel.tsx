"use client"

import { useEffect, useState } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { Location } from "@/db/definitions"
import { addDays, format, isBefore } from "date-fns"

import { CheckIcon } from "@/app/components/icons/check"
import { SearchIcon } from "@/app/components/icons/search"
import { SelectorIcon } from "@/app/components/icons/selector"
import { Button } from "@/app/components/ui/button"
import { Calendar } from "@/app/components/ui/calendar"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/app/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/app/components/ui/popover"
import { Separator } from "@/app/components/ui/separator"
import { SearchParams } from "@/app/lib/types"
import { buildUrlWithQueryParams, cn } from "@/app/lib/utils"

export function SearchPanel({ locations }: { locations: Location[] }) {
  const { push } = useRouter()
  const searchParams = useSearchParams()

  const [open, setOpen] = useState(false)
  const [location, setLocation] = useState("")

  const [checkInDate, setCheckInDate] = useState<Date>()
  const [checkOutDate, setCheckOutDate] = useState<Date>()

  useEffect(() => {
    const locationParam = searchParams.get(SearchParams.LOCATION)
    const checkinParam = searchParams.get(SearchParams.CHECKIN)
    const checkoutParam = searchParams.get(SearchParams.CHECKOUT)

    if (locationParam) setLocation(locationParam)

    const checkInDate = checkinParam ? new Date(checkinParam) : undefined
    const checkOutDate = checkoutParam ? new Date(checkoutParam) : undefined

    if (checkInDate && checkOutDate) {
      // Only set the dates if the check-in date is before the check-out date
      if (isBefore(checkInDate, checkOutDate)) {
        setCheckInDate(checkInDate)
        setCheckOutDate(checkOutDate)
      }
    } else {
      // Set individual dates if they exist
      if (checkInDate) setCheckInDate(checkInDate)
      if (checkOutDate) setCheckOutDate(checkOutDate)
    }

    return () => {
      setLocation("")
      setCheckInDate(undefined)
      setCheckOutDate(undefined)
    }
  }, [searchParams])

  function submitForm(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    if (!location && !checkInDate && !checkOutDate) {
      return
    }

    const newParams = new URLSearchParams(searchParams.toString())

    newParams.delete(SearchParams.LOCATION)
    newParams.delete(SearchParams.CHECKIN)
    newParams.delete(SearchParams.CHECKOUT)

    if (location) {
      newParams.set(SearchParams.LOCATION, location)

      const currentLocation = locations.find((loc) => loc.slug === location)
      if (currentLocation) {
        newParams.set(SearchParams.LAT, currentLocation.latitude.toString())
        newParams.set(SearchParams.LNG, currentLocation.longitude.toString())
      }
    }

    const checkinISOString = checkInDate?.toISOString()
    if (checkinISOString) newParams.set(SearchParams.CHECKIN, checkinISOString)

    const checkoutISOString = checkOutDate?.toISOString()
    if (checkoutISOString)
      newParams.set(SearchParams.CHECKOUT, checkoutISOString)

    push(buildUrlWithQueryParams("/cars", newParams))
  }

  return (
    <form onSubmit={submitForm} className="w-full">
      <div className="whitespace-nowrap rounded-full border border-black/10 bg-white text-black shadow-lg shadow-neutral-900/5 transition-shadow hover:shadow hover:shadow-neutral-900/5">
        <div className="relative grid h-[var(--search-panel-height)] w-full grid-cols-1 items-center">
          <div className="grid h-full grid-cols-[33.333333%_33.333333%_33.333333%] items-center justify-center">
            <div className="relative h-full">
              <Separator
                orientation="vertical"
                className="absolute inset-y-0 right-0 m-auto h-6 shrink-0"
              />
              <div className="flex size-full items-center justify-center px-0">
                <Popover open={open} onOpenChange={setOpen}>
                  <PopoverTrigger asChild>
                    <Button
                      variant="ghost"
                      role="combobox"
                      aria-expanded={open}
                      className="size-full flex-col overflow-hidden rounded-full border-none px-5 py-0 focus-visible:z-10"
                    >
                      <div className="flex size-full items-center justify-between">
                        <div className="flex size-full flex-col items-start justify-center truncate">
                          <div className="text-[13px] font-bold">
                            Pick-up / Drop-off
                          </div>
                          {location ? (
                            <p className="truncate font-semibold text-neutral-800">
                              {
                                locations.find((loc) => loc.slug === location)
                                  ?.name
                              }
                            </p>
                          ) : (
                            <div className="text-neutral-500">
                              Select location
                            </div>
                          )}
                        </div>
                        <SelectorIcon className="-mr-2 ml-2  size-5 shrink-0 opacity-50" />
                      </div>
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="p-0">
                    <Command>
                      <CommandInput placeholder="Search location..." />
                      <CommandList>
                        <CommandEmpty>No location found.</CommandEmpty>
                        <CommandGroup>
                          {locations.map((loc) => (
                            <CommandItem
                              key={loc.id}
                              value={loc.slug}
                              onSelect={(currentValue) => {
                                setLocation(
                                  currentValue === location ? "" : currentValue
                                )
                                setOpen(false)
                              }}
                            >
                              <CheckIcon
                                className={cn(
                                  "mr-2 size-4 shrink-0",
                                  location === loc.slug
                                    ? "opacity-100"
                                    : "opacity-0"
                                )}
                              />
                              {loc.name}
                            </CommandItem>
                          ))}
                        </CommandGroup>
                      </CommandList>
                    </Command>
                  </PopoverContent>
                </Popover>
              </div>
            </div>
            <div className="relative h-full">
              <Separator
                orientation="vertical"
                className="absolute inset-y-0 right-0 m-auto h-6 shrink-0"
              />
              <div className="flex size-full items-center justify-center px-0">
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant={"ghost"}
                      className="size-full flex-col overflow-hidden rounded-full border-none px-5 py-0 focus-visible:z-10"
                    >
                      <div className="flex size-full flex-col items-start justify-center truncate">
                        <div className="text-[13px] font-bold">Check in</div>
                        {checkInDate ? (
                          <div className="font-semibold text-neutral-800">
                            {format(checkInDate, "LLL dd, y")}
                          </div>
                        ) : (
                          <div className="truncate text-neutral-500">
                            Pick a date
                          </div>
                        )}
                      </div>
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar
                      mode="single"
                      selected={checkInDate}
                      onSelect={setCheckInDate}
                      initialFocus
                      disabled={(date) => date <= addDays(new Date(), 1)}
                    />
                  </PopoverContent>
                </Popover>
              </div>
            </div>
            <div className="h-full">
              <div className="flex size-full items-center justify-center px-0">
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant={"ghost"}
                      className="size-full flex-col overflow-hidden rounded-full border-none py-0 pl-5 pr-16 focus-visible:z-10"
                    >
                      <div className="flex size-full flex-col items-start justify-center truncate">
                        <div className="text-[13px] font-bold">Check out</div>
                        {checkOutDate ? (
                          <div className="font-semibold text-neutral-800">
                            {format(checkOutDate, "LLL dd, y")}
                          </div>
                        ) : (
                          <div className="truncate text-neutral-500">
                            Pick a date
                          </div>
                        )}
                      </div>
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar
                      mode="single"
                      selected={checkOutDate}
                      onSelect={setCheckOutDate}
                      initialFocus
                      disabled={(date) => date <= addDays(new Date(), 1)}
                    />
                  </PopoverContent>
                </Popover>
              </div>
            </div>
          </div>
          <div className="absolute right-2 z-20">
            <Button
              type="submit"
              className="flex size-[calc(var(--search-panel-height)_-_1.25rem)] shrink-0 items-center justify-center rounded-full bg-black text-white"
            >
              <span className="sr-only">Search</span>
              <SearchIcon className="size-[calc((var(--search-panel-height)_-_1.25rem)/2.66)] shrink-0 [stroke-width:3px]" />
            </Button>
          </div>
        </div>
      </div>
    </form>
  )
}
