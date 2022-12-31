import Layout from "../components/Layout";
import { Link, ScrollRestoration } from "react-router-dom";
import { ReactComponent as ChevronDownSVG } from "./../assets/icons/chevron-down.svg";
import { vehicles } from "../vehicles.js";
import VehicleCard from "../components/VehicleCard";

function Vehicles() {
  return (
    <Layout>
      <ScrollRestoration />
      <section>
        <div className="flex flex-row items-center justify-between mx-auto gap-y-6">
          <div>
            <p className="mb-3 font-mono">
              <Link to="/">Home</Link> / Vehicles
            </p>
            <h1 className="text-4xl lg:text-5xl font-bold">Vehicles</h1>
            <p className="mt-1 font-mono">{vehicles.length} products</p>
          </div>
          <button className="px-6 py-4 w-48 flex flex-start justify-between border border-neutral-700 rounded-lg">
            <span>Filters</span>
            <ChevronDownSVG className="chevron" />
          </button>
        </div>
        <div className="mt-16">So much filters</div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-7 gap-y-10 mt-16">
          {vehicles.map((vehicle, index) => (
            <Link to={`/vehicles/${vehicle.slug}`} key={index}>
              <VehicleCard vehicle={vehicle} />
            </Link>
          ))}
        </div>
      </section>
    </Layout>
  );
}

export default Vehicles;
