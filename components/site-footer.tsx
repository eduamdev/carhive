export function SiteFooter() {
  return (
    <footer className="border-t bg-white">
      <div className="xl:max-w-8xl mx-auto mt-12 w-full max-w-none px-5 text-sm sm:max-w-[90%] sm:px-0">
        <div className="grid grid-cols-2 items-baseline justify-between gap-12 sm:grid-cols-4">
          <ul className="flex flex-col gap-1.5 sm:gap-2.5">
            <li className="font-medium">Company</li>
            <li className="text-neutral-600">About</li>
            <li className="text-neutral-600">Careers</li>
            <li className="text-neutral-600">Mobile</li>
            <li className="text-neutral-600">Blog</li>
            <li className="text-neutral-600">How we work</li>
            <li className="text-neutral-600">Log in</li>
          </ul>
          <ul className="flex flex-col gap-1.5 sm:gap-2.5">
            <li className="font-medium">More</li>
            <li className="text-neutral-600">About</li>
            <li className="text-neutral-600">Careers</li>
            <li className="text-neutral-600">Mobile</li>
            <li className="text-neutral-600">Blog</li>
            <li className="text-neutral-600">How we work</li>
          </ul>
          <ul className="flex flex-col gap-1.5 sm:gap-2.5">
            <li className="font-medium">Policies</li>
            <li className="text-neutral-600">Privacy</li>
            <li className="text-neutral-600">Terms of use</li>
            <li className="text-neutral-600">Cookie Preferences</li>
          </ul>
          <ul className="flex flex-col gap-1.5 sm:gap-2.5">
            <li className="font-medium">Support</li>
            <li className="text-neutral-600">Contact us</li>
            <li className="text-neutral-600">FAQs</li>
          </ul>
        </div>
        <div className="mt-12 border-t py-8">
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
