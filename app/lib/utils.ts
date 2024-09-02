import { ReadonlyURLSearchParams } from "next/navigation"
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

import { siteConfig } from "@/config/site"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const buildUrlWithQueryParams = (
  pathname: string,
  params: URLSearchParams | ReadonlyURLSearchParams
) => {
  const queryString = params.toString()
  return queryString ? `${pathname}?${queryString}` : pathname
}

export const formatCurrency = (amount: number, currency: string = "USD") => {
  return Math.round(amount).toLocaleString("en-US", {
    style: "currency",
    currency,
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  })
}

export function slugify(str: string) {
  str = str.replace(/^\s+|\s+$/g, "") // trim leading/trailing white space
  str = str.toLowerCase() // convert string to lowercase
  str = str
    .replace(/[^a-z0-9 -]/g, "") // remove any non-alphanumeric characters
    .replace(/\s+/g, "-") // replace spaces with hyphens
    .replace(/-+/g, "-") // remove consecutive hyphens
  return str
}

export function absoluteUrl(path: string) {
  switch (process.env.NEXT_PUBLIC_VERCEL_ENV) {
    case "production":
      return `${siteConfig.url}${path}`

    case "preview":
      return `https://${process.env.NEXT_PUBLIC_VERCEL_BRANCH_URL}${path}`

    default:
      // development
      return `http://localhost:${process.env.PORT ?? 3000}${path}`
  }
}

export const setCSSVariable = (name: string, value: string) => {
  if (typeof window !== "undefined" && window?.document?.documentElement) {
    window.document.documentElement.style.setProperty(name, value)
  }
}

export async function convertImageUrlToDataUrl(
  imageUrl: string
): Promise<string | null> {
  try {
    const response = await fetch(imageUrl)

    if (!response.ok) {
      throw new Error(`Failed to fetch image: ${response.statusText}`)
    }

    const arrayBuffer = await response.arrayBuffer()
    const base64 = Buffer.from(arrayBuffer).toString("base64")
    const contentType =
      response.headers.get("content-type") || "application/octet-stream"
    const dataUrl = `data:${contentType};base64,${base64}`

    return dataUrl
  } catch (error) {
    console.error("Error converting image URL to data URL:", error)
    return null
  }
}

/**
 * Formats a date string into a readable format: "Mon DD"
 * @param dateString - The ISO date string to format.
 * @returns A formatted date string in the format "Mon DD".
 */
function formatDateToShortMonthDay(dateString: string): string {
  const date = new Date(dateString)

  // Check for invalid date
  if (isNaN(date.getTime())) {
    throw new Error(`Invalid date string: ${dateString}`)
  }

  const month = date.toLocaleDateString("en-US", { month: "short" })
  const day = date.getDate()

  return `${month} ${day}`
}

/**
 * Formats a date range (check-in to check-out) into a readable format.
 * @param checkinDate - The check-in date string in ISO format.
 * @param checkoutDate - The check-out date string in ISO format.
 * @returns A formatted date range string in the format "Mon DD – DD, YYYY" or "Mon DD, YYYY – Mon DD, YYYY".
 */
export function formatDateRange(
  checkinDate: string,
  checkoutDate: string
): string {
  const checkin = new Date(checkinDate)
  const checkout = new Date(checkoutDate)

  // Check for invalid dates
  if (isNaN(checkin.getTime()) || isNaN(checkout.getTime())) {
    throw new Error(
      `Invalid date string(s): checkin "${checkinDate}", checkout "${checkoutDate}"`
    )
  }

  // Ensure check-in date is before or equal to check-out date
  if (checkin > checkout) {
    throw new Error("Check-in date cannot be after the check-out date.")
  }

  const formattedCheckin = formatDateToShortMonthDay(checkinDate)
  const formattedCheckout = checkout.getDate().toString()
  const year = checkin.getFullYear()

  // Check if both dates share the same month and year
  const sameMonthAndYear =
    checkin.getMonth() === checkout.getMonth() &&
    checkin.getFullYear() === checkout.getFullYear()

  if (sameMonthAndYear) {
    return `${formattedCheckin} – ${formattedCheckout}, ${year}`
  } else {
    const formattedCheckinWithYear = `${formattedCheckin}, ${year}`
    const formattedCheckoutWithYear =
      formatDateToShortMonthDay(checkoutDate) + `, ${checkout.getFullYear()}`
    return `${formattedCheckinWithYear} – ${formattedCheckoutWithYear}`
  }
}
