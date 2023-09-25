import Link from 'next/link';
import { Button } from '@/components/ui/button';

export function CallToAction() {
  return (
    <section className="border-t bg-neutral-50 py-16">
      <div className="mx-auto max-w-none px-5 sm:max-w-[90%] sm:px-0 2xl:max-w-8xl">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <h2 className="text-2xl font-extrabold">
            <p>Lorem ipsum dolor sit.</p>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
          </h2>
          <div>
            <Button asChild>
              <Link href="/cars">Get started</Link>
            </Button>
            <Button variant="ghost" className="ml-4">
              Learn more
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
