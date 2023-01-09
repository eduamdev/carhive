import { FILTER_ACTION_TYPES } from "./filterActionTypes";

import {
  getVehiclesMaxPricePerDay,
  getVehiclesMinPricePerDay,
} from "./lib/vehicles";

const maxPrice = getVehiclesMaxPricePerDay();
const minPrice = getVehiclesMinPricePerDay();

const INITIAL_STATE = {
  selectedBrands: [],
  selectedColors: [],
  price: maxPrice,
  minPrice,
  maxPrice,
};

function filtersReducer(state, action) {
  const { type, payload } = action;

  switch (type) {
    case FILTER_ACTION_TYPES.TOGGLE_BRAND_SELECTION:
      const brandIsSelected = state.selectedBrands.find(
        (currentBrand) => currentBrand === payload.brand
      );
      const updatedBrandSelection = brandIsSelected
        ? state.selectedBrands.filter(
            (currentBrand) => currentBrand !== payload.brand
          )
        : [...state.selectedBrands, payload.brand];

      return {
        ...state,
        selectedBrands: updatedBrandSelection,
      };
    case FILTER_ACTION_TYPES.TOGGLE_COLOR_SELECTION:
      const colorIsSelected = state.selectedColors.find(
        (currentColor) => currentColor === payload.color
      );
      const updatedColorSelection = colorIsSelected
        ? state.selectedColors.filter(
            (currentColor) => currentColor !== payload.color
          )
        : [...state.selectedColors, payload.color];

      return {
        ...state,
        selectedColors: updatedColorSelection,
      };

    case FILTER_ACTION_TYPES.CHANGE_PRICE:
      return {
        ...state,
        price: payload.price,
      };

    case FILTER_ACTION_TYPES.RESET_PRICE:
      return {
        ...state,
        price: INITIAL_STATE.price,
      };

    case FILTER_ACTION_TYPES.CLEAR_SELECTION:
      return INITIAL_STATE;

    default:
      throw new Error(`No case for type ${type} found in filtersReducer`);
  }
}

export { filtersReducer, INITIAL_STATE };
