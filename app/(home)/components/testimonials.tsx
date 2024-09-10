import Image from "next/image"
import { testimonials } from "@/data/testimonials"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { FilledStarIcon } from "@/components/icons/filled-star"

export function Testimonials() {
  return (
    <section>
      <div className="mx-auto max-w-none px-5 sm:max-w-[90%] sm:px-0 2xl:max-w-8xl">
        <h2 className="text-balance text-[19px] font-bold sm:text-[21px] lg:text-[23px] xl:text-center">
          What Our Customers Are Saying
        </h2>
        <div className="pt-6 lg:pt-8">
          <div className="relative">
            <div className="before:absolute before:-left-1 before:top-0 before:z-10 before:h-full before:w-[7%] before:bg-gradient-to-r before:from-white before:content-[''] lg:before:-left-16 lg:before:w-[10%]"></div>
            <Carousel>
              <CarouselContent className="m-0 space-x-4 lg:space-x-6">
                {testimonials.map(({ id, name, comment, imageUrl, rating }) => {
                  return (
                    <CarouselItem
                      key={id}
                      className="p-0 sm:basis-1/2 md:basis-1/3 xl:basis-1/4"
                    >
                      <figure className="rounded-2xl bg-neutral-50 p-8">
                        {/* Rating Section */}
                        <div
                          className="flex items-center"
                          aria-label={`Rating: ${rating} out of 5`}
                        >
                          {[...Array(rating)].map((_, index) => (
                            <FilledStarIcon
                              key={index}
                              className="size-[15px] text-yellow-500"
                            />
                          ))}
                        </div>
                        <div className="pt-4">
                          {/* Comment Section */}
                          <blockquote className="text-balance text-[14px] leading-[23px] text-neutral-600 sm:text-[15px] sm:leading-normal md:leading-[26px] lg:text-[16px]">
                            “{comment}”
                          </blockquote>
                        </div>
                        <div className="pt-8">
                          {/* Reviewer Information */}
                          <figcaption className="flex items-center gap-2.5">
                            <Image
                              src={imageUrl}
                              alt={name}
                              className="size-6 shrink-0 rounded-full object-cover"
                            />
                            <p className="text-[13px] font-medium text-neutral-700 xl:text-[14px]">
                              {name}
                            </p>
                          </figcaption>
                        </div>
                      </figure>
                    </CarouselItem>
                  )
                })}
              </CarouselContent>
              <CarouselPrevious className="-left-4 z-20 lg:-left-12" />
              <CarouselNext className="-right-4 z-20 lg:-right-12" />
            </Carousel>
            <div className="after:absolute after:right-0 after:top-0 after:z-10 after:h-full after:w-[7%] after:bg-gradient-to-l after:from-white after:content-[''] lg:after:-right-12 lg:after:w-[9%]"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
