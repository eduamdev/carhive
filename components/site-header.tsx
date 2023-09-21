import Link from 'next/link';
import { Icons } from '@/components/icons';

export function SiteHeader() {
  return (
    <header className="flex h-full items-center justify-between">
      <Link href="/">
        <p className="text-base font-bold leading-none">Car Dealer</p>
      </Link>
      <nav>
        <div className="flex items-center justify-center gap-2 text-neutral-800">
          <Icons.menu className="h-6 w-6" />
          <Icons.user className="h-7 w-7" />
        </div>
      </nav>
    </header>
  );
}
