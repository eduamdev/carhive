'use client';

import { useEffect } from 'react';
import { Icons } from '@/components/icons';

export function LogoSlider() {
  useEffect(() => {
    const brandList = document.querySelector('ul#brandList');
    const brands = document.querySelectorAll('ul#brandList li');

    document.documentElement.style.setProperty(
      '--slider-total-logos',
      brands.length.toString(),
    );

    function cloneBrands(setNumber) {
      let i = 0;
      brands.forEach((brand) => {
        i++;
        const clone = brand.cloneNode(true) as HTMLElement;
        clone.id = `clone_set${setNumber}_${i}`;
        brandList.appendChild(clone);
      });
    }

    cloneBrands(1);
    cloneBrands(2);

    return () => {
      const clones = document.querySelectorAll("li[id^='clone_']");

      clones.forEach((clone) => {
        brandList.removeChild(clone);
      });
    };
  }, []);

  return (
    <div className="mt-16 text-center">
      <div className="relative flex w-screen items-center overflow-hidden whitespace-nowrap py-10 before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-40 before:bg-gradient-to-r before:from-neutral-50 before:content-[''] after:absolute after:right-0 after:top-0 after:z-10 after:h-full after:w-40 after:bg-gradient-to-l after:from-neutral-50 after:content-[''] md:before:w-64 md:after:w-64">
        <ul
          id="brandList"
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
