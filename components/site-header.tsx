import { Icons } from '@/components/icons';

export function SiteHeader() {
  return (
    <header className="border-b border-black/10">
      <div className="mx-auto h-16 w-full max-w-none px-5 sm:max-w-[90%] sm:px-0 xl:max-w-7xl">
        <div className="flex h-full items-center justify-between">
          <p className="font-bold">Car Dealer</p>
          <nav>
            <Icons.user className="h-6 w-6" />
          </nav>
        </div>
      </div>
    </header>
  );
}
