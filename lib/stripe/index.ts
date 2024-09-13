import "server-only"

import Stripe from "stripe"

import { siteConfig } from "@/config/site"

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
  // https://github.com/stripe/stripe-node#configuration
  apiVersion: "2024-06-20",
  appInfo: {
    name: siteConfig.name,
    url: siteConfig.url,
  },
  telemetry: false,
})
