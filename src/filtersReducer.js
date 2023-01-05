import { FILTER_ACTION_TYPES } from "./filterActionTypes";

const INITIAL_STATE = {
  selectedBrands: [],
  selectedColors: [],
};

function filtersReducer(state, action) {
  const { type, payload } = action;

  switch (type) {
    case FILTER_ACTION_TYPES.TOGGLE_BRAND_SELECTION:
      console.log("TOGGLE_BRAND_SELECTION", payload);

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
      console.log("TOGGLE_COLOR_SELECTION", payload);

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

    default:
      throw new Error(`No case for type ${type} found in filtersReducer`);
  }
}

export { filtersReducer, INITIAL_STATE };
