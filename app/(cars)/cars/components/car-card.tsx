import { CarDetailsButton } from './car-details-button';
import { FilledStarIcon } from '@/app/components/icons/filled-star';
import { getCarBySlug } from '@/db/queries';
import { formatCurrency } from '@/app/lib/utils';
import { CloudinaryImage } from '@/app/components/cloudinary-image';
import Image from 'next/image';
import { AutomaticGearboxIcon } from '@/app/components/icons/automatic-gearbox';
import { ManualGearboxIcon } from '@/app/components/icons/manual-gearbox';
import { UsersIcon } from '@/app/components/icons/users';
import { GasStationIcon } from '@/app/components/icons/gas-station';
import { ChargingPileIcon } from '@/app/components/icons/charging-pile';

interface CarCardProps {
  index: number;
  slug: string;
}

export async function CarCard({ index, slug }: CarCardProps) {
  const car = await getCarBySlug(slug);

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
  } = car;

  return (
    <article className="rounded-[10px] border border-black/[0.08] bg-white text-sm shadow-sm">
      <div className="p-5">
        <div className="flex items-center justify-between">
          <span className="font-semibold">{name}</span>
          <div className="inline-flex items-center justify-center gap-x-1">
            <FilledStarIcon className="inline size-3 shrink-0 " />
            <span className="leading-none">
              <span className="font-medium">{rating}</span>{' '}
              <span className="text-neutral-600">
                {reviews > 0 && `(${reviews})`}
              </span>
            </span>
          </div>
        </div>
      </div>

      <div className="relative aspect-video h-40 w-full">
        <Image
          src={`https://media.ford.com/content/dam/fordmedia/North%20America/US/product/2024/ranger/MediaDrive/RangerRaptor/2024%20Ford%20Ranger%20Raptor_14.jpg/jcr:content/renditions/cq5dam.web.881.495.jpeg`}
          alt=""
          fill
          className="object-cover"
          sizes="100vw"
        />
      </div>

      <div className="p-5">
        <div className="flex flex-row items-center justify-between gap-2">
          <div className="flex items-center">
            {engine_type.toLowerCase() === 'gas' ? (
              <GasStationIcon className="mr-1.5 inline size-[15px] shrink-0 text-neutral-600" />
            ) : (
              <ChargingPileIcon className="mr-1.5 inline size-[15px] shrink-0 text-neutral-600" />
            )}
            <span>{engine_type}</span>
          </div>
          <div className="flex items-center">
            <UsersIcon className="mr-1.5 inline size-[15px] shrink-0 text-neutral-600" />
            <span>{seats}</span>
          </div>
          <div className="flex items-center">
            {transmission.toLowerCase() === 'automatic' ? (
              <AutomaticGearboxIcon className="mr-1.5 inline size-[15px] shrink-0 text-neutral-600" />
            ) : (
              <ManualGearboxIcon className="mr-1.5 inline size-[15px] shrink-0 text-neutral-600" />
            )}
            <span>{transmission}</span>
          </div>
        </div>
        <div className="pt-3">
          {discounted_price_per_day ? (
            <>
              <span className="mr-1.5 text-[13px] leading-none text-neutral-500 line-through">
                {formatCurrency(retail_price_per_day, retail_price_currency)}
              </span>
              <span className="font-medium tabular-nums leading-none">
                {formatCurrency(
                  discounted_price_per_day,
                  discounted_price_currency,
                )}
              </span>
            </>
          ) : (
            <span className="font-medium tabular-nums leading-none">
              {formatCurrency(retail_price_per_day, retail_price_currency)}
            </span>
          )}
          <span className="ml-1 leading-none">day</span>
        </div>
        <div className="pt-5">
          <CarDetailsButton slug={slug} />
        </div>
      </div>
    </article>
  );
}
