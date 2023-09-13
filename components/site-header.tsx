import Link from 'next/link';
import { Icons } from '@/components/icons';

export function SiteHeader() {
  return (
    <header className="border-b border-black/10">
      <div className="mx-auto h-16 w-full max-w-none px-5 sm:max-w-[90%] sm:px-0 2xl:max-w-8xl">
        <div className="flex h-full items-center justify-between">
          <Link href="/">
            <p className="text-lg font-bold leading-none">Car Dealer</p>
          </Link>
          <nav>
            <div className="flex items-center justify-center gap-2 text-neutral-800">
              <Icons.menu className="h-6 w-6" />
              <Icons.user className="h-7 w-7" />
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
