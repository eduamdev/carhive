import { cn } from '@/lib/utils';

function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      // eslint-disable-next-line tailwindcss/no-contradicting-classname
      className={cn(
        'animate-slide-background-x rounded-sm bg-[linear-gradient(80deg,_var(--skeleton-bg-start-0)_0%,_var(--skeleton-bg-mid-50)_50%,_var(--skeleton-bg-start-75)_75%)] bg-[size:200%_100%]',
        className,
      )}
      {...props}
    />
  );
}

export { Skeleton };
