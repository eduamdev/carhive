import Link from 'next/link';
import { Newsletter } from '@/components/newsletter';

export function SiteFooter() {
  return (
    <footer className="border-t bg-white py-10">
      <div className="mx-auto w-full max-w-none px-5 text-sm sm:max-w-[90%] sm:px-0 xl:max-w-8xl">
        <div className="grid grid-cols-[repeat(auto-fill,minmax(140px,1fr))] items-stretch justify-between gap-x-6 gap-y-8 md:flex md:flex-wrap">
          <div className="col-span-full">
            <Link href="/">
              <p className="text-base font-bold leading-none">Car Dealer</p>
            </Link>
          </div>
          <ul className="flex flex-col gap-2">
            <h4 className="mb-1 font-medium text-neutral-800">Destinations</h4>
            <li className="text-neutral-600">Beach Escapes</li>
            <li className="text-neutral-600">Historical Trails</li>
            <li className="text-neutral-600">Foodie Journeys</li>
            <li className="text-neutral-600">Urban Explorations</li>
            <li className="text-neutral-600">Wildlife Safaris</li>
            <li className="text-neutral-600">Photography Tours</li>
          </ul>
          <ul className="flex flex-col gap-2">
            <h4 className="mb-1 font-medium text-neutral-800">Resources</h4>
            <li className="text-neutral-600">Blog</li>
            <li className="text-neutral-600">Car Rental Tips</li>
            <li className="text-neutral-600">Travel Insights</li>
            <li className="text-neutral-600">Safety Guides</li>
            <li className="text-neutral-600">Car Models Guide</li>
          </ul>
          <ul className="flex flex-col gap-2">
            <h4 className="mb-1 font-medium text-neutral-800">Policies</h4>
            <li className="text-neutral-600">Privacy</li>
            <li className="text-neutral-600">Terms of use</li>
            <li className="text-neutral-600">Cookie Preferences</li>
          </ul>
          <ul className="flex flex-col gap-2">
            <h4 className="mb-1 font-medium text-neutral-800">Support</h4>
            <li className="text-neutral-600">Contact us</li>
            <li className="text-neutral-600">FAQs</li>
          </ul>
          <Newsletter />
        </div>
        <div className="mt-12">
          <p className="text-neutral-600">
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
