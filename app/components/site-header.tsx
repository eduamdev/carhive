import Link from 'next/link';
import {
  UserButton,
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
} from '@clerk/nextjs';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/app/components/ui/popover';
import { MenuIcon } from './icons/menu';
import { UserCircleIcon } from './icons/user-circle';
import { CarhiveWordmark } from './icons/carhive-wordmark';

export function SiteHeader() {
  return (
    <header className="flex h-full items-center justify-between">
      <Link href="/" className="z-20">
        <CarhiveWordmark className="h-[18px] shrink-0" />
      </Link>
      <div className="z-40 inline-flex">
        <SignedIn>
          <UserButton />
        </SignedIn>
        <SignedOut>
          <Popover>
            <PopoverTrigger>
              <div className="flex items-center justify-center p-2 text-neutral-800">
                <MenuIcon className="mr-1.5 size-5 shrink-0" />
                <UserCircleIcon className="size-7 shrink-0" />
              </div>
            </PopoverTrigger>
            <PopoverContent
              align="end"
              collisionPadding={{ top: 40, right: 40 }}
              sideOffset={8}
              className="w-60 px-0 py-2 text-neutral-800 shadow-xl"
            >
              <ul className="flex flex-col gap-0.5 text-sm">
                <li className="[&_button]:w-full [&_button]:py-2.5 [&_button]:pl-4 [&_button]:text-left [&_button]:font-semibold [&_button]:hover:bg-neutral-100">
                  <SignUpButton />
                </li>
                <li className="[&_button]:w-full [&_button]:py-2.5 [&_button]:pl-4 [&_button]:text-left [&_button]:hover:bg-neutral-100">
                  <SignInButton />
                </li>
              </ul>
            </PopoverContent>
          </Popover>
        </SignedOut>
      </div>
    </header>
  );
}
