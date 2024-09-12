# Carhive

> **Warning**
> This project is a work in progress and may not function consistently. It is primarily a testing demo created for educational purposes and to explore new technologies.

![carhive](https://github.com/user-attachments/assets/5e4cdffe-dcd0-44ee-957d-66fdb82b47ee)

## Features

- Dynamic Routing
- **Server Components** and **Server Actions**
- **Loading UI** and **Streaming with Suspense** for a smoother user experience
- SEO-friendly metadata
- Fully responsive design
- Styled with **Tailwind CSS**
- UI components built with **Shadcn/ui**
- Interactive maps using **Leaflet**
- User authentication and management via **Clerk**
- Serverless SQL powered by **Vercel Postgres** (and Neon)
- Image Management through **Cloudinary**
- Infinite Logo Slider
- Search functionality with data filtering capabilities
- Code Linting for consistent formatting
- Written in **TypeScript** for enhanced type safety
- **Drizzle ORM** for type-safe database interaction, schema generation, and migrations
- **Stripe** integration for payment processing

## Requirements

Ensure the following are installed:

- Node.js (v18+)
- `pnpm` as the package manager

## Prerequisites

Before running the app, make sure you have:

- A [Vercel account](https://vercel.com/) and a [Vercel Postgres Database](https://vercel.com/docs/storage/vercel-postgres)
- A [Cloudinary account](https://cloudinary.com/) for image management
- A [Clerk account](https://clerk.com/) for authentication
- A [Stripe account](https://stripe.com/) for payment processing

## Running the Project Locally

1. Install dependencies:

```bash
pnpm install
```

2. Set up environment variables:

- Copy the `.env.example` file to `.env` at the root of the project:

  ```bash
  cp .env.example .env
  ```

- Update the `.env` file with your configuration details.

3. Generate the database:

```bash
pnpm db:generate
```

4. Seed the initial data:

```bash
pnpm db:seed
```

5. Start the development server:

```bash
pnpm dev
```
