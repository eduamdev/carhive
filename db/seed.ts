import { cars } from "@/data/cars"
import { locations } from "@/data/locations"
import { db } from "@/db"
import { carsTable, locationsTable } from "@/db/schema"

import { getCarImagePublicId } from "@/lib/cloudinary"

const main = async () => {
  try {
    console.log("Seeding database")
    // Delete all data
    await db.delete(locationsTable)
    await db.delete(carsTable)

    for (const location of locations) {
      await db
        .insert(locationsTable)
        .values({
          slug: location.slug,
          name: location.name,
          latitude: location.latitude,
          longitude: location.longitude,
          featured: location.featured,
          imageUrl: location.imageUrl,
        })
        .onConflictDoNothing()
    }

    console.log("Locations seeded successfully.")

    for (const car of cars) {
      await db
        .insert(carsTable)
        .values({
          slug: car.slug,
          name: car.name,
          description: car.description,
          imageUrl: getCarImagePublicId(car.bodyStyle) ?? "",
          status: car.status,
          pricePerDay: car.pricePerDay.toString(),
          currency: car.currency,
          bodyStyle: car.bodyStyle,
          powertrain: car.powertrain,
          transmission: car.transmission,
          seats: car.seats,
          priceId: car.priceId,
          features: car.features,
          rating: car.rating.toString(),
          reviewCount: car.reviewCount.toString(),
          unlimitedMileage: car.unlimitedMileage,
          metadata: car.metadata,
        })
        .onConflictDoNothing()
    }

    console.log("Cars seeded successfully.")
  } catch (error) {
    console.error(error)
    process.exit(1)
  }
}

main()
