import {
  boolean,
  decimal,
  doublePrecision,
  jsonb,
  pgTable,
  smallint,
  text,
  timestamp,
  uuid,
} from "drizzle-orm/pg-core"

export const locationsTable = pgTable("locations_table", {
  id: uuid("id").primaryKey().defaultRandom(),
  slug: text("slug").notNull().unique(),
  name: text("name").notNull(),
  latitude: doublePrecision("latitude").notNull(),
  longitude: doublePrecision("longitude").notNull(),
  imageUrl: text("image_url"),
  featured: boolean("featured").default(false),
  startingPrice: decimal("starting_price", {
    precision: 10,
    scale: 2,
  }).notNull(),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at")
    .notNull()
    .defaultNow()
    .$onUpdate(() => new Date()),
})

export const carsTable = pgTable("cars_table", {
  id: uuid("id").primaryKey().defaultRandom(),
  slug: text("slug").notNull().unique(),
  name: text("name").notNull(),
  bodyStyle: text("body_style").notNull(),
  powertrain: text("powertrain").notNull(),
  transmission: text("transmission").notNull(),
  seats: smallint("seats").notNull(),
  description: text("description").notNull(),
  features: text("features").array().notNull(),
  rating: decimal("rating", { precision: 2, scale: 1 }).notNull(),
  reviewCount: decimal("review_count", { precision: 10, scale: 0 }).notNull(),
  unlimitedMileage: boolean("unlimited_mileage").default(false),
  imageUrl: text("image_url").notNull(),
  pricePerDay: decimal("price_per_day", {
    precision: 10,
    scale: 2,
  }).notNull(),
  currency: text("currency").notNull().default("usd"),
  priceId: text("price_id").default(""),
  status: text("status").default("active"),
  metadata: jsonb("metadata"),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at")
    .notNull()
    .defaultNow()
    .$onUpdate(() => new Date()),
})

export type InsertLocation = typeof locationsTable.$inferInsert
export type SelectLocation = typeof locationsTable.$inferSelect

export type InsertCar = typeof carsTable.$inferInsert
export type SelectCar = typeof carsTable.$inferSelect
