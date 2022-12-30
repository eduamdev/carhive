import { Link } from "react-router-dom";
import VehicleCard from "../components/VehicleCard";

export function Vehicles() {
  return (
    <section>
      <div className="flex flex-row items-center justify-between mx-auto gap-y-6 px-6 2xl:px-0">
        <div>
          <p className="mb-3 font-mono">
            <Link to="/">Home</Link> / Vehicles
          </p>
          <h1 className="text-4xl lg:text-5xl font-bold">Vehicles</h1>
          <p className="mt-1 font-mono">32 products</p>
        </div>
        <button className="px-6 py-4 w-48 flex flex-start justify-between border border-neutral-700 rounded-lg">
          <span>Filters</span>
          <span>icon</span>
        </button>
      </div>
      <div className="mt-16">So much filters</div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-7 gap-y-10 mt-16">
        <Link to="/vehicles/1">
          <VehicleCard />
        </Link>
        <Link to="/vehicles/2">
          <VehicleCard />
        </Link>
        <VehicleCard />
        <VehicleCard />
        <VehicleCard />
        <VehicleCard />
        <VehicleCard />
        <VehicleCard />
        <VehicleCard />
        <VehicleCard />
        <VehicleCard />
        <VehicleCard />
      </div>
    </section>
  );
}
