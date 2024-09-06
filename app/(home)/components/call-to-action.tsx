import Link from "next/link"

import { Button } from "@/components/ui/button"

export function CallToAction() {
  return (
    <section>
      <div className="mx-auto max-w-none px-5 sm:max-w-[90%] sm:px-0 lg:max-w-4xl">
        <div className="flex flex-col items-start justify-between gap-5 sm:flex-row sm:items-end">
          <h2 className="whitespace-nowrap text-balance text-[25px] font-bold leading-9 tracking-[-0.6px] md:text-[28px]">
            Ready to Hit the Road? <br />
            Start Your Adventure Today!
          </h2>
          <div className="flex justify-start md:justify-end">
            <Button className="rounded-[10px] px-4 py-0 text-[14px]" asChild>
              <Link href={"/cars"}>Explore Our Cars</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
