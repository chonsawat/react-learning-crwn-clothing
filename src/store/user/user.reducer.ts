import { USER_ACTION_TYPES } from "./user.types";
import { AnyAction } from "redux";
import {
  signInFailed,
  signOutFailed,
  signUpFailed,
  signOutSuccess,
  signInSuccess,
} from "./user.action";
import { UserData } from "../../utils/firebase/firebase.utils";

export type UserState = {
  readonly currentUser: UserData;
  readonly loading: boolean;
  readonly error: string;
};

const USER_INITIAL_STATE = {
  currentUser: null,
  isLoading: false,
  error: null,
};

export const userReducer = (state = USER_INITIAL_STATE, action: AnyAction) => {
  if (signInSuccess.match(action)) {
    return { ...state, currentUser: action.payload };
  }

  if (signOutSuccess.match(action)) {
    return { ...state, currentUser: null };
  }

  if (
    signInFailed.match(action) ||
    signOutFailed.match(action) ||
    signUpFailed.match(action)
  ) {
    return { ...state, error: action.payload };
  }
  return state;
};
