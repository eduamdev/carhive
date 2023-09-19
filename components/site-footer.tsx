import Link from 'next/link';

export function SiteFooter() {
  return (
    <footer className="border-t bg-white py-10">
      <div className="mx-auto w-full max-w-none px-5 text-sm sm:max-w-[90%] sm:px-0 xl:max-w-6xl">
        <div className="grid grid-cols-[repeat(auto-fill,minmax(140px,1fr))] items-stretch justify-between gap-x-6 gap-y-8 md:flex md:flex-wrap">
          <div className="col-span-full">
            <Link href="/">
              <p className="text-base font-bold leading-none">Car Dealer</p>
            </Link>
          </div>
          <ul className="flex flex-col gap-2">
            <h4 className="mb-1 font-medium text-neutral-800">Company</h4>
            <li className="text-neutral-600">About</li>
            <li className="text-neutral-600">Careers</li>
            <li className="text-neutral-600">Mobile</li>
            <li className="text-neutral-600">Blog</li>
            <li className="text-neutral-600">How we work</li>
            <li className="text-neutral-600">Log in</li>
          </ul>
          <ul className="flex flex-col gap-2">
            <h4 className="mb-1 font-medium text-neutral-800">More</h4>
            <li className="text-neutral-600">About</li>
            <li className="text-neutral-600">Careers</li>
            <li className="text-neutral-600">Mobile</li>
            <li className="text-neutral-600">Blog</li>
            <li className="text-neutral-600">How we work</li>
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
          <div className="col-span-full flex flex-col gap-2">
            <h4 className="mb-1 font-medium text-neutral-800">
              Subscribe to our newsletter
            </h4>
            <p className="leading-6 text-neutral-600 md:max-w-[240px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit,
              accusamus.
            </p>
            <div>
              <input
                type="text"
                className="w-full rounded-md border bg-neutral-50 px-3 py-1.5"
                placeholder="you@domain.com"
              />
            </div>
          </div>
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
