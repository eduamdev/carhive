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

const FormSchema = z
  .object({
    location: z.string({ required_error: 'Please select a location' }),
    checkin: z.date(),
    checkout: z.date(),
  })
  .refine((obj) => obj.checkout > obj.checkin, {
    message: 'Choose a later check-out date',
    path: ['checkout'],
  });

interface SearchFormProps {
  compact?: boolean;
}

export function SearchForm({ compact = false }: SearchFormProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const locations: ReadonlyArray<ILocation> = getAllLocations();

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  function onSubmit(values: z.infer<typeof FormSchema>) {
    const { location, checkin, checkout } = values;

    const newParams = new URLSearchParams(searchParams.toString());

    newParams.delete('location');
    newParams.delete('checkin');
    newParams.delete('checkout');

    newParams.set('location', location);
    newParams.set('checkin', checkin.toISOString());
    newParams.set('checkout', checkout.toISOString());

    router.push(createUrl('/cars', newParams));
  }

  useEffect(() => {
    if (searchParams.has('location')) {
      form.setValue('location', searchParams.get('location'));
    }

    if (searchParams.has('checkin')) {
      const checkinISOString = searchParams.get('checkin');
      form.setValue('checkin', new Date(checkinISOString));
    }

    if (searchParams.has('checkout')) {
      const checkoutISOString = searchParams.get('checkout');
      form.setValue('checkout', new Date(checkoutISOString));
    }
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
