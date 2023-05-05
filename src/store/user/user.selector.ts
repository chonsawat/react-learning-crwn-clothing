import { createSelector } from "reselect";
import { UserState } from "./user.reducer";
import { AnyAction } from "redux";

export const selectUserReducer = (state: AnyAction): UserState => state.user;

export const selectCurrentUser = createSelector(
  [selectUserReducer],
  (user) => user.currentUser
);
