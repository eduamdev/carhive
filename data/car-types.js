import hatchback from "../public/assets/images/cars/hatchback.jpg"
import minivan from "../public/assets/images/cars/minivan.jpg"
import pickupTruck from "../public/assets/images/cars/pickup-truck.jpg"
import sedan from "../public/assets/images/cars/sedan.jpg"
import sportsCar from "../public/assets/images/cars/sports-car.jpg"
import suv from "../public/assets/images/cars/suv.jpg"

export const carTypes = [
  {
    id: "hatchback",
    slug: "hatchback",
    name: "Hatchback",
    imageUrl: hatchback,
  },
  {
    id: "minivan",
    slug: "minivan",
    name: "Minivan",
    imageUrl: minivan,
  },
  {
    id: "sports-car",
    slug: "sports-car",
    name: "Sports Car",
    imageUrl: sportsCar,
  },
  {
    id: "pickup-truck",
    slug: "pickup-truck",
    name: "Pickup Truck",
    imageUrl: pickupTruck,
  },
  {
    id: "suv",
    slug: "suv",
    name: "SUV",
    imageUrl: suv,
  },
  {
    id: "sedan",
    slug: "sedan",
    name: "Sedan",
    imageUrl: sedan,
  },
]
