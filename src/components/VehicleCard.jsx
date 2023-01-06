import { getBackgroundColorClass } from "../utils/style";
import { formatNumberAsCurrency } from "../utils/number";

export default function VehicleCard({ vehicle }) {
  const { details, price, brand, model, images, year, color } = vehicle;

  const backgroundColorClass = getBackgroundColorClass(color.name);
  const coverImage = images.find((image) => image.type === "cover");

  return (
    <div
      className="h-full grid border border-slate-900 rounded-2xl group"
      style={{ gridTemplateRows: "15.5rem 1fr" }}
    >
      <div className="h-full overflow-hidden rounded-xl">
        <img
          src={coverImage.urlPath}
          alt={coverImage.alt}
          className="h-full w-full object-cover object-center object-no-repeat border border-neutral-900 group-hover:grayscale group-hover:scale-105 transition-all ease-in"
        />
      </div>
      <div className="w-full h-full flex flex-col justify-between gap-y-5 p-5">
        <div className="w-full grid grid-cols-2 items-baseline justify-between gap-x-2">
          <div>
            <p className="leading-6">
              <span className="text-[18px] leading-7 font-bold uppercase text-neutral-100">
                {brand.name}
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
                  {formatNumberAsCurrency(price.perDay.discountPrice)}
                </span>
              ) : (
                <span className="text-[18px] font-bold text-neutral-100">
                  {formatNumberAsCurrency(price.perDay.retailPrice)}
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
        <div className="text-neutral-200 font-mono align-middle flex flex-row items-center justify-between gap-x-3 leading-5">
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
              {details.seats}
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
