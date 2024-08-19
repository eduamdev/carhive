'use client';

import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { VolvoIcon } from './car-logos/volvo';
import { SuvaruIcon } from './car-logos/suvaru';
import { JeepIcon } from './car-logos/jeep';
import { PorscheIcon } from './car-logos/porsche';
import { VolkswagenIcon } from './car-logos/volkswagen';
import { ToyotaIcon } from './car-logos/toyota';
import { BMWIcon } from './car-logos/bmw';
import { HondaIcon } from './car-logos/honda';
import { AudiIcon } from './car-logos/audi';
import { MiniIcon } from './car-logos/mini';
import { FordIcon } from './car-logos/ford';
import { TeslaIcon } from './car-logos/tesla';
import { NissanIcon } from './car-logos/nissan';
import { KiaIcon } from './car-logos/kia';
import { HyundaiIcon } from './car-logos/hyundai';
import { MercedesBenzIcon } from './car-logos/mercedes-benz';
import { cn, setCSSVariable } from '@/app/lib/utils';

type LogoData = {
  id: string;
  icon: JSX.Element;
};

const logoIcons = {
  kia: <KiaIcon aria-hidden="true" style={{ height: '12px', flexShrink: 0 }} />,
  suvaru: (
    <SuvaruIcon aria-hidden="true" style={{ height: '18px', flexShrink: 0 }} />
  ),
  mini: (
    <MiniIcon aria-hidden="true" style={{ height: '27px', flexShrink: 0 }} />
  ),
  hyundai: (
    <HyundaiIcon aria-hidden="true" style={{ height: '14px', flexShrink: 0 }} />
  ),
  mercedesBenz: (
    <MercedesBenzIcon
      aria-hidden="true"
      style={{ height: '28px', flexShrink: 0 }}
    />
  ),
  toyota: (
    <ToyotaIcon aria-hidden="true" style={{ height: '20px', flexShrink: 0 }} />
  ),
  bmw: <BMWIcon aria-hidden="true" style={{ height: '33px', flexShrink: 0 }} />,
  honda: (
    <HondaIcon aria-hidden="true" style={{ height: '14px', flexShrink: 0 }} />
  ),
  audi: (
    <AudiIcon aria-hidden="true" style={{ height: '24px', flexShrink: 0 }} />
  ),
  volvo: (
    <VolvoIcon aria-hidden="true" style={{ height: '13px', flexShrink: 0 }} />
  ),
  volkswagen: (
    <VolkswagenIcon
      aria-hidden="true"
      style={{ height: '28px', flexShrink: 0 }}
    />
  ),
  porsche: (
    <PorscheIcon aria-hidden="true" style={{ height: '9px', flexShrink: 0 }} />
  ),
  nissan: (
    <NissanIcon aria-hidden="true" style={{ height: '30px', flexShrink: 0 }} />
  ),
  tesla: (
    <TeslaIcon aria-hidden="true" style={{ height: '11px', flexShrink: 0 }} />
  ),
  jeep: (
    <JeepIcon aria-hidden="true" style={{ height: '20px', flexShrink: 0 }} />
  ),
  ford: (
    <FordIcon aria-hidden="true" style={{ height: '35px', flexShrink: 0 }} />
  ),
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
        id: `${id}-clone-${set + 1}`,
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
