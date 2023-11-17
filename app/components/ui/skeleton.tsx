import { cn } from '@/app/lib/utils';

function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      // eslint-disable-next-line tailwindcss/no-contradicting-classname
      className={cn(
        'animate-slide-background-x rounded-sm bg-[linear-gradient(80deg,#eeeeee_0%,#dedede_50%,#eeeeee_75%)] bg-[size:200%_100%]',
        className,
      )}
      {...props}
    />
  );
}

export { Skeleton };
