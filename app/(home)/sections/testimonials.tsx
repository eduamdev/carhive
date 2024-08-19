import Image from 'next/image';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/app/components/ui/carousel';
import { FilledStarIcon } from '@/app/components/icons/filled-star';

import alex from '../../../public/assets/avatars/alex.jpg';
import david from '../../../public/assets/avatars/david.jpg';
import emily from '../../../public/assets/avatars/emily.jpg';
import james from '../../../public/assets/avatars/james.jpg';
import jennifer from '../../../public/assets/avatars/jennifer.jpg';
import mark from '../../../public/assets/avatars/mark.jpg';
import sarah from '../../../public/assets/avatars/sarah.jpg';

export function Testimonials() {
  const testimonials = [
    {
      id: 't01',
      name: 'Sarah J.',
      image_url: sarah,
      comment:
        "Absolutely seamless experience! Booking was quick, and the car was in perfect condition. I'll definitely use this service again.",
      rating: 5,
    },
    {
      id: 't02',
      name: 'Mark T.',
      image_url: mark,
      comment:
        'Great selection of vehicles and very affordable rates. The customer service team was incredibly helpful when I needed to make changes to my reservation.',
      rating: 5,
    },
    {
      id: 't03',
      name: 'James L.',
      image_url: james,
      comment:
        'The navigation tools were a lifesaver! They made it so easy to explore the city without getting lost. Highly recommended!',
      rating: 5,
    },
    {
      id: 't04',
      name: 'Alex P.',
      image_url: alex,
      comment:
        'Fantastic service! The car was clean, well-maintained, and the pickup process was a breeze. I’ll be using this service for all my future trips.',
      rating: 5,
    },
    {
      id: 't05',
      name: 'David S.',
      image_url: david,
      comment:
        'Great value for money! The booking process was quick, and the customer support was responsive. Overall, a very positive experience.',
      rating: 5,
    },
    {
      id: 't06',
      name: 'Jennifer K.',
      image_url: jennifer,
      comment:
        'The rental experience was smooth and hassle-free. The car was in great condition, and the rates were competitive. Would definitely recommend.',
      rating: 4,
    },
    {
      id: 't07',
      name: 'Emily R.',
      image_url: emily,
      comment:
        'I was a bit nervous about renting a car, but the process was so easy and transparent. I felt very secure with their insurance coverage.',
      rating: 4,
    },
  ];

  return (
    <section>
      <div className="pt-14">
        <div className="mx-auto max-w-none px-5 sm:max-w-[90%] sm:px-0 2xl:max-w-8xl">
          <h2 className="text-balance text-lg font-bold md:text-center md:text-xl lg:text-[22px]">
            What Our Customers Are Saying
          </h2>
          <div className="pt-4 md:pt-5">
            <div className="relative">
              <div className="before:absolute before:-left-1 before:top-0 before:z-10 before:h-full before:w-[7%] before:bg-gradient-to-r before:from-white before:content-[''] lg:before:-left-16 lg:before:w-[10%]"></div>
              <Carousel>
                <CarouselContent>
                  {testimonials.map(
                    ({ id, name, comment, image_url, rating }) => {
                      return (
                        <CarouselItem
                          key={id}
                          className="sm:basis-1/2 md:basis-1/3 xl:basis-1/4"
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
                                  className="size-[14px] text-yellow-500 md:size-4"
                                />
                              ))}
                            </div>
                            <div className="pt-4 lg:pt-5">
                              {/* Comment Section */}
                              <blockquote className="text-balance text-sm leading-6 text-neutral-600 lg:text-base lg:leading-[1.65rem]">
                                “{comment}”
                              </blockquote>
                            </div>
                            <div className="pt-5">
                              {/* Reviewer Information */}
                              <figcaption className="flex items-center gap-3">
                                <Image
                                  src={image_url}
                                  alt={name}
                                  className="size-[22px] rounded-full border bg-white object-cover lg:size-7"
                                />
                                <div>
                                  <p className="text-[13px] font-medium text-neutral-700 md:text-sm">
                                    {name}
                                  </p>
                                </div>
                              </figcaption>
                            </div>
                          </figure>
                        </CarouselItem>
                      );
                    },
                  )}
                </CarouselContent>
                <CarouselPrevious className="-left-4 z-20 lg:-left-12" />
                <CarouselNext className="-right-4 z-20 lg:-right-12" />
              </Carousel>
              <div className="after:absolute after:right-0 after:top-0 after:z-10 after:h-full after:w-[7%] after:bg-gradient-to-l after:from-white after:content-[''] lg:after:-right-12 lg:after:w-[9%]"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
