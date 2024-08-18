import Link from 'next/link';
import { Button } from '@/app/components/ui/button';
import { CaretRightIcon } from '@/app/components/icons/caret-right';

export function CallToAction() {
  return (
    <section>
      <div className="py-24 md:py-32">
        <div className="mx-auto max-w-none px-5 sm:max-w-[90%] sm:px-0 lg:max-w-4xl">
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center md:justify-center md:gap-x-20">
            <h2 className="text-balance text-lg font-bold leading-7 md:text-xl lg:text-[22px]">
              Ready to Hit the Road? <br />
              Start Your Adventure Today!
            </h2>
            <Button size={'sm'} className="lg:hidden" asChild>
              <Link href="/cars">
                Discover Our Cars
                <CaretRightIcon className="ml-2 size-[14px] shrink-0 opacity-60" />
              </Link>
            </Button>
            <Button className="hidden lg:flex" asChild>
              <Link href="/cars">
                Discover Our Cars
                <CaretRightIcon className="ml-2 size-[14px] shrink-0 opacity-60" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
