import Link from 'next/link';
import Image from 'next/image';
import { SearchParams } from '@/app/lib/types';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/app/components/ui/carousel';

import hatchback from '../../../public/assets/car-types/hatchback.jpg';
import minivan from '../../../public/assets/car-types/minivan.jpg';
import pickupTruck from '../../../public/assets/car-types/pickup-truck.jpg';
import sedan from '../../../public/assets/car-types/sedan.jpg';
import sportsCar from '../../../public/assets/car-types/sports-car.jpg';
import suv from '../../../public/assets/car-types/suv.jpg';

export function BrowseCarTypes() {
  const carCategories = [
    {
      id: 'hatchback',
      slug: 'hatchback',
      name: 'Hatchback',
      image_url: hatchback,
    },
    {
      id: 'minivan',
      slug: 'minivan',
      name: 'Minivan',
      image_url: minivan,
    },
    {
      id: 'sports-car',
      slug: 'sports-car',
      name: 'Sports Car',
      image_url: sportsCar,
    },
    {
      id: 'pickup-truck',
      slug: 'pickup-truck',
      name: 'Pickup Truck',
      image_url: pickupTruck,
    },
    {
      id: 'suv',
      slug: 'suv',
      name: 'SUV',
      image_url: suv,
    },
    {
      id: 'sedan',
      slug: 'sedan',
      name: 'Sedan',
      image_url: sedan,
    },
  ];

  return (
    <section>
      <div className="pt-8">
        <div className="mx-auto w-full max-w-none px-5 sm:max-w-[90%] sm:px-0 2xl:max-w-8xl">
          <h2 className="text-balance text-lg font-bold md:text-xl lg:text-[22px]">
            Choose Your Ideal Ride
          </h2>
          <div className="pt-4 md:pt-5">
            <div className="relative">
              <div className="before:pointer-events-none before:absolute before:-left-1 before:top-0 before:z-10 before:h-full before:w-[7%] before:bg-gradient-to-r before:from-white before:content-[''] lg:before:-left-10"></div>
              <div className="after:pointer-events-none after:absolute after:right-0 after:top-0 after:z-10 after:h-full after:w-[7%] after:bg-gradient-to-l after:from-white after:content-[''] lg:after:-right-5"></div>
              <Carousel>
                <CarouselContent className="m-0 space-x-3 lg:space-x-4">
                  {carCategories.map(({ id, slug, name, image_url }) => {
                    return (
                      <CarouselItem
                        key={id}
                        className="basis-1/2 p-0 sm:basis-1/3 md:basis-1/4 xl:basis-1/5"
                      >
                        <div className="relative aspect-video">
                          {/* Keep the same border radius for Link and Image */}
                          <Link
                            href={{
                              pathname: '/cars',
                              query: {
                                [SearchParams.BODY_STYLE]: slug,
                              },
                            }}
                            className="absolute top-0 z-20 size-full rounded-xl border-2 border-transparent focus-visible:border-neutral-950 focus-visible:outline-none"
                          ></Link>
                          <span className="absolute left-2 top-2 z-10 inline-flex items-center justify-center rounded-2xl border border-neutral-200 bg-white px-2 py-1 text-[12px] font-semibold leading-none tracking-wide sm:px-3 sm:py-1.5 sm:text-[13px] md:left-2.5 md:top-2.5 md:tracking-normal xl:py-2 xl:text-[14px]">
                            {name}
                          </span>
                          <Image
                            src={image_url}
                            alt={name}
                            priority
                            fill
                            sizes="(max-width: 550px) 50vw, (max-width: 950px) 33vw, (max-width: 1280px) 25vw, 20vw"
                            className="rounded-xl"
                          />
                        </div>
                      </CarouselItem>
                    );
                  })}
                </CarouselContent>
                <CarouselPrevious className="-left-4 z-30 lg:-left-12" />
                <CarouselNext className="-right-4 z-30 lg:-right-12" />
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
