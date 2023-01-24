import { useReducer, useState, useEffect } from "react";
import { filtersReducer, INITIAL_STATE } from "../filtersReducer";
import { FILTER_ACTION_TYPES } from "../filterActionTypes";
import { Link, ScrollRestoration } from "react-router-dom";
import { VehicleCard } from "../components/VehicleCard";
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
import { getBackgroundColorClass } from "../lib/utils";
import { formatNumberAsCurrency } from "../lib/utils";
import {
  getBrands,
  getColors,
  getBrandById,
  getColorById,
  getVehicles,
  getCountSelectedBrands,
  getCountSelectedColors,
  getCountAllSelectedFilters,
} from "../lib/vehicles";

export function VehicleGrid() {
  const [state, dispatch] = useReducer(filtersReducer, INITIAL_STATE);
  const [isOpenCollapsible, setIsOpenCollapsible] = useState(false);
  const [filteredVehicles, setFilteredVehicles] = useState([]);

  const vehicles = getVehicles();
  const brands = getBrands();
  const colors = getColors();

  const isFiltersActive =
    state.selectedBrands.length ||
    state.selectedColors.length ||
    state.price !== state.maxPrice;

  const priceRangeSelected = `${formatNumberAsCurrency(
    state.minPrice
  )} - ${formatNumberAsCurrency(state.price)}`;

  const isBrandSelected = (brand) =>
    state.selectedBrands.find((currentBrand) => currentBrand === brand.id);

  const isColorSelected = (color) =>
    state.selectedColors.find((currentColor) => currentColor === color.id);

  const countSelectedBrands = getCountSelectedBrands(state.selectedBrands);
  const countSelectedColors = getCountSelectedColors(state.selectedColors);
  const countAllSelectedFilters = getCountAllSelectedFilters(
    state.price,
    state.maxPrice,
    state.selectedBrands,
    state.selectedColors
  );
  const countFilteredVehicles = filteredVehicles.length;

  useEffect(() => {
    let tempVehicles = [...vehicles].map((vehicle) => {
      const retailPrice = vehicle.price.perDay.retailPrice;
      const discountPrice = vehicle.price.perDay.discountPrice;
      const currentPrice = discountPrice ? discountPrice : retailPrice;

      vehicle.price.perDay.currentPrice = currentPrice;

      return {
        ...vehicle,
      };
    });

    if (state.selectedBrands.length) {
      tempVehicles = tempVehicles.filter((vehicle) =>
        state.selectedBrands.includes(vehicle.brand.id)
      );
    }

    if (state.selectedColors.length) {
      tempVehicles = tempVehicles.filter((vehicle) =>
        state.selectedColors.includes(vehicle.color.id)
      );
    }

    if (state.price !== state.maxPrice) {
      tempVehicles = tempVehicles.filter(
        (vehicle) => state.price >= vehicle.price.perDay.currentPrice
      );
    }

    setFilteredVehicles(tempVehicles.map((vehicle) => vehicle.id));
  }, [state, vehicles]);

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
                <Link to="/" className="hover:text-white font-bold">
                  Home
                </Link>{" "}
                / <span className="text-slate-400">Vehicles</span>
              </p>
              <h1 className="text-4xl lg:text-5xl font-bold">Find your ride</h1>
              <p
                className={classNames(
                  "mt-3 font-mono",
                  countFilteredVehicles ? "invisible lg:visible" : "invisible"
                )}
              >
                {`${countFilteredVehicles} ${
                  countFilteredVehicles > 1 ? "vehicles" : "vehicle"
                }`}
              </p>
            </div>
            <div className="w-full lg:w-auto flex flex-row items-center justify-between mt-10">
              <CollapsibleTrigger asChild>
                <button className="collapsibleTrigger px-6 py-4 w-48 flex flex-start items-center justify-between border border-neutral-700 rounded-lg">
                  <span>{countAllSelectedFilters}</span>
                  <svg
                    className="collapsibleChevron"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="48"
                      d="m112 184 144 144 144-144"
                    />
                  </svg>
                </button>
              </CollapsibleTrigger>
              <p
                className={classNames(
                  "mt-1 font-mono",
                  countFilteredVehicles ? "block lg:hidden" : "hidden"
                )}
              >
                {`${countFilteredVehicles} ${
                  countFilteredVehicles > 1 ? "vehicles" : "vehicle"
                }`}
              </p>
            </div>
          </div>
          <CollapsibleContent>
            <section id="filters" className="mb-20">
              <div className="grid grid-cols-1 lg:grid-cols-3 items-start gap-x-16 gap-y-10">
                <div>
                  <p className="font-bold text-neutral-100">
                    {`Brand ${countSelectedBrands}`}
                  </p>
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
                            isBrandSelected(brand) ? "" : "border-transparent"
                          )}
                        >
                          {brand.name}
                        </div>
                      );
                    })}
                  </div>
                </div>
                <div>
                  <p className="font-bold text-neutral-100">
                    {`Color ${countSelectedColors}`}
                  </p>
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
                            isColorSelected(color)
                              ? "after:visible"
                              : "after:invisible"
                          )}
                        ></span>
                      );
                    })}
                  </div>
                </div>
                <div>
                  <p className="font-bold text-neutral-100">{`Price per Day ${
                    state.price !== state.maxPrice ? "(1)" : ""
                  }`}</p>
                  <div className="mt-4">
                    <div className="mb-2 flex flex-row items-center justify-between">
                      <p>{formatNumberAsCurrency(state.price)}</p>
                      <p>{formatNumberAsCurrency(state.maxPrice)}</p>
                    </div>
                    <Slider
                      value={[state.price]}
                      onValueChange={(value) =>
                        dispatch({
                          type: FILTER_ACTION_TYPES.CHANGE_PRICE,
                          payload: { price: value[0] },
                        })
                      }
                      max={state.maxPrice}
                      min={state.minPrice}
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

          <section
            id="filters-selected"
            className={classNames(
              "w-full flex flex-row flex-wrap items-center gap-2",
              !isOpenCollapsible && isFiltersActive ? "block" : "hidden"
            )}
          >
            <>
              {state.price !== state.maxPrice && (
                <FilterSelected
                  item={priceRangeSelected}
                  onClick={() =>
                    dispatch({
                      type: FILTER_ACTION_TYPES.RESET_PRICE,
                    })
                  }
                />
              )}
              {[...state.selectedBrands].map((brandId) => {
                const selectedBrand = getBrandById(brandId).name;
                return (
                  <FilterSelected
                    key={brandId}
                    item={selectedBrand}
                    onClick={() =>
                      dispatch({
                        type: FILTER_ACTION_TYPES.TOGGLE_BRAND_SELECTION,
                        payload: { brand: brandId },
                      })
                    }
                  />
                );
              })}
              {[...state.selectedColors].map((colorId) => {
                const selectedColor = getColorById(colorId).name;
                return (
                  <FilterSelected
                    key={colorId}
                    item={selectedColor}
                    onClick={() =>
                      dispatch({
                        type: FILTER_ACTION_TYPES.TOGGLE_COLOR_SELECTION,
                        payload: { color: colorId },
                      })
                    }
                  />
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
            </>
          </section>
          <section
            id="vehicle-grid"
            className={classNames(
              "grid gap-x-8 gap-y-10 mt-16",
              !countFilteredVehicles
                ? "grid-cols-1"
                : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
            )}
          >
            <div
              className={classNames(
                "max-w-3xl mx-auto",
                !countFilteredVehicles ? "block" : "hidden"
              )}
            >
              <p className="bigger text-center">
                No vehicles match your filters.
              </p>
            </div>
            {vehicles.map((vehicle) => {
              if (filteredVehicles.includes(vehicle.id)) {
                return (
                  <Link key={vehicle.id} to={`/vehicles/${vehicle.slug}`}>
                    <VehicleCard vehicle={vehicle} />
                  </Link>
                );
              }

              return null;
            })}
          </section>
        </Collapsible>
      </section>
    </>
  );
}

function FilterSelected({ item, onClick }) {
  return (
    <div
      onClick={onClick}
      className="capitalize flex flex-row items-center justify-baseline gap-x-3 cursor-pointer py-[6px] px-5 bg-gray-800 border border-transparent hover:border-neutral-700 rounded-3xl"
    >
      <span>{item}</span>{" "}
      <svg
        className="w-5 h-5"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
      >
        <path
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="32"
          d="M368 368 144 144m224 0L144 368"
        />
      </svg>
    </div>
  );
}
