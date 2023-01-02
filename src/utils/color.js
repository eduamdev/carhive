export function getBgColorClass(color) {
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
