import Link from 'next/link';
import { CarhiveLogo } from './icons/carhive-logo';
import { Button } from './ui/button';

export function LogoLink() {
  return (
    <Button
      variant={'link'}
      className="-ml-1 h-auto rounded-sm p-1 pl-0 text-black hover:text-black"
      asChild
    >
      <Link href="/">
        <CarhiveLogo className="h-4 shrink-0 lg:h-[17px]" />
      </Link>
    </Button>
  );
}
