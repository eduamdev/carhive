import { ReactComponent as BagSVG } from "./../assets/icons/bag.svg";
import { ReactComponent as PersonSVG } from "./../assets/icons/person.svg";
import { getBgColorClass } from "../utils/color";

export default function VehicleCard({ vehicle }) {
  const { details, brand, model, image, year, color } = vehicle;

  const colorClass = getBgColorClass(color.short);

  return (
    <div
      className="h-full grid border border-slate-900 rounded-2xl"
      style={{ gridTemplateRows: "13rem 1fr" }}
    >
      <div
        className="h-full bg-cover bg-center bg-no-repeat border border-neutral-900 rounded-xl"
        style={{
          backgroundImage: `url(/images/${image})`,
        }}
      ></div>
      <div className="w-full h-full flex flex-col justify-between gap-y-5 p-5">
        <div className="w-full flex flex-row items-baseline justify-between gap-x-3">
          <div>
            <p className="leading-5">
              <span className="big font-bold uppercase">{brand}</span>
              <br /> {model} {year}
            </p>
          </div>
          <div>
            <p className="leading-5 text-right">
              <span className="big font-bold uppercase">${details.price}</span>
              <br /> <span className="font-light">/ day</span>
            </p>
          </div>
        </div>
        <div>
          <div
            className={`w-3 h-3 rounded-full border border-gray-400 ${colorClass}`}
          ></div>
        </div>
        <div className="text-neutral-200 font-mono align-middle flex flex-row items-center justify-between gap-x-3 leading-5">
          <div className="flex flex-row gap-x-2 text-right">
            <PersonSVG className="w-4 h-4" />
            <span className="capitalize text-sm">{details.seats}</span>
          </div>
          <div className="flex flex-row gap-x-2 text-right">
            <BagSVG className="w-4 h-4" />
            <span className="capitalize text-sm">{details.bags}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
