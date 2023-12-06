import Link from 'next/link';
import { Icons } from '@/app/components/icons';

export function SiteHeader() {
  return (
    <header className="flex h-full items-center justify-between">
      <Link href="/" className="z-20">
        <Icons.logoWordmark className="h-5 shrink-0" />
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
