import { siteConfig } from "@/config/site"

export const absoluteUrl = (path: string): string => {
  const baseUrl = (() => {
    switch (process.env.NEXT_PUBLIC_VERCEL_ENV) {
      case "production":
        return siteConfig.url
      case "preview":
        return `https://${process.env.NEXT_PUBLIC_VERCEL_BRANCH_URL}`
      default:
        return `http://localhost:${process.env.PORT ?? 3000}`
    }
  })()

  return `${baseUrl}${path}`
}
