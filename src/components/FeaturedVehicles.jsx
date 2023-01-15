import { Link } from "react-router-dom";
import { VehicleCard } from "./VehicleCard";
import { getFeaturedVehicles } from "../lib/vehicles";

export function FeaturedVehicles() {
  const featuredVehicles = getFeaturedVehicles();

  return (
    <section id="featured-cars">
      <div className="flex flex-col items-center text-center mx-auto max-w-prose gap-y-6 px-6 2xl:px-0">
        <h2 className="text-3xl lg:text-4xl font-bold">Hot deals</h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 justify-center gap-x-7 gap-y-10 mt-16">
        {featuredVehicles.map((vehicle) => (
          <Link to={`/vehicles/${vehicle.slug}`} key={vehicle.id}>
            <VehicleCard vehicle={vehicle} />
          </Link>
        ))}
      </div>
    </section>
  );
}
