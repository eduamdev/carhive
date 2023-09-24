import { CarCard } from '@/components/car-card';
import { Button } from '@/components/ui/button';
import { Icons } from '@/components/icons';

export function MainCarsContent() {
  return (
    <main className="flex">
      <div className="w-full max-w-[1184px] shrink-0 grow-0 flex-col overflow-y-auto md:min-h-[calc(100vh-var(--header-and-search-offset))] md:w-[55%] xl:w-[63%]">
        <div className="mx-5 my-4 flex items-center justify-between sm:mx-6">
          <p className="text-[13px] font-semibold text-neutral-800">
            Over 45 cars
          </p>
          <Button variant="outline">
            <Icons.filters className="mr-2 h-[14px] w-[14px]" />
            Filters
          </Button>
        </div>
        <div className="mx-5 mb-12 sm:mx-6">
          <div className="grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] items-center justify-center gap-6">
            <CarCard
              title="Premium SUV"
              capacity={{ seats: 6, bags: 4 }}
              transmission="Automatic"
              rating={4.1}
              reviews={59}
              price={{
                discountedPrice: '$999',
                previousPrice: '$1,400',
                currency: 'MXN',
              }}
              image={{
                src: 'https:mediaim.expedia.com/cars/42/24e24b9a-0dc5-4630-8893-41decc62b2b9.jpg?impolicy=resizecrop&ra=fit&rh=165&rw=165',
                alt: '',
              }}
              unlimitedMileage
            />
            <CarCard
              title="Premium SUV"
              capacity={{ seats: 6, bags: 4 }}
              transmission="Automatic"
              rating={4.1}
              reviews={59}
              price={{
                discountedPrice: '$999',
                previousPrice: '$1,400',
                currency: 'MXN',
              }}
              image={{
                src: 'https:mediaim.expedia.com/cars/42/24e24b9a-0dc5-4630-8893-41decc62b2b9.jpg?impolicy=resizecrop&ra=fit&rh=165&rw=165',
                alt: '',
              }}
              unlimitedMileage
            />
            <CarCard
              title="Premium SUV"
              capacity={{ seats: 6, bags: 4 }}
              transmission="Automatic"
              rating={4.1}
              reviews={59}
              price={{
                discountedPrice: '$999',
                previousPrice: '$1,400',
                currency: 'MXN',
              }}
              image={{
                src: 'https:mediaim.expedia.com/cars/42/24e24b9a-0dc5-4630-8893-41decc62b2b9.jpg?impolicy=resizecrop&ra=fit&rh=165&rw=165',
                alt: '',
              }}
              unlimitedMileage
            />
            <CarCard
              title="Premium SUV"
              capacity={{ seats: 6, bags: 4 }}
              transmission="Automatic"
              rating={4.1}
              reviews={59}
              price={{
                discountedPrice: '$999',
                previousPrice: '$1,400',
                currency: 'MXN',
              }}
              image={{
                src: 'https:mediaim.expedia.com/cars/42/24e24b9a-0dc5-4630-8893-41decc62b2b9.jpg?impolicy=resizecrop&ra=fit&rh=165&rw=165',
                alt: '',
              }}
              unlimitedMileage
            />
            <CarCard
              title="Premium SUV"
              capacity={{ seats: 6, bags: 4 }}
              transmission="Automatic"
              rating={4.1}
              reviews={59}
              price={{
                discountedPrice: '$999',
                previousPrice: '$1,400',
                currency: 'MXN',
              }}
              image={{
                src: 'https:mediaim.expedia.com/cars/42/24e24b9a-0dc5-4630-8893-41decc62b2b9.jpg?impolicy=resizecrop&ra=fit&rh=165&rw=165',
                alt: '',
              }}
              unlimitedMileage
            />
            <CarCard
              title="Premium SUV"
              capacity={{ seats: 6, bags: 4 }}
              transmission="Automatic"
              rating={4.1}
              reviews={59}
              price={{
                discountedPrice: '$999',
                previousPrice: '$1,400',
                currency: 'MXN',
              }}
              image={{
                src: 'https:mediaim.expedia.com/cars/42/24e24b9a-0dc5-4630-8893-41decc62b2b9.jpg?impolicy=resizecrop&ra=fit&rh=165&rw=165',
                alt: '',
              }}
              unlimitedMileage
            />
            <CarCard
              title="Premium SUV"
              capacity={{ seats: 6, bags: 4 }}
              transmission="Automatic"
              rating={4.1}
              reviews={59}
              price={{
                discountedPrice: '$999',
                previousPrice: '$1,400',
                currency: 'MXN',
              }}
              image={{
                src: 'https:mediaim.expedia.com/cars/42/24e24b9a-0dc5-4630-8893-41decc62b2b9.jpg?impolicy=resizecrop&ra=fit&rh=165&rw=165',
                alt: '',
              }}
              unlimitedMileage
            />
          </div>
        </div>
      </div>
      {/* map */}
      <div className="hidden flex-auto md:block">
        <div className="sticky top-[var(--header-and-search-offset)] z-10 basis-auto">
          <div className="h-[calc(100vh-var(--header-and-search-offset))] bg-neutral-50"></div>
        </div>
      </div>
    </main>
  );
}
