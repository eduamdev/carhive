import { useReducer, useState } from "react";
import { filtersReducer, INITIAL_STATE } from "../filtersReducer";
import { FILTER_ACTION_TYPES } from "../filterActionTypes";
import { Link, ScrollRestoration } from "react-router-dom";
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
import classNames from "classnames";
import { getBackgroundColorClass } from "../utils/style";
import { formatNumberAsCurrency } from "../utils/number";
import { ReactComponent as ChevronDownSVG } from "./../assets/icons/chevron-down.svg";
import { ReactComponent as CloseSVG } from "./../assets/icons/close.svg";
import { vehicles } from "../vehicles";
import {
  getVehicleBrands,
  getVehicleColors,
  getVehiclesMaxPricePerDay,
  getVehiclesMinPricePerDay,
  getBrandById,
  getColorById,
} from "../lib/vehicles";

function VehicleGrid() {
  const [state, dispatch] = useReducer(filtersReducer, INITIAL_STATE);
  const [isOpenCollapsible, setIsOpenCollapsible] = useState(false);

  const minPrice = getVehiclesMinPricePerDay();
  const maxPrice = getVehiclesMaxPricePerDay();
  const brands = getVehicleBrands();
  const colors = getVehicleColors();

  return (
    <>
      <ScrollRestoration />
      <section>
        <Collapsible
          open={isOpenCollapsible}
          onOpenChange={() => setIsOpenCollapsible(!isOpenCollapsible)}
        >
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
                  <span>{`Filters ${
                    state.selectedBrands.length || state.selectedColors.length
                      ? `(${
                          state.selectedBrands.length +
                          state.selectedColors.length
                        })`
                      : ""
                  }`}</span>
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
                  <p className="font-bold text-neutral-100">{`Brand ${
                    state.selectedBrands.length
                      ? `(${state.selectedBrands.length})`
                      : ""
                  }`}</p>
                  <div className="w-full flex flex-row flex-wrap items-center gap-2 mt-4">
                    {brands.map((brand) => {
                      return (
                        <div
                          key={brand.id}
                          onClick={() =>
                            dispatch({
                              type: FILTER_ACTION_TYPES.TOGGLE_BRAND_SELECTION,
                              payload: { brand: brand.id },
                            })
                          }
                          className={classNames(
                            "cursor-pointer py-[6px] px-5 bg-gray-800 border hover:border-neutral-200 rounded-3xl",
                            state.selectedBrands.find(
                              (currentBrand) => currentBrand === brand.id
                            )
                              ? ""
                              : "border-transparent"
                          )}
                        >
                          {brand.name}
                        </div>
                      );
                    })}
                  </div>
                </div>
                <div>
                  <p className="font-bold text-neutral-100">{`Color ${
                    state.selectedColors.length
                      ? `(${state.selectedColors.length})`
                      : ""
                  }`}</p>
                  <div className="w-full flex flex-row flex-wrap items-center gap-5 mt-[22px]">
                    {colors.map((color) => {
                      const backgroundColorClass = getBackgroundColorClass(
                        color.name
                      );

                      return (
                        <span
                          key={color.id}
                          onClick={() =>
                            dispatch({
                              type: FILTER_ACTION_TYPES.TOGGLE_COLOR_SELECTION,
                              payload: { color: color.id },
                            })
                          }
                          className={classNames(
                            backgroundColorClass,
                            "relative after:absolute after:w-9 after:h-9 after:border-[1.75px] after:-top-[4.5px] after:-left-[4.5px] after:rounded-full cursor-pointer w-7 h-7 rounded-full border border-gray-400",
                            state.selectedColors.find(
                              (currentColor) => currentColor === color.id
                            )
                              ? "after:visible"
                              : "after:invisible"
                          )}
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
                      <p>{formatNumberAsCurrency(state.price)}</p>
                      <p>{formatNumberAsCurrency(maxPrice)}</p>
                    </div>
                    <Slider
                      value={[state.price]}
                      onValueChange={(value) =>
                        dispatch({
                          type: FILTER_ACTION_TYPES.CHANGE_PRICE,
                          payload: { price: value[0] },
                        })
                      }
                      max={maxPrice}
                      min={minPrice}
                      step={30}
                      orientation="horizontal"
                      dir="ltr"
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
            </section>
          </CollapsibleContent>

          <div
            id="selected-filters"
            className={classNames(
              "w-full flex flex-row flex-wrap items-center gap-2",
              !isOpenCollapsible &&
                (state.selectedBrands.length ||
                  state.selectedColors.length ||
                  state.price !== maxPrice)
                ? "block"
                : "hidden"
            )}
          >
            {[...state.selectedBrands].map((brandId) => {
              const selectedBrand = getBrandById(brandId).name;
              return (
                <div
                  key={brandId}
                  onClick={() =>
                    dispatch({
                      type: FILTER_ACTION_TYPES.TOGGLE_BRAND_SELECTION,
                      payload: { brand: brandId },
                    })
                  }
                  className="capitalize flex flex-row items-center justify-baseline gap-x-3 cursor-pointer py-[6px] px-5 bg-gray-800 border border-transparent hover:border-neutral-700 rounded-3xl"
                >
                  <span>{selectedBrand}</span> <CloseSVG className="w-5 h-5" />
                </div>
              );
            })}
            {[...state.selectedColors].map((colorId) => {
              const selectedColor = getColorById(colorId).name;
              return (
                <div
                  key={colorId}
                  onClick={() =>
                    dispatch({
                      type: FILTER_ACTION_TYPES.TOGGLE_COLOR_SELECTION,
                      payload: { color: colorId },
                    })
                  }
                  className="capitalize flex flex-row items-center justify-baseline gap-x-3 cursor-pointer py-[6px] px-5 bg-gray-800 border border-transparent hover:border-neutral-700 rounded-3xl"
                >
                  <span>{selectedColor}</span> <CloseSVG className="w-5 h-5" />
                </div>
              );
            })}
            <span
              className="first:m-0 ml-6 font-semibold cursor-pointer py-6"
              onClick={() =>
                dispatch({
                  type: FILTER_ACTION_TYPES.CLEAR_SELECTION,
                })
              }
            >
              Clear All
            </span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-7 gap-y-10 mt-16">
            {vehicles.map((vehicle) => {
              let isBrandInSelectedBrands = true;
              let isColorInSelectedColors = true;
              let isPriceInPriceRange = true;

              if (state.selectedBrands.length) {
                isBrandInSelectedBrands = state.selectedBrands.includes(
                  vehicle.brand.id
                );
              }

              if (state.selectedColors.length) {
                isColorInSelectedColors = state.selectedColors.includes(
                  vehicle.color.id
                );
              }

              if (state.price !== maxPrice) {
                const retailPrice = vehicle.price.perDay.retailPrice;
                const discountPrice = vehicle.price.perDay.discountPrice;
                const currentPrice = discountPrice
                  ? discountPrice
                  : retailPrice;

                isPriceInPriceRange = state.price >= currentPrice;
              }

              if (
                isBrandInSelectedBrands &&
                isColorInSelectedColors &&
                isPriceInPriceRange
              ) {
                return (
                  <Link key={vehicle.id} to={`/vehicles/${vehicle.slug}`}>
                    <VehicleCard vehicle={vehicle} />
                  </Link>
                );
              }

              return null;
            })}
          </div>
        </Collapsible>
      </section>
    </>
  );
}

export default VehicleGrid;
