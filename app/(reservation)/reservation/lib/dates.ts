function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return `${date.toLocaleDateString('en-US', {
    month: 'short',
  })} ${date.getDate()}`;
}

export function formatDates(checkin: string, checkout: string): string {
  const formattedCheckin = formatDate(checkin);
  const formattedCheckout = formatDate(checkout);

  // Check if both dates share the same month
  const checkinMonth = new Date(checkin).getMonth();
  const checkoutMonth = new Date(checkout).getMonth();
  const sameMonth = checkinMonth === checkoutMonth;

  if (sameMonth) {
    return `${formattedCheckin} – ${new Date(checkout).getDate()}`;
  } else {
    return `${formattedCheckin} – ${formattedCheckout}`;
  }
}
