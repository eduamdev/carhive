import Link from 'next/link';
import { Button } from '@/app/components/ui/button';
import { CaretRightIcon } from '@/app/components/icons/caret-right';

export function CallToAction() {
  return (
    <section className="border-t bg-white py-16">
      <div className="mx-auto max-w-none px-5 sm:max-w-[90%] sm:px-0 2xl:max-w-8xl">
        <div className="flex flex-col items-start justify-between gap-x-6 gap-y-9 md:flex-row md:items-center">
          <h2 className="text-2xl font-bold leading-9">
            <p>Your Journey Begins Here.</p>
            <p>Dive into Endless Possibilities!</p>
          </h2>
          <Button size="lg" asChild>
            <Link href="/cars">
              <span className="flex items-center justify-center text-[15px]">
                Explore Cars
                <CaretRightIcon className="ml-2 size-[14px] shrink-0 opacity-60" />
              </span>
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
