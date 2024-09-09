import { loadStripe, Stripe as StripeJS } from "@stripe/stripe-js"
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

export async function getSession(sessionId: string) {
  try {
    const session = await stripe.checkout.sessions.retrieve(sessionId)
    return session
  } catch (error) {
    console.error("Error fetching Stripe session", error)
    return null
  }
}

let stripePromise: Promise<StripeJS | null>

export default function getStripe(): Promise<StripeJS | null> {
  if (!stripePromise)
    stripePromise = loadStripe(
      process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY as string
    )

  return stripePromise
}
