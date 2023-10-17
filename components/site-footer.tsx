import Link from 'next/link';
import { Newsletter } from '@/components/newsletter';
import { Icons } from '@/components/icons';

export function SiteFooter() {
  return (
    <footer className="border-t bg-white py-10">
      <div className="mx-auto w-full max-w-none px-5 text-sm sm:max-w-[90%] sm:px-0 xl:max-w-7xl">
        <div className="grid grid-cols-[repeat(auto-fill,minmax(160px,1fr))] items-stretch justify-between gap-x-6 gap-y-10 md:flex md:flex-wrap">
          <div className="col-span-full">
            <Link href="/" className="flex items-center justify-start gap-x-1">
              <Icons.logo className="inline-block h-[18px] w-[18px]" />
              <p className="inline-block text-base font-bold leading-none tracking-wide">
                CarHive
              </p>
            </Link>
          </div>
          <ul className="flex flex-col gap-2.5">
            <h4 className="mb-1 text-[13px] font-medium text-neutral-800 lg:text-sm">
              Destinations
            </h4>
            <li className="text-[13px] text-neutral-600 lg:text-sm">
              Beach Escapes
            </li>
            <li className="text-[13px] text-neutral-600 lg:text-sm">
              Historical Trails
            </li>
            <li className="text-[13px] text-neutral-600 lg:text-sm">
              Foodie Journeys
            </li>
            <li className="text-[13px] text-neutral-600 lg:text-sm">
              Urban Explorations
            </li>
            <li className="text-[13px] text-neutral-600 lg:text-sm">
              Wildlife Safaris
            </li>
            <li className="text-[13px] text-neutral-600 lg:text-sm">
              Photography Tours
            </li>
          </ul>
          <ul className="flex flex-col gap-2.5">
            <h4 className="mb-1 text-[13px] font-medium text-neutral-800 lg:text-sm">
              Resources
            </h4>
            <li className="text-[13px] text-neutral-600 lg:text-sm">Blog</li>
            <li className="text-[13px] text-neutral-600 lg:text-sm">
              Car Rental Tips
            </li>
            <li className="text-[13px] text-neutral-600 lg:text-sm">
              Travel Insights
            </li>
            <li className="text-[13px] text-neutral-600 lg:text-sm">
              Safety Guides
            </li>
            <li className="text-[13px] text-neutral-600 lg:text-sm">
              Car Models Guide
            </li>
          </ul>
          <ul className="flex flex-col gap-2.5">
            <h4 className="mb-1 text-[13px] font-medium text-neutral-800 lg:text-sm">
              Policies
            </h4>
            <li className="text-[13px] text-neutral-600 lg:text-sm">Privacy</li>
            <li className="text-[13px] text-neutral-600 lg:text-sm">
              Terms of use
            </li>
            <li className="text-[13px] text-neutral-600 lg:text-sm">
              Cookie Preferences
            </li>
          </ul>
          <ul className="flex flex-col gap-2.5">
            <h4 className="mb-1 text-[13px] font-medium text-neutral-800 lg:text-sm">
              Support
            </h4>
            <li className="text-[13px] text-neutral-600 lg:text-sm">
              Contact us
            </li>
            <li className="text-[13px] text-neutral-600 lg:text-sm">FAQs</li>
          </ul>
          <div className="col-span-full flex flex-col gap-2 md:max-w-[240px]">
            <h4 className="mb-1.5 text-[13px] font-medium text-neutral-800 lg:text-sm">
              Subscribe to our newsletter
            </h4>
            <p className="mb-1.5 text-[13px] leading-6 text-neutral-600 lg:text-sm">
              Join Our Community! Get exclusive travel offers and insider tips.
            </p>
            <Newsletter />
          </div>
        </div>
        <div className="mt-14 lg:mt-16">
          <p className="text-[13px] text-neutral-600 lg:text-sm">
            Design and developed by{' '}
            <a href="https://twitter.com/eduamdev">
              <strong>eduamdev</strong>
            </a>
            .
          </p>
        </div>
      </div>
    </footer>
  );
}
