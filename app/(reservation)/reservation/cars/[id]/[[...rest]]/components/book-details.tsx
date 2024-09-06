import { formatDateRange } from "@/lib/dates"

export function BookDetails({
  checkinDate,
  checkoutDate,
}: {
  checkinDate: Date
  checkoutDate: Date
}) {
  if (!checkinDate || !checkoutDate) {
    throw new Error("Both check-in and check-out dates must be provided.")
  }

  const formattedDateRange = formatDateRange(
    checkinDate.toISOString(),
    checkoutDate.toISOString()
  )

  return (
    <>
      <h2 className="text-[22px] font-semibold">Your trip</h2>
      <div className="pt-5">
        <div className="space-y-1">
          <h3 className="text-base">
            <strong>Dates</strong>
          </h3>
          <p>{formattedDateRange}</p>
        </div>
      </div>
    </>
  )
}
