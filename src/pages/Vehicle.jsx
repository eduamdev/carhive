import { useParams } from "react-router-dom";

export function Vehicle() {
  const { slug } = useParams();
  return <h1 className="text-3xl font-bold">Vehicle {slug}</h1>;
}
