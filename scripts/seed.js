const { sql } = require("@vercel/postgres")

const {
  testimonials,
  users,
  newsletterSubscribers,
  cars,
  locations,
  rentalReservations,
} = require("../db/placeholder-data.js")
const bcrypt = require("bcrypt")

async function seedUsers() {
  try {
    await sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`
    // Create the "invoices" table if it doesn't exist
    const createTable = await sql`
      CREATE TABLE IF NOT EXISTS users (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email TEXT NOT NULL UNIQUE,
        password TEXT NOT NULL
      );
    `

    console.log(`Created "users" table`)

    // Insert data into the "users" table
    const insertedUsers = await Promise.all(
      users.map(async (user) => {
        const hashedPassword = await bcrypt.hash(user.password, 10)
        return sql`
        INSERT INTO users (id, name, email, password)
        VALUES (${user.id}, ${user.name}, ${user.email}, ${hashedPassword})
        ON CONFLICT (id) DO NOTHING;
      `
      })
    )

    console.log(`Seeded ${insertedUsers.length} users`)

    return {
      createTable,
      users: insertedUsers,
    }
  } catch (error) {
    console.error("Error seeding users:", error)
    throw error
  }
}

async function seedNewsletterSubscribers() {
  try {
    await sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`

    // Create the "newsletter_subscribers" table if it doesn't exist
    const createTable = await sql`
      CREATE TABLE IF NOT EXISTS newsletter_subscribers (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        email VARCHAR(255) NOT NULL,
        created_at DATE NOT NULL
      );
    `

    console.log(`Created "newsletter_subscribers" table`)

    // Insert data into the "newsletter_subscribers" table
    const insertedNewsletterSubscribers = await Promise.all(
      newsletterSubscribers.map(
        (subscriber) => sql`
        INSERT INTO newsletter_subscribers (id, email, created_at)
        VALUES (${subscriber.id}, ${subscriber.email}, ${subscriber.created_at})
        ON CONFLICT (id) DO NOTHING;
      `
      )
    )

    console.log(
      `Seeded ${insertedNewsletterSubscribers.length} newsletter_subscribers`
    )

    return {
      createTable,
      newsletterSubscribers: insertedNewsletterSubscribers,
    }
  } catch (error) {
    console.error("Error seeding newsletter_subscribers:", error)
    throw error
  }
}

async function seedTestimonials() {
  try {
    await sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`

    // Create the "testimonials" table if it doesn't exist
    const createTable = await sql`
      CREATE TABLE IF NOT EXISTS testimonials (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        comment TEXT NOT NULL,
        username VARCHAR(255) NOT NULL,
        image_url VARCHAR(255) NOT NULL
      );
    `

    console.log(`Created "testimonials" table`)

    // Insert data into the "testimonials" table
    const insertedTestimonials = await Promise.all(
      testimonials.map(
        (testimonial) => sql`
        INSERT INTO testimonials (id, name, comment, username, image_url)
        VALUES (${testimonial.id}, ${testimonial.name}, ${testimonial.comment}, ${testimonial.username}, ${testimonial.image_url})
        ON CONFLICT (id) DO NOTHING;
      `
      )
    )

    console.log(`Seeded ${insertedTestimonials.length} testimonials`)

    return {
      createTable,
      testimonials: insertedTestimonials,
    }
  } catch (error) {
    console.error("Error seeding testimonials:", error)
    throw error
  }
}

async function seedCars() {
  try {
    await sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`

    // Create the "cars" table if doesn't exist
    const createTable = await sql`
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
        currency CHAR(3) NOT NULL DEFAULT 'USD'
      );
    `

    console.log(`Created "cars" table`)

    const insertedCars = await Promise.all(
      cars.map(
        (car) => sql`
        INSERT INTO cars (id, slug, name, body_style, powertrain, transmission, seats, description, features, rating, review_count, unlimited_mileage, image_url, price_per_day, currency)
        VALUES (${car.id}, ${car.slug}, ${car.name}, ${car.body_style}, ${car.powertrain}, ${car.transmission}, ${car.seats}, ${car.description}, ${car.features}, ${car.rating}, ${car.review_count}, ${car.unlimited_mileage}, ${car.image_url}, ${car.price_per_day}, ${car.currency})
        ON CONFLICT (id) DO NOTHING;
      `
      )
    )

    console.log(`Seeded ${insertedCars.length} cars`)

    return {
      createTable,
      cars: insertedCars,
    }
  } catch (error) {
    console.error("Error seeding cars:", error)
    throw error
  }
}

async function seedLocations() {
  try {
    await sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`

    // Create the "locations" table if it doesn't exist
    const createTable = await sql`
      CREATE TABLE IF NOT EXISTS locations (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        slug VARCHAR(255) NOT NULL UNIQUE,
        latitude VARCHAR(255) NOT NULL,
        longitude VARCHAR(255) NOT NULL,
        featured BOOLEAN DEFAULT false NOT NULL,
        image_url VARCHAR(255)
      );
    `

    console.log(`Created "locations" table`)

    // Insert data into the "locations" table
    const insertedLocations = await Promise.all(
      locations.map(
        (location) => sql`
        INSERT INTO locations (id, name, slug, latitude, longitude, featured, image_url)
        VALUES (${location.id}, ${location.name}, ${location.slug}, ${location.latitude}, ${location.longitude}, ${location.featured}, ${location.image_url})
        ON CONFLICT (id) DO NOTHING;
      `
      )
    )

    console.log(`Seeded ${insertedLocations.length} locations`)

    return {
      createTable,
      locations: insertedLocations,
    }
  } catch (error) {
    console.error("Error seeding locations:", error)
    throw error
  }
}

async function seedRentalReservations() {
  try {
    await sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`

    // Create the "rental_reservations" table if it doesn't exist
    const createTable = await sql`
      CREATE TABLE IF NOT EXISTS rental_reservations (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        car_id UUID NOT NULL,
        user_id UUID NOT NULL,
        location_id UUID NOT NULL,
        check_in DATE NOT NULL,
        check_out DATE NOT NULL,
        created_at DATE NOT NULL
      );
    `

    console.log(`Created "rental_reservations" table`)

    // Insert data into the "rental_reservations" table
    const insertedRentalReservations = await Promise.all(
      rentalReservations.map(
        (reservation) => sql`
        INSERT INTO rental_reservations (id, car_id, user_id, location_id, check_in, check_out, created_at)
        VALUES (${reservation.id}, ${reservation.car_id}, ${reservation.user_id}, ${reservation.location_id}, ${reservation.check_in}, ${reservation.check_out}, ${reservation.created_at})
        ON CONFLICT (id) DO NOTHING;
      `
      )
    )

    console.log(
      `Seeded ${insertedRentalReservations.length} rental_reservations`
    )

    return {
      createTable,
      rentalReservations: insertedRentalReservations,
    }
  } catch (error) {
    console.error("Error seeding rental_reservations:", error)
    throw error
  }
}

;(async () => {
  await seedUsers()
  await seedTestimonials()
  await seedCars()
  await seedLocations()
  await seedRentalReservations()
  await seedNewsletterSubscribers()
})()
