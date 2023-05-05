import { CATEGORIES_ACTION_TYPES, Category } from "./categories.types";
import { createAction, withMatcher } from "../../utils/reducer/reducer.utils";

// export type FetchCategoriesStart =
//   Action<CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START>;

// export type FetchCategoriesSuccess = ActionWithPayload<
//   CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS,
//   Category[]
// >;

// export type FetchCategoriesFail = ActionWithPayload<
//   CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAIL,
//   Error
// >;

export const fetchCategoriesStart = withMatcher(() =>
  createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START)
);

export const fetchCategoriesSuccess = withMatcher((categories: Category[]) =>
  createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS, categories)
);

export const fetchCategoriesFailed = withMatcher((error: string) =>
  createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAIL, error)
);
