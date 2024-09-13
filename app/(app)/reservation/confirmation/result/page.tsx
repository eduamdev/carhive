import type { Stripe } from "stripe"

import { stripe } from "@/lib/stripe"

export default async function ResultPage({
  searchParams,
}: {
  searchParams: { payment_intent: string }
}): Promise<JSX.Element> {
  if (!searchParams.payment_intent)
    throw new Error("Please provide a valid payment_intent (`pi_...`)")

  const paymentIntent: Stripe.PaymentIntent =
    await stripe.paymentIntents.retrieve(searchParams.payment_intent)

  const formattedContent: string = JSON.stringify(paymentIntent, null, 2)

  return (
    <>
      <h2>Status: {paymentIntent.status}</h2>
      <h3>Payment Intent response:</h3>

      <pre>{formattedContent}</pre>
    </>
  )
}
