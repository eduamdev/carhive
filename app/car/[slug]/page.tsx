import { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { CarOverview } from '@/components/car/overview';
import { ReservationSidebar } from '@/components/car/reservation-sidebar';
import { fetchCarBySlug, fetchCars } from '@/db/queries';

interface CarPageProps {
  params: { slug: string };
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

export default async function CarPage({ params }: CarPageProps) {
  const car = await fetchCarBySlug(params.slug);

  if (!car) {
    notFound();
  }

  return (
    <div className="py-[var(--car-page-main-content-padding-y)]">
      <div className="mx-auto w-full max-w-none px-5 sm:max-w-[90%] sm:px-0 xl:max-w-6xl">
        <div className="grid w-full grid-cols-1 gap-24 md:grid-cols-[1fr_var(--card-reserve-width)]">
          <CarOverview car={car} />
          <ReservationSidebar car={car} />
        </div>
      </div>
    </div>
  );
}
