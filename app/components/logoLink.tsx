import Link from 'next/link';
import { CarhiveLogo } from './icons/carhive-logo';
import { Button } from './ui/button';

export function LogoLink() {
  return (
    <Button variant={'link'} className="p-1" asChild>
      <Link href="/">
        <CarhiveLogo className="h-4 shrink-0 lg:h-[17px]" />
      </Link>
    </Button>
  );
}
