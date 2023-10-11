import { ReadonlyURLSearchParams } from 'next/navigation';
import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { ECarTypes, EEngineTypes, ETransmissions } from '@/types/car-specs';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const createUrl = (
  pathname: string,
  params: URLSearchParams | ReadonlyURLSearchParams,
) => {
  const paramsString = params.toString();
  const queryString = `${paramsString.length ? '?' : ''}${paramsString}`;

  return `${pathname}${queryString}`;
};

export function convertToKebabCase(inputString: string): string {
  // Replace spaces and underscores with dashes, then convert to lowercase
  return inputString.replace(/[\s_]+/g, '-').toLowerCase();
}

export function reverseMapToEnum(
  inputString: string,
): ECarTypes | ETransmissions | EEngineTypes | undefined {
  const kebabToEnumMap: {
    [key: string]: ECarTypes | ETransmissions | EEngineTypes;
  } = {
    suv: ECarTypes.SUV,
    minivan: ECarTypes.MINIVAN,
    'pickup-truck': ECarTypes.PICKUP_TRUCK,
    'sports-car': ECarTypes.SPORTS_CAR,
    hatchback: ECarTypes.HATCHBACK,
    sedan: ECarTypes.SEDAN,
    automatic: ETransmissions.AUTOMATIC,
    manual: ETransmissions.MANUAL,
    gas: EEngineTypes.GAS,
    hybrid: EEngineTypes.HYBRID,
    electric: EEngineTypes.ELECTRIC,
  };

  return kebabToEnumMap[inputString.toLowerCase()];
}
