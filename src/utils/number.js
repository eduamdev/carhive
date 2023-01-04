export function formatNumberAsCurrency(number) {
  const NUMBER_FORMATTER = new Intl.NumberFormat(undefined, {
    style: "currency",
    currency: "USD",
  });

  return NUMBER_FORMATTER.format(number);
}
