import { ReadonlyURLSearchParams } from 'next/navigation';
import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

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

export function getEnumKeyByEnumValue<T>(
  enumObject: T,
  enumValue: string,
): keyof T | null {
  const keys = Object.keys(enumObject).filter(
    (key) => enumObject[key] === enumValue,
  ) as (keyof T)[];
  return keys.length > 0 ? keys[0] : null;
}

export function convertPascalCaseToWords(input: string): string {
  return input
    .replace(/([a-z])([A-Z])/g, '$1 $2') // Add space between lowercase and uppercase letters
    .replace(/([A-Z])([A-Z][a-z])/g, '$1 $2') // Handle consecutive uppercase letters
    .trim(); // Trim spaces from the beginning and end
}
