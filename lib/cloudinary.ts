import { SelectCar } from "@/db/schema"

export const getCarImagePublicId = (bodyStyle: SelectCar["bodyStyle"]) => {
  switch (bodyStyle) {
    case "hatchback":
      return "carhive/cars/hatchback_hawhtv"

    case "minivan":
      return "carhive/cars/minivan_vlkx4g"

    case "sedan":
      return "carhive/cars/sedan_rfl011"

    case "sports-car":
      return "carhive/cars/sports-car_hmxtaj"

    case "pickup-truck":
      return "carhive/cars/pickup-truck_ihwn41"

    case "suv":
      return "carhive/cars/suv_rdgyby"

    default:
      return null
  }
}
