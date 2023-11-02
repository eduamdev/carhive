import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Icons } from '@/components/icons';

export function CallToAction() {
  return (
    <section className="border-t bg-white py-16">
      <div className="mx-auto max-w-none px-5 sm:max-w-[90%] sm:px-0 2xl:max-w-8xl">
        <div className="flex flex-col items-start justify-between gap-x-6 gap-y-9 md:flex-row md:items-center">
          <h2 className="text-2xl font-bold leading-9">
            <p>Your Journey Begins Here.</p>
            <p>Dive into Endless Possibilities!</p>
          </h2>
          <Button className="text-[15px] xl:hidden" asChild>
            <Link
              href="/cars"
              className="flex items-center justify-center gap-x-2.5"
            >
              Explore Cars <Icons.chevronForward className="h-3 w-3" />
            </Link>
          </Button>
          <Button size="xl" className="hidden text-[15px] xl:flex" asChild>
            <Link
              href="/cars"
              className="flex items-center justify-center gap-x-3"
            >
              Explore Cars{' '}
              <Icons.chevronForward className="h-[14px] w-[14px]" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
