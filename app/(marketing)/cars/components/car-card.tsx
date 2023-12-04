import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/app/components/ui/card';
import { CarDetailsButton } from './car-details-button';
import { Separator } from '@/app/components/ui/separator';
import { Icons } from '@/app/components/icons';
import { fetchCarBySlug } from '@/db/queries';
import { cn, formatCurrency } from '@/app/lib/utils';
import CldImage from '@/app/components/cld-image';

interface CarCardProps {
  index: number;
  slug: string;
}

export async function CarCard({ index, slug }: CarCardProps) {
  const car = await fetchCarBySlug(slug);

  if (!car) {
    return null;
  }

  const {
    name,
    image_url,
    transmission,
    engine_type,
    seats,
    discounted_price_per_day,
    discounted_price_currency,
    retail_price_per_day,
    retail_price_currency,
    rating,
    reviews,
    unlimited_mileage,
  } = car;

  return (
    <Card>
      <CardHeader>
        <div className="flex items-baseline justify-between gap-x-2 whitespace-nowrap">
          <CardTitle className="inline-block max-w-full overflow-hidden text-ellipsis text-left text-[15px] font-semibold">
            {name}
          </CardTitle>
          <div className="text-right">
            <div className="flex items-baseline gap-1">
              <Icons.star className="h-[14px] w-[14px] self-center" />
              <span className="text-sm font-medium leading-none text-neutral-600">
                {rating} {reviews > 0 && `(${reviews})`}
              </span>
            </div>
          </div>
        </div>
        <div
          className={cn(
            'flex items-center justify-start text-[13px] leading-none text-neutral-600',
            !unlimited_mileage && 'invisible',
          )}
        >
          <Icons.speedometer className="mr-1.5 inline-block h-4 w-4" />
          Unlimited mileage
        </div>
      </CardHeader>
      <CardContent>
        <div className="mt-4 flex items-center justify-center">
          <CldImage
            src={image_url}
            alt={name}
            height={80}
            width={142}
            priority={index < 8}
          />
        </div>
        <div className="mt-8 flex items-center justify-between gap-x-2">
          <p className="text-sm text-neutral-600">{transmission}</p>
          <Separator orientation="vertical" decorative className="h-4" />
          <p className="text-sm text-neutral-600">
            <span className="leading-none">{engine_type}</span>
          </p>
          <Separator orientation="vertical" decorative className="h-4" />
          <p className="text-sm text-neutral-600">
            <span className="leading-none">{seats}</span> Seats
          </p>
        </div>
        <div className="mt-3 text-base">
          {discounted_price_per_day ? (
            <>
              <span className="mr-1.5 leading-none text-neutral-500 line-through">
                {retail_price_per_day}
              </span>
              <span className="font-semibold leading-none">
                {formatCurrency(
                  discounted_price_per_day,
                  discounted_price_currency,
                )}
              </span>
            </>
          ) : (
            <span className=" font-semibold leading-none">
              {formatCurrency(retail_price_per_day, retail_price_currency)}
            </span>
          )}
          <span className="ml-1.5 text-[15px] font-medium leading-none text-neutral-700">
            day
          </span>
        </div>
      </CardContent>
      <CardFooter>
        <CarDetailsButton slug={slug} />
      </CardFooter>
    </Card>
  );
}
