import { Metadata, ResolvingMetadata } from 'next';
import { notFound } from 'next/navigation';

import { CarView } from '@/components/car-view';
import { ReserveCard } from '@/components/reserve-card';
import { getAllCars, getCarBySlug } from '@/lib/cars';
import { ICar } from '@/types/car';

type Props = {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  // read route params
  const slug = params.slug;

  // fetch data
  const car: ICar = getCarBySlug(slug);

  if (!car) {
    return {};
  }

  return {
    title: car.title,
  };
}

export async function generateStaticParams() {
  const cars = getAllCars();
  return cars.map((car) => ({ slug: car.slug }));
}

export default function CarPage({ params }: Props) {
  const car: ICar = getCarBySlug(params.slug);

  if (!car) {
    notFound();
  }

  return (
    <div className="py-[var(--car-page-main-content-padding-y)]">
      <div className="mx-auto w-full max-w-none px-5 sm:max-w-[90%] sm:px-0 xl:max-w-6xl">
        <div className="grid w-full grid-cols-1 gap-24 md:grid-cols-[1fr_var(--card-reserve-width)]">
          <CarView car={car} />
          <ReserveCard car={car} />
        </div>
      </div>
    </div>
  );
}
