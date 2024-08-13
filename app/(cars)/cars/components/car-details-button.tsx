'use client';

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { Button } from '@/app/components/ui/button';
import { createUrl } from '@/app/lib/utils';
import { SearchParams } from '@/app/lib/types';
import { CaretRightIcon } from '@/app/components/icons/caret-right';

export function CarDetailsButton({ slug }: { slug: string }) {
  const searchParams = useSearchParams();
  const newParams = new URLSearchParams(searchParams.toString());

  const location = searchParams.get(SearchParams.LOCATION);
  const checkin = searchParams.get(SearchParams.CHECKIN);
  const checkout = searchParams.get(SearchParams.CHECKOUT);

  if (location) newParams.set(SearchParams.LOCATION, location);
  if (checkin) newParams.set(SearchParams.CHECKIN, checkin);
  if (checkout) newParams.set(SearchParams.CHECKOUT, checkout);

  const href = createUrl(`/cars/${slug}`, newParams);

  return (
    <Button size={'sm'} className="w-full" asChild>
      <Link href={href}>
        <span className="flex items-center justify-center text-[15px]">
          View details
          <CaretRightIcon className="ml-2 size-[14px] shrink-0 opacity-60" />
        </span>
      </Link>
    </Button>
  );
}
