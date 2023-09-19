'use client';

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

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { format } from 'date-fns';
import { cn } from '@/lib/utils';

const formSchema = z.object({
  pickup: z.string(),
  dropoff: z.string(),
  checkin: z.date(),
  checkout: z.date(),
});

export function MainSearchForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="relative mx-auto mt-5 hidden h-[72px] w-[900px] items-center justify-between gap-x-2 whitespace-nowrap rounded-full border border-black/10 bg-white px-2 py-2.5 text-black md:flex"
      >
        <FormField
          control={form.control}
          name="pickup"
          render={({ field }) => (
            <FormItem className="flex basis-1/4 flex-col items-start justify-center px-4">
              <FormLabel className="w-full pb-1 text-[13px] font-semibold">
                Pick-up
              </FormLabel>
              <FormControl>
                <Input
                  placeholder="Add location"
                  className="overflow-ellipsis"
                  {...field}
                />
              </FormControl>
              <FormMessage className="absolute top-[76px] text-[13px]" />
            </FormItem>
          )}
        />
        <Separator orientation="vertical" decorative className="h-8" />
        <FormField
          control={form.control}
          name="dropoff"
          render={({ field }) => (
            <FormItem className="flex basis-1/4 flex-col items-start justify-center px-4">
              <FormLabel className="w-full pb-1 text-[13px] font-semibold">
                Drop-off
              </FormLabel>
              <FormControl>
                <Input
                  placeholder="Add location"
                  className="overflow-ellipsis"
                  {...field}
                />
              </FormControl>
              <FormMessage className="absolute top-[76px] text-[13px]" />
            </FormItem>
          )}
        />
        <Separator orientation="vertical" decorative className="h-8" />
        <FormField
          control={form.control}
          name="checkin"
          render={({ field }) => (
            <FormItem className="flex basis-1/4 flex-col items-start justify-center px-4">
              <FormLabel className="inline-block w-full pb-1 text-[13px] font-semibold">
                Check in
              </FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <button
                      className={cn(
                        'm-0 inline-block w-full overflow-ellipsis p-0 text-left text-sm',
                        !field.value && 'text-neutral-500',
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
              <FormMessage className="absolute top-[76px] text-[13px]" />
            </FormItem>
          )}
        />
        <Separator orientation="vertical" decorative className="h-8" />
        <FormField
          control={form.control}
          name="checkout"
          render={({ field }) => (
            <FormItem className="flex basis-1/4 flex-col items-start justify-center px-4">
              <FormLabel className="inline-block w-full pb-1 text-[13px] font-semibold">
                Check out
              </FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <button
                      className={cn(
                        'm-0 inline-block w-full overflow-ellipsis p-0 text-left text-sm',
                        !field.value && 'text-neutral-500',
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
              <FormMessage className="absolute top-[76px] text-[13px]" />
            </FormItem>
          )}
        />
        <Button
          type="submit"
          size="icon-lg"
          className="flex shrink-0 items-center justify-center rounded-full bg-black text-white"
        >
          <Icons.search className="h-[18px] w-[18px]" />
        </Button>
      </form>
    </Form>
  );
}
