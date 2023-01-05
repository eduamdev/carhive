import { Link, ScrollRestoration } from "react-router-dom";
import { ReactComponent as ChevronDownSVG } from "./../assets/icons/chevron-down.svg";
import VehicleCard from "../components/VehicleCard";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@radix-ui/react-collapsible";
import {
  Slider,
  SliderTrack,
  SliderRange,
  SliderThumb,
} from "@radix-ui/react-slider";
import { vehicles } from "../vehicles";
import { getUniqueArray } from "../utils/array";
import { getBackgroundColorClass } from "../utils/style";
import { formatNumberAsCurrency } from "../utils/number";
import { ReactComponent as CloseSVG } from "./../assets/icons/close.svg";

function VehicleGrid() {
  const brands = vehicles.map((vehicle) => vehicle.brand);
  const colors = vehicles.map((vehicle) => vehicle.color.short);

  return (
    <>
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
              <h1 className="text-4xl lg:text-5xl font-bold">Find your ride</h1>
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
            <section className="mb-20">
              <div className="grid grid-cols-1 lg:grid-cols-3 items-start gap-x-16 gap-y-10">
                <div>
                  <p className="font-bold text-neutral-100">Brand</p>
                  <div className="w-full flex flex-row flex-wrap items-center gap-2 mt-4">
                    {getUniqueArray(brands).map((brand) => {
                      return (
                        <div
                          key={brand}
                          className="cursor-pointer py-[6px] px-5 bg-gray-800 border border-transparent hover:border-neutral-200 rounded-3xl"
                        >
                          {brand}
                        </div>
                      );
                    })}
                  </div>
                </div>
                <div>
                  <p className="font-bold text-neutral-100">Color</p>
                  <div className="w-full flex flex-row flex-wrap items-center gap-5 mt-[22px]">
                    {getUniqueArray(colors).map((color) => {
                      const backgroundColorClass =
                        getBackgroundColorClass(color);

                      return (
                        <span
                          key={color}
                          className={`relative after:absolute after:w-9 after:h-9 after:border-[1.75px] after:-top-[4.5px] after:-left-[4.5px] after:rounded-full cursor-pointer w-7 h-7 rounded-full border border-gray-400 ${backgroundColorClass}`}
                        ></span>
                      );
                    })}
                  </div>
                </div>
                <div>
                  <p className="font-bold text-neutral-100">
                    Price Range (per Day)
                  </p>
                  <div className="mt-4">
                    <div className="mb-2 flex flex-row items-center justify-between">
                      <p>Price {formatNumberAsCurrency(2899)}</p>
                      <p>{formatNumberAsCurrency(2899)}</p>
                    </div>
                    <Slider
                      defaultValue={[100]}
                      max={100}
                      step={1}
                      aria-label="Price Range"
                      className="sliderRoot"
                    >
                      <SliderTrack className="sliderTrack">
                        <SliderRange className="sliderRange" />
                      </SliderTrack>
                      <SliderThumb className="sliderThumb" />
                    </Slider>
                  </div>
                </div>
              </div>
              <div
                id="selected-filters"
                className="hidden w-full flex flex-row flex-wrap items-center gap-2"
              >
                <div className="flex flex-row items-center justify-baseline gap-x-3 cursor-pointer py-[6px] px-5 bg-gray-800 border border-transparent hover:border-neutral-700 rounded-3xl">
                  <span>White</span> <CloseSVG className="w-5 h-5" />
                </div>
                <div className="flex flex-row items-center justify-baseline gap-x-3 cursor-pointer py-[6px] px-5 bg-gray-800 border border-transparent hover:border-neutral-700 rounded-3xl">
                  <span>Blue</span> <CloseSVG className="w-5 h-5" />
                </div>
                <span className="ml-6 font-semibold cursor-pointer">
                  Clear All
                </span>
              </div>
            </section>
          </CollapsibleContent>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-7 gap-y-10 mt-16">
            {vehicles.map((vehicle, index) => (
              <Link to={`/vehicles/${vehicle.slug}`} key={index}>
                <VehicleCard vehicle={vehicle} />
              </Link>
            ))}
          </div>
        </Collapsible>
      </section>
    </>
  );
}

export default VehicleGrid;
