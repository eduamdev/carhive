import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

export function Vehicle() {
  const { slug } = useParams();
  return (
    <section>
      <p className="mb-3 font-mono">
        <Link to="/">Home</Link> / <Link to="/vehicles">Vehicles</Link> / {slug}
      </p>
      <h1 className="text-4xl lg:text-5xl font-bold">Vehicle {slug}</h1>
      <div className="flex flex-col lg:flex-row items-start justify-between gap-y-16 gap-x-24 mt-12">
        <div className="max-w-md">
          <p>
            A standard car rental is a larger sedan, which provides more room
            for passengers and can fit an additional bag in the trunk compared
            to an intermediate car.
          </p>
          <div className="grid grid-cols-2 items-baseline justify-between gap-x-8 mt-10">
            <div>
              <p className="big uppercase font-bold">Details</p>
              <ul className="space-y-2 mt-4">
                <li className="flex flex-row gap-x-3">
                  <span className="w-8">icon</span>
                  <span>Automatic</span>
                </li>
                <li className="flex flex-row gap-x-3">
                  <span className="w-8">icon</span>
                  <span>5 People</span>
                </li>
                <li className="flex flex-row gap-x-3">
                  <span className="w-8">icon</span>
                  <span>3 Bags</span>
                </li>
              </ul>
            </div>
            <div>
              <p className="big uppercase font-bold">Features</p>
              <ul className="list-inside list-disc space-y-2 mt-4">
                <li>
                  <p className="inline-block">Air Conditioning</p>
                </li>
                <li>
                  <p className="inline-block">Cruise Control</p>
                </li>
                <li>
                  <p className="inline-block">AM/FM Stereo Radio</p>
                </li>
                <li>
                  <p className="inline-block">Automatic</p>
                </li>
                <li>
                  <p className="inline-block">Bluetooth</p>
                </li>
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
  );
}
