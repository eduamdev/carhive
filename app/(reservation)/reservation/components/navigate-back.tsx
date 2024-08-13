'use client';

import { Button } from '@/app/components/ui/button';
import { ChevronLeftIcon } from '@/app/components/icons/chevron-left';
import { useRouter } from 'next/navigation';

export function NavigateBack() {
  const router = useRouter();

  return (
    <Button
      variant="ghost"
      size="icon"
      type="button"
      onClick={() => router.back()}
      className="size-10 rounded-full"
    >
      <ChevronLeftIcon className="size-5 shrink-0" />
    </Button>
  );
}
