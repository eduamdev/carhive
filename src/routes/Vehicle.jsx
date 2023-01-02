import Layout from "../components/Layout";
import { Link, ScrollRestoration } from "react-router-dom";
import { useParams } from "react-router-dom";
import { vehicles } from "./../vehicles.js";

function getVehicleBySlug(slug) {
  return vehicles.find((vehicle) => vehicle.slug === slug);
}

function Vehicles() {
  const { slug } = useParams();

  const vehicle = getVehicleBySlug(slug);
  const { brand, model, year, description, details, features } = vehicle;

  return (
    <Layout>
      <ScrollRestoration />
      <section>
        <p className="mb-3 font-mono">
          <Link to="/">Home</Link> / <Link to="/vehicles">Vehicles</Link> /{" "}
          {slug}
        </p>
        <h1 className="text-4xl lg:text-5xl font-bold">
          {brand} {model} {year}
        </h1>
        <div className="flex flex-col lg:flex-row items-start justify-between gap-y-16 gap-x-24 mt-12">
          <div className="max-w-md">
            <p>{description}</p>
            <div className="grid grid-cols-2 items-baseline justify-between gap-x-8 mt-10">
              <div>
                <p className="big uppercase font-bold">Details</p>
                <ul className="space-y-2 mt-4">
                  {Object.keys(details).map((key) => {
                    return (
                      <li key={key} className="flex flex-row gap-x-3">
                        <span className="w-8">icon</span>
                        <span className="capitalize">{details[key]}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
              <div>
                <p className="big uppercase font-bold">Features</p>
                <ul className="list-inside list-disc space-y-2 mt-4">
                  {features.map((feature) => (
                    <li key={feature}>
                      <p className="inline-block">{feature}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="hidden lg:block mt-20">
              <button className="w-full py-3 px-5 bg-red-500 rounded-lg font-bold text-lg">
                Rent now
              </button>
            </div>
          </div>
          <div className="border border-neutral-800 w-full h-96 rounded-xl"></div>
        </div>
        <div className="lg:hidden mt-20">
          <button className="w-full py-3 px-5 bg-red-500 rounded-lg font-bold text-lg">
            Rent now
          </button>
        </div>
      </section>
    </Layout>
  );
}

export default Vehicles;
