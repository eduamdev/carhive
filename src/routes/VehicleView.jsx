import { Link, ScrollRestoration } from "react-router-dom";
import { useParams } from "react-router-dom";
import { formatNumberAsCurrency } from "../lib/utils";
import { getVehicleBySlug } from "../lib/vehicles.js";

export function VehicleView() {
  const { slug } = useParams();

  const vehicle = getVehicleBySlug(slug);
  const { brand, model, year, description, images, price, details, features } =
    vehicle;

  const displayImage = images.find((image) => image.type === "display");

  const retailPrice = price.perDay.retailPrice;
  const discountPrice = price.perDay.discountPrice;

  return (
    <>
      <ScrollRestoration />
      <section>
        <p className="mb-3 font-mono">
          <Link to="/" className="hover:text-white font-bold">
            Home
          </Link>{" "}
          /{" "}
          <Link to="/vehicles" className="hover:text-white font-bold">
            Vehicles
          </Link>{" "}
          / <span className="text-slate-400">{slug}</span>
        </p>
        <h1 className="text-4xl lg:text-5xl font-bold max-w-prose">
          {brand.name} {model} {year}
        </h1>
        <div className="flex flex-col-reverse lg:flex-row items-start justify-between gap-y-16 gap-x-16 mt-12">
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
                      <svg
                        className="w-4 h-4"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                      >
                        <path d="m326.1 231.9-47.5 75.5a31 31 0 0 1-7 7 30.11 30.11 0 0 1-35-49l75.5-47.5a10.23 10.23 0 0 1 11.7 0 10.06 10.06 0 0 1 2.3 14z" />
                        <path
                          d="M256 64C132.3 64 32 164.2 32 287.9a223.18 223.18 0 0 0 56.3 148.5c1.1 1.2 2.1 2.4 3.2 3.5a25.19 25.19 0 0 0 37.1-.1 173.13 173.13 0 0 1 254.8 0 25.19 25.19 0 0 0 37.1.1l3.2-3.5A223.18 223.18 0 0 0 480 287.9C480 164.2 379.7 64 256 64z"
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="32"
                        />
                        <path
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeMiterlimit="10"
                          strokeWidth="32"
                          d="M256 128v32m160 128h-32m-256 0H96m69.49-90.51-22.63-22.63m203.65 22.63 22.63-22.63"
                        />
                      </svg>

                      <span className="capitalize text-neutral-300">
                        {details.transmission}
                      </span>
                    </li>
                  )}
                  <li
                    className="grid items-center gap-x-3"
                    style={{ gridTemplateColumns: "1rem 1fr" }}
                  >
                    <svg
                      className="w-4 h-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    >
                      <path
                        d="M344 144c-3.92 52.87-44 96-88 96s-84.15-43.12-88-96c-4-55 35-96 88-96s92 42 88 96z"
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="32"
                      />
                      <path
                        d="M256 304c-87 0-175.3 48-191.64 138.6C62.39 453.52 68.57 464 80 464h352c11.44 0 17.62-10.48 15.65-21.4C431.3 352 343 304 256 304z"
                        fill="none"
                        stroke="currentColor"
                        strokeMiterlimit="10"
                        strokeWidth="32"
                      />
                    </svg>

                    <span className="capitalize text-neutral-300">
                      {details.capacity}
                    </span>
                  </li>
                  <li
                    className="grid items-center gap-x-3"
                    style={{ gridTemplateColumns: "1rem 1fr" }}
                  >
                    <svg
                      className="w-4 h-4"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z"
                      />
                    </svg>
                    {discountPrice ? (
                      <span className="text-red-400 font-semibold capitalize">
                        <span className="text-base text-neutral-300 capitalize line-through">
                          {retailPrice}
                        </span>{" "}
                        {formatNumberAsCurrency(discountPrice)}
                        <span className="capitalize text-neutral-300">
                          {" "}
                          / day
                        </span>
                      </span>
                    ) : (
                      <span className="capitalize text-neutral-100">
                        {formatNumberAsCurrency(retailPrice)} / day
                      </span>
                    )}
                  </li>
                  {details.bags && (
                    <li
                      className="grid items-center gap-x-3"
                      style={{ gridTemplateColumns: "1rem 1fr" }}
                    >
                      <svg
                        className="w-4 h-4"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                      >
                        <path
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="32"
                          d="M80 176a16 16 0 0 0-16 16v216c0 30.24 25.76 56 56 56h272c30.24 0 56-24.51 56-54.75V192a16 16 0 0 0-16-16zm80 0v-32a96 96 0 0 1 96-96h0a96 96 0 0 1 96 96v32"
                        />
                      </svg>
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
                      <svg
                        className="w-4 h-4"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M21 10.5h.375c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125H21M3.75 18h15A2.25 2.25 0 0021 15.75v-6a2.25 2.25 0 00-2.25-2.25h-15A2.25 2.25 0 001.5 9.75v6A2.25 2.25 0 003.75 18z"
                        />
                      </svg>
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
            <div className="mt-20">
              <button className="font-semibold w-full flex items-center justify-center md:w-56 bg-white text-slate-900 px-2 py-3 rounded-md text-xl border hover:bg-transparent hover:text-slate-100 hover:border-slate-100 transition-colors duration-150">
                Book this Vehicle →
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
      </section>
    </>
  );
}

export default VehicleView;
