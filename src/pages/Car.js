import { useParams } from "react-router-dom";

export function Car() {
  const { slug } = useParams();
  return <h1 className="text-3xl font-bold">Car {slug}</h1>;
}
