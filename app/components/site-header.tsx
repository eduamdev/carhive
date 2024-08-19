import Link from 'next/link';
import {
  UserButton,
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
} from '@clerk/nextjs';
import { MenuIcon } from './icons/menu';
import { UserCircleIcon } from './icons/user-circle';
import { CarhiveWordmark } from './icons/carhive-wordmark';
import { Button } from './ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/app/components/ui/dropdown-menu';
import { siteConfig } from '@/config/site';

export function SiteHeader() {
  const githubUrl = siteConfig.links.github;

  return (
    <header className="flex h-full items-center justify-between">
      <Button variant={'link'} className="p-1" asChild>
        <Link href="/" className="z-20">
          <CarhiveWordmark className="h-4 shrink-0 lg:h-[18px]" />
        </Link>
      </Button>
      <div className="z-40 inline-flex">
        <SignedIn>
          <UserButton />
        </SignedIn>
        <SignedOut>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="link" className="p-1">
                <div className="flex items-center justify-center text-neutral-800">
                  <MenuIcon className="mr-1.5 size-4 shrink-0" />
                  <UserCircleIcon className="size-6 shrink-0 lg:size-[26px]" />
                </div>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              <DropdownMenuGroup>
                <DropdownMenuItem className="p-0">
                  <span className="w-full [&_button]:w-full [&_button]:px-2 [&_button]:py-[6px] [&_button]:text-left">
                    <SignUpButton />
                  </span>
                </DropdownMenuItem>
                <DropdownMenuItem className="p-0">
                  <span className="w-full [&_button]:w-full [&_button]:px-2 [&_button]:py-[6px] [&_button]:text-left">
                    <SignInButton />
                  </span>
                </DropdownMenuItem>
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <DropdownMenuItem className="p-0">
                  <Link href={githubUrl} className="w-full px-2 py-[6px]">
                    Gift Cards
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="p-0">
                  <Link href={githubUrl} className="w-full px-2 py-[6px]">
                    Help Center
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </SignedOut>
      </div>
    </header>
  );
}
