import { getBackgroundColorClass } from "../lib/utils";
import { formatNumberAsCurrency } from "../lib/utils";
import { Icons } from "./Icons";

export function VehicleCard({ vehicle }) {
  const { details, price, brand, model, images, year, color } = vehicle;

  const backgroundColorClass = getBackgroundColorClass(color.name);
  const coverImage = images.find((image) => image.type === "cover");

  const retailPrice = price.perDay.retailPrice;
  const discountPrice = price.perDay.discountPrice;
  const discount = Math.round(100 - (discountPrice * 100) / retailPrice);

  return (
    <div className="grid-rows-[auto_1fr] h-full grid rounded-2xl group">
      <div className="relative h-full overflow-hidden rounded-xl">
        <img
          src={coverImage.urlPath}
          style={{ aspectRatio: "37/31" }}
          alt={coverImage.alt}
          className="w-full object-cover object-center object-no-repeat group-hover:grayscale group-hover:scale-105 transition-all ease-in"
          loading="lazy"
          decoding="async"
        />
        {discountPrice && (
          <span className="absolute text-[15px] tracking-wide top-3 left-3 bg-white text-red-700 font-bold py-[3px] px-2 border border-neutral-400/50 shadow-sm">
            {discount}% off
          </span>
        )}
      </div>
      <div className="w-full h-full flex flex-col justify-between gap-y-3 py-4">
        <div className="w-full grid grid-cols-2 items-baseline justify-between gap-x-2">
          <div>
            <p className="leading-6">
              <span className="text-[18px] leading-7 font-semibold text-white">
                {brand.name}
              </span>
              <br />{" "}
              <span className="text-slate-300">
                {model} ({year})
              </span>
            </p>
          </div>
          <div>
            <p className="leading-5 text-right tracking-wide">
              {discountPrice ? (
                <span className="text-[18px] text-white font-bold">
                  <span className="font-medium text-slate-400 line-through">
                    {formatNumberAsCurrency(retailPrice)}
                  </span>{" "}
                  {formatNumberAsCurrency(discountPrice)}
                </span>
              ) : (
                <span className="text-[18px] font-bold text-neutral-100">
                  {formatNumberAsCurrency(retailPrice)}
                </span>
              )}
              <br /> <span className="font-light">/ day</span>
            </p>
          </div>
        </div>
        <div>
          <div
            className={`w-3 h-3 rounded-full border border-gray-400 ${backgroundColorClass}`}
          ></div>
        </div>
        <div className="text-neutral-200 align-middle flex flex-row items-center gap-x-8 leading-5">
          <div className="flex flex-row gap-x-2 text-right">
            <Icons.Person className="w-4 h-4" />
            <span className="capitalize text-sm text-slate-300 tracking-wider">
              {details.capacity}
            </span>
          </div>
          <div className="flex flex-row gap-x-2 text-right">
            {details.bags && (
              <>
                <Icons.Bag className="w-4 h-4" />
                <span className="capitalize text-sm text-slate-300 tracking-wider">
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
