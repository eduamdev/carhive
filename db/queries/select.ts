import { eq } from "drizzle-orm"

import { db } from ".."
import { SelectCar } from "../schema"

export async function getLocations() {
  return db.query.locationsTable.findMany()
}

export async function getCars() {
  return db.query.carsTable.findMany()
}

export async function getCarById(id: SelectCar["id"]) {
  return db.query.carsTable.findFirst({
    where: (fields, operators) => eq(fields.id, id),
  })
}
