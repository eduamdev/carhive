import { Icons } from '@/app/components/icons';

export function LogoWordmark() {
  return (
    <p className="flex items-center justify-start gap-x-1">
      <Icons.logo className="inline-block h-[18px] w-[18px]" />
      <span className="inline-block text-lg font-bold leading-none tracking-wide">
        CarHive
      </span>
    </p>
  );
}
