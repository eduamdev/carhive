'use client';

import { useCallback, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { format } from 'date-fns';
import { cn } from '@/lib/utils';

import { Icons } from '@/components/icons';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from '@/components/ui/command';
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

const formSchema = z.object({
  location: z.string({ required_error: 'Please enter a location' }),
  lat: z.number(),
  lng: z.number(),
  checkin: z.date(),
  checkout: z.date(),
});

interface MainSearchFormProps {
  compact?: boolean;
}

interface Location {
  place_id: string;
  lat: string;
  lon: string;
  display_name: string;
}

export function MainSearchForm({ compact = false }: MainSearchFormProps) {
  const router = useRouter();
  const [suggestions, setSuggestions] = useState<Location[]>([]);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  const handleValueChange = useCallback((value: string) => {
    getSuggestions(value);
    console.log(value);

    return value;
  }, []);

  async function getSuggestions(query: string) {
    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/search?city=${query}&format=json`,
      );

      if (response.ok) {
        const data: Location[] = await response.json();
        if (data.length > 0) {
          setSuggestions(data);
          console.log(data);
        } else {
          setSuggestions([]);
        }
      } else {
        console.error('Error fetching suggestions:', response.statusText);
      }
    } catch (error) {
      console.error('Error fetching suggestions:', error);
    }
  }

  function onSubmit(values: z.infer<typeof formSchema>) {
    const { lat, lng, checkin, checkout } = values;
    router.push(
      `/cars?lat=${lat}&lng=${lng}&checkin=${checkin.toISOString()}&checkout=${checkout.toISOString()}`,
    );
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
                        'm-0 inline-block w-full overflow-hidden text-ellipsis whitespace-nowrap p-0 text-left',
                        compact ? 'text-sm' : 'text-[15px]',
                        !field.value
                          ? 'text-neutral-500'
                          : 'font-semibold text-neutral-800',
                      )}
                    >
                      {field.value
                        ? suggestions.find(
                            (suggestion) =>
                              suggestion.display_name === field.value,
                          )?.display_name
                        : 'Add location'}
                    </button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="p-0">
                  <Command>
                    <CommandInput
                      placeholder="Search city..."
                      onValueChange={(value) => {
                        field.onChange(handleValueChange(value));
                      }}
                    />
                    <CommandEmpty>No place found.</CommandEmpty>
                    <CommandGroup>
                      {suggestions.map((suggestion) => (
                        <CommandItem
                          value={suggestion.display_name}
                          key={suggestion.place_id}
                          onSelect={() => {
                            form.setValue('location', suggestion.display_name);
                            form.setValue('lat', Number(suggestion.lat));
                            form.setValue('lng', Number(suggestion.lon));
                          }}
                        >
                          <Icons.check
                            className={cn(
                              'mr-2 h-4 w-4 shrink-0',
                              suggestion.display_name === field.value
                                ? 'opacity-100'
                                : 'opacity-0',
                            )}
                          />
                          {suggestion.display_name}
                        </CommandItem>
                      ))}
                    </CommandGroup>
                  </Command>
                </PopoverContent>
              </Popover>
              <FormMessage
                className={cn(
                  'absolute max-w-[310px] overflow-hidden overflow-ellipsis',
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
                        'm-0 inline-block w-full overflow-ellipsis p-0 text-left',
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
                  'absolute max-w-[180px] overflow-hidden overflow-ellipsis',
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
                        'm-0 inline-block w-full overflow-ellipsis p-0 text-left',
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
                  'absolute max-w-[180px] overflow-hidden overflow-ellipsis',
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
          <Icons.search
            className={compact ? 'h-[14px] w-[14px]' : 'h-[18px] w-[18px]'}
          />
        </Button>
      </form>
    </Form>
  );
}
