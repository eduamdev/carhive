import Link from 'next/link';
import { Button } from '@/components/ui/button';

export function CallToAction() {
  return (
    <section className="border-t bg-neutral-50 py-16">
      <div className="2xl:max-w-8xl mx-auto max-w-none px-5 sm:max-w-[90%] sm:px-0">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <h2 className="text-2xl font-extrabold">
            <p>Lorem ipsum dolor sit.</p>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
          </h2>
          <div>
            <Link
              href="/cars"
              className="inline-flex h-10 items-center justify-center rounded-md bg-neutral-900 px-4 py-2 text-sm font-medium text-neutral-50 ring-offset-white transition-colors hover:bg-neutral-900/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
            >
              Get started
            </Link>
            <Button variant="ghost" className="ml-4">
              Learn more
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
