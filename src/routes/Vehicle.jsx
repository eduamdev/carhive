import Layout from "../components/Layout";
import { Link, ScrollRestoration } from "react-router-dom";
import { useParams } from "react-router-dom";
import { vehicles } from "./../vehicles.js";
import { ReactComponent as BagSVG } from "./../assets/icons/bag.svg";
import { ReactComponent as PersonSVG } from "./../assets/icons/person.svg";
import { ReactComponent as CashSVG } from "./../assets/icons/cash.svg";
import { ReactComponent as BatterySVG } from "./../assets/icons/battery.svg";
import { ReactComponent as SpeedometerSVG } from "./../assets/icons/speedometer.svg";
import { formatNumberAsCurrency } from "../utils/number";

function getVehicleBySlug(slug) {
  return vehicles.find((vehicle) => vehicle.slug === slug);
}

function Vehicles() {
  const { slug } = useParams();

  const vehicle = getVehicleBySlug(slug);
  const { brand, model, year, description, price, details, features } = vehicle;

  return (
    <Layout>
      <ScrollRestoration />
      <section>
        <p className="mb-3 font-mono">
          <Link to="/" className="hover:text-white">
            Home
          </Link>{" "}
          /{" "}
          <Link to="/vehicles" className="hover:text-white">
            Vehicles
          </Link>{" "}
          / {slug}
        </p>
        <h1 className="text-4xl lg:text-5xl font-bold max-w-prose">
          {brand} {model} {year}
        </h1>
        <div className="flex flex-col lg:flex-row items-start justify-between gap-y-16 gap-x-16 mt-12">
          <div className="max-w-xl">
            <p>{description}</p>
            <div className="grid grid-cols-2 items-baseline justify-between gap-x-8 mt-10">
              <div>
                <p className="big uppercase font-bold text-neutral-100">
                  Details
                </p>
                <ul className="space-y-2 mt-4">
                  {details.transmission && (
                    <li
                      className="grid items-center gap-x-3"
                      style={{ gridTemplateColumns: "1rem 1fr" }}
                    >
                      <SpeedometerSVG className="w-4 h-4" />

                      <span className="capitalize text-neutral-300">
                        {details.transmission}
                      </span>
                    </li>
                  )}
                  <li
                    className="grid items-center gap-x-3"
                    style={{ gridTemplateColumns: "1rem 1fr" }}
                  >
                    <PersonSVG className="w-4 h-4" />

                    <span className="capitalize text-neutral-300">
                      {details.seats}
                    </span>
                  </li>
                  <li
                    className="grid items-center gap-x-3"
                    style={{ gridTemplateColumns: "1rem 1fr" }}
                  >
                    <CashSVG className="w-4 h-4" />

                    {price.perDay.discountPrice ? (
                      <span className="text-red-400 font-semibold capitalize">
                        <span className="text-base text-neutral-300 capitalize line-through">
                          {price.perDay.retailPrice}
                        </span>{" "}
                        {formatNumberAsCurrency(
                          price.perDay.discountPrice.replace("$", "")
                        )}
                        <span className="capitalize text-neutral-300">
                          {" "}
                          / day
                        </span>
                      </span>
                    ) : (
                      <span className="capitalize text-neutral-100">
                        {formatNumberAsCurrency(
                          price.perDay.retailPrice.replace("$", "")
                        )}{" "}
                        / day
                      </span>
                    )}
                  </li>
                  {details.bags && (
                    <li
                      className="grid items-center gap-x-3"
                      style={{ gridTemplateColumns: "1rem 1fr" }}
                    >
                      <BagSVG className="w-4 h-4" />

                      <span className="capitalize text-neutral-300">
                        {details.bags}
                      </span>
                    </li>
                  )}
                  {details.autonomy && (
                    <li
                      className="grid items-center gap-x-3"
                      style={{ gridTemplateColumns: "1rem 1fr" }}
                    >
                      <BatterySVG className="w-4 h-4" />

                      <span className="capitalize text-neutral-300">
                        {details.autonomy}
                      </span>
                    </li>
                  )}
                </ul>
              </div>
              <div>
                <p className="big uppercase font-bold text-neutral-100">
                  Features
                </p>
                <ul className="list-disc space-y-2 mt-4">
                  {features.map((feature) => (
                    <li key={feature} className="text-neutral-300">
                      {feature}.
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="hidden lg:block mt-20">
              <button className="w-full py-3 px-5 bg-red-500 text-white rounded-lg font-bold text-lg">
                Book this Vehicle
              </button>
            </div>
          </div>
          <div className="border border-neutral-800 w-full h-96 rounded-xl"></div>
        </div>
        <div className="lg:hidden mt-20">
          <button className="w-full py-3 px-5 bg-red-500 text-white rounded-lg font-bold text-lg">
            Book this Vehicle
          </button>
        </div>
      </section>
    </Layout>
  );
}

export default Vehicles;
