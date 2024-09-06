import { cars } from "@/data/cars"
import { locations } from "@/data/locations"
import { users } from "@/data/users"

const bcrypt = require("bcrypt")

const { sql } = require("@vercel/postgres")

// Helper function to create UUID extension if not already created
async function createUUIDExtension() {
  try {
    await sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp";`
  } catch (error) {
    console.error("Error creating UUID extension:", error)
    throw error
  }
}

async function seedUsers() {
  try {
    await createUUIDExtension()

    // Create the "users" table if it doesn't exist
    await sql`
      CREATE TABLE IF NOT EXISTS users (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email TEXT NOT NULL UNIQUE,
        password TEXT NOT NULL,
        created_at TIMESTAMPTZ DEFAULT NOW(),
        updated_at TIMESTAMPTZ DEFAULT NOW()
      );
    `
    console.log(`Created "users" table`)

    // Insert data into the "users" table
    const insertedUsers = await Promise.all(
      users.map(async (user) => {
        const hashedPassword = await bcrypt.hash(user.password, 10)
        return sql`
          INSERT INTO users (name, email, password)
          VALUES (${user.name}, ${user.email}, ${hashedPassword})
          ON CONFLICT (email) DO NOTHING;
        `
      })
    )

    console.log(`Seeded ${insertedUsers.length} users`)
  } catch (error) {
    console.error("Error seeding users:", error)
    throw error
  }
}

async function seedCars() {
  try {
    await createUUIDExtension()

    // Create the "cars" table if it doesn't exist
    await sql`
      CREATE TABLE IF NOT EXISTS cars (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        slug VARCHAR(255) NOT NULL UNIQUE,
        name VARCHAR(255) NOT NULL,
        body_style VARCHAR(50) NOT NULL,
        powertrain VARCHAR(50) NOT NULL,
        transmission VARCHAR(50) NOT NULL,
        seats SMALLINT NOT NULL CHECK (seats > 0),
        description TEXT NOT NULL,
        features TEXT[] NOT NULL,
        rating DECIMAL(2, 1) CHECK (rating BETWEEN 0 AND 5) NOT NULL,
        review_count INT NOT NULL CHECK (review_count >= 0),
        unlimited_mileage BOOLEAN DEFAULT FALSE,
        image_url TEXT NOT NULL,
        price_per_day DECIMAL(10, 2) NOT NULL,
        currency CHAR(3) NOT NULL DEFAULT 'USD',
        stripe_price_id TEXT,
        price_id TEXT,
        status TEXT DEFAULT 'active' CHECK (status IN ('active', 'inactive', 'unavailable')), -- Constraint to allow only specific values
        metadata JSONB DEFAULT '{}',
        created_at TIMESTAMPTZ DEFAULT NOW(),
        updated_at TIMESTAMPTZ DEFAULT NOW()
      );
    `
    console.log(`Created "cars" table`)

    const insertedCars = await Promise.all(
      cars.map((car) => {
        return sql`
          INSERT INTO cars (slug, name, body_style, powertrain, transmission, seats, description, features, rating, review_count, unlimited_mileage, image_url, price_per_day, currency, stripe_price_id, price_id, status, metadata)
          VALUES (
            ${car.slug}, 
            ${car.name}, 
            ${car.body_style}, 
            ${car.powertrain}, 
            ${car.transmission}, 
            ${car.seats}, 
            ${car.description}, 
            ${car.features},
            ${car.rating}, 
            ${car.review_count}, 
            ${car.unlimited_mileage ?? false}, 
            ${car.image_url}, 
            ${car.price_per_day}, 
            ${car.currency || "USD"},
            ${car.stripe_price_id},
            ${car.price_id},
            ${car.status},
            ${car.metadata}
          )
          ON CONFLICT (slug) DO NOTHING;
        `
      })
    )

    console.log(`Seeded ${insertedCars.length} cars`)
  } catch (error) {
    console.error("Error seeding cars:", error)
    throw error
  }
}

async function seedLocations() {
  try {
    await createUUIDExtension()

    // Create the "locations" table if it doesn't exist
    await sql`
      CREATE TABLE IF NOT EXISTS locations (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        slug VARCHAR(255) NOT NULL UNIQUE,
        name VARCHAR(255) NOT NULL,
        latitude VARCHAR(255) NOT NULL,
        longitude VARCHAR(255) NOT NULL,
        created_at TIMESTAMPTZ DEFAULT NOW(),
        updated_at TIMESTAMPTZ DEFAULT NOW()
      );
    `
    console.log(`Created "locations" table`)

    // Insert data into the "locations" table
    const insertedLocations = await Promise.all(
      locations.map((location) => {
        return sql`
          INSERT INTO locations (slug, name, latitude, longitude)
          VALUES ( 
            ${location.slug}, 
            ${location.name}, 
            ${location.latitude}, 
            ${location.longitude}
          )
          ON CONFLICT (slug) DO NOTHING;
        `
      })
    )

    console.log(`Seeded ${insertedLocations.length} locations`)
  } catch (error) {
    console.error("Error seeding locations:", error)
    throw error
  }
}

;(async () => {
  try {
    // await seedUsers()
    // await seedCars()
    await seedLocations()
  } catch (error) {
    console.error("Error seeding database:", error)
  }
})()
