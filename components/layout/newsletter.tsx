import { SubscribeForm } from '@/components/layout/subscribe-form';

export function Newsletter() {
  return (
    <div className="col-span-full flex w-full flex-col gap-2 lg:max-w-[240px]">
      <h3 className="mb-1.5 text-sm font-medium text-neutral-800 lg:text-sm">
        Subscribe to our newsletter
      </h3>
      <p className="mb-1.5 text-[13px] leading-6 text-neutral-600 lg:text-sm">
        Join Our Community! Get exclusive travel offers and insider tips.
      </p>
      <SubscribeForm />
    </div>
  );
}
