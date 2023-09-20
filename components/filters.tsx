import { Icons } from '@/components/icons';

export function Filters() {
  return (
    <div className="flex flex-col">
      <p className="text-xs">42 cars</p>
      <hr className="my-4" />
      <div className="flex items-center justify-between">
        <span className="text-sm font-semibold">Car Type</span>
        <Icons.chevronUp className="h-4 w-4 text-neutral-600" />
      </div>
      <div className="mt-4 grid grid-cols-1 gap-2 text-xs">
        <div className="flex items-center justify-start gap-2">
          <input type="checkbox" />
          <span>SUV</span>
        </div>
        <div className="flex items-center justify-start gap-2">
          <input type="checkbox" />
          <span>Minivan</span>
        </div>
        <div className="flex items-center justify-start gap-2">
          <input type="checkbox" />
          <span>Pick-up</span>
        </div>
        <div className="flex items-center justify-start gap-2">
          <input type="checkbox" />
          <span>Sedan</span>
        </div>
        <div className="flex items-center justify-start gap-2">
          <input type="checkbox" />
          <span>Premium</span>
        </div>
        <div className="flex items-center justify-start gap-2">
          <input type="checkbox" />
          <span>Convertible</span>
        </div>
      </div>
      <hr className="my-4" />
      <div className="flex items-center justify-between">
        <span className="text-sm font-semibold">Price</span>
        <Icons.chevronDown className="h-4 w-4 text-neutral-600" />
      </div>
      <hr className="my-4" />
      <div className="flex items-center justify-between">
        <span className="text-sm font-semibold">Transmission</span>
        <Icons.chevronUp className="h-4 w-4 text-neutral-600" />
      </div>
      <div className="mt-3 grid grid-cols-2 gap-1 text-xs">
        <span className="flex h-10 items-center justify-center rounded-sm bg-neutral-100 p-4">
          Automatic
        </span>
        <span className="flex h-10 items-center justify-center rounded-sm bg-neutral-100 p-4">
          Manual
        </span>
      </div>
      <hr className="my-4" />
      <div className="flex items-center justify-between">
        <span className="text-sm font-semibold">Capacity</span>
        <Icons.chevronUp className="h-4 w-4 text-neutral-600" />
      </div>
      <p className="mt-3 text-sm font-medium">Seats</p>
      <div className="mt-1.5 grid grid-cols-4 gap-1 text-xs">
        <span className="flex h-10 items-center justify-center rounded-sm bg-neutral-100 p-4">
          2
        </span>
        <span className="flex h-10 items-center justify-center rounded-sm bg-neutral-100 p-4">
          3
        </span>
        <span className="flex h-10 items-center justify-center rounded-sm bg-neutral-100 p-4">
          4
        </span>
        <span className="flex h-10 items-center justify-center rounded-sm bg-neutral-100 p-4">
          5
        </span>
        <span className="flex h-10 items-center justify-center rounded-sm bg-neutral-100 p-4">
          6
        </span>
        <span className="flex h-10 items-center justify-center rounded-sm bg-neutral-100 p-4">
          7
        </span>
      </div>
      <p className="mt-5 text-sm font-medium">Bags</p>
      <div className="mt-1.5 grid grid-cols-4 gap-1 text-xs">
        <span className="flex h-10 items-center justify-center rounded-sm bg-neutral-100 p-4">
          1
        </span>
        <span className="flex h-10 items-center justify-center rounded-sm bg-neutral-100 p-4">
          2
        </span>
        <span className="flex h-10 items-center justify-center rounded-sm bg-neutral-100 p-4">
          3
        </span>
        <span className="flex h-10 items-center justify-center rounded-sm bg-neutral-100 p-4">
          4
        </span>
        <span className="flex h-10 items-center justify-center rounded-sm bg-neutral-100 p-4">
          5+
        </span>
      </div>
      <hr className="my-4" />
    </div>
  );
}
