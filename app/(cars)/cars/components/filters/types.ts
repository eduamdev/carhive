export type SelectedFilters = {
  minPrice: number
  maxPrice: number
  seats: number | undefined
  bodyStyles: BodyStyle[]
  powertrain: Powertrain | undefined
  transmissions: Transmission[]
}

export type BodyStyle =
  | "suv"
  | "minivan"
  | "pickup-truck"
  | "sports-car"
  | "hatchback"
  | "sedan"
export type Powertrain = "gasoline" | "diesel" | "hybrid" | "electric"
export type Transmission = "automatic" | "manual"
