'use server';

import { z } from 'zod';
import { sql } from '@vercel/postgres';

const NewsletterSchema = z.object({
  id: z.string().uuid(),
  email: z.string().email({
    message: 'Invalid email address',
  }),
  created_at: z.string(),
});

const SubscribeToNewsletter = NewsletterSchema.pick({ email: true });

export async function subscribeToNewsletter(
  prevState: any,
  formData: FormData,
) {
  // Validate form using Zod
  const validatedField = SubscribeToNewsletter.safeParse({
    email: formData.get('email'),
  });

  // If form validation fails, return errors early. Otherwise, continue.
  if (!validatedField.success) {
    return {
      errors: validatedField.error.flatten().fieldErrors.email,
      subscribed: false
    };
  }

  // Prepare data for insertion into the database
  const { email } = validatedField.data;
  const createdAt = new Date().toISOString().split('T')[0];

  try {
    await sql`
      INSERT INTO newsletter_subscribers (email, created_at)
      VALUES (${email}, ${createdAt})
    `;
    return { subscribed: true };
  } catch (error) {
    // return 'Database Error: Failed to Subscribe to Newsletter.'
    return { errors: ['Database Error: Failed to Subscribe to Newsletter.'], subscribed: false };
  }
}
