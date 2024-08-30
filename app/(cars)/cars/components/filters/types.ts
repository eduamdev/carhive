export type SelectedFilters = {
  minPrice: number
  maxPrice: number
  seats: number | undefined
  bodyStyles: BodyStyle[]
  engineTypes: EngineType[]
  transmissions: Transmission[]
}

export type BodyStyle =
  | "suv"
  | "minivan"
  | "pickup-truck"
  | "sports-car"
  | "hatchback"
  | "sedan"
export type EngineType = "gas" | "hybrid" | "electric"
export type Transmission = "automatic" | "manual"
