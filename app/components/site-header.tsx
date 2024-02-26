import Link from 'next/link';
import { UserButton, SignedIn, SignedOut } from '@clerk/nextjs';
import { Icons } from '@/app/components/icons';

export function SiteHeader() {
  return (
    <header className="flex h-full items-center justify-between">
      <Link href="/" className="z-20">
        <Icons.logoWordmark className="h-[18px] shrink-0" />
      </Link>
      <nav>
        <SignedIn>
          <div className="flex items-center justify-center">
            <UserButton />
          </div>
        </SignedIn>
        <SignedOut>
          <div className="flex items-center justify-center text-neutral-800">
            <Icons.menu className="mr-1.5 size-6 shrink-0" />
            <Icons.user className="size-7 shrink-0" />
          </div>
        </SignedOut>
      </nav>
    </header>
  );
}
