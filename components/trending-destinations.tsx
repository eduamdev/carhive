import Link from 'next/link';
import Image from 'next/image';
import { AspectRatio } from '@/components/ui/aspect-ratio';

export function TrendingDestinations() {
  return (
    <section className="pt-10">
      <div className="mx-auto w-full max-w-none px-5 sm:max-w-[90%] sm:px-0 2xl:max-w-8xl">
        <h2 className="text-2xl font-extrabold">
          Trending Rent a Car Destinations
        </h2>
        <div className="group -ml-2 -mr-2 mt-8 grid grid-cols-1 items-center justify-between sm:grid-cols-2 lg:grid-cols-4 [&_a:hover_img]:!opacity-100">
          <Link
            href={{
              pathname: '/cars',
              query: { lat: '48.8589', lng: '2.3469', zoom: 12 },
            }}
            className="px-2 pb-4 pt-1"
          >
            <div className="h-full w-full group-hover:[&_img]:opacity-50">
              <AspectRatio ratio={1 / 1}>
                <Image
                  src="/cities/paris.avif"
                  alt="Effiel Tower at Sunset"
                  fill
                  sizes="(max-width: 550px) 100vw, (max-width: 1128px) 50vw, 25vw"
                  className="h-full w-full rounded-2xl border bg-neutral-50 object-cover object-center transition-opacity duration-150"
                />
              </AspectRatio>
            </div>
            <div className="mt-3">
              <h3 className="text-[15px] font-semibold">Paris, France</h3>
              <p className="mt-1 text-sm text-neutral-600">Cars from $12+</p>
            </div>
          </Link>
          <Link
            href={{
              pathname: '/cars',
              query: { lat: '25.2655', lng: '55.2925', zoom: 11 },
            }}
            className="px-2 pb-4 pt-1"
          >
            <div className="h-full w-full group-hover:[&_img]:opacity-50">
              <AspectRatio ratio={1 / 1}>
                <Image
                  src="/cities/dubai.avif"
                  alt="an aerial view of the burj al arab in the middle of the ocean"
                  fill
                  sizes="(max-width: 550px) 100vw, (max-width: 1128px) 50vw, 25vw"
                  className="h-full w-full rounded-2xl border bg-neutral-50 object-cover object-center transition-opacity duration-150"
                />
              </AspectRatio>
            </div>
            <div className="mt-3">
              <h3 className="text-[15px] font-semibold">
                Dubai, United Arab Emirates
              </h3>
              <p className="mt-1 text-sm text-neutral-600">Cars from $12+</p>
            </div>
          </Link>
          <Link
            href={{
              pathname: '/cars',
              query: { lat: '21.1214', lng: '-86.8559', zoom: 12 },
            }}
            className="px-2 pb-4 pt-1"
          >
            <div className="h-full w-full group-hover:[&_img]:opacity-50">
              <AspectRatio ratio={1 / 1}>
                <Image
                  src="/cities/cancun.avif"
                  alt="green palm trees near body of water during daytime in Cancun, Mexico"
                  fill
                  sizes="(max-width: 550px) 100vw, (max-width: 1128px) 50vw, 25vw"
                  className="h-full w-full rounded-2xl border bg-neutral-50 object-cover object-center transition-opacity duration-150"
                />
              </AspectRatio>
            </div>
            <div className="mt-3">
              <h3 className="text-[15px] font-semibold">Cancún, México</h3>
              <p className="mt-1 text-sm text-neutral-600">Cars from $12+</p>
            </div>
          </Link>
          <Link
            href={{
              pathname: '/cars',
              query: { lat: '41.8988', lng: '12.5451', zoom: 10 },
            }}
            className="px-2 pb-4 pt-1"
          >
            <div className="h-full w-full group-hover:[&_img]:opacity-50">
              <AspectRatio ratio={1 / 1}>
                <Image
                  src="/cities/rome.avif"
                  alt="an aerial view from the top of the Vatican in Rome"
                  fill
                  sizes="(max-width: 550px) 100vw, (max-width: 1128px) 50vw, 25vw"
                  className="h-full w-full rounded-2xl border bg-neutral-50 object-cover object-center transition-opacity duration-150"
                />
              </AspectRatio>
            </div>
            <div className="mt-3">
              <h3 className="text-[15px] font-semibold">Rome, Italy</h3>
              <p className="mt-1 text-sm text-neutral-600">Cars from $12+</p>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
