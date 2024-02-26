export function CounterBadge({ count }: { count?: number }) {
  if (!count) return null;

  return (
    <span className="absolute -right-2 -top-2 flex size-5 items-center justify-center rounded-full bg-black p-2 text-[10px] font-extrabold leading-none text-white">
      {count}
    </span>
  );
}
