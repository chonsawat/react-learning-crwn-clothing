import { createSelector } from "reselect";
import { CategoryState } from "./category.reducer";
import { AnyAction } from "redux";
import { CategoryMap } from "./category.types";

const selectCategoriesReducer = (state: AnyAction): CategoryState =>
  state.categories;

export const selectCategories = createSelector(
  [selectCategoriesReducer],
  (categoriesSlice) => categoriesSlice.categories
);

export const selectCategoriesMap = createSelector(
  [selectCategories],
  (categories): CategoryMap =>
    categories.reduce((acc, { title, items }) => {
      acc[title.toLowerCase()] = items;
      return acc;
    }, {} as CategoryMap)
);

export const selectCategoriesIsLoad = createSelector(
  [selectCategoriesReducer],
  (categoriesSlice) => categoriesSlice.isLoading
);
