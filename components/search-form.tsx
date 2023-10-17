'use client';

import { useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { format } from 'date-fns';

import { Calendar } from '@/components/ui/calendar';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from '@/components/ui/command';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { Icons } from '@/components/icons';

import { cn, createUrl } from '@/lib/utils';
import { getAllLocations } from '@/lib/locations';

import { ILocation } from '@/types/location';
import { ESearchParams } from '@/types/filters';
import { DateRange } from 'react-day-picker';

const FormSchema = z.object({
  location: z.string({ required_error: 'Please select a location' }),
  checkin: z.date(),
  checkout: z.date(),
});

interface SearchFormProps {
  compact?: boolean;
}

export function SearchForm({ compact = false }: SearchFormProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const allLocations: ReadonlyArray<ILocation> = getAllLocations();
  const locations = [...allLocations].sort((a, b) =>
    a.name.localeCompare(b.name),
  );

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  function onSubmit(values: z.infer<typeof FormSchema>) {
    const { location, checkin, checkout } = values;

    const newParams = new URLSearchParams(searchParams.toString());

    newParams.delete(ESearchParams.LOCATION);
    newParams.delete(ESearchParams.CHECKIN);
    newParams.delete(ESearchParams.CHECKOUT);

    newParams.set(ESearchParams.LOCATION, location);
    newParams.set(ESearchParams.CHECKIN, checkin.toISOString());
    newParams.set(ESearchParams.CHECKOUT, checkout.toISOString());

    router.push(createUrl('/cars', newParams));
  }

  useEffect(() => {
    if (searchParams.has(ESearchParams.LOCATION)) {
      form.setValue('location', searchParams.get(ESearchParams.LOCATION));
    }

    if (searchParams.has(ESearchParams.CHECKIN)) {
      const checkinISOString = searchParams.get(ESearchParams.CHECKIN);
      form.setValue('checkin', new Date(checkinISOString));
    }

    if (searchParams.has(ESearchParams.CHECKOUT)) {
      const checkoutISOString = searchParams.get(ESearchParams.CHECKOUT);
      form.setValue('checkout', new Date(checkoutISOString));
    }

    return () => {
      form.setValue('location', undefined);
      form.setValue('checkin', undefined);
      form.setValue('checkout', undefined);
    };
  }, [searchParams, form]);

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className={cn(
          'relative mx-auto flex items-center justify-between gap-x-2 whitespace-nowrap rounded-full border border-black/10 bg-white px-2 text-black',
          compact ? 'h-[58px] w-[680px] py-2' : 'h-[68px] w-[860px] py-2.5',
        )}
      >
        <FormField
          control={form.control}
          name="location"
          render={({ field }) => (
            <FormItem className="grid h-full w-full grid-cols-1 items-start justify-center overflow-x-hidden px-4">
              <FormLabel
                className={cn(
                  'inline-block h-full w-full font-bold text-neutral-800',
                  compact ? 'text-xs' : 'text-[13px]',
                )}
              >
                Pick-up / Drop-off
              </FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      role="combobox"
                      variant="unstyled"
                      className={cn(
                        'm-0 inline-block h-auto w-full truncate p-0 text-left',
                        compact ? 'text-sm' : 'text-[15px]',
                        !field.value
                          ? 'text-neutral-500'
                          : 'font-semibold text-neutral-800',
                      )}
                    >
                      {field.value
                        ? locations.find(
                            (location) => location.value === field.value,
                          )?.name
                        : 'Select location'}
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="p-0">
                  <Command>
                    <CommandInput placeholder="Search location..." />
                    <CommandEmpty>No place found.</CommandEmpty>
                    <CommandGroup>
                      {locations.map((location) => (
                        <CommandItem
                          value={location.name}
                          key={location.value}
                          onSelect={() => {
                            form.setValue('location', location.value);
                          }}
                        >
                          <Icons.check
                            className={cn(
                              'mr-2 h-4 w-4 shrink-0',
                              location.value === field.value
                                ? 'opacity-100'
                                : 'opacity-0',
                            )}
                          />
                          {location.name}
                        </CommandItem>
                      ))}
                    </CommandGroup>
                  </Command>
                </PopoverContent>
              </Popover>
              <FormMessage
                className={cn(
                  'absolute  overflow-hidden text-ellipsis',
                  compact
                    ? 'top-[60px] max-w-[220px] text-xs'
                    : 'top-[72px] max-w-[310px] text-[13px]',
                )}
              />
            </FormItem>
          )}
        />
        <Separator
          orientation="vertical"
          decorative
          className={compact ? 'h-6' : 'h-8'}
        />
        <FormField
          control={form.control}
          name="checkin"
          render={({ field }) => (
            <FormItem className="grid h-full shrink-0 grow-0 basis-1/4 grid-cols-1 items-start justify-center px-4">
              <FormLabel
                className={cn(
                  'inline-block h-full w-full font-bold text-neutral-800',
                  compact ? 'text-xs' : 'text-[13px]',
                )}
              >
                Check in
              </FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <button
                      className={cn(
                        'm-0 inline-block w-full text-ellipsis p-0 text-left',
                        compact ? 'text-sm' : 'text-[15px]',
                        !field.value
                          ? 'text-neutral-500'
                          : 'font-semibold text-neutral-800',
                      )}
                    >
                      {field.value ? (
                        format(field.value, 'LLL dd, y')
                      ) : (
                        <span>Pick a date</span>
                      )}
                    </button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-auto" align="start">
                  <Calendar
                    initialFocus
                    mode="range"
                    defaultMonth={field.value}
                    selected={{
                      from: field.value,
                      to: form.getValues('checkout'),
                    }}
                    onSelect={(range: DateRange) => {
                      form.setValue('checkin', range?.from);
                      form.setValue('checkout', range?.to || undefined);
                    }}
                    numberOfMonths={2}
                    disabled={(date) => date < new Date()}
                  />
                </PopoverContent>
              </Popover>
              <FormMessage
                className={cn(
                  'absolute  overflow-hidden text-ellipsis',
                  compact
                    ? 'top-[60px] max-w-[135px] text-xs'
                    : 'top-[72px] max-w-[180px] text-[13px]',
                )}
              />
            </FormItem>
          )}
        />
        <Separator
          orientation="vertical"
          decorative
          className={compact ? 'h-6' : 'h-8'}
        />
        <FormField
          control={form.control}
          name="checkout"
          render={({ field }) => (
            <FormItem className="grid h-full shrink-0 grow-0 basis-1/4 grid-cols-1 items-start justify-center px-4">
              <FormLabel
                className={cn(
                  'inline-block h-full w-full font-bold text-neutral-800',
                  compact ? 'text-xs' : 'text-[13px]',
                )}
              >
                Check out
              </FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <button
                      className={cn(
                        'm-0 inline-block w-full text-ellipsis p-0 text-left',
                        compact ? 'text-sm' : 'text-[15px]',
                        !field.value
                          ? 'text-neutral-500'
                          : 'font-semibold text-neutral-800',
                      )}
                    >
                      {field.value ? (
                        format(field.value, 'LLL dd, y')
                      ) : (
                        <span>Pick a date</span>
                      )}
                    </button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-auto" align="start">
                  <Calendar
                    initialFocus
                    mode="range"
                    defaultMonth={form.getValues('checkin')}
                    selected={{
                      from: form.getValues('checkin'),
                      to: field.value,
                    }}
                    onSelect={(range: DateRange) => {
                      form.setValue('checkin', range?.from);
                      form.setValue('checkout', range?.to || undefined);
                    }}
                    numberOfMonths={2}
                    disabled={(date) => date < new Date()}
                  />
                </PopoverContent>
              </Popover>
              <FormMessage
                className={cn(
                  'absolute overflow-hidden text-ellipsis',
                  compact
                    ? 'top-[60px] max-w-[190px] text-xs'
                    : 'top-[72px] max-w-[205px] text-[13px]',
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
          <Icons.magnifyingGlass
            className={cn(
              '[stroke-width:3px]',
              compact ? 'h-[14px] w-[14px]' : 'h-[18px] w-[18px]',
            )}
          />
        </Button>
      </form>
    </Form>
  );
}
