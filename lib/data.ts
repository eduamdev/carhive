import { sql } from '@vercel/postgres';
import { Testimonial, Location } from './definitions';

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
