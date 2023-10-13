import { Icons } from '@/components/icons';
import { ICar } from '@/types/car';

interface CarViewProps {
  car: ICar;
}

export function CarView({ car }: CarViewProps) {
  return (
    <div className="p-6 px-0 pb-0 md:pb-0 md:pr-6">
      <div className="grid grid-cols-[1fr_auto] justify-between">
        <div className="flex flex-col">
          <h1 className="text-xl font-bold">{car.title}</h1>
          <div className="mt-2 flex items-center gap-1.5 text-[13px] text-neutral-800 md:text-base">
            <span>{car.specs.capacity.seats} seats</span>
            <span>·</span>
            <span>{car.specs.engineType}</span>
            <span>·</span>
            <span>{car.specs.transmission}</span>

            {car.unlimitedMileage && (
              <>
                <span>·</span>
                <span>Unlimited mileage</span>
              </>
            )}
          </div>
        </div>
        <div className="flex flex-col justify-self-end">
          <div className="w-20 md:w-24">
            <img
              src={car.image.src}
              alt={car.image.alt}
              className="h-auto w-full object-cover object-center"
            />
          </div>
        </div>
      </div>
      <hr className="my-6" />
      <div className="flex flex-col gap-6">
        <div className="flex flex-row gap-8">
          <Icons.navigate className="h-6 w-6 shrink-0" />
          <div className="flex flex-col">
            <p className="font-medium">GPS</p>
            <p className="mt-0.5 text-[13px] leading-5 text-neutral-500">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Exercitationem, distinctio.
            </p>
          </div>
        </div>
        <div className="flex flex-row gap-8">
          <Icons.door className="h-6 w-6 shrink-0" />
          <div className="flex flex-col">
            <p className="font-medium">Self check-in</p>
            <p className="mt-0.5 text-[13px] leading-5 text-neutral-500">
              You can check in with the building staff.
            </p>
          </div>
        </div>
        <div className="flex flex-row gap-8">
          <Icons.calendar className="h-6 w-6 shrink-0" />
          <div className="flex flex-col">
            <p className="font-medium">Free cancellation before Oct 4.</p>
          </div>
        </div>
      </div>
      <hr className="my-6" />
      <div className="mt-10 space-y-6">
        <p className="text-neutral-600">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur
          libero iste nihil, minus laboriosam at numquam quis odit repellat?
          Dignissimos, harum.
        </p>
        <p className="text-neutral-600">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo
          provident ducimus sint explicabo magnam maiores quam rerum. Obcaecati.
        </p>
      </div>
      <hr className="my-12" />
      <div className="mb-6">
        <h2 className="text-lg font-bold">Stuff</h2>
        <div className="mt-6 grid grid-cols-2 gap-4">
          <div className="flex flex-row gap-4">
            <Icons.checkCircle className="h-5 w-5 shrink-0" />
            <p className="text-neutral-600">Some cool stuff</p>
          </div>
          <div className="flex flex-row gap-4">
            <Icons.checkCircle className="h-5 w-5 shrink-0" />
            <p className="text-neutral-600">Some cool stuff</p>
          </div>
          <div className="flex flex-row gap-4">
            <Icons.checkCircle className="h-5 w-5 shrink-0" />
            <p className="text-neutral-600">Some cool stuff</p>
          </div>
          <div className="flex flex-row gap-4">
            <Icons.checkCircle className="h-5 w-5 shrink-0" />
            <p className="text-neutral-600">Some cool stuff</p>
          </div>
          <div className="flex flex-row gap-4">
            <Icons.checkCircle className="h-5 w-5 shrink-0" />
            <p className="text-neutral-600">Some cool stuff</p>
          </div>
          <div className="flex flex-row gap-4">
            <Icons.checkCircle className="h-5 w-5 shrink-0" />
            <p className="text-neutral-600">Some cool stuff</p>
          </div>
        </div>
      </div>
    </div>
  );
}
