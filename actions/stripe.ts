"use server"

import type { Stripe } from "stripe"

import { stripe } from "@/lib/stripe"
import { formatAmountForStripe } from "@/lib/stripe/utils/stripe-helpers"

export async function createPaymentIntent(
  data: FormData
): Promise<{ client_secret: string }> {
  const currency = data.get("currency") as string

  const paymentIntent: Stripe.PaymentIntent =
    await stripe.paymentIntents.create({
      amount: formatAmountForStripe(
        Number(data.get("amount") as string),
        currency
      ),
      automatic_payment_methods: { enabled: true },
      currency,
    })

  return { client_secret: paymentIntent.client_secret as string }
}
