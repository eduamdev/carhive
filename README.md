# Carhive

A car rental website built with **Next.js (App Router)**.

> **Warning**
> This app is a work in progress.

![carhive](https://github.com/user-attachments/assets/5e4cdffe-dcd0-44ee-957d-66fdb82b47ee)

## Features

- `/app` dir
- Routing, Layouts and Nested Layouts
- Server and Client Components
- Loading UI
- Metadata files
- Responsive User Interface
- Styled using **Tailwind CSS**
- UI Components built using **Shadcn/ui**
- Interactive Map View using **Leaflet**
- Validations using **Zod**
- Form Validation using **React Hook Form**
- Authentication and User Management with **Clerk**
- Serverless SQL using **Vercel Postgres**
- Image Management using **Cloudinary**
- Infinite Logo Slider
- Search Bar
- Advanced Filters
- Code Linting
- Written in **TypeScript**

## Prerequisites

Before running the application, ensure you have the following installed:

- Node.js (v18+)
- pnpm
- [Vercel account](https://vercel.com/) and a [Postgres Database](https://vercel.com/docs/storage/vercel-postgres) created
- [Cloudinary account](https://cloudinary.com/)
- [Clerk account](https://clerk.com/)

## Running Locally

1. Install dependencies using pnpm:

```bash
pnpm install
```

2. Set up environment variables

- Copy the `.env.example` file to `.env.local` at the root of the project:

  ```bash
  cp .env.example .env.local
  ```

- Update the `.env.local` file with your configuration details

3. Seed initial data:

```bash
pnpm seed
```

4. Start the Development Server:

```bash
pnpm dev
```
