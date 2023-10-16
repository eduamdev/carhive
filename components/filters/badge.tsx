import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { ESearchParams } from '@/types/filters';

export function FiltersBadge() {
  const searchParams = useSearchParams();
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    function getSelectedFiltersCount() {
      let count = 0;

      if (searchParams.has(ESearchParams.MIN_SEATS)) count++;
      if (
        searchParams.has(ESearchParams.MIN_PRICE) ||
        searchParams.has(ESearchParams.MAX_PRICE)
      )
        count++;
      if (searchParams.has(ESearchParams.BODY_STYLE)) {
        count += searchParams.getAll(ESearchParams.BODY_STYLE).length;
      }
      if (searchParams.has(ESearchParams.TRANSMISSION)) {
        count += searchParams.getAll(ESearchParams.TRANSMISSION).length;
      }
      if (searchParams.has(ESearchParams.ENGINE_TYPE)) {
        count += searchParams.getAll(ESearchParams.ENGINE_TYPE).length;
      }

      return count;
    }

    setCount(getSelectedFiltersCount());

    return () => {
      setCount(0);
    };
  }, [searchParams]);

  return !count ? null : (
    <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-black p-2 text-[10px] font-extrabold leading-none text-white">
      {count}
    </span>
  );
}
