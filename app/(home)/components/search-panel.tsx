'use client';

import { useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { Button } from '@/app/components/ui/button';
import { Calendar } from '@/app/components/ui/calendar';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/app/components/ui/popover';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/app/components/ui/command';
import { Separator } from '@/app/components/ui/separator';
import { SearchIcon } from '@/app/components/icons/search';
import { CheckIcon } from '@/app/components/icons/check';
import { SelectorIcon } from '@/app/components/icons/selector';
import { addDays, format } from 'date-fns';
import { cn, createUrl } from '@/app/lib/utils';
import { Location } from '@/db/definitions';
import { SearchParams } from '@/app/lib/types';

export function SearchPanel({
  locations,
  compact = false,
}: {
  locations: Location[];
  compact?: boolean;
}) {
  const { push } = useRouter();
  const searchParams = useSearchParams();

  const [open, setOpen] = useState(false);
  const [location, setLocation] = useState('');

  const [checkInDate, setCheckInDate] = useState<Date>();
  const [checkOutDate, setCheckOutDate] = useState<Date>();

  useEffect(() => {
    const locationParam = searchParams.get(SearchParams.LOCATION);
    const checkinParam = searchParams.get(SearchParams.CHECKIN);
    const checkoutParam = searchParams.get(SearchParams.CHECKOUT);

    if (locationParam) setLocation(locationParam);
    if (checkinParam) setCheckInDate(new Date(checkinParam));
    if (checkoutParam) setCheckOutDate(new Date(checkoutParam));

    return () => {
      setLocation('');
      setCheckInDate(undefined);
      setCheckOutDate(undefined);
    };
  }, [searchParams]);

  function submitForm(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!location && !checkInDate && !checkOutDate) {
      return;
    }

    const newParams = new URLSearchParams(searchParams.toString());

    newParams.delete(SearchParams.LOCATION);
    newParams.delete(SearchParams.CHECKIN);
    newParams.delete(SearchParams.CHECKOUT);

    if (location) newParams.set(SearchParams.LOCATION, location);

    const checkinISOString = checkInDate?.toISOString();
    if (checkinISOString) newParams.set(SearchParams.CHECKIN, checkinISOString);

    const checkoutISOString = checkOutDate?.toISOString();
    if (checkoutISOString)
      newParams.set(SearchParams.CHECKOUT, checkoutISOString);

    push(createUrl('/cars', newParams));
  }

  return (
    <form onSubmit={submitForm}>
      <div className="whitespace-nowrap rounded-full border border-black/10 bg-white text-black transition-shadow hover:shadow hover:shadow-neutral-900/[0.05]">
        <div
          className={cn(
            'relative grid grid-cols-1 items-center',
            compact
              ? 'h-[--compact-search-panel-height] w-[--compact-search-panel-width]'
              : 'h-[var(--search-panel-height)] w-[--search-panel-width]',
          )}
        >
          <div className="grid h-full grid-cols-[33.333333%_33.333333%_33.333333%] items-center justify-center">
            <div className="relative h-full">
              <Separator
                orientation="vertical"
                className="absolute inset-y-0 right-0 m-auto h-7 shrink-0"
              />
              <div className="flex size-full items-center justify-center px-0">
                <Popover open={open} onOpenChange={setOpen}>
                  <PopoverTrigger asChild>
                    <Button
                      variant="ghost"
                      role="combobox"
                      aria-expanded={open}
                      className="mr-1 size-full flex-col overflow-hidden rounded-full border-none px-5 py-0"
                    >
                      <div className="flex size-full items-center justify-between">
                        <div className="flex size-full flex-col items-start justify-center truncate">
                          <div
                            className={cn(
                              'font-bold',
                              compact ? 'text-[12px]' : 'text-[13px]',
                            )}
                          >
                            Pick-up / Drop-off
                          </div>
                          {location ? (
                            <p className="truncate font-semibold text-neutral-800">
                              {
                                locations.find((loc) => loc.slug === location)
                                  ?.name
                              }
                            </p>
                          ) : (
                            <div className="text-neutral-500">
                              Select location
                            </div>
                          )}
                        </div>
                        <SelectorIcon
                          className={cn(
                            '-mr-2 ml-2  shrink-0 opacity-50',
                            compact ? 'size-4' : 'size-5',
                          )}
                        />
                      </div>
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="p-0">
                    <Command>
                      <CommandInput placeholder="Search location..." />
                      <CommandList>
                        <CommandEmpty>No location found.</CommandEmpty>
                        <CommandGroup>
                          {locations.map((loc) => (
                            <CommandItem
                              key={loc.id}
                              value={loc.slug}
                              onSelect={(currentValue) => {
                                setLocation(
                                  currentValue === location ? '' : currentValue,
                                );
                                setOpen(false);
                              }}
                            >
                              <CheckIcon
                                className={cn(
                                  'mr-2 size-4 shrink-0',
                                  location === loc.slug
                                    ? 'opacity-100'
                                    : 'opacity-0',
                                )}
                              />
                              {loc.name}
                            </CommandItem>
                          ))}
                        </CommandGroup>
                      </CommandList>
                    </Command>
                  </PopoverContent>
                </Popover>
              </div>
            </div>
            <div className="relative h-full">
              <Separator
                orientation="vertical"
                className="absolute inset-y-0 right-0 m-auto h-7 shrink-0"
              />
              <div className="flex size-full items-center justify-center px-0">
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant={'ghost'}
                      className="size-full flex-col overflow-hidden rounded-full border-none px-5 py-0"
                    >
                      <div className="flex size-full flex-col items-start justify-center truncate">
                        <div
                          className={cn(
                            'font-bold',
                            compact ? 'text-[12px]' : 'text-[13px]',
                          )}
                        >
                          Check in
                        </div>
                        {checkInDate ? (
                          <div className="font-semibold text-neutral-800">
                            {format(checkInDate, 'LLL dd, y')}
                          </div>
                        ) : (
                          <div className="truncate text-neutral-500">
                            Pick a date
                          </div>
                        )}
                      </div>
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar
                      mode="single"
                      selected={checkInDate}
                      onSelect={setCheckInDate}
                      initialFocus
                      disabled={(date) => date <= addDays(new Date(), 1)}
                    />
                  </PopoverContent>
                </Popover>
              </div>
            </div>
            <div className="h-full">
              <div className="flex size-full items-center justify-center px-0">
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant={'ghost'}
                      className="ml-1 size-full flex-col overflow-hidden rounded-full border-none py-0 pl-5 pr-16"
                    >
                      <div className="flex size-full flex-col items-start justify-center truncate">
                        <div
                          className={cn(
                            'font-bold',
                            compact ? 'text-[12px]' : 'text-[13px]',
                          )}
                        >
                          Check out
                        </div>
                        {checkOutDate ? (
                          <div className="font-semibold text-neutral-800">
                            {format(checkOutDate, 'LLL dd, y')}
                          </div>
                        ) : (
                          <div className="truncate text-neutral-500">
                            Pick a date
                          </div>
                        )}
                      </div>
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar
                      mode="single"
                      selected={checkOutDate}
                      onSelect={setCheckOutDate}
                      initialFocus
                      disabled={(date) => date <= addDays(new Date(), 1)}
                    />
                  </PopoverContent>
                </Popover>
              </div>
            </div>
          </div>
          <div className="absolute right-2 ">
            <Button
              type="submit"
              className={cn(
                'flex shrink-0 items-center justify-center rounded-full bg-black text-white',
                compact ? 'size-[2.3rem]' : 'size-12',
              )}
            >
              <span className="sr-only">Search</span>
              <SearchIcon
                className={cn(
                  ' shrink-0 [stroke-width:3px]',
                  compact ? 'size-4' : 'size-[18px]',
                )}
              />
            </Button>
          </div>
        </div>
      </div>
    </form>
  );
}
