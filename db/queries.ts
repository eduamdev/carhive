import { sql } from '@vercel/postgres';
import { Testimonial, Location, Car } from '@/db/definitions';

export async function getTestimonials() {
  try {
    // console.log('Fetching testimonials data...');

    const data = await sql<Testimonial>`SELECT * FROM testimonials`;

    // console.log('Data fetch complete.');

    return data.rows;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch testimonials data.');
  }
}

export async function getLocations() {
  try {
    // console.log('Fetching locations data...');

    const data = await sql<Location>`SELECT * FROM locations ORDER BY name ASC`;

    // console.log('Data fetch complete.');

    return data.rows;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch locations data.');
  }
}

export async function getFeaturedLocations() {
  try {
    // console.log('Fetching featured locations data...');

    const data =
      await sql<Location>`SELECT * FROM locations WHERE featured = true ORDER BY name ASC`;

    // console.log('Data fetch complete.');

    return data.rows;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch featured locations data.');
  }
}

export async function getLocationBySlug(slug: string) {
  try {
    const data =
      await sql<Location>`SELECT * FROM locations WHERE slug = ${slug};`;

    const location = data.rows[0];

    // console.log(location);
    return location;
  } catch (error) {
    console.error('Database Error:', error);
  }
}

export async function getCars() {
  try {
    // console.log('Fetching cars data...');

    const data = await sql<Car>`SELECT * FROM cars ORDER BY name ASC`;

    console.log('Data fetch complete.');

    return data.rows;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch cars data.');
  }
}

export async function getCarBySlug(slug: string) {
  try {
    const data = await sql<Car>`SELECT * FROM cars WHERE slug = ${slug};`;

    const car = data.rows[0];

    // console.log(car);
    return car;
  } catch (error) {
    console.error('Database Error:', error);
  }
}

export async function getMinPriceFromCars() {
  try {
    const data = await sql<{ min_price: number }>`
      SELECT 
        MIN(COALESCE(discounted_price_per_day, retail_price_per_day)) AS min_price
      FROM cars;
    `;

    return data.rows[0].min_price;
  } catch (error) {
    console.error('Database Error:', error);
  }
}
