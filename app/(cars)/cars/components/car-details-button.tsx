"use client"

import Link from "next/link"
import { useSearchParams } from "next/navigation"

import { Button } from "@/app/components/ui/button"
import { SearchParams } from "@/app/lib/types"
import { createUrl } from "@/app/lib/utils"

export function CarDetailsButton({ slug }: { slug: string }) {
  const searchParams = useSearchParams()
  const newParams = new URLSearchParams(searchParams.toString())

  const location = searchParams.get(SearchParams.LOCATION)
  const checkin = searchParams.get(SearchParams.CHECKIN)
  const checkout = searchParams.get(SearchParams.CHECKOUT)

  if (location) newParams.set(SearchParams.LOCATION, location)
  if (checkin) newParams.set(SearchParams.CHECKIN, checkin)
  if (checkout) newParams.set(SearchParams.CHECKOUT, checkout)

  const href = createUrl(`/cars/${slug}`, newParams)

  return (
    <Button
      variant={"outline"}
      className="h-9 w-full hover:border-transparent hover:bg-neutral-900 hover:text-white"
      asChild
    >
      <Link href={href}>View Details</Link>
    </Button>
  )
}
