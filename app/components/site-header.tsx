import Link from 'next/link';
import { UserButton, SignedIn, SignedOut } from '@clerk/nextjs';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/app/components/ui/popover';
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
            <Icons.menu className="mr-1.5 size-6 shrink-0" />
            <div className="size-7 shrink-0">
              <UserButton />
            </div>
          </div>
        </SignedIn>
        <SignedOut>
          <Popover>
            <PopoverTrigger>
              <div className="flex items-center justify-center text-neutral-800">
                <Icons.menu className="mr-1.5 size-6 shrink-0" />
                <Icons.user className="size-7 shrink-0" />
              </div>
            </PopoverTrigger>
            <PopoverContent
              align="end"
              collisionPadding={{ top: 40, right: 40 }}
              sideOffset={8}
              className="w-60 px-0 py-2 text-neutral-800 shadow-xl"
            >
              <ul className="flex flex-col gap-0.5 text-sm">
                <Link href={'/sign-up'}>
                  <li className="py-2.5 pl-4 font-semibold hover:bg-neutral-100">
                    Sign up
                  </li>
                </Link>
                <Link href={'/sign-in'}>
                  <li className="py-2.5 pl-4 hover:bg-neutral-100">Sign in</li>
                </Link>
              </ul>
            </PopoverContent>
          </Popover>
        </SignedOut>
      </nav>
    </header>
  );
}
