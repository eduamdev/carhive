import Link from 'next/link';
import { Icons } from '@/components/icons';

export function SiteHeader() {
  return (
    <header className="flex h-full items-center justify-between">
      <Link href="/">
        <p className="text-base font-bold leading-none">GoWheels</p>
      </Link>
      <nav>
        <div className="flex items-center justify-center text-neutral-800">
          <Icons.menu className="mr-1.5 h-6 w-6 shrink-0" />
          <Icons.user className="h-7 w-7 shrink-0" />
        </div>
      </nav>
    </header>
  );
}
