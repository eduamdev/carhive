import { ReadonlyURLSearchParams } from "next/navigation"
import clsx, { ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const setCSSVariable = (name: string, value: string): void => {
  if (typeof window !== "undefined") {
    document.documentElement?.style.setProperty(name, value)
  }
}

export const slugify = (str: string): string =>
  str
    .trim() // Trim leading/trailing whitespace
    .toLowerCase()
    .replace(/[^a-z0-9\s-]+/g, "") // Remove non-alphanumeric characters
    .replace(/\s+/g, "-") // Replace spaces with hyphens
    .replace(/-+/g, "-") // Replace multiple hyphens with a single one

export const constructUrlWithParams = (
  pathname: string,
  params: URLSearchParams | ReadonlyURLSearchParams
): string => {
  const queryString = params.toString()
  return queryString ? `${pathname}?${queryString}` : pathname
}

export function absoluteUrl(path: string) {
  return `${process.env.NEXT_PUBLIC_APP_URL}${path}`
}

export const convertImageUrlToDataUrl = async (
  imageUrl: string
): Promise<string | null> => {
  try {
    const response = await fetch(imageUrl)
    if (!response.ok)
      throw new Error(`Failed to fetch image: ${response.statusText}`)

    const arrayBuffer = await response.arrayBuffer()
    const base64 = Buffer.from(arrayBuffer).toString("base64")
    const contentType =
      response.headers.get("content-type") ?? "application/octet-stream"

    return `data:${contentType};base64,${base64}`
  } catch (error) {
    console.error("Error converting image URL to data URL:", error)
    return null
  }
}

export const formatCurrency = (
  amount: number,
  currency: string = "USD"
): string => {
  if (isNaN(amount)) return ""
  return amount.toLocaleString("en-US", {
    style: "currency",
    currency: currency.toUpperCase(),
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  })
}
