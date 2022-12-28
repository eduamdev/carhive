import { Link } from "react-router-dom";

export function Cars() {
  return (
    <>
      <h1 className="text-3xl font-bold">Cars</h1>
      <div>
        <Link to="/cars/1">Car 1</Link>
        <br />
        <Link to="/cars/2">Car 2</Link>
      </div>
    </>
  );
}
