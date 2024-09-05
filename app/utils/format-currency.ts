export const formatCurrency = (
  amount: number,
  currency: string = "USD"
): string => {
  if (isNaN(amount)) return ""
  return amount.toLocaleString("en-US", {
    style: "currency",
    currency: currency.toUpperCase(),
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  })
}
