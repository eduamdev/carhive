'use client';

import { useEffect } from 'react';

export function BrandLogoSlider() {
  useEffect(() => {
    const brandList = document.querySelector('ul#brandList');
    const brands = document.querySelectorAll('ul#brandList li');

    document.documentElement.style.setProperty(
      '--total-brand',
      brands.length.toString(),
    );

    let i = 0;
    brands.forEach((brand) => {
      i++;
      const clone = brand.cloneNode(true) as HTMLElement;
      clone.id = `clone_${i}`;
      brandList.appendChild(clone);
    });

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
          className="flex w-[var(--total-logo-width)] animate-slide items-center opacity-50 grayscale"
        >
          <li className="mx-5 inline-flex w-[var(--logo-width)] items-center justify-center">
            <img
              className="h-7"
              src="https://assets-global.website-files.com/611a9c161d362bab9bf15fd8/648b128d90b754e37dcce4c2_6398d0a6fb288823cb821283_Wing_Logo_Primary.svg"
              alt=""
            />
          </li>
          <li className="mx-5 inline-flex w-[var(--logo-width)] items-center justify-center">
            <img
              className="h-10"
              src="https://assets-global.website-files.com/611a9c161d362bab9bf15fd8/648b154f233e27a250dc5d0a_seedcamp-logo-p-500.webp"
              alt=""
            />
          </li>
          <li className="mx-5 inline-flex w-[var(--logo-width)] items-center justify-center">
            <img
              className="h-8"
              src="https://assets-global.website-files.com/611a9c161d362bab9bf15fd8/648b13dbaff30afc07ac1640_logo.svg"
              alt=""
            />
          </li>
          <li className="mx-5 inline-flex w-[var(--logo-width)] items-center justify-center">
            <img
              className="h-4"
              src="https://assets-global.website-files.com/611a9c161d362bab9bf15fd8/648b124c9a41d5d78bebb8a9_613b85712c9672feefb12665_Logo%20-%20new.svg"
              alt=""
            />
          </li>
          <li className="mx-5 inline-flex w-[var(--logo-width)] items-center justify-center">
            <img
              className="h-7"
              src="https://assets-global.website-files.com/611a9c161d362bab9bf15fd8/648b128d90b754e37dcce4c2_6398d0a6fb288823cb821283_Wing_Logo_Primary.svg"
              alt=""
            />
          </li>
          <li className="mx-5 inline-flex w-[var(--logo-width)] items-center justify-center">
            <img
              className="h-10"
              src="https://assets-global.website-files.com/611a9c161d362bab9bf15fd8/648b154f233e27a250dc5d0a_seedcamp-logo-p-500.webp"
              alt=""
            />
          </li>
          <li className="mx-5 inline-flex w-[var(--logo-width)] items-center justify-center">
            <img
              className="h-8"
              src="https://assets-global.website-files.com/611a9c161d362bab9bf15fd8/648b13dbaff30afc07ac1640_logo.svg"
              alt=""
            />
          </li>
          <li className="mx-5 inline-flex w-[var(--logo-width)] items-center justify-center">
            <img
              className="h-4"
              src="https://assets-global.website-files.com/611a9c161d362bab9bf15fd8/648b124c9a41d5d78bebb8a9_613b85712c9672feefb12665_Logo%20-%20new.svg"
              alt=""
            />
          </li>
        </ul>
      </div>
    </div>
  );
}
