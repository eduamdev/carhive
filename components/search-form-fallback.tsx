import { Skeleton } from '@/components/ui/skeleton';
import { Separator } from '@/components/ui/separator';
import { cn } from '@/lib/utils';

type Props = {
  compact?: boolean;
};

export function SearchFormFallback({ compact = false }: Props) {
  return (
    <div
      className={cn(
        'mx-auto grid grid-cols-[1.25fr_auto_1fr_auto_1fr_auto] items-center justify-between gap-x-2 whitespace-nowrap rounded-full border border-black/10 bg-white p-2',
        compact ? 'h-[58px] w-[720px]' : 'h-[68px] w-[860px]',
      )}
    >
      <div>
        <div className="grid h-full w-full grid-cols-1 items-start justify-center gap-y-2 overflow-x-hidden px-4">
          <Skeleton className={cn('w-28', compact ? 'h-2' : 'h-3')} />
          <Skeleton className={cn('w-24', compact ? 'h-3' : 'h-4 ')} />
        </div>
      </div>
      <Separator
        orientation="vertical"
        decorative
        className={compact ? 'h-6' : 'h-8'}
      />
      <div>
        <div className="grid h-full w-full grid-cols-1 items-start justify-center gap-y-2 overflow-x-hidden px-4">
          <Skeleton className={cn('w-16', compact ? 'h-2' : 'h-3')} />
          <Skeleton className={cn('w-20', compact ? 'h-3' : 'h-4 ')} />
        </div>
      </div>
      <Separator
        orientation="vertical"
        decorative
        className={compact ? 'h-6' : 'h-8'}
      />
      <div>
        <div className="grid h-full w-full grid-cols-1 items-start justify-center gap-y-2 overflow-x-hidden px-4">
          <Skeleton className={cn('w-16', compact ? 'h-2' : 'h-3')} />
          <Skeleton className={cn('w-20', compact ? 'h-3' : 'h-4 ')} />
        </div>
      </div>
      <Skeleton
        className={cn('rounded-full', compact ? 'h-9 w-9' : 'h-12 w-12')}
      />
    </div>
  );
}
