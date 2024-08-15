'use client';

import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { VolvoIcon } from './assets/car-logos/volvo';
import { SuvaruIcon } from './assets/car-logos/suvaru';
import { JeepIcon } from './assets/car-logos/jeep';
import { PorscheIcon } from './assets/car-logos/porsche';
import { VolkswagenIcon } from './assets/car-logos/volkswagen';
import { ToyotaIcon } from './assets/car-logos/toyota';
import { BMWIcon } from './assets/car-logos/bmw';
import { HondaIcon } from './assets/car-logos/honda';
import { AudiIcon } from './assets/car-logos/audi';
import { MiniIcon } from './assets/car-logos/mini';
import { FordIcon } from './assets/car-logos/ford';
import { TeslaIcon } from './assets/car-logos/tesla';
import { NissanIcon } from './assets/car-logos/nissan';
import { KiaIcon } from './assets/car-logos/kia';
import { HyundaiIcon } from './assets/car-logos/hyundai';
import { MercedesBenzIcon } from './assets/car-logos/mercedes-benz';
import { cn, setCSSVariable } from '@/app/lib/utils';

type LogoData = {
  id: string;
  icon: JSX.Element;
};

const logoIcons = {
  kia: <KiaIcon style={{ height: '11px', flexShrink: 0 }} />,
  suvaru: <SuvaruIcon style={{ height: '17px', flexShrink: 0 }} />,
  mini: <MiniIcon style={{ height: '28px', flexShrink: 0 }} />,
  hyundai: <HyundaiIcon style={{ height: '13px', flexShrink: 0 }} />,
  mercedesBenz: <MercedesBenzIcon style={{ height: '28px', flexShrink: 0 }} />,
  toyota: <ToyotaIcon style={{ height: '19px', flexShrink: 0 }} />,
  bmw: <BMWIcon style={{ height: '32px', flexShrink: 0 }} />,
  honda: <HondaIcon style={{ height: '13px', flexShrink: 0 }} />,
  audi: <AudiIcon style={{ height: '24px', flexShrink: 0 }} />,
  volvo: <VolvoIcon style={{ height: '12px', flexShrink: 0 }} />,
  volkswagen: <VolkswagenIcon style={{ height: '27px', flexShrink: 0 }} />,
  porsche: <PorscheIcon style={{ height: '9px', flexShrink: 0 }} />,
  nissan: <NissanIcon style={{ height: '30px', flexShrink: 0 }} />,
  tesla: <TeslaIcon style={{ height: '10px', flexShrink: 0 }} />,
  jeep: <JeepIcon style={{ height: '20px', flexShrink: 0 }} />,
  ford: <FordIcon style={{ height: '34px', flexShrink: 0 }} />,
};

const initialLogos: LogoData[] = Object.entries(logoIcons).map(
  ([id, icon]) => ({ id, icon }),
);

export function LogoSlider() {
  const LOGO_WIDTH = '9rem';
  const TOTAL_SETS_TO_CLONE = 2;

  const logosListRef = useRef<HTMLUListElement>(null);
  const [isSliderInitialized, setIsSliderInitialized] = useState(false);
  const [clonedLogos, setClonedLogos] = useState<LogoData[]>([]);

  useEffect(() => {
    const logoList = logosListRef.current;

    if (logoList) {
      const totalLogos = initialLogos.length;
      setCSSVariable(
        '--slider-total-sets',
        (TOTAL_SETS_TO_CLONE + 1).toString(),
      );
      setCSSVariable('--slider-total-logos', totalLogos.toString());
      setCSSVariable('--slider-logo-width', LOGO_WIDTH);
      setCSSVariable(
        '--slider-total-logo-width',
        `calc(var(--slider-total-logos) * var(--slider-logo-width) * (${TOTAL_SETS_TO_CLONE} + 1))`,
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
    return Array.from({ length: totalSets }).flatMap((_, set) =>
      logos.map(({ id, icon }) => ({
        id: `logo-clone-${set + 1}-${id}`,
        icon,
      })),
    );
  };

  return (
    <div
      className={cn(
        'transition-opacity',
        clonedLogos.length > 0 ? 'opacity-70' : 'opacity-0',
      )}
    >
      <ul
        ref={logosListRef}
        className="flex w-[var(--slider-total-logo-width)] animate-slider items-center opacity-70 grayscale"
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
