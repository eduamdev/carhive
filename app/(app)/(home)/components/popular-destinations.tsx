import Image from "next/image"
import Link from "next/link"
import { locationsWithImages } from "@/data/locations-with-images"

import { SearchParams } from "@/lib/types"
import { formatAmountForDisplay } from "@/lib/utils"
import { Button } from "@/components/ui/button"

export function PopularDestinations() {
  const featuredLocations = locationsWithImages.filter(
    (location) => location.featured === true
  )

  return (
    <section>
      <div className="mx-auto w-full max-w-none px-5 sm:max-w-[90%] sm:px-0 2xl:max-w-8xl">
        <h2 className="text-balance text-[19px] font-bold sm:text-[21px] lg:text-[23px]">
          Where to Rent Next
        </h2>
        <div className="pt-6">
          <div className="group grid grid-cols-2 gap-x-5 gap-y-7 sm:grid-cols-3 sm:gap-x-6 sm:gap-y-8 md:grid-cols-5 [&_a:hover_~_*_img]:!opacity-100">
            {featuredLocations.map(
              (
                {
                  id,
                  slug,
                  imageUrl,
                  latitude,
                  longitude,
                  name,
                  startingPrice,
                },
                index
              ) => (
                <article
                  key={id}
                  className={`relative ${index === featuredLocations.length - 1 ? "md:hidden" : ""}`}
                >
                  <Button
                    variant={"link"}
                    className="m-0 flex size-full p-0"
                    asChild
                  >
                    <Link
                      href={{
                        pathname: "/cars",
                        query: {
                          [SearchParams.LOCATION]: slug,
                          [SearchParams.LAT]: latitude,
                          [SearchParams.LNG]: longitude,
                        },
                      }}
                      className="absolute left-0 top-0 z-10 size-full"
                    />
                  </Button>
                  <div className="relative aspect-square">
                    <Image
                      src={imageUrl}
                      alt={name}
                      quality={85}
                      priority
                      fill
                      sizes="(max-width: 550px) 50vw, (max-width: 950px) 33.33vw, 20vw"
                      className="rounded-xl object-cover transition-opacity group-hover:opacity-70"
                      placeholder="blur"
                    />
                  </div>
                  <div className="pt-3 sm:pt-3.5">
                    <h3 className="truncate text-[13px] font-semibold leading-[22px] text-neutral-950 sm:text-[14px] xl:text-[15px]">
                      {name}
                    </h3>
                    <p className="truncate text-[13px] leading-[21px] text-neutral-600 sm:text-[14px] sm:leading-[26px]">
                      Cars from{" "}
                      {formatAmountForDisplay(startingPrice, "usd", true)}+
                    </p>
                  </div>
                </article>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
