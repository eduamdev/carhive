import Link from 'next/link';
import { getFeaturedLocations, getMinPriceFromCars } from '@/db/queries';
import { SearchParams } from '@/app/lib/types';
import { AspectRatio } from '@/app/components/ui/aspect-ratio';
import { CloudinaryImage } from '@/app/components/cloudinary-image';
import { formatCurrency } from '@/app/lib/utils';

export async function PopularPlaces() {
  const currency = 'MXN';
  const [featuredLocations, minPrice] = await Promise.all([
    getFeaturedLocations(),
    getMinPriceFromCars(),
  ]);

  return (
    <section className="pt-10">
      <div className="mx-auto w-full max-w-none px-5 sm:max-w-[90%] sm:px-0 2xl:max-w-8xl">
        <h2 className="text-2xl font-bold">
          Renting Trends: Must-Visit Places
        </h2>
        <div className="group -mx-2 mt-8 grid grid-cols-1 items-center justify-between sm:grid-cols-2 md:grid-cols-4 [&_a:hover_img]:!opacity-100">
          {featuredLocations.map(({ id, slug, image_url, name }) => (
            <Link
              key={id}
              href={{
                pathname: '/cars',
                query: {
                  [SearchParams.LOCATION]: slug,
                },
              }}
              className="px-1.5 pb-4 pt-1"
            >
              <div className="size-full group-hover:[&_img]:opacity-50">
                <AspectRatio ratio={1 / 1}>
                  <CloudinaryImage
                    priority
                    src={image_url}
                    alt={name}
                    fill
                    sizes="(max-width: 549px) 100vw, (max-width: 1127px) 50vw, 25vw"
                    className="size-full rounded-2xl border object-cover object-center transition-opacity duration-150"
                  />
                </AspectRatio>
              </div>
              <div className="mt-3">
                <h3 className="text-[15px] font-semibold">{name}</h3>
                {minPrice && (
                  <p className="mt-1 text-sm text-neutral-600">
                    Cars from {formatCurrency(minPrice, currency)}+
                  </p>
                )}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
