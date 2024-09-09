/**
 * Formats a date string into a readable format: "Mon DD"
 * @param dateString - The ISO date string to format.
 * @returns A formatted date string in the format "Mon DD".
 */
function formatDateToShortMonthDay(dateString: string): string {
  const date = new Date(dateString)

  // Check for invalid date
  if (isNaN(date.getTime())) {
    throw new Error(`Invalid date string: ${dateString}`)
  }

  const month = date.toLocaleDateString("en-US", { month: "short" })
  const day = date.getDate()

  return `${month} ${day}`
}

/**
 * Formats a date range (check-in to check-out) into a readable format.
 * @param checkinDate - The check-in date string in ISO format.
 * @param checkoutDate - The check-out date string in ISO format.
 * @returns A formatted date range string in the format "Mon DD – DD, YYYY" or "Mon DD, YYYY – Mon DD, YYYY".
 */
export function formatDateRangeForDisplay(
  checkinDate: string,
  checkoutDate: string
): string {
  const checkin = new Date(checkinDate)
  const checkout = new Date(checkoutDate)

  // Check for invalid dates
  if (isNaN(checkin.getTime()) || isNaN(checkout.getTime())) {
    throw new Error(
      `Invalid date string(s): checkin "${checkinDate}", checkout "${checkoutDate}"`
    )
  }

  // Ensure check-in date is before or equal to check-out date
  if (checkin > checkout) {
    throw new Error("Check-in date cannot be after the check-out date.")
  }

  const formattedCheckin = formatDateToShortMonthDay(checkinDate)
  const formattedCheckout = checkout.getDate().toString()
  const year = checkin.getFullYear()

  // Check if both dates share the same month and year
  const sameMonthAndYear =
    checkin.getMonth() === checkout.getMonth() &&
    checkin.getFullYear() === checkout.getFullYear()

  if (sameMonthAndYear) {
    return `${formattedCheckin} – ${formattedCheckout}, ${year}`
  } else {
    const formattedCheckinWithYear = `${formattedCheckin}, ${year}`
    const formattedCheckoutWithYear =
      formatDateToShortMonthDay(checkoutDate) + `, ${checkout.getFullYear()}`
    return `${formattedCheckinWithYear} – ${formattedCheckoutWithYear}`
  }
}
