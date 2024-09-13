import Image from "next/image"
import Link from "next/link"
import { carTypes } from "@/data/car-types"

import { SearchParams } from "@/lib/types"
import { Button } from "@/components/ui/button"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export function BrowseCarTypes() {
  return (
    <section>
      <div className="mx-auto w-full max-w-none px-5 sm:max-w-[90%] sm:px-0 2xl:max-w-8xl">
        <h2 className="text-balance text-[19px] font-bold sm:text-[21px] lg:text-[23px]">
          Pick Your Perfect Match
        </h2>
        <div className="pt-6">
          <div className="relative">
            <div className="before:pointer-events-none before:absolute before:-left-1 before:top-0 before:z-10 before:h-full before:w-[7%] before:bg-gradient-to-r before:from-white before:content-[''] lg:before:-left-10"></div>
            <div className="after:pointer-events-none after:absolute after:right-0 after:top-0 after:z-10 after:h-full after:w-[7%] after:bg-gradient-to-l after:from-white after:content-[''] lg:after:-right-5"></div>
            <Carousel>
              <CarouselContent className="m-0 space-x-3 sm:space-x-4">
                {carTypes.map(({ id, slug, name, imageUrl }) => {
                  return (
                    <CarouselItem
                      key={id}
                      className="relative basis-1/2 p-0 sm:basis-1/3 md:basis-1/4 xl:basis-1/5"
                    >
                      <Button
                        variant={"link"}
                        className="m-0 flex size-full p-0 ring-inset"
                        asChild
                      >
                        <Link
                          href={{
                            pathname: "/cars",
                            query: {
                              [SearchParams.BODY_STYLE]: slug,
                            },
                          }}
                          className="absolute inset-0 z-20 size-full rounded-xl"
                        />
                      </Button>
                      <div className="relative aspect-video">
                        <span className="absolute left-2 top-2 z-10 inline-flex items-center justify-center rounded-2xl border border-neutral-200 bg-white px-2 py-1 text-[12px] font-semibold leading-none tracking-wide sm:px-3 sm:py-1.5 sm:text-[13px] md:left-2.5 md:top-2.5 md:tracking-normal lg:py-2 lg:text-[14px]">
                          {name}
                        </span>
                        <Image
                          src={imageUrl}
                          alt={name}
                          priority
                          fill
                          sizes="(max-width: 550px) 50vw, (max-width: 950px) 33vw, (max-width: 1280px) 25vw, 20vw"
                          className="rounded-xl object-cover"
                          placeholder="blur"
                        />
                      </div>
                    </CarouselItem>
                  )
                })}
              </CarouselContent>
              <CarouselPrevious className="-left-4 z-30 lg:-left-12" />
              <CarouselNext className="-right-4 z-30 lg:-right-12" />
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  )
}
