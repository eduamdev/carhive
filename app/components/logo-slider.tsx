'use client';

import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { Icons } from '@/app/components/icons';
import { cn, setCSSVariable } from '@/app/lib/utils';

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

const initialLogos: LogoData[] = Object.keys(logoHeights).map((id) => ({
  id,
  icon: Icons[id as keyof typeof Icons],
  height: logoHeights[id],
}));

export function LogoSlider() {
  const LOGO_WIDTH = '10rem';
  const TOTAL_SETS_TO_CLONE = 2;

  const logosListRef = useRef<HTMLUListElement>(null);
  const [isSliderInitialized, setIsSliderInitialized] = useState(false);
  const [clonedLogos, setClonedLogos] = useState<LogoData[]>([]);

  useEffect(() => {
    const logoList = logosListRef.current;
    const logoElements = logoList?.querySelectorAll<HTMLLIElement>('li');

    if (logoList && logoElements) {
      const totalLogos = logoElements.length;
      setCSSVariable(
        '--slider-total-sets',
        (TOTAL_SETS_TO_CLONE + 1).toString(),
      );
      setCSSVariable('--slider-total-logos', totalLogos.toString());
      setCSSVariable('--slider-logo-width', LOGO_WIDTH);
      setCSSVariable(
        '--slider-total-logo-width',
        `calc(
             var(--slider-total-logos) * var(--slider-logo-width) * (${TOTAL_SETS_TO_CLONE} + 1)
           )`,
      );

      setIsSliderInitialized(true);
    }
  }, []);

  useLayoutEffect(() => {
    if (isSliderInitialized) {
      setClonedLogos(generateClonedLogos(initialLogos, TOTAL_SETS_TO_CLONE));
    }
  }, [isSliderInitialized]);

  const generateClonedLogos = (
    logos: LogoData[],
    totalSets: number,
  ): LogoData[] => {
    const clonedLogos: LogoData[] = [];
    for (let set = 1; set <= totalSets; set++) {
      logos.forEach(({ id, icon, height }) => {
        const clonedId = `logo-clone-${set}-${id}`;
        clonedLogos.push({ id: clonedId, icon, height });
      });
    }
    return clonedLogos;
  };

  return (
    <div className="relative flex h-[132px] min-h-[132px] w-screen items-center overflow-hidden whitespace-nowrap before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-40 before:bg-gradient-to-r before:from-neutral-50 before:content-[''] after:absolute after:right-0 after:top-0 after:z-10 after:h-full after:w-40 after:bg-gradient-to-l after:from-neutral-50 after:content-[''] md:before:w-64 md:after:w-64">
      <div
        className={cn(
          'h-[52px] min-h-[52px] transition-opacity',
          clonedLogos.length > 0 ? 'opacity-100' : 'opacity-0',
        )}
      >
        <ul
          ref={logosListRef}
          className="flex w-[var(--slider-total-logo-width)] animate-slider items-center opacity-60 grayscale"
        >
          <InitialLogos />
          {clonedLogos.map(({ id, icon: Icon, height }) => (
            <li
              key={id}
              id={id}
              className="mx-5 inline-flex w-[var(--slider-logo-width)] items-center justify-center"
              aria-hidden="true"
            >
              <Icon style={{ height }} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function InitialLogos() {
  return (
    <>
      {initialLogos.map(({ id, icon: Icon, height }) => (
        <li
          key={id}
          id={id}
          className="mx-5 inline-flex w-[var(--slider-logo-width)] items-center justify-center"
        >
          <Icon style={{ height }} />
        </li>
      ))}
    </>
  );
}
