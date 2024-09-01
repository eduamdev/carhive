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
