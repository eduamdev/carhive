import { cars } from "@/data/cars"

import { stripe } from "@/lib/stripe"

async function createStripeProducts() {
  try {
    for (const car of cars) {
      // Create a product on Stripe
      const product = await stripe.products.create({
        name: car.name,
        description: car.description,
        metadata: {
          slug: car.slug,
        },
      })

      console.log(`Created product for ${car.name} with ID: ${product.id}`)

      // Create a price for the product
      const price = await stripe.prices.create({
        product: product.id,
        unit_amount: Math.round(car.price_per_day * 100), // Convert to cents
        currency: car.currency.toLowerCase(),
        recurring: { interval: "day" },
      })

      console.log(`Created price for ${car.name} with ID: ${price.id}`)
    }
  } catch (error) {
    console.error("Error creating Stripe products and prices:", error)
    throw error
  }
}

;(async () => {
  try {
    await createStripeProducts()
  } catch (error) {
    console.error("Error seeding Stripe products:", error)
  }
})()
