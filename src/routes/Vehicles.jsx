import Layout from "../components/Layout";
import { Link, ScrollRestoration } from "react-router-dom";
import { ReactComponent as ChevronDownSVG } from "./../assets/icons/chevron-down.svg";
import { vehicles } from "../vehicles.js";
import VehicleCard from "../components/VehicleCard";
import Filters from "../components/Filters";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@radix-ui/react-collapsible";

function Vehicles() {
  return (
    <Layout>
      <ScrollRestoration />
      <section>
        <Collapsible>
          <div className="flex flex-col lg:flex-row items-center justify-between mx-auto gap-y-6 mb-6">
            <div>
              <p className="mb-3 font-mono hidden lg:block">
                <Link to="/" className="hover:text-white">
                  Home
                </Link>{" "}
                / Vehicles
              </p>
              <h1 className="text-4xl lg:text-5xl font-bold">
                Find your next ride
              </h1>
              <p className="mt-3 font-mono hidden lg:block">
                {vehicles.length} vehicles
              </p>
            </div>
            <div className="w-full lg:w-auto flex flex-row items-center justify-between mt-10">
              <CollapsibleTrigger asChild>
                <button className="collapsibleTrigger px-6 py-4 w-48 flex flex-start justify-between border border-neutral-700 rounded-lg">
                  <span>Filters (2)</span>
                  <ChevronDownSVG className="collapsibleChevron" />
                </button>
              </CollapsibleTrigger>
              <p className="mt-1 font-mono lg:hidden">
                {vehicles.length} vehicles
              </p>
            </div>
          </div>
          <CollapsibleContent>
            <Filters />
          </CollapsibleContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-7 gap-y-10 mt-16">
            {vehicles.map((vehicle, index) => (
              <Link to={`/vehicles/${vehicle.slug}`} key={index}>
                <VehicleCard vehicle={vehicle} />
              </Link>
            ))}
          </div>
        </Collapsible>
      </section>
    </Layout>
  );
}

export default Vehicles;
