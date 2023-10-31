import { ReadonlyURLSearchParams } from 'next/navigation';
import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { EBodyStyles, EEngineTypes, ETransmissions } from '@/types/filters';

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
): EBodyStyles | ETransmissions | EEngineTypes | undefined {
  const kebabToEnumMap: {
    [key: string]: EBodyStyles | ETransmissions | EEngineTypes;
  } = {
    suv: EBodyStyles.SUV,
    minivan: EBodyStyles.MINIVAN,
    'pickup-truck': EBodyStyles.PICKUP_TRUCK,
    'sports-car': EBodyStyles.SPORTS_CAR,
    hatchback: EBodyStyles.HATCHBACK,
    sedan: EBodyStyles.SEDAN,
    automatic: ETransmissions.AUTOMATIC,
    manual: ETransmissions.MANUAL,
    gas: EEngineTypes.GAS,
    hybrid: EEngineTypes.HYBRID,
    electric: EEngineTypes.ELECTRIC,
  };

  return kebabToEnumMap[inputString.toLowerCase()];
}

export function formatCurrency(
  amount: number,
  currencyCode: string = 'USD',
  showDecimals: boolean = false,
): string {
  const options: Intl.NumberFormatOptions = {
    style: 'currency',
    currency: currencyCode,
  };

  if (!showDecimals) {
    options.minimumFractionDigits = 0;
    options.maximumFractionDigits = 0;
  }

  const formattedAmount = new Intl.NumberFormat(undefined, options).format(
    amount,
  );
  return formattedAmount;
}
