import Link from 'next/link';
import { Icons } from '@/components/icons';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

interface CarCardProps {
  title: string;
  rating: number;
  reviews: number;
  unlimitedMileage: boolean;
  image: {
    src: string;
    alt: string;
  };
  transmission: string;
  capacity: {
    seats: number;
    bags: number;
  };
  price: {
    previousPrice: string;
    discountedPrice: string;
    currency: string;
  };
}

export function CarCard({
  title,
  rating,
  reviews,
  unlimitedMileage,
  image,
  transmission,
  capacity,
  price,
}: CarCardProps) {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-baseline justify-between gap-x-6 whitespace-nowrap">
          <CardTitle className="inline-block max-w-full overflow-hidden overflow-ellipsis text-left text-base font-bold">
            {title}
          </CardTitle>
          <div className="text-right">
            <div className="mt-1 flex items-baseline gap-1.5">
              <Icons.star className="h-[13px] w-[13px]" />
              <span className="text-sm font-medium leading-none text-neutral-600">
                {rating} ({reviews})
              </span>
            </div>
          </div>
        </div>
        {unlimitedMileage && (
          <div className="flex items-center justify-start text-sm leading-none text-neutral-600">
            <Icons.speedometer className="mr-2 inline-block h-[14px] w-[14px]" />
            Unlimited mileage
          </div>
        )}
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-center">
          <img
            src={image.src}
            alt={image.alt}
            className="h-20 object-cover object-center"
          />
        </div>
        <div className="mt-6 flex items-center justify-evenly gap-x-2">
          <p className="text-sm text-neutral-600">{transmission}</p>
          <Separator orientation="vertical" decorative className="h-4" />
          <p className="text-sm text-neutral-600">
            <span className="leading-none">{capacity.seats}</span> Seats
          </p>
          <Separator orientation="vertical" decorative className="h-4" />
          <p className="text-sm text-neutral-600">
            <span className="leading-none">{capacity.bags}</span> Bags
          </p>
        </div>
        <div className="mt-3 text-base">
          <span className="mr-2 leading-none text-neutral-500 line-through">
            {price.previousPrice}
          </span>
          <span className="mr-1 font-bold leading-none">
            {price.discountedPrice} {price.currency}
          </span>
          <span className="text-sm font-normal leading-none text-neutral-700">
            day
          </span>
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full" asChild>
          <Link href="/car">View details</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
