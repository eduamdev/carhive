export type Testimonial = {
  id: string
  name: string
  comment: string
  username: string
  image_url: string
}

export type Location = {
  id: string
  name: string
  slug: string
  latitude: number
  longitude: number
  featured: boolean
  image_url: string
}

export type Car = {
  id: string
  slug: string
  name: string
  body_style: string
  powertrain: string
  transmission: string
  seats: number
  description: string
  features: string[]
  rating: number
  review_count: number
  unlimited_mileage: boolean
  image_url: string
  price_per_day: number
  currency: string
}
