import { migrate } from "drizzle-orm/vercel-postgres/migrator"

import { db } from "."

const main = async () => {
  try {
    await migrate(db, {
      migrationsFolder: "db/migrations",
    })

    console.log("Migration successful")
  } catch (error) {
    console.error(error)
    process.exit(1)
  }
}

main()
