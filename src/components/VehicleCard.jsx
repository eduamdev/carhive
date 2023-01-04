import { ReactComponent as BagSVG } from "./../assets/icons/bag.svg";
import { ReactComponent as PersonSVG } from "./../assets/icons/person.svg";
import { getBgColorClass } from "../utils/style";
import { formatter } from "../utils/number";

export default function VehicleCard({ vehicle }) {
  const { details, price, brand, model, image, year, color } = vehicle;

  const colorClass = getBgColorClass(color.short);

  return (
    <div
      className="h-full grid border border-slate-900 rounded-2xl"
      style={{ gridTemplateRows: "15.5rem 1fr" }}
    >
      <div
        className="h-full bg-cover bg-center bg-no-repeat border border-neutral-900 rounded-xl"
        style={{
          backgroundImage: `url(/images/${image})`,
        }}
      ></div>
      <div className="w-full h-full flex flex-col justify-between gap-y-5 p-5">
        <div className="w-full grid grid-cols-2 items-baseline justify-between gap-x-2">
          <div>
            <p className="leading-6">
              <span className="text-[18px] leading-7 font-bold uppercase text-neutral-100">
                {brand}
              </span>
              <br /> {model} {year}
            </p>
          </div>
          <div>
            <p className="leading-5 text-right">
              {price.perDay.discountPrice ? (
                <span className="text-[18px] text-red-400 font-bold">
                  <span className="text-sm font-normal text-neutral-300 line-through">
                    {price.perDay.retailPrice}
                  </span>{" "}
                  {formatter.format(price.perDay.discountPrice.substring(1))}
                </span>
              ) : (
                <span className="text-[18px] font-bold text-neutral-100">
                  {formatter.format(price.perDay.retailPrice.substring(1))}
                </span>
              )}
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
            <span className="capitalize text-sm text-neutral-100">
              {details.seats}
            </span>
          </div>
          <div className="flex flex-row gap-x-2 text-right">
            {details.bags !== "-" && (
              <>
                <BagSVG className="w-4 h-4" />
                <span className="capitalize text-sm text-neutral-100">
                  {details.bags}
                </span>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
