import { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { CarView } from '@/components/car/car-view';
import { ReserveCard } from '@/components/car/reserve-card';
import { getAllCars, getCarBySlug } from '@/lib/cars';

type Props = {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  // read route params
  const slug = params.slug;

  // fetch data
  const car = getCarBySlug(slug);

  if (!car) {
    return {};
  }

  return {
    title: car.title,
    description: `Experience the ultimate driving adventure with our ${
      car.title
    }. This exceptional vehicle combines style, power, and comfort. With seating for ${
      car.specs.capacity.seats
    } passengers, a ${car.specs.engineType} engine, and ${
      car.specs.transmission
    } transmission, it offers a smooth and thrilling ride. Whether you're planning a family trip or a solo escapade, our ${
      car.title
    } is the perfect choice. ${
      car.reviews
        ? `Rated ${car.rating} stars based on ${car.reviews} reviews.`
        : ''
    } Pickup and dropoff at convenient locations. Reserve your ${
      car.title
    } today.`,
  };
}

export async function generateStaticParams() {
  const cars = getAllCars();
  return cars.map((car) => ({ slug: car.slug }));
}

export default function CarPage({ params }: Props) {
  const car = getCarBySlug(params.slug);

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
