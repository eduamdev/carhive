import { formatDateRangeForDisplay } from "@/lib/dates"

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

  return (
    <>
      <h2 className="text-[22px] font-semibold">Your trip</h2>
      <div className="pt-5">
        <div className="space-y-1">
          <h3 className="text-base">
            <strong>Dates</strong>
          </h3>
          <p>
            {formatDateRangeForDisplay(
              checkinDate.toISOString(),
              checkoutDate.toISOString()
            )}
          </p>
        </div>
      </div>
    </>
  )
}
