import Cancun from "../public/assets/images/locations/cancun.jpg"
import Dubai from "../public/assets/images/locations/dubai.jpg"
import Paris from "../public/assets/images/locations/paris.jpg"
import Rio from "../public/assets/images/locations/rio.jpg"
import Rome from "../public/assets/images/locations/rome.jpg"
import Sydney from "../public/assets/images/locations/sydney.jpg"
import { locations } from "./locations"

// Add images to the respective locations
export const locationsWithImages = locations.map((location) => {
  switch (location.slug) {
    case "cancun":
      return { ...location, imageUrl: Cancun }
    case "dubai":
      return { ...location, imageUrl: Dubai }
    case "paris":
      return { ...location, imageUrl: Paris }
    case "rio":
      return { ...location, imageUrl: Rio }
    case "rome":
      return { ...location, imageUrl: Rome }
    case "sydney":
      return { ...location, imageUrl: Sydney }
    default:
      return location // For locations without images
  }
})
