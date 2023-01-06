import { Link, ScrollRestoration } from "react-router-dom";
import { useParams } from "react-router-dom";
import { ReactComponent as BagSVG } from "./../assets/icons/bag.svg";
import { ReactComponent as PersonSVG } from "./../assets/icons/person.svg";
import { ReactComponent as CashSVG } from "./../assets/icons/cash.svg";
import { ReactComponent as BatterySVG } from "./../assets/icons/battery.svg";
import { ReactComponent as SpeedometerSVG } from "./../assets/icons/speedometer.svg";
import { formatNumberAsCurrency } from "../utils/number";
import { getVehicleBySlug } from "../lib/vehicles.js";

function VehicleView() {
  const { slug } = useParams();

  const vehicle = getVehicleBySlug(slug);
  const { brand, model, year, description, images, price, details, features } =
    vehicle;

  const displayImage = images.find((image) => image.type === "display");

  return (
    <>
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
          <div className="lg:max-w-xl">
            <p>{description}</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 items-baseline justify-between gap-y-12 gap-x-8 mt-10">
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
                        {formatNumberAsCurrency(price.perDay.discountPrice)}
                        <span className="capitalize text-neutral-300">
                          {" "}
                          / day
                        </span>
                      </span>
                    ) : (
                      <span className="capitalize text-neutral-100">
                        {formatNumberAsCurrency(price.perDay.retailPrice)} / day
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
                <ul className="list-disc space-y-2 mt-4 pl-4">
                  {features.map((feature) => (
                    <li key={feature} className="text-neutral-300">
                      {feature}.
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="hidden lg:block mt-20">
              <button className="flex items-center justify-center w-full bg-red-500 px-2 py-3 rounded-md text-xl">
                Book this Vehicle
              </button>
            </div>
          </div>
          <div className="border border-neutral-800 w-full h-[28rem] rounded-lg overflow-hidden">
            <img
              className="w-full h-full object-cover object-center"
              src={displayImage.urlPath}
              alt={displayImage.alt}
            />
          </div>
        </div>
        <div className="lg:hidden mt-32 flex items-center justify-center">
          <button className="flex items-center justify-center w-full max-w-md bg-red-500 px-2 py-3 rounded-md text-xl">
            Book this Vehicle
          </button>
        </div>
      </section>
    </>
  );
}

export default VehicleView;
