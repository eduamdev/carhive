import { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { CloudinaryImage } from '@/app/components/cloudinary-image';
import { ReservationSidebar } from './components/reservation-sidebar';
import { getCarBySlug, getCars, getLocations } from '@/db/queries';
import { GiftIcon } from '@/app/components/icons/gift';
import { MapIcon } from '@/app/components/icons/map';
import { SupportIcon } from '@/app/components/icons/support';
import { CheckIcon } from '@/app/components/icons/check';
import { Separator } from '@/app/components/ui/separator';

interface CarDetailsPageProps {
  params: { slug: string };
}

export async function generateMetadata({
  params,
}: CarDetailsPageProps): Promise<Metadata> {
  // read route params
  const slug = params.slug;

  // fetch data
  const car = await getCarBySlug(slug);

  if (!car) {
    return {};
  }

  return {
    title: car.name,
    description: car.descriptions[0],
  };
}

export async function generateStaticParams() {
  const cars = await getCars();
  return cars.map((car) => ({ slug: car.slug }));
}

export default async function CarDetailsPage({ params }: CarDetailsPageProps) {
  const [car, locations] = await Promise.all([
    getCarBySlug(params.slug),
    getLocations(),
  ]);

  if (!car) {
    notFound();
  }

  return (
    <div className="py-[var(--car-page-main-content-padding-y)]">
      <div className="mx-auto w-full max-w-none px-5 sm:max-w-[90%] sm:px-0 xl:max-w-6xl">
        <div className="grid w-full grid-cols-1 gap-24 md:grid-cols-[1fr_var(--card-reserve-width)]">
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
                <CloudinaryImage
                  src={car.image_url}
                  alt={car.name}
                  height={48}
                  width={85}
                  priority
                />
              </div>
            </div>
            <Separator decorative orientation="horizontal" className="my-6" />
            <div className="flex flex-col gap-6">
              <div className="flex flex-row gap-8">
                <GiftIcon className="size-6 shrink-0" />
                <div className="flex flex-col">
                  <p className="font-semibold">Exclusive Deals</p>
                  <p className="mt-0.5 text-[13px] leading-5 text-neutral-500">
                    Unlock special discounts and exclusive offers tailored just
                    for you.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-8">
                <MapIcon className="size-6 shrink-0" />
                <div className="flex flex-col">
                  <p className="font-semibold">Local Tips</p>
                  <p className="mt-0.5 text-[13px] leading-5 text-neutral-500">
                    Receive recommendations for local attractions, restaurants,
                    and scenic routes.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-8">
                <SupportIcon className="size-6 shrink-0" />
                <div className="flex flex-col">
                  <p className="font-semibold">24/7 Roadside Assistance</p>
                  <p className="mt-0.5 text-[13px] leading-5 text-neutral-500">
                    Travel with confidence. Our round-the-clock assistance
                    ensures you&apos;re supported anytime, anywhere.
                  </p>
                </div>
              </div>
            </div>
            <Separator decorative orientation="horizontal" className="my-6" />
            <div className="mt-10 space-y-6">
              {car.descriptions.map((paragraph) => (
                <p key={paragraph} className="text-neutral-600">
                  {paragraph}
                </p>
              ))}
            </div>
            <Separator decorative orientation="horizontal" className="my-12" />
            <div className="mb-6">
              <h2 className="text-lg font-semibold">Features</h2>
              <div className="mt-6 grid grid-cols-2 gap-4">
                {car.features.map((feature) => (
                  <div
                    key={feature}
                    className="flex flex-row items-center gap-4"
                  >
                    <CheckIcon className="size-4 shrink-0 [stroke-width:2.5px]" />
                    <p className="text-neutral-600">{feature}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <ReservationSidebar
            carSlug={params.slug}
            pricePerDay={
              car.discounted_price_per_day || car.retail_price_per_day
            }
            currency={
              car.discounted_price_currency || car.retail_price_currency
            }
            rating={car.rating}
            reviews={car.reviews}
            locations={locations}
          />
        </div>
      </div>
    </div>
  );
}
