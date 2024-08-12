import Link from 'next/link';
import { ScrollArea, ScrollBar } from '@/app/components/ui/scroll-area';
import { CloudinaryImage } from '@/app/components/cloudinary-image';
import { bodyStyles } from '@/app/(cars)/cars/components/filters/body-styles';
import { SearchParams } from '@/app/lib/types';

export function PopularCarTypes() {
  const imageMap = {
    hatchback: 'cars/body-styles/hatchback_wzyzoz',
    minivan: 'cars/body-styles/minivan_xybc4t',
    'pickup-truck': 'cars/body-styles/pickup-truck_a2mlme',
    'sports-car': 'cars/body-styles/sports-car_w52w60',
    suv: 'cars/body-styles/suv_y8n1fx',
    sedan: 'cars/body-styles/sedan_nwfglr',
  };

  return (
    <section className="border-t pt-10">
      <div className="mx-auto w-full max-w-none px-5 sm:max-w-[90%] sm:px-0 2xl:max-w-8xl">
        <h2 className="text-2xl font-bold">Popular Rental Car Choices</h2>
        <div className="relative mt-8 before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-[5%] before:bg-gradient-to-r before:from-white before:content-[''] after:absolute after:right-0 after:top-0 after:z-10 after:h-full after:w-[5%] after:bg-gradient-to-l after:from-white after:content-['']">
          <ScrollArea>
            <div className="mb-3 whitespace-nowrap p-[2px]">
              {bodyStyles.map(({ slug, name }) => {
                const imageUrl = imageMap[slug];

                return (
                  <div
                    key={slug}
                    className="relative mr-2.5 inline-block h-[141px] w-[250px]"
                  >
                    <Link
                      href={{
                        pathname: '/cars',
                        query: {
                          [SearchParams.BODY_STYLE]: slug,
                        },
                      }}
                      className="absolute inset-0 z-20 rounded-2xl border"
                    >
                      <span className="sr-only">{name}</span>
                    </Link>
                    <div className="absolute left-2.5 top-2.5 z-10 flex items-center justify-center leading-none">
                      <span className="rounded-[5px] border bg-white px-2.5 py-1.5 text-sm font-semibold leading-none text-neutral-800">
                        {name}
                      </span>
                    </div>
                    <CloudinaryImage
                      priority
                      src={imageUrl}
                      alt={name}
                      width={250}
                      height={141}
                      className="rounded-2xl"
                    />
                  </div>
                );
              })}
              <ScrollBar orientation="horizontal" />
            </div>
          </ScrollArea>
        </div>
      </div>
    </section>
  );
}
