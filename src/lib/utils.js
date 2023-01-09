export function formatNumberAsCurrency(number) {
  const NUMBER_FORMATTER = new Intl.NumberFormat(undefined, {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
  });

  return NUMBER_FORMATTER.format(number);
}

export function getBackgroundColorClass(color) {
  switch (color) {
    case "white":
      return "bg-neutral-200";
    case "black":
      return "bg-neutral-700";
    case "blue":
      return "bg-blue-500";
    case "cyan":
      return "bg-cyan-500";
    case "yellow":
      return "bg-yellow-500";
    default:
      return "";
  }
}

export function getUniqueValuesFromArrayOfObjectsByKey(array, key) {
  const unique_values = [
    ...new Map(array.map((item) => [item[key], item])).values(),
  ];

  return unique_values;
}
