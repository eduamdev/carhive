'use client';

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

const locations = [
  { label: 'Paris, France', value: 'paris', lat: '48.8589', lng: '2.3469' },
  {
    label: 'Dubai, United Arab Emirates',
    value: 'dubai',
    lat: '25.2655',
    lng: '55.2925',
  },
  { label: 'Cancún, México', value: 'cancun', lat: '21.1214', lng: '-86.8559' },
  { label: 'Rome, Italy', value: 'rome', lat: '41.8988', lng: '12.5451' },
] as const;

const FormSchema = z.object({
  location: z.string({ required_error: 'Please enter a location' }),
  lat: z.number(),
  lng: z.number(),
  checkin: z.date(),
  checkout: z.date(),
});

interface SearchFormProps {
  compact?: boolean;
}

export function SearchForm({ compact = false }: SearchFormProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  function onSubmit(values: z.infer<typeof FormSchema>) {
    const { lat, lng, checkin, checkout } = values;

    const newParams = new URLSearchParams(searchParams.toString());

    newParams.delete('lat');
    newParams.delete('lng');
    newParams.delete('checkin');
    newParams.delete('checkout');

    newParams.set('lat', lat.toString());
    newParams.set('lng', lng.toString());
    newParams.set('checkin', checkin.toString());
    newParams.set('checkout', checkout.toString());

    router.push(createUrl('/cars', newParams));
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className={cn(
          'relative mx-auto flex w-[860px] items-center justify-between gap-x-2 whitespace-nowrap rounded-full border border-black/10 bg-white px-2 text-black',
          compact ? 'h-[58px] py-2' : 'h-[68px] py-2.5',
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
                    <button
                      role="combobox"
                      className={cn(
                        'm-0 inline-block w-full truncate p-0 text-left',
                        compact ? 'text-sm' : 'text-[15px]',
                        !field.value
                          ? 'text-neutral-500'
                          : 'font-semibold text-neutral-800',
                      )}
                    >
                      {field.value
                        ? locations.find(
                            (location) => location.value === field.value,
                          )?.label
                        : 'Add location'}
                    </button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="p-0">
                  <Command>
                    <CommandInput placeholder="Search city..." />
                    <CommandEmpty>No place found.</CommandEmpty>
                    <CommandGroup>
                      {locations.map((location) => (
                        <CommandItem
                          value={location.label}
                          key={location.value}
                          onSelect={() => {
                            form.setValue('location', location.value);
                            form.setValue('lat', Number(location.lat));
                            form.setValue('lng', Number(location.lng));
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
                          {location.label}
                        </CommandItem>
                      ))}
                    </CommandGroup>
                  </Command>
                </PopoverContent>
              </Popover>
              <FormMessage
                className={cn(
                  'absolute max-w-[310px] overflow-hidden text-ellipsis',
                  compact ? 'top-[58px] text-xs' : 'top-[72px] text-[13px]',
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
                  'absolute max-w-[180px] overflow-hidden text-ellipsis',
                  compact ? 'top-[58px] text-xs' : 'top-[72px] text-[13px]',
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
                  'absolute max-w-[180px] overflow-hidden text-ellipsis',
                  compact ? 'top-[58px] text-xs' : 'top-[72px] text-[13px]',
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
