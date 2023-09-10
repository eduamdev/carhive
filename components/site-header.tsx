import { Icons } from '@/components/icons';

export function SiteHeader() {
  return (
    <header className="border-b border-black/10">
      <div className="xl:max-w-8xl mx-auto h-16 w-full max-w-none px-5 sm:max-w-[90%] sm:px-0">
        <div className="flex h-full items-center justify-between">
          <p className="font-bold">Car Dealer</p>
          <nav>
            <Icons.user className="h-7 w-7" />
          </nav>
        </div>
      </div>
    </header>
  );
}
