import Link from 'next/link';

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Icons } from '@/components/icons';
import { ICar } from '@/types/car';
import { cn } from '@/lib/utils';

interface CarCardProps {
  car: ICar;
}

export function CarCard({ car }: CarCardProps) {
  const {
    slug,
    title,
    image,
    specs,
    price,
    rating,
    reviews,
    unlimitedMileage,
  } = car;
  return (
    <Card>
      <CardHeader>
        <div className="flex items-baseline justify-between gap-x-2 whitespace-nowrap">
          <CardTitle className="inline-block max-w-full overflow-hidden text-ellipsis text-left text-[15px] font-semibold">
            {title}
          </CardTitle>
          <div className="text-right">
            <div className="flex items-baseline gap-1">
              <Icons.star className="h-[14px] w-[14px] self-center" />
              <span className="text-sm font-medium leading-none text-neutral-600">
                {rating} {reviews && `(${reviews})`}
              </span>
            </div>
          </div>
        </div>
        <div
          className={cn(
            'flex items-center justify-start text-[13px] leading-none text-neutral-600',
            !unlimitedMileage && 'invisible',
          )}
        >
          <Icons.speedometer className="mr-1.5 inline-block h-4 w-4" />
          Unlimited mileage
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-center">
          <img
            src={image.src}
            alt={image.alt}
            className="h-20 object-cover object-center"
          />
        </div>
        <div className="mt-6 flex items-center justify-between gap-x-2">
          <p className="text-[15px] text-neutral-600">{specs.transmission}</p>
          <Separator orientation="vertical" decorative className="h-4" />
          <p className="text-[15px] text-neutral-600">
            <span className="leading-none">{specs.engineType}</span>
          </p>
          <Separator orientation="vertical" decorative className="h-4" />
          <p className="text-[15px] text-neutral-600">
            <span className="leading-none">{specs.capacity.seats}</span> Seats
          </p>
        </div>
        <div className="mt-3 text-base">
          {price.perDay.discount?.amount ? (
            <>
              <span className="mr-1.5 leading-none text-neutral-500 line-through">
                {price.perDay.retail.amount}
              </span>
              <span className="font-semibold leading-none">
                {price.perDay.discount.amount} {price.perDay.discount.currency}
              </span>
            </>
          ) : (
            <span className=" font-semibold leading-none">
              {price.perDay.retail.amount} {price.perDay.retail.currency}
            </span>
          )}
          <span className="ml-1.5 text-[15px] font-medium leading-none text-neutral-700">
            day
          </span>
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full" asChild>
          <Link href={`/car/${slug}`}>View details</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
