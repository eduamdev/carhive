'use client';

import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { VolvoIcon } from './icons/brands/volvo';
import { SuvaruIcon } from './icons/brands/suvaru';
import { JeepIcon } from './icons/brands/jeep';
import { PorscheIcon } from './icons/brands/porsche';
import { VolkswagenIcon } from './icons/brands/volkswagen';
import { ToyotaIcon } from './icons/brands/toyota';
import { BMWIcon } from './icons/brands/bmw';
import { HondaIcon } from './icons/brands/honda';
import { AudiIcon } from './icons/brands/audi';
import { MiniIcon } from './icons/brands/mini';
import { FordIcon } from './icons/brands/ford';
import { TeslaIcon } from './icons/brands/tesla';
import { NissanIcon } from './icons/brands/nissan';
import { KiaIcon } from './icons/brands/kia';
import { HyundaiIcon } from './icons/brands/hyundai';
import { MercedesBenzIcon } from './icons/brands/mercedes-benz';
import { cn, setCSSVariable } from '@/app/lib/utils';

type LogoData = {
  id: string;
  icon: JSX.Element;
};

const icons = {
  volvo: <VolvoIcon style={{ height: '17px' }} />,
  suvaru: <SuvaruIcon style={{ height: '52px' }} />,
  jeep: <JeepIcon style={{ height: '28px' }} />,
  porsche: <PorscheIcon style={{ height: '36px' }} />,
  volkswagen: <VolkswagenIcon style={{ height: '40px' }} />,
  toyota: <ToyotaIcon style={{ height: '40px' }} />,
  bmw: <BMWIcon style={{ height: '46px' }} />,
  honda: <HondaIcon style={{ height: '32px' }} />,
  audi: <AudiIcon style={{ height: '32px' }} />,
  mini: <MiniIcon style={{ height: '40px' }} />,
  ford: <FordIcon style={{ height: '48px' }} />,
  tesla: <TeslaIcon style={{ height: '18px' }} />,
  nissan: <NissanIcon style={{ height: '46px' }} />,
  kia: <KiaIcon style={{ height: '18px' }} />,
  hyundai: <HyundaiIcon style={{ height: '18px' }} />,
  mercedesBenz: <MercedesBenzIcon style={{ height: '42px' }} />,
};

const initialLogos = Object.keys(icons).map((id) => ({
  id,
  icon: icons[id as keyof typeof icons],
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
      logos.forEach(({ id, icon }) => {
        const clonedId = `logo-clone-${set}-${id}`;
        clonedLogos.push({ id: clonedId, icon });
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
          {clonedLogos.map(({ id, icon }) => (
            <li
              key={id}
              id={id}
              className="mx-5 inline-flex w-[var(--slider-logo-width)] items-center justify-center"
              aria-hidden="true"
            >
              {icon}
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
      {initialLogos.map(({ id, icon }) => (
        <li
          key={id}
          id={id}
          className="mx-5 inline-flex w-[var(--slider-logo-width)] items-center justify-center"
        >
          {icon}
        </li>
      ))}
    </>
  );
}
