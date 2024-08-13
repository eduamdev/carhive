'use client';

import { useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { addDays, format, isAfter } from 'date-fns';

import { Calendar } from '@/app/components/ui/calendar';
import { Button } from '@/app/components/ui/button';
import { Separator } from '@/app/components/ui/separator';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/app/components/ui/form';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from '@/app/components/ui/command';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/app/components/ui/popover';

import { cn, createUrl } from '@/app/lib/utils';
import { Location } from '@/db/definitions';
import { SearchParams } from '@/app/lib/types';
import { SearchIcon } from './icons/search';
import { CheckIcon } from './icons/check';

const FormSchema = z
  .object({
    location: z.string({ required_error: 'Location is required' }),
    checkin: z.date({ required_error: 'Check in is required' }),
    checkout: z.date({ required_error: 'Check out is required' }),
  })
  .refine((schema) => isAfter(schema.checkout, schema.checkin), {
    message: 'Check out must be after check in',
    path: ['checkout'],
  });

interface SearchFormProps {
  locations: Location[];
  compact?: boolean;
}

export function SearchForm({ locations, compact = false }: SearchFormProps) {
  const { push } = useRouter();
  const searchParams = useSearchParams();

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  function onSubmit(values: z.infer<typeof FormSchema>) {
    const { location, checkin, checkout } = values;

    const newParams = new URLSearchParams(searchParams.toString());

    newParams.delete(SearchParams.LOCATION);
    newParams.delete(SearchParams.CHECKIN);
    newParams.delete(SearchParams.CHECKOUT);

    newParams.set(SearchParams.LOCATION, location);

    const checkinISOString = checkin.toISOString();
    if (checkinISOString) newParams.set(SearchParams.CHECKIN, checkinISOString);

    const checkoutISOString = checkout.toISOString();
    if (checkoutISOString)
      newParams.set(SearchParams.CHECKOUT, checkoutISOString);

    push(createUrl('/cars', newParams));
  }

  useEffect(() => {
    const location = searchParams.get(SearchParams.LOCATION);
    const checkin = searchParams.get(SearchParams.CHECKIN);
    const checkout = searchParams.get(SearchParams.CHECKOUT);

    if (location) form.setValue('location', location);
    if (checkin) form.setValue('checkin', new Date(checkin));
    if (checkout) form.setValue('checkout', new Date(checkout));

    return () => {
      form.resetField('location');
      form.resetField('checkin');
      form.resetField('checkout');
    };
  }, [searchParams, form]);

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className={cn(
          'relative mx-auto grid grid-cols-[1.25fr_auto_1fr_auto_1fr_auto] items-center justify-between gap-x-2 whitespace-nowrap rounded-full border border-black/10 bg-white p-2 text-black',
          compact ? 'h-[58px] w-[720px]' : 'h-[68px] w-[860px]',
        )}
      >
        <div className="relative">
          <FormField
            control={form.control}
            name="location"
            render={({ field }) => (
              <FormItem className="grid size-full grid-cols-1 items-start justify-center overflow-x-hidden px-4">
                <FormLabel
                  className={cn(
                    'inline-block size-full font-bold',
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
                        aria-label="select location"
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
                              (location) => location.slug === field.value,
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
                            key={location.slug}
                            onSelect={() => {
                              form.setValue('location', location.slug);
                              form.clearErrors('location');
                            }}
                          >
                            <CheckIcon
                              className={cn(
                                'mr-2 size-4 shrink-0',
                                location.slug === field.value
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
                    'absolute  max-w-[calc(100%-32px)] overflow-hidden text-ellipsis',
                    compact ? 'top-[52px] text-xs' : 'top-[62px] text-[13px]',
                  )}
                />
              </FormItem>
            )}
          />
        </div>
        <Separator
          orientation="vertical"
          decorative
          className={compact ? 'h-6' : 'h-8'}
        />
        <div className="relative">
          <FormField
            control={form.control}
            name="checkin"
            render={({ field }) => (
              <FormItem className="grid h-full shrink-0 grow-0 grid-cols-1 items-start justify-center px-4">
                <FormLabel
                  className={cn(
                    'inline-block size-full font-bold',
                    compact ? 'text-xs' : 'text-[13px]',
                  )}
                >
                  Check in
                </FormLabel>
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant="unstyled"
                        className={cn(
                          'm-0 inline-block h-auto w-full text-ellipsis p-0 text-left',
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
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto" align="start">
                    <Calendar
                      initialFocus
                      mode="single"
                      selected={field.value}
                      onSelect={field.onChange}
                      disabled={(date) => date <= new Date()}
                    />
                  </PopoverContent>
                </Popover>
                <FormMessage
                  className={cn(
                    'absolute  max-w-[calc(100%-32px)] overflow-hidden text-ellipsis',
                    compact ? 'top-[52px] text-xs' : 'top-[62px] text-[13px]',
                  )}
                />
              </FormItem>
            )}
          />
        </div>
        <Separator
          orientation="vertical"
          decorative
          className={compact ? 'h-6' : 'h-8'}
        />
        <div className="relative">
          <FormField
            control={form.control}
            name="checkout"
            render={({ field }) => (
              <FormItem className="grid h-full shrink-0 grow-0 grid-cols-1 items-start justify-center px-4">
                <FormLabel
                  className={cn(
                    'inline-block size-full font-bold',
                    compact ? 'text-xs' : 'text-[13px]',
                  )}
                >
                  Check out
                </FormLabel>
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant="unstyled"
                        className={cn(
                          'm-0 inline-block h-auto w-full text-ellipsis p-0 text-left',
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
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto" align="start">
                    <Calendar
                      initialFocus
                      mode="single"
                      selected={field.value}
                      onSelect={field.onChange}
                      disabled={(date) => date <= addDays(new Date(), 1)}
                    />
                  </PopoverContent>
                </Popover>
                <FormMessage
                  className={cn(
                    'absolute  max-w-[calc(100%+32px)] overflow-hidden text-ellipsis',
                    compact ? 'top-[52px] text-xs' : 'top-[62px] text-[13px]',
                  )}
                />
              </FormItem>
            )}
          />
        </div>
        <Button
          type="submit"
          size={compact ? 'icon' : 'icon-lg'}
          className="flex shrink-0 items-center justify-center rounded-full bg-black text-white"
        >
          <span className="sr-only">Search</span>
          <SearchIcon
            className={cn(
              '[stroke-width:3px]',
              compact ? 'size-[15px]' : 'size-[18px]',
            )}
          />
        </Button>
      </form>
    </Form>
  );
}
