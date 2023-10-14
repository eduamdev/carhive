'use client';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { useToast } from '@/components/ui/use-toast';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

const newsletterSchema = z.object({
  newsletter: z.string().email(),
});

export function Newsletter() {
  const { toast } = useToast();

  const form = useForm<z.infer<typeof newsletterSchema>>({
    resolver: zodResolver(newsletterSchema),
  });

  function onSubmit(values: z.infer<typeof newsletterSchema>) {
    toast({
      title: '✅ Thanks for subscribing!',
    });
  }

  return (
    <div className="col-span-full flex flex-col gap-2 md:max-w-[240px]">
      <h4 className="mb-1 font-medium text-neutral-800">
        Subscribe to our newsletter
      </h4>
      <p className="leading-6 text-neutral-600">
        Join Our Community! Get exclusive travel offers and insider tips.
      </p>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <FormField
            control={form.control}
            name="newsletter"
            render={({ field }) => (
              <FormItem>
                <div className="relative">
                  <FormControl>
                    <Input
                      placeholder="you@domain.com"
                      type="email"
                      className="w-full text-ellipsis rounded-md border bg-neutral-50 px-3.5 py-2 pr-24 text-sm"
                      {...field}
                    />
                  </FormControl>
                  <Button
                    type="submit"
                    variant="outline"
                    size="xs"
                    className="absolute right-1 top-1/2 -translate-y-1/2 rounded-md text-xs text-neutral-600"
                  >
                    Subscribe
                  </Button>
                </div>
                <FormMessage className="mt-1 text-[13px]" />
              </FormItem>
            )}
          />
        </form>
      </Form>
    </div>
  );
}
