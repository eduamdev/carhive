import { vehicles } from "../vehicles";
import { getUniqueArray } from "../utils/array";
import { getBgColorClass } from "../utils/color";
import { ReactComponent as CloseSVG } from "./../assets/icons/close.svg";

export default function Filters() {
  const brands = vehicles.map((vehicle) => vehicle.brand);
  const colors = vehicles.map((vehicle) => vehicle.color.short);

  return (
    <section className="mb-20">
      <div className="grid grid-cols-1 lg:grid-cols-3 items-start gap-x-16 gap-y-10">
        <div>
          <p className="font-bold text-neutral-100">Brand</p>
          <div className="w-full flex flex-row flex-wrap items-center gap-2 mt-4">
            {getUniqueArray(brands).map((brand) => {
              return (
                <div className="cursor-pointer py-[6px] px-5 bg-gray-800 border border-transparent hover:border-neutral-200 rounded-3xl">
                  {brand}
                </div>
              );
            })}
          </div>
        </div>
        <div>
          <p className="font-bold text-neutral-100">Color</p>
          <div className="w-full flex flex-row flex-wrap items-center gap-4 mt-[22px]">
            {getUniqueArray(colors).map((color) => {
              const colorClass = getBgColorClass(color);

              return (
                <span
                  className={`relative after:absolute after:w-9 after:h-9 after:border-[1.75px] after:-top-[4.5px] after:-left-[4.5px] after:rounded-full cursor-pointer w-7 h-7 rounded-full border border-gray-400 ${colorClass}`}
                ></span>
              );
            })}
          </div>
        </div>
        <div>
          <p className="font-bold text-neutral-100">Price Range (per Day)</p>
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
        <span className="ml-6 font-semibold cursor-pointer">Clear All</span>
      </div>
    </section>
  );
}
