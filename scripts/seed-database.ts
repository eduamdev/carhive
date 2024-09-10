import { cars } from "@/data/cars"
import { locations } from "@/data/locations"
import { db } from "@/db"
import { carsTable, locationsTable } from "@/db/schema"

// async function seedLocations() {
//   try {
//     for (const location of locations) {
//       await db
//         .insert(locationsTable)
//         .values({
//           slug: location.slug,
//           name: location.name,
//           latitude: location.latitude,
//           longitude: location.longitude,
//           featured: location.featured,
//           imageUrl: location.imageUrl,
//           startingPrice: location.startingPrice,
//         })
//         .onConflictDoNothing()
//     }
//     console.log("Seeded locations.")
//   } catch (error) {
//     console.error("Error seeding locations:", error)
//   }
// }

// async function seedCars() {
//   try {
//     for (const car of cars) {
//       await db
//         .insert(carsTable)
//         .values({
//           slug: car.slug,
//           name: car.name,
//           imageUrl: car.imageUrl,
//           description: car.description,
//           status: car.status,
//           rating: car.rating,
//           reviewCount: car.reviewCount,
//           bodyStyle: car.bodyStyle,
//           powertrain: car.powertrain,
//           transmission: car.transmission,
//           seats: car.seats,
//           features: car.features,
//           priceId: car.priceId,
//           pricePerDay: car.pricePerDay,
//           currency: car.currency,
//           unlimitedMileage: car.unlimitedMileage,
//           metadata: car.metadata,
//         })
//         .onConflictDoNothing()
//     }
//     console.log("Seeded cars.")
//   } catch (error) {
//     console.error("Error seeding cars:", error)
//   }
// }

;(async () => {
  try {
    // await seedLocations()
    // await seedCars()
  } catch (error) {
    console.error("Error during seeding process:", error)
  }
})()
