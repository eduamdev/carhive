'use client';

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { createUrl } from '@/lib/utils';
import { SearchParams } from '@/lib/types';

export function ViewCarDetails({ slug }: { slug: string }) {
  const searchParams = useSearchParams();
  const newParams = new URLSearchParams(searchParams.toString());

  const location = searchParams.get(SearchParams.LOCATION);
  const checkin = searchParams.get(SearchParams.CHECKIN);
  const checkout = searchParams.get(SearchParams.CHECKOUT);

  if (location) newParams.set(SearchParams.LOCATION, location);
  if (checkin) newParams.set(SearchParams.CHECKIN, checkin);
  if (checkout) newParams.set(SearchParams.CHECKOUT, checkout);

  const href = createUrl(`/car/${slug}`, newParams);

  return (
    <Button className="w-full" asChild>
      <Link href={href}>View details</Link>
    </Button>
  );
}
