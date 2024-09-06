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
    image_url: hatchback,
  },
  {
    id: "minivan",
    slug: "minivan",
    name: "Minivan",
    image_url: minivan,
  },
  {
    id: "sports-car",
    slug: "sports-car",
    name: "Sports Car",
    image_url: sportsCar,
  },
  {
    id: "pickup-truck",
    slug: "pickup-truck",
    name: "Pickup Truck",
    image_url: pickupTruck,
  },
  {
    id: "suv",
    slug: "suv",
    name: "SUV",
    image_url: suv,
  },
  {
    id: "sedan",
    slug: "sedan",
    name: "Sedan",
    image_url: sedan,
  },
]
