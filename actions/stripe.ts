"use server"

import { differenceInDays, isValid } from "date-fns"
import type { Stripe } from "stripe"

import { stripe } from "@/lib/stripe"

export async function createCheckoutSession(
  data: FormData
): Promise<{ client_secret: string | null; url: string | null }> {
  // Extract and validate input data from FormData
  const carId = data.get("carId")?.toString()
  const carName = data.get("carName")?.toString()
  const pricePerDay = Number(data.get("pricePerDay"))
  const startDate = new Date(data.get("startDate")?.toString() || "")
  const endDate = new Date(data.get("endDate")?.toString() || "")
  const currency = data.get("currency")?.toString().toLowerCase()

  // Validate required fields
  if (!carId || !carName || !pricePerDay || !currency) {
    throw new Error("Missing required fields")
  }

  // Validate date fields
  if (!isValid(startDate) || !isValid(endDate)) {
    throw new Error("Invalid dates")
  }

  const days = differenceInDays(endDate, startDate)

  if (days <= 0) {
    throw new Error("Invalid date range selected")
  }

  const totalPrice = Math.round(pricePerDay * days * 100) // Convert to cents

  const checkoutSession: Stripe.Checkout.Session =
    await stripe.checkout.sessions.create({
      mode: "payment",
      line_items: [
        {
          price_data: {
            currency: currency?.toString().toLowerCase(),
            product_data: {
              name: carName,
              description: `${days} day${days > 1 ? "s" : ""} rental of ${carName}`,
              metadata: {
                car_id: carId,
                start_date: startDate.toISOString(),
                end_date: endDate.toISOString(),
              },
            },
            unit_amount: totalPrice,
          },
          quantity: 1,
        },
      ],
      success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/reservation/confirmation/cars/{CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/reservation/cars/cancelled`,
    })

  return {
    client_secret: checkoutSession.client_secret,
    url: checkoutSession.url,
  }
}
