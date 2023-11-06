import Image from 'next/image';
import { Icons } from '@/components/icons';
import { Car } from '@/db/definitions';

interface CarOverviewProps {
  car: Car;
}

export function CarOverview({ car }: CarOverviewProps) {
  return (
    <div className="p-6 px-0 pb-0 md:pb-0 md:pr-6">
      <div className="grid grid-cols-[1fr_auto] justify-between">
        <div className="flex flex-col">
          <h1 className="text-xl font-bold">{car.name}</h1>
          <div className="mt-2 flex flex-wrap items-center gap-1.5 text-[13px] text-neutral-800 lg:text-base">
            <span>{car.seats} seats</span>
            <span>·</span>
            <span>{car.engine_type}</span>
            <span>·</span>
            <span>{car.transmission}</span>
            {car.unlimited_mileage && (
              <>
                <span>·</span>
                <span>Unlimited mileage</span>
              </>
            )}
          </div>
        </div>
        <div className="flex flex-col justify-self-end">
          <div className="relative h-14 w-20 md:w-24">
            <Image
              src={car.image_url}
              alt={car.name}
              fill={true}
              sizes="(max-width: 949px) 80px, 96px"
              className="object-contain object-center"
              priority
            />
          </div>
        </div>
      </div>
      <hr className="my-6" />
      <div className="flex flex-col gap-6">
        <div className="flex flex-row gap-8">
          <Icons.gift className="h-6 w-6 shrink-0" />
          <div className="flex flex-col">
            <p className="font-semibold">Exclusive Deals</p>
            <p className="mt-0.5 text-[13px] leading-5 text-neutral-500">
              Unlock special discounts and exclusive offers tailored just for
              you.
            </p>
          </div>
        </div>
        <div className="flex flex-row gap-8">
          <Icons.map className="h-6 w-6 shrink-0" />
          <div className="flex flex-col">
            <p className="font-semibold">Local Tips</p>
            <p className="mt-0.5 text-[13px] leading-5 text-neutral-500">
              Receive recommendations for local attractions, restaurants, and
              scenic routes.
            </p>
          </div>
        </div>
        <div className="flex flex-row gap-8">
          <Icons.lifebuoy className="h-6 w-6 shrink-0" />
          <div className="flex flex-col">
            <p className="font-semibold">24/7 Roadside Assistance</p>
            <p className="mt-0.5 text-[13px] leading-5 text-neutral-500">
              Travel with confidence. Our round-the-clock assistance ensures
              you&apos;re supported anytime, anywhere.
            </p>
          </div>
        </div>
      </div>
      <hr className="my-6" />
      <div className="mt-10 space-y-6">
        {car.descriptions.map((paragraph) => (
          <p key={paragraph} className="text-neutral-600">
            {paragraph}
          </p>
        ))}
      </div>
      <hr className="my-12" />
      <div className="mb-6">
        <h2 className="text-lg font-semibold">Features</h2>
        <div className="mt-6 grid grid-cols-2 gap-4">
          {car.features.map((feature) => (
            <div key={feature} className="flex flex-row items-center gap-4">
              <Icons.check className="h-4 w-4 shrink-0 [stroke-width:2.5px]" />
              <p className="text-neutral-600">{feature}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
