import { sql } from '@vercel/postgres';
import { Testimonial } from './definitions';

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
