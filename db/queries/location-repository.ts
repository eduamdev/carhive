import { db } from ".."

export async function getLocations() {
  return db.query.locationsTable.findMany()
}
