import { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { CarView } from '@/components/car/car-view';
import { ReserveCard } from '@/components/car/reserve-card';
import { fetchCarBySlug, fetchCars, fetchLocationByValue } from '@/lib/data';
import { addDays } from 'date-fns';

interface CarPageProps {
  params: { slug: string };
  searchParams: {
    location?: string;
    checkin?: string;
    checkout?: string;
  };
}

export async function generateMetadata({
  params,
}: CarPageProps): Promise<Metadata> {
  // read route params
  const slug = params.slug;

  // fetch data
  const car = await fetchCarBySlug(slug);

  if (!car) {
    return {};
  }

  return {
    title: car.name,
    description: car.descriptions[0],
  };
}

export async function generateStaticParams() {
  const cars = await fetchCars();
  return cars.map((car) => ({ slug: car.slug }));
}

export default async function CarPage({ params, searchParams }: CarPageProps) {
  const car = await fetchCarBySlug(params.slug);

  if (!car) {
    notFound();
  }

  const location =
    (searchParams?.location &&
      (await fetchLocationByValue(searchParams?.location))?.name) ||
    'Amsterdam, Netherlands';
  const checkin =
    (searchParams?.checkin && new Date(searchParams?.checkin)) || new Date();
  const checkout =
    (searchParams?.checkout && new Date(searchParams?.checkout)) ||
    addDays(new Date(), 5);

  return (
    <div className="py-[var(--car-page-main-content-padding-y)]">
      <div className="mx-auto w-full max-w-none px-5 sm:max-w-[90%] sm:px-0 xl:max-w-6xl">
        <div className="grid w-full grid-cols-1 gap-24 md:grid-cols-[1fr_var(--card-reserve-width)]">
          <CarView car={car} />
          <ReserveCard
            car={car}
            location={location}
            checkin={checkin}
            checkout={checkout}
          />
        </div>
      </div>
    </div>
  );
}
