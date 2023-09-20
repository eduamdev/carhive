import { Icons } from '@/components/icons';

export function CompactSearchForm() {
  return (
    <div className="mx-auto my-3 flex w-[90%] max-w-xl items-center justify-between gap-x-4 rounded-full border border-black/10 bg-white px-2 py-2 text-black">
      <div className="flex flex-col items-start justify-center gap-2 px-3">
        <span className="text-xs font-semibold leading-none">
          Pick-up / Drop-off
        </span>
        <span className="text-[13px] leading-none text-neutral-500">
          New York
        </span>
      </div>
      <span className="text-neutral-200">|</span>
      <div className="flex flex-col items-start justify-center gap-2 px-3">
        <span className="text-xs font-semibold leading-none">Check in</span>
        <span className="text-[13px] leading-none text-neutral-500">
          01/01/2000
        </span>
      </div>
      <span className="text-neutral-200">|</span>
      <div className="flex flex-col items-start justify-center gap-2 px-3">
        <span className="text-xs font-semibold leading-none">Check out</span>
        <span className="text-[13px] leading-none text-neutral-500">
          07/01/2000
        </span>
      </div>
      <div className="flex items-center justify-center rounded-full bg-black p-2 text-white">
        <Icons.search className="h-4 w-4" />
      </div>
    </div>
  );
}
