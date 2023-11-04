import { Icons } from '@/components/icons';

export function LogoWordmarkCombo() {
  return (
    <p className="flex items-center justify-start gap-x-1">
      <Icons.logo className="inline-block h-[18px] w-[18px]" />
      <span className="inline-block text-lg font-bold leading-none tracking-wide">
        CarHive
      </span>
    </p>
  );
}
