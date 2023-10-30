import Link from 'next/link';
import { Newsletter } from '@/components/layout/newsletter';
import { Icons } from '@/components/icons';
import { siteConfig } from '@/config/site';

export function SiteFooter() {
  const href = siteConfig.links.github;

  return (
    <footer className="border-t bg-white py-10">
      <div className="mx-auto w-full max-w-none px-5 text-sm sm:max-w-[90%] sm:px-0 2xl:max-w-7xl">
        <div className="grid grid-cols-[repeat(auto-fill,minmax(160px,1fr))] items-stretch justify-between gap-x-2 gap-y-10 sm:gap-x-6 md:flex md:flex-wrap">
          <div className="col-span-full">
            <Link href="/" className="flex items-center justify-start gap-x-1">
              <Icons.logo className="inline-block h-[18px] w-[18px]" />
              <p className="inline-block text-lg font-bold leading-none tracking-wide">
                CarHive
              </p>
            </Link>
          </div>
          <div className="flex flex-col gap-2.5">
            <h3 className="mb-1 text-sm font-medium text-neutral-800 lg:text-sm">
              Destinations
            </h3>
            <a
              href={href}
              target="_blank"
              rel="noreferrer"
              className="text-sm text-neutral-600 hover:text-black"
            >
              Beach Escapes
            </a>
            <a
              href={href}
              target="_blank"
              rel="noreferrer"
              className="text-sm text-neutral-600 hover:text-black"
            >
              Historical Trails
            </a>
            <a
              href={href}
              target="_blank"
              rel="noreferrer"
              className="text-sm text-neutral-600 hover:text-black"
            >
              Foodie Journeys
            </a>
            <a
              href={href}
              target="_blank"
              rel="noreferrer"
              className="text-sm text-neutral-600 hover:text-black"
            >
              Urban Explorations
            </a>
            <a
              href={href}
              target="_blank"
              rel="noreferrer"
              className="text-sm text-neutral-600 hover:text-black"
            >
              Wildlife Safaris
            </a>
            <a
              href={href}
              target="_blank"
              rel="noreferrer"
              className="text-sm text-neutral-600 hover:text-black"
            >
              Photography Tours
            </a>
          </div>
          <div className="flex flex-col gap-2.5">
            <h3 className="mb-1 text-sm font-medium text-neutral-800 lg:text-sm">
              Resources
            </h3>
            <a
              href={href}
              target="_blank"
              rel="noreferrer"
              className="text-sm text-neutral-600 hover:text-black"
            >
              Blog
            </a>
            <a
              href={href}
              target="_blank"
              rel="noreferrer"
              className="text-sm text-neutral-600 hover:text-black"
            >
              Car Rental Tips
            </a>
            <a
              href={href}
              target="_blank"
              rel="noreferrer"
              className="text-sm text-neutral-600 hover:text-black"
            >
              Travel Insights
            </a>
            <a
              href={href}
              target="_blank"
              rel="noreferrer"
              className="text-sm text-neutral-600 hover:text-black"
            >
              Safety Guides
            </a>
            <a
              href={href}
              target="_blank"
              rel="noreferrer"
              className="text-sm text-neutral-600 hover:text-black"
            >
              Car Models Guide
            </a>
          </div>
          <div className="flex flex-col gap-2.5">
            <h3 className="mb-1 text-sm font-medium text-neutral-800 lg:text-sm">
              Policies
            </h3>
            <a
              href={href}
              target="_blank"
              rel="noreferrer"
              className="text-sm text-neutral-600 hover:text-black"
            >
              Privacy
            </a>
            <a
              href={href}
              target="_blank"
              rel="noreferrer"
              className="text-sm text-neutral-600 hover:text-black"
            >
              Terms of use
            </a>
            <a
              href={href}
              target="_blank"
              rel="noreferrer"
              className="text-sm text-neutral-600 hover:text-black"
            >
              Cookie Preferences
            </a>
          </div>
          <div className="flex flex-col gap-2.5">
            <h3 className="mb-1 text-sm font-medium text-neutral-800 lg:text-sm">
              Support
            </h3>
            <a
              href={href}
              target="_blank"
              rel="noreferrer"
              className="text-sm text-neutral-600 hover:text-black"
            >
              Contact us
            </a>
            <a
              href={href}
              target="_blank"
              rel="noreferrer"
              className="text-sm text-neutral-600 hover:text-black"
            >
              FAQs
            </a>
          </div>
          <div className="col-span-full flex flex-col gap-2 md:max-w-[240px]">
            <h3 className="mb-1.5 text-sm font-medium text-neutral-800 lg:text-sm">
              Subscribe to our newsletter
            </h3>
            <p className="mb-1.5 text-[13px] leading-6 text-neutral-600 lg:text-sm">
              Join Our Community! Get exclusive travel offers and insider tips.
            </p>
            <Newsletter />
          </div>
        </div>
        <div className="mt-14 lg:mt-16">
          <p className="text-sm text-neutral-600">
            Built by{' '}
            <a href={href}>
              <strong>eduamdev</strong>
            </a>
            .
          </p>
        </div>
      </div>
    </footer>
  );
}
