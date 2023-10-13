import { CarView } from '@/components/car-view';
import { ReserveModal } from '@/components/reserve-modal';
import { allCars } from '@/data/all-cars';
import { ICar } from '@/types/car';

export async function generateStaticParams() {
  return allCars.map((car) => ({ slug: car.slug }));
}

export default function CarPage({ params }: { params: { slug: string } }) {
  const car: ICar = allCars.find((car) => car.slug === params.slug);

  return (
    <div className="py-[var(--car-page-main-content-padding-y)]">
      <div className="mx-auto w-full max-w-none px-5 sm:max-w-[90%] sm:px-0 xl:max-w-6xl">
        <div className="grid w-full grid-cols-1 gap-24 md:grid-cols-[1fr_var(--modal-reserve-width)]">
          <CarView car={car} />
          <ReserveModal car={car} />
        </div>
      </div>
    </div>
  );
}
