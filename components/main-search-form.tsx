'use client';

import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { format } from 'date-fns';
import { cn } from '@/lib/utils';

import { Icons } from '@/components/icons';
import { Input } from '@/components/ui/input';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Calendar } from '@/components/ui/calendar';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

const formSchema = z.object({
  pickupDropoff: z.string(),
  checkin: z.date(),
  checkout: z.date(),
});

interface MainSearchFormProps {
  compact?: boolean;
}

export function MainSearchForm({ compact = false }: MainSearchFormProps) {
  const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    router.push(
      `/cars?pickupDropoff=${
        values.pickupDropoff
      }&checkin=${values.checkin.toISOString()}&checkout=${values.checkout.toISOString()}`,
    );
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className={cn(
          'relative mx-auto flex w-[860px] items-center justify-between gap-x-2 whitespace-nowrap rounded-full border border-black/10 bg-white px-2 py-2.5 text-black',
          !compact && 'h-[72px]',
        )}
      >
        <FormField
          control={form.control}
          name="pickupDropoff"
          render={({ field }) => (
            <FormItem className="flex basis-1/3 flex-col items-start justify-center px-4">
              <FormLabel
                className={cn(
                  'inline-block w-full font-bold text-neutral-800',
                  compact ? 'pb-[3px] text-xs' : 'pb-1 text-[13px]',
                )}
              >
                Pick-up / Drop-off
              </FormLabel>
              <FormControl>
                <Input
                  placeholder="Add location"
                  className={cn(
                    'overflow-ellipsis',
                    compact ? 'text-sm' : 'text-[15px]',
                    !field.value
                      ? 'text-neutral-500'
                      : 'font-semibold text-neutral-800',
                  )}
                  {...field}
                />
              </FormControl>
              <FormMessage
                className={cn(
                  'absolute overflow-hidden overflow-ellipsis',
                  compact
                    ? 'top-16 max-w-[240px] text-xs'
                    : 'top-[76px] text-[13px]',
                )}
              />
            </FormItem>
          )}
        />
        <Separator orientation="vertical" decorative className="h-8" />
        <FormField
          control={form.control}
          name="checkin"
          render={({ field }) => (
            <FormItem className="flex basis-1/3 flex-col items-start justify-center px-4">
              <FormLabel
                className={cn(
                  'inline-block w-full font-bold text-neutral-800',
                  compact ? 'pb-[3px] text-xs' : 'pb-1 text-[13px]',
                )}
              >
                Check in
              </FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <button
                      className={cn(
                        'm-0 inline-block w-full overflow-ellipsis p-0 text-left ',
                        compact ? 'text-sm' : 'text-[15px]',
                        !field.value
                          ? 'text-neutral-500'
                          : 'font-semibold text-neutral-800',
                      )}
                    >
                      {field.value ? (
                        format(field.value, 'PPP')
                      ) : (
                        <span>Add date</span>
                      )}
                    </button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent>
                  <Calendar
                    mode="single"
                    selected={field.value}
                    onSelect={field.onChange}
                    disabled={(date) => date < new Date()}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
              <FormMessage
                className={cn(
                  'absolute overflow-hidden overflow-ellipsis',
                  compact
                    ? 'top-16 max-w-[240px] text-xs'
                    : 'top-[76px] text-[13px]',
                )}
              />
            </FormItem>
          )}
        />
        <Separator orientation="vertical" decorative className="h-8" />
        <FormField
          control={form.control}
          name="checkout"
          render={({ field }) => (
            <FormItem className="flex basis-1/3 flex-col items-start justify-center px-4">
              <FormLabel
                className={cn(
                  'inline-block w-full font-bold text-neutral-800',
                  compact ? 'pb-[3px] text-xs' : 'pb-1 text-[13px]',
                )}
              >
                Check out
              </FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <button
                      className={cn(
                        'm-0 inline-block w-full overflow-ellipsis p-0 text-left text-[15px]',
                        compact ? 'text-sm' : 'text-[15px]',
                        !field.value
                          ? 'text-neutral-500'
                          : 'font-semibold text-neutral-800',
                      )}
                    >
                      {field.value ? (
                        format(field.value, 'PPP')
                      ) : (
                        <span>Add date</span>
                      )}
                    </button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent>
                  <Calendar
                    mode="single"
                    selected={field.value}
                    onSelect={field.onChange}
                    disabled={(date) => date < new Date()}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
              <FormMessage
                className={cn(
                  'absolute overflow-hidden overflow-ellipsis',
                  compact
                    ? 'top-16 max-w-[240px] text-xs'
                    : 'top-[76px] text-[13px]',
                )}
              />
            </FormItem>
          )}
        />
        <Button
          type="submit"
          size={compact ? 'icon' : 'icon-lg'}
          className="flex shrink-0 items-center justify-center rounded-full bg-black text-white"
        >
          <Icons.search className={compact ? 'h-4 w-4' : 'h-[18px] w-[18px]'} />
        </Button>
      </form>
    </Form>
  );
}
