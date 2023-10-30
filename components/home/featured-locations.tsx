import Link from 'next/link';
import Image from 'next/image';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { getMinPrice } from '@/lib/cars';
import { formatCurrency } from '@/lib/utils';
import { fetchFeaturedLocations } from '@/lib/data';
import { ESearchParams } from '@/types/filters';

export async function FeaturedLocations() {
  const featuredLocations = await fetchFeaturedLocations();
  const MIN_PRICE: number = getMinPrice();

  return (
    <section className="pt-10">
      <div className="mx-auto w-full max-w-none px-5 sm:max-w-[90%] sm:px-0 2xl:max-w-8xl">
        <h2 className="text-2xl font-bold">
          Renting Trends: Must-Visit Places
        </h2>
        <div className="group -mx-2 mt-8 grid grid-cols-1 items-center justify-between sm:grid-cols-2 lg:grid-cols-4 [&_a:hover_img]:!opacity-100">
          {featuredLocations.map((location) => (
            <Link
              key={location.id}
              href={{
                pathname: '/cars',
                query: {
                  [ESearchParams.LOCATION]: location.value,
                },
              }}
              className="px-2 pb-4 pt-1 lg:pb-1"
            >
              <div className="h-full w-full group-hover:[&_img]:opacity-50">
                <AspectRatio ratio={1 / 1}>
                  <Image
                    src={location.image_url}
                    alt={location.name}
                    fill
                    sizes="(max-width: 549px) 100vw, (max-width: 1127px) 50vw, 25vw"
                    className="h-full w-full rounded-2xl border object-cover object-center transition-opacity duration-150"
                    // placeholder="blur"
                  />
                </AspectRatio>
              </div>
              <div className="mt-3">
                <h3 className="text-[15px] font-semibold">{location.name}</h3>
                <p className="mt-1 text-sm text-neutral-600">
                  Cars from {formatCurrency(MIN_PRICE, 'MXN')}+
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
