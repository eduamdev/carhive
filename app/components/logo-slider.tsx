'use client';

import { useLayoutEffect, useRef, useState } from 'react';
import { Icons } from '@/app/components/icons';
import { cn } from '@/app/lib/utils';

type LogoData = {
  id: string;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
  height: string;
};

const logoHeights: Record<string, string> = {
  volvo: '17px',
  suvaru: '52px',
  jeep: '28px',
  porsche: '36px',
  volkswagen: '40px',
  toyota: '40px',
  bmw: '46px',
  honda: '32px',
  audi: '32px',
  mini: '40px',
  ford: '48px',
  tesla: '18px',
  nissan: '46px',
  kia: '18px',
  hyundai: '18px',
  mercedesBenz: '42px',
};

const logosData: LogoData[] = Object.keys(logoHeights).map((id) => ({
  id,
  icon: Icons[id as keyof typeof Icons],
  height: logoHeights[id],
}));

function cloneLogos(
  logoElements: NodeListOf<HTMLLIElement>,
  logoListElement: HTMLUListElement | null,
  totalSets: number,
) {
  for (let set = 1; set <= totalSets; set++) {
    logoElements.forEach((logo, index) => {
      const clone = logo.cloneNode(true) as HTMLLIElement;
      clone.id = `logo-clone-${set}-${index + 1}`;

      if (logoListElement) {
        logoListElement.appendChild(clone);
      }
    });
  }
}

export function LogoSlider() {
  const [isReady, setIsReady] = useState(false);
  const logosListRef = useRef<HTMLUListElement>(null);
  const logoElementsRef = useRef<NodeListOf<HTMLLIElement> | null>(null);

  useLayoutEffect(() => {
    const logoList = logosListRef.current;
    const logoElements = logoList?.querySelectorAll<HTMLLIElement>('li');

    if (logoList && logoElements) {
      const totalLogos = logoElements.length;
      document.documentElement.style.setProperty(
        '--slider-total-logos',
        totalLogos.toString(),
      );

      logoElementsRef.current = logoElements;

      const totalSetsToClone = 2;
      cloneLogos(logoElements, logoList, totalSetsToClone);

      setIsReady(true);
    }

    return () => {
      const clones = document.querySelectorAll<HTMLLIElement>(
        "li[id^='logo-clone']",
      );

      if (logoList) {
        clones.forEach((clone) => {
          logoList.removeChild(clone);
        });
      }
    };
  }, []);

  return (
    <div className="relative flex h-[132px] min-h-[132px] w-screen items-center overflow-hidden whitespace-nowrap before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-40 before:bg-gradient-to-r before:from-neutral-50 before:content-[''] after:absolute after:right-0 after:top-0 after:z-10 after:h-full after:w-40 after:bg-gradient-to-l after:from-neutral-50 after:content-[''] md:before:w-64 md:after:w-64">
      <div
        className={cn(
          'transition-opacity',
          isReady ? 'opacity-100' : 'opacity-0',
        )}
      >
        <ul
          ref={logosListRef}
          className="flex w-[var(--slider-total-logo-width)] animate-slide items-center opacity-50 grayscale"
        >
          {logosData.map(({ id, icon: Icon, height }) => (
            <li
              key={id}
              className="mx-5 inline-flex w-[var(--slider-logo-width)] items-center justify-center"
            >
              <Icon style={{ height }} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
