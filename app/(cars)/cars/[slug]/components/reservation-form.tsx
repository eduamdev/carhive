'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { useCallback, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
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
import { Calendar } from '@/app/components/ui/calendar';
import { Button } from '@/app/components/ui/button';
import { addDays, differenceInDays, format, isAfter } from 'date-fns';
import { SearchParams } from '@/app/lib/types';
import { Location } from '@/db/definitions';
import { cn, createUrl, formatCurrency } from '@/app/lib/utils';
import { Separator } from '@/app/components/ui/separator';
import { CheckIcon } from '@/app/components/icons/check';

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

interface ReservationFormProps {
  carSlug: string;
  locations: Location[];
  pricePerDay: number;
  currency: string;
}

export function ReservationForm({
  carSlug,
  locations,
  pricePerDay,
  currency,
}: ReservationFormProps) {
  const { push } = useRouter();
  const searchParams = useSearchParams();

  const [days, setDays] = useState<number | undefined>(undefined);
  const [subtotal, setSubtotal] = useState<number | undefined>(undefined);
  const [taxesAndFees, setTaxesAndFees] = useState<number | undefined>(
    undefined,
  );

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  function onSubmit(values: z.infer<typeof FormSchema>) {
    const { location, checkin, checkout } = values;

    const newParams = new URLSearchParams(searchParams.toString());

    newParams.set(SearchParams.CAR_SLUG, carSlug);
    newParams.set(SearchParams.LOCATION, location);
    newParams.set(SearchParams.CHECKIN, checkin.toISOString());
    newParams.set(SearchParams.CHECKOUT, checkout.toISOString());

    console.log({ location, checkin, checkout });
    push(createUrl('/reservation', newParams));
  }

  const calculateTotal = useCallback(() => {
    const checkin = form.getValues('checkin');
    const checkout = form.getValues('checkout');

    if (checkin && checkout && isAfter(checkout, checkin)) {
      const calculatedDays = differenceInDays(checkout, checkin);
      const calculatedSubtotal = pricePerDay * calculatedDays;
      const calculatedTaxesAndFees = calculatedSubtotal * 0.16;

      setDays(calculatedDays);
      setSubtotal(calculatedSubtotal);
      setTaxesAndFees(calculatedTaxesAndFees);
    } else {
      // Reset values if either check-in or checkout is not set or if checkout is not after check-in
      setDays(undefined);
      setSubtotal(undefined);
      setTaxesAndFees(undefined);
    }
  }, [form, pricePerDay]);

  useEffect(() => {
    const location = searchParams.get(SearchParams.LOCATION);
    const checkin = searchParams.get(SearchParams.CHECKIN);
    const checkout = searchParams.get(SearchParams.CHECKOUT);

    if (location) form.setValue('location', location);
    if (checkin) form.setValue('checkin', new Date(checkin));
    if (checkout) form.setValue('checkout', new Date(checkout));

    calculateTotal();

    return () => {
      form.resetField('location');
      form.resetField('checkin');
      form.resetField('checkout');

      calculateTotal();
    };
  }, [searchParams, form, calculateTotal]);

  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="mt-6 w-full rounded-xl border border-neutral-300">
            <FormField
              control={form.control}
              name="location"
              render={({ field }) => (
                <FormItem className="relative">
                  <FormLabel className="absolute left-[10px] top-[10px] text-xs font-bold leading-none">
                    Pick-up / Drop-off
                  </FormLabel>
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          role="combobox"
                          aria-label="select location"
                          variant="unstyled"
                          className="m-0 flex h-[52px] w-full flex-col justify-end gap-1.5 truncate rounded-t-xl border-b border-neutral-300 p-2.5 text-left text-sm leading-none text-neutral-600"
                        >
                          <span className="w-full">
                            {field.value
                              ? locations.find(
                                  (location) => location.slug === field.value,
                                )?.name
                              : 'Select location'}
                          </span>
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
                </FormItem>
              )}
            />
            <div className="grid grid-cols-2">
              <FormField
                control={form.control}
                name="checkin"
                render={({ field }) => (
                  <FormItem className="relative">
                    <FormLabel className="absolute left-[10px] top-[10px] text-xs font-bold leading-none">
                      Check in
                    </FormLabel>
                    <Popover>
                      <PopoverTrigger asChild>
                        <FormControl>
                          <Button
                            variant="unstyled"
                            className="m-0 flex h-[52px] w-full flex-col justify-end gap-1.5 truncate rounded-bl-xl p-2.5 text-left text-sm leading-none text-neutral-600"
                          >
                            <span className="w-full">
                              {field.value ? (
                                format(field.value, 'dd/MM/yyyy')
                              ) : (
                                <span>Pick a date</span>
                              )}
                            </span>
                          </Button>
                        </FormControl>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto" align="start">
                        <Calendar
                          initialFocus
                          mode="single"
                          selected={field.value}
                          onSelect={(selected) => {
                            if (selected) {
                              form.setValue('checkin', selected);
                              form.clearErrors('checkin');
                            } else {
                              form.resetField('checkin');
                            }

                            calculateTotal();
                          }}
                          disabled={(date) => date <= new Date()}
                        />
                      </PopoverContent>
                    </Popover>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="checkout"
                render={({ field }) => (
                  <FormItem className="relative">
                    <FormLabel className="absolute left-[10px] top-[10px] text-xs font-bold leading-none">
                      Check out
                    </FormLabel>
                    <Popover>
                      <PopoverTrigger asChild>
                        <FormControl>
                          <Button
                            variant="unstyled"
                            className="m-0 flex h-[52px] w-full flex-col justify-end gap-1.5 truncate rounded-br-xl border-l border-neutral-300 p-2.5 text-left text-sm leading-none text-neutral-600"
                          >
                            <span className="w-full">
                              {field.value ? (
                                format(field.value, 'dd/MM/yyyy')
                              ) : (
                                <span>Pick a date</span>
                              )}
                            </span>
                          </Button>
                        </FormControl>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto" align="start">
                        <Calendar
                          initialFocus
                          mode="single"
                          selected={field.value}
                          onSelect={(selected) => {
                            if (selected) {
                              form.setValue('checkout', selected);
                              form.clearErrors('checkout');
                            } else {
                              form.resetField('checkout');
                            }

                            calculateTotal();
                          }}
                          disabled={(date) => date <= addDays(new Date(), 1)}
                        />
                      </PopoverContent>
                    </Popover>
                  </FormItem>
                )}
              />
            </div>
          </div>
          <div className="mt-2" aria-live="polite">
            {form.formState.errors.location && (
              <p className="mt-1 text-center text-xs font-medium text-red-500">
                {form.formState.errors.location.message}
              </p>
            )}
            {form.formState.errors.checkin && (
              <p className="mt-1 text-center text-xs font-medium text-red-500">
                {form.formState.errors.checkin.message}
              </p>
            )}
            {form.formState.errors.checkout && (
              <p className="mt-1 text-center text-xs font-medium text-red-500">
                {form.formState.errors.checkout.message}
              </p>
            )}
          </div>
          <Button type="submit" size="lg" className="mt-4 w-full text-base">
            Reserve
          </Button>
        </form>
      </Form>
      <p className="mt-4 text-center text-sm text-neutral-600">
        You won&apos;t be charged yet
      </p>
      <div className="mt-5 text-neutral-600">
        <div className="flex flex-col gap-y-3">
          <div className="flex items-center justify-between">
            <span className="underline">
              {formatCurrency(pricePerDay, currency)} x {days ? days : '—'}{' '}
              {days ? (days > 1 ? 'days' : 'day') : 'days'}
            </span>
            <span>{subtotal ? formatCurrency(subtotal, currency) : '—'}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="underline">Taxes and fees</span>
            <span>
              {taxesAndFees ? formatCurrency(taxesAndFees, currency) : '—'}
            </span>
          </div>
        </div>
        <Separator decorative orientation="horizontal" className="my-6" />
        <div className="flex items-center justify-between font-semibold">
          <strong>Total (taxes included)</strong>
          <strong>
            {subtotal && taxesAndFees
              ? formatCurrency(subtotal + taxesAndFees, currency)
              : '—'}
          </strong>
        </div>
      </div>
    </>
  );
}
