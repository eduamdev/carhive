'use client';

import { useEffect, useLayoutEffect, useState } from 'react';
import { Icons } from '@/app/components/icons';
import { cn } from '@/app/lib/utils';

export function LogoSlider() {
  const [isReady, setIsReady] = useState(false);

  useLayoutEffect(() => {
    setIsReady(true);
  }, []);

  useEffect(() => {
    const logosList = document.querySelector('ul#logosList');
    const logos = document.querySelectorAll('ul#logosList li');

    document.documentElement.style.setProperty(
      '--slider-total-logos',
      logos.length.toString(),
    );

    function cloneLogos(groupNumber: number) {
      let index = 0;

      logos.forEach((logo) => {
        index++;
        const clone = logo.cloneNode(true) as HTMLElement;
        clone.id = `clone_group${groupNumber}_logo${index}`;

        if (logosList) logosList.appendChild(clone);
      });
    }

    cloneLogos(1);
    cloneLogos(2);

    return () => {
      const cloneGroups = document.querySelectorAll("li[id^='clone_group']");

      if (logosList)
        cloneGroups.forEach((clone) => {
          logosList.removeChild(clone);
        });
    };
  }, []);

  return (
    <div className="mt-16 overflow-x-hidden text-center">
      <div
        className={cn(
          "relative flex w-screen items-center overflow-hidden whitespace-nowrap py-10 transition-opacity before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-40 before:bg-gradient-to-r before:from-neutral-50 before:content-[''] after:absolute after:right-0 after:top-0 after:z-10 after:h-full after:w-40 after:bg-gradient-to-l after:from-neutral-50 after:content-[''] md:before:w-64 md:after:w-64",
          isReady ? 'opacity-100' : 'opacity-0',
        )}
      >
        <ul
          id="logosList"
          className="flex w-[var(--slider-total-logo-width)] animate-slide items-center opacity-50 grayscale"
        >
          <li className="mx-5 inline-flex w-[var(--slider-logo-width)] items-center justify-center">
            <Icons.volvo className="h-[18px]" />
          </li>
          <li className="mx-5 inline-flex w-[var(--slider-logo-width)] items-center justify-center">
            <Icons.suvaru className="h-[52px]" />
          </li>
          <li className="mx-5 inline-flex w-[var(--slider-logo-width)] items-center justify-center">
            <Icons.jeep className="h-7" />
          </li>
          <li className="mx-5 inline-flex w-[var(--slider-logo-width)] items-center justify-center">
            <Icons.porsche className="h-9" />
          </li>
          <li className="mx-5 inline-flex w-[var(--slider-logo-width)] items-center justify-center">
            <Icons.volkswagen className="h-10" />
          </li>
          <li className="mx-5 inline-flex w-[var(--slider-logo-width)] items-center justify-center">
            <Icons.toyota className="h-10" />
          </li>
          <li className="mx-5 inline-flex w-[var(--slider-logo-width)] items-center justify-center">
            <Icons.bmw className="h-12" />
          </li>
          <li className="mx-5 inline-flex w-[var(--slider-logo-width)] items-center justify-center">
            <Icons.honda className="h-9" />
          </li>
          <li className="mx-5 inline-flex w-[var(--slider-logo-width)] items-center justify-center">
            <Icons.audi className="h-8" />
          </li>
          <li className="mx-5 inline-flex w-[var(--slider-logo-width)] items-center justify-center">
            <Icons.mini className="h-10" />
          </li>
          <li className="mx-5 inline-flex w-[var(--slider-logo-width)] items-center justify-center">
            <Icons.ford className="h-12" />
          </li>
          <li className="mx-5 inline-flex w-[var(--slider-logo-width)] items-center justify-center">
            <Icons.tesla className="h-5" />
          </li>
          <li className="mx-5 inline-flex w-[var(--slider-logo-width)] items-center justify-center">
            <Icons.nissan className="h-12" />
          </li>
          <li className="mx-5 inline-flex w-[var(--slider-logo-width)] items-center justify-center">
            <Icons.kia className="h-[18px]" />
          </li>
          <li className="mx-5 inline-flex w-[var(--slider-logo-width)] items-center justify-center">
            <Icons.hyundai className="h-5" />
          </li>
          <li className="mx-5 inline-flex w-[var(--slider-logo-width)] items-center justify-center">
            <Icons.mercedesBenz className="h-11" />
          </li>
        </ul>
      </div>
    </div>
  );
}
