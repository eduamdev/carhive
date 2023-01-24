import { getBackgroundColorClass } from "../lib/utils";
import { formatNumberAsCurrency } from "../lib/utils";

export function VehicleCard({ vehicle }) {
  const { details, price, brand, model, images, year, color } = vehicle;

  const backgroundColorClass = getBackgroundColorClass(color.name);
  const coverImage = images.find((image) => image.type === "cover");

  const retailPrice = price.perDay.retailPrice;
  const discountPrice = price.perDay.discountPrice;
  const discount = Math.round(100 - (discountPrice * 100) / retailPrice);

  return (
    <div className="grid-rows-[15.5rem_1fr] h-full grid rounded-2xl group">
      <div className="relative h-full overflow-hidden rounded-xl">
        <img
          src={coverImage.urlPath}
          alt={coverImage.alt}
          className="h-full w-full object-cover object-center object-no-repeat group-hover:grayscale group-hover:scale-105 transition-all ease-in"
        />
        {discountPrice && (
          <span className="absolute text-[15px] tracking-wide top-3 left-3 bg-white text-red-800 font-medium py-[3px] px-2 border border-neutral-200">
            {discount}% off
          </span>
        )}
      </div>
      <div className="w-full h-full flex flex-col justify-between gap-y-3 py-4">
        <div className="w-full grid grid-cols-2 items-baseline justify-between gap-x-2">
          <div>
            <p className="leading-6">
              <span className="text-[18px] leading-7 font-semibold text-neutral-100">
                {brand.name}
              </span>
              <br /> {model} {year}
            </p>
          </div>
          <div>
            <p className="leading-5 text-right">
              {discountPrice ? (
                <span className="text-[18px] text-white font-bold">
                  <span className="font-medium text-neutral-300 line-through">
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
        <div className="text-neutral-200 font-mono align-middle flex flex-row items-center gap-x-8 leading-5">
          <div className="flex flex-row gap-x-2 text-right">
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
            <span className="capitalize text-sm text-neutral-100">
              {details.capacity}
            </span>
          </div>
          <div className="flex flex-row gap-x-2 text-right">
            {details.bags && (
              <>
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
