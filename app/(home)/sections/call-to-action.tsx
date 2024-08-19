import Link from 'next/link';
import { Button } from '@/app/components/ui/button';
import { CaretRightIcon } from '@/app/components/icons/caret-right';

export function CallToAction() {
  return (
    <section>
      <div className="py-28 md:py-36">
        <div className="mx-auto max-w-none px-5 sm:max-w-[90%] sm:px-0 lg:max-w-4xl">
          <div className="flex flex-col items-start justify-center gap-6 gap-x-10 md:flex-row md:items-center md:gap-x-16">
            <h2 className="text-balance text-xl font-bold leading-7 md:text-2xl lg:text-2xl">
              Ready to Hit the Road? <br />
              Start Your Adventure Today!
            </h2>
            <Button size={'sm'} className="h-10 text-[13px] md:hidden" asChild>
              <Link href="/cars">
                Discover Our Cars
                <CaretRightIcon className="ml-2 size-[12px] shrink-0 opacity-60" />
              </Link>
            </Button>
            <Button size={'lg'} className="hidden md:flex" asChild>
              <Link href="/cars">
                Explore Our Cars
                <CaretRightIcon className="ml-2 size-[14px] shrink-0 opacity-60" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
