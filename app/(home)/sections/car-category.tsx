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

export function CarCategory() {
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
            Explore Our Car Categories
          </h2>
          <div className="pt-4 md:pt-5">
            <div className="relative">
              <div className="before:absolute before:-left-1 before:top-0 before:z-10 before:h-full before:w-[7%] before:bg-gradient-to-r before:from-white before:content-[''] lg:before:-left-20"></div>
              <Carousel>
                <CarouselContent>
                  {carCategories.map(({ id, slug, name, image_url }) => {
                    return (
                      <CarouselItem
                        key={id}
                        className="basis-1/2 sm:basis-1/3 md:basis-1/4 xl:basis-1/5"
                      >
                        <Link
                          href={{
                            pathname: '/cars',
                            query: {
                              [SearchParams.BODY_STYLE]: slug,
                            },
                          }}
                          className="relative block aspect-video w-full "
                        >
                          <span className="absolute left-2.5 top-2.5 z-10 inline-flex items-center justify-center rounded-2xl border border-neutral-200 bg-white px-2.5 py-1.5 text-[13px] font-semibold leading-none xl:left-3 xl:top-3 xl:text-sm">
                            {name}
                          </span>
                          <Image src={image_url} alt={name} priority fill />
                        </Link>
                      </CarouselItem>
                    );
                  })}
                </CarouselContent>
                <CarouselPrevious className="-left-4 z-20 lg:-left-12" />
                <CarouselNext className="-right-4 z-20 lg:-right-12" />
              </Carousel>
              <div className="after:absolute after:right-0 after:top-0 after:z-10 after:h-full after:w-[7%] after:bg-gradient-to-l after:from-white after:content-[''] lg:after:-right-12"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
