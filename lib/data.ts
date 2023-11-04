import { sql } from '@vercel/postgres';
import { Testimonial, Location, Car } from '@/lib/definitions';

export async function fetchTestimonials() {
  try {
    console.log('Fetching testimonials data...');

    const data = await sql<Testimonial>`SELECT * FROM testimonials`;

    console.log('Data fetch complete.');

    return data.rows;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch testimonials data.');
  }
}

export async function fetchLocations() {
  try {
    console.log('Fetching locations data...');

    const data = await sql<Location>`SELECT * FROM locations ORDER BY name ASC`;

    console.log('Data fetch complete.');

    return data.rows;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch locations data.');
  }
}

export async function fetchFeaturedLocations() {
  try {
    console.log('Fetching featured locations data...');

    const data =
      await sql<Location>`SELECT * FROM locations WHERE featured = true`;

    console.log('Data fetch complete.');

    return data.rows;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch featured locations data.');
  }
}

export async function fetchLocationByValue(value: string) {
  try {
    const data =
      await sql<Location>`SELECT * FROM locations WHERE value = ${value};`;

    const location = data.rows[0];

    console.log(location);
    return location;
  } catch (error) {
    console.error('Database Error:', error);
  }
}

export async function fetchCars() {
  try {
    console.log('Fetching cars data...');

    const data = await sql<Car>`SELECT * FROM cars`;

    console.log('Data fetch complete.');

    return data.rows;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch cars data.');
  }
}

export async function fetchCarBySlug(slug: string) {
  try {
    const data = await sql<Car>`SELECT * FROM cars WHERE slug = ${slug};`;

    const car = data.rows[0];

    console.log(car);
    return car;
  } catch (error) {
    console.error('Database Error:', error);
  }
}

export async function getMinPriceFromCars() {
  try {
    const data = await sql<{ min_price: number }>`
      SELECT 
        MIN(COALESCE(discount_price_amount, retail_price_amount)) AS min_price
      FROM cars;
    `;

    const minPrice = data.rows[0].min_price;

    console.log(minPrice);
    return minPrice;
  } catch (error) {
    console.error('Database Error:', error);
  }
}
