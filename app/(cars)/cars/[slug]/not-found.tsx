import Link from "next/link"

import { Button } from "@/components/ui/button"
import { CaretRightIcon } from "@/components/icons/caret-right"

export default function NotFound() {
  return (
    <div className="mx-auto w-full max-w-none px-5 sm:max-w-[90%] sm:px-0 xl:max-w-6xl">
      <div className="flex h-full flex-col items-center justify-center gap-4 py-52">
        <h2 className="text-center text-2xl font-bold">404 - Car Not Found</h2>
        <p className="mb-4 max-w-prose text-center text-neutral-600">
          The car you&apos;re looking for seems to have taken a detour. No
          worries, though! We have a wide selection of vehicles waiting just for
          you.
        </p>
        <Button size="lg" asChild>
          <Link href="/cars">
            <span className="flex items-center justify-center text-[15px]">
              Explore Cars
              <CaretRightIcon className="ml-2 size-[14px] shrink-0 opacity-60" />
            </span>
          </Link>
        </Button>
      </div>
    </div>
  )
}
